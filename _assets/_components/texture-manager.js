// Texture manager for carwash.html
import * as THREE from 'three';
import { GAMMA } from './carwash-config.js';

export class TextureManager {
  constructor(sceneSetup) {
    this.sceneSetup = sceneSetup;
    this.textureCache = new Map();
    this.textureLoader = new THREE.TextureLoader();
    this.poortTexture = null;
  }

  // Helper function to check if an object belongs to a specific station
  belongsToStation(object, stationId) {
    if (!stationId) return true; // If no stationId specified, include all objects
    
    // Traverse up the parent chain to find the root model
    let current = object;
    while (current.parent && current.parent !== this.sceneSetup.getScene()) {
      current = current.parent;
    }
    
    // Check if root model has the stationId
    return current.userData.stationId === stationId;
  }

  // Helper function to get full path for debugging
  getObjectPath(obj) {
    const path = [];
    let current = obj;
    while (current && current !== this.sceneSetup.getScene()) {
      path.unshift(current.name || 'unnamed');
      current = current.parent;
    }
    return path.join(' > ');
  }

  // Helper function to apply only UV mapping without material
  applyUVMappingOnly(objectName, projectionAxis, meshName = null, stationId = null) {
    const foundObjects = [];
    const foundGroups = [];
    const searchName = objectName;
    const searchMeshName = meshName ? meshName : null;
    
    // Single comprehensive traversal to find ALL instances
    this.sceneSetup.getScene().traverse((child) => {
      const name = child.name || '';
      
      // Check if this is a group with exact matching name
      if (name === searchName && !child.isMesh) {
        child.visible = true;
        foundGroups.push(child);
        
        // Find all meshes within this group (recursively)
        let meshCountInGroup = 0;
        child.traverse((grandchild) => {
          if (grandchild.isMesh && this.belongsToStation(grandchild, stationId)) {
            if (searchMeshName) {
              const grandchildName = grandchild.name || '';
              if (grandchildName === searchMeshName && !foundObjects.includes(grandchild)) {
                foundObjects.push(grandchild);
                meshCountInGroup++;
              }
            } else {
              if (!foundObjects.includes(grandchild)) {
                foundObjects.push(grandchild);
                meshCountInGroup++;
              }
            }
          }
        });
      }
      
      // Also check if this is a mesh with exact matching name
      if (child.isMesh && this.belongsToStation(child, stationId)) {
        const childName = child.name || '';
        
        if (childName === searchName && !foundObjects.includes(child)) {
          if (searchMeshName) {
            if (childName === searchMeshName) {
              foundObjects.push(child);
            }
          } else {
            foundObjects.push(child);
          }
        }
      }
    });
    
    
    if (foundObjects.length === 0) {
      console.warn(`No ${objectName} objects found for UV mapping.`);
      return;
    }
    
    // Apply UV mapping only (no material changes)
    foundObjects.forEach((mesh, index) => {
      
      // Generate UV coordinates based on projection axis
      if (mesh.geometry && mesh.geometry.attributes && mesh.geometry.attributes.position) {
        mesh.geometry.computeBoundingBox();
        const box = mesh.geometry.boundingBox;
        
        if (box) {
          const positions = mesh.geometry.attributes.position.array;
          const size = new THREE.Vector3();
          box.getSize(size);
          
          // Generate UV array based on projection axis
          const uvs = [];
          for (let i = 0; i < positions.length; i += 3) {
            let u = 0, v = 0;
            
            // Map coordinates based on projection axis
            switch (projectionAxis) {
              case 'x':
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
                break;
              case 'y':
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.z > 0 ? (positions[i + 2] - box.min.z) / size.z : 0;
                break;
              case 'z':
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
                break;
              case 'xy':
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
                break;
              case 'xz':
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.z > 0 ? (positions[i + 2] - box.min.z) / size.z : 0;
                break;
              case 'yz':
                u = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
                v = size.z > 0 ? (positions[i + 2] - box.min.z) / size.z : 0;
                break;
              default:
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
            }
            
            uvs.push(u, v);
          }
          
          // Update or create UV attribute
          if (mesh.geometry.attributes.uv) {
            const uvAttribute = mesh.geometry.attributes.uv;
            for (let i = 0; i < uvs.length; i++) {
              uvAttribute.array[i] = uvs[i];
            }
            uvAttribute.needsUpdate = true;
          } else {
            mesh.geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
          }
          
        }
      }
      
      // Make sure mesh is visible
      mesh.visible = true;
      
    });
    
  }

  // Helper function to apply texture to found objects
  applyTextureToObjects(objectName, texture, projectionAxis, gamma, meshName = null, stationId = null, transparent = true, visible = true, depthWrite = true, useBasicMaterial = false, flipV = false, flipH = false, forceReplace = false) {
    if (flipV && (objectName.includes('user__wens') || objectName.includes('user__media') || objectName.includes('autowasbon__txt'))) {
    }
    const foundObjects = [];
    const foundGroups = [];
    const searchName = objectName;
    const searchMeshName = meshName ? meshName : null;
    
    // Single comprehensive traversal to find ALL instances
    // This will find both groups and meshes with the exact name, regardless of hierarchy
    this.sceneSetup.getScene().traverse((child) => {
      const name = child.name || '';
      
      // Check if this is a group with exact matching name
      if (name === searchName && !child.isMesh) {
        child.visible = true;
        foundGroups.push(child);
        
        // Find all meshes within this group (recursively)
        let meshCountInGroup = 0;
        child.traverse((grandchild) => {
          if (grandchild.isMesh && this.belongsToStation(grandchild, stationId)) {
            // If meshName is specified, only include meshes that match exactly
            if (searchMeshName) {
              const grandchildName = grandchild.name || '';
              if (grandchildName === searchMeshName && !foundObjects.includes(grandchild)) {
                foundObjects.push(grandchild);
                meshCountInGroup++;
              }
            } else {
              // No meshName specified, include all meshes in the group
              if (!foundObjects.includes(grandchild)) {
                foundObjects.push(grandchild);
                meshCountInGroup++;
              }
            }
          }
        });
      }
      
      // Also check if this is a mesh with exact matching name (could be both group and mesh in different places)
      if (child.isMesh && this.belongsToStation(child, stationId)) {
        const childName = child.name || '';
        
        // Check if mesh name matches exactly
        if (childName === searchName && !foundObjects.includes(child)) {
          // If meshName is specified, only include meshes that match exactly
          if (searchMeshName) {
            if (childName === searchMeshName) {
              foundObjects.push(child);
            }
          } else {
            // No meshName specified, include all meshes with this name
            foundObjects.push(child);
          }
        }
      }
    });
    
    
    // Log all found meshes for debugging
    if (foundObjects.length > 0) {
      foundObjects.forEach((mesh, index) => {
      });
    }
    
    if (foundObjects.length === 0) {
      // Suppress warning for wasboog__back as it doesn't exist in the scene
      if (objectName !== 'wasboog__back') {
        console.warn(`No ${objectName} objects found. Searching for similar names...`);
        const similarNames = [];
        this.sceneSetup.getScene().traverse((child) => {
          const name = child.name || '';
          if (name.includes(objectName) || objectName.includes(name)) {
            if (child.isMesh) {
              similarNames.push(`Mesh: "${child.name}" (Parent: "${child.parent?.name}")`);
            } else {
              similarNames.push(`Group: "${child.name}"`);
            }
          }
        });
        if (similarNames.length > 0) {
          console.warn(`Found similar names:`, similarNames);
        }
      }
      return;
    }
    
    // Apply texture to all found objects
    foundObjects.forEach((mesh, index) => {
      // Check if mesh already has a texture (for layering, unless forceReplace is true)
      const existingMaterial = mesh.material;
      const hasExistingTexture = !forceReplace && existingMaterial && 
                                 existingMaterial.type === 'ShaderMaterial' && 
                                 existingMaterial.uniforms && 
                                 existingMaterial.uniforms.map;
      
      const createMaterialWithTexture = (baseMat) => {
        // If useBasicMaterial is true, use MeshBasicMaterial (pure mesh, no lighting, no color processing)
        // This preserves colors exactly as in the image without any gamma correction or tone mapping
        if (useBasicMaterial) {
          const material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: transparent !== undefined ? transparent : (baseMat?.transparent !== false),
            opacity: baseMat?.opacity !== undefined ? baseMat.opacity : 1.0,
            side: baseMat?.side || THREE.FrontSide,
            depthWrite: depthWrite,
            depthTest: true, // Keep depth test for proper ordering
            toneMapped: false, // Disable tone mapping to preserve original colors
            fog: false // Disable fog effects
          });
          // Ensure no color space conversion - use raw texture colors
          if (material.map) {
            material.map.colorSpace = THREE.SRGBColorSpace; // Use SRGB to preserve image colors as-is
          }
          return material;
        }
        
        // If there's an existing texture and not forcing replace, we'll blend with it
        const existingTexture = (hasExistingTexture && !forceReplace) ? existingMaterial.uniforms.map.value : null;
        const hasOverlay = existingTexture !== null;
        
        const uniforms = {
          map: { value: hasOverlay ? existingTexture : texture },
          opacity: { value: baseMat?.opacity !== undefined ? baseMat.opacity : 1.0 },
          gamma: { value: gamma }
        };
        
        // Add overlay texture if we're layering
        if (hasOverlay) {
          uniforms.overlayMap = { value: texture };
        }
        
        // Fragment shader that supports overlay blending
        const fragmentShader = hasOverlay ? `
          uniform sampler2D map;
          uniform sampler2D overlayMap;
          uniform float opacity;
          uniform float gamma;
          varying vec2 vUv;
          
          void main() {
            vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
            vec4 baseColor = texture2D(map, flippedUv);
            vec4 overlayColor = texture2D(overlayMap, flippedUv);
            
            // Apply gamma correction to base
            vec3 correctedBase = pow(baseColor.rgb, vec3(1.0 / gamma));
            
            // Apply gamma correction to overlay
            vec3 correctedOverlay = pow(overlayColor.rgb, vec3(1.0 / gamma));
            
            // Blend overlay on top (overlay alpha determines blend amount)
            vec3 finalColor = mix(correctedBase, correctedOverlay, overlayColor.a);
            float finalAlpha = max(baseColor.a, overlayColor.a) * opacity;
            
            gl_FragColor = vec4(finalColor, finalAlpha);
          }
        ` : `
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
        `;
        
        return new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: fragmentShader,
          side: baseMat?.side || THREE.FrontSide,
          transparent: transparent !== undefined ? transparent : (baseMat?.transparent !== false),
          depthWrite: depthWrite,
          depthTest: true // Keep depth test for proper ordering
        });
      };
      
      // Generate UV coordinates based on projection axis
      // Always generate UVs in object-local space so they move correctly with the object
      if (mesh.geometry && mesh.geometry.attributes && mesh.geometry.attributes.position) {
        mesh.geometry.computeBoundingBox();
        const box = mesh.geometry.boundingBox;
        
        if (box) {
          const positions = mesh.geometry.attributes.position.array;
          const size = new THREE.Vector3();
          box.getSize(size);
          
          // Generate UV array based on projection axis
          const uvs = [];
          for (let i = 0; i < positions.length; i += 3) {
            let u = 0, v = 0;
            
            // Map coordinates based on projection axis
            switch (projectionAxis) {
              case 'x':
                // X-axis projection: U from X, V from Y
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
                break;
              case 'y':
                // Y-axis projection: U from X, V from Z
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.z > 0 ? (positions[i + 2] - box.min.z) / size.z : 0;
                break;
              case 'z':
                // Z-axis projection: U from X, V from Y
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
                break;
              case 'xy':
                // XY plane: U from X, V from Y
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
                break;
              case 'xz':
                // XZ plane: U from X, V from Z
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.z > 0 ? (positions[i + 2] - box.min.z) / size.z : 0;
                break;
              case 'yz':
                // YZ plane: U from Y, V from Z
                u = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
                v = size.z > 0 ? (positions[i + 2] - box.min.z) / size.z : 0;
                break;
              default:
                // Default to XY
                u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
                v = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
            }
            
            // Flip V coordinate if flipV is true (vertical flip)
            if (flipV) {
              v = 1.0 - v;
            }
            
            // Flip U coordinate if flipH is true (horizontal flip)
            if (flipH) {
              u = 1.0 - u;
            }
            
            uvs.push(u, v);
          }
          
          // Update or create UV attribute
          if (mesh.geometry.attributes.uv) {
            const uvAttribute = mesh.geometry.attributes.uv;
            for (let i = 0; i < uvs.length; i++) {
              uvAttribute.array[i] = uvs[i];
            }
            uvAttribute.needsUpdate = true;
          } else {
            mesh.geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
          }
          
        }
      } else if (flipV && mesh.geometry && mesh.geometry.attributes && mesh.geometry.attributes.uv) {
        // If flipV or flipH is true but mesh already has UVs (no position data or bounding box), flip the existing UVs
        const uvAttribute = mesh.geometry.attributes.uv;
        const uvArray = uvAttribute.array;
        if (flipV) {
          for (let i = 1; i < uvArray.length; i += 2) {
            // Flip V coordinate (every odd index)
            uvArray[i] = 1.0 - uvArray[i];
          }
        }
        if (flipH) {
          for (let i = 0; i < uvArray.length; i += 2) {
            // Flip U coordinate (every even index)
            uvArray[i] = 1.0 - uvArray[i];
          }
        }
        uvAttribute.needsUpdate = true;
      }
      
      // Make sure mesh is visible
      mesh.visible = true;
      
      // Mark mesh as having custom texture
      mesh.userData.hasCustomTexture = true;
      mesh.userData.customTextureType = objectName;
      
      // Set render order for transparent meshes to render after opaque objects
      // Higher renderOrder means it renders later (on top of other objects)
      // This is especially important for transparent meshes with depthWrite: false
      if (!depthWrite || useBasicMaterial) {
        mesh.renderOrder = 100; // Render after default opaque objects (renderOrder 0)
      }
      
      // Store old material for disposal if needed
      const oldMaterial = mesh.material;
      
      // Apply material
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
      
      // Dispose old material if forceReplace is true (after new material is created)
      if (forceReplace && oldMaterial && oldMaterial !== mesh.material) {
        // Use setTimeout to dispose after the new material is set
        setTimeout(() => {
          if (Array.isArray(oldMaterial)) {
            oldMaterial.forEach(mat => {
              if (mat && mat.dispose) {
                if (mat.map && mat.map.dispose) mat.map.dispose();
                if (mat.uniforms) {
                  if (mat.uniforms.map && mat.uniforms.map.value && mat.uniforms.map.value.dispose) {
                    mat.uniforms.map.value.dispose();
                  }
                  if (mat.uniforms.overlayMap && mat.uniforms.overlayMap.value && mat.uniforms.overlayMap.value.dispose) {
                    mat.uniforms.overlayMap.value.dispose();
                  }
                }
                mat.dispose();
              }
            });
          } else if (oldMaterial && oldMaterial.dispose) {
            if (oldMaterial.map && oldMaterial.map.dispose) oldMaterial.map.dispose();
            if (oldMaterial.uniforms) {
              if (oldMaterial.uniforms.map && oldMaterial.uniforms.map && oldMaterial.uniforms.map.value && oldMaterial.uniforms.map.value.dispose) {
                oldMaterial.uniforms.map.value.dispose();
              }
              if (oldMaterial.uniforms.overlayMap && oldMaterial.uniforms.overlayMap.value && oldMaterial.uniforms.overlayMap.value.dispose) {
                oldMaterial.uniforms.overlayMap.value.dispose();
              }
            }
            oldMaterial.dispose();
          }
        }, 0);
      }
      
      // Shadows disabled
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      
    });
    
  }

  /**
   * Applies UV mapping to objects by name with specified projection axis
   * @param {string} objectName - Name of the layer/group to find (case-insensitive, partial match)
   * @param {string} imagePath - Path to the texture image (optional if uvOnly is true)
   * @param {string} projectionAxis - Projection axis: 'x', 'y', 'z', 'xy', 'xz', or 'yz'
   * @param {Object} options - Optional settings: { flipY: boolean, wrapS: THREE.Wrapping, wrapT: THREE.Wrapping, gamma: number, meshName: string, stationId: string, uvOnly: boolean, transparent: boolean, visible: boolean, depthWrite: boolean, useBasicMaterial: boolean }
   * @param {string} options.meshName - Optional: Specific mesh name within the group to target (for multiple layers)
   * @param {string} options.stationId - Optional: Station ID to filter objects to a specific station
   * @param {boolean} options.uvOnly - Optional: If true, only applies UV mapping without loading/applying texture material
   * @param {boolean} options.transparent - Optional: If true, material will be transparent (default: true)
   * @param {boolean} options.visible - Optional: If false, object will be hidden (default: true)
   * @param {boolean} options.depthWrite - Optional: If false, mesh won't write to depth buffer, allowing objects behind to be visible (default: true)
   * @param {boolean} options.useBasicMaterial - Optional: If true, uses MeshBasicMaterial instead of ShaderMaterial (simpler, better for transparency)
   */
  giveObjectMapping(objectName, imagePath, projectionAxis = 'xy', options = {}) {
    const {
      flipY = false,
      flipV = false,
      flipH = false,
      wrapS = THREE.ClampToEdgeWrapping,
      wrapT = THREE.ClampToEdgeWrapping,
      gamma = GAMMA,
      meshName = null,
      stationId = null,
      uvOnly = false,
      transparent = true,
      visible = true,
      depthWrite = true,
      useBasicMaterial = false,
      forceReplace = false
    } = options;
    
    // Normalize projection axis to lowercase
    const axis = projectionAxis.toLowerCase();
    
    // If uvOnly is true, only apply UV mapping without material
    if (uvOnly) {
      this.applyUVMappingOnly(objectName, axis, meshName, stationId);
      return;
    }
    
    // Check if imagePath is a canvas, function, or string path
    let textureSource = imagePath;
    let cacheKey = imagePath;
    
    // If it's a function, call it to get the canvas
    if (typeof imagePath === 'function') {
      const canvas = imagePath();
      if (canvas && canvas instanceof HTMLCanvasElement) {
        textureSource = canvas;
        // For dynamic canvas textures, don't cache them (or use a timestamp-based key)
        // This ensures we always get fresh textures when the name changes
        // Create a unique cache key that includes timestamp to avoid stale cache
        cacheKey = `canvas_${objectName}_${Date.now()}`;
      } else {
        console.error('Function provided to giveObjectMapping did not return a canvas');
        return;
      }
    }
    
    // If it's a canvas, convert it to a texture directly
    if (textureSource instanceof HTMLCanvasElement) {
      const texture = new THREE.CanvasTexture(textureSource);
      texture.flipY = flipY;
      texture.wrapS = wrapS;
      texture.wrapT = wrapT;
      if (useBasicMaterial) {
        texture.colorSpace = THREE.SRGBColorSpace;
      }
      texture.needsUpdate = true;
      
      // For dynamic canvas textures, we still cache them but with a unique key
      // This prevents memory leaks from creating too many textures in rapid succession
      // Old textures will be garbage collected when no longer referenced
      this.textureCache.set(cacheKey, texture);
      
      // Apply texture to objects
      this.applyTextureToObjects(objectName, texture, axis, gamma, meshName, stationId, transparent, visible, depthWrite, useBasicMaterial, flipV, flipH, forceReplace);
      return;
    }
    
    // Otherwise, treat it as a string path and load normally
    // Check if texture is already loaded
    if (this.textureCache.has(cacheKey)) {
      const texture = this.textureCache.get(cacheKey);
      this.applyTextureToObjects(objectName, texture, axis, gamma, meshName, stationId, transparent, visible, depthWrite, useBasicMaterial, flipV, flipH, forceReplace);
    } else {
      // Load texture first
      this.textureLoader.load(imagePath, (texture) => {
        // Configure texture settings
        texture.flipY = flipY;
        texture.wrapS = wrapS;
        texture.wrapT = wrapT;
        // For useBasicMaterial, use SRGB color space to preserve image colors exactly as-is
        // This prevents any automatic color space conversion that might make it too light
        if (useBasicMaterial) {
          texture.colorSpace = THREE.SRGBColorSpace; // Preserve exact colors from image
        }
        
        // Cache the texture
        this.textureCache.set(cacheKey, texture);
        
        // Apply texture to objects
        this.applyTextureToObjects(objectName, texture, axis, gamma, meshName, stationId, transparent, visible, depthWrite, useBasicMaterial, flipV, flipH, forceReplace);
      }, undefined, (error) => {
        console.error(`Error loading texture ${imagePath}:`, error);
      });
    }
  }

  // Function to apply texture to poort objects in a specific model with proper UV scaling
  applyPoortTextureToModel(model) {
    if (!this.poortTexture) {
      console.warn('Poort texture not loaded yet, skipping texture application');
      return;
    }
    
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
        const gamma = GAMMA;
        
        return new THREE.ShaderMaterial({
          uniforms: {
            map: { value: this.poortTexture },
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
      
      // Generate UV coordinates based on X-axis projection
      if (child.geometry && child.geometry.attributes && child.geometry.attributes.position) {
        // Compute bounding box to get the size
        child.geometry.computeBoundingBox();
        const box = child.geometry.boundingBox;
        
        if (box) {
          const positions = child.geometry.attributes.position.array;
          const size = new THREE.Vector3();
          box.getSize(size);
          
          // Generate new UV array based on X and Y positions (X maps to U, Y maps to V)
          const uvs = [];
          for (let i = 0; i < positions.length; i += 3) {
            // Map X position to U coordinate (horizontal texture)
            const u = size.x > 0 ? (positions[i] - box.min.x) / size.x : 0;
            // Map Y position to V coordinate (vertical texture)
            const v = size.y > 0 ? (positions[i + 1] - box.min.y) / size.y : 0;
            uvs.push(u, v);
          }
          
          // Update or create UV attribute
          if (child.geometry.attributes.uv) {
            const uvAttribute = child.geometry.attributes.uv;
            for (let i = 0; i < uvs.length; i++) {
              uvAttribute.array[i] = uvs[i];
            }
            uvAttribute.needsUpdate = true;
          } else {
            child.geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
          }
          
        }
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

  // Function to apply texture to all poort objects in the scene
  applyPoortTextureToScene() {
    if (!this.poortTexture) {
      console.warn('Poort texture not loaded yet');
      return;
    }
    
    // Find all models in the scene and apply texture to poort objects
    const processedModels = new Set();
    this.sceneSetup.getScene().traverse((child) => {
      // Find root models (objects that are direct children of the scene or have no parent)
      if (!child.parent || child.parent === this.sceneSetup.getScene()) {
        if (!processedModels.has(child)) {
          processedModels.add(child);
          // Check if this model has poort objects
          let hasPoort = false;
          child.traverse((descendant) => {
            const name = (descendant.name || '').toLowerCase();
            if (name === 'poort' || name.includes('poort')) {
              hasPoort = true;
            }
          });
          
          if (hasPoort) {
            this.applyPoortTextureToModel(child);
          }
        }
      }
    });
  }

  // Load poort texture
  loadPoortTexture() {
    this.textureLoader.load('_assets/_objects/_textures/uvmap-bb.png', (texture) => {
      // Configure texture settings
      texture.flipY = false;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      this.poortTexture = texture;
      this.textureCache.set('_assets/_objects/_textures/uvmap-bb.png', texture);
      
      // If models are already loaded, apply texture to them
      this.applyPoortTextureToScene();
    }, undefined, (error) => {
      console.error('Error loading uvmap-bb.png texture:', error);
    });
  }

  /**
   * Applies a Lottie animation as an alpha mask to an object
   * @param {string} objectName - Name of the object to apply mask to
   * @param {string} lottieUrl - URL of the Lottie animation file
   * @param {Object} options - Optional settings: { stationId: string, startZ: number, times: number, triggerDistance: number }
   *   Use triggerDistance (e.g. 20) to trigger by camera distance to object instead of camera Z.
   */
  async applyLottieMask(objectName, lottieUrl, options = {}) {
    const { stationId = null, startZ = null, times = null, triggerDistance = null } = options;
    
    // Get lottieManager from global scope
    const lottieManager = window.lottieManager;
    if (!lottieManager) {
      console.error('LottieManager not available. Make sure it is initialized and available as window.lottieManager');
      return;
    }

    // Find the object(s) to apply the mask to
    const foundObjects = [];
    const searchName = objectName;
    
    this.sceneSetup.getScene().traverse((child) => {
      const name = child.name || '';
      
      // Check if this is a group with exact matching name
      if (name === searchName && !child.isMesh) {
        child.visible = true;
        child.traverse((grandchild) => {
          if (grandchild.isMesh && this.belongsToStation(grandchild, stationId)) {
            if (!foundObjects.includes(grandchild)) {
              foundObjects.push(grandchild);
            }
          }
        });
      }
      
      // Also check if this is a mesh with exact matching name
      if (child.isMesh && this.belongsToStation(child, stationId)) {
        const childName = child.name || '';
        if (childName === searchName && !foundObjects.includes(child)) {
          foundObjects.push(child);
        }
      }
    });

    if (foundObjects.length === 0) {
      console.warn(`No ${objectName} objects found for Lottie mask.`);
      return;
    }

    // Check if this animation is already registered in lottieManager
    // This prevents duplicate applications when stations reload on mobile
    const layerName = `${objectName}_mask`;
    const alreadyRegistered = lottieManager.lottieAnimations && 
      lottieManager.lottieAnimations.some(lottieData => 
        lottieData.layerName === layerName && 
        (triggerDistance != null ? lottieData.triggerDistance === triggerDistance : lottieData.startZ === startZ) &&
        lottieData.times === times
      );
    
    // Also check if lottie mask has already been applied to these objects
    const alreadyApplied = foundObjects.some(mesh => {
      return mesh.userData && mesh.userData.lottieMaskAnimation;
    });
    
    // Skip if animation is already registered OR if mask is already applied to any object
    // This prevents duplicate applications when stations reload
    if (alreadyRegistered || alreadyApplied) {
      console.log(`Lottie mask already applied to ${objectName}, skipping duplicate application`);
      return;
    }

    // Prepare Lottie config with triggers
    const lottieConfig = typeof lottieUrl === 'string' 
      ? { url: lottieUrl, startZ: startZ, times: times }
      : { ...lottieUrl, startZ: startZ !== null ? startZ : lottieUrl.startZ, times: times !== null ? times : lottieUrl.times };

    // Load Lottie texture
    try {
      const lottieResult = await lottieManager.loadLottieTexture(lottieConfig);
      if (!lottieResult || !lottieResult.texture) {
        console.error(`Failed to load Lottie mask from ${typeof lottieUrl === 'string' ? lottieUrl : lottieUrl.url}`);
        return;
      }

      const maskTexture = lottieResult.texture;
      const maskAnimation = lottieResult.anim;

      // Apply mask to each found object
      foundObjects.forEach((mesh) => {
        const existingMaterial = mesh.material;
        
        if (!existingMaterial) {
          console.warn(`Mesh ${mesh.name} has no material to apply mask to`);
          return;
        }

        // Store reference to animation so it keeps updating
        mesh.userData.lottieMaskAnimation = maskAnimation;

        // If using MeshBasicMaterial, we can add alphaMap directly
        if (existingMaterial.type === 'MeshBasicMaterial') {
          existingMaterial.alphaMap = maskTexture;
          existingMaterial.transparent = true;
          if (maskTexture) {
            maskTexture.colorSpace = THREE.SRGBColorSpace;
          }
          existingMaterial.needsUpdate = true;
        } 
        // If using ShaderMaterial, we need to modify the shader to support alphaMap
        else if (existingMaterial.type === 'ShaderMaterial') {
          // Get existing uniforms
          const uniforms = { ...existingMaterial.uniforms };
          uniforms.alphaMap = { value: maskTexture };

          // Modify fragment shader to use alphaMap
          const existingFragmentShader = existingMaterial.fragmentShader;
          
          // Check if alphaMap is already in the shader
          if (!existingFragmentShader.includes('alphaMap')) {
            // Add alphaMap uniform declaration
            let modifiedShader = existingFragmentShader;
            
            // Add uniform declaration after other uniforms
            const uniformMatch = modifiedShader.match(/(uniform\s+\w+\s+\w+;)/);
            if (uniformMatch) {
              modifiedShader = modifiedShader.replace(
                uniformMatch[0],
                `${uniformMatch[0]}\n          uniform sampler2D alphaMap;`
              );
            } else {
              // If no uniforms found, add it at the beginning of the shader
              modifiedShader = modifiedShader.replace(
                'varying vec2 vUv;',
                'varying vec2 vUv;\n          uniform sampler2D alphaMap;'
              );
            }

            // Detect which UV variable is used in the shader (vUv or flippedUv)
            const usesFlippedUv = existingFragmentShader.includes('flippedUv');
            const uvVar = usesFlippedUv ? 'flippedUv' : 'vUv';
            
            // Modify the final color output to use alphaMap
            // Find the gl_FragColor line and modify it
            modifiedShader = modifiedShader.replace(
              /gl_FragColor\s*=\s*vec4\(([^)]+)\);/,
              (match, colorArgs) => {
                // Extract the color and alpha components
                // If it's vec4(rgb, alpha), we multiply alpha by mask alpha
                // If it's vec4(rgb), we add mask alpha
                if (colorArgs.includes(',')) {
                  // Has explicit alpha: vec4(rgb, alpha)
                  const parts = colorArgs.split(',');
                  if (parts.length === 4) {
                    // vec4(r, g, b, a) - multiply alpha by mask
                    return `gl_FragColor = vec4(${parts[0]}, ${parts[1]}, ${parts[2]}, ${parts[3].trim()} * texture2D(alphaMap, ${uvVar}).a);`;
                  } else if (parts.length === 2) {
                    // vec4(rgb, a) - multiply alpha by mask
                    return `gl_FragColor = vec4(${parts[0]}, ${parts[1].trim()} * texture2D(alphaMap, ${uvVar}).a);`;
                  }
                } else {
                  // Single argument - assume it's a vec4 or vec3
                  if (colorArgs.includes('vec3')) {
                    // vec3 - add mask alpha
                    return `gl_FragColor = vec4(${colorArgs}, texture2D(alphaMap, ${uvVar}).a);`;
                  } else {
                    // vec4 - multiply existing alpha by mask
                    return `gl_FragColor = vec4(${colorArgs}.rgb, ${colorArgs}.a * texture2D(alphaMap, ${uvVar}).a);`;
                  }
                }
                return match;
              }
            );

            // Update material
            existingMaterial.fragmentShader = modifiedShader;
            existingMaterial.uniforms = uniforms;
            existingMaterial.transparent = true;
            existingMaterial.needsUpdate = true;
          } else {
            // alphaMap already exists, just update the texture
            existingMaterial.uniforms.alphaMap.value = maskTexture;
            existingMaterial.needsUpdate = true;
          }
        } else {
          console.warn(`Material type ${existingMaterial.type} not supported for Lottie mask. Converting to ShaderMaterial.`);
          
          // Convert to ShaderMaterial with mask support
          const baseTexture = existingMaterial.map || existingMaterial.uniforms?.map?.value;
          const uniforms = {
            map: { value: baseTexture },
            alphaMap: { value: maskTexture },
            opacity: { value: existingMaterial.opacity !== undefined ? existingMaterial.opacity : 1.0 }
          };

          const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform sampler2D map;
              uniform sampler2D alphaMap;
              uniform float opacity;
              varying vec2 vUv;
              
              void main() {
                vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
                vec4 baseColor = texture2D(map, flippedUv);
                vec4 maskColor = texture2D(alphaMap, flippedUv);
                
                // Use the alpha channel of the mask
                float maskAlpha = maskColor.a;
                
                gl_FragColor = vec4(baseColor.rgb, baseColor.a * maskAlpha * opacity);
              }
            `,
            transparent: true,
            side: existingMaterial.side || THREE.FrontSide,
            depthWrite: existingMaterial.depthWrite !== undefined ? existingMaterial.depthWrite : true,
            depthTest: existingMaterial.depthTest !== undefined ? existingMaterial.depthTest : true
          });

          mesh.material = material;
        }
      });

      // Register animation with trigger system (by startZ or by triggerDistance)
      const useDistanceTrigger = triggerDistance != null;
      if ((startZ !== null || useDistanceTrigger) && maskAnimation) {
        const lottieData = {
          anim: maskAnimation,
          startZ: useDistanceTrigger ? null : startZ,
          stopZ: null, // Not using stopZ for mask animations
          times: times !== null ? times : null, // Number of times to play (null = infinite)
          layerName: `${objectName}_mask`,
          started: false,
          stopped: false,
          playCount: 0,
          completed: false, // Track if animation has completed (for times: 1 animations)
          triggerDistance: useDistanceTrigger ? triggerDistance : null,
          distanceTargetMeshes: useDistanceTrigger ? foundObjects : null
        };
        
        // Set up complete event listener to track play count
        if (times !== null && times > 0) {
          maskAnimation.addEventListener('complete', () => {
            lottieData.playCount++;
            
            // If we've played the specified number of times, stop looping
            if (lottieData.playCount >= lottieData.times) {
              maskAnimation.setLoop(false);
              lottieData.stopped = true;
              // Mark as completed to prevent any future restarts
              lottieData.completed = true;
            }
          });
        }
        
        // Add to LottieManager's animation list for trigger updates
        if (lottieManager.lottieAnimations) {
          lottieManager.lottieAnimations.push(lottieData);
        }
        // Distance-triggered mask: do not play from start; wait until camera is in range
        if (useDistanceTrigger && maskAnimation) {
          maskAnimation.pause();
          maskAnimation.goToAndStop(0, true);
        }
      }

      console.log(`Applied Lottie mask to ${foundObjects.length} ${objectName} object(s)`);
    } catch (error) {
      console.error(`Error applying Lottie mask to ${objectName}:`, error);
    }
  }

  /**
   * Applies a Lottie animation as a texture to an object
   * @param {string} objectName - Name of the object to apply texture to
   * @param {string} lottieUrl - URL of the Lottie animation file or config object
   * @param {string} projectionAxis - Projection axis: 'x', 'y', 'z', 'xy', 'xz', or 'yz'
   * @param {Object} options - Optional settings: { stationId: string, visible: boolean, depthWrite: boolean, useBasicMaterial: boolean, flipV: boolean, flipTexture: boolean, gamma: number, startZ: number, pauseZ: number, resumeZ: number }
   */
  async applyLottieTexture(objectName, lottieUrl, projectionAxis = 'x', options = {}) {
    const {
      stationId = null,
      visible = true,
      depthWrite = false,
      useBasicMaterial = true,
      flipV = false,
      flipTexture = false,
      gamma = GAMMA,
      startZ = null,
      pauseZ = null,
      resumeZ = null
    } = options;
    
    // Get lottieManager from global scope
    const lottieManager = window.lottieManager;
    if (!lottieManager) {
      console.error('LottieManager not available. Make sure it is initialized and available as window.lottieManager');
      return;
    }

    // Prepare Lottie config with triggers
    const lottieConfig = typeof lottieUrl === 'string' 
      ? { url: lottieUrl, startZ: startZ, pauseZ: pauseZ, resumeZ: resumeZ }
      : { ...lottieUrl, startZ: startZ !== null ? startZ : lottieUrl.startZ, pauseZ: pauseZ !== null ? pauseZ : lottieUrl.pauseZ, resumeZ: resumeZ !== null ? resumeZ : lottieUrl.resumeZ };
    
    // Load Lottie texture
    try {
      const lottieResult = await lottieManager.loadLottieTexture(lottieConfig);
      if (!lottieResult || !lottieResult.texture) {
        console.error(`Failed to load Lottie texture from ${typeof lottieUrl === 'string' ? lottieUrl : lottieUrl.url}`);
        return;
      }

      const lottieTexture = lottieResult.texture;
      const lottieAnimation = lottieResult.anim;

      // Configure texture settings
      if (useBasicMaterial) {
        lottieTexture.colorSpace = THREE.SRGBColorSpace;
      }
      
      // Flip texture if requested (flips the texture itself, not just UVs)
      // Default is flipY: true, so setting to false will flip it the other way
      if (flipTexture) {
        lottieTexture.flipY = false;
      }

      // Apply texture to objects using existing method
      this.applyTextureToObjects(
        objectName,
        lottieTexture,
        projectionAxis,
        gamma,
        null, // meshName
        stationId,
        true, // transparent
        visible,
        depthWrite,
        useBasicMaterial,
        flipV,
        false, // flipH
        true // forceReplace
      );

      // Store animation reference on found objects so it keeps updating
      const foundObjects = [];
      this.sceneSetup.getScene().traverse((child) => {
        const name = child.name || '';
        if (name === objectName && !child.isMesh) {
          child.traverse((grandchild) => {
            if (grandchild.isMesh && this.belongsToStation(grandchild, stationId)) {
              if (!foundObjects.includes(grandchild)) {
                foundObjects.push(grandchild);
              }
            }
          });
        }
        if (child.isMesh && this.belongsToStation(child, stationId)) {
          const childName = child.name || '';
          if (childName === objectName && !foundObjects.includes(child)) {
            foundObjects.push(child);
          }
        }
      });

      // Store animation reference on meshes
      foundObjects.forEach((mesh) => {
        mesh.userData.lottieAnimation = lottieAnimation;
        mesh.userData.lottieTexture = lottieTexture;
      });

      // Register animation with trigger system if startZ is provided
      if (startZ !== null && lottieAnimation) {
        const totalFrames = lottieAnimation.totalFrames || 0;
        const pauseAtPercent = pauseZ !== null ? pauseZ : 40; // Default to 40% if pauseZ is provided as percentage
        const pauseFrame = Math.floor(totalFrames * (pauseAtPercent / 100));
        
        const lottieData = {
          anim: lottieAnimation,
          startZ: startZ,
          stopZ: null, // Not using stopZ for this animation
          pauseZ: pauseZ || null,
          resumeZ: resumeZ || null,
          pauseFrame: pauseFrame, // Frame to pause at (40% of animation)
          pauseAtPercent: pauseAtPercent, // Percentage to pause at
          times: null, // Infinite loop
          layerName: objectName,
          started: false,
          stopped: false,
          paused: false,
          pausedAtFrame: false,
          playCount: 0
        };
        
        // Add to LottieManager's animation list for trigger updates
        if (lottieManager.lottieAnimations) {
          lottieManager.lottieAnimations.push(lottieData);
        }
      }

      console.log(`Applied Lottie texture to ${foundObjects.length} ${objectName} object(s)`);
    } catch (error) {
      console.error(`Error applying Lottie texture to ${objectName}:`, error);
    }
  }
}
