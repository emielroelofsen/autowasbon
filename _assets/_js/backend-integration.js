/**
 * Backend integration – bridge between frontend form/DOM and backend API.
 * Compatibility entrypoint that orchestrates page-specific backend modules.
 */

import { initBackendVoucherCreate } from './backend-voucher-create.js';
import { initBackendVoucherThanks } from './backend-voucher-thanks.js';

/** Backward-compatible initializer used by flow-new entrypoint. */
export function initBackendIntegration() {
	void initBackendVoucherThanks();
	initBackendVoucherCreate();
}
