// Station configuration for carwash.html

export const stations = [
  { 
    id: 'road',
    path: '_assets/_objects/station__road.glb', 
    applyPoort: false, 
    applyBoog: false,
    tunnel: false,
    uvMapping: null  // Optional: { objectName: string, imagePath: string, projectionAxis: string, options?: object }
  },
  { 
    id: 'poort',
    path: '_assets/_objects/station__poort2.glb', 
    applyPoort: true, 
    applyBoog: false,
    tunnel: false,
    lottie: { 
      front: 'https://lottie.host/8f8051ac-44b9-4183-8d84-e28f7ceeaee4/9czZ6PkTbV.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null, times: number|null }
      back: null,    // Can be null, or { url: string, startZ: number|null, stopZ: number|null, times: number|null }
      customLayers: {
        'lot__stoplicht--L': {
          url: 'https://lottie.host/6fd5eb4a-ed47-4987-b076-b205127bd7a3/HDmDYHUZg9.lottie',
          startZ: null, // null = will only be triggered by button click, not by Z-index
          stopZ: null,
          times: 1 // play once when triggered
        },
        'lot__stoplicht--R': {
          url: 'https://lottie.host/6fd5eb4a-ed47-4987-b076-b205127bd7a3/HDmDYHUZg9.lottie',
          startZ: null, // null = will only be triggered by button click, not by Z-index
          stopZ: null,
          times: 1 // play once when triggered
        }
      }
    },
    uvMapping: null  // Optional: { objectName: string, imagePath: string, projectionAxis: string, options?: object }
  },
  { 
    id: 'message__wens',
    path: '_assets/_objects/station__message--wens.glb', 
    applyPoort: false, 
    applyBoog: false,
    tunnel: true,  // Uses theme's tunnel texture from carwash-config.js
    lottie: {  
      front: 'https://lottie.host/52e18a61-ff57-4972-9ba3-5cfc37441cdf/h7HRhBzF5N.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
      back: 'https://lottie.host/9cee9b39-3067-49bf-a8b9-28f645904606/LlsVqOy0BS.lottie'    // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
    },
    uvMapping: null
  },            // Station 1
  // { 
  //   id: 'water-boog',
  //   path: '_assets/_objects/station__water-boog2.glb', 
  //   applyPoort: false, 
  //   applyBoog: true,
  //   tunnel: true,  // Uses theme's tunnel texture from carwash-config.js
  //   lottie: { 
  //     front: {url: 'https://lottie.host/2d436d4c-eda7-4ca4-85b4-0f5177b31f2a/aEJEGRh1MS.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null, times: number|null }
  //       startZ: -76,
  //       //stopZ: -108,
  //       times: 4  // Number of times to play (null = infinite loop)
  //     },
  //     back: { url: 'https://lottie.host/2d436d4c-eda7-4ca4-85b4-0f5177b31f2a/aEJEGRh1MS.lottie',
  //       startZ: -80, stopZ: null, times: 4 }    // Can be null, or { url: string, startZ: number|null, stopZ: number|null, times: number|null }
  //   },
  //   uvMapping: null
  // }, 
  // { 
  //   id: 'brush1',
  //   path: '_assets/_objects/station__brush2.glb', 
  //   applyPoort: false, 
  //   applyBoog: true,
  //   tunnel: false,
  //   start_tunnel: true,  // Uses theme's tunnel texture from carwash-config.js
  //   lottie: { 
  //     // front: {
  //     //   url: 'https://lottie.host/8730d537-1947-4b40-b775-32cbb3e0b449/OKqW8oMbQN.lottie',
  //     //   startZ: null,  // Z position to start animation (null = start immediately)
  //     //   stopZ: null,   // Z position to stop looping (null = loop forever)
  //     //   times: null    // Number of times to play (null = infinite loop, number = play that many times then stop)
  //     // },
  //     back: null    // Removed - gate animation replaces this
  //   },
  //   uvMapping: null
  // },          // Station 2     // Station 3 (message 1)
    // Station 4
  { 
    id: 'brush-up',
    path: '_assets/_objects/station__brush--up2.glb', 
    applyPoort: false, 
    applyBoog: true,
    tunnel: true,  // Uses theme's tunnel texture from carwash-config.js
    lottie: { 
      front: {url: 'https://lottie.host/7d3b6cc5-3b69-44d7-a71d-aefa1c087d63/MfzHgZf4do.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
        startZ: -80,
        stopZ: null,
        times: 4
      },
      back: null    // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
    },
    uvMapping: null
  },      // Station 5
  { 
    id: 'message__bericht',
    path: '_assets/_objects/station__message--bericht.glb', 
    applyPoort: false, 
    applyBoog: false,
    tunnel: true,  // Uses theme's tunnel texture from carwash-config.js
    //tunnel_size: 'small',
    lottie: { 
      front: 'https://lottie.host/630ed545-d60e-4175-b7a7-dca0979ec653/bKKnlIZOLx.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
      //back: 'https://lottie.host/af0496ea-d8ed-4491-ae3f-48a44075f582/3U9YB51XwV.lottie'    // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
    },
    uvMapping: null
  },       // Station 6 (message 2)
  { 
    id: 'soap',
    path: '_assets/_objects/station__soap2.glb', 
    applyPoort: false, 
    applyBoog: false,
    tunnel: true,  // Uses theme's tunnel texture from carwash-config.js
    tunnel_size: 'small',
    lottie: { 
      front: 'https://lottie.host/3fa25658-6b92-4585-9b53-3018a0c71e13/4YgekaHhpD.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
      back: 'https://lottie.host/2142dc17-71ec-4396-95bb-9141a5ae6397/kAYrrdS0jG.lottie'    // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
    },
    uvMapping: null
  },          // Station 7
  { 
    id: 'brush2',
    path: '_assets/_objects/station__brush2.glb', 
    applyPoort: false, 
    applyBoog: true,
    tunnel: true,  // Uses theme's tunnel texture from carwash-config.js
    tunnel_size: 'small',
    lottie: { 
      front: 'https://lottie.host/8b11309b-96f0-496b-b280-3dd82c1d486b/rdjW2HG5i3.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
      back: null    // Removed - gate animation replaces this
    },
    uvMapping: null
  },          // Station 8
  { 
    id: 'message__media',
    path: '_assets/_objects/station__message--media.glb', 
    applyPoort: false, 
    applyBoog: false,
    tunnel: true,  // Uses theme's tunnel texture from carwash-config.js
    lottie: { 
      front: 'https://lottie.host/ad607ffd-9044-4eb2-82ab-5f9b4d81a2b1/MedTZcbLoN.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
      back: null    // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
    },
    uvMapping: null
  },       // Station 9 (message 3)
  { 
    id: 'blower',
    path: '_assets/_objects/station__blower2.glb', 
    applyPoort: false, 
    applyBoog: false,
    tunnel: false,
    lottie: { 
      front: {url: 'https://lottie.host/38161663-abcc-4f62-920f-354fd2cfe6b5/GmKMM2xib7.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
        startZ: -170,
        //stopZ: null,
        //times: null
      },
      back: {url: 'https://lottie.host/cef08040-f70c-4ff1-a35a-cfc88bb638f3/0YstTOn7Uz.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
        startZ: -190,
        //stopZ: null,
        //times: null
      },
    },
    uvMapping: null
  }, 

  // { 
  //   id: 'message4',
  //   path: '_assets/_objects/station__message--wasbon.glb', 
  //   applyPoort: false, 
  //   applyBoog: false,
  //   tunnel: false,
  //   lottie: { 
  //     front: 'https://lottie.host/3a5f76fe-dec4-4993-99dc-a2a88eb55d21/vMzEEWSE7u.lottie',  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
  //     back: null    // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
  //   },
  //   uvMapping: null
  // },       // Station 11 (message 3)
       // Station 12
       { 
        id: 'curtain',
        path: '_assets/_objects/station__curtain2.glb', 
        applyPoort: false, 
        applyBoog: false,
        tunnel: false,  // Uses theme's tunnel texture from carwash-config.js
        lottie: { 
          front: null,  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
          back: null    // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
        },
        uvMapping: null
      },       // Station 10
  // { 
  //   id: 'message5',
  //   path: '_assets/_objects/station__message2.glb', 
  //   applyPoort: false, 
  //   applyBoog: false,
  //   tunnel: false,
  //   lottie: { 
  //     front: null,  // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
  //     back: 'https://lottie.host/0ea86fc0-5a41-4866-8991-b34c187a5a30/DBE8V3YSUm.lottie'    // Can be null, or { url: string, startZ: number|null, stopZ: number|null }
  //   },
  //   uvMapping: null
  // }        // Station 13 (message 4)
];

// Scroll checkpoints configuration has been moved to checkpoint-config.js
// Import from checkpoint-config.js instead:
// import { checkpoints } from './checkpoint-config.js';
