// Configuration constants for carwash.html
import { generateNameTexture, generateMultilineTexture } from './name-texture-generator.js';

// Global gamma value for all textures (1.0 = no change, higher = darker, lower = brighter)
export const GAMMA = 1.0;

// Gamma value for user__media textures (lower = brighter)
export const USER_MEDIA_GAMMA = 0.7;

// Camera rotation speed when theme/soap changes (0.0 - 1.0, higher = faster)
// This controls how fast the camera rotates when a new soap is selected
export const THEME_CHANGE_ROTATION_SPEED = 0.05;

// Global name getter function - can be set by WasbonController to provide the current name
let globalNameGetter = null;
// Global douche gordijn text getter function - can be set by WasbonController
let globalDoucheGordijnTextGetter = null;
// Global media URL getter function - can be set to override the default placeholder photo
let globalMediaUrlGetter = null;
// Flag to indicate if we're on maak-bon page (where empty name should show nothing)
let isMaakBonPage = false;

export function setMaakBonPage(value) {
  isMaakBonPage = value;
}

export function setNameGetter(nameGetter) {
  globalNameGetter = nameGetter;
}

export function setDoucheGordijnTextGetter(textGetter) {
  globalDoucheGordijnTextGetter = textGetter;
}

export function setMediaUrlGetter(getter) {
  globalMediaUrlGetter = getter;
}

export function getMediaUrl() {
  return globalMediaUrlGetter ? globalMediaUrlGetter() : null;
}

export function getName() {
  if (globalNameGetter) {
    const name = globalNameGetter();
    // On maak-bon page, return empty string if no name (don't show default)
    // On carwash.html, return 'NIELS' if no name
    if (!name || name.trim() === '') {
      return isMaakBonPage ? '' : 'NIELS';
    }
    return name;
  }
  // If no name getter is set, return empty on maak-bon, 'NIELS' on carwash
  return isMaakBonPage ? '' : 'NIELS';
}

export function getDoucheGordijnText() {
  if (globalDoucheGordijnTextGetter) {
    const text = globalDoucheGordijnTextGetter();
    // Return the text, or default if empty
    if (!text || text.trim() === '') {
      //return isMaakBonPage ? '' : 'Hey Niels!\nGefeliciteerd met het behalen van je rijexamen. Mocht ook wel na 34 pogingen haha!';
      //return isMaakBonPage ? '' : '';
      return isMaakBonPage ? '' : 'Het schoonste cadeau van Nederland!';
    }
    return text;
  }
  // If no text getter is set, return default text
  //return isMaakBonPage ? '' : 'Hey Niels!\nGefeliciteerd met het behalen van je rijexamen. Mocht ook wel na 34 pogingen haha!';
  //return isMaakBonPage ? '' : '';
  return isMaakBonPage ? '' : 'Het schoonste cadeau van Nederland!';
}

// Function to generate dynamic name texture canvas
export function generatePoortNameTexture() {
  const name = getName();
  return generateNameTexture(name.toUpperCase(), {
    width: 736,
    height: 540,
    fontFamily: 'Sink, sans-serif',
    fontSize: 52,
    textColor: '#000000',
    letterSpacing: 2
  });
}

// Function to generate dynamic douche__gordijn texture canvas
export function generateDoucheGordijnTexture() {
  const text = getDoucheGordijnText();
  return generateMultilineTexture(text.toUpperCase(), {
    width: 736,
    height: 540,
    textBoxWidth: 600,
    textBoxHeight: 290,
    textBoxTop: 110,
    fontFamily: 'Sink, sans-serif',
    fontSize: 60,
    textColor: '#000000',
    lineHeight: 1,
    letterSpacing: 2
  });
}

// Soap theme configuration
export let SOAP_THEME = 'Power Sop'; // Change this to switch themes: 'Party Party', 'Sweet Flowers', 'Pop Sop', 'Power Sop', 'Feel Good', 'Soft Calm', 'Autowasbon'

export function setSoapTheme(theme) {
  SOAP_THEME = theme;
}

// Soap theme texture mapping
export const SOAP_THEMES = {
  'Start': {
    poort: '_assets/_objects/_textures/uvmap-bb-front--blue.png',
    poortName: generatePoortNameTexture, // Dynamic canvas generation
    boogSoap: '_assets/_objects/_textures/_power/uvmap-boog--soap.png',
    boogBrushup: '_assets/_objects/_textures/_power/uvmap-boog--brush-up.png',
    boogDefault: '_assets/_objects/_textures/uvmap-boog--blue.png',
    uvmapFront: '_assets/_objects/_textures/uvmap-bb-front--blue.png',
    uvmapBoog: '_assets/_objects/_textures/uvmap-boog--blue.png',
    uvmapSoap: '_assets/_objects/_textures/uvmap-boog--soap.png',
    uvmapBericht: '_assets/_objects/_textures/uvmap-boog--bericht.png',
    uvmapMedia: '_assets/_objects/_textures/uvmap-boog--media.png',
    uvmapWater: '_assets/_objects/_textures/uvmap-boog--water.png',
    uvmapBrushup: '_assets/_objects/_textures/_power/uvmap-boog--brush-up.png',
    uvmapBrush2: '_assets/_objects/_textures/uvmap-boog--blue.png',
    tunnel: 'blue.png',
    lotties: {
      soap: {
        front: 'https://lottie.host/85c574c9-8dc5-4e72-887b-99b0f1ee84cc/1rqeSvKaPg.lottie',
        back: 'https://lottie.host/a06c396d-1825-443a-b113-fb6ddf092f2a/rvkUwUtV23.lottie'
      },
      brush1: {
        front: 'https://lottie.host/69350847-d5fe-4913-a64a-011945334c3a/9CAGVfcCgh.lottie',
        back: 'https://lottie.host/c2291279-7414-4d86-a5f3-8826edab247f/yFGv6yd5wO.lottie'    // Removed - gate animation replaces this
      },
      brush2: {
        front: 'https://lottie.host/33b17c77-f0c3-4fc1-b52d-a9d90ddebc4b/Bfl5EMZvdo.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
        back: null    // Removed - gate animation replaces this
      }
    }
  },
  'Party Party': {
    poort: '_assets/_objects/_textures/_party/uvmap__party--front.png',
    poortName: generatePoortNameTexture, // Dynamic canvas generation
    boogSoap: '_assets/_objects/_textures/_party/uvmap__party--boog--soap.png',
    boogBrushup: '_assets/_objects/_textures/_party/uvmap__party--boog.png',
    boogDefault: '_assets/_objects/_textures/_party/uvmap__party--boog.png',
    uvmapFront: '_assets/_objects/_textures/_party/uvmap__party--front.png',
    uvmapBoog: '_assets/_objects/_textures/_party/uvmap__party--boog.png',
    uvmapSoap: '_assets/_objects/_textures/_party/uvmap__party--boog--soap.png',
    uvmapBericht: '_assets/_objects/_textures/_party/uvmap__party--boog--bericht.png',
    uvmapMedia: '_assets/_objects/_textures/_party/uvmap__party--boog--media.png',
    uvmapWater: '_assets/_objects/_textures/_party/uvmap__party--boog--water.png',
    uvmapBrushup: '_assets/_objects/_textures/_party/uvmap__party--boog.png',
    uvmapBrush2: '_assets/_objects/_textures/_party/uvmap__party--boog.png',
    tunnel: 'yellow.png',
    lotties: {
      soap: {
        front: 'https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie', // zelfde als media
        back: 'https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie' // deze laten
      },
      brush2: {
        front: 'https://lottie.host/b8d462a0-3a1b-4ade-8bd9-bd768ec77836/RKX7DdDazX.lottie',  // de achter lottie

      },
      message__media: {
        front: 'https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie', // zelfde als soap
      },
    }
  },
  'Sweet Flowers': {
    poort: '_assets/_objects/_textures/_love/uvmap__love-front.png',
    poortName: generatePoortNameTexture, // Dynamic canvas generation
    boogSoap: '_assets/_objects/_textures/_love/uvmap__love--boog--soap.png',
    boogBrushup: '_assets/_objects/_textures/_love/uvmap__love--boog.png',
    boogDefault: '_assets/_objects/_textures/_love/uvmap-boog--love.png',
    uvmapFront: '_assets/_objects/_textures/_love/uvmap__love-front.png',
    uvmapBoog: '_assets/_objects/_textures/_love/uvmap__love--boog.png',
    uvmapSoap: '_assets/_objects/_textures/_love/uvmap__love--boog--soap.png',
    uvmapBericht: '_assets/_objects/_textures/_love/uvmap__love--boog--bericht.png',
    uvmapMedia: '_assets/_objects/_textures/_love/uvmap__love--boog--media.png',
    uvmapWater: '_assets/_objects/_textures/_love/uvmap__love--boog--water.png',
    uvmapBrushup: '_assets/_objects/_textures/_love/uvmap__love--boog.png',
    uvmapBrush2: '_assets/_objects/_textures/_love/uvmap__love--boog.png',
    tunnel: 'red.png',
    lotties: {
      soap: {
        front: 'https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie', // zelfde als media
        back: 'https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie' // deze laten
      },
      brush2: {
        front: 'https://lottie.host/b8d462a0-3a1b-4ade-8bd9-bd768ec77836/RKX7DdDazX.lottie',  // de achter lottie

      },
      message__media: {
        front: 'https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie', // zelfde als soap
      },
    }
  },
  'Pop Sop': {
    poort: '_assets/_objects/_textures/_pop/uvmap__pop-front.png',
    poortName: generatePoortNameTexture, // Dynamic canvas generation
    boogSoap: '_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png',
    boogBrushup: '_assets/_objects/_textures/_pop/uvmap__pop--boog.png',
    boogDefault: '_assets/_objects/_textures/_pop/uvmap-boog--pop.png',
    uvmapFront: '_assets/_objects/_textures/_pop/uvmap__pop-front.png',
    uvmapBoog: '_assets/_objects/_textures/_pop/uvmap__pop--boog.png',
    uvmapSoap: '_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png',
    uvmapBericht: '_assets/_objects/_textures/_pop/uvmap__pop--boog--bericht.png',
    uvmapMedia: '_assets/_objects/_textures/_pop/uvmap__pop--boog--media.png',
    uvmapWater: '_assets/_objects/_textures/_pop/uvmap__pop--boog--water.png',
    uvmapBrushup: '_assets/_objects/_textures/_pop/uvmap__pop--boog.png',
    uvmapBrush2: '_assets/_objects/_textures/_pop/uvmap__pop--boog.png',
    tunnel: 'pink.png',
    lotties: {
      soap: {
        front: 'https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie', // zelfde als media
        back: 'https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie' // deze laten
      },
      brush2: {
        front: 'https://lottie.host/b8d462a0-3a1b-4ade-8bd9-bd768ec77836/RKX7DdDazX.lottie',  // de achter lottie

      },
      message__media: {
        front: 'https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie', // zelfde als soap
      },
    }
  },
  'Power Sop': {
    poort: '_assets/_objects/_textures/_power/uvmap__power-front.png',
    poortName: generatePoortNameTexture, // Dynamic canvas generation
    boogSoap: '_assets/_objects/_textures/_power/uvmap__power--boog--soap.png',
    boogBrushup: '_assets/_objects/_textures/_power/uvmap__power--boog.png',
    boogDefault: '_assets/_objects/_textures/_power/uvmap-boog--power.png',
    uvmapFront: '_assets/_objects/_textures/_power/uvmap__power-front.png',
    uvmapBoog: '_assets/_objects/_textures/_power/uvmap__power--boog.png',
    uvmapSoap: '_assets/_objects/_textures/_power/uvmap__power--boog--soap.png',
    uvmapBericht: '_assets/_objects/_textures/_power/uvmap__power--boog--bericht.png',
    uvmapMedia: '_assets/_objects/_textures/_power/uvmap__power--boog--media.png',
    uvmapWater: '_assets/_objects/_textures/_power/uvmap__power--boog--water.png',
    uvmapBrushup: '_assets/_objects/_textures/_power/uvmap__power--boog.png',
    uvmapBrush2: '_assets/_objects/_textures/_power/uvmap__power--boog.png',
    tunnel: 'green.png',
    lotties: {
      soap: {
        front: 'https://lottie.host/ad607ffd-9044-4eb2-82ab-5f9b4d81a2b1/MedTZcbLoN.lottie',
        back: 'https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie'
      },
      brush1: {
        //front: 'https://lottie.host/69350847-d5fe-4913-a64a-011945334c3a/9CAGVfcCgh.lottie',
        //back: 'https://lottie.host/c2291279-7414-4d86-a5f3-8826edab247f/yFGv6yd5wO.lottie'    // Removed - gate animation replaces this
      },
      
      brush2: {
        front: 'https://lottie.host/33b17c77-f0c3-4fc1-b52d-a9d90ddebc4b/Bfl5EMZvdo.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
        back: null    // Removed - gate animation replaces this
      }
    }
  },
  'Feel Good': {
    poort: '_assets/_objects/_textures/_feelgood/uvmap__feelgood-front.png',
    poortName: generatePoortNameTexture, // Dynamic canvas generation
    boogSoap: '_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--soap.png',
    boogBrushup: '_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png',
    boogDefault: '_assets/_objects/_textures/_feelgood/uvmap-boog--feelgood.png',
    uvmapFront: '_assets/_objects/_textures/_feelgood/uvmap__feelgood-front.png',
    uvmapBoog: '_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png',
    uvmapSoap: '_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png',
    uvmapBericht: '_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--bericht.png',
    uvmapMedia: '_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--media.png',
    uvmapWater: '_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--water.png',
    uvmapBrushup: '_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png',
    uvmapBrush2: '_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png',
    tunnel: 'orange.png',
    lotties: {
      soap: {
        front: 'https://lottie.host/218bc723-72d4-4e35-8149-0475b8fde1ae/GMhipfzf2R.lottie', // zelfde als media
        back: 'https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie' // deze laten
      },
      brush2: {
        front: 'https://lottie.host/90704ac7-a303-4698-b50a-00033ba5069f/OpuAREFXBw.lottie',  // de achter lottie

      },
      message__media: {
        front: 'https://lottie.host/218bc723-72d4-4e35-8149-0475b8fde1ae/GMhipfzf2R.lottie', // zelfde als soap
      },
    }
  },
  'Soft Calm': {
    poort: '_assets/_objects/_textures/_calm/uvmap__calm-front.png',
    poortName: generatePoortNameTexture, // Dynamic canvas generation
    boogSoap: '_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png',
    boogBrushup: '_assets/_objects/_textures/_calm/uvmap__calm--boog.png',
    boogDefault: '_assets/_objects/_textures/_calm/uvmap-boog--calm.png',
    uvmapFront: '_assets/_objects/_textures/_calm/uvmap__calm-front.png',
    uvmapBoog: '_assets/_objects/_textures/_calm/uvmap__calm--boog.png',
    uvmapSoap: '_assets/_objects/_textures/_calm/uvmap__calm--boog--soap.png',
    uvmapBericht: '_assets/_objects/_textures/_calm/uvmap__calm--boog--bericht.png',
    uvmapMedia: '_assets/_objects/_textures/_calm/uvmap__calm--boog--media.png',
    uvmapWater: '_assets/_objects/_textures/_calm/uvmap__calm--boog--water.png',
    uvmapBrushup: '_assets/_objects/_textures/_calm/uvmap__calm--boog.png',
    uvmapBrush2: '_assets/_objects/_textures/_calm/uvmap__calm--boog.png',
    tunnel: 'lightblue.png',
    lotties: {
      soap: {
        front: 'https://lottie.host/23ec9e85-bd96-4463-84c8-96d1df0aff2e/y5UlQaJ5BZ.lottie', // zelfde als media
        back: 'https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie' // deze laten
      },
      brush2: {
        front: 'https://lottie.host/6c2f5bf7-16e8-427d-a3ab-18a408dca2f3/vDKCcKMC8d.lottie',  // de achter lottie

      },
      message__media: {
        front: 'https://lottie.host/23ec9e85-bd96-4463-84c8-96d1df0aff2e/y5UlQaJ5BZ.lottie', // zelfde als soap
      },
    }
  }
};

// Movement variables
export const BORSTEL_X_MOVEMENT_SPEED = 2; // Speed of movement (legacy, kept for compatibility)
export const BORSTEL_X_LEFT_START = 10.0; // Start position for borstel__staand--left (when camera is far, 5 units left of center)
export const BORSTEL_X_LEFT_END = -180.0; // End position for borstel__staand--left (when camera is close, moves from left to right)
export const BORSTEL_X_RIGHT_START = -10.0; // Start position for borstel__staand--right (when camera is far, 5 units right of center)
export const BORSTEL_X_RIGHT_END = 180.0; // End position for borstel__staand--right (when camera is close, moves from right to left)
export const BORSTEL_X_MOVEMENT_DISTANCE = 20.0; // Distance threshold for X-axis movement interpolation (in world units)

export const BORSTEL_Y_MOVEMENT_SPEED = 1; // Speed of Y movement (legacy, kept for compatibility)
export const BORSTEL_Y_LIGGEND_START = -0.0; // Start position for borstel__liggend
export const BORSTEL_Y_LIGGEND_END = 120.0; // End position for borstel__liggend (moves up)
export const BORSTEL_Y_LIGGEND_FROM_Z = -80.0; // Camera Z position where animation starts (from)
export const BORSTEL_Y_LIGGEND_TO_Z = -40.0; // Camera Z position where animation ends (to)
export const BORSTEL_Y_LIGGEND_DISTANCE = 20.0; // Distance from camera to object for animation calculation
export const BORSTEL_Y_LIGGEND_TRIGGER_Z = -60.0; // Camera Z position where animation starts triggering (legacy)
export const BORSTEL_Y_LIGGEND_ANIMATION_SPEED = 1; // Speed of animation (legacy, kept for compatibility)

// borstel__liggend--UP animation configuration (same as borstel__liggend)
export const BORSTEL_Y_LIGGEND_UP_START = -20.0; // Start position for borstel__liggend--UP
export const BORSTEL_Y_LIGGEND_UP_END = 220.0; // End position for borstel__liggend--UP (moves up)
export const BORSTEL_Y_LIGGEND_UP_FROM_Z = 220.0; // Camera Z position where animation starts (from)
export const BORSTEL_Y_LIGGEND_UP_TO_Z = -40.0; // Camera Z position where animation ends (to)
export const BORSTEL_Y_LIGGEND_UP_DISTANCE = 20.0; // Distance from camera to object for animation calculation
export const BORSTEL_Y_LIGGEND_UP_TRIGGER_Z = -60.0; // Camera Z position where animation starts triggering (legacy)
export const BORSTEL_Y_LIGGEND_UP_ANIMATION_SPEED = 1; // Speed of animation (legacy, kept for compatibility)

// Curtain flap animation configuration
export const CURTAIN_FLAP_MIN_SPEED = 0.5; // Minimum rotation speed (when camera is far)
export const CURTAIN_FLAP_MAX_SPEED = 8.0; // Maximum rotation speed (when camera is close)
export const CURTAIN_FLAP_DISTANCE = 80.0; // Distance threshold for speed/angle interpolation (in world units)
export const CURTAIN_FLAP_MIN_DEG = -4.0; // Minimum rotation angle in degrees (when camera is far)
export const CURTAIN_FLAP_MAX_DEG = 8.0; // Maximum rotation angle in degrees (when camera is close)
export const CURTAIN_FLAP_MAX_LIFT = 200; // Maximum Y-axis lift when camera is close (in world units)
export const CURTAIN_FLAP_LIFT_DISTANCE = 20.0; // Distance threshold for lift interpolation (in world units)
export const CURTAIN_FLAP_MAX_X_MOVEMENT = 200; // Maximum X-axis movement when camera is close (in world units, 0 = no X movement)

// Douche gordijn width scaling configuration
export const DOUCHE_GORDIJN_WIDTH_START = 1.0; // Start width scale (when camera is far)
export const DOUCHE_GORDIJN_WIDTH_END = 0.2; // End width scale (when camera is close, smaller)
export const DOUCHE_GORDIJN_FROM_Z = -110.0; // Camera Z position where animation starts (from)
export const DOUCHE_GORDIJN_TO_Z = -120.0; // Camera Z position where animation ends (to)
export const DOUCHE_GORDIJN_DISTANCE = 50.0; // Distance from camera to object for animation calculation
export const DOUCHE_GORDIJN_TRIGGER_Z = -88.0; // Camera Z position where animation starts triggering (legacy)
export const DOUCHE_GORDIJN_ANIMATION_SPEED = 2; // Speed of animation (legacy, kept for compatibility)

// User wens Y-axis animation configuration
export const USER_WENS_FROM_Z = -80.0; // Camera Z position where animation starts (from)
export const USER_WENS_TO_Z = -43.0; // Camera Z position where animation ends (to)
export const USER_WENS_DISTANCE = 20.0; // Distance from camera to object for animation calculation
export const USER_WENS_TRIGGER_Z = -61.5; // Camera Z position where animation starts triggering (legacy)
export const USER_WENS_ANIMATION_SPEED = 2; // Speed of animation (legacy, kept for compatibility)
export const USER_WENS_Y_MOVEMENT = -0.0; // Y-axis movement amount (negative = down)
export const USER_WENS_WIDTH_START = 1.0; // Start width scale (when camera is far)
export const USER_WENS_WIDTH_END = 0.6; // End width scale (when camera is close, smaller)

// User media zig zag animation configuration
export const USER_MEDIA_FROM_Z = -260.0; // Camera Z position where animation starts (from)
export const USER_MEDIA_TO_Z = -304.0; // Camera Z position where animation ends (to)
export const USER_MEDIA_DISTANCE = 20.0; // Distance from camera to object for animation calculation
export const USER_MEDIA_TRIGGER_Z = -232.0; // Camera Z position where animation starts triggering (legacy)
export const USER_MEDIA_ANIMATION_SPEED = 1; // Speed of animation (legacy, kept for compatibility)
export const USER_MEDIA_Y_MOVEMENT = 300.0; // Y-axis movement amount (positive = up)
export const USER_MEDIA_ZIGZAG_AMPLITUDE = 100.0; // X-axis zig zag amplitude (side to side movement)
export const USER_MEDIA_ZIGZAG_FREQUENCY = 2.0; // Zig zag frequency (higher = more zig zags)
export const USER_MEDIA_SCALE_START = 1.0; // Start scale (when camera is far)
export const USER_MEDIA_SCALE_END = 0.3; // End scale (when camera is close, smaller)

// Brush1 back lottie X-axis movement configuration
export const BRUSH1_LOTTIE_TRIGGER_Z = -30.0; // Camera Z position where animation starts triggering
export const BRUSH1_LOTTIE_ANIMATION_SPEED = 1; // Speed of animation (progress per second when triggered, 0-1 range)
export const BRUSH1_LOTTIE_X_MOVEMENT = -500.0; // X-axis movement amount (negative = left)

// Gate X-axis movement configuration (for gate__right and gate__left in station__brush2.glb)
export const GATE_FROM_Z = -50.0; // Camera Z position where animation starts (from)
export const GATE_TO_Z = -10.0; // Camera Z position where animation ends (to)
export const GATE_DISTANCE = 20.0; // Distance from camera to object for animation calculation
export const GATE_TRIGGER_Z = -30.0; // Camera Z position where animation starts triggering (legacy)
export const GATE_ANIMATION_SPEED = 0.5; // Speed of animation (legacy, kept for compatibility)
export const GATE_X_MOVEMENT = -500.0; // X-axis movement amount (positive = right for gate__right, negative = left for gate__left)

// Brush-up (borstel__liggend) Y-axis movement configuration (for station__brush--up2.glb)
export const BRUSH_UP_FROM_Z = -133.0; // Camera Z position where animation starts (from)
export const BRUSH_UP_TO_Z = -93.0; // Camera Z position where animation ends (to)
export const BRUSH_UP_DISTANCE = 20.0; // Distance from camera to object for animation calculation
export const BRUSH_UP_TRIGGER_Z = -113.0; // Camera Z position where animation starts triggering (legacy)
export const BRUSH_UP_ANIMATION_SPEED = 0.5; // Speed of animation (legacy, kept for compatibility)
export const BRUSH_UP_Y_MOVEMENT_FROM = -120.0; // Start Y position (when camera is far)
export const BRUSH_UP_Y_MOVEMENT_TO = 80.0; // End Y position (when camera is close, moves up)

// Lottie front media Y-axis movement configuration (for station__message--media.glb)
export const LOTTIE_FRONT_MEDIA_FROM_Z = -180.0; // Camera Z position where animation starts (from)
export const LOTTIE_FRONT_MEDIA_TO_Z = -140.0; // Camera Z position where animation ends (to)
export const LOTTIE_FRONT_MEDIA_DISTANCE = 20.0; // Distance from camera to object for animation calculation
export const LOTTIE_FRONT_MEDIA_TRIGGER_Z = -200.0; // Camera Z position where animation starts triggering (legacy)
export const LOTTIE_FRONT_MEDIA_ANIMATION_SPEED = 1; // Speed of animation (legacy, kept for compatibility)
export const LOTTIE_FRONT_MEDIA_Y_MOVEMENT = 200.0; // Y-axis movement amount (positive = up)
export const LOTTIE_FRONT_MEDIA_X_ROTATION = Math.PI / 2; // X-axis rotation amount in radians (90 degrees)

// Spray soap Y-axis rotation configuration (for spray__soap--L and spray__soap--R in station__soap2.glb)
export const SPRAY_SOAP_DEG = 10.0; // Rotation range in degrees (from -deg to +deg)
export const SPRAY_SOAP_SPEED = 1.5; // Animation speed (radians per second)
