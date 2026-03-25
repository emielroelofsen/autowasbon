/**
 * Flow form validation (sections 4 and 8) using Just-validate.
 * Inline errors under inputs. Conditional rules: only validate fields in the active section.
 */

import JustValidate from 'just-validate';

function isSectionActive(sectionId) {
	const el = document.getElementById(sectionId);
	return el && el.classList.contains('active');
}

function isPostDelivery() {
	const el = document.getElementById('deliverySop');
	return el && el.value === 'post';
}

/** Return a validator that requires value only when section 4 is active. */
function whenSection4(message = 'Verplicht') {
	return {
		validator: (value) => {
			if (!isSectionActive('section-4')) return true;
			return (value || '').trim().length > 0;
		},
		errorMessage: message
	};
}

/** Return a validator that requires value only when section 4 is active and delivery is post. */
function whenSection4Post(message = 'Verplicht') {
	return {
		validator: (value) => {
			if (!isSectionActive('section-4') || !isPostDelivery()) return true;
			return (value || '').trim().length > 0;
		},
		errorMessage: message
	};
}

/** Email format when section 4 is active. */
function emailWhenSection4(message = 'Vul een geldig e-mailadres in') {
	return {
		validator: (value) => {
			if (!isSectionActive('section-4')) return true;
			const v = (value || '').trim();
			if (v.length === 0) return true; // required is separate
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
		},
		errorMessage: message
	};
}

/** Return a validator that requires value only when section 8 is active. */
function whenSection8(message = 'Verplicht') {
	return {
		validator: (value) => {
			if (!isSectionActive('section-8')) return true;
			return (value || '').trim().length > 0;
		},
		errorMessage: message
	};
}

/** Email format when section 8 is active. */
function emailWhenSection8(message = 'Vul een geldig e-mailadres in') {
	return {
		validator: (value) => {
			if (!isSectionActive('section-8')) return true;
			const v = (value || '').trim();
			if (v.length === 0) return true;
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
		},
		errorMessage: message
	};
}

/**
 * Initialize flow form validation. Uses Just-validate (loaded via script tag).
 * @returns {{ revalidate: () => Promise<boolean> }}
 */
export function initFlowValidation() {
	const form = document.getElementById('flowForm');
	if (!form) return { revalidate: () => Promise.resolve(true) };

	const validator = new JustValidate(form, {
		errorLabelCssClass: 'flow-field-error',
		errorFieldCssClass: 'just-validate-error-field',
		focusInvalidField: true,
		validateBeforeSubmitting: true
	});

	// Section 4: GEGEVENS ONTVANGER
	validator.addField('input[name="ontvanger_voornaam"]', [whenSection4('Vul de voornaam van de ontvanger in')]);
	validator.addField('input[name="ontvanger_email"]', [
		whenSection4('Vul het e-mailadres van de ontvanger in'),
		emailWhenSection4('Vul een geldig e-mailadres in')
	]);
	validator.addField('input[name="ontvanger_straat"]', [whenSection4Post('Vul de straat in')]);
	validator.addField('input[name="ontvanger_huisnummer"]', [whenSection4Post('Vul het huisnummer in')]);
	validator.addField('input[name="ontvanger_postcode"]', [whenSection4Post('Vul de postcode in')]);
	validator.addField('input[name="ontvanger_plaats"]', [whenSection4Post('Vul de plaats in')]);

	// Section 4: JOUW GEGEVENS
	validator.addField('input[name="zender_voornaam"]', [whenSection4('Vul je voornaam in')]);
	validator.addField('input[name="zender_email"]', [
		whenSection4('Vul je e-mailadres in'),
		emailWhenSection4('Vul een geldig e-mailadres in')
	]);

	// Section 8: Factuur (all fields validated when section 8 is active)
	validator.addField('input[name="factuur_voornaam"]', [whenSection8('Vul je voornaam in')]);
	validator.addField('input[name="factuur_email"]', [
		whenSection8('Vul je e-mailadres in'),
		emailWhenSection8('Vul een geldig e-mailadres in')
	]);
	validator.addField('input[name="factuur_straat"]', [whenSection8('Vul de straat in')]);
	validator.addField('input[name="factuur_huisnummer"]', [whenSection8('Vul het huisnummer in')]);
	validator.addField('input[name="factuur_postcode"]', [whenSection8('Vul de postcode in')]);
	validator.addField('input[name="factuur_plaats"]', [whenSection8('Vul de plaats in')]);

	function addIconToErrorLabels() {
		document.querySelectorAll('.flow-field-error.just-validate-error-label').forEach((el) => {
			if (!el.querySelector('i.fa-car-bump')) {
				const icon = document.createElement('i');
				icon.className = 'fa-sharp fa-solid fa-car-bump';
				icon.setAttribute('aria-hidden', 'true');
				el.insertBefore(icon, el.firstChild);
			}
		});
	}

	return {
		revalidate() {
			return validator.revalidate().then((valid) => {
				addIconToErrorLabels();
				return valid;
			});
		}
	};
}
