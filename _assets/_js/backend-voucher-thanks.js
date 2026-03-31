import { fetchVoucher } from './backend-api.js';
import { SOAP_OPTIONS } from './maakbon-config.js';
import { VOUCHER_TYPE_TO_WENS_KEY, normalizeVoucherTypeKey } from './backend-voucher-mappers.js';

const WENS_BASE = '_assets/_style/_images/_wens/';

function activateSection7() {
	document.querySelectorAll('.flow-section').forEach(el => el.classList.remove('active'));
	const section7 = document.getElementById('section-7') || document.querySelector('.flow-section[data-section="7"]');
	if (section7) {
		section7.classList.add('active');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}

function pickSopForVoucherLayout(voucherLayout) {
	const raw = voucherLayout && typeof voucherLayout === 'object' && 'value' in voucherLayout
		? voucherLayout.value
		: voucherLayout;
	const n = Number(raw);
	if (!Number.isInteger(n) || n < 1 || n > SOAP_OPTIONS.length) return SOAP_OPTIONS[0];
	return SOAP_OPTIONS[n - 1];
}

function applyVoucherToSection7(voucher) {
	if (!voucher || typeof voucher !== 'object') return;

	// Recipient tag
	const receiverFirstname = (voucher.receiver_firstname || '').trim();
	const receiverLastname = (voucher.receiver_lastname || '').trim();
	const receiverName = (receiverFirstname + ' ' + receiverLastname).trim() || receiverFirstname || 'Naam';
	const confirmRecipientTag = document.getElementById('confirmRecipientTag');
	if (confirmRecipientTag) confirmRecipientTag.textContent = receiverName;

	// Keep inputs in sync if present (useful for later invoice flow)
	const receiverInput = document.getElementById('receiver_name');
	const receiverHidden = document.getElementById('receiver_name_hidden');
	if (receiverInput && receiverName) receiverInput.value = receiverName;
	if (receiverHidden && receiverName) receiverHidden.value = receiverName;

	// SOP background (based on voucher_layout)
	const sop = pickSopForVoucherLayout(voucher.voucher_layout);
	const confirmPreviewBg = document.getElementById('confirmPreviewBg');
	if (confirmPreviewBg && sop?.preview) confirmPreviewBg.src = sop.preview;

	// Wens image (based on voucher_type)
	const voucherTypeKey = normalizeVoucherTypeKey(voucher.voucher_type);
	const wensKey = VOUCHER_TYPE_TO_WENS_KEY[voucherTypeKey] || 'uitblinker';
	const confirmPreviewWens = document.getElementById('confirmPreviewWens');
	if (confirmPreviewWens) {
		confirmPreviewWens.src = WENS_BASE + `wens__${wensKey}.png`;
		confirmPreviewWens.alt = wensKey;
	}

	// Send message (scheduled vs direct)
	const msgEl = document.getElementById('confirmSendMessage');
	const preferredDate = (voucher.preferred_receiving_date || '').trim();
	if (msgEl) {
		if (preferredDate) msgEl.textContent = 'Yes! Je autowasbon is ingepland voor verzending!';
		else msgEl.textContent = 'YES! JOUW AUTOWASBON VERSTUURD EN KLAAR VOOR GEBRUIK!';
	}
}

export async function initBackendVoucherThanks() {
	const voucherId = typeof window !== 'undefined'
		? new URLSearchParams(window.location.search).get('voucher')
		: null;
	if (!voucherId) return;

	try {
		const result = await fetchVoucher(voucherId);
		if (result.success && result.voucher) {
			applyVoucherToSection7(result.voucher);
			activateSection7();

			// Clean URL (remove voucher id from address bar)
			try {
				const url = new URL(window.location.href);
				url.searchParams.delete('voucher');
				history.replaceState(null, '', url.toString());
			} catch (_) {
				// ignore URL parse errors
			}
		} else if (result.error) {
			alert(result.error);
		}
	} catch (err) {
		console.error('[Voucher] Return flow error:', err);
	}
}

