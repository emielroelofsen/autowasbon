/**
 * Maakbon flow – step 1: reden/wensen options and message counter.
 * Populates flowWensOptions from wensen-config; handles wens selection and placeholder.
 */

import { WENSEN, DEFAULT_PLACEHOLDER } from '../_components/wensen-config.js';

const WENS_BASE = '_assets/_style/_images/_wens/';

export function buildWensLookup(wensen) {
	const WENS_PLACEHOLDERS = {};
	const WENS_IMAGES = {};
	wensen.forEach(w => { WENS_PLACEHOLDERS[w.key] = DEFAULT_PLACEHOLDER; });
	wensen.forEach(w => { WENS_IMAGES[w.key] = 'wens__' + w.key + '.png'; });
	return { WENS_PLACEHOLDERS, WENS_IMAGES };
}

export function initWensen(state) {
	const { WENS_PLACEHOLDERS, WENS_IMAGES } = buildWensLookup(WENSEN);

	const flowWensContainer = document.getElementById('flowWensOptions');
	flowWensContainer.innerHTML = WENSEN.map(w => {
		return '<button type="button" class="wasbon-wens-btn border-2 border-white/30 rounded-xl bg-white/10 hover:border-white/60 transition-colors text-left" data-wens="' + w.key + '" data-name="' + (w.name || '').replace(/"/g, '&quot;') + '">' +
			'<img src="' + w.thumbnail + '" alt="' + (w.alt || '').replace(/"/g, '&quot;') + '" class="wasbon-wens-image object-contain max-h-[144px]">' +
			'</button>';
	}).join('');

	const berichtEl = document.getElementById('persoonlijk_bericht');
	if (berichtEl) berichtEl.placeholder = DEFAULT_PLACEHOLDER;

	function updatePersoonlijkBerichtCounter() {
		const el = document.getElementById('persoonlijk_bericht');
		const counter = document.getElementById('persoonlijk_bericht_counter');
		if (el && counter) counter.textContent = el.value.length + '/160';
	}
	berichtEl.addEventListener('input', updatePersoonlijkBerichtCounter);
	updatePersoonlijkBerichtCounter();

	document.querySelectorAll('.wasbon-wens-btn').forEach(btn => {
		btn.addEventListener('click', function () {
			document.querySelectorAll('.wasbon-wens-btn').forEach(b => b.classList.remove('selected', 'border-[#FACC15]'));
			this.classList.add('selected', 'border-[#FACC15]');
			const key = this.getAttribute('data-wens');
			document.getElementById('flowReden').value = key;
			const placeholder = WENS_PLACEHOLDERS[key] || DEFAULT_PLACEHOLDER;
			if (berichtEl) berichtEl.placeholder = placeholder;
			state.updatePreviews();
			state.goNext();
		});
	});
	if (state.setWensImages) state.setWensImages(WENS_IMAGES);
	return { WENS_IMAGES, WENS_PLACEHOLDERS };
}
