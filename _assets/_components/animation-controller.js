// Animation controller for carwash.html
import * as THREE from 'three';
import {
  BORSTEL_X_MOVEMENT_SPEED,
  BORSTEL_X_LEFT_START,
  BORSTEL_X_LEFT_END,
  BORSTEL_X_RIGHT_START,
  BORSTEL_X_RIGHT_END,
  BORSTEL_Y_MOVEMENT_SPEED,
  BORSTEL_Y_LIGGEND_START,
  BORSTEL_Y_LIGGEND_END,
  BORSTEL_Y_LIGGEND_FROM_Z,
  BORSTEL_Y_LIGGEND_TO_Z,
  BORSTEL_Y_LIGGEND_DISTANCE,
  BORSTEL_Y_LIGGEND_TRIGGER_Z,
  BORSTEL_Y_LIGGEND_ANIMATION_SPEED,
  BORSTEL_Y_LIGGEND_UP_START,
  BORSTEL_Y_LIGGEND_UP_END,
  BORSTEL_Y_LIGGEND_UP_FROM_Z,
  BORSTEL_Y_LIGGEND_UP_TO_Z,
  BORSTEL_Y_LIGGEND_UP_DISTANCE,
  BORSTEL_Y_LIGGEND_UP_TRIGGER_Z,
  BORSTEL_Y_LIGGEND_UP_ANIMATION_SPEED,
  BORSTEL_X_MOVEMENT_DISTANCE,
  CURTAIN_FLAP_MIN_SPEED,
  CURTAIN_FLAP_MAX_SPEED,
  CURTAIN_FLAP_DISTANCE,
  CURTAIN_FLAP_MIN_DEG,
  CURTAIN_FLAP_MAX_DEG,
  CURTAIN_FLAP_MAX_LIFT,
  CURTAIN_FLAP_LIFT_DISTANCE,
  CURTAIN_FLAP_MAX_X_MOVEMENT,
  DOUCHE_GORDIJN_WIDTH_START,
  DOUCHE_GORDIJN_WIDTH_END,
  DOUCHE_GORDIJN_FROM_Z,
  DOUCHE_GORDIJN_TO_Z,
  DOUCHE_GORDIJN_DISTANCE,
  DOUCHE_GORDIJN_TRIGGER_Z,
  DOUCHE_GORDIJN_ANIMATION_SPEED,
  USER_WENS_FROM_Z,
  USER_WENS_TO_Z,
  USER_WENS_DISTANCE,
  USER_WENS_TRIGGER_Z,
  USER_WENS_ANIMATION_SPEED,
  USER_WENS_Y_MOVEMENT,
  USER_WENS_WIDTH_START,
  USER_WENS_WIDTH_END,
  USER_MEDIA_FROM_Z,
  USER_MEDIA_TO_Z,
  USER_MEDIA_DISTANCE,
  USER_MEDIA_TRIGGER_Z,
  USER_MEDIA_ANIMATION_SPEED,
  USER_MEDIA_Y_MOVEMENT,
  USER_MEDIA_ZIGZAG_AMPLITUDE,
  USER_MEDIA_ZIGZAG_FREQUENCY,
  USER_MEDIA_SCALE_START,
  USER_MEDIA_SCALE_END,
  BRUSH1_LOTTIE_TRIGGER_Z,
  BRUSH1_LOTTIE_ANIMATION_SPEED,
  BRUSH1_LOTTIE_X_MOVEMENT,
  GATE_FROM_Z,
  GATE_TO_Z,
  GATE_DISTANCE,
  GATE_TRIGGER_Z,
  GATE_ANIMATION_SPEED,
  GATE_X_MOVEMENT,
  BRUSH_UP_FROM_Z,
  BRUSH_UP_TO_Z,
  BRUSH_UP_DISTANCE,
  BRUSH_UP_TRIGGER_Z,
  BRUSH_UP_ANIMATION_SPEED,
  BRUSH_UP_Y_MOVEMENT_FROM,
  BRUSH_UP_Y_MOVEMENT_TO,
  LOTTIE_FRONT_MEDIA_FROM_Z,
  LOTTIE_FRONT_MEDIA_TO_Z,
  LOTTIE_FRONT_MEDIA_DISTANCE,
  LOTTIE_FRONT_MEDIA_TRIGGER_Z,
  LOTTIE_FRONT_MEDIA_ANIMATION_SPEED,
  LOTTIE_FRONT_MEDIA_Y_MOVEMENT,
  LOTTIE_FRONT_MEDIA_X_ROTATION,
  SPRAY_SOAP_DEG,
  SPRAY_SOAP_SPEED
} from './carwash-config.js';

export class AnimationController {
  constructor(sceneSetup, cameraController, lottieManager) {
    this.sceneSetup = sceneSetup;
    this.cameraController = cameraController;
    this.lottieManager = lottieManager;
    this.allBrushBaseObjects = [];
    this.allBorstelStandObjects = [];
    this.allBorstelLiggendObjects = [];
    this.allBorstelLiggendUpObjects = [];
    this.allBlowerFrontMiddleObjects = [];
    this.allCurtainFlapObjects = [];
    this.allCurtainFlapGroups = [];
    this.allDoucheGordijnObjects = [];
    this.allUserWensObjects = [];
    this.allUserMediaObjects = [];
    this.allBrush1LottieBackObjects = []; // Store brush1 back lottie objects for animation
    this.allGateObjects = []; // Store gate objects for animation
    this.allLottieFrontMediaObjects = []; // Store lottie_front objects from station__message--media.glb for Y movement
    this.allSpraySoapObjects = []; // Store spray__soap objects for X-axis rotation animation
    this.lastTime = Date.now();
    this.isAnimating = false;
    this.clock = { startTime: Date.now() }; // Simple clock for consistent timing
  }

  // Set collections of objects to animate
  setBrushBaseObjects(objects) {
    this.allBrushBaseObjects = objects;
  }

  setBorstelStandObjects(objects) {
    this.allBorstelStandObjects = objects;
  }

  setBorstelLiggendObjects(objects) {
    this.allBorstelLiggendObjects = objects;
  }

  setBorstelLiggendUpObjects(objects) {
    this.allBorstelLiggendUpObjects = objects;
  }

  setBlowerFrontMiddleObjects(objects) {
    this.allBlowerFrontMiddleObjects = objects;
  }

  setCurtainFlapObjects(objects) {
    this.allCurtainFlapObjects = objects;
  }

  setCurtainFlapGroups(groups) {
    this.allCurtainFlapGroups = groups;
  }

  setDoucheGordijnObjects(objects) {
    this.allDoucheGordijnObjects = objects;
  }

  setUserWensObjects(objects) {
    this.allUserWensObjects = objects;
  }

  setUserMediaObjects(objects) {
    this.allUserMediaObjects = objects;
  }

  setBrush1LottieBackObjects(objects) {
    this.allBrush1LottieBackObjects = objects;
  }

  setGateObjects(objects) {
    this.allGateObjects = objects;
  }

  setLottieFrontMediaObjects(objects) {
    this.allLottieFrontMediaObjects = objects;
  }

  setSpraySoapObjects(objects) {
    this.allSpraySoapObjects = objects;
  }

  /**
   * Calculate scroll-based animation progress based on camera Z position and distance to object
   * @param {number} cameraZ - Current camera Z position
   * @param {number} fromZ - Camera Z position where animation starts (from)
   * @param {number} toZ - Camera Z position where animation ends (to)
   * @param {THREE.Object3D} object - The object to calculate distance to
   * @param {THREE.Camera} camera - The camera object
   * @param {number} distanceThreshold - Distance threshold for proximity calculation
   * @param {number} fallbackZ - Fallback Z position if object world position is unavailable
   * @returns {number} Progress value from 0 to 1
   */
  calculateScrollProgress(cameraZ, fromZ, toZ, object, camera, distanceThreshold, fallbackZ = 0) {
    // Calculate distance from camera to object
    let distance = distanceThreshold;
    try {
      if (object && object.updateMatrixWorld) {
        object.updateMatrixWorld(true);
        const objectWorldPos = new THREE.Vector3();
        object.getWorldPosition(objectWorldPos);
        distance = camera.position.distanceTo(objectWorldPos);
      } else {
        // Fallback to Z distance if world position not available
        distance = Math.abs(camera.position.z - fallbackZ);
      }
    } catch (e) {
      // Fallback to Z distance if calculation fails
      distance = Math.abs(camera.position.z - fallbackZ);
    }

    // Calculate proximity factor based on distance
    // Full intensity at distance 0-2, tapering to near zero at distanceThreshold
    const proximityFactor = Math.min(Math.max(0, 1 - (distance - 2) / (distanceThreshold - 2)), 1);

    // Calculate progress based on camera Z position within fromZ/toZ range
    // When camera Z > fromZ: progress = 0 (animation hasn't started)
    // When camera Z < toZ: progress = 1 (animation complete)
    // Between fromZ and toZ: progress interpolates linearly
    let zProgress = 0;
    if (cameraZ <= toZ) {
      zProgress = 1; // Animation complete
    } else if (cameraZ >= fromZ) {
      zProgress = 0; // Animation hasn't started
    } else {
      // Linear interpolation between fromZ and toZ
      zProgress = 1 - (cameraZ - toZ) / (fromZ - toZ);
    }

    // Combine Z progress with proximity factor
    // This ensures animation only progresses when camera is both in the right Z range AND close enough
    return Math.min(zProgress * proximityFactor, 1);
  }

  // Animation loop
  animate() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.animationLoop();
    }
  }

  animationLoop() {
    requestAnimationFrame(() => this.animationLoop());
    
    // Calculate delta time
    const currentTime = Date.now();
    const deltaTime = (currentTime - this.lastTime) / 1000; // in seconds
    this.lastTime = currentTime;
    
    // Update camera controller
    if (this.cameraController) {
      this.cameraController.update(deltaTime);
    }
    
    // Rotate brush__base objects around Y axis
    const rotationSpeed = 2.0; // radians per second
    this.allBrushBaseObjects.forEach((item) => {
      const obj = item.object || item; // Support both old format (just object) and new format ({object, direction})
      const direction = item.direction || 'right'; // Default to right if not specified
      
      if (obj && obj.visible) {
        // Rotate right (positive) or left (negative) based on direction
        const speed = direction === 'right' ? rotationSpeed : -rotationSpeed;
        obj.rotation.y += speed * deltaTime;
        
        // Normalize rotation to prevent overflow
        if (obj.rotation.y >= Math.PI * 2) {
          obj.rotation.y -= Math.PI * 2;
        } else if (obj.rotation.y < 0) {
          obj.rotation.y += Math.PI * 2;
        }
      }
    });
    
    // Animate borstel__staand X-axis movement from start to end position based on camera distance
    if (this.allBorstelStandObjects.length > 0 && this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const cameraPos = camera.position;
      
      // Log brush info on first frame
      if (!this._loggedBrushInfo) {
        this.allBorstelStandObjects.forEach((item, i) => {
        });
        this._loggedBrushInfo = true;
      }
      
      this.allBorstelStandObjects.forEach((item) => {
        if (item && item.object && item.object.visible) {
          // Calculate 3D distance from camera to brush group
          let distance = BORSTEL_X_MOVEMENT_DISTANCE; // Default distance
          try {
            item.object.updateMatrixWorld(true);
            const brushWorldPos = new THREE.Vector3();
            item.object.getWorldPosition(brushWorldPos);
            distance = cameraPos.distanceTo(brushWorldPos);
          } catch (e) {
            // Fallback to Z distance if world position not available
            const brushStationZ = item.brushStationZ || 0;
            distance = Math.abs(cameraPos.z - brushStationZ);
          }
          
          // Calculate proximity factor: Full intensity at distance 0-2, tapering to near zero at BORSTEL_X_MOVEMENT_DISTANCE
          // When camera is far (distance >= BORSTEL_X_MOVEMENT_DISTANCE): progress = 0 (at START position)
          // When camera is close (distance = 0): progress = 1 (at END position)
          const proximityFactor = Math.min(Math.max(0, 1 - (distance - 2) / (BORSTEL_X_MOVEMENT_DISTANCE - 2)), 1);
          
          // Smoothly lerp progress for smooth movement
          if (item.currentProgress === undefined) {
            item.currentProgress = 0;
          }
          const lerpFactor = 0.1; // Smooth interpolation factor
          item.currentProgress = item.currentProgress + (proximityFactor - item.currentProgress) * lerpFactor;
          
          if (item.type === 'left') {
            // Left: moves from start to end as camera approaches
            const startX = (item.originalX || 0) + BORSTEL_X_LEFT_START;
            const endX = (item.originalX || 0) + BORSTEL_X_LEFT_END;
            const newX = startX + (endX - startX) * item.currentProgress;
            item.object.position.x = newX;
          } else if (item.type === 'right') {
            // Right: moves from start to end as camera approaches
            const startX = (item.originalX || 0) + BORSTEL_X_RIGHT_START;
            const endX = (item.originalX || 0) + BORSTEL_X_RIGHT_END;
            const newX = startX + (endX - startX) * item.currentProgress;
            item.object.position.x = newX;
            
            // Debug log for right brush
            if (!item.lastRightLogTime || Date.now() - item.lastRightLogTime > 2000 || distance < 15) {
              item.lastRightLogTime = Date.now();
            }
          } else {
            console.warn(`Unknown brush type: "${item.type}"`);
          }
          
          // Force matrix update to ensure the change is applied
          item.object.updateMatrix();
          if (item.object.parent) {
            item.object.parent.updateMatrixWorld(true);
          }
        }
      });
    }
    
    // Animate borstel__liggend Y-axis movement from start to end position (scroll-based scrubbing)
    // Note: Using UP constants because the object names in GLB are swapped
    if (this.allBorstelLiggendObjects.length > 0 && this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const cameraZ = camera.position.z;
      
      this.allBorstelLiggendObjects.forEach((item) => {
        if (item && item.object) {
          const obj = item.object;
          
          // Initialize originalY if not set (store current Y position)
          if (item.originalY === undefined) {
            item.originalY = obj.position.y;
          }
          
          // Calculate scroll-based progress using distance from camera to object
          // Using UP constants because object names are swapped in GLB
          const brushStationZ = item.brushStationZ || 0;
          const progress = this.calculateScrollProgress(
            cameraZ,
            BORSTEL_Y_LIGGEND_UP_FROM_Z,
            BORSTEL_Y_LIGGEND_UP_TO_Z,
            obj,
            camera,
            BORSTEL_Y_LIGGEND_UP_DISTANCE,
            brushStationZ
          );
          
          // Calculate target Y: moves from START to END
          const originalY = item.originalY !== undefined ? item.originalY : obj.position.y;
          const startY = originalY + BORSTEL_Y_LIGGEND_UP_START;
          const endY = originalY + BORSTEL_Y_LIGGEND_UP_END;
          const newY = startY + (endY - startY) * progress;
          
          // Apply Y position
          obj.position.y = newY;
          
          // Force matrix update to ensure the change is applied
          obj.updateMatrix();
          if (obj.parent) {
            obj.parent.updateMatrixWorld(true);
          }
        }
      });
    }
    
    // Animate borstel__liggend--UP Y-axis movement from start to end position (scroll-based scrubbing)
    // Note: Using regular constants because the object names in GLB are swapped
    if (this.allBorstelLiggendUpObjects.length > 0 && this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const cameraZ = camera.position.z;
      
      this.allBorstelLiggendUpObjects.forEach((item) => {
        if (item && item.object) {
          const obj = item.object;
          
          // Initialize originalY if not set (store current Y position)
          if (item.originalY === undefined) {
            item.originalY = obj.position.y;
          }
          
          // Calculate scroll-based progress using distance from camera to object
          // Using regular constants because object names are swapped in GLB
          const brushStationZ = item.brushStationZ || 0;
          const progress = this.calculateScrollProgress(
            cameraZ,
            BORSTEL_Y_LIGGEND_FROM_Z,
            BORSTEL_Y_LIGGEND_TO_Z,
            obj,
            camera,
            BORSTEL_Y_LIGGEND_DISTANCE,
            brushStationZ
          );
          
          // Calculate target Y: moves from START to END
          const originalY = item.originalY !== undefined ? item.originalY : obj.position.y;
          const startY = originalY + BORSTEL_Y_LIGGEND_START;
          const endY = originalY + BORSTEL_Y_LIGGEND_END;
          const newY = startY + (endY - startY) * progress;
          
          // Apply Y position
          obj.position.y = newY;
          
          // Force matrix update to ensure the change is applied
          obj.updateMatrix();
          if (obj.parent) {
            obj.parent.updateMatrixWorld(true);
          }
        }
      });
    }
    
    // Rotate front__middle objects inside blower__ objects around Z axis
    const blowerFrontMiddleRotationSpeed = 5.0; // radians per second
    this.allBlowerFrontMiddleObjects.forEach((obj) => {
      if (obj && obj.visible) {
        obj.rotation.z -= blowerFrontMiddleRotationSpeed * deltaTime;
        
        // Normalize rotation to prevent overflow
        if (obj.rotation.z >= Math.PI * 2) {
          obj.rotation.z -= Math.PI * 2;
        } else if (obj.rotation.z < 0) {
          obj.rotation.z += Math.PI * 2;
        }
      }
    });
    
    // Animate spray__soap objects Y-axis rotation in a loop from -deg to +deg
    if (this.allSpraySoapObjects.length > 0) {
      const t = (Date.now() - this.clock.startTime) / 1000; // Elapsed time in seconds
      const degInRadians = (SPRAY_SOAP_DEG * Math.PI) / 180; // Convert degrees to radians
      
      this.allSpraySoapObjects.forEach((item) => {
        if (item && item.object && item.object.visible) {
          const obj = item.object;
          
          // Initialize originalRotationY if not set (store current Y rotation)
          if (item.originalRotationY === undefined) {
            item.originalRotationY = obj.rotation.y;
          }
          
          // Calculate rotation using sine wave: oscillates from -deg to +deg
          // sin(t * speed) gives us a value between -1 and 1
          // Multiply by degInRadians to get rotation range from -deg to +deg
          const rotationOffset = Math.sin(t * SPRAY_SOAP_SPEED) * degInRadians;
          obj.rotation.y = item.originalRotationY + rotationOffset;
          
          // Force matrix update to ensure the change is applied
          obj.updateMatrix();
          if (obj.parent) {
            obj.parent.updateMatrixWorld(true);
          }
        }
      });
    }
    
    // Animate curtain flaps with distance-based speed and angle interpolation
    // Simplified approach inspired by React Three Fiber pattern
    if (this.allCurtainFlapObjects.length > 0 && this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const t = (Date.now() - this.clock.startTime) / 1000; // Elapsed time in seconds
      
      // Get camera position
      const cameraPos = camera.position;
      
      // Log config values on first frame
      if (!this._loggedFlapConfig) {
        const liftingFlaps = this.allCurtainFlapObjects.filter(f => f.shouldLift);
        if (liftingFlaps.length > 0) {
          liftingFlaps.forEach((flap, i) => {
          });
        }
        this._loggedFlapConfig = true;
      }
      
      this.allCurtainFlapObjects.forEach((item) => {
        if (item && item.object && item.object.visible) {
          const obj = item.object;
          const originalRotation = item.originalRotationX || 0;
          const phaseOffset = item.phaseOffset || 0; // Unique phase offset for each flap
          const baseSpeed = item.rotationSpeed || 1.0; // Unique base speed for each flap
          
          // Calculate 3D distance from camera to flap (using flap's world position)
          let distance = CURTAIN_FLAP_DISTANCE; // Default distance
          if (obj.parent) {
            obj.updateMatrixWorld(true);
            const flapWorldPos = new THREE.Vector3();
            obj.getWorldPosition(flapWorldPos);
            distance = cameraPos.distanceTo(flapWorldPos);
          } else {
            // Fallback to Z distance if world position not available
            const curtainStationZ = item.curtainStationZ || 0;
            distance = Math.abs(cameraPos.z - curtainStationZ);
          }
          
          // Calculate proximity factor: Full intensity at distance 0-2, tapering to near zero at CURTAIN_FLAP_DISTANCE
          // Similar to reference code: Range from 0-2 (full) to 15+ (near zero)
          const proximityFactor = Math.min(Math.max(0, 1 - (distance - 2) / (CURTAIN_FLAP_DISTANCE - 2)), 1);
          
          // Initialize current values if not set
          if (item.currentSpeed === undefined) {
            item.currentSpeed = CURTAIN_FLAP_MIN_SPEED;
            item.currentMaxAngle = CURTAIN_FLAP_MIN_DEG;
          }
          
          // Calculate target speed and angle based on proximity
          const targetSpeed = CURTAIN_FLAP_MIN_SPEED + (CURTAIN_FLAP_MAX_SPEED - CURTAIN_FLAP_MIN_SPEED) * proximityFactor;
          const targetMaxAngle = CURTAIN_FLAP_MIN_DEG + (CURTAIN_FLAP_MAX_DEG - CURTAIN_FLAP_MIN_DEG) * proximityFactor;
          
          // Smoothly lerp to target values (like THREE.MathUtils.lerp)
          const lerpFactor = 0.1; // Smooth interpolation factor
          item.currentSpeed = item.currentSpeed + (targetSpeed - item.currentSpeed) * lerpFactor;
          item.currentMaxAngle = item.currentMaxAngle + (targetMaxAngle - item.currentMaxAngle) * lerpFactor;
          
          // Base idle sway (always present, but small) - ensures natural movement even when far
          const idleSway = Math.sin(t * baseSpeed * 0.5 + phaseOffset) * (CURTAIN_FLAP_MIN_DEG * Math.PI / 180);
          
          // Active sway (scaled by proximity factor)
          // Use the flap's unique speed multiplied by current speed factor
          const activeSway = Math.sin(t * baseSpeed * item.currentSpeed + phaseOffset) * (item.currentMaxAngle * Math.PI / 180);
          
          // Combine: base idle + proximity-scaled active movement
          const combinedAngle = idleSway + (activeSway - idleSway) * proximityFactor;
          
          // Apply rotation around X axis (from top)
          obj.rotation.x = originalRotation + combinedAngle;
          
          // Apply Y-axis lift and X-axis movement for flaps at indices 4, 5, 6 (only if shouldLift is true)
          if (item.shouldLift) {
            // Initialize original positions if not set
            if (item.originalY === undefined) {
              item.originalY = obj.position.y;
            }
            if (item.originalX === undefined) {
              item.originalX = obj.position.x;
            }
            
            // Calculate separate distance for lift (using lift-specific distance parameter)
            // This allows lift to have different distance threshold than rotation
            let liftDistance = CURTAIN_FLAP_LIFT_DISTANCE; // Default distance
            if (obj.parent) {
              obj.updateMatrixWorld(true);
              const flapWorldPos = new THREE.Vector3();
              obj.getWorldPosition(flapWorldPos);
              liftDistance = cameraPos.distanceTo(flapWorldPos);
            } else {
              // Fallback to Z distance if world position not available
              const curtainStationZ = item.curtainStationZ || 0;
              liftDistance = Math.abs(cameraPos.z - curtainStationZ);
            }
            
            // Calculate proximity factor for lift: Full intensity at distance 0-2, tapering to near zero at CURTAIN_FLAP_LIFT_DISTANCE
            // This is separate from rotation proximity factor
            const liftProximityFactor = Math.min(Math.max(0, 1 - (liftDistance - 2) / (CURTAIN_FLAP_LIFT_DISTANCE - 2)), 1);
            
            // Calculate target lift: Smoothly interpolate from 0 (far) to MAX_LIFT (close) based on lift proximity
            const targetLift = CURTAIN_FLAP_MAX_LIFT * liftProximityFactor;
            
            // Calculate target X movement: Smoothly interpolate from 0 (far) to MAX_X_MOVEMENT (close) based on lift proximity
            // DISABLED: Only Y movement (up) is needed, not X movement
            // const targetXMovement = CURTAIN_FLAP_MAX_X_MOVEMENT * liftProximityFactor;
            const targetXMovement = 0; // No X movement - only move up in Y
            
            // Smoothly lerp to target positions
            const liftLerpFactor = 0.1; // Smooth interpolation factor
            const currentY = obj.position.y;
            const targetY = item.originalY + targetLift; // Move UP in Y (positive Y is up)
            const newY = currentY + (targetY - currentY) * liftLerpFactor;
            
            // Keep X at original position (no X movement)
            const currentX = obj.position.x;
            const targetX = item.originalX; // Keep original X position
            const newX = currentX + (targetX - currentX) * liftLerpFactor;
            
            // Update positions - Y moves up, X stays the same
            obj.position.y = newY;
            obj.position.x = newX;
            
            // Force matrix update to ensure the change is applied
            obj.updateMatrix();
            if (obj.parent) {
              obj.parent.updateMatrixWorld(true);
            }
            
            // Debug log for Y movement (periodically or when close)
            if (!item.lastLiftLogTime || Date.now() - item.lastLiftLogTime > 2000 || liftDistance < 25) {
              const yChange = newY - item.originalY;
              const yMoving = Math.abs(yChange) > 0.1;
              item.lastLiftLogTime = Date.now();
            }
          }
        }
      });
    }
    
    // DISABLED: Animate curtain flap groups (--01, --02, --03) to move up in Y when camera comes closer
    // Groups should NOT move up - only individual flaps at indices 4, 5, 6 should lift
    // Keeping this code commented out in case we need it later
    /*
    if (this.allCurtainFlapGroups.length > 0 && this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const cameraPos = camera.position;
      
      // Debug: Log group count on first frame
      if (!this._loggedGroupCount) {
        this.allCurtainFlapGroups.forEach((item, i) => {
          const name = item.name || item.id || 'unnamed';
          const is03 = name.toLowerCase().includes('--03') || name.toLowerCase().includes('_03');
        });
        // Verify all three groups are present
        const groupNames = this.allCurtainFlapGroups.map(g => (g.name || g.id || '').toLowerCase());
        const has01 = groupNames.some(n => n.includes('--01') || n.includes('_01'));
        const has02 = groupNames.some(n => n.includes('--02') || n.includes('_02'));
        const has03 = groupNames.some(n => n.includes('--03') || n.includes('_03'));
        this._loggedGroupCount = true;
      }
      
      this.allCurtainFlapGroups.forEach((item, index) => {
        if (item && item.object) {
          const obj = item.object;
          
          // Make sure object is visible
          if (!obj.visible) {
            obj.visible = true;
          }
          
          // Initialize originalY if not set (store it on first frame)
          // Get world position to ensure we have the correct starting position
          if (item.originalY === undefined) {
            obj.updateMatrixWorld(true);
            const worldPos = new THREE.Vector3();
            obj.getWorldPosition(worldPos);
            // Store both local and world Y for reference
            item.originalY = obj.position.y;
            item.originalWorldY = worldPos.y;
          }
          
          const originalY = item.originalY;
          
          // Calculate 3D distance from camera to group
          let distance = CURTAIN_FLAP_LIFT_DISTANCE; // Default distance
          try {
            obj.updateMatrixWorld(true);
            const groupWorldPos = new THREE.Vector3();
            obj.getWorldPosition(groupWorldPos);
            distance = cameraPos.distanceTo(groupWorldPos);
          } catch (e) {
            // Fallback to Z distance if world position not available
            const curtainStationZ = item.curtainStationZ || 0;
            distance = Math.abs(cameraPos.z - curtainStationZ);
            console.warn(`Using Z distance for group "${item.name || item.id}": ${distance.toFixed(2)}`);
          }
          
          // Calculate proximity factor: Full intensity at distance 0-2, tapering to near zero at CURTAIN_FLAP_LIFT_DISTANCE
          // Similar to rotation animation: smooth interpolation based on camera distance
          const proximityFactor = Math.min(Math.max(0, 1 - (distance - 2) / (CURTAIN_FLAP_LIFT_DISTANCE - 2)), 1);
          
          // Get unique properties for this group (each group can have different lift/speed)
          const liftMultiplier = item.liftMultiplier !== undefined ? item.liftMultiplier : 1.0;
          const speedMultiplier = item.speedMultiplier !== undefined ? item.speedMultiplier : 1.0;
          
          // Calculate target lift: Smoothly interpolate from 0 (far) to MAX_LIFT (close) based on proximity
          // Lift increases smoothly as camera gets closer, reaching MAX_LIFT at distance 0
          // Apply group-specific lift multiplier so each group can move differently
          const baseTargetLift = CURTAIN_FLAP_MAX_LIFT * proximityFactor;
          const targetLift = baseTargetLift * liftMultiplier;
          
          // Smoothly lerp to target lift position (like THREE.MathUtils.lerp)
          // Apply speed multiplier so each group can move at different speeds
          const baseLerpFactor = 0.1; // Base smooth interpolation factor
          const lerpFactor = baseLerpFactor * speedMultiplier;
          const currentY = obj.position.y;
          const targetY = originalY + targetLift;
          const newY = currentY + (targetY - currentY) * lerpFactor;
          
          // Update position
          obj.position.y = newY;
          
          // Force matrix update to ensure the change is applied
          obj.updateMatrix();
          if (obj.parent) {
            obj.parent.updateMatrixWorld(true);
          }
          
          // Debug log periodically or when close
          if (!item.lastLogTime || Date.now() - item.lastLogTime > 2000 || distance < 20) {
            obj.updateMatrixWorld(true);
            const currentWorldPos = new THREE.Vector3();
            obj.getWorldPosition(currentWorldPos);
            const groupType = item.groupType || 'unknown';
            item.lastLogTime = Date.now();
          }
        } else {
          console.warn(`Curtain flap group item ${index} is invalid:`, item);
        }
      });
    } else if (this.allCurtainFlapGroups.length === 0) {
      // Log once if no groups are found
      if (!this._loggedNoGroups) {
        console.warn('No curtain flap groups found for animation');
        this._loggedNoGroups = true;
      }
    }
    */
    
    // Animate douche__gordijn width scaling based on camera Z position (scroll-based scrubbing)
    if (this.allDoucheGordijnObjects.length > 0 && this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const cameraZ = camera.position.z;
      
      this.allDoucheGordijnObjects.forEach((item) => {
        if (item && item.object && item.object.visible) {
          const obj = item.object;
          
          // Calculate scroll-based progress using distance from camera to object
          const gordijnStationZ = item.gordijnStationZ || 0;
          const progress = this.calculateScrollProgress(
            cameraZ,
            DOUCHE_GORDIJN_FROM_Z,
            DOUCHE_GORDIJN_TO_Z,
            obj,
            camera,
            DOUCHE_GORDIJN_DISTANCE,
            gordijnStationZ
          );
          
          // Calculate target scale: interpolate from START (1.0, full width) to END (0.2, smaller width)
          const originalScaleX = item.originalScaleX !== undefined ? item.originalScaleX : 1.0;
          const startScaleX = originalScaleX * DOUCHE_GORDIJN_WIDTH_START;
          const endScaleX = originalScaleX * DOUCHE_GORDIJN_WIDTH_END;
          const newScaleX = startScaleX + (endScaleX - startScaleX) * progress;
          
          // Apply scale to X axis (width)
          obj.scale.x = newScaleX;
          
          // Force matrix update to ensure the change is applied
          obj.updateMatrix();
          if (obj.parent) {
            obj.parent.updateMatrixWorld(true);
          }
        }
      });
    }
    
    // Animate user__wens Y-axis movement based on camera Z position (scroll-based scrubbing)
    if (this.allUserWensObjects.length > 0 && this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const cameraZ = camera.position.z;
      
      this.allUserWensObjects.forEach((item) => {
        if (item && item.object) {
          const obj = item.object;
          
          // Initialize originalY if not set (store current Y position)
          if (item.originalY === undefined) {
            item.originalY = obj.position.y;
          }
          
          // Initialize originalScaleX if not set (store current X scale)
          if (item.originalScaleX === undefined) {
            item.originalScaleX = obj.scale.x;
          }
          
          // Calculate scroll-based progress using distance from camera to object
          const wensStationZ = item.wensStationZ || 0;
          const progress = this.calculateScrollProgress(
            cameraZ,
            USER_WENS_FROM_Z,
            USER_WENS_TO_Z,
            obj,
            camera,
            USER_WENS_DISTANCE,
            wensStationZ
          );
          
          // Calculate target Y: move down (negative Y direction) from original position
          const originalY = item.originalY !== undefined ? item.originalY : obj.position.y;
          const startY = originalY;
          const endY = originalY + USER_WENS_Y_MOVEMENT; // USER_WENS_Y_MOVEMENT is negative (down)
          const newY = startY + (endY - startY) * progress;
          
          // Calculate target scale X: interpolate from START (1.0, full width) to END (0.6, smaller width)
          const originalScaleX = item.originalScaleX !== undefined ? item.originalScaleX : 1.0;
          const startScaleX = originalScaleX * USER_WENS_WIDTH_START;
          const endScaleX = originalScaleX * USER_WENS_WIDTH_END;
          const newScaleX = startScaleX + (endScaleX - startScaleX) * progress;
          
          // Apply Y position
          obj.position.y = newY;
          
          // Apply scale to X axis (width)
          obj.scale.x = newScaleX;
          
          // Force matrix update to ensure the change is applied
          obj.updateMatrix();
          if (obj.parent) {
            obj.parent.updateMatrixWorld(true);
          }
        }
      });
    }
    
    // Animate user__media with zig zag movement going up and scale down based on camera Z position (scroll-based scrubbing)
    if (this.allUserMediaObjects.length > 0 && this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const cameraZ = camera.position.z;
      const t = (Date.now() - this.clock.startTime) / 1000; // Elapsed time in seconds (for zig zag oscillation)
      
      this.allUserMediaObjects.forEach((item) => {
        if (item && item.object) {
          const obj = item.object;
          
          // Initialize original values if not set
          if (item.originalY === undefined) {
            item.originalY = obj.position.y;
          }
          if (item.originalX === undefined) {
            item.originalX = obj.position.x;
          }
          if (item.originalScale === undefined) {
            item.originalScale = { x: obj.scale.x, y: obj.scale.y, z: obj.scale.z };
          }
          
          // Calculate scroll-based progress using distance from camera to object
          const mediaStationZ = item.mediaStationZ || 0;
          const progress = this.calculateScrollProgress(
            cameraZ,
            USER_MEDIA_FROM_Z,
            USER_MEDIA_TO_Z,
            obj,
            camera,
            USER_MEDIA_DISTANCE,
            mediaStationZ
          );
          
          // Calculate target Y: move up (positive Y direction) from original position
          const originalY = item.originalY !== undefined ? item.originalY : obj.position.y;
          const startY = originalY;
          const endY = originalY + USER_MEDIA_Y_MOVEMENT; // USER_MEDIA_Y_MOVEMENT is positive (up)
          const newY = startY + (endY - startY) * progress;
          
          // Calculate zig zag X movement: sine wave based on progress and time
          // The zig zag should increase in frequency as progress increases
          const zigZagTime = t * USER_MEDIA_ZIGZAG_FREQUENCY; // Time-based oscillation
          // Combine progress-based phase with time-based oscillation for smooth zig zag
          const zigZagPhase = progress * Math.PI * 2 * USER_MEDIA_ZIGZAG_FREQUENCY + zigZagTime;
          const zigZagOffset = Math.sin(zigZagPhase) * USER_MEDIA_ZIGZAG_AMPLITUDE * progress;
          const originalX = item.originalX !== undefined ? item.originalX : obj.position.x;
          const newX = originalX + zigZagOffset;
          
          // Calculate target scale: interpolate from START (1.0, full size) to END (0.3, smaller)
          const originalScale = item.originalScale !== undefined ? item.originalScale : { x: obj.scale.x, y: obj.scale.y, z: obj.scale.z };
          const startScale = {
            x: originalScale.x * USER_MEDIA_SCALE_START,
            y: originalScale.y * USER_MEDIA_SCALE_START,
            z: originalScale.z * USER_MEDIA_SCALE_START
          };
          const endScale = {
            x: originalScale.x * USER_MEDIA_SCALE_END,
            y: originalScale.y * USER_MEDIA_SCALE_END,
            z: originalScale.z * USER_MEDIA_SCALE_END
          };
          const newScale = {
            x: startScale.x + (endScale.x - startScale.x) * progress,
            y: startScale.y + (endScale.y - startScale.y) * progress,
            z: startScale.z + (endScale.z - startScale.z) * progress
          };
          
          // Apply positions and scale
          obj.position.y = newY;
          obj.position.x = newX;
          obj.scale.x = newScale.x;
          obj.scale.y = newScale.y;
          obj.scale.z = newScale.z;
          
          // Force matrix update to ensure the change is applied
          obj.updateMatrix();
          if (obj.parent) {
            obj.parent.updateMatrixWorld(true);
          }
        }
      });
    }
    
    // Update Lottie animations based on camera Z position or camera distance
    if (this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const cameraZ = camera.position.z;
      if (this.lottieManager) {
        this.lottieManager.updateLottieTriggers(cameraZ, camera);
      }
    }
    
    
    // Animate gate X-axis movement based on camera Z position (scroll-based scrubbing)
    if (this.allGateObjects.length > 0 && this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const cameraZ = camera.position.z;
      
      this.allGateObjects.forEach((item) => {
        if (item && item.object) {
          const obj = item.object;
          
          // Initialize originalX if not set (store current X position)
          if (item.originalX === undefined) {
            item.originalX = obj.position.x;
          }
          
          // Calculate scroll-based progress using distance from camera to object
          const gateStationZ = item.gateStationZ || 0;
          const progress = this.calculateScrollProgress(
            cameraZ,
            GATE_FROM_Z,
            GATE_TO_Z,
            obj,
            camera,
            GATE_DISTANCE,
            gateStationZ
          );
          
          // Calculate target X: gate__right moves right (positive), gate__left moves left (negative)
          const originalX = item.originalX !== undefined ? item.originalX : obj.position.x;
          const startX = originalX;
          const xMovement = item.type === 'right' ? GATE_X_MOVEMENT : -GATE_X_MOVEMENT; // Right = positive, left = negative
          const endX = originalX + xMovement;
          const newX = startX + (endX - startX) * progress;
          
          // Apply X position
          obj.position.x = newX;
          
          // Force matrix update to ensure the change is applied
          obj.updateMatrix();
          if (obj.parent) {
            obj.parent.updateMatrixWorld(true);
          }
        }
      });
    }
    
    // Animate lottie_front Y-axis movement in station__message--media.glb based on camera Z position (scroll-based scrubbing)
    if (this.allLottieFrontMediaObjects.length > 0 && this.sceneSetup && this.sceneSetup.getCamera) {
      const camera = this.sceneSetup.getCamera();
      const cameraZ = camera.position.z;
      
      this.allLottieFrontMediaObjects.forEach((item) => {
        if (item && item.object) {
          const obj = item.object;
          
          // Initialize originalY if not set (store current Y position)
          if (item.originalY === undefined) {
            item.originalY = obj.position.y;
          }
          
          // Initialize originalRotationX if not set (store current X rotation)
          if (item.originalRotationX === undefined) {
            item.originalRotationX = obj.rotation.x;
          }
          
          // Calculate scroll-based progress using distance from camera to object
          const lottieFrontStationZ = item.lottieFrontStationZ || 0;
          const progress = this.calculateScrollProgress(
            cameraZ,
            LOTTIE_FRONT_MEDIA_FROM_Z,
            LOTTIE_FRONT_MEDIA_TO_Z,
            obj,
            camera,
            LOTTIE_FRONT_MEDIA_DISTANCE,
            lottieFrontStationZ
          );
          
          // Calculate target Y: move up (positive Y direction) from original position
          const originalY = item.originalY !== undefined ? item.originalY : obj.position.y;
          const startY = originalY;
          const endY = originalY + LOTTIE_FRONT_MEDIA_Y_MOVEMENT; // LOTTIE_FRONT_MEDIA_Y_MOVEMENT is positive (up)
          const newY = startY + (endY - startY) * progress;
          
          // Calculate target X rotation: rotate from original to original + rotation amount
          const originalRotationX = item.originalRotationX !== undefined ? item.originalRotationX : obj.rotation.x;
          const startRotationX = originalRotationX;
          const endRotationX = originalRotationX + LOTTIE_FRONT_MEDIA_X_ROTATION; // Add 90 degrees (PI/2 radians)
          const newRotationX = startRotationX + (endRotationX - startRotationX) * progress;
          
          // Apply Y position and X rotation
          obj.position.y = newY;
          obj.rotation.x = newRotationX;
          
          // Force matrix update to ensure the change is applied
          obj.updateMatrix();
          if (obj.parent) {
            obj.parent.updateMatrixWorld(true);
          }
        }
      });
    }
    
    this.sceneSetup.render();
  }
}
