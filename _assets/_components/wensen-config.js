/**
 * Wensen (wishes) configuration for maak-bon.
 * Add or remove entries to change available wensen.
 * Each wens needs: key, name, thumbnail, lottie, alt
 */
const DEFAULT_LOTTIE_URL = 'https://lottie.host/f1d0e197-55d8-4b0c-8670-31287c95dd0e/pFkebShNjk.lottie';

/** Default placeholder for the message textarea (used for all wensen). */
export const DEFAULT_PLACEHOLDER = 'Voeg hier je extra bericht toe. Maximaal 160 tekens';

export const WENSEN = [
  {
    key: 'geslaagd',
    name: 'Gefeliciteerd!',
    thumbnail: '_assets/_style/_images/_wens/wens__geslaagd.png',
    lottie: DEFAULT_LOTTIE_URL,
    alt: 'Gefeliciteerd!'
  },
  {
    key: 'sorry',
    name: 'Sorry…',
    thumbnail: '_assets/_style/_images/_wens/wens__sorry.png',
    lottie: DEFAULT_LOTTIE_URL,
    alt: 'Sorry…'
  },
  {
    key: 'uitblinker',
    name: 'Uitblinker!',
    thumbnail: '_assets/_style/_images/_wens/wens__uitblinker.png',
    lottie: DEFAULT_LOTTIE_URL,
    alt: 'Uitblinker!'
  },
  {
    key: 'nieuweauto',
    name: 'Nieuwe auto',
    thumbnail: '_assets/_style/_images/_wens/wens__nieuweauto.png',
    lottie: DEFAULT_LOTTIE_URL,
    alt: 'Nieuwe auto'
  },
  {
    key: 'oldtimer',
    name: 'Jaartje erbij!',
    thumbnail: '_assets/_style/_images/_wens/wens__oldtimer.png',
    lottie: DEFAULT_LOTTIE_URL,
    alt: 'Jaartje erbij!'
  },
  {
    key: 'goedgekeurd',
    name: 'Goedgekeurd!',
    thumbnail: '_assets/_style/_images/_wens/wens__goedgekeurd.png',
    lottie: DEFAULT_LOTTIE_URL,
    alt: 'Goedgekeurd!'
  },
  {
    key: 'dankjewel',
    name: 'Dankjewel!',
    thumbnail: '_assets/_style/_images/_wens/wens__dankjewel.png',
    lottie: DEFAULT_LOTTIE_URL,
    alt: 'Dankjewel!'
  },
  {
    key: 'spetter',
    name: 'Jij spetter!',
    thumbnail: '_assets/_style/_images/_wens/wens__spetter.png',
    lottie: DEFAULT_LOTTIE_URL,
    alt: 'Jij spetter!'
  },
  {
    key: 'glashelder',
    name: 'Glashelder',
    thumbnail: '_assets/_style/_images/_wens/wens__glashelder.png',
    lottie: DEFAULT_LOTTIE_URL,
    alt: 'Glashelder'
  },
  {
    key: 'zomaar',
    name: 'Zomaar',
    thumbnail: '_assets/_style/_images/_wens/wens__zomaar.png',
    lottie: DEFAULT_LOTTIE_URL,
    alt: 'Zomaar'
  }
];

/** Options for applyLottieTexture on user__wens (shared with uv-mapping-config) */
export const USER_WENS_LOTTIE_OPTIONS = {
  stationId: 'message__wens',
  visible: false,
  depthWrite: false,
  useBasicMaterial: true,
  flipV: true,
  flipTexture: true,
  startZ: -45,
  pauseZ: 50,
  resumeZ: -62,
  times: null
};
