// Lottie animation manager for carwash.html
import * as THREE from 'three';
import lottie from 'lottie-web';
import JSZip from 'jszip';
import { GAMMA } from './carwash-config.js';

export class LottieManager {
  constructor(sceneSetup, mobileOptimizer) {
    this.sceneSetup = sceneSetup;
    this.mobileOptimizer = mobileOptimizer;
    this.lottieAnimations = [];
    this.lottieMeshes = []; // Track all Lottie meshes for forced updates
    this.lastCameraZ = null; // Track last camera Z position
    this.brush1BackLottieMeshes = []; // Track brush1 back lottie meshes for position animation
    this.lottieFrontMediaMeshes = []; // Track lottie_front meshes from station__message--media.glb for Y movement
  }

  // Helper function to load Lottie animation and create texture
  async loadLottieTexture(lottieConfig) {
    try {
      const lottieUrl = typeof lottieConfig === 'string' ? lottieConfig : lottieConfig.url;
      if (!lottieUrl) return null;
      
      // Fetch and extract JSON from .lottie file
      const response = await fetch(lottieUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch Lottie: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const zip = await JSZip.loadAsync(blob);
      
      // Extract JSON from .lottie file
      let jsonFile = null;
      zip.forEach((relativePath, file) => {
        if (!file.dir && relativePath.endsWith('.json')) {
          jsonFile = file;
        }
      });
      
      if (!jsonFile) {
        throw new Error('No JSON file found in .lottie archive');
      }
      
      const jsonString = await jsonFile.async('string');
      const animationData = JSON.parse(jsonString);
      
      // Extract images from .lottie file, convert to blob URLs, and preload them
      const imagePromises = [];
      if (animationData.assets && Array.isArray(animationData.assets)) {
        for (const asset of animationData.assets) {
          if (asset.p && asset.p !== '') {
            // Asset has an image path (p property)
            const imagePath = asset.p;
            const imageFileName = imagePath.split('/').pop() || imagePath;
            const originalPath = asset.p; // Store original path
            
            // Find the image file in the zip
            // Try multiple matching strategies:
            // 1. Exact path match (e.g., "images/1.png")
            // 2. Filename match in images folder (e.g., "images/1.png" matches "1.png")
            // 3. Just filename match anywhere
            let imageFile = null;
            zip.forEach((relativePath, file) => {
              if (!file.dir) {
                const fileName = relativePath.split('/').pop();
                const normalizedPath = relativePath.replace(/\\/g, '/'); // Normalize path separators
                const normalizedImagePath = imagePath.replace(/\\/g, '/');
                
                // Try exact match first
                if (normalizedPath === normalizedImagePath || normalizedPath === `images/${imageFileName}`) {
                  imageFile = file;
                }
                // Try filename match in images folder
                else if (normalizedPath.startsWith('images/') && fileName === imageFileName) {
                  imageFile = file;
                }
                // Try just filename match
                else if (fileName === imageFileName) {
                  imageFile = file;
                }
              }
            });
            
            if (imageFile) {
              // Create a promise to load the image
              const imagePromise = (async () => {
                try {
                  // Convert image to blob URL
                  const imageBlob = await imageFile.async('blob');
                  
                  // Create blob URL
                  const blobUrl = URL.createObjectURL(imageBlob);
                  
                  // Preload the image to ensure it's ready
                  const img = new Image();
                  await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = blobUrl;
                  });
                  
                  // Store blob URL for cleanup later
                  if (!animationData._blobUrls) {
                    animationData._blobUrls = [];
                  }
                  animationData._blobUrls.push(blobUrl);
                  
                  // Store preloaded image and update asset
                  asset._img = img; // Store image element
                  asset.p = blobUrl; // Update path to blob URL
                  asset.e = 1; // Mark as embedded (critical: tells Lottie not to load as external file)
                  asset.u = ''; // Clear the URL path since we're using embedded blob URL
                  
                  return { asset, blobUrl, originalPath };
                } catch (error) {
                  console.warn(`Failed to convert image ${imageFileName} to blob URL:`, error);
                  return null;
                }
              })();
              
              imagePromises.push(imagePromise);
            } else {
              console.warn(`Image file not found in .lottie archive: ${imagePath} (looking for ${imageFileName})`);
            }
          }
        }
      }
      
      // Wait for all images to be loaded
      await Promise.all(imagePromises);
      
      // Get animation dimensions
      const width = animationData.w || 512;
      const height = animationData.h || 512;
      
      // Create canvas for Lottie animation
      // Safari compatibility: Set both style and attribute dimensions
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      // Safari compatibility: Use 2d context with proper settings
      const ctx = canvas.getContext('2d', {
        alpha: true,
        willReadFrequently: false,
        desynchronized: false
      });
      
      // Safari compatibility: Ensure canvas is properly initialized
      ctx.clearRect(0, 0, width, height);
      
      // Create Three.js texture from canvas with Safari-compatible settings
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.flipY = true; // Fix upside-down issue
      texture.format = THREE.RGBAFormat;
      texture.premultiplyAlpha = false; // Safari compatibility
      texture.generateMipmaps = false; // Better performance and Safari compatibility
      
      // Determine if animation should autoplay and loop initially
      // String URL => autoplay. Object with startZ number => autoplay (station front/back play immediately).
      // Object with startZ null => no autoplay ("button only" / no Z-trigger).
      const shouldAutoplay = typeof lottieConfig === 'string' ||
        (typeof lottieConfig === 'object' && lottieConfig && lottieConfig.startZ != null);
      // If times is set to 1, don't loop. If pause/resume is configured, don't loop initially (will be controlled by pause/resume)
      // Otherwise, loop will be controlled by triggers
      const hasPauseResume = typeof lottieConfig === 'object' && lottieConfig.pauseZ !== null && lottieConfig.resumeZ !== null;
      const shouldLoop = typeof lottieConfig === 'object' && (lottieConfig.times === 1 || hasPauseResume) ? false : true;
      
      // Check if we have blob URLs in assets (images converted to blobs)
      const hasBlobUrls = animationData.assets && animationData.assets.some(asset => 
        asset.p && asset.p.startsWith('blob:')
      );
      
      // Prepare animation config
      const animConfig = {
        renderer: 'canvas',
        loop: shouldLoop,
        autoplay: shouldAutoplay,
        animationData: animationData,
        rendererSettings: {
          context: ctx,
          clearCanvas: true,
          preserveAspectRatio: 'xMidYMid meet',
          progressiveLoad: false,
          hideOnTransparent: false
        }
      };
      
      // If we have blob URLs, configure to use them directly
      if (hasBlobUrls) {
        // Set assetsPath to empty to prevent path prepending
        animConfig.assetsPath = '';
        animConfig.rendererSettings.imageAssetsPath = '';
        
        // Provide preloaded images directly to the renderer
        // The images are already stored in asset._img and asset.p points to blob URL
      }
      
      // Load Lottie animation with Safari-compatible settings
      const anim = lottie.loadAnimation(animConfig);
      
      // Store blob URLs cleanup function on animation for later cleanup
      if (animationData._blobUrls && animationData._blobUrls.length > 0) {
        anim._blobUrls = animationData._blobUrls;
      }
      
      // Safari compatibility: Force initial texture update
      texture.needsUpdate = true;
      
      // Update texture when animation frame changes
      // Use throttled updates based on mobile optimizer settings
      let lastFrame = 0;
      let lastUpdateTime = 0;
      const targetFPS = this.mobileOptimizer ? this.mobileOptimizer.getLottieFPS() : 60;
      const frameInterval = 1000 / targetFPS;
      
      anim.addEventListener('enterFrame', () => {
        // Throttle updates based on mobile optimizer FPS settings
        const currentTime = Date.now();
        const currentFrame = anim.currentFrame;
        
        if (currentFrame !== lastFrame && (currentTime - lastUpdateTime >= frameInterval)) {
          texture.needsUpdate = true;
          lastFrame = currentFrame;
          lastUpdateTime = currentTime;
        }
      });
      
      // Safari compatibility: Also update on animation segment complete
      anim.addEventListener('segmentStart', () => {
        texture.needsUpdate = true;
      });
      
      // Return both texture and animation instance
      // If it's a string, create a config object with default values (autoplay, no triggers)
      const config = typeof lottieConfig === 'object' ? lottieConfig : { 
        url: lottieUrl, 
        startZ: null,  // Start immediately
        stopZ: null,   // Loop forever
        times: null    // Play count (null = infinite loop)
      };
      
      // Ensure times property exists (default to null for infinite loop)
      if (config.times === undefined) {
        config.times = null;
      }
      
      return { texture, anim, config };
    } catch (error) {
      const errorUrl = typeof lottieConfig === 'string' ? lottieConfig : (lottieConfig?.url || 'unknown');
      console.error(`Failed to load Lottie from ${errorUrl}:`, error);
      return null;
    }
  }

  // Helper function to find stationId by traversing up parent chain
  findStationId(mesh) {
    let current = mesh;
    while (current) {
      if (current.userData && current.userData.stationId) {
        return current.userData.stationId;
      }
      current = current.parent;
    }
    return null;
  }

  // Helper function to find objects by layer name
  findLayerObjects(allModels, layerName) {
    const foundObjects = [];
    
    allModels.forEach(model => {
      model.traverse((child) => {
        const name = (child.name || '').toLowerCase();
        const searchName = layerName.toLowerCase();
        
        // Check if this is a group or mesh with matching name
        if (name === searchName || name.includes(searchName)) {
          if (child.isMesh) {
            foundObjects.push(child);
          } else if (!child.isMesh) {
            // This is a group, find meshes within it
            child.visible = true;
            child.traverse((grandchild) => {
              if (grandchild.isMesh) {
                if (!foundObjects.includes(grandchild)) {
                  foundObjects.push(grandchild);
                }
              }
            });
          }
        }
      });
    });
    
    // Also check for meshes that are direct children of layer groups
    allModels.forEach(model => {
      model.traverse((child) => {
        if (child.isMesh) {
          const parentName = (child.parent?.name || '').toLowerCase();
          if (parentName === layerName.toLowerCase() || parentName.includes(layerName.toLowerCase())) {
            if (!foundObjects.includes(child)) {
              foundObjects.push(child);
            }
          }
        }
      });
    });
    
    return foundObjects;
  }

  // Helper function to apply texture to layer objects
  applyTextureToLayerObjects(layerObjects, texture, layerName) {
    if (layerObjects.length === 0) {
      console.warn(`No ${layerName} objects found.`);
      return;
    }
    
    layerObjects.forEach((mesh) => {
      // Create material with Lottie texture using ShaderMaterial for full control (no lighting, gamma control)
      const createMaterialWithTexture = (baseMat) => {
        // Use ShaderMaterial with gamma control to prevent any lighting effects
        // Uses global GAMMA value (1.0 = no change, higher = darker, lower = brighter)
        
        return new THREE.ShaderMaterial({
          uniforms: {
            map: { value: texture },
            opacity: { value: baseMat?.opacity !== undefined ? baseMat.opacity : 1.0 },
            gamma: { value: GAMMA }
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
            uniform float opacity;
            uniform float gamma;
            varying vec2 vUv;
            
            void main() {
              vec4 texColor = texture2D(map, vUv);
              // Apply gamma correction: pow(color, 1.0/gamma)
              // gamma = 1.0 means no change, higher gamma = darker
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,
          side: baseMat?.side || THREE.FrontSide,
          transparent: true,
          depthWrite: false, // Safari compatibility with transparent textures - don't write to depth buffer
          depthTest: true, // Enable depth testing so objects can properly occlude Lotties when in front
          fog: false // Disable fog effects
        });
      };
      
      // Make sure mesh is visible
      mesh.visible = true;
      
      // Don't set renderOrder - let objects render in their natural order based on depth
      
      // Completely disable shadows - Lottie meshes should not cast or receive shadows
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      
      // Mark mesh as having custom texture (prevents material updates from overwriting it)
      mesh.userData.hasCustomTexture = true;
      mesh.userData.customTextureType = layerName;
      mesh.userData.isLottie = true; // Mark as Lottie to prevent any material updates
      mesh.userData.lottieTexture = texture; // Store texture reference for forced updates
      
      // Set render order to ensure Lotties render after UV-mapped objects
      // Higher renderOrder means it renders later (on top)
      mesh.renderOrder = 1000; // High render order to ensure Lotties render after other objects
      
      // Dispose old material and texture before applying new one
      if (mesh.material) {
        const oldMaterials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        oldMaterials.forEach(oldMat => {
          if (oldMat) {
            // Dispose texture from uniforms if it exists
            if (oldMat.uniforms && oldMat.uniforms.map && oldMat.uniforms.map.value) {
              const oldTexture = oldMat.uniforms.map.value;
              if (oldTexture && oldTexture.dispose && oldTexture !== texture) {
                oldTexture.dispose();
              }
            }
            // Dispose material
            if (oldMat.dispose) {
              oldMat.dispose();
            }
          }
        });
      }
      
      // Apply new material
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map(mat => createMaterialWithTexture(mat));
        } else {
          mesh.material = createMaterialWithTexture(mesh.material);
        }
        mesh.material.needsUpdate = true;
      } else {
        mesh.material = createMaterialWithTexture(null);
      }
      
      // Store mesh reference for forced updates
      if (!this.lottieMeshes.includes(mesh)) {
        this.lottieMeshes.push(mesh);
      }
      
      // Track brush1 back lottie meshes for position animation
      // Find stationId by traversing up parent chain
      const stationId = this.findStationId(mesh);
      if (layerName === 'lottie_back' && stationId === 'brush1') {
        if (!this.brush1BackLottieMeshes.includes(mesh)) {
          this.brush1BackLottieMeshes.push(mesh);
          // Store original X position
          if (mesh.userData.originalX === undefined) {
            mesh.userData.originalX = mesh.position.x;
          }
        }
      }
      
      // Track lottie_front meshes from station__message--media.glb for Y movement animation
      if (layerName === 'lottie_front' && stationId === 'message__media') {
        if (!this.lottieFrontMediaMeshes.includes(mesh)) {
          this.lottieFrontMediaMeshes.push(mesh);
          // Store original Y position
          if (mesh.userData.originalY === undefined) {
            mesh.userData.originalY = mesh.position.y;
          }
          // Store original X rotation
          if (mesh.userData.originalRotationX === undefined) {
            mesh.userData.originalRotationX = mesh.rotation.x;
          }
        }
      }
      
    });
    
  }

  // Helper function to hide layer objects
  hideLayerObjects(layerObjects, layerName) {
    if (layerObjects.length === 0) {
      return;
    }
    
    layerObjects.forEach((obj) => {
      if (obj.isMesh) {
        obj.visible = false;
      } else {
        // If it's a group, hide it and all children
        obj.visible = false;
        obj.traverse((child) => {
          if (child.isMesh) {
            child.visible = false;
          }
        });
      }
    });
    
  }

  // Helper function to apply lottie to a specific layer
  async applyLottieToLayer(allModels, layerName, lottieConfig) {
    const layerObjects = this.findLayerObjects(allModels, layerName);
    
    if (lottieConfig) {
      const result = await this.loadLottieTexture(lottieConfig);
      if (result && result.texture) {
        this.applyTextureToLayerObjects(layerObjects, result.texture, layerName);
        
        // Store animation instance with trigger config
        if (result.anim && result.config) {
          // Started: true if startZ is null (string URL, plays immediately) or startZ is a number (station Lotties now autoplay)
          const started = result.config.startZ === null || typeof result.config.startZ === 'number';
          // Store mesh UUIDs so cleanup only removes this animation when cleaning these specific meshes (not all stations)
          const meshIds = new Set(layerObjects.map((m) => m.uuid));
          const lottieData = {
            anim: result.anim,
            startZ: result.config.startZ,
            stopZ: result.config.stopZ,
            times: result.config.times, // Number of times to play (null = infinite)
            layerName: layerName,
            meshIds, // meshes this animation was applied to (for scoped cleanup)
            started: started,
            stopped: false,
            playCount: 0 // Track how many times the animation has completed
          };
          
          // Set up complete event listener to track play count
          if (result.config.times !== null && result.config.times > 0) {
            result.anim.addEventListener('complete', () => {
              lottieData.playCount++;
              
              // If we've played the specified number of times, stop looping
              if (lottieData.playCount >= lottieData.times) {
                result.anim.setLoop(false);
                lottieData.stopped = true;
              }
            });
          }
          
          this.lottieAnimations.push(lottieData);
        }
        return true;
      } else {
        console.warn(`[Lottie] Failed to load ${layerName} texture`);
        return false;
      }
    } else {
      this.hideLayerObjects(layerObjects, layerName);
      return false;
    }
  }

  // Function to apply Lottie animation textures to lottie_front and lottie_back layers
  async applyLottieToLayers(allModels, lottieConfig) {
    if (!lottieConfig) return;
    
    // Process custom layers first (if specified)
    if (lottieConfig.customLayers) {
      for (const [layerName, layerLottieConfig] of Object.entries(lottieConfig.customLayers)) {
        await this.applyLottieToLayer(allModels, layerName, layerLottieConfig);
      }
    }
    
    // Process lottie_front layer
    await this.applyLottieToLayer(allModels, 'lottie_front', lottieConfig.front);
    
    // Process lottie_back layer
    await this.applyLottieToLayer(allModels, 'lottie_back', lottieConfig.back);
  }

  // Function to update Lottie animations based on camera Z position or camera distance
  // camera - optional; required for distance-based triggers (e.g. triggerDistance)
  updateLottieTriggers(cameraZ, camera = null) {
    // Check if camera Z has changed significantly (more than 0.1 units)
    const zChanged = this.lastCameraZ === null || Math.abs(cameraZ - this.lastCameraZ) > 0.1;
    
    // Force texture updates when camera Z changes (helps with UV map rendering issues)
    if (zChanged) {
      this.forceLottieTextureUpdates();
      this.lastCameraZ = cameraZ;
    }

    const _camPos = new THREE.Vector3();
    const _meshPos = new THREE.Vector3();
    
    this.lottieAnimations.forEach((lottieData) => {
      const { anim, startZ, stopZ, pauseZ, resumeZ, pauseFrame, started, stopped, paused, pausedAtFrame, layerName } = lottieData;
      
      if (!anim) return;
      
      // Distance-only mask (e.g. user__media): only distance trigger; when object is behind camera and out of range, reset mask
      if (lottieData.triggerDistance != null && camera && lottieData.distanceTargetMeshes && lottieData.distanceTargetMeshes.length > 0) {
        // Update camera world matrix before getting position
        camera.updateMatrixWorld(true);
        camera.getWorldPosition(_camPos);
        let minDist = Infinity;
        let objectWorldZ = null;
        lottieData.distanceTargetMeshes.forEach((mesh) => {
          if (mesh && mesh.getWorldPosition) {
            // Update mesh world matrix before getting position (important for mobile/hierarchical objects)
            mesh.updateMatrixWorld(true);
            mesh.getWorldPosition(_meshPos);
            const d = _camPos.distanceTo(_meshPos);
            if (d < minDist) minDist = d;
            if (objectWorldZ === null) objectWorldZ = _meshPos.z;
          }
        });
        const shouldBePlaying = minDist <= lottieData.triggerDistance;
        // Only reset when object is clearly behind camera AND we're out of trigger range (never reset while in range)
        const objectBehindCamera = objectWorldZ !== null && _camPos.z < objectWorldZ;
        const hasValidDistance = minDist !== Infinity;
        const resetWhenBehind = hasValidDistance && objectBehindCamera && minDist > lottieData.triggerDistance;
        
        // Debug logging for mobile distance issues (can be removed after testing)
        if (window.innerWidth <= 768 && Math.abs(minDist - lottieData.triggerDistance) < 5) {
          console.log(`[Distance Mask Debug] ${layerName}: minDist=${minDist.toFixed(2)}, triggerDistance=${lottieData.triggerDistance}, shouldPlay=${shouldBePlaying}, camZ=${_camPos.z.toFixed(2)}, objZ=${objectWorldZ?.toFixed(2)}`);
        }
        if (resetWhenBehind) {
          anim.pause();
          anim.goToAndStop(0, true);
          lottieData.started = false;
          lottieData.playCount = 0;
          lottieData.completed = false;
          lottieData.stopped = false;
          return;
        }
        if (shouldBePlaying && !started) {
          anim.goToAndStop(0, true); // Always start from frame 0 when camera enters range
          anim.setLoop(lottieData.times === 1 ? false : true);
          anim.play();
          lottieData.started = true;
        } else if (!shouldBePlaying && started) {
          anim.pause();
          anim.goToAndStop(0, true);
          lottieData.started = false;
        }
        return;
      }
      
      // Handle pause/resume logic for animations with pauseFrame and resumeZ
      // Pause when animation reaches a certain percentage, resume when camera reaches resumeZ
      if (lottieData.pauseFrame !== undefined && resumeZ !== null && startZ !== null && started) {
        const { pauseFrame, pausedAtFrame } = lottieData;
        const currentFrame = anim.currentFrame || 0;
        
        // Check resume condition FIRST (before pause check) to ensure it takes priority
        // Resume when camera reaches resumeZ
        let shouldResume = false;
        if (startZ < 0) {
          // Camera moving backward (negative Z values)
          shouldResume = cameraZ <= resumeZ;
        } else {
          // Camera moving forward (positive Z values)
          shouldResume = cameraZ >= resumeZ;
        }
        
        if (shouldResume && pausedAtFrame) {
          // Resume playing from pause frame when camera reaches or passes resumeZ
          if (anim.isPaused) {
            anim.play();
            lottieData.pausedAtFrame = false;
            lottieData.paused = false;
            console.log(`[Lottie] Resumed ${layerName} at camera Z ${cameraZ} (resumeZ: ${resumeZ})`);
          }
        } else if (shouldResume && !pausedAtFrame && currentFrame >= pauseFrame) {
          // If camera has passed resumeZ but animation hasn't paused yet, skip the pause
          // This handles the case where camera reaches -36 before animation reaches 40%
          lottieData.pausedAtFrame = false; // Mark as not paused so it continues playing
        }
        
        // Check if animation has reached the pause frame (40% of animation)
        // Only pause if we haven't reached resumeZ yet
        if (!pausedAtFrame && !shouldResume && currentFrame >= pauseFrame) {
          // Pause at the specified frame (40%)
          anim.goToAndStop(pauseFrame, true);
          anim.pause();
          lottieData.pausedAtFrame = true;
          lottieData.paused = true;
          console.log(`[Lottie] Paused ${layerName} at frame ${pauseFrame} (40%)`);
        }
      }
      
      // Check if animation should start or stop based on startZ (distance-only masks handled above)
      let shouldBePlaying = false;
      if (startZ !== null) {
        // For negative startZ values (camera moving backward), trigger when cameraZ <= startZ
        // For positive startZ values (camera moving forward), trigger when cameraZ >= startZ
        if (startZ < 0) {
          shouldBePlaying = cameraZ <= startZ;
        } else {
          shouldBePlaying = cameraZ >= startZ;
        }
      }

      if (startZ !== null) {
        
        // If animation has times: 1 and has already completed (stopped), don't restart it
        // This prevents animations that should play only once from restarting when camera goes back
        const shouldNotRestart = (lottieData.times === 1 && lottieData.stopped && lottieData.playCount >= 1) || 
                                 (lottieData.completed === true);
        
        if (shouldBePlaying && !started && !shouldNotRestart) {
          // Start the animation
          anim.play();
          // Set looping based on times property and pause/resume logic
          // If pause/resume is configured, disable looping so it can pause and resume properly
          // If times is 1, don't loop. Otherwise, enable looping and let complete event handle stopping
          if (lottieData.pauseFrame !== undefined && lottieData.resumeZ !== null) {
            // Disable looping for pause/resume animations so they don't restart from beginning
            anim.setLoop(false);
          } else if (lottieData.times === 1) {
            anim.setLoop(false);
          } else {
            // Re-enable looping (it may have been disabled if play count was reached)
            // The complete event listener will handle stopping after the specified number of times
            anim.setLoop(true);
          }
          lottieData.started = true;
          // Reset stopped flag if it was set due to play count
          if (lottieData.stopped && lottieData.times !== null) {
            lottieData.stopped = false;
          }
        } else if (shouldBePlaying && started && anim.isPaused && !lottieData.pausedAtFrame && !shouldNotRestart) {
          // If animation should be playing but is paused (and not paused at frame), resume it
          // This handles cases where animation might have been paused for other reasons
          anim.play();
        } else if (!shouldBePlaying && started && !shouldNotRestart) {
          // Stop/pause the animation when scrolling back past startZ
          // BUT: Don't reset if animation has already completed (times: 1 and stopped)
          anim.pause();
          // Reset animation to start frame (frame 0)
          anim.goToAndStop(0, true);
          lottieData.started = false;
          lottieData.pausedAtFrame = false;
          lottieData.paused = false;
          // Reset stopped flag and play count so it can restart properly
          // BUT: Don't reset if animation has already completed (times: 1 and stopped)
          if (lottieData.stopped && !(lottieData.times === 1 && lottieData.playCount >= 1)) {
            lottieData.stopped = false;
          }
          if (!(lottieData.times === 1 && lottieData.playCount >= 1)) {
            lottieData.playCount = 0; // Reset play count when scrolling back (unless already completed)
          }
        } else if (!started && startZ !== null) {
          // Debug logging when close to trigger point (Z-based only)
          const distance = Math.abs(cameraZ - startZ);
          if (distance < 5 && (!lottieData.lastDebugTime || Date.now() - lottieData.lastDebugTime > 1000)) {
            lottieData.lastDebugTime = Date.now();
          }
        }
      }
      
      // Check if animation should stop looping (only if it has started)
      if (started && stopZ !== null) {
        let shouldStop = false;
        if (stopZ < 0) {
          // For negative stopZ: stop when camera reaches or passes stopZ
          shouldStop = cameraZ <= stopZ;
        } else {
          // For positive stopZ: stop when camera reaches or passes stopZ
          shouldStop = cameraZ >= stopZ;
        }
        
        if (shouldStop && !stopped) {
          // Stop looping when reaching stopZ
          anim.setLoop(false);
          lottieData.stopped = true;
        } else if (!shouldStop && stopped) {
          // Resume looping when scrolling back past stopZ (but still past startZ)
          anim.setLoop(true);
          lottieData.stopped = false;
        }
      }
    });
  }
  
  // Force texture updates on all Lottie meshes (useful when UV maps affect rendering)
  forceLottieTextureUpdates() {
    this.lottieMeshes.forEach((mesh) => {
      if (mesh && mesh.userData && mesh.userData.lottieTexture) {
        const texture = mesh.userData.lottieTexture;
        // Force texture update
        texture.needsUpdate = true;
        
        // Force material update
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(mat => {
              if (mat && mat.uniforms && mat.uniforms.map) {
                mat.uniforms.map.value = texture;
                mat.needsUpdate = true;
              }
            });
          } else {
            if (mesh.material.uniforms && mesh.material.uniforms.map) {
              mesh.material.uniforms.map.value = texture;
              mesh.material.needsUpdate = true;
            }
          }
        }
      }
    });
  }

  getLottieAnimations() {
    return this.lottieAnimations;
  }
  
  // Get brush1 back lottie meshes for position animation
  // Returns array of objects in format { object: mesh, originalX: number } to match user__wens structure
  getBrush1BackLottieMeshes() {
    return this.brush1BackLottieMeshes.map(mesh => {
      return {
        object: mesh,
        originalX: mesh.userData?.originalX !== undefined ? mesh.userData.originalX : mesh.position.x
      };
    });
  }
  
  // Get lottie_front media meshes for Y movement animation
  // Returns array of objects in format { object: mesh, originalY: number, originalRotationX: number } to match user__media structure
  getLottieFrontMediaMeshes() {
    return this.lottieFrontMediaMeshes.map(mesh => {
      return {
        object: mesh,
        originalY: mesh.userData?.originalY !== undefined ? mesh.userData.originalY : mesh.position.y,
        originalRotationX: mesh.userData?.originalRotationX !== undefined ? mesh.userData.originalRotationX : mesh.rotation.x
      };
    });
  }
  
  // Public method to refresh all Lottie textures (useful after UV maps are applied)
  refreshAllLottieTextures() {
    this.forceLottieTextureUpdates();
    // Also trigger a render to ensure changes are visible
    if (this.sceneSetup && this.sceneSetup.render) {
      this.sceneSetup.render();
    }
  }
  
  // Clean up old lottie animations for specific layers
  cleanupLottieAnimationsForLayers(allModels, layerNames) {
    if (!Array.isArray(layerNames)) {
      layerNames = [layerNames];
    }
    
    // Find meshes for these layers
    const meshesToCleanup = [];
    layerNames.forEach(layerName => {
      const layerObjects = this.findLayerObjects(allModels, layerName);
      meshesToCleanup.push(...layerObjects);
    });
    const cleanupMeshIds = new Set(meshesToCleanup.map((m) => m.uuid));

    // Find and remove only animations that were applied to these specific meshes (not all lottie_front/lottie_back)
    const animationsToRemove = [];
    this.lottieAnimations.forEach((lottieData, index) => {
      if (!layerNames.includes(lottieData.layerName)) return;
      // If this animation has meshIds, only remove if it was applied to at least one of the meshes we're cleaning
      if (lottieData.meshIds && lottieData.meshIds.size > 0) {
        const overlaps = [...lottieData.meshIds].some((id) => cleanupMeshIds.has(id));
        if (!overlaps) return;
      }
      // Stop and destroy the animation
      if (lottieData.anim) {
        try {
          lottieData.anim.stop();
          lottieData.anim.destroy();
        } catch (e) {
          console.warn('Error destroying lottie animation:', e);
        }
      }
      animationsToRemove.push(index);
    });
    
    // Remove animations from array (in reverse order to maintain indices)
    animationsToRemove.reverse().forEach(index => {
      this.lottieAnimations.splice(index, 1);
    });
    
    // Dispose textures and materials for these meshes
    meshesToCleanup.forEach(mesh => {
      if (mesh.userData && mesh.userData.lottieTexture) {
        // Dispose old texture
        const oldTexture = mesh.userData.lottieTexture;
        if (oldTexture && oldTexture.dispose) {
          oldTexture.dispose();
        }
        mesh.userData.lottieTexture = null;
      }
      
      // Dispose old material
      if (mesh.material) {
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach(material => {
          if (material) {
            // Dispose texture from uniforms if it exists
            if (material.uniforms && material.uniforms.map && material.uniforms.map.value) {
              const texture = material.uniforms.map.value;
              if (texture && texture.dispose) {
                texture.dispose();
              }
            }
            // Dispose material
            if (material.dispose) {
              material.dispose();
            }
          }
        });
      }
      
      // Remove from lottieMeshes array
      const meshIndex = this.lottieMeshes.indexOf(mesh);
      if (meshIndex !== -1) {
        this.lottieMeshes.splice(meshIndex, 1);
      }
      
      // Remove from brush1BackLottieMeshes if present
      const brush1Index = this.brush1BackLottieMeshes.indexOf(mesh);
      if (brush1Index !== -1) {
        this.brush1BackLottieMeshes.splice(brush1Index, 1);
      }
    });
    
    console.log(`Cleaned up ${animationsToRemove.length} lottie animations and ${meshesToCleanup.length} meshes`);
  }
}
