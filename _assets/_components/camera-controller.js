/* ===== CAMERA CONTROLLER ===== */
export class CameraController {
  constructor(camera, sceneSetup, scrollCheckpoints = null) {
    this.camera = camera;
    this.sceneSetup = sceneSetup;
    
    // Camera movement settings
    this.targetZ = camera.position.z;
    this.maxZ = sceneSetup.normalStartZ;
    this.minZ = -1000;
    this.cameraMoveSpeed = 0.15; // Smooth scrolling speed - same as manual scrolling
    
    // Scroll checkpoints
    this.scrollCheckpoints = scrollCheckpoints || [];
    this.currentCheckpointIndex = 0;
    this.isMovingToCheckpoint = false;
    this.movementThreshold = 0.5; // Distance threshold to consider camera "arrived"
    
    // Mobile detection (needed before setting checkpoint mode)
    this.isMobile = this.detectMobile();
    
    // Disable checkpoint mode on mobile - always use free scrolling
    this.useCheckpointMode = false; // Disabled by default - use free scrolling mode
    if (this.isMobile) {
      this.useCheckpointMode = false; // Force disabled on mobile
    }
    
    // Linear movement settings
    this.useLinearMovement = false;
    this.linearStartZ = null;
    this.linearTargetZ = null;
    this.linearStartTime = null;
    this.linearDuration = 0;
    
    // Timeline movement settings
    this.timeline = null; // Current timeline array
    this.timelineSegmentIndex = 0; // Current segment in timeline
    this.timelineStartTime = null; // When timeline started
    this.timelineSegmentStartTime = null; // When current segment started
    this.timelineSegmentStartZ = null; // Z position at start of current segment
    this.useTimeline = false;
    
    // Post-pause movement (subtle backward/upward movement after pause)
    this.postPauseMovement = null;
    
    // Camera control targets
    this.targetCameraX = 0;
    this.targetCameraY = sceneSetup.startY;
    this.targetCameraRotationX = sceneSetup.defaultCameraRotationX;
    this.targetCameraRotationY = 0;
    this.targetCameraRotationZ = 0;
    this.useManualY = false;
    this.useManualRotation = true;
    this.lockOnTarget = null; // Object to lock camera onto (e.g., front model)
    this.lockOnOffset = new THREE.Vector3(0, 10, 0); // Offset from lock target
    
    // Intro animation
    this.introComplete = false;
    this.introDuration = 2000;
    this.introStartTime = Date.now();
    
    // Scroll settings
    // Reduce scroll speed on mobile for better control
    this.scrollSpeed = this.isMobile ? 4 : 8; // Free scrolling speed when checkpoint mode is off
    
    // Touch settings
    this.touchStartY = null;
    this.touchStartZ = null;
    // Reduce touch scroll speed on mobile
    this.touchScrollSpeed = this.isMobile ? 0.25 : 0.5;
    
    // Initialize checkpoint if available
    if (this.scrollCheckpoints.length > 0) {
      this.currentCheckpointIndex = this.findNearestCheckpointIndex(this.camera.position.z);
    }
    
    this.init();
  }
  
  init() {
    this.setupScrollControls();
    this.setupTouchControls();
  }
  
  setupScrollControls() {
    const card = document.querySelector('.card');
    if (!card) return;
    
    let lastWheelTime = 0;
    
    card.addEventListener('wheel', (e) => {
      // If checkpoint controller is handling scroll, skip camera controller's scroll handling
      if (window.checkpointController && window.USE_CHECKPOINT_SCROLL) {
        return; // Let checkpoint controller handle it
      }
      
      e.preventDefault();
      
      const now = Date.now();
      const timeDelta = now - lastWheelTime;
      lastWheelTime = now;
      
      // Don't allow scrolling if camera is currently moving or timeline is active
      if (this.isMovingToCheckpoint || this.useTimeline) {
        return;
      }
      
      // Disable checkpoint mode on mobile - always use free scrolling
      // If using checkpoints and checkpoint mode is enabled (and not on mobile), navigate between them
      if (this.useCheckpointMode && !this.isMobile && this.scrollCheckpoints.length > 0) {
        // Determine scroll direction and move to next/previous checkpoint
        const scrollDirection = e.deltaY > 0 ? 1 : -1; // Positive = scroll down = move forward (more negative Z)
        this.navigateToCheckpoint(this.currentCheckpointIndex + scrollDirection);
      } else {
        // Free scrolling mode - accumulate delta for smoother movement
        // Use deltaMode to handle different scroll types (pixel, line, page)
        let delta = e.deltaY;
        if (e.deltaMode === 1) {
          // Line mode - multiply by typical line height
          delta *= 16;
        } else if (e.deltaMode === 2) {
          // Page mode - multiply by viewport height
          delta *= window.innerHeight;
        }
        
        // Apply scroll speed with better scaling
        const scrollDelta = delta * this.scrollSpeed * 0.008; // Slightly reduced multiplier for smoother feel
        this.targetZ -= scrollDelta;
        this.targetZ = Math.max(this.minZ, Math.min(this.maxZ, this.targetZ));
      }
    }, { passive: false });
  }
  
  setupTouchControls() {
    const card = document.querySelector('.card');
    if (!card) return;
    
    let touchStartCheckpointIndex = null;
    let touchMoved = false;
    
    card.addEventListener('touchstart', (e) => {
      // Don't allow touch input if camera is currently moving or timeline is active
      if (this.isMovingToCheckpoint || this.useTimeline) {
        return;
      }
      
      if (e.touches.length === 1) {
        this.touchStartY = e.touches[0].clientY;
        // Always set touchStartZ to current camera position for smooth scrolling
        // This ensures the touch movement is relative to the actual camera position
        this.touchStartZ = this.camera.position.z;
        if (this.scrollCheckpoints.length > 0) {
          touchStartCheckpointIndex = this.currentCheckpointIndex;
        }
        touchMoved = false;
      }
    }, { passive: true });
    
    card.addEventListener('touchmove', (e) => {
      if (e.touches.length !== 1 || this.touchStartY === null) return;
      
      e.preventDefault();
      
      // Don't allow touch navigation if camera is moving or timeline is active
      if (this.isMovingToCheckpoint || this.useTimeline) {
        // Reset touch tracking if movement detected during camera movement
        this.touchStartY = null;
        this.touchStartZ = null;
        touchStartCheckpointIndex = null;
        touchMoved = false;
        return;
      }
      
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - this.touchStartY;
      const threshold = 50; // Minimum swipe distance to trigger checkpoint change
      
      if (Math.abs(deltaY) > threshold) {
        touchMoved = true;
        
        // Double-check we're still not moving before navigating
        if (this.isMovingToCheckpoint || this.useTimeline) {
          return;
        }
        
        // Disable checkpoint mode on mobile - always use free scrolling
        if (this.useCheckpointMode && !this.isMobile && this.scrollCheckpoints.length > 0 && touchStartCheckpointIndex !== null) {
          // Determine swipe direction and navigate to checkpoint
          const swipeDirection = deltaY > 0 ? -1 : 1; // Swipe down = positive deltaY = move backward (less negative Z)
          const targetIndex = touchStartCheckpointIndex + swipeDirection;
          this.navigateToCheckpoint(targetIndex);
        } else {
          // Free scrolling mode - update targetZ and let lerp handle smooth movement
          // Use mobile-optimized speed (slower on mobile)
          this.targetZ = this.touchStartZ - (deltaY * this.touchScrollSpeed);
          this.targetZ = Math.max(this.minZ, Math.min(this.maxZ, this.targetZ));
        }
      }
    }, { passive: false });
    
    card.addEventListener('touchend', () => {
      this.touchStartY = null;
      this.touchStartZ = null;
      touchStartCheckpointIndex = null;
      touchMoved = false;
    });
  }
  
  updateIntroAnimation() {
    if (this.introComplete) return;
    
    const elapsed = Date.now() - this.introStartTime;
    const progress = Math.min(elapsed / this.introDuration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    
    this.targetZ = this.sceneSetup.introStartZ - 
                   (this.sceneSetup.introStartZ - this.sceneSetup.normalStartZ) * easedProgress;
    
    if (progress >= 1) {
      this.introComplete = true;
      this.targetZ = this.sceneSetup.normalStartZ;
    }
  }
  
  update(deltaTime) {
    // Update intro animation (only if not complete)
    if (!this.introComplete) {
      this.updateIntroAnimation();
    }
    
    // Camera movement - timeline, linear, or exponential
    if (this.useTimeline && this.timeline && this.timeline.length > 0) {
      // Handle timeline-based movement
      this.updateTimelineMovement();
    } else if (this.useLinearMovement && this.linearStartTime !== null && this.linearDuration > 0) {
      // Linear movement based on time
      const elapsed = (Date.now() - this.linearStartTime) / 1000; // elapsed time in seconds
      const progress = Math.min(1, elapsed / this.linearDuration);
      
      // Linear interpolation
      this.camera.position.z = this.linearStartZ + (this.linearTargetZ - this.linearStartZ) * progress;
      
      // If movement is complete, disable linear mode
      if (progress >= 1) {
        this.useLinearMovement = false;
        this.camera.position.z = this.linearTargetZ; // Ensure exact position
      }
    } else {
      // Exponential lerp (default, for scrolling)
      // In free scroll mode, use faster lerp for immediate response
      // In checkpoint mode, use checkpoint speed
      if (this.useCheckpointMode) {
        const currentSpeed = this.getCurrentCheckpointSpeed();
        this.camera.position.z += (this.targetZ - this.camera.position.z) * currentSpeed;
      } else {
        // Free scroll mode - use faster lerp for immediate response
        const freeScrollSpeed = 0.4; // Faster lerp for free scrolling (was 0.15)
        this.camera.position.z += (this.targetZ - this.camera.position.z) * freeScrollSpeed;
      }
    }
    
    // Check if camera has reached target checkpoint (for non-timeline movements)
    if (!this.useTimeline && this.scrollCheckpoints.length > 0) {
      const distanceToTarget = Math.abs(this.camera.position.z - this.targetZ);
      if (distanceToTarget < this.movementThreshold) {
        this.isMovingToCheckpoint = false;
        // Update current checkpoint index to match actual position
        this.currentCheckpointIndex = this.findNearestCheckpointIndex(this.camera.position.z);
      } else if (this.useCheckpointMode) {
        // Only set isMovingToCheckpoint in checkpoint mode
        this.isMovingToCheckpoint = true;
      }
    }
    this.camera.position.x += (this.targetCameraX - this.camera.position.x) * this.cameraMoveSpeed;
    
    // Y position control
    if (this.useManualY) {
      this.camera.position.y += (this.targetCameraY - this.camera.position.y) * this.cameraMoveSpeed;
    } else {
      const zRange = this.sceneSetup.introStartZ - 0;
      const currentZProgress = (this.sceneSetup.introStartZ - this.camera.position.z) / zRange;
      const clampedProgress = Math.max(0, Math.min(1, currentZProgress));
      const targetY = this.sceneSetup.startY - 
                     (this.sceneSetup.startY - this.sceneSetup.endY) * clampedProgress;
      this.camera.position.y += (targetY - this.camera.position.y) * this.cameraMoveSpeed;
      this.targetCameraY = this.camera.position.y;
    }
    
    // Rotation control
    if (this.lockOnTarget) {
      // Lock onto target object - camera always looks at the target
      const targetWorldPosition = new THREE.Vector3();
      this.lockOnTarget.getWorldPosition(targetWorldPosition);
      targetWorldPosition.add(this.lockOnOffset);
      this.camera.lookAt(targetWorldPosition);
    } else if (this.useManualRotation) {
      const rotXRad = (this.targetCameraRotationX * Math.PI) / 180;
      const rotYRad = (this.targetCameraRotationY * Math.PI) / 180;
      const rotZRad = (this.targetCameraRotationZ * Math.PI) / 180;
      
      this.camera.rotation.x += (rotXRad - this.camera.rotation.x) * this.cameraMoveSpeed;
      this.camera.rotation.y += (rotYRad - this.camera.rotation.y) * this.cameraMoveSpeed;
      this.camera.rotation.z += (rotZRad - this.camera.rotation.z) * this.cameraMoveSpeed;
    } else {
      const lookAtDistance = 200;
      this.camera.lookAt(0, 10, this.camera.position.z - 200);
    }
  }
  
  // API methods
  setTargetZ(z) {
    // Stop intro animation immediately when manually setting target
    this.introComplete = true;
    this.targetZ = Math.max(this.minZ, Math.min(this.maxZ, z));
    // Target Z set
  }
  
  setLinearTargetZ(z, durationSeconds) {
    // Set linear movement to target Z over duration
    this.targetZ = Math.max(this.minZ, Math.min(this.maxZ, z));
    this.linearStartZ = this.camera.position.z;
    this.linearTargetZ = this.targetZ;
    this.linearStartTime = Date.now();
    this.linearDuration = durationSeconds;
    this.useLinearMovement = true;
    this.introComplete = true; // Stop intro animation
    // Linear target Z set
  }
  
  getTargetZ() {
    return this.targetZ;
  }
  
  getMaxZ() {
    return this.maxZ;
  }
  
  getMinZ() {
    return this.minZ;
  }
  
  getCameraZ() {
    return this.camera.position.z;
  }
  
  /**
   * Set the target object to lock the camera onto
   * @param {THREE.Object3D} target - The object to lock onto (null to disable)
   * @param {THREE.Vector3} offset - Optional offset from the target position
   */
  setLockOnTarget(target, offset = null) {
    this.lockOnTarget = target;
    if (offset) {
      this.lockOnOffset.copy(offset);
    }
    if (target) {
      this.useManualRotation = false; // Disable manual rotation when locking on
    }
  }
  
  /**
   * Clear the lock-on target
   */
  clearLockOnTarget() {
    this.lockOnTarget = null;
  }
  
  /**
   * Find the nearest checkpoint index to the current Z position
   */
  findNearestCheckpointIndex(currentZ) {
    if (this.scrollCheckpoints.length === 0) return 0;
    
    let nearestIndex = 0;
    let nearestDistance = Math.abs(this.scrollCheckpoints[0].z - currentZ);
    
    for (let i = 1; i < this.scrollCheckpoints.length; i++) {
      const distance = Math.abs(this.scrollCheckpoints[i].z - currentZ);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = i;
      }
    }
    
    return nearestIndex;
  }
  
  /**
   * Navigate to a specific checkpoint by index
   */
  navigateToCheckpoint(index) {
    if (this.scrollCheckpoints.length === 0) return;
    
    // Don't navigate if camera is currently moving or timeline is active
    if (this.isMovingToCheckpoint || this.useTimeline) {
      return;
    }
    
    // Clamp index to valid range
    index = Math.max(0, Math.min(this.scrollCheckpoints.length - 1, index));
    
    // Don't navigate if already at target
    if (index === this.currentCheckpointIndex) {
      return;
    }
    
    const checkpoint = this.scrollCheckpoints[index];
    this.currentCheckpointIndex = index;
    this.targetZ = checkpoint.z;
    this.cameraMoveSpeed = checkpoint.speed;
    this.isMovingToCheckpoint = true;
    this.introComplete = true; // Stop intro animation
    
    // Check if checkpoint has a timeline
    if (checkpoint.timeline && Array.isArray(checkpoint.timeline) && checkpoint.timeline.length > 0) {
      // Use timeline-based movement
      this.timeline = [...checkpoint.timeline]; // Copy timeline array
      this.timelineSegmentIndex = 0;
      this.timelineStartTime = Date.now();
      this.useTimeline = true;
      this.useLinearMovement = false;
      
      // Initialize first segment
      this.startTimelineSegment(0);
      
      // Navigating to checkpoint with timeline
    } else {
      // Use default speed-based movement
      this.useTimeline = false;
      this.timeline = null;
      // Navigating to checkpoint
    }
  }
  
  /**
   * Start a timeline segment
   */
  startTimelineSegment(segmentIndex) {
    if (!this.timeline || segmentIndex >= this.timeline.length) {
      // Timeline complete
      this.useTimeline = false;
      this.isMovingToCheckpoint = false;
      return;
    }
    
    const segment = this.timeline[segmentIndex];
    this.timelineSegmentStartTime = Date.now();
    
    if (segment.type === 'move') {
      // Movement segment
      // Determine start position:
      // - If fromZ is explicitly set, use it (teleport if needed)
      // - Otherwise, use current camera position (first segment) or previous end position
      if (segment.fromZ !== undefined) {
        this.timelineSegmentStartZ = segment.fromZ;
        // Teleport to start position if specified explicitly
        if (segmentIndex === 0) {
          this.camera.position.z = segment.fromZ;
        }
      } else {
        // Use current position (will be set by previous segment or camera position)
        if (segmentIndex === 0) {
          // First segment: start from current camera position
          this.timelineSegmentStartZ = this.camera.position.z;
        }
        // Otherwise, timelineSegmentStartZ is already set from previous segment
      }
      
      // Determine end position: use toZ from segment, or fall back to checkpoint z
      const targetZ = segment.toZ !== undefined ? segment.toZ : this.targetZ;
      this.targetZ = targetZ;
    } else if (segment.type === 'pause') {
      // Pause segment - hold position
      // Determine pause position:
      // - If atZ is explicitly set, use it (teleport if needed)
      // - Otherwise, use current camera position (first segment) or previous end position
      if (segment.atZ !== undefined) {
        this.timelineSegmentStartZ = segment.atZ;
        if (segmentIndex === 0) {
          this.camera.position.z = segment.atZ;
        }
      } else {
        if (segmentIndex === 0) {
          // First segment: pause at current position
          this.timelineSegmentStartZ = this.camera.position.z;
        }
        // Otherwise, use previous end position (already set in timelineSegmentStartZ)
      }
      this.targetZ = this.timelineSegmentStartZ;
      this.camera.position.z = this.timelineSegmentStartZ;
    }
  }
  
  /**
   * Update timeline-based movement
   */
  updateTimelineMovement() {
    if (!this.timeline || this.timelineSegmentIndex >= this.timeline.length) {
      // Timeline complete
      this.useTimeline = false;
      this.isMovingToCheckpoint = false;
      // Update final checkpoint index and target
      this.currentCheckpointIndex = this.findNearestCheckpointIndex(this.camera.position.z);
      return;
    }
    
    // Handle post-pause movement (subtle backward/upward movement)
    if (this.postPauseMovement) {
      const currentTime = Date.now();
      const postPauseElapsed = (currentTime - this.postPauseMovement.startTime) / 1000; // seconds
      const postPauseProgress = Math.min(1, postPauseElapsed / (this.postPauseMovement.duration / 1000));
      
      // Ease out for smooth movement
      const easedProgress = 1 - Math.pow(1 - postPauseProgress, 3);
      
      // Interpolate Z (backward = less negative, so add to Z)
      const currentZ = this.postPauseMovement.startZ + (this.postPauseMovement.targetZ - this.postPauseMovement.startZ) * easedProgress;
      this.camera.position.z = currentZ;
      this.targetZ = currentZ;
      
      // Interpolate Y (upward = more positive, so add to Y)
      const currentY = this.postPauseMovement.startY + (this.postPauseMovement.targetY - this.postPauseMovement.startY) * easedProgress;
      this.camera.position.y = currentY;
      this.targetCameraY = currentY;
      
      if (postPauseProgress >= 1) {
        // Post-pause movement complete, continue to next segment
        this.camera.position.z = this.postPauseMovement.targetZ;
        this.camera.position.y = this.postPauseMovement.targetY;
        console.log(`[Post-pause movement] Complete: Z ${this.postPauseMovement.targetZ.toFixed(2)}, Y ${this.postPauseMovement.targetY.toFixed(2)}`);
        this.postPauseMovement = null;
        this.timelineSegmentIndex++;
        this.startTimelineSegment(this.timelineSegmentIndex);
      } else {
        this.isMovingToCheckpoint = true;
      }
      return;
    }
    
    const segment = this.timeline[this.timelineSegmentIndex];
    const currentTime = Date.now();
    const segmentElapsed = (currentTime - this.timelineSegmentStartTime) / 1000; // seconds
    
    if (segment.type === 'move') {
      // Movement segment
      const progress = Math.min(1, segmentElapsed / segment.duration);
      const easedProgress = this.applyEasing(progress, segment.easing || 'linear');
      
      const fromZ = this.timelineSegmentStartZ;
      const toZ = segment.toZ !== undefined ? segment.toZ : this.targetZ;
      
      this.camera.position.z = fromZ + (toZ - fromZ) * easedProgress;
      this.targetZ = this.camera.position.z; // Update target to current position during timeline
      
      // Move to next segment when complete
      if (progress >= 1) {
        this.camera.position.z = toZ; // Ensure exact position
        this.timelineSegmentStartZ = toZ; // Save end position for next segment
        this.timelineSegmentIndex++;
        this.startTimelineSegment(this.timelineSegmentIndex);
      } else {
        this.isMovingToCheckpoint = true;
      }
    } else if (segment.type === 'pause') {
      // Pause segment - hold position
      const pauseZ = this.timelineSegmentStartZ;
      this.camera.position.z = pauseZ;
      this.targetZ = pauseZ;
      
      // Move to next segment when pause duration complete
      if (segmentElapsed >= segment.duration) {
        // Start subtle backward/upward movement after pause
        const pauseY = this.camera.position.y;
        
        // Subtle backward movement (less negative Z = move backward)
        const backwardAmount = 30; // Increased for more noticeable movement
        const targetZ = pauseZ + backwardAmount;
        
        // Subtle upward movement (more positive Y = move up)
        const upwardAmount = 15; // Increased for more noticeable movement
        const targetY = pauseY + upwardAmount;
        
        // Duration for the subtle movement (0.6 seconds for smoother, more noticeable effect)
        const movementDuration = 600;
        
        console.log(`[Post-pause movement] Starting: Z ${pauseZ.toFixed(2)} → ${targetZ.toFixed(2)}, Y ${pauseY.toFixed(2)} → ${targetY.toFixed(2)}`);
        
        this.postPauseMovement = {
          startZ: pauseZ,
          targetZ: targetZ,
          startY: pauseY,
          targetY: targetY,
          startTime: currentTime,
          duration: movementDuration
        };
      } else {
        this.isMovingToCheckpoint = true;
      }
    }
  }
  
  /**
   * Apply easing function to progress (0-1)
   */
  applyEasing(progress, easingType) {
    if (progress <= 0) return 0;
    if (progress >= 1) return 1;
    
    switch (easingType) {
      case 'linear':
        return progress;
      case 'ease':
      case 'easeInOut':
        // Cubic ease in-out
        return progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      case 'easeIn':
        // Cubic ease in
        return progress * progress * progress;
      case 'easeOut':
        // Cubic ease out
        return 1 - Math.pow(1 - progress, 3);
      default:
        return progress;
    }
  }
  
  /**
   * Get the speed for the current checkpoint
   */
  getCurrentCheckpointSpeed() {
    if (this.scrollCheckpoints.length === 0) return this.cameraMoveSpeed;
    
    const checkpoint = this.scrollCheckpoints[this.currentCheckpointIndex];
    return checkpoint ? checkpoint.speed : this.cameraMoveSpeed;
  }
  
  /**
   * Toggle between checkpoint mode and free scrolling mode
   * Note: Checkpoint mode is disabled on mobile devices
   */
  toggleCheckpointMode() {
    // Prevent enabling checkpoint mode on mobile
    if (this.isMobile) {
      this.useCheckpointMode = false;
      return false;
    }
    this.useCheckpointMode = !this.useCheckpointMode;
    // Update current checkpoint index when switching modes
    if (this.useCheckpointMode && this.scrollCheckpoints.length > 0) {
      this.currentCheckpointIndex = this.findNearestCheckpointIndex(this.camera.position.z);
    }
    return this.useCheckpointMode;
  }
  
  /**
   * Set checkpoint mode explicitly
   * Note: Checkpoint mode is disabled on mobile devices
   */
  setCheckpointMode(enabled) {
    // Prevent enabling checkpoint mode on mobile
    if (this.isMobile) {
      this.useCheckpointMode = false;
      return;
    }
    this.useCheckpointMode = enabled;
    if (this.useCheckpointMode && this.scrollCheckpoints.length > 0) {
      this.currentCheckpointIndex = this.findNearestCheckpointIndex(this.camera.position.z);
    }
  }
  
  /**
   * Get current checkpoint mode state
   */
  getCheckpointMode() {
    // Always return false on mobile, even if mode is enabled
    return this.isMobile ? false : this.useCheckpointMode;
  }
  
  /**
   * Detect if device is mobile
   */
  detectMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Check for mobile devices
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isMobileUserAgent = mobileRegex.test(userAgent);
    
    // Check for touch support
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Check screen size (mobile typically < 768px)
    const isSmallScreen = window.innerWidth <= 768;
    
    // Consider it mobile if any of these conditions are true
    return isMobileUserAgent || (hasTouchScreen && isSmallScreen);
  }
}
