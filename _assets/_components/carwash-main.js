// Main initialization file for carwash.html
import * as THREE from 'three';
import { SceneSetup } from './scene-setup.js';
import { FontLoader } from './font-loader.js';
import { CameraController } from './camera-controller.js';
import { StationLoader } from './station-loader.js';
import { TextureManager } from './texture-manager.js';
import { LottieManager } from './lottie-manager.js';
import { AnimationController } from './animation-controller.js';
import { LottieZIndexTrigger } from './lottie-zindex-trigger.js';
import { SoundEffectsController } from './sound-effects-controller.js';
import { soundEffects, backgroundAudio } from './sound-effects-config.js';
import { stations } from './station-config.js';
import { checkpoints as scrollCheckpoints } from './checkpoint-config.js';
import { SOAP_THEME, SOAP_THEMES } from './carwash-config.js';
import { applyUVMappings } from './uv-mapping-config.js';

// Global state
let sceneSetup = null;
let cameraController = null;
let fontLoader = null;
let stationLoader = null;
let textureManager = null;
let lottieManager = null;
let animationController = null;
let lottieZIndexTrigger = null;
let soundEffectsController = null;
let mobileOptimizer = null;

// Collections for animated objects
let allBrushBaseObjects = [];
let allBorstelStandObjects = [];
let allBorstelLiggendObjects = [];
let allBorstelLiggendUpObjects = [];
let allBlowerFrontMiddleObjects = [];
let allCurtainFlapObjects = [];
let allCurtainFlapGroups = [];
let allDoucheGordijnObjects = [];
let allUserWensObjects = [];
let allUserMediaObjects = [];
let allGateObjects = [];
let allSpraySoapObjects = [];

// Helper functions for station alignment
function alignStationFrontEdge(allModels, startZ) {
  if (allModels.length === 0) return;
  
  let frontmostEdge = -Infinity;
  allModels.forEach(model => {
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    if (box.max.z > frontmostEdge) frontmostEdge = box.max.z;
  });
  
  const adjustment = startZ - frontmostEdge;
  
  allModels.forEach(model => {
    model.position.z += adjustment;
    model.updateMatrixWorld(true);
  });
}

function calculateStationEndZ(allModels, startZ) {
  let endZ = startZ;
  
  allModels.forEach(model => {
    model.updateMatrixWorld(true);
    const modelBox = new THREE.Box3().setFromObject(model);
    const modelBackEdge = modelBox.min.z;
    if (modelBackEdge < endZ) endZ = modelBackEdge;
  });
  
  return endZ;
}

// Load tunnel overlay for a station
async function loadTunnelOverlay(loader, stationLoader, sceneSetup, station, startZ, allModels) {
  if (!station.tunnel || station.tunnel === false) return;
  
  try {
    // Use small tunnel if tunnel_size is set to 'small', otherwise use default
    const tunnelPath = station.tunnel_size === 'small' 
      ? '_assets/_objects/overlay__tunnel--small.glb'
      : '_assets/_objects/overlay__tunnel.glb';
    const tunnelGltf = await new Promise((resolve, reject) => {
      loader.load(
        tunnelPath,
        (gltf) => resolve(gltf),
        undefined,
        (error) => reject(error)
      );
    });
    
    const tunnelModel = tunnelGltf.scene;
    
    // Scale the tunnel model to match the station scale using stationLoader
    if (stationLoader && stationLoader.scaleModel) {
      const dimensions = stationLoader.scaleModel(tunnelModel);
    }
    
    // Hide base floor objects in tunnel
    tunnelModel.traverse((child) => {
      const name = (child.name || '').toLowerCase();
      if (name.includes('_basefloor') || name === '_basefloor' || name.includes('basefloor')) {
        child.visible = false;
      }
    });
    
    // Apply texture to tunnel meshes (pure unlit material, no lighting, no shadows, no tone mapping)
    // If tunnel is a string, it's a texture path; otherwise use default
    const tunnelTexturePath = typeof station.tunnel === 'string' ? station.tunnel : null;
    
    if (tunnelTexturePath) {
      // Load texture image
      const textureLoader = new THREE.TextureLoader();
      const texturePath = tunnelTexturePath.startsWith('_assets/') || tunnelTexturePath.startsWith('/') 
        ? tunnelTexturePath 
        : `_assets/_objects/_textures/${tunnelTexturePath}`;
      
      const texture = await new Promise((resolve, reject) => {
        textureLoader.load(
          texturePath,
          (texture) => {
            texture.flipY = false;
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            resolve(texture);
          },
          undefined,
          (error) => reject(error)
        );
      });
      
      // Apply texture to tunnel meshes using UV coordinates
      tunnelModel.traverse((child) => {
        if (child.isMesh) {
          // Create ShaderMaterial that outputs texture without tone mapping or lighting
          const material = new THREE.ShaderMaterial({
            uniforms: {
              map: { value: texture }
            },
            vertexShader: `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform sampler2D map;
              varying vec2 vUv;
              void main() {
                // Sample texture and output pure color without any lighting or tone mapping
                vec4 texColor = texture2D(map, vUv);
                gl_FragColor = vec4(texColor.rgb, texColor.a);
              }
            `,
            side: THREE.DoubleSide,
            fog: false, // Disable fog
            transparent: true
          });
          
          child.material = material;
          
          // Disable shadows completely
          child.castShadow = false;
          child.receiveShadow = false;
          
        }
      });
    } else {
      // Fallback to solid color if no texture specified
      const tunnelColor = '#ffffff';
      const color = new THREE.Color(tunnelColor);
      
      tunnelModel.traverse((child) => {
        if (child.isMesh) {
          const material = new THREE.ShaderMaterial({
            uniforms: {
              color: { value: color }
            },
            vertexShader: `
              varying vec3 vPosition;
              varying vec3 vNormal;
              void main() {
                vPosition = position;
                vNormal = normal;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform vec3 color;
              varying vec3 vPosition;
              varying vec3 vNormal;
              void main() {
                gl_FragColor = vec4(color, 1.0);
              }
            `,
            side: THREE.DoubleSide,
            fog: false,
            transparent: false
          });
          
          child.material = material;
          child.castShadow = false;
          child.receiveShadow = false;
        }
      });
    }
    
    // Position tunnel at the same Z position as the station
    tunnelModel.position.set(0, 0, startZ);
    
    sceneSetup.getScene().add(tunnelModel);
    allModels.push(tunnelModel);
    
  } catch (error) {
    console.error(`Failed to load tunnel overlay:`, error);
  }
}

// Station loading state for lazy loading
const stationLoadingState = {
  loadedStations: [], // Array of { index, startZ, endZ, allModels }
  pendingStations: [], // Array of { index, station, startZ }
  isMobile: false,
  loadingInProgress: false
};

// Load a single station
async function loadStation(stationIndex, station, startZ, currentTheme, loader) {
  const { model, allModels, brushBaseObjects, borstelStandObjects, borstelLiggendObjects, borstelLiggendUpObjects, curtainFlapObjects, curtainFlapGroups, doucheGordijnObjects, userWensObjects, userMediaObjects, gateObjects, spraySoapObjects } = await stationLoader.load(
    sceneSetup.getScene(),
    startZ,
    station.path,
    { applyPoort: station.applyPoort, applyBoog: station.applyBoog, stationId: station.id }
  );
  
  // Store station ID in all models for reference
  if (station.id && allModels) {
    allModels.forEach(model => {
      model.traverse((child) => {
        child.userData.stationId = station.id;
      });
    });
  }
  
  // Collect brush__base objects for rotation
  if (brushBaseObjects && brushBaseObjects.length > 0) {
    allBrushBaseObjects.push(...brushBaseObjects);
  }
  
  // Collect borstel__staand objects for X-axis movement
  if (borstelStandObjects && borstelStandObjects.length > 0) {
    const brushStationZ = startZ;
    borstelStandObjects.forEach(brush => {
      brush.brushStationZ = brushStationZ;
    });
    allBorstelStandObjects.push(...borstelStandObjects);
  }
  
  // Collect borstel__liggend objects for Y-axis movement
  if (borstelLiggendObjects && borstelLiggendObjects.length > 0) {
    const brushStationZ = startZ;
    borstelLiggendObjects.forEach(brush => {
      brush.brushStationZ = brushStationZ;
    });
    allBorstelLiggendObjects.push(...borstelLiggendObjects);
  }
  
  // Collect borstel__liggend--UP objects for Y-axis movement
  if (borstelLiggendUpObjects && borstelLiggendUpObjects.length > 0) {
    const brushStationZ = startZ;
    borstelLiggendUpObjects.forEach(brush => {
      brush.brushStationZ = brushStationZ;
    });
    allBorstelLiggendUpObjects.push(...borstelLiggendUpObjects);
  }
  
  // Collect curtain flap objects for X-axis rotation and Y-axis lift animation
  if (curtainFlapObjects && curtainFlapObjects.length > 0) {
    const curtainStationZ = startZ;
    curtainFlapObjects.forEach(flap => {
      flap.curtainStationZ = curtainStationZ;
    });
    allCurtainFlapObjects.push(...curtainFlapObjects);
  }
  
  // Collect curtain flap groups (--01, --02, --03) for Y-axis lift animation
  if (curtainFlapGroups && curtainFlapGroups.length > 0) {
    const curtainStationZ = startZ;
    curtainFlapGroups.forEach(group => {
      group.curtainStationZ = curtainStationZ;
    });
    allCurtainFlapGroups.push(...curtainFlapGroups);
  }
  
  // Collect douche__gordijn objects for width scaling
  if (doucheGordijnObjects && doucheGordijnObjects.length > 0) {
    const messageStationZ = startZ;
    doucheGordijnObjects.forEach(gordijn => {
      gordijn.messageStationZ = messageStationZ;
    });
    allDoucheGordijnObjects.push(...doucheGordijnObjects);
  }
  
  // Collect user__wens objects for Y-axis animation
  if (userWensObjects && userWensObjects.length > 0) {
    allUserWensObjects.push(...userWensObjects);
  }
  
  // Collect user__media objects for zig zag animation
  if (userMediaObjects && userMediaObjects.length > 0) {
    allUserMediaObjects.push(...userMediaObjects);
  }
  
  // Collect gate objects for X-axis animation
  if (gateObjects && gateObjects.length > 0) {
    allGateObjects.push(...gateObjects);
  }
  
  // Collect spray__soap objects for X-axis rotation animation
  if (spraySoapObjects && spraySoapObjects.length > 0) {
    allSpraySoapObjects.push(...spraySoapObjects);
  }
  
  // Collect front__middle objects inside blower__ objects for Z-axis rotation
  if (station.path.includes('station__blower')) {
    allModels.forEach(model => {
      model.traverse((child) => {
        const childName = (child.name || '').toLowerCase();
        const parentName = (child.parent?.name || '').toLowerCase();
        
        const isBlowerObject = childName.startsWith('blower__');
        const isChildOfBlower = parentName.startsWith('blower__');
        
        if (isBlowerObject && !child.isMesh) {
          child.traverse((grandchild) => {
            const grandchildName = (grandchild.name || '').toLowerCase();
            if (grandchildName.includes('front__middle') || grandchildName === 'front__middle') {
              allBlowerFrontMiddleObjects.push(grandchild);
            }
          });
        } else if (isChildOfBlower && (childName.includes('front__middle') || childName === 'front__middle')) {
          allBlowerFrontMiddleObjects.push(child);
        }
      });
    });
  }
  
  // Show/hide tunnel layer inside the GLB model based on station ID
  if (station.path.includes('station__brush2.glb')) {
    const tunnelLayerObjects = lottieManager.findLayerObjects([model], 'tunnel');
    if (tunnelLayerObjects.length > 0) {
      if (station.id === 'brush1') {
        tunnelLayerObjects.forEach(obj => {
          if (obj.isMesh) {
            obj.visible = true;
          } else {
            obj.visible = true;
            obj.traverse((child) => {
              if (child.isMesh) {
                child.visible = true;
              }
            });
          }
        });
      } else if (station.id === 'brush2') {
        lottieManager.hideLayerObjects(tunnelLayerObjects, 'tunnel');
      }
    }
  }
  
  // Load tunnel overlay if tunnel option is enabled
  await loadTunnelOverlay(loader, stationLoader, sceneSetup, station, startZ, allModels);
  
  // Apply green.png texture to tunnel layer for brush1
  if (station.id === 'brush1' && station.start_tunnel) {
    const texturePath = station.start_tunnel.startsWith('_assets/') || station.start_tunnel.startsWith('/')
      ? station.start_tunnel
      : `_assets/_objects/_textures/${station.start_tunnel}`;
    textureManager.giveObjectMapping('tunnel', texturePath, 'xy', { stationId: 'brush1' });
    
    if (gateObjects && gateObjects.length > 0) {
      gateObjects.forEach(gate => {
        if (gate.type === 'right') {
          textureManager.giveObjectMapping('gate__right', texturePath, 'xy', { stationId: 'brush1' });
        } else if (gate.type === 'left') {
          textureManager.giveObjectMapping('gate__left', texturePath, 'xy', { stationId: 'brush1' });
        }
      });
    }
  }
  
  // Apply poort texture to models that contain poort objects
  if (station.path.includes('station__poort')) {
    allModels.forEach(model => {
      textureManager.applyPoortTextureToModel(model);
    });
  }
  
  // Align front edge
  alignStationFrontEdge(allModels, startZ);
  
  // Calculate end position
  const endZ = calculateStationEndZ(allModels, startZ);
  
  // Apply Lottie animations to lottie_front and lottie_back layers
  if (station.lottie) {
    await lottieManager.applyLottieToLayers(allModels, station.lottie);
  }
  
  return { endZ, allModels };
}

// Monitor camera position and load stations when needed (mobile lazy loading)
function startStationLazyLoadingMonitor() {
  if (!stationLoadingState.isMobile) return;
  
  const checkAndLoadStations = () => {
    if (stationLoadingState.loadingInProgress || stationLoadingState.pendingStations.length === 0) {
      requestAnimationFrame(checkAndLoadStations);
      return;
    }
    
    if (!sceneSetup || !sceneSetup.getCamera()) {
      requestAnimationFrame(checkAndLoadStations);
      return;
    }
    
    const cameraZ = sceneSetup.getCamera().position.z;
    const loadThreshold = 20; // Load when camera is 20 units before previous station ends
    
    // Check if we should load the next pending station
    const nextPending = stationLoadingState.pendingStations[0];
    if (nextPending) {
      // Determine which station to check against for loading trigger
      // Station 4 loads when station 2 is nearly out of view
      // Station 5 loads when station 3 is nearly out of view
      // Station 6 loads when station 4 is nearly out of view, etc.
      const triggerStationIndex = nextPending.index - 2; // Check 2 stations back
      
      if (triggerStationIndex >= 0 && triggerStationIndex < stationLoadingState.loadedStations.length) {
        const triggerStation = stationLoadingState.loadedStations[triggerStationIndex];
        if (triggerStation && cameraZ < triggerStation.endZ + loadThreshold) {
          // Time to load this station
          stationLoadingState.loadingInProgress = true;
          const pending = stationLoadingState.pendingStations.shift();
          
          loadPendingStation(pending).then(() => {
            stationLoadingState.loadingInProgress = false;
          }).catch(error => {
            console.error(`Failed to load pending station ${pending.index + 1}:`, error);
            stationLoadingState.loadingInProgress = false;
          });
        }
      }
    }
    
    requestAnimationFrame(checkAndLoadStations);
  };
  
  checkAndLoadStations();
}

// Load a pending station
async function loadPendingStation(pending) {
  const { index, station, startZ } = pending;
  const loader = new window.GLTFLoader();
  const currentTheme = SOAP_THEMES[SOAP_THEME] || SOAP_THEMES['Power Sop'];
  
  // Merge theme values (same logic as in loadAllStations)
  // If station has tunnel enabled (truthy), use theme's tunnel texture
  if (currentTheme.tunnel && station.tunnel) {
    station.tunnel = currentTheme.tunnel;
  }
  // Also apply theme tunnel to start_tunnel if it exists
  if (currentTheme.tunnel && station.start_tunnel) {
    station.start_tunnel = currentTheme.tunnel;
  }
  
  if (station.id && currentTheme.lotties && currentTheme.lotties[station.id]) {
    const themeLotties = currentTheme.lotties[station.id];
    const mergeLottie = (themeValue, stationValue) => {
      if (themeValue !== undefined) {
        if (themeValue === null) {
          return null;
        } else if (typeof themeValue === 'string') {
          if (stationValue && typeof stationValue === 'object' && stationValue.url) {
            return {
              url: themeValue,
              startZ: stationValue.startZ,
              stopZ: stationValue.stopZ
            };
          } else {
            return themeValue;
          }
        }
      }
      return stationValue;
    };
    
    station.lottie = {
      front: mergeLottie(themeLotties.front, station.lottie?.front),
      back: mergeLottie(themeLotties.back, station.lottie?.back),
      ...(station.lottie?.customLayers && { customLayers: station.lottie.customLayers })
    };
  }
  
  try {
    const { endZ, allModels } = await loadStation(index, station, startZ, currentTheme, loader);
    
    // Store loaded station info
    stationLoadingState.loadedStations.push({
      index,
      startZ,
      endZ,
      allModels
    });
    
    // Update startZ for next pending station
    if (stationLoadingState.pendingStations.length > 0) {
      stationLoadingState.pendingStations[0].startZ = endZ;
    }
    
    // Apply UV mappings for this station
    // For lazy-loaded stations, we need to apply all UV mappings since they weren't applied initially
    // The giveObjectMapping function searches the scene, so it will find the newly loaded objects
    if (textureManager) {
      // Apply all UV mappings (they will only affect objects that exist in the scene)
      applyUVMappings(textureManager, SOAP_THEME, SOAP_THEMES, stations);
    }
    
    // Update animation controller with newly loaded objects
    // Note: This will add to existing collections, so it's safe to call multiple times
    if (animationController) {
      // The loadStation function already adds objects to the global collections
      // (allBrushBaseObjects, allBorstelStandObjects, etc.)
      // So we just need to update the animation controller
      animationController.setBrushBaseObjects(allBrushBaseObjects);
      animationController.setBorstelStandObjects(allBorstelStandObjects);
      animationController.setBorstelLiggendObjects(allBorstelLiggendObjects);
      animationController.setBorstelLiggendUpObjects(allBorstelLiggendUpObjects);
      animationController.setBlowerFrontMiddleObjects(allBlowerFrontMiddleObjects);
      animationController.setCurtainFlapObjects(allCurtainFlapObjects);
      animationController.setCurtainFlapGroups(allCurtainFlapGroups);
      animationController.setDoucheGordijnObjects(allDoucheGordijnObjects);
      animationController.setUserWensObjects(allUserWensObjects);
      animationController.setUserMediaObjects(allUserMediaObjects);
      animationController.setGateObjects(allGateObjects);
      animationController.setSpraySoapObjects(allSpraySoapObjects);
      
      // Collect lottie_front media meshes from lottie manager
      if (lottieManager) {
        const lottieFrontMediaMeshes = lottieManager.getLottieFrontMediaMeshes();
        animationController.setLottieFrontMediaObjects(lottieFrontMediaMeshes);
      }
    }
    
    // Refresh Lottie textures after station loads (with delay for async texture loading)
    setTimeout(() => {
      if (lottieManager) {
        lottieManager.refreshAllLottieTextures();
      }
    }, 500);
    
  } catch (error) {
    console.error(`Failed to load station ${index + 1}:`, error);
    throw error;
  }
}

// Load stations sequentially
async function loadAllStations() {
  const loader = new window.GLTFLoader();
  let currentZ = 0;
  
  // Check if mobile
  stationLoadingState.isMobile = mobileOptimizer ? mobileOptimizer.getIsMobile() : false;
  
  // Get current theme
  const currentTheme = SOAP_THEMES[SOAP_THEME] || SOAP_THEMES['Power Sop'];
  
  // Load all stations at start (mobile and desktop)
  const immediateLoadCount = stations.length;
  
  for (let i = 0; i < stations.length; i++) {
    const station = { ...stations[i] }; // Copy station config
    const startZ = currentZ;
    
    // Merge theme values with station config (theme overrides station)
    // If station has tunnel enabled (truthy), use theme's tunnel texture
    if (currentTheme.tunnel && station.tunnel) {
      station.tunnel = currentTheme.tunnel;
    }
    // Also apply theme tunnel to start_tunnel if it exists
    if (currentTheme.tunnel && station.start_tunnel) {
      station.start_tunnel = currentTheme.tunnel;
    }
    
    if (station.id && currentTheme.lotties && currentTheme.lotties[station.id]) {
      const themeLotties = currentTheme.lotties[station.id];
      const mergeLottie = (themeValue, stationValue) => {
        if (themeValue !== undefined) {
          if (themeValue === null) {
            return null;
          } else if (typeof themeValue === 'string') {
            if (stationValue && typeof stationValue === 'object' && stationValue.url) {
              return {
                url: themeValue,
                startZ: stationValue.startZ,
                stopZ: stationValue.stopZ
              };
            } else {
              return themeValue;
            }
          }
        }
        return stationValue;
      };
      
      station.lottie = {
        front: mergeLottie(themeLotties.front, station.lottie?.front),
        back: mergeLottie(themeLotties.back, station.lottie?.back),
        ...(station.lottie?.customLayers && { customLayers: station.lottie.customLayers })
      };
    }
    
    // Load station immediately
    if (i < immediateLoadCount) {
      try {
        const { endZ, allModels } = await loadStation(i, station, startZ, currentTheme, loader);
        currentZ = endZ;
        
        // Store loaded station info for lazy loading monitoring
        stationLoadingState.loadedStations.push({
          index: i,
          startZ,
          endZ,
          allModels
        });
        // Real loading progress for loader UI (0–100, based on immediate stations)
        const loaded = stationLoadingState.loadedStations.length;
        const percent = Math.round((loaded / immediateLoadCount) * 100);
        window.dispatchEvent(new CustomEvent('carwash-load-progress', { detail: { loaded, total: immediateLoadCount, percent } }));
      } catch (error) {
        console.error(`Failed to load station ${i + 1}:`, error);
      }
    }
  }
  
  // Lazy loading monitor no longer used - all stations load at start
  // (startStationLazyLoadingMonitor only runs when pendingStations has items)
  
  
  // Apply poort texture to any remaining poort objects (in case texture loaded after models)
  textureManager.applyPoortTextureToScene();

  // Apply UV mappings
  applyUVMappings(textureManager, SOAP_THEME, SOAP_THEMES, stations);
  
  // Refresh Lottie textures after UV mappings are applied (with delay to account for async texture loading)
  // This helps ensure Lotties render correctly when UV maps are present
  setTimeout(() => {
    if (lottieManager) {
      lottieManager.refreshAllLottieTextures();
    }
  }, 1000); // 1 second delay to allow UV map textures to load
  
  // Set up animation controller with collected objects
  animationController.setBrushBaseObjects(allBrushBaseObjects);
  animationController.setBorstelStandObjects(allBorstelStandObjects);
  animationController.setBorstelLiggendObjects(allBorstelLiggendObjects);
  animationController.setBorstelLiggendUpObjects(allBorstelLiggendUpObjects);
  animationController.setBlowerFrontMiddleObjects(allBlowerFrontMiddleObjects);
  animationController.setCurtainFlapObjects(allCurtainFlapObjects);
  animationController.setCurtainFlapGroups(allCurtainFlapGroups);
  animationController.setDoucheGordijnObjects(allDoucheGordijnObjects);
  animationController.setUserWensObjects(allUserWensObjects);
  animationController.setUserMediaObjects(allUserMediaObjects);
  animationController.setGateObjects(allGateObjects);
  animationController.setSpraySoapObjects(allSpraySoapObjects);
  
  // Collect lottie_front media meshes from lottie manager
  if (lottieManager) {
    const lottieFrontMediaMeshes = lottieManager.getLottieFrontMediaMeshes();
    animationController.setLottieFrontMediaObjects(lottieFrontMediaMeshes);
  }
  
  // Start animation
  animationController.animate();
  // Wait for sound preload so loader can hide after audio is ready
  if (soundEffectsController && typeof soundEffectsController.whenPreloadComplete === 'function') {
    await soundEffectsController.whenPreloadComplete();
  }
  window.dispatchEvent(new CustomEvent('carwash-ready'));
}

/* ===== INITIALIZATION ===== */
function init() {
  // Wait for GLTFLoader to be available
  if (typeof window.GLTFLoader === 'undefined') {
    window.addEventListener('gltfloader-ready', init);
    return;
  }
  
  // Initialize scene setup
  const canvas = document.getElementById('scene');
  sceneSetup = new SceneSetup(canvas);
  
  // Get mobile optimizer from scene setup
  mobileOptimizer = sceneSetup.getMobileOptimizer();
  
  // Show mobile optimization status
  if (mobileOptimizer && mobileOptimizer.getIsMobile()) {
    const mobileStatusEl = document.getElementById('mobileStatus');
    if (mobileStatusEl) {
      mobileStatusEl.style.display = 'block';
      const optimizations = mobileOptimizer.getOptimizations();
      mobileStatusEl.textContent = `Mobile: ${optimizations.pixelRatio}x (shadows disabled)`;
      if (mobileOptimizer.getIsLowEnd()) {
        mobileStatusEl.textContent += ' (Low-end)';
      }
    }
  }
  
  // Initialize font loader
  fontLoader = new FontLoader();
  fontLoader.loadSinkFont().catch(err => console.error('Font loading error:', err));
  
  // Initialize camera controller with scroll checkpoints
  cameraController = new CameraController(sceneSetup.getCamera(), sceneSetup, scrollCheckpoints);
  
  // Initialize scroll mode toggle button
  setupScrollModeToggle();
  
  // Initialize texture manager
  textureManager = new TextureManager(sceneSetup);
  textureManager.loadPoortTexture();
  
  // Make giveObjectMapping available globally for easy use
  window.giveObjectMapping = (objectName, imagePath, projectionAxis, options) => {
    textureManager.giveObjectMapping(objectName, imagePath, projectionAxis, options);
  };
  
  // Initialize Lottie manager
  lottieManager = new LottieManager(sceneSetup, mobileOptimizer);
  
  // Make lottieManager available globally
  window.lottieManager = lottieManager;
  
  // Initialize animation controller
  animationController = new AnimationController(sceneSetup, cameraController, lottieManager);
  
  // Initialize Lottie Z-Index Trigger
  lottieZIndexTrigger = new LottieZIndexTrigger(sceneSetup);
  
  // Make lottieZIndexTrigger available globally for configuration
  window.lottieZIndexTrigger = lottieZIndexTrigger;
  
  // Initialize sound effects controller (plays sounds when camera is close to objects)
  soundEffectsController = new SoundEffectsController(sceneSetup, soundEffects, backgroundAudio);
  soundEffectsController.start();
  window.soundEffectsController = soundEffectsController;
  
  // Make cameraController available globally
  window.cameraController = cameraController;
  
  // Initialize station loader
  const loader = new window.GLTFLoader();
  stationLoader = new StationLoader(loader);
  
  // Start loading all stations
  loadAllStations();
}

// Start initialization
init();

// Update debug info
function updateDebugInfo() {
  if (cameraController && sceneSetup) {
    const currentZ = sceneSetup.getCamera().position.z;
    const currentZEl = document.getElementById('currentZ');
    if (currentZEl) {
      currentZEl.textContent = currentZ.toFixed(2);
    }
    
    // When camera enters trigger zone, add class once so :before/:after animation plays 1 time (no remove)
    const windowFrame = document.querySelector('.window_frame');
    if (windowFrame && currentZ >= -110 && currentZ <= -75) {
      windowFrame.classList.add('window_frame--animate');
    }
    const windowFrameSoap = document.getElementById('window_frame_soap');
    if (windowFrameSoap && currentZ >= -142 && currentZ <= -134) {
      windowFrameSoap.classList.add('window_frame--soap--animate');
    }
    
  }
  requestAnimationFrame(updateDebugInfo);
}
updateDebugInfo();

// Ratio toggle functionality
const ratioToggleBtn = document.getElementById('ratioToggleBtn');
const card = document.getElementById('card');
let isMobileRatio = false;

if (ratioToggleBtn && card) {
  ratioToggleBtn.addEventListener('click', () => {
    isMobileRatio = !isMobileRatio;
    
    if (isMobileRatio) {
      card.classList.add('mobile-ratio');
      ratioToggleBtn.textContent = 'Switch to Full Screen';
    } else {
      card.classList.remove('mobile-ratio');
      ratioToggleBtn.textContent = 'Switch to 9:16';
    }
    
    // Trigger resize after DOM update
    requestAnimationFrame(() => {
      if (sceneSetup && sceneSetup.resize) {
        sceneSetup.resize();
      }
    });
  });
}

// Scroll mode toggle functionality
function setupScrollModeToggle() {
  const scrollModeBtn = document.getElementById('scrollModeBtn');
  
  if (!scrollModeBtn) return;
  
  // Update button state based on current mode
  const updateScrollModeButton = () => {
    if (cameraController && cameraController.getCheckpointMode()) {
      scrollModeBtn.textContent = 'Checkpoint Mode';
      scrollModeBtn.classList.remove('free-mode');
      scrollModeBtn.classList.add('checkpoint-mode');
    } else {
      scrollModeBtn.textContent = 'Free Scroll Mode';
      scrollModeBtn.classList.remove('checkpoint-mode');
      scrollModeBtn.classList.add('free-mode');
    }
  };
  
  // Initial state update
  updateScrollModeButton();
  
  // Toggle on click
  scrollModeBtn.addEventListener('click', () => {
    if (cameraController) {
      const isCheckpointMode = cameraController.toggleCheckpointMode();
      updateScrollModeButton();
    }
  });
}
