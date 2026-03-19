import { createVoucher, VOUCHER_API_URL, VOUCHER_RETURN_URL } from './backend-api.js';
import { SOAP_OPTIONS } from './maakbon-config.js';
import { WAARDE_TO_API, WENS_TO_VOUCHER_TYPE } from './backend-voucher-mappers.js';

/** Build API payload from form and DOM. Returns FormData (for file upload support). */
function buildVoucherPayload() {
	const form = document.getElementById('flowForm');
	if (!form) return null;

	const deliverySop = document.getElementById('deliverySop')?.value || 'digitaal';
	const sendWhen = document.getElementById('sendWhen')?.value || 'direct';
	const sendDate = document.getElementById('sendDate')?.value || '';
	const flowReden = document.getElementById('flowReden')?.value || 'geslaagd';
	const flowSop = document.getElementById('flowSop')?.value || 'calm';
	const flowWaarde = parseFloat(document.getElementById('flowWaarde')?.value || 15);

	const deliveryOption = document.querySelector('.sop-delivery-option.ring-2, .sop-delivery-option.bg-sky-200');
	const shippingCost = deliveryOption ? parseFloat(deliveryOption.getAttribute('data-price') || 0) : (deliverySop === 'post' ? 2.95 : 0.99);

	const sopIndex = SOAP_OPTIONS.findIndex(o => o.key === flowSop);
	const voucherLayout = sopIndex >= 0 ? sopIndex + 1 : 1;

	const ontvangerVoornaam = (form.querySelector('[name="ontvanger_voornaam"]')?.value || '').trim();
	const receiverName = (document.getElementById('receiver_name_hidden')?.value || document.getElementById('receiver_name')?.value || '').trim();
	const receiverParts = receiverName ? receiverName.split(/\s+/) : [];
	const receiverFirstname = ontvangerVoornaam || receiverParts[0] || '';
	const receiverLastname = receiverParts.length > 1 ? receiverParts.slice(1).join(' ') : '';

	const payload = {
		voucher_type: WENS_TO_VOUCHER_TYPE[flowReden] ?? 1,
		voucher_layout: voucherLayout,
		personal_message: (form.querySelector('[name="persoonlijk_bericht"]')?.value || '').trim() || 'Gefeliciteerd!',
		value: WAARDE_TO_API[flowWaarde] ?? 7.5,
		handling_cost: 0,
		shipping_cost: shippingCost,
		giver_company: '',
		giver_firstname: (form.querySelector('[name="zender_voornaam"]')?.value || '').trim(),
		giver_lastname: '',
		giver_street: '',
		giver_housenumber: '',
		giver_postcode: '',
		giver_city: '',
		giver_country: 'NL',
		giver_email: (form.querySelector('[name="zender_email"]')?.value || '').trim(),
		receiver_company: '',
		receiver_firstname: receiverFirstname || receiverParts[0] || '',
		receiver_lastname: receiverLastname || '',
		receiver_street: (form.querySelector('[name="ontvanger_straat"]')?.value || '').trim(),
		receiver_housenumber: (form.querySelector('[name="ontvanger_huisnummer"]')?.value || '').trim(),
		receiver_postcode: (form.querySelector('[name="ontvanger_postcode"]')?.value || '').trim(),
		receiver_city: (form.querySelector('[name="ontvanger_plaats"]')?.value || '').trim(),
		receiver_country: 'NL',
		receiver_email: (form.querySelector('[name="ontvanger_email"]')?.value || '').trim(),
		preferred_receiving_date: sendWhen === 'datum' && sendDate ? sendDate : '',
		send_type: deliverySop === 'post' ? 1 : 2,
		send_invoice: false,
		return_url: VOUCHER_RETURN_URL
	};

	const fd = new FormData();
	for (const [k, v] of Object.entries(payload)) {
		if (v === '' || v === null || v === undefined) continue;
		// Laravel boolean rule accepts 0/1; FormData stringifies booleans as "true"/"false" which fail validation.
		if (typeof v === 'boolean') fd.append(k, v ? '1' : '0');
		else fd.append(k, String(v));
	}

	const photoInput = document.getElementById('photoUpload');
	if (photoInput?.files?.length) {
		const file = photoInput.files[0];
		if (file && file.type.startsWith('image/')) fd.append('photo', file);
	}

	return fd;
}

/** Wire up btnEmailConfirm to POST voucher and redirect on success. */
export function initBackendVoucherCreate() {
	const btnEmailConfirm = document.getElementById('btnEmailConfirm');
	if (!btnEmailConfirm) return;

	btnEmailConfirm.addEventListener('click', async (e) => {
		e.preventDefault();
		e.stopImmediatePropagation();

		const form = document.getElementById('flowForm');
		if (!form) return;

		// Sync receiver name to hidden field
		const receiverInput = document.getElementById('receiver_name');
		const receiverHidden = document.getElementById('receiver_name_hidden');
		if (receiverHidden && receiverInput) receiverHidden.value = receiverInput.value;

		const formData = buildVoucherPayload();
		if (!formData) return;

		console.log('[Voucher] POST request →', VOUCHER_API_URL);
		console.log('[Voucher] Form data (entries):', Object.fromEntries(formData.entries()));

		const originalText = btnEmailConfirm.innerHTML;
		btnEmailConfirm.disabled = true;
		btnEmailConfirm.innerHTML = 'Bezig... <i class="fa-sharp fa-solid fa-spinner fa-spin ml-2"></i>';

		const result = await createVoucher(formData);

		btnEmailConfirm.disabled = false;
		btnEmailConfirm.innerHTML = originalText;

		if (result.success && result.redirectUrl) {
			console.log('[Voucher] Redirecting to:', result.redirectUrl);
			window.location.href = result.redirectUrl;
		} else {
			console.warn('[Voucher] Request failed:', result.error);
			alert(result.error);
		}
	});
}

