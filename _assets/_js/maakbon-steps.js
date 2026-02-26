/**
 * Maakbon flow – steps 6 (delivery), 7 (send date), 8 (waarde); section 3/6/7 buttons.
 */

export function initSteps(state) {
	// Step 6: delivery
	document.querySelectorAll('.sop-delivery-option').forEach(btn => {
		btn.addEventListener('click', function () {
			const isPost = this.classList.contains('delivery-post-option');
			document.querySelectorAll('.sop-delivery-option').forEach(b => b.classList.remove('ring-2', 'ring-[#FACC15]', 'bg-sky-200'));
			this.classList.add('ring-2', 'ring-[#FACC15]', 'bg-sky-200');
			document.getElementById('deliverySop').value = this.getAttribute('data-sop');
			state.deliveryPrice = parseFloat(this.getAttribute('data-price'));
			if (isPost) this.classList.add('delivery-post--expanded');
		});
	});

	// Step 7: send when
	document.querySelectorAll('.send-date-option').forEach(btn => {
		btn.addEventListener('click', function () {
			document.querySelectorAll('.send-date-option').forEach(b => b.classList.remove('ring-2', 'ring-[#FACC15]', 'bg-sky-200'));
			this.classList.add('ring-2', 'ring-[#FACC15]', 'bg-sky-200');
			const sendMode = this.getAttribute('data-send');
			document.getElementById('sendWhen').value = sendMode;
			const expandEl = this.querySelector('.send-date-expand');
			if (expandEl) {
				if (sendMode === 'datum') {
					expandEl.classList.add('send-date-expand--open');
				} else {
					expandEl.classList.remove('send-date-expand--open');
				}
			}
			document.querySelectorAll('.send-date-option').forEach(b => {
				const ex = b.querySelector('.send-date-expand');
				if (ex && b !== this) ex.classList.remove('send-date-expand--open');
			});
		});
	});

	document.querySelector('.send-step-next')?.addEventListener('click', function () {
		const sendWhen = document.getElementById('sendWhen').value;
		if (sendWhen === 'datum') {
			const dd = document.getElementById('sendDateDay').value.trim();
			const mm = document.getElementById('sendDateMonth').value.trim();
			const yyyy = document.getElementById('sendDateYear').value.trim();
			if (!dd || !mm || !yyyy) {
				alert('Vul de volledige verzenddatum in (dd / mm / jjjj).');
				return;
			}
			const day = parseInt(dd, 10);
			const month = parseInt(mm, 10);
			const year = parseInt(yyyy, 10);
			if (day < 1 || day > 31 || month < 1 || month > 12 || year < 2025 || year > 2030) {
				alert('Controleer de datum (dag 1–31, maand 1–12, jaar 2025–2030).');
				return;
			}
			document.getElementById('sendDate').value = year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
		} else {
			document.getElementById('sendDate').value = '';
		}
		state.goNext();
	});

	// Step 8: waarde
	document.querySelectorAll('.waarde-option').forEach(btn => {
		btn.addEventListener('click', function () {
			document.querySelectorAll('.waarde-option').forEach(b => b.classList.remove('ring-2', 'ring-[#FACC15]'));
			this.classList.add('ring-2', 'ring-[#FACC15]');
			state.waarde = parseFloat(this.getAttribute('data-waarde'));
			document.getElementById('flowWaarde').value = state.waarde;
			state.goNext();
		});
	});
	document.querySelector('.waarde-option[data-waarde="15"]')?.classList.add('ring-2', 'ring-[#FACC15]');

	// Section 3: Bestellen -> Section 4
	document.getElementById('btnBestellen')?.addEventListener('click', () => state.showSection(4));

	// Section 6: Factuur nodig -> Section 7
	document.getElementById('linkFactuur')?.addEventListener('click', function (e) {
		e.preventDefault();
		state.showSection(7);
	});
}
