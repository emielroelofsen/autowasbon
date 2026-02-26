/**
 * Maakbon flow – section/step navigation, progress bar, previews.
 * State: currentSection, currentStepSection2, deliveryPrice, waarde, mollieTimer.
 */

import { SECTION2_STEPS, SOAP_OPTIONS } from './maakbon-config.js';
import { loadStep3Lottie, loadStep4Lottie, loadSopPreviewLottie, getStep3LottieAnim, getStep4LottieAnim, getSopPreviewLottieAnim } from './maakbon-lottie.js';

const WENS_BASE = '_assets/_style/_images/_wens/';

export function createFlowState() {
	let currentSection = 1;
	let currentStepSection2 = 1;
	let sopIndex = 0;
	let sopSoapConfirmed = false;
	let deliveryPrice = 0.99;
	let waarde = 15;
	let mollieTimer = null;
	const wensImagesRef = { current: {} };

	const progress = document.getElementById('stepProgress');

	function showSection(sectionNum) {
		currentSection = sectionNum;
		if (mollieTimer) {
			clearInterval(mollieTimer);
			mollieTimer = null;
		}
		document.querySelectorAll('.flow-section').forEach(el => {
			el.classList.toggle('active', parseInt(el.dataset.section, 10) === sectionNum);
		});

		if (sectionNum === 5) {
			const countdownEl = document.getElementById('mollieCountdown');
			let seconds = 5;
			if (countdownEl) countdownEl.textContent = seconds;
			mollieTimer = setInterval(function () {
				seconds--;
				if (countdownEl) countdownEl.textContent = seconds;
				if (seconds <= 0) {
					if (mollieTimer) clearInterval(mollieTimer);
					mollieTimer = null;
					api.showSection(6);
				}
			}, 1000);
		}

		if (sectionNum === 2) {
			document.querySelectorAll('#section-2 .step-panel').forEach(el => {
				el.classList.toggle('active', parseInt(el.dataset.step, 10) === currentStepSection2);
			});
			progress.style.width = (currentStepSection2 / SECTION2_STEPS * 100) + '%';
			updatePreviews();
			return;
		}

		if (sectionNum >= 3) updatePreviews();
	}

	function playLottieForStep(step, opts) {
		// SOP preview Lottie is in panel data-step="3" (Kies sop)
		if (step === 3) {
			sopSoapConfirmed = false;
			if (opts && opts.updateSopSoapState) opts.updateSopSoapState();
			const sopSoundBtn = document.getElementById('sopSound');
			const sopSoundIcon = document.getElementById('sopSoundIcon');
			if (sopSoundBtn) sopSoundBtn.classList.remove('sop-sound-muted');
			if (sopSoundIcon) { sopSoundIcon.classList.remove('fa-volume-off'); sopSoundIcon.classList.add('fa-volume-high'); }
			if (opts && opts.spotifyLoadCurrentPlaylist) opts.spotifyLoadCurrentPlaylist();
			else if (opts && opts.spotifyResume) opts.spotifyResume();
			const soapOpt = SOAP_OPTIONS[sopIndex];
			const lottieUrl = soapOpt && soapOpt.lottieOverlay;
			loadSopPreviewLottie(lottieUrl).then(function (anim) {
				if (anim) { anim.goToAndStop(0, true); anim.play(); }
			});
			return;
		}
		const sopPreview = getSopPreviewLottieAnim();
		if (sopPreview) sopPreview.pause();
		if (opts && opts.spotifyPause) opts.spotifyPause();
		const step3 = getStep3LottieAnim();
		const step4 = getStep4LottieAnim();
		if (step3) step3.pause();
		if (step4) step4.pause();
		// Step 3 Lottie (name card) is in panel data-step="4"
		if (step === 4) {
			loadStep3Lottie().then(function (anim) {
				if (anim) { anim.goToAndStop(0, true); anim.play(); }
			});
		}
		// Step 4 Lottie (message card) is in panel data-step="5"
		if (step === 5) {
			loadStep4Lottie().then(function (anim) {
				if (anim) { anim.goToAndStop(0, true); anim.play(); }
			});
		}
	}

	function showStepSection2(step, opts) {
		currentStepSection2 = step;
		document.querySelectorAll('#section-2 .step-panel').forEach(el => {
			el.classList.toggle('active', parseInt(el.dataset.step, 10) === step);
		});
		progress.style.width = (step / SECTION2_STEPS * 100) + '%';
		updatePreviews();
		// Pause Lotties on steps we're leaving; actual play is done in flow-animations after step-in (so panel is visible)
		if (step !== 3) {
			const sopPreview = getSopPreviewLottieAnim();
			if (sopPreview) sopPreview.pause();
			if (opts && opts.spotifyPause) opts.spotifyPause();
		}
		if (step !== 4 && step !== 5) {
			const step3 = getStep3LottieAnim();
			const step4 = getStep4LottieAnim();
			if (step3) step3.pause();
			if (step4) step4.pause();
		}
	}

	/** Go to section 2 and show a specific step (1–9). Use for "Edit" from step 7 summary. */
	function editStep(step) {
		const s = Math.max(1, Math.min(Number(step), SECTION2_STEPS));
		api.showSection(2);
		api.showStepSection2(s, optsRef.current);
	}

	function goNext() {
		if (currentSection === 1) {
			api.showSection(2);
			api.showStepSection2(1, optsRef.current);
			return;
		}
		if (currentSection === 2) {
			if (currentStepSection2 < SECTION2_STEPS) {
				api.showStepSection2(currentStepSection2 + 1, optsRef.current);
			} else {
				api.showSection(4);
				updatePreviews();
			}
			return;
		}
		if (currentSection < 7) {
			api.showSection(currentSection + 1);
		}
	}

	function updatePreviews() {
		const receiver = document.getElementById('receiver_name').value || '-';
		const redenKey = document.getElementById('flowReden').value;
		const sopKey = document.getElementById('flowSop').value;
		const sop = sopKey ? SOAP_OPTIONS.find(o => o.key === sopKey) : SOAP_OPTIONS[sopIndex];
		const total = (waarde + deliveryPrice).toFixed(2).replace('.', ',');

		document.querySelectorAll('#previewTotal').forEach(el => { if (el) el.textContent = '€' + total; });
		document.querySelectorAll('#flowPreviewBg, #confirmPreviewBg, #summaryPreviewImg, #factuurPreviewImg').forEach(el => { if (el && sop) el.src = sop.preview; });
		const nameboogImg = document.getElementById('background__cardname_img');
		if (nameboogImg && sop) nameboogImg.src = sop.backgroundName || '_assets/_style/_images/_nameboog/background__name--' + sop.key + '.png';
		const mediaBgImg = document.getElementById('background__media_img');
		if (mediaBgImg && sop) mediaBgImg.src = sop.backgroundMedia || '_assets/_style/_images/_mediaboog/background__photo--' + sop.key + '.png';
		const wensImages = wensImagesRef.current || {};
		document.querySelectorAll('#flowPreviewWens, #confirmPreviewWens').forEach(el => {
			if (el) el.src = redenKey && wensImages[redenKey] ? WENS_BASE + wensImages[redenKey] : '';
		});
		const wensBtn = document.querySelector('.wasbon-wens-btn.selected');
		const wensName = wensBtn ? wensBtn.getAttribute('data-name') : '-';
		const summaryName = document.getElementById('summaryName');
		const summaryType = document.getElementById('summaryType');
		const flowPreviewName = document.getElementById('flowPreviewName');
		if (summaryName) summaryName.textContent = receiver;
		if (flowPreviewName) flowPreviewName.textContent = receiver;
		if (summaryType) summaryType.textContent = wensName;
		const waardeEl = document.getElementById('flowWaarde');
		const summaryWaarde = document.getElementById('summaryWaarde');
		if (waardeEl && summaryWaarde) summaryWaarde.textContent = '€' + waardeEl.value;

		// Step 7 summary panel: card backgrounds, wens, soap, name boog, bericht, media boog, waarde
		const step7Cards = document.querySelectorAll('.step7-dynamic-bg');
		const step7WensImg = document.getElementById('step7WensImg');
		const step7SoapImg = document.getElementById('step7SoapImg');
		const step7NameBoogImg = document.getElementById('step7NameBoogImg');
		const step7BerichtImg = document.getElementById('step7BerichtImg');
		const step7MediaBoogImg = document.getElementById('step7MediaBoogImg');
		const step7MediaPreview = document.getElementById('step7MediaPreview');
		const step7Waarde = document.getElementById('step7Waarde');
		const step7NameText = document.getElementById('step7NameText');
		const step7BerichtText = document.getElementById('step7BerichtText');
		const mainMediaPreview = document.getElementById('media__upload--preview');
		if (step7NameText) step7NameText.textContent = (receiver && receiver !== '-') ? receiver : 'Naam';
		if (step7BerichtText) step7BerichtText.textContent = (document.getElementById('persoonlijk_bericht')?.value || '').trim();
		if (sop && step7Cards.length) {
			const bg = sop.bgColor || '#89b7f9';
			step7Cards.forEach(el => { el.style.backgroundColor = bg; });
		}
		if (step7WensImg) {
			const wensImages = wensImagesRef.current || {};
			const wensFile = redenKey && wensImages[redenKey] ? WENS_BASE + wensImages[redenKey] : WENS_BASE + 'wens__uitblinker.png';
			step7WensImg.src = wensFile;
			step7WensImg.alt = document.querySelector('.wasbon-wens-btn.selected')?.getAttribute('data-name') || '';
		}
		if (step7SoapImg && sop) step7SoapImg.src = sop.soap;
		if (step7NameBoogImg && sop) step7NameBoogImg.src = sop.backgroundName || '_assets/_style/_images/_nameboog/background__name--' + sop.key + '.png';
		if (step7MediaBoogImg && sop) step7MediaBoogImg.src = sop.backgroundMedia || '_assets/_style/_images/_mediaboog/background__photo--' + sop.key + '.png';
		if (step7MediaPreview && mainMediaPreview) step7MediaPreview.src = mainMediaPreview.src || step7MediaPreview.src;
		if (step7Waarde && waardeEl) step7Waarde.textContent = '€' + String(waardeEl.value).replace('.', ',');
	}

	const optsRef = { current: null };

	const api = {
		get currentSection() { return currentSection; },
		get currentStepSection2() { return currentStepSection2; },
		get sopIndex() { return sopIndex; },
		set sopIndex(v) { sopIndex = v; },
		get sopSoapConfirmed() { return sopSoapConfirmed; },
		set sopSoapConfirmed(v) { sopSoapConfirmed = v; },
		get deliveryPrice() { return deliveryPrice; },
		set deliveryPrice(v) { deliveryPrice = v; },
		get waarde() { return waarde; },
		set waarde(v) { waarde = v; },
		get progressEl() { return progress; },
		showSection,
		showStepSection2,
		editStep,
		playLottieForStep,
		goNext,
		updatePreviews,
		setStep2Opts(o) { optsRef.current = o; },
		setWensImages(imgs) { wensImagesRef.current = imgs; }
	};
	return api;
}
