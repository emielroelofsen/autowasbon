/**
 * Flow animations – GSAP-driven section and step transitions.
 * Elements appear one by one; sections and steps animate in/out.
 */

import { gsap } from 'gsap';

const DUR_OUT = 0.35;
const DUR_IN = 0.4;
const STAGGER = 0.08;
const EASE_OUT = 'power2.out';
const EASE_IN = 'power2.out';

/**
 * Section 1 hero elements (in order).
 */
function getSection1Elements(section) {
	if (!section) return [];
	return [
		section.querySelector('.title__wash--logo'),
		section.querySelector('.title__wash--water'),
		section.querySelector('.section__title'),
		section.querySelector('img[src*="hero--hand"]'),
		section.querySelector('#btnStart')
	].filter(Boolean);
}

/**
 * Get animatable children for a section or step panel.
 */
function getAnimatableChildren(container) {
	if (!container) return [];
	const direct = Array.from(container.children).filter(el => el.nodeType === 1);
	return direct;
}

/**
 * Animate section 1 elements in one by one on load.
 */
function animateSection1In(section) {
	const els = getSection1Elements(section);
	if (els.length === 0) return;
	gsap.set(els, { opacity: 0, y: 24 });
	gsap.to(els, {
		opacity: 1,
		y: 0,
		duration: DUR_IN,
		stagger: STAGGER,
		ease: EASE_IN,
		overwrite: true
	});
}

/**
 * Animate a section or step panel out (fade + slide).
 */
function animateOut(container, onComplete) {
	if (!container) {
		onComplete?.();
		return;
	}
	const children = getAnimatableChildren(container);
	const targets = children.length > 0 ? children : [container];
	gsap.to(targets, {
		opacity: 0,
		y: -20,
		duration: DUR_OUT,
		stagger: 0.03,
		ease: EASE_OUT,
		onComplete
	});
}

/**
 * Animate a section or step panel in.
 */
function animateIn(container) {
	if (!container) return;
	const children = getAnimatableChildren(container);
	const targets = children.length > 0 ? children : [container];
	gsap.set(targets, { opacity: 0, y: 24 });
	gsap.to(targets, {
		opacity: 1,
		y: 0,
		duration: DUR_IN,
		stagger: STAGGER,
		ease: EASE_IN,
		overwrite: true
	});
}

/**
 * Animate a step panel in (section 2). Optional onComplete when animation finishes (step is visible).
 */
function animateStepIn(panel, onComplete) {
	if (!panel) {
		onComplete?.();
		return;
	}
	const children = getAnimatableChildren(panel);
	const targets = children.length > 0 ? children : [panel];
	gsap.set(targets, { opacity: 0, y: 24 });
	gsap.to(targets, {
		opacity: 1,
		y: 0,
		duration: DUR_IN,
		stagger: STAGGER,
		ease: EASE_IN,
		overwrite: true,
		onComplete
	});
}

/**
 * Get current active section.
 */
function getActiveSection() {
	return document.querySelector('.flow-section.active');
}

/**
 * Get section by number.
 */
function getSection(num) {
	return document.querySelector(`.flow-section[data-section="${num}"]`);
}

/**
 * Get current active step panel.
 */
function getActiveStepPanel() {
	return document.querySelector('#section-2 .step-panel.active');
}

/**
 * Get step panel by number.
 */
function getStepPanel(step) {
	return document.querySelector(`#section-2 .step-panel[data-step="${step}"]`);
}

/**
 * Wrap flow state with GSAP animations.
 */
export function initFlowAnimations(state) {
	const originalShowSection = state.showSection.bind(state);
	const originalShowStepSection2 = state.showStepSection2.bind(state);

	state.showSection = function (sectionNum) {
		const prevSection = getActiveSection();
		const prevNum = prevSection ? parseInt(prevSection.dataset.section, 10) : 0;

		if (prevSection && sectionNum !== prevNum) {
			animateOut(prevSection, () => {
				originalShowSection(sectionNum);
				const next = getSection(sectionNum);
				if (sectionNum === 1) {
					animateSection1In(next);
				} else if (sectionNum === 2) {
					const progress = document.getElementById('section2ProgressBar');
					const stepPanel = getActiveStepPanel();
					if (progress) gsap.fromTo(progress, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: DUR_IN, ease: EASE_IN });
					animateStepIn(stepPanel);
				} else {
					animateIn(next);
				}
			});
		} else {
			originalShowSection(sectionNum);
			const next = getSection(sectionNum);
			if (sectionNum === 1) {
				animateSection1In(next);
			} else if (sectionNum === 2) {
				const progress = document.getElementById('section2ProgressBar');
				const stepPanel = getActiveStepPanel();
				if (progress) gsap.fromTo(progress, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: DUR_IN, ease: EASE_IN });
				animateStepIn(stepPanel);
			} else {
				animateIn(next);
			}
		}
	};

	state.showStepSection2 = function (step, opts) {
		const prevPanel = getActiveStepPanel();
		const nextPanel = getStepPanel(step);

		function onStepVisible() {
			state.playLottieForStep(step, opts);
		}

		if (prevPanel && nextPanel && prevPanel !== nextPanel) {
			animateOut(prevPanel, () => {
				originalShowStepSection2(step, opts);
				animateStepIn(nextPanel, onStepVisible);
			});
		} else {
			originalShowStepSection2(step, opts);
			animateStepIn(nextPanel, onStepVisible);
		}
	};

	// Initial section 1 animation
	const s1 = getSection(1);
	if (s1 && s1.classList.contains('active')) {
		animateSection1In(s1);
	}
}
