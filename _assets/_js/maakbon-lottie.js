/**
 * Maakbon flow – Lottie loading (step 3/4) and click feedback on .btn__main.
 * Depends: lottie-web, JSZip (global); maakbon-config for URLs.
 */

import { STEP3_LOTTIE_URL, STEP4_LOTTIE_URL, CLICK_LOTTIE_URL, CLICK_LOTTIE_DURATION_MS } from './maakbon-config.js';

let step3LottieAnim = null;
let step4LottieAnim = null;
let sopPreviewLottieAnim = null;
let cachedClickLottieData = null;

async function parseLottieFromBlob(blob, text) {
	try {
		const parsed = JSON.parse(text);
		if (parsed && (parsed.layers || parsed.assets || parsed.fr !== undefined)) return parsed;
	} catch (e) { /* not JSON */ }
	if (typeof JSZip === 'undefined') return null;
	const zip = await JSZip.loadAsync(blob);
	const names = ['data.json', 'animation.json', 'comp.json'];
	for (const n of names) {
		if (zip.files[n] && !zip.files[n].dir) {
			const json = await zip.files[n].async('string');
			const parsed = JSON.parse(json);
			if (parsed && (parsed.layers || parsed.assets || parsed.fr !== undefined)) return parsed;
		}
	}
	for (const path of Object.keys(zip.files)) {
		if (path.endsWith('.json') && !zip.files[path].dir) {
			const json = await zip.files[path].async('string');
			const parsed = JSON.parse(json);
			if (parsed && (parsed.layers || parsed.assets || parsed.fr !== undefined)) return parsed;
		}
	}
	return null;
}

function ensureStretch(container) {
	const svg = container.querySelector('svg');
	if (svg) {
		svg.setAttribute('preserveAspectRatio', 'none');
		svg.style.width = '100%';
		svg.style.height = '100%';
	}
}

/** Keep Lottie aspect ratio (fit inside container, centered). */
function ensureMeet(container) {
	const svg = container.querySelector('svg');
	if (svg) {
		svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
		svg.style.width = '100%';
		svg.style.height = '100%';
		svg.style.objectFit = 'contain';
	}
}

export async function loadStep3Lottie() {
	const container = document.getElementById('step3LottieContainer');
	if (!container || step3LottieAnim) return step3LottieAnim;
	if (typeof lottie === 'undefined' || typeof JSZip === 'undefined') return null;
	try {
		const response = await fetch(STEP3_LOTTIE_URL);
		if (!response.ok) throw new Error('Failed to fetch Lottie');
		const blob = await response.blob();
		const text = await blob.text();
		let animationData = await parseLottieFromBlob(blob, text);
		if (!animationData) throw new Error('No animation JSON in .lottie');
		if (!animationData.layers) animationData.layers = [];
		if (!animationData.assets) animationData.assets = [];
		if (animationData.fr === undefined) animationData.fr = 30;
		const animConfig = { container: container, renderer: 'svg', loop: true, autoplay: false, animationData: animationData };
		step3LottieAnim = lottie.loadAnimation(animConfig);
		step3LottieAnim.addEventListener('DOMLoaded', () => ensureStretch(container));
		step3LottieAnim.addEventListener('data_ready', () => ensureStretch(container));
		setTimeout(() => ensureStretch(container), 150);
		return step3LottieAnim;
	} catch (err) {
		console.warn('Step 3 Lottie load failed:', err);
		return null;
	}
}

export async function loadStep4Lottie() {
	const container = document.getElementById('step4LottieContainer');
	if (!container || step4LottieAnim) return step4LottieAnim;
	if (typeof lottie === 'undefined' || typeof JSZip === 'undefined') return null;
	try {
		const response = await fetch(STEP4_LOTTIE_URL);
		if (!response.ok) throw new Error('Failed to fetch Lottie');
		const blob = await response.blob();
		const text = await blob.text();
		let animationData = await parseLottieFromBlob(blob, text);
		if (!animationData) throw new Error('No animation JSON in .lottie');
		if (!animationData.layers) animationData.layers = [];
		if (!animationData.assets) animationData.assets = [];
		if (animationData.fr === undefined) animationData.fr = 30;
		const animConfig = { container: container, renderer: 'svg', loop: true, autoplay: false, animationData: animationData };
		step4LottieAnim = lottie.loadAnimation(animConfig);
		step4LottieAnim.addEventListener('DOMLoaded', () => ensureStretch(container));
		step4LottieAnim.addEventListener('data_ready', () => ensureStretch(container));
		setTimeout(() => ensureStretch(container), 150);
		return step4LottieAnim;
	} catch (err) {
		console.warn('Step 4 Lottie load failed:', err);
		return null;
	}
}

export function getStep3LottieAnim() { return step3LottieAnim; }
export function getStep4LottieAnim() { return step4LottieAnim; }

let sopPreviewLottieCurrentUrl = null;

/** Load (or switch) SOP preview overlay Lottie by URL. Keeps aspect ratio. Destroys previous if URL changes. */
export async function loadSopPreviewLottie(lottieUrl) {
	const container = document.getElementById('sopPreviewLottieContainer');
	if (!container || typeof lottie === 'undefined' || typeof JSZip === 'undefined') return null;
	if (!lottieUrl) {
		if (sopPreviewLottieAnim) {
			try { sopPreviewLottieAnim.destroy(); } catch (e) {}
			sopPreviewLottieAnim = null;
			sopPreviewLottieCurrentUrl = null;
		}
		return null;
	}
	if (sopPreviewLottieCurrentUrl === lottieUrl && sopPreviewLottieAnim) return sopPreviewLottieAnim;
	if (sopPreviewLottieAnim) {
		try { sopPreviewLottieAnim.destroy(); } catch (e) {}
		sopPreviewLottieAnim = null;
		sopPreviewLottieCurrentUrl = null;
	}
	try {
		const response = await fetch(lottieUrl);
		if (!response.ok) throw new Error('Failed to fetch Lottie');
		const blob = await response.blob();
		const text = await blob.text();
		let animationData = await parseLottieFromBlob(blob, text);
		if (!animationData) throw new Error('No animation JSON in .lottie');
		if (!animationData.layers) animationData.layers = [];
		if (!animationData.assets) animationData.assets = [];
		if (animationData.fr === undefined) animationData.fr = 30;
		container.innerHTML = '';
		const animConfig = { container: container, renderer: 'svg', loop: true, autoplay: false, animationData: animationData };
		sopPreviewLottieAnim = lottie.loadAnimation(animConfig);
		sopPreviewLottieCurrentUrl = lottieUrl;
		sopPreviewLottieAnim.addEventListener('DOMLoaded', () => ensureMeet(container));
		sopPreviewLottieAnim.addEventListener('data_ready', () => ensureMeet(container));
		setTimeout(() => ensureMeet(container), 150);
		return sopPreviewLottieAnim;
	} catch (err) {
		console.warn('SOP preview Lottie load failed:', err);
		return null;
	}
}

export function getSopPreviewLottieAnim() { return sopPreviewLottieAnim; }

export async function loadClickLottieData() {
	if (cachedClickLottieData) return cachedClickLottieData;
	if (typeof lottie === 'undefined' || typeof JSZip === 'undefined') return null;
	try {
		const response = await fetch(CLICK_LOTTIE_URL);
		if (!response.ok) throw new Error('Failed to fetch');
		const blob = await response.blob();
		const text = await blob.text();
		let animationData = await parseLottieFromBlob(blob, text);
		if (!animationData) throw new Error('No animation JSON');
		if (!animationData.layers) animationData.layers = [];
		if (!animationData.assets) animationData.assets = [];
		if (animationData.fr === undefined) animationData.fr = 30;
		cachedClickLottieData = animationData;
		return animationData;
	} catch (err) {
		console.warn('Click Lottie load failed:', err);
		return null;
	}
}

export function playClickLottieAt(clientX, clientY, callback) {
	const size = 300;
	const container = document.createElement('div');
	container.className = 'lottie-click-feedback';
	container.style.cssText = 'position:fixed;left:' + (clientX - size / 2) + 'px;top:' + (clientY - size / 2) + 'px;width:' + size + 'px;height:' + size + 'px;z-index:99999;pointer-events:none;';
	document.body.appendChild(container);

	loadClickLottieData().then(function (animationData) {
		if (!animationData || typeof lottie === 'undefined') {
			container.remove();
			callback();
			return;
		}
		const anim = lottie.loadAnimation({
			container: container,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			animationData: animationData
		});
		setTimeout(function () {
			try { anim.destroy(); } catch (e) {}
			container.remove();
			callback();
		}, CLICK_LOTTIE_DURATION_MS);
	}).catch(function () {
		container.remove();
		callback();
	});
}

let _lottieThenClick = false;

/** Call from main after DOM ready to attach click feedback on .btn__main */
export function initLottieClickFeedback() {
	document.addEventListener('click', function (e) {
		const btn = e.target.closest('.btn__main');
		if (!btn || btn.disabled) return;
		if (_lottieThenClick) {
			_lottieThenClick = false;
			return;
		}
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		const target = btn;
		const x = e.clientX;
		const y = e.clientY;
		playClickLottieAt(x, y, function () {
			_lottieThenClick = true;
			target.click();
		});
	}, true);
}
