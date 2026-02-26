# Maakbon flow JS

JavaScript for the “maak bon” flow (`flow-new.html`), split into modules for clarity.

| File | Purpose |
|------|--------|
| **maakbon-main.js** | Entry point: DOMContentLoaded, wires Lottie, state, wensen, SOP, steps, receiver input |
| **maakbon-config.js** | `SOAP_OPTIONS` (soap array: soap img, bgColor, preview, lottieOverlay, sound, backgroundName, backgroundMedia), `SECTION2_STEPS`, Lottie URLs |
| **maakbon-lottie.js** | Lottie: load step 3/4 animations, click feedback on `.btn__main` |
| **maakbon-flow.js** | Flow state, `showSection` / `showStepSection2` / `goNext`, `updatePreviews` |
| **maakbon-wensen.js** | Step 1: build wensen options from wensen-config, message counter, wens selection |
| **maakbon-sop.js** | Step 2: SOP choice (preview, arrows, soap click, sound, Voeg toe) |
| **maakbon-steps.js** | Steps 6 (delivery), 7 (send date), 8 (waarde); section 3/6/7 buttons (Bestellen, Factuur) |

Load in HTML with one module script (after lottie + jszip):

```html
<script type="module" src="_assets/maakbon-js/maakbon-main.js"></script>
```
