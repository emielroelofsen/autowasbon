import { fetchVoucher } from './backend-api.js';
import { setDoucheGordijnTextGetter, setNameGetter, USER_MEDIA_GAMMA } from '../_components/carwash-config.js';
import { WENSEN, USER_WENS_LOTTIE_OPTIONS } from '../_components/wensen-config.js';
import { VOUCHER_TYPE_TO_WENS_KEY, normalizeVoucherTypeKey } from './backend-voucher-mappers.js';

function waitForCarwashReady({ timeoutMs = 30000 } = {}) {
	return new Promise((resolve) => {
		const start = Date.now();
		const tick = () => {
			if (window.carwashTextureManager) return resolve(true);
			if (Date.now() - start > timeoutMs) return resolve(false);
			setTimeout(tick, 100);
		};
		window.addEventListener('carwash-ready', () => resolve(true), { once: true });
		tick();
	});
}

function normalizeVoucherValue(raw) {
	if (raw == null) return null;
	if (typeof raw === 'number') return raw;
	const str = String(raw).trim().replace(',', '.');
	const n = Number(str);
	return Number.isFinite(n) ? n : null;
}

function formatEuro(amount) {
	if (amount == null || !Number.isFinite(amount)) return '';
	return '€' + amount.toFixed(2).replace('.', ',');
}

function normalizeDateString(raw) {
	if (!raw) return '';
	const s = String(raw).trim();
	const iso = s.length >= 10 ? s.slice(0, 10) : s;
	const [y, m, d] = iso.split('-');
	if (!y || !m || !d) return s;
	return `${d}-${m}-${y}`;
}

function applyVoucherToCarwashCardBack(voucher) {
	const qrImg = document.getElementById('voucherQrImg');
	const valueEl = document.getElementById('voucherValue');
	const validUntilEl = document.getElementById('voucherValidUntil');
	const codeEl = document.getElementById('voucherCode');
	const barcodeImg = document.getElementById('voucherBarcodeImg');

	const qrUrl = voucher.qr_url || voucher.qr_code_url || voucher.qr || voucher.qr_code;
	if (qrImg && typeof qrUrl === 'string' && qrUrl) qrImg.src = qrUrl;

	const value = normalizeVoucherValue(voucher.value ?? voucher.amount ?? voucher.voucher_value);
	if (valueEl) valueEl.textContent = formatEuro(value) || valueEl.textContent;

	const validUntil = voucher.valid_until || voucher.valid_till || voucher.expires_at || voucher.expiry_date;
	if (validUntilEl) validUntilEl.textContent = normalizeDateString(validUntil) || validUntilEl.textContent;

	const code = voucher.code || voucher.voucher_code || voucher.redemption_code;
	if (codeEl && code) codeEl.textContent = String(code);

	const barcodeUrl = voucher.barcode_url || voucher.barcode;
	if (barcodeImg && typeof barcodeUrl === 'string' && barcodeUrl) barcodeImg.src = barcodeUrl;
}

function applyVoucherToCarwashExperience(voucher) {
	const receiverFirstname = (voucher.receiver_firstname || '').trim();
	const receiverLastname = (voucher.receiver_lastname || '').trim();
	const receiverName = (receiverFirstname + ' ' + receiverLastname).trim() || receiverFirstname || '';
	if (receiverName) setNameGetter(() => receiverName);

	const msg = (voucher.personal_message || voucher.message || '').trim();
	if (msg) setDoucheGordijnTextGetter(() => msg);

	const themeName = (voucher.theme || voucher.soap_theme || voucher.sop_theme || voucher.soap || '').trim();
	if (themeName && typeof window.applyCarwashTheme === 'function') {
		window.applyCarwashTheme(themeName);
	}

	const voucherTypeKey = normalizeVoucherTypeKey(voucher.voucher_type);
	const wensKey = VOUCHER_TYPE_TO_WENS_KEY[voucherTypeKey] || 'uitblinker';
	const wens = WENSEN.find(w => w.key === wensKey);
	const wensLottie = wens?.lottie;
	if (wensLottie && window.carwashTextureManager?.applyLottieTexture) {
		window.carwashTextureManager.applyLottieTexture('user__wens', wensLottie, 'x', { ...USER_WENS_LOTTIE_OPTIONS })
			.catch(err => console.warn('[Carwash] applyLottieTexture user__wens failed:', err));
	}

	const photoUrl = voucher.photo_url || voucher.photo || voucher.photo?.url || voucher.media_url || voucher.image_url;
	if (photoUrl && window.carwashTextureManager?.giveObjectMapping) {
		window.carwashTextureManager.giveObjectMapping('user__media', photoUrl, 'x', {
			stationId: 'message__media',
			depthWrite: false,
			useBasicMaterial: true,
			flipV: true,
			gamma: USER_MEDIA_GAMMA,
			forceReplace: true
		});
	}
}

export async function initBackendBeleving() {
	const voucherId = typeof window !== 'undefined'
		? new URLSearchParams(window.location.search).get('voucher')
		: null;
	if (!voucherId) return;

	const result = await fetchVoucher(voucherId);
	if (!result.success || !result.voucher) {
		if (result.error) alert(result.error);
		return;
	}

	applyVoucherToCarwashCardBack(result.voucher);

	const ready = await waitForCarwashReady({ timeoutMs: 30000 });
	if (!ready) {
		console.warn('[Carwash] Not ready in time; skipped 3D personalization.');
		return;
	}

	applyVoucherToCarwashExperience(result.voucher);

	try {
		const url = new URL(window.location.href);
		url.searchParams.delete('voucher');
		history.replaceState(null, '', url.toString());
	} catch (_) {
		// ignore
	}
}

// Backward-compatible alias for existing entrypoints.
export const initCarwashVoucherView = initBackendBeleving;

