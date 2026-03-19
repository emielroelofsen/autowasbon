/** Map wens key (flowReden) to VoucherType enum value. */
export const WENS_TO_VOUCHER_TYPE = {
	geslaagd: 1, sorry: 2, uitblinker: 3, nieuweauto: 4, oldtimer: 5,
	goedgekeurd: 6, dankjewel: 7, spetter: 8, glashelder: 9, zomaar: 10
};

/** Reverse map: VoucherType enum value -> wens key. */
export const VOUCHER_TYPE_TO_WENS_KEY = Object.entries(WENS_TO_VOUCHER_TYPE).reduce((acc, [key, val]) => {
	acc[String(val)] = key;
	return acc;
}, {});

/** Map flowWaarde (15|17.5|20) to API value (7.5|10|15). */
export const WAARDE_TO_API = { 15: 7.5, 17.5: 10, 20: 15 };

/** Accept enum object ({ value }) or primitive and normalize to string key. */
export function normalizeVoucherTypeKey(voucherType) {
	const raw = voucherType && typeof voucherType === 'object' && 'value' in voucherType
		? voucherType.value
		: voucherType;
	return String(raw ?? '');
}

/** Accept enum object ({ value }) or primitive and return numeric value when possible. */
export function normalizeVoucherTypeNumber(voucherType) {
	const raw = voucherType && typeof voucherType === 'object' && 'value' in voucherType
		? voucherType.value
		: voucherType;
	const n = Number(raw);
	return Number.isFinite(n) ? n : null;
}

