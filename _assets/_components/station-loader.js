/* ===== STATION LOADER ===== */
import * as THREE from 'three';

export class StationLoader {
  constructor(loader, targetSize = 4.8, visibilityScale = 10) {
    this.loader = loader;
    this.targetSize = targetSize;
    this.visibilityScale = visibilityScale;
  }
  
  scaleModel(model) {
    const box = new THREE.Box3().setFromObject(model);
    const width = box.max.x - box.min.x;
    const height = box.max.y - box.min.y;
    const depth = box.max.z - box.min.z;
    
    const currentSize = Math.max(width, height, depth);
    
    let scaleFactor = 1;
    if (currentSize > 0) {
      scaleFactor = this.targetSize / currentSize;
    }
    
    scaleFactor *= this.visibilityScale;
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);
    
    return { width, height, depth, scaleFactor };
  }
  
  hideBasefloorObject(model) {
    model.traverse((child) => {
      const name = (child.name || '').toLowerCase();
      if (name.includes('_basefloor') || name === '_basefloor' || name.includes('basefloor')) {
        child.visible = false;
      }
    });
  }
  
  applyTexturesToPoort(model, baseTexture) {
    // First find groups named "poort", then find all meshes within those groups
    let foundCount = 0;
    const poortObjects = [];
    const poortGroups = [];
    
    // First, find all groups named "poort"
    model.traverse((child) => {
      const name = (child.name || '').toLowerCase();
      if ((name === 'poort' || name.includes('poort')) && !child.isMesh) {
        // This is a group - make sure it's visible
        child.visible = true;
        poortGroups.push(child);
        child.traverse((grandchild) => {
          if (grandchild.isMesh) {
            if (!poortObjects.includes(grandchild)) {
              poortObjects.push(grandchild);
            }
          }
        });
      }
    });
    
    // Also check for meshes that are direct children of poort groups (via parent name check)
    model.traverse((child) => {
      if (child.isMesh) {
        const parentName = (child.parent?.name || '').toLowerCase();
        if (parentName === 'poort' || parentName.includes('poort')) {
          if (!poortObjects.includes(child)) {
            poortObjects.push(child);
          }
        }
      }
    });
    
    if (poortObjects.length === 0) {
      console.warn('No poort objects found in model. Available groups and meshes:');
      model.traverse((child) => {
        if (!child.isMesh) {
        } else {
        }
      });
    }
    
    // Apply texture to all found poort meshes
    poortObjects.forEach((child) => {
      const createMaterialWithTexture = (baseMat) => {
        const gamma = 1;
        
        return new THREE.ShaderMaterial({
          uniforms: {
            map: { value: baseTexture },
            opacity: { value: baseMat?.opacity !== undefined ? baseMat.opacity : 1.0 },
            gamma: { value: gamma }
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
              vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
              vec4 texColor = texture2D(map, flippedUv);
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,
          side: baseMat?.side || THREE.FrontSide,
          transparent: baseMat?.transparent !== false
        });
      };
      
      // Adjust UV coordinates to scale the texture
      if (child.geometry && child.geometry.attributes && child.geometry.attributes.uv) {
        const uvAttribute = child.geometry.attributes.uv;
        const uvArray = uvAttribute.array;
        
        let minU = Infinity, maxU = -Infinity;
        let minV = Infinity, maxV = -Infinity;
        
        for (let i = 0; i < uvArray.length; i += 2) {
          const u = uvArray[i];
          const v = uvArray[i + 1];
          minU = Math.min(minU, u);
          maxU = Math.max(maxU, u);
          minV = Math.min(minV, v);
          maxV = Math.max(maxV, v);
        }
        
        const centerU = (minU + maxU) / 2;
        const centerV = (minV + maxV) / 2;
        const scaleFactor = 1;
        
        for (let i = 0; i < uvArray.length; i += 2) {
          uvArray[i] = centerU + (uvArray[i] - centerU) * scaleFactor;
          uvArray[i + 1] = centerV + (uvArray[i + 1] - centerV) * scaleFactor;
        }
        
        uvAttribute.needsUpdate = true;
      }
      
      // Make sure mesh is visible
      child.visible = true;
      
      // Mark this mesh as having a custom texture so updateMaterials won't overwrite it
      child.userData.hasCustomTexture = true;
      child.userData.customTextureType = 'poort';
      
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material = child.material.map(mat => createMaterialWithTexture(mat));
        } else {
          child.material = createMaterialWithTexture(child.material);
        }
        child.material.needsUpdate = true;
      } else {
        child.material = createMaterialWithTexture(null);
      }
      
      // Shadows disabled
      child.castShadow = false;
      child.receiveShadow = false;
      foundCount++;
    });
    
  }
  
  applyTextureToObjects(model, texture, objectName) {
    const objects = [];
    const groups = [];
    
    // First, find all groups with the object name (for boog--base, poort, etc.)
    model.traverse((child) => {
      const name = (child.name || '').toLowerCase();
      if (name.includes(objectName) && !child.isMesh) {
        // This is a group - collect all meshes within it
        groups.push(child);
        child.traverse((grandchild) => {
          if (grandchild.isMesh) {
            if (!objects.includes(grandchild)) {
              objects.push(grandchild);
            }
          }
        });
      }
    });
    
    // Also check for meshes that are direct children of groups (via parent name check)
    model.traverse((child) => {
      if (child.isMesh) {
        const parentName = (child.parent?.name || '').toLowerCase();
        if (parentName.includes(objectName)) {
          if (!objects.includes(child)) {
            objects.push(child);
          }
        }
      }
    });
    
    if (objects.length === 0) {
      console.warn(`No ${objectName} objects found in model. Available meshes:`);
      model.traverse((child) => {
        if (child.isMesh) {
        }
      });
    }
    
    objects.forEach((child) => {
      
      // Adjust UV coordinates to scale the texture
      if (child.geometry && child.geometry.attributes && child.geometry.attributes.uv) {
        const uvAttribute = child.geometry.attributes.uv;
        const uvArray = uvAttribute.array;
        
        // Calculate center of UV space
        let minU = Infinity, maxU = -Infinity;
        let minV = Infinity, maxV = -Infinity;
        
        for (let i = 0; i < uvArray.length; i += 2) {
          const u = uvArray[i];
          const v = uvArray[i + 1];
          minU = Math.min(minU, u);
          maxU = Math.max(maxU, u);
          minV = Math.min(minV, v);
          maxV = Math.max(maxV, v);
        }
        
        const centerU = (minU + maxU) / 2;
        const centerV = (minV + maxV) / 2;
        const scaleFactor = 1; // Can be adjusted if needed
        
        // Scale UVs around center
        for (let i = 0; i < uvArray.length; i += 2) {
          uvArray[i] = centerU + (uvArray[i] - centerU) * scaleFactor;
          uvArray[i + 1] = centerV + (uvArray[i + 1] - centerV) * scaleFactor;
        }
        
        uvAttribute.needsUpdate = true;
      }
      
      const createMaterial = (baseMat) => {
        const gamma = 1;
        
        return new THREE.ShaderMaterial({
          uniforms: {
            map: { value: texture },
            opacity: { value: baseMat?.opacity !== undefined ? baseMat.opacity : 1.0 },
            gamma: { value: gamma }
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
              vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
              vec4 texColor = texture2D(map, flippedUv);
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,
          side: baseMat?.side || THREE.FrontSide,
          transparent: baseMat?.transparent !== false
        });
      };
      
      // Make sure mesh is visible
      child.visible = true;
      
      // Mark this mesh as having a custom texture so updateMaterials won't overwrite it
      child.userData.hasCustomTexture = true;
      child.userData.customTextureType = objectName;
      
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material = child.material.map(mat => createMaterial(mat));
        } else {
          child.material = createMaterial(child.material);
        }
        child.material.needsUpdate = true;
      } else {
        child.material = createMaterial(null);
      }
      
      // Shadows disabled
      child.castShadow = false;
      child.receiveShadow = false;
    });
    
  }
  
  load(scene, positionZ, modelPath, options = {}) {
    const { applyPoort = false, applyBoog = false, stationId = null } = options;
    
    return new Promise((resolve, reject) => {
      this.loader.load(
        modelPath,
        (gltf) => {
          const model = gltf.scene;
          const dimensions = this.scaleModel(model);
          // Don't update materials - keep original materials from the model
          this.hideBasefloorObject(model);
          
          // Shadows disabled for all meshes
          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false;
              child.receiveShadow = false;
            }
          });
          
          model.position.set(0, 0, positionZ);
          
          // NO MATERIAL CHANGES - Load model exactly as it is in the GLB file
          // All objects keep their original materials from the GLB
          
          // Find borstel__staand--left and borstel__staand--right groups for X-axis movement
          // And find brush__base groups INSIDE these groups for Y-axis rotation
          // Also find borstel__liggend groups for Y-axis movement in station__brush--up2.glb
          const brushBaseObjects = [];
          const borstelStandObjects = [];
          const borstelLiggendObjects = [];
          const borstelLiggendUpObjects = [];
          
          if (modelPath.includes('station__brush2.glb')) {
            model.traverse((child) => {
              const name = (child.name || '').toLowerCase();
              
              // First, find borstel__staand--left and borstel__staand--right groups
              if ((name.includes('borstel__staand--left') || name.includes('borstel_staand_left')) && !child.isMesh) {
                borstelStandObjects.push({
                  object: child,
                  type: 'left',
                  originalX: child.position.x // Store original X position
                });
                
                // Now find brush__base groups INSIDE this borstel__staand--left group
                child.traverse((grandchild) => {
                  const grandchildName = (grandchild.name || '').toLowerCase();
                  if (grandchildName.includes('brush__base') && !grandchild.isMesh) {
                    brushBaseObjects.push({
                      object: grandchild, // This is the brush__base group inside borstel__staand--left
                      direction: 'right' // left group's brush__base rotates right (positive)
                    });
                  }
                });
                
              } else if ((name.includes('borstel__staand--right') || name.includes('borstel_staand_right')) && !child.isMesh) {
                borstelStandObjects.push({
                  object: child,
                  type: 'right',
                  originalX: child.position.x // Store original X position
                });
                
                // Now find brush__base groups INSIDE this borstel__staand--right group
                child.traverse((grandchild) => {
                  const grandchildName = (grandchild.name || '').toLowerCase();
                  if (grandchildName.includes('brush__base') && !grandchild.isMesh) {
                    brushBaseObjects.push({
                      object: grandchild, // This is the brush__base group inside borstel__staand--right
                      direction: 'left' // right group's brush__base rotates left (negative)
                    });
                  }
                });
              }
            });
          }
          
          // Find borstel__liggend groups in station__brush--up2.glb for Y-axis movement
          // And find brush__base groups INSIDE borstel__liggend for Y-axis rotation
          // Also find borstel__liggend--UP groups separately
          // Check for --UP first to avoid matching it with the regular borstel__liggend check
          if (modelPath.includes('station__brush--up2.glb')) {
            let foundLiggend = false;
            let foundLiggendUp = false;
            model.traverse((child) => {
              const name = child.name || '';
              
              // Find borstel__liggend--UP groups first (exact match, check before regular borstel__liggend)
              if (name === 'borstel__liggend--UP' && !child.isMesh) {
                foundLiggendUp = true;
                borstelLiggendUpObjects.push({
                  object: child,
                  originalY: child.position.y // Store original Y position
                });
                
                // Find brush__base groups INSIDE this borstel__liggend--UP group
                child.traverse((grandchild) => {
                  const grandchildName = (grandchild.name || '').toLowerCase();
                  if (grandchildName.includes('brush__base') && !grandchild.isMesh) {
                    brushBaseObjects.push({
                      object: grandchild, // This is the brush__base group inside borstel__liggend--UP
                      direction: 'left' // Rotates left (opposite direction)
                    });
                  }
                });
              }
              // Find borstel__liggend groups (exact match, not --UP, check after --UP to avoid conflicts)
              else if (name === 'borstel__liggend' && !child.isMesh) {
                foundLiggend = true;
                borstelLiggendObjects.push({
                  object: child,
                  originalY: child.position.y // Store original Y position
                });
                
                // Find brush__base groups INSIDE this borstel__liggend group
                child.traverse((grandchild) => {
                  const grandchildName = (grandchild.name || '').toLowerCase();
                  if (grandchildName.includes('brush__base') && !grandchild.isMesh) {
                    brushBaseObjects.push({
                      object: grandchild, // This is the brush__base group inside borstel__liggend
                      direction: 'left' // Rotates left (opposite direction)
                    });
                  }
                });
              }
            });
            
            if (!foundLiggend && !foundLiggendUp) {
              console.warn('No borstel__liggend or borstel__liggend--UP groups found in station__brush--up2.glb. Available groups:');
              model.traverse((child) => {
                if (!child.isMesh) {
                }
              });
            }
          }
          
          // Find douche__gordijn objects in station__message--bericht.glb for width scaling
          const doucheGordijnObjects = [];
          if (modelPath.includes('station__message--bericht.glb')) {
            model.traverse((child) => {
              const name = (child.name || '').toLowerCase();
              
              // Find douche__gordijn objects (can be a group or mesh)
              if (name.includes('douche__gordijn') || name.includes('douche_gordijn')) {
                doucheGordijnObjects.push({
                  object: child,
                  originalScaleX: child.scale.x // Store original X scale
                });
              }
            });
            
            if (doucheGordijnObjects.length === 0) {
              console.warn('No douche__gordijn objects found in station__message--bericht.glb. Available objects:');
              model.traverse((child) => {
                const name = (child.name || '').toLowerCase();
                if (name.includes('douche') || name.includes('gordijn')) {
                }
              });
            } else {
            }
          }
          
          // Find user__wens objects in station__message--wens.glb for Y-axis animation
          const userWensObjects = [];
          if (modelPath.includes('station__message--wens.glb')) {
            model.traverse((child) => {
              const name = (child.name || '').toLowerCase();
              
              // Find user__wens objects (can be a group or mesh)
              if (name.includes('user__wens') || name.includes('user_wens')) {
                userWensObjects.push({
                  object: child,
                  originalY: child.position.y, // Store original Y position
                  originalScaleX: child.scale.x // Store original X scale for width animation
                });
              }
            });
            
            if (userWensObjects.length === 0) {
              console.warn('No user__wens objects found in station__message--wens.glb. Available objects:');
              model.traverse((child) => {
                const name = (child.name || '').toLowerCase();
                if (name.includes('user') || name.includes('wens')) {
                }
              });
            } else {
            }
          }
          
          // Find gate group and gate objects in station__brush2.glb
          const gateObjects = [];
          if (modelPath.includes('station__brush2.glb')) {
            model.traverse((child) => {
              const name = (child.name || '').toLowerCase();
              
              // Find gate group
              if ((name === 'gate' || name.includes('gate')) && !child.isMesh) {
                // Hide gate group in brush2, show in brush1
                if (stationId === 'brush2') {
                  child.visible = false;
                } else {
                  child.visible = true;
                }
                
                // Find gate__right and gate__left objects inside the gate group
                child.traverse((grandchild) => {
                  const grandchildName = (grandchild.name || '').toLowerCase();
                  if (grandchildName.includes('gate__right') || grandchildName.includes('gate_right')) {
                    gateObjects.push({
                      object: grandchild,
                      type: 'right',
                      originalX: grandchild.position.x // Store original X position
                    });
                  } else if (grandchildName.includes('gate__left') || grandchildName.includes('gate_left')) {
                    gateObjects.push({
                      object: grandchild,
                      type: 'left',
                      originalX: grandchild.position.x // Store original X position
                    });
                  }
                });
              }
            });
            
            if (gateObjects.length === 0) {
              console.warn('No gate objects found in station__brush2.glb. Available groups and objects:');
              model.traverse((child) => {
                const name = (child.name || '').toLowerCase();
                if (name.includes('gate')) {
                }
              });
            } else {
            }
          }
          
          // Find user__media objects in station__message--media.glb for zig zag animation
          const userMediaObjects = [];
          if (modelPath.includes('station__message--media.glb')) {
            model.traverse((child) => {
              const name = (child.name || '').toLowerCase();
              
              // Find user__media objects (can be a group or mesh)
              if (name.includes('user__media') || name.includes('user_media')) {
                userMediaObjects.push({
                  object: child,
                  originalY: child.position.y, // Store original Y position
                  originalX: child.position.x, // Store original X position for zig zag
                  originalScale: { x: child.scale.x, y: child.scale.y, z: child.scale.z } // Store original scale for size animation
                });
              }
            });
            
            if (userMediaObjects.length === 0) {
              console.warn('No user__media objects found in station__message--media.glb. Available objects:');
              model.traverse((child) => {
                const name = (child.name || '').toLowerCase();
                if (name.includes('user') || name.includes('media')) {
                }
              });
            } else {
            }
          }
          
          // Find curtain flaps in station__curtain2.glb for animation
          const curtainFlapObjects = [];
          const curtainFlapGroups = []; // Store the parent groups for Y-axis movement
          if (modelPath.includes('station__curtain2.glb')) {
            model.traverse((child) => {
              const name = (child.name || '').toLowerCase();
              
              // Find curtain__flaps--01, curtain__flaps--02, and curtain__flaps--03 groups
              // Check for exact matches first, then variations
              const isFlapGroup = (
                name === 'curtain__flaps--01' || name === 'curtain__flaps--02' || name === 'curtain__flaps--03' ||
                name.includes('curtain__flaps--01') || name.includes('curtain__flaps--02') || name.includes('curtain__flaps--03') || 
                name.includes('curtain_flaps--01') || name.includes('curtain_flaps--02') || name.includes('curtain_flaps--03') ||
                name.includes('curtain__flaps_01') || name.includes('curtain__flaps_02') || name.includes('curtain__flaps_03') ||
                name.includes('curtain_flaps_01') || name.includes('curtain_flaps_02') || name.includes('curtain_flaps_03')
              ) && !child.isMesh;
              
              if (isFlapGroup) {
                
                // Determine which group this is and assign unique properties
                let liftMultiplier = 1.0; // Default lift
                let speedMultiplier = 1.0; // Default speed
                let groupType = 'unknown';
                
                if (name.includes('--01') || name.includes('_01')) {
                  groupType = '01';
                  liftMultiplier = 1.0; // Full lift for --01
                  speedMultiplier = 1.0;
                } else if (name.includes('--02') || name.includes('_02')) {
                  groupType = '02';
                  liftMultiplier = 1.0; // Full lift for --02
                  speedMultiplier = 1.0;
                } else if (name.includes('--03') || name.includes('_03')) {
                  groupType = '03';
                  liftMultiplier = 1.0; // Full lift for --03 (same as others)
                  speedMultiplier = 1.0;
                }
                
                // Store the group for Y-axis movement animation with unique properties
                const groupData = {
                  object: child,
                  originalY: child.position.y, // Store original Y position
                  name: child.name,
                  id: child.name, // Store ID for debugging
                  groupType: groupType,
                  liftMultiplier: liftMultiplier, // Unique lift multiplier per group
                  speedMultiplier: speedMultiplier // Unique speed multiplier per group
                };
                curtainFlapGroups.push(groupData);
                
                
                // Find all flaps inside this group (should be 10 flaps)
                // Flaps might be named "Flap", "Flap 2", "Flap 3", etc., or "Flap 10", "Flap 9", etc.
                let flapIndexInGroup = 0; // Track index within this group
                child.traverse((grandchild) => {
                  const grandchildName = (grandchild.name || '').toLowerCase();
                  const parentName = name;
                  
                  // Look for objects that contain "flap" but are not the parent group itself
                  // This will match "Flap", "Flap 2", "Flap 10", etc.
                  if (grandchildName.includes('flap') && grandchildName !== parentName) {
                    // Make sure it's a direct child or nested child of the flaps group
                    // Each flap gets unique properties to ensure individual movement
                    const uniqueId = `${child.name}_${grandchild.name}_${curtainFlapObjects.length}`;
                    
                    // Determine if this flap should lift based on group type
                    // For curtain__flaps--02: indices 5, 6, 7 (0-based)
                    // For other groups (--01, --03): indices 4, 5, 6 (0-based)
                    let shouldLift = false;
                    if (groupType === '02') {
                      // Group --02: indices 5, 6, 7
                      shouldLift = flapIndexInGroup >= 3 && flapIndexInGroup <= 5;
                    } else {
                      // Groups --01 and --03: indices 4, 5, 6
                      shouldLift = flapIndexInGroup >= 4 && flapIndexInGroup <= 6;
                    }
                    
                    curtainFlapObjects.push({
                      id: uniqueId, // Unique identifier for each flap
                      object: grandchild,
                      originalRotationX: grandchild.rotation.x, // Store original rotation
                      originalY: grandchild.position.y, // Store original Y position for lift animation
                      originalX: grandchild.position.x, // Store original X position for X-axis movement
                      rotationSpeed: 0.5 + Math.random() * 1.0, // Random speed between 0.5 and 1.5 (unique per flap)
                      phaseOffset: Math.random() * Math.PI * 2, // Random phase offset (0 to 2π) for independent movement (unique per flap)
                      name: grandchild.name, // Store name for debugging
                      parentName: child.name, // Store parent name for debugging
                      flapIndex: flapIndexInGroup, // Store index within group (0-based)
                      shouldLift: shouldLift, // Whether this flap should move up
                      groupType: groupType // Store which group this flap belongs to
                    });
                    flapIndexInGroup++; // Increment index for next flap in this group
                  }
                });
              }
            });
            
            if (curtainFlapObjects.length === 0) {
              console.warn('No curtain flaps found in station__curtain2.glb. Available groups and objects:');
              model.traverse((child) => {
                const name = (child.name || '').toLowerCase();
                if (name.includes('curtain') || name.includes('flap')) {
                }
              });
            } else {
            }
          }
          
          // Find spray__soap objects in station__soap2.glb for Y-axis rotation animation
          const spraySoapObjects = [];
          if (modelPath.includes('station__soap2.glb')) {
            model.traverse((child) => {
              const name = (child.name || '').toLowerCase();
              
              // Find spray__soap--L and spray__soap--R objects (can be a group or mesh)
              if (name.includes('spray__soap--l') || name.includes('spray__soap--r') || 
                  name.includes('spray_soap--l') || name.includes('spray_soap--r') ||
                  name.includes('spray__soap_l') || name.includes('spray__soap_r')) {
                spraySoapObjects.push({
                  object: child,
                  originalRotationY: child.rotation.y // Store original Y rotation
                });
              }
            });
            
            if (spraySoapObjects.length === 0) {
              console.warn('No spray__soap objects found in station__soap2.glb. Available objects:');
              model.traverse((child) => {
                const name = (child.name || '').toLowerCase();
                if (name.includes('spray') || name.includes('soap')) {
                }
              });
            } else {
            }
          }
          
          scene.add(model);
          
          resolve({ 
            model, 
            dimensions, 
            allModels: [model], 
            brushBaseObjects: brushBaseObjects || [],
            borstelStandObjects: borstelStandObjects || [],
            borstelLiggendObjects: borstelLiggendObjects || [],
            borstelLiggendUpObjects: borstelLiggendUpObjects || [],
            curtainFlapObjects: curtainFlapObjects || [],
            curtainFlapGroups: curtainFlapGroups || [],
            doucheGordijnObjects: doucheGordijnObjects || [],
            userWensObjects: userWensObjects || [],
            userMediaObjects: userMediaObjects || [],
            gateObjects: gateObjects || [],
            spraySoapObjects: spraySoapObjects || []
          });
        },
        (progress) => {
          if (progress.lengthComputable) {
          }
        },
        (error) => {
          console.error(`Error loading ${modelPath}:`, error);
          reject(error);
        }
      );
    });
  }
}
