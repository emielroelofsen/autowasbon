// Checkpoint Controller - Manages navigation for both scroll and dashboard clicks
import { checkpoints, checkpointConfig, getPoints } from './checkpoint-config.js';

export class CheckpointController {
  constructor(cameraController) {
    this.cameraController = cameraController;
    this.checkpoints = checkpoints || [];
    this.currentCheckpointIndex = 0;
    this.isAnimating = false;
    this.currentAnimationFrame = null;
    
    // Auto-advance timer (4 seconds of no interaction at checkpoint)
    this.autoAdvanceTimer = null;
    this.autoAdvanceDelay = 10000; // 4 seconds in milliseconds
    this.lastInteractionTime = Date.now();
    
    // Track current point index for sequential navigation
    this.currentPointIndex = -1;
    
    // Initialize dashboard items with checkpoint data
    this.initializeDashboardItems();
    
    // Start monitoring camera position for slider updates
    this.startCameraPositionMonitoring();
  }
  
  /**
   * Initialize dashboard items from checkpointConfig.dashboardItems and labels
   * Combines both dashboardItems and labels into the slider
   */
  initializeDashboardItems() {
    // Clear existing dashboard items
    const slider = document.getElementById('dashTextSlider');
    if (!slider) {
      console.warn('Dashboard slider not found');
      return;
    }
    
    // Get dashboardItems and labels from config (backward compatible with namePoints)
    const dashboardItems = checkpointConfig?.dashboardItems || [];
    const labels = checkpointConfig?.labels || checkpointConfig?.namePoints || [];
    
    if (dashboardItems.length === 0 && labels.length === 0) {
      console.warn('No dashboardItems or labels found in checkpointConfig');
      slider.innerHTML = '';
      return;
    }
    
    // Build a map of checkpoint names to their Z positions from checkpoints array
    const checkpointZMap = new Map();
    this.checkpoints.forEach(cp => {
      if (cp.name && cp.z !== undefined) {
        checkpointZMap.set(cp.name, cp.z);
      }
    });
    
    // Build dashboard items from dashboardItems config
    const dashboardCheckpoints = dashboardItems.map(item => {
      const zPosition = checkpointZMap.get(item.checkpointName);
      return {
        name: item.checkpointName,
        z: zPosition !== undefined ? zPosition : null,
        text: item.text || item.checkpointName,
        type: 'dashboard' // Mark as dashboard item
      };
    });
    
    // Add labels to dashboard items (these are what users see in the slider)
    const labelItems = labels.map(label => ({
      name: label.name || 'Name',
      z: label.z !== undefined && label.z !== null ? label.z : null,
      text: label.name || 'Name',
      type: 'label' // Mark as label
    }));
    
    // Combine both arrays
    const allDashboardItems = [...dashboardCheckpoints, ...labelItems];
    
    // Sort by Z position (descending: 0, -20, -100, -200)
    // Items without Z position go to the end
    allDashboardItems.sort((a, b) => {
      if (a.z === null && b.z === null) return 0;
      if (a.z === null) return 1;
      if (b.z === null) return -1;
      return b.z - a.z;
    });
    
    // Store for reference
    this.dashboardCheckpoints = allDashboardItems;
    
    // Clear existing items
    slider.innerHTML = '';
    
    // Create dashboard items
    allDashboardItems.forEach((item, index) => {
      const itemEl = document.createElement('span');
      itemEl.className = 'dash__text--item flex-1 font__wash';
      itemEl.setAttribute('data-checkpoint-name', item.name);
      if (item.z !== null) {
        itemEl.setAttribute('data-z-index', item.z);
      }
      itemEl.setAttribute('data-index', index);
      itemEl.setAttribute('data-item-type', item.type);
      itemEl.textContent = item.text;
      // Remove cursor pointer - items are no longer clickable
      itemEl.style.cursor = 'default';
      
      // Remove click handlers - only dash__text container is clickable
      
      slider.appendChild(itemEl);
    });
    
    // Update slider width based on number of items
    const itemCount = allDashboardItems.length;
    if (itemCount > 0) {
      slider.style.width = `${itemCount * 100}%`;
    }
    
    console.log(`Created ${allDashboardItems.length} dashboard items (${dashboardCheckpoints.length} dashboardItems + ${labelItems.length} labels):`, allDashboardItems);
    
    // Add click handler to dash__text container (not individual items)
    this.setupDashboardTextClickHandler();
  }
  
  /**
   * Setup click handler on dash__text container to go to next checkpoint when at checkpoint
   */
  setupDashboardTextClickHandler() {
    const dashText = document.querySelector('.dash__text');
    if (!dashText) {
      // Retry after a short delay if element not found
      setTimeout(() => this.setupDashboardTextClickHandler(), 100);
      return;
    }
    
    // Remove any existing handlers
    const newDashText = dashText.cloneNode(true);
    dashText.parentNode.replaceChild(newDashText, dashText);
    
    // Add click handler
    newDashText.addEventListener('click', (e) => {
      // Only handle clicks on the container itself, not on child elements
      if (e.target === newDashText || e.target.closest('.dash__text--mask')) {
        if (window.checkpointController) {
          const controller = window.checkpointController;
          
          // Use same checkpoint detection logic as gradient indicator
          let isAtCheckpoint = false;
          
          if (!controller.isAnimating && 
              controller.currentTimeline && 
              controller.currentTimelineSegmentIndex !== undefined &&
              controller.currentTimelineSegmentIndex < controller.currentTimeline.length) {
            
            // Check if the previous segment (where we stopped) had a checkpointName
            const prevSegmentIndex = controller.currentTimelineSegmentIndex - 1;
            if (prevSegmentIndex >= 0 && prevSegmentIndex < controller.currentTimeline.length) {
              const prevSegment = controller.currentTimeline[prevSegmentIndex];
              if (prevSegment && prevSegment.checkpointName) {
                isAtCheckpoint = true;
              }
            }
            
            // Also check if current segment is a pause with checkpointName
            const currentSegment = controller.currentTimeline[controller.currentTimelineSegmentIndex];
            if (currentSegment && currentSegment.type === 'pause' && currentSegment.checkpointName) {
              isAtCheckpoint = true;
            }
          }
          
          if (isAtCheckpoint) {
            // At checkpoint: move forward (continue timeline)
            e.preventDefault();
            e.stopPropagation();
            controller.goToNextCheckpoint(true);
          }
        }
      }
    });
    
    // Add touch handler
    newDashText.addEventListener('touchstart', (e) => {
      if (e.target === newDashText || e.target.closest('.dash__text--mask')) {
        if (window.checkpointController) {
          const controller = window.checkpointController;
          
          // Use same checkpoint detection logic as gradient indicator
          let isAtCheckpoint = false;
          
          if (!controller.isAnimating && 
              controller.currentTimeline && 
              controller.currentTimelineSegmentIndex !== undefined &&
              controller.currentTimelineSegmentIndex < controller.currentTimeline.length) {
            
            // Check if the previous segment (where we stopped) had a checkpointName
            const prevSegmentIndex = controller.currentTimelineSegmentIndex - 1;
            if (prevSegmentIndex >= 0 && prevSegmentIndex < controller.currentTimeline.length) {
              const prevSegment = controller.currentTimeline[prevSegmentIndex];
              if (prevSegment && prevSegment.checkpointName) {
                isAtCheckpoint = true;
              }
            }
            
            // Also check if current segment is a pause with checkpointName
            const currentSegment = controller.currentTimeline[controller.currentTimelineSegmentIndex];
            if (currentSegment && currentSegment.type === 'pause' && currentSegment.checkpointName) {
              isAtCheckpoint = true;
            }
          }
          
          if (isAtCheckpoint) {
            e.preventDefault();
            e.stopPropagation();
            controller.goToNextCheckpoint(true);
          }
        }
      }
    });
  }
  
  /**
   * Navigate to a specific Z position
   */
  navigateToZPosition(targetZ, allowInterrupt = false) {
    if (!this.cameraController || !this.cameraController.camera) {
      console.warn('Camera controller not available');
      return false;
    }
    
    // Find the closest checkpoint to use for navigation
    let closestCheckpoint = null;
    let closestDistance = Infinity;
    
    this.checkpoints.forEach(cp => {
      const distance = Math.abs(cp.z - targetZ);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestCheckpoint = cp;
      }
    });
    
    // If we found a close checkpoint, use it
    if (closestCheckpoint && closestDistance < 10) {
      const checkpointIndex = this.checkpoints.findIndex(cp => cp.name === closestCheckpoint.name);
      if (checkpointIndex !== -1) {
        return this.navigateToCheckpoint(checkpointIndex, allowInterrupt);
      }
    }
    
    // Otherwise, animate directly to the Z position
    return this.animateToZ(targetZ, 2, 'easeInOut', this.currentCheckpointIndex, allowInterrupt);
  }
  
  /**
   * Get all checkpoint data for dashboard items
   */
  getCheckpointsData() {
    return this.checkpoints.map((checkpoint, index) => ({
      name: checkpoint.name,
      z: checkpoint.z,
      speed: checkpoint.speed || 0.03,
      ease: 'easeInOut', // Default easing
      index: index,
      timeline: checkpoint.timeline || null
    }));
  }
  
  /**
   * Navigate to a specific checkpoint by index
   */
  navigateToCheckpoint(index, allowInterrupt = false) {
    console.log('navigateToCheckpoint called:', { index, allowInterrupt, checkpointsLength: this.checkpoints.length, currentIndex: this.currentCheckpointIndex });
    
    if (index < 0 || index >= this.checkpoints.length) {
      console.warn('Invalid checkpoint index:', index, 'Available: 0-' + (this.checkpoints.length - 1));
      return false;
    }
    
    const checkpoint = this.checkpoints[index];
    if (!checkpoint) {
      console.warn('Checkpoint not found at index:', index);
      return false;
    }
    
    console.log('Navigating to checkpoint:', checkpoint.name, 'at z:', checkpoint.z, 'from current index:', this.currentCheckpointIndex);
    
    // If animation is in progress and interruption is not allowed, return false
    if (this.isAnimating && !allowInterrupt) {
      console.log('Animation in progress, cannot navigate');
      return false;
    }
    
    // Cancel any ongoing animation if interrupting
    if (this.isAnimating && allowInterrupt && this.currentAnimationFrame !== null) {
      console.log('Cancelling ongoing animation');
      cancelAnimationFrame(this.currentAnimationFrame);
      this.currentAnimationFrame = null;
    }
    
    // Get timeline from checkpoint (already converted from points if needed)
    const timeline = checkpoint.timeline;
    
    // Use timeline if available, otherwise use speed-based animation
    if (timeline && Array.isArray(timeline) && timeline.length > 0) {
      console.log('Using timeline animation');
      // Create a temporary checkpoint object with the timeline for animation
      const checkpointWithTimeline = { ...checkpoint, timeline: timeline };
      return this.animateWithTimeline(checkpointWithTimeline, index, allowInterrupt);
    } else {
      console.log('Using speed-based animation to z:', checkpoint.z);
      return this.animateToZ(checkpoint.z, checkpoint.speed || 2, 'easeInOut', index, allowInterrupt);
    }
  }
  
  /**
   * Navigate to next checkpoint in the timeline (forward only)
   * If timeline is paused at a checkpoint, continues from next segment instead of jumping
   */
  goToNextCheckpoint(allowInterrupt = false) {
    // If we have a paused timeline, continue from where it stopped
    if (this.currentTimeline && 
        this.currentTimelineSegmentIndex !== undefined && 
        this.currentTimelineSegmentIndex !== null && 
        typeof this.currentTimelineSegmentIndex === 'number' &&
        !this.isAnimating) {
      console.log('Continuing paused timeline from segment:', this.currentTimelineSegmentIndex, 'of', this.currentTimeline.length, 'total segments');
      console.log('Timeline state:', {
        hasTimeline: !!this.currentTimeline,
        segmentIndex: this.currentTimelineSegmentIndex,
        checkpointIndex: this.currentTimelineCheckpointIndex,
        isAnimating: this.isAnimating
      });
      this.resetAutoAdvanceTimer();
      this.continueTimelineFromSegment(this.currentTimelineSegmentIndex);
      return true;
    }
    
    // Otherwise, jump to next checkpoint
    console.log('No paused timeline found, jumping to next checkpoint. State:', {
      hasTimeline: !!this.currentTimeline,
      segmentIndex: this.currentTimelineSegmentIndex,
      isAnimating: this.isAnimating
    });
    const nextIndex = this.currentCheckpointIndex + 1;
    console.log('goToNextCheckpoint:', { currentIndex: this.currentCheckpointIndex, nextIndex, totalCheckpoints: this.checkpoints.length });
    
    if (nextIndex < this.checkpoints.length) {
      const success = this.navigateToCheckpoint(nextIndex, allowInterrupt);
      if (success) {
        this.currentCheckpointIndex = nextIndex;
        this.updateSliderPosition(nextIndex);
        console.log('Successfully moved to next checkpoint:', nextIndex);
      } else {
        console.warn('Failed to navigate to next checkpoint:', nextIndex);
      }
      return success;
    }
    console.log('Already at last checkpoint, cannot go to next');
    return false;
  }
  
  /**
   * Navigate to the next point in the points array (sequential navigation)
   * Follows the points array instead of jumping directly to checkpoints
   */
  goToNextPoint(allowInterrupt = false) {
    // If we have a paused timeline, continue from where it stopped
    if (this.currentTimeline && 
        this.currentTimelineSegmentIndex !== undefined && 
        this.currentTimelineSegmentIndex !== null && 
        typeof this.currentTimelineSegmentIndex === 'number' &&
        !this.isAnimating) {
      console.log('Continuing paused timeline from segment:', this.currentTimelineSegmentIndex);
      this.resetAutoAdvanceTimer();
      this.continueTimelineFromSegment(this.currentTimelineSegmentIndex);
      return true;
    }
    
    // If animation is in progress and interruption is not allowed, return false
    if (this.isAnimating && !allowInterrupt) {
      console.log('Animation in progress, cannot navigate');
      return false;
    }
    
    // Get points from config (mobile or desktop)
    const points = getPoints();
    if (points.length === 0) {
      console.log('No points found in config, falling back to checkpoint navigation');
      return this.goToNextCheckpoint(allowInterrupt);
    }
    
    // Get current camera position
    if (!this.cameraController || !this.cameraController.camera) {
      console.warn('Camera controller not available');
      return false;
    }
    
    const currentZ = this.cameraController.camera.position.z;
    
    // If we're at Start checkpoint (index 0) and at or near z: 0, start from the first point
    if (this.currentCheckpointIndex === 0 && currentZ >= -1) {
      console.log('At Start checkpoint, starting from first point in array');
      this.currentPointIndex = -1; // Reset to start from beginning
    }
    
    // Find the next point that's ahead of current position
    // Points are in order from start (0) to end (-250), so we look for the first point
    // that is more negative (smaller) than currentZ and we haven't reached yet
    let nextPointIndex = -1;
    const tolerance = 0.5; // Small tolerance to consider a point "reached"
    
    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      // Check if this point is ahead (more negative) and we haven't reached it
      if (point.z < currentZ - tolerance) {
        nextPointIndex = i;
        break;
      }
    }
    
    // If we found a next point, navigate to it
    if (nextPointIndex !== -1) {
      const nextPoint = points[nextPointIndex];
      console.log(`Navigating to next point ${nextPointIndex} at Z: ${nextPoint.z} (current Z: ${currentZ})`);
      
      // Check if this point is at or past the next checkpoint
      const nextCheckpointIndex = this.currentCheckpointIndex + 1;
      if (nextCheckpointIndex < this.checkpoints.length) {
        const nextCheckpoint = this.checkpoints[nextCheckpointIndex];
        // If the point is at or past the next checkpoint, we've reached it
        if (nextPoint.z <= nextCheckpoint.z) {
          console.log(`Point ${nextPointIndex} is at or past next checkpoint "${nextCheckpoint.name}", navigating to checkpoint instead`);
          this.currentPointIndex = nextPointIndex;
          return this.navigateToCheckpoint(nextCheckpointIndex, allowInterrupt);
        }
      }
      
      // Cancel any ongoing animation if interrupting
      if (this.isAnimating && allowInterrupt && this.currentAnimationFrame !== null) {
        console.log('Cancelling ongoing animation to navigate to next point');
        cancelAnimationFrame(this.currentAnimationFrame);
        this.currentAnimationFrame = null;
      }
      
      // Navigate to the point
      this.currentPointIndex = nextPointIndex;
      const duration = nextPoint.duration || 2;
      const easing = nextPoint.easing || 'easeInOut';
      
      // Animate to the point
      this.isAnimating = true;
      this.updateDashboardGradientIndicator();
      
      const camera = this.cameraController.camera;
      const startZ = currentZ;
      const targetZ = nextPoint.z;
      const durationMs = duration * 1000;
      const startTime = Date.now();
      
      const animateToPoint = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        const easedProgress = this.applyEasing(progress, easing);
        
        const currentZPos = startZ + (targetZ - startZ) * easedProgress;
        camera.position.z = currentZPos;
        this.cameraController.targetZ = currentZPos;
        
        // Update slider position based on current Z
        this.updateSliderPositionByZ(currentZPos);
        
        if (progress < 1) {
          this.currentAnimationFrame = requestAnimationFrame(animateToPoint);
        } else {
          // Ensure exact final position
          camera.position.z = targetZ;
          this.cameraController.targetZ = targetZ;
          
          // Animation complete
          this.isAnimating = false;
          this.currentAnimationFrame = null;
          
          // Check if we've reached a checkpoint
          const reachedCheckpointIndex = this.findCheckpointAtZ(targetZ);
          if (reachedCheckpointIndex !== -1) {
            this.currentCheckpointIndex = reachedCheckpointIndex;
            this.updateSliderPosition(reachedCheckpointIndex);
            this.startAutoAdvanceAtCheckpoint();
            this.updateDashboardGradientIndicator();
            console.log(`Reached checkpoint "${this.checkpoints[reachedCheckpointIndex].name}" at point ${nextPointIndex}`);
            return; // Stop here at checkpoint
          }
          
          // Check if there's a pause at this point
          if (nextPoint.pause && nextPoint.pause > 0) {
            console.log(`Pausing at point ${nextPointIndex} for ${nextPoint.pause} seconds`);
            // Start pause timer
            setTimeout(() => {
              // After pause, continue to next point if not interrupted
              if (!this.isAnimating) {
                this.goToNextPoint(allowInterrupt);
              }
            }, nextPoint.pause * 1000);
          } else {
            // No pause, continue to next point immediately
            // Use a small delay to ensure animation is complete
            setTimeout(() => {
              if (!this.isAnimating) {
                this.goToNextPoint(allowInterrupt);
              }
            }, 50);
          }
        }
      };
      
      this.currentAnimationFrame = requestAnimationFrame(animateToPoint);
      return true;
    } else {
      // No more points ahead, check if we should go to next checkpoint
      console.log('No more points ahead, checking for next checkpoint');
      const nextCheckpointIndex = this.currentCheckpointIndex + 1;
      if (nextCheckpointIndex < this.checkpoints.length) {
        return this.navigateToCheckpoint(nextCheckpointIndex, allowInterrupt);
      }
      console.log('Already at last checkpoint, cannot go to next');
      return false;
    }
  }
  
  /**
   * Find checkpoint index at or near a given Z position
   */
  findCheckpointAtZ(z) {
    for (let i = 0; i < this.checkpoints.length; i++) {
      const checkpoint = this.checkpoints[i];
      // Check if Z is at or past this checkpoint (with small tolerance)
      if (Math.abs(z - checkpoint.z) < 1.0) {
        return i;
      }
    }
    return -1;
  }
  
  /**
   * Navigate to previous checkpoint in the timeline
   * DISABLED: Users can only move forward in the timeline
   */
  goToPreviousCheckpoint(allowInterrupt = false) {
    // Backward navigation is disabled - users can only move forward
    console.log('Backward navigation disabled. Can only move forward in timeline.');
    return false;
  }
  
  /**
   * Jump to a checkpoint by name (only allows forward movement in timeline)
   * If timeline is paused, continues from current position instead of jumping
   */
  jumpToCheckpointByName(name, allowInterrupt = false) {
    // If we have a paused timeline and user wants to continue, continue timeline instead of jumping
    if (this.currentTimeline && this.currentTimelineSegmentIndex !== undefined && !this.isAnimating) {
      console.log('User interaction: continuing paused timeline from segment:', this.currentTimelineSegmentIndex);
      this.resetAutoAdvanceTimer();
      this.continueTimelineFromSegment(this.currentTimelineSegmentIndex);
      return true;
    }
    
    // Otherwise, jump to the named checkpoint
    const index = this.checkpoints.findIndex(cp => cp.name === name);
    if (index === -1) {
      console.warn(`Checkpoint with name "${name}" not found`);
      return false;
    }
    
    // Only allow jumping to checkpoints that are ahead (forward in timeline)
    // Allow same checkpoint (index === currentCheckpointIndex) to allow restarting
    if (index < this.currentCheckpointIndex) {
      console.log(`Cannot jump to "${name}" - it's before current checkpoint. Can only move forward.`);
      return false;
    }
    
    const success = this.navigateToCheckpoint(index, allowInterrupt);
    if (success) {
      this.currentCheckpointIndex = index;
      this.updateSliderPosition(index);
    }
    return success;
  }
  
  /**
   * Jump to a checkpoint by index (only allows forward movement in timeline)
   * If timeline is paused, continues from current position instead of jumping
   */
  jumpToCheckpoint(index, allowInterrupt = false) {
    // If we have a paused timeline and user wants to continue, continue timeline instead of jumping
    if (this.currentTimeline && this.currentTimelineSegmentIndex !== undefined && !this.isAnimating) {
      console.log('User interaction: continuing paused timeline from segment:', this.currentTimelineSegmentIndex);
      this.resetAutoAdvanceTimer();
      this.continueTimelineFromSegment(this.currentTimelineSegmentIndex);
      return true;
    }
    
    if (index < 0 || index >= this.checkpoints.length) {
      console.warn(`Checkpoint index ${index} is out of bounds. Available checkpoints: 0-${this.checkpoints.length - 1}`);
      return false;
    }
    
    // Only allow jumping to checkpoints that are ahead (forward in timeline)
    // Allow same checkpoint (index === currentCheckpointIndex) to allow restarting
    if (index < this.currentCheckpointIndex) {
      console.log(`Cannot jump to checkpoint ${index} - it's before current checkpoint ${this.currentCheckpointIndex}. Can only move forward.`);
      return false;
    }
    
    const success = this.navigateToCheckpoint(index, allowInterrupt);
    if (success) {
      this.currentCheckpointIndex = index;
      this.updateSliderPosition(index);
    }
    return success;
  }
  
  /**
   * Animate camera to target Z position with speed and easing
   * speed: duration in seconds (e.g., 2 = 2 seconds)
   */
  animateToZ(zIndex, speed, ease, itemIndex, allowInterrupt = false) {
    if (!this.cameraController || !this.cameraController.camera) {
      console.warn('Camera controller not yet available');
      return false;
    }
    
    console.log('animateToZ called:', { zIndex, speed, ease, itemIndex, allowInterrupt });
    
    // Set animation flag
    this.isAnimating = true;
    // Remove gradient indicator when animation starts
    this.updateDashboardGradientIndicator();
    
    const camera = this.cameraController.camera;
    const startZ = camera.position.z;
    const targetZ = zIndex;
    // Speed is in seconds, convert to milliseconds
    // If speed is less than 0.1, treat it as a multiplier and use default duration
    const duration = (speed && speed >= 0.1) ? speed * 1000 : 2000; // Default to 2 seconds
    const startTime = Date.now();
    
    console.log('Starting animation:', { startZ, targetZ, duration: duration + 'ms', speed });
    
    // Animate camera
    const animateCamera = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = this.applyEasing(progress, ease);
      
      const currentZ = startZ + (targetZ - startZ) * easedProgress;
      camera.position.z = currentZ;
      this.cameraController.targetZ = currentZ;
      
      if (progress < 1) {
        this.currentAnimationFrame = requestAnimationFrame(animateCamera);
      } else {
        // Ensure exact final position
        camera.position.z = targetZ;
        this.cameraController.targetZ = targetZ;
        
        // Animation complete - reached checkpoint
        this.isAnimating = false;
        this.currentAnimationFrame = null;
        this.currentCheckpointIndex = itemIndex;
        this.updateSliderPosition(itemIndex);
        // Start auto-advance timer when reaching checkpoint
        this.startAutoAdvanceAtCheckpoint();
        // Update gradient indicator
        this.updateDashboardGradientIndicator();
        console.log('Reached checkpoint, starting 4-second auto-advance timer');
      }
    };
    
    this.currentAnimationFrame = requestAnimationFrame(animateCamera);
    return true;
  }
  
  /**
   * Animate camera using timeline configuration
   * When jumping to a checkpoint, starts from that checkpoint's position in the timeline
   */
  animateWithTimeline(checkpoint, index, allowInterrupt = false) {
    if (!this.cameraController || !this.cameraController.camera) {
      console.warn('Camera controller not yet available');
      return false;
    }
    
    this.isAnimating = true;
    const timeline = checkpoint.timeline;
    let segmentIndex = 0;
    let segmentStartTime = Date.now();
    
    // Store timeline and segment index for auto-advance continuation
    this.currentTimeline = timeline;
    this.currentTimelineCheckpointIndex = index;
    
    // Find the starting segment based on the checkpoint's Z position
    // If jumping to a checkpoint marker, start from that checkpoint's position in the timeline
    const targetZ = checkpoint.z;
    let segmentStartZ = targetZ;
    let foundStartSegment = false;
    
    // Search through timeline to find where this checkpoint's Z position is
    for (let i = 0; i < timeline.length; i++) {
      const seg = timeline[i];
      
      if (seg.type === 'move') {
        // Check if targetZ is within this move segment's range
        const fromZ = seg.fromZ !== undefined ? seg.fromZ : (i > 0 ? timeline[i-1].toZ || timeline[i-1].atZ : 0);
        const toZ = seg.toZ !== undefined ? seg.toZ : fromZ;
        const minZ = Math.min(fromZ, toZ);
        const maxZ = Math.max(fromZ, toZ);
        
        if (targetZ >= minZ && targetZ <= maxZ) {
          // Found the segment containing this checkpoint
          segmentIndex = i;
          segmentStartZ = targetZ; // Start from checkpoint's Z position
          foundStartSegment = true;
          console.log(`Found checkpoint at segment ${i}, starting from Z: ${targetZ}`);
          break;
        } else if (targetZ > maxZ) {
          // Checkpoint is after this segment, continue searching
          continue;
        } else if (targetZ < minZ && i === 0) {
          // Checkpoint is before timeline starts, use first segment
          segmentIndex = 0;
          segmentStartZ = fromZ;
          foundStartSegment = true;
          break;
        }
      } else if (seg.type === 'pause') {
        // Check if targetZ matches this pause position
        if (Math.abs(seg.atZ - targetZ) < 0.1) {
          segmentIndex = i;
          segmentStartZ = targetZ;
          foundStartSegment = true;
          console.log(`Found checkpoint at pause segment ${i}, starting from Z: ${targetZ}`);
          break;
        }
      }
    }
    
    // If not found, start from beginning or checkpoint's Z
    if (!foundStartSegment) {
      const firstSegment = timeline[0];
      if (firstSegment) {
        if (firstSegment.type === 'move' && firstSegment.fromZ !== undefined) {
          segmentStartZ = firstSegment.fromZ;
        } else if (firstSegment.type === 'pause' && firstSegment.atZ !== undefined) {
          segmentStartZ = firstSegment.atZ;
        }
      }
      segmentIndex = 0;
      console.log(`Checkpoint Z ${targetZ} not found in timeline, starting from beginning at Z: ${segmentStartZ}`);
    }
    
    // Immediately set camera to starting position
    this.cameraController.camera.position.z = segmentStartZ;
    this.cameraController.targetZ = segmentStartZ;
    
    const startingSegment = timeline[segmentIndex];
    console.log('Timeline animation starting:');
    console.log('- Starting Z:', segmentStartZ);
    console.log('- Starting segment index:', segmentIndex);
    console.log('- Starting segment:', startingSegment);
    console.log('- Total segments:', timeline.length);
    console.log('- Timeline order:', timeline.map((s, i) => `${i}: ${s.type} ${s.fromZ || s.atZ} → ${s.toZ || s.atZ}`).join(', '));
    
    // Use the found segment index (don't reset to 0)
    segmentStartTime = Date.now();
    
    // Track post-pause movement state
    let postPauseMovement = null;
    
    const animateSegment = () => {
      if (segmentIndex >= timeline.length) {
        // Timeline complete - reached checkpoint
        this.isAnimating = false;
        this.currentAnimationFrame = null;
        this.currentCheckpointIndex = index;
        this.updateSliderPosition(index);
        // Start auto-advance timer when reaching checkpoint
        this.startAutoAdvanceAtCheckpoint();
        // Update gradient indicator
        this.updateDashboardGradientIndicator();
        console.log('Reached checkpoint, starting 4-second auto-advance timer');
        return;
      }
      
      // Handle post-pause movement (subtle backward/upward movement)
      if (postPauseMovement) {
        const postPauseElapsed = Date.now() - postPauseMovement.startTime;
        const postPauseProgress = Math.min(1, postPauseElapsed / postPauseMovement.duration);
        
        // Ease out for smooth movement
        const easedProgress = 1 - Math.pow(1 - postPauseProgress, 3);
        
        // Interpolate Z (backward = less negative, so add to Z)
        const currentZ = postPauseMovement.startZ + (postPauseMovement.targetZ - postPauseMovement.startZ) * easedProgress;
        this.cameraController.camera.position.z = currentZ;
        this.cameraController.targetZ = currentZ;
        
        // Interpolate Y (upward = more positive, so add to Y)
        const currentY = postPauseMovement.startY + (postPauseMovement.targetY - postPauseMovement.startY) * easedProgress;
        this.cameraController.camera.position.y = currentY;
        this.cameraController.targetCameraY = currentY;
        
        // Update slider position
        this.updateSliderPositionByZ(currentZ);
        
        if (postPauseProgress >= 1) {
          // Post-pause movement complete, continue to next segment
          this.cameraController.camera.position.z = postPauseMovement.targetZ;
          this.cameraController.camera.position.y = postPauseMovement.targetY;
          console.log(`[Post-pause movement] Complete: Z ${postPauseMovement.targetZ.toFixed(2)}, Y ${postPauseMovement.targetY.toFixed(2)}`);
          postPauseMovement = null;
          segmentIndex++;
          segmentStartTime = Date.now();
          segmentStartZ = this.cameraController.camera.position.z;
          this.currentAnimationFrame = requestAnimationFrame(animateSegment);
        } else {
          this.currentAnimationFrame = requestAnimationFrame(animateSegment);
        }
        return;
      }
      
      const segment = timeline[segmentIndex];
      const elapsed = Date.now() - segmentStartTime;
      
      if (segment.type === 'pause') {
        // Pause at current position
        const currentZ = this.cameraController.camera.position.z;
        
        // Continuously update slider position based on current Z
        this.updateSliderPositionByZ(currentZ);
        
        // Check if this segment has a checkpointName to change dashboard text
        if (segment.checkpointName && elapsed < 100) {
          // Change dashboard text when pause starts (only once)
          this.changeDashboardTextToCheckpoint(segment.checkpointName);
        }
        
        if (elapsed >= segment.duration * 1000) {
          // Check if this pause segment has a checkpointName - if so, stop here
          if (segment.checkpointName) {
            // Stop animation at this checkpoint
            this.isAnimating = false;
            this.currentAnimationFrame = null;
            // Store the next segment index for auto-advance continuation
            this.currentTimelineSegmentIndex = segmentIndex + 1;
            // Ensure timeline state is preserved
            if (!this.currentTimeline) {
              this.currentTimeline = timeline;
            }
            if (this.currentTimelineCheckpointIndex === undefined) {
              this.currentTimelineCheckpointIndex = index;
            }
            // Find the checkpoint index by name to update currentCheckpointIndex
            const checkpointIndex = this.checkpoints.findIndex(cp => cp.name === segment.checkpointName);
            if (checkpointIndex !== -1) {
              this.currentCheckpointIndex = checkpointIndex;
              this.updateSliderPosition(checkpointIndex);
            }
            // Start auto-advance timer
            this.startAutoAdvanceAtCheckpoint();
            // Update gradient indicator to show checkpoint is clickable
            this.updateDashboardGradientIndicator();
            console.log(`Stopped at checkpoint "${segment.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);
            return;
          }
          
          // No checkpoint name - start subtle backward/upward movement after pause
          const pauseZ = this.cameraController.camera.position.z;
          const pauseY = this.cameraController.camera.position.y;
          
          // Subtle backward movement (less negative Z = move backward)
          const backwardAmount = 30; // Increased for more noticeable movement
          const targetZ = pauseZ + backwardAmount;
          
          // Subtle upward movement (more positive Y = move up)
          const upwardAmount = 15; // Increased for more noticeable movement
          const targetY = pauseY + upwardAmount;
          
          // Duration for the subtle movement (0.6 seconds for smoother, more noticeable effect)
          const movementDuration = 600;
          
          console.log(`[Post-pause movement] Starting: Z ${pauseZ.toFixed(2)} → ${targetZ.toFixed(2)}, Y ${pauseY.toFixed(2)} → ${targetY.toFixed(2)}`);
          
          postPauseMovement = {
            startZ: pauseZ,
            targetZ: targetZ,
            startY: pauseY,
            targetY: targetY,
            startTime: Date.now(),
            duration: movementDuration
          };
          
          this.currentAnimationFrame = requestAnimationFrame(animateSegment);
        } else {
          this.currentAnimationFrame = requestAnimationFrame(animateSegment);
        }
      } else if (segment.type === 'move') {
        // Move from segment's fromZ to toZ
        const fromZ = segment.fromZ !== undefined ? segment.fromZ : segmentStartZ;
        const toZ = segment.toZ !== undefined ? segment.toZ : segmentStartZ;
        
        // If this is the starting segment and we're jumping to a checkpoint,
        // start from the checkpoint's Z position (which may be in the middle of the segment)
        let actualFromZ = fromZ;
        if (segmentIndex === 0 && foundStartSegment && segmentStartZ !== fromZ) {
          // We're starting from a checkpoint position within this segment
          actualFromZ = segmentStartZ;
          console.log(`Starting from checkpoint position ${segmentStartZ} within segment ${segmentIndex}`);
        }
        
        const progress = Math.min(1, elapsed / (segment.duration * 1000));
        const easedProgress = this.applyEasing(progress, segment.easing || 'linear');
        
        // Calculate the segment's total range for proper interpolation
        const segmentRange = toZ - fromZ;
        const startOffset = actualFromZ - fromZ; // How far into the segment we're starting
        const startProgress = segmentRange !== 0 ? startOffset / segmentRange : 0;
        
        // Interpolate from actualFromZ to toZ
        const currentZ = actualFromZ + (toZ - actualFromZ) * easedProgress;
        this.cameraController.camera.position.z = currentZ;
        this.cameraController.targetZ = currentZ;
        
        // Continuously update slider position based on current Z
        this.updateSliderPositionByZ(currentZ);
        
        // Check if this segment has a checkpointName to change dashboard text
        // Change when we reach the end of the move (at toZ)
        if (segment.checkpointName && progress >= 0.99) {
          // Change dashboard text when reaching the end of the move
          this.changeDashboardTextToCheckpoint(segment.checkpointName);
        }
        
        if (progress < 1) {
          this.currentAnimationFrame = requestAnimationFrame(animateSegment);
        } else {
          // Segment complete
          console.log(`Timeline segment ${segmentIndex} complete: reached ${toZ}`);
          
          // Check if this move segment has a checkpointName - if so, stop here
          if (segment.checkpointName) {
            // Stop animation at this checkpoint
            this.isAnimating = false;
            this.currentAnimationFrame = null;
            // Store the next segment index for auto-advance continuation
            this.currentTimelineSegmentIndex = segmentIndex + 1;
            // Ensure timeline state is preserved
            if (!this.currentTimeline) {
              this.currentTimeline = timeline;
            }
            if (this.currentTimelineCheckpointIndex === undefined) {
              this.currentTimelineCheckpointIndex = index;
            }
            // Find the checkpoint index by name to update currentCheckpointIndex
            const checkpointIndex = this.checkpoints.findIndex(cp => cp.name === segment.checkpointName);
            if (checkpointIndex !== -1) {
              this.currentCheckpointIndex = checkpointIndex;
              this.updateSliderPosition(checkpointIndex);
            }
            // Start auto-advance timer
            this.startAutoAdvanceAtCheckpoint();
            // Update gradient indicator to show checkpoint is clickable
            this.updateDashboardGradientIndicator();
            console.log(`Stopped at checkpoint "${segment.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);
            return;
          }
          
          // No checkpoint name, continue to next segment
          segmentIndex++;
          segmentStartTime = Date.now();
          segmentStartZ = toZ; // Next segment starts from this segment's end position
          if (segmentIndex < timeline.length) {
            const nextSegment = timeline[segmentIndex];
            console.log(`Timeline segment ${segmentIndex}: Next segment from ${segmentStartZ} → ${nextSegment.toZ || nextSegment.atZ || '?'}`);
          }
          this.currentAnimationFrame = requestAnimationFrame(animateSegment);
        }
      }
    };
    
    // Start animation immediately (camera is already at start position)
    this.currentAnimationFrame = requestAnimationFrame(animateSegment);
    return true;
  }
  
  /**
   * Easing functions
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
   * Change dashboard text to show checkpoint name
   * Called when reaching a timeline segment with a checkpointName
   */
  changeDashboardTextToCheckpoint(checkpointName) {
    if (!checkpointName) return;
    
    // Find the dashboard checkpoint by name
    if (!this.dashboardCheckpoints) {
      // If not initialized, try to find in checkpoints array
      const checkpointIndex = this.checkpoints.findIndex(cp => cp.name === checkpointName);
      if (checkpointIndex !== -1) {
        this.updateSliderPosition(checkpointIndex);
        return;
      }
      return;
    }
    
    const dashboardIndex = this.dashboardCheckpoints.findIndex(cp => cp.name === checkpointName);
    if (dashboardIndex === -1) {
      console.warn(`Dashboard checkpoint "${checkpointName}" not found`);
      return;
    }
    
    // Update slider position to show this checkpoint
    this.updateSliderPositionByIndex(dashboardIndex);
    
    console.log(`Dashboard text changed to checkpoint: ${checkpointName} at index ${dashboardIndex}`);
  }
  
  /**
   * Update slider position by dashboard item index
   */
  updateSliderPositionByIndex(dashboardIndex) {
    const slider = document.getElementById('dashTextSlider');
    if (!slider) return;
    
    if (!this.dashboardCheckpoints || this.dashboardCheckpoints.length === 0) {
      return;
    }
    
    const totalItems = this.dashboardCheckpoints.length;
    if (dashboardIndex < 0 || dashboardIndex >= totalItems) {
      return;
    }
    
    // Calculate translateX: each item is 100% of container width
    // For N items, slider width is N * 100%
    // To show item at index i, translate by -(i * 100 / N)%
    const percentPerItem = 100 / totalItems;
    const translateX = -(dashboardIndex * percentPerItem);
    
    // Apply transition and transform
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(${translateX}%)`;
    
    console.log(`Slider moved to index ${dashboardIndex}, translateX: ${translateX}%`);
  }
  
  /**
   * Update slider position based on current camera Z position
   * Finds the closest dashboard checkpoint based on Z position
   */
  updateSliderPositionByZ(currentZ) {
    if (!this.dashboardCheckpoints || this.dashboardCheckpoints.length === 0) {
      return;
    }
    
    // Filter out checkpoints without Z positions
    const checkpointsWithZ = this.dashboardCheckpoints.filter(cp => cp.z !== null && cp.z !== undefined);
    
    if (checkpointsWithZ.length === 0) {
      return;
    }
    
    // Find the checkpoint that the camera has reached or passed
    // Since we're moving forward (0 to negative), find the last checkpoint we've passed
    let targetIndex = -1;
    
    for (let i = checkpointsWithZ.length - 1; i >= 0; i--) {
      const checkpoint = checkpointsWithZ[i];
      // If current Z is at or past this checkpoint's Z, show this checkpoint
      if (currentZ <= checkpoint.z) {
        // Find the original index in dashboardCheckpoints
        targetIndex = this.dashboardCheckpoints.findIndex(cp => cp.name === checkpoint.name);
        break;
      }
    }
    
    // If we haven't reached any checkpoint, show the first one
    if (targetIndex === -1 && this.dashboardCheckpoints.length > 0) {
      targetIndex = 0;
    }
    
    if (targetIndex !== -1) {
      // Only update if the index has changed to avoid unnecessary updates
      if (this.lastSliderIndex !== targetIndex) {
        this.lastSliderIndex = targetIndex;
        this.updateSliderPositionByIndex(targetIndex);
      }
    }
  }
  
  /**
   * Update slider position to show current checkpoint
   * Now works with dynamic dashboard items based on timeline checkpoint names
   */
  updateSliderPosition(index) {
    // Get checkpoint by index to find its name
    const checkpoint = this.checkpoints[index];
    if (!checkpoint) return;
    
    // Use dynamic dashboard checkpoints if available
    if (this.dashboardCheckpoints && this.dashboardCheckpoints.length > 0) {
      const dashboardIndex = this.dashboardCheckpoints.findIndex(cp => cp.name === checkpoint.name);
      if (dashboardIndex !== -1) {
        this.updateSliderPositionByIndex(dashboardIndex);
        return;
      }
    }
    
    // Fallback: use Z position to find closest checkpoint
    if (this.cameraController && this.cameraController.camera) {
      const currentZ = this.cameraController.camera.position.z;
      this.updateSliderPositionByZ(currentZ);
    }
  }
  
  /**
   * Handle dashboard item click
   * itemIndex should be 0-indexed checkpoint index
   * This allows jumping to any checkpoint in the timeline
   */
  handleDashboardClick(itemIndex) {
    // Reset auto-advance timer on user interaction
    this.resetAutoAdvanceTimer();
    
    // Ensure index is within bounds
    if (itemIndex < 0 || itemIndex >= this.checkpoints.length) {
      console.warn(`Checkpoint index ${itemIndex} is out of bounds. Available checkpoints: 0-${this.checkpoints.length - 1}`);
      return false;
    }
    // Jump to the clicked checkpoint (can jump to any checkpoint, not just next/previous)
    return this.jumpToCheckpoint(itemIndex, true); // Allow interrupt for clicks
  }
  
  /**
   * Handle scroll event - continues timeline from where it stopped (forward only)
   * Scroll UP (negative deltaY) = continue timeline
   * Scroll DOWN (positive deltaY) = disabled (can only move forward)
   */
  handleScroll(deltaY) {
    console.log('handleScroll called with deltaY:', deltaY, 'isAnimating:', this.isAnimating); // Debug log
    
    // Reset auto-advance timer on user interaction
    this.resetAutoAdvanceTimer();
    
    // Don't allow scrolling if camera is currently moving
    if (this.isAnimating) {
      console.log('Scroll blocked - animation in progress');
      return;
    }
    
    // Only allow forward movement: scroll up (negative deltaY) continues timeline
    if (deltaY < 0) {
      // Scroll up - continue timeline from where it stopped
      console.log('Scrolling up - continuing timeline');
      const success = this.goToNextCheckpoint();
      if (!success) {
        console.log('Cannot continue - already at end');
      } else {
        console.log('Successfully continuing timeline');
      }
    } else if (deltaY > 0) {
      // Scroll down - backward movement disabled
      console.log('Scroll down blocked - can only move forward in timeline');
    }
  }
  
  /**
   * Handle touch swipe - continues to next/previous checkpoint in timeline
   * Swipe UP (positive deltaY) = next checkpoint
   * Swipe DOWN (negative deltaY) = previous checkpoint
   * Note: deltaY is touchStartY - currentY, so positive = swipe up
   */
  handleTouchSwipe(deltaY) {
    // Don't allow touch if animation is in progress
    if (this.isAnimating) {
      return;
    }
    
    // deltaY is touchStartY - currentY, so:
    // Positive deltaY = swipe up = next checkpoint
    // Negative deltaY = swipe down = previous checkpoint
    if (deltaY > 0) {
      // Swipe up - continue to next checkpoint in timeline
      this.goToNextCheckpoint();
    } else if (deltaY < 0) {
      // Swipe down - continue to previous checkpoint in timeline
      this.goToPreviousCheckpoint();
    }
  }
  
  
  /**
   * Get current checkpoint index
   */
  getCurrentCheckpointIndex() {
    return this.currentCheckpointIndex;
  }
  
  /**
   * Check if animation is in progress
   */
  isAnimationInProgress() {
    return this.isAnimating;
  }
  
  /**
   * Find the closest checkpoint to current camera position
   */
  findClosestCheckpoint() {
    if (!this.cameraController || !this.cameraController.camera) {
      return 0;
    }
    
    const currentZ = this.cameraController.camera.position.z;
    let closestIndex = 0;
    let closestDistance = Math.abs(this.checkpoints[0].z - currentZ);
    
    this.checkpoints.forEach((checkpoint, index) => {
      const distance = Math.abs(checkpoint.z - currentZ);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    
    return closestIndex;
  }
  
  /**
   * Sync current checkpoint index with camera position
   */
  syncWithCameraPosition() {
    this.currentCheckpointIndex = this.findClosestCheckpoint();
    this.updateSliderPosition(this.currentCheckpointIndex);
  }
  
  /**
   * Get all checkpoint names (useful for debugging or UI)
   */
  getCheckpointNames() {
    return this.checkpoints.map(cp => cp.name);
  }
  
  /**
   * Get current checkpoint name
   */
  getCurrentCheckpointName() {
    if (this.currentCheckpointIndex >= 0 && this.currentCheckpointIndex < this.checkpoints.length) {
      return this.checkpoints[this.currentCheckpointIndex].name;
    }
    return null;
  }
  
  /**
   * Reset auto-advance timer (called on user interaction)
   */
  resetAutoAdvanceTimer() {
    if (this.autoAdvanceTimer) {
      clearTimeout(this.autoAdvanceTimer);
      this.autoAdvanceTimer = null;
      console.log('Auto-advance timer reset due to user interaction');
    }
  }
  
  /**
   * Start auto-advance timer when reaching a checkpoint
   * After 10 seconds of no interaction, automatically continues timeline to next segment
   */
  startAutoAdvanceAtCheckpoint() {
    // Clear any existing timer
    this.resetAutoAdvanceTimer();
    
    // Don't auto-advance if we're at the last checkpoint
    if (this.currentCheckpointIndex >= this.checkpoints.length - 1) {
      console.log('At last checkpoint, no auto-advance');
      return;
    }
    
    // Don't auto-advance if animation is in progress
    if (this.isAnimating) {
      console.log('Animation in progress, no auto-advance');
      return;
    }
    
    // Set timer to auto-advance after 10 seconds
    this.autoAdvanceTimer = setTimeout(() => {
      console.log('Auto-advancing after 10 seconds of no interaction');
      this.autoAdvanceTimer = null;
      
      // Continue timeline animation from where it stopped
      if (this.currentTimeline && this.currentTimelineSegmentIndex !== undefined) {
        const nextSegmentIndex = this.currentTimelineSegmentIndex;
        
        if (nextSegmentIndex < this.currentTimeline.length) {
          // Continue from the next segment in the timeline
          console.log(`Continuing timeline from segment ${nextSegmentIndex}`);
          const currentCheckpoint = this.checkpoints[this.currentTimelineCheckpointIndex];
          if (currentCheckpoint) {
            // Continue animation from the stored segment index
            this.continueTimelineFromSegment(nextSegmentIndex);
          } else {
            // Fallback: go to next checkpoint
            this.goToNextCheckpoint(true);
          }
        } else {
          // Timeline complete, go to next checkpoint
          console.log('Timeline complete, moving to next checkpoint');
          this.goToNextCheckpoint(true);
        }
      } else {
        // No timeline stored, go to next checkpoint
        console.log('No timeline stored, moving to next checkpoint');
        this.goToNextCheckpoint(true);
      }
    }, this.autoAdvanceDelay);
    
    console.log(`Auto-advance timer started: will continue in ${this.autoAdvanceDelay}ms if no interaction`);
  }
  
  /**
   * Continue timeline animation from a specific segment index
   */
  continueTimelineFromSegment(startSegmentIndex) {
    if (!this.currentTimeline || startSegmentIndex >= this.currentTimeline.length) {
      console.log('Cannot continue timeline - invalid segment index');
      return;
    }
    
    this.isAnimating = true;
    const timeline = this.currentTimeline;
    let segmentIndex = startSegmentIndex;
    let segmentStartTime = Date.now();
    
    // Ensure timeline state is preserved for future continuation
    if (!this.currentTimelineCheckpointIndex) {
      this.currentTimelineCheckpointIndex = this.currentCheckpointIndex;
    }
    
    // Get the starting Z position from the previous segment or current camera position
    let segmentStartZ = this.cameraController.camera.position.z;
    
    // If starting from a segment after the first, get the Z from the previous segment
    if (segmentIndex > 0) {
      const prevSegment = timeline[segmentIndex - 1];
      if (prevSegment.type === 'move') {
        segmentStartZ = prevSegment.toZ;
      } else if (prevSegment.type === 'pause') {
        segmentStartZ = prevSegment.atZ;
      }
    } else if (segmentIndex === 0) {
      // Starting from first segment - use the segment's fromZ or current camera Z
      const firstSegment = timeline[0];
      if (firstSegment.type === 'move' && firstSegment.fromZ !== undefined) {
        segmentStartZ = firstSegment.fromZ;
      } else if (firstSegment.type === 'pause' && firstSegment.atZ !== undefined) {
        segmentStartZ = firstSegment.atZ;
      }
    }
    
    // Set camera to starting position
    this.cameraController.camera.position.z = segmentStartZ;
    this.cameraController.targetZ = segmentStartZ;
    
    console.log(`Continuing timeline from segment ${segmentIndex}, starting at Z: ${segmentStartZ}`);
    
    const animateSegment = () => {
      if (segmentIndex >= timeline.length) {
        // Timeline complete
        this.isAnimating = false;
        this.currentAnimationFrame = null;
        // Update to the last checkpoint if available
        if (this.currentTimelineCheckpointIndex !== undefined) {
          this.currentCheckpointIndex = this.currentTimelineCheckpointIndex;
          this.updateSliderPosition(this.currentCheckpointIndex);
        }
        console.log('Timeline continuation complete');
        return;
      }
      
      const segment = timeline[segmentIndex];
      const elapsed = Date.now() - segmentStartTime;
      
      if (segment.type === 'pause') {
        const currentZ = this.cameraController.camera.position.z;
        this.updateSliderPositionByZ(currentZ);
        
        if (segment.checkpointName && elapsed < 100) {
          this.changeDashboardTextToCheckpoint(segment.checkpointName);
        }
        
        if (elapsed >= segment.duration * 1000) {
          // Check if this pause segment has a checkpointName - if so, stop here
          if (segment.checkpointName) {
            this.isAnimating = false;
            this.currentAnimationFrame = null;
            // Store the next segment index for auto-advance continuation
            this.currentTimelineSegmentIndex = segmentIndex + 1;
            // Ensure timeline state is preserved
            if (!this.currentTimeline) {
              this.currentTimeline = timeline;
            }
            if (this.currentTimelineCheckpointIndex === undefined) {
              this.currentTimelineCheckpointIndex = this.currentCheckpointIndex;
            }
            const checkpointIndex = this.checkpoints.findIndex(cp => cp.name === segment.checkpointName);
            if (checkpointIndex !== -1) {
              this.currentCheckpointIndex = checkpointIndex;
              this.updateSliderPosition(checkpointIndex);
            }
            this.startAutoAdvanceAtCheckpoint();
            // Update gradient indicator to show checkpoint is clickable
            this.updateDashboardGradientIndicator();
            console.log(`Stopped at checkpoint "${segment.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);
            return;
          }
          
          segmentIndex++;
          segmentStartTime = Date.now();
          segmentStartZ = this.cameraController.camera.position.z;
          this.currentAnimationFrame = requestAnimationFrame(animateSegment);
        } else {
          this.currentAnimationFrame = requestAnimationFrame(animateSegment);
        }
      } else if (segment.type === 'move') {
        const fromZ = segment.fromZ !== undefined ? segment.fromZ : segmentStartZ;
        const toZ = segment.toZ !== undefined ? segment.toZ : segmentStartZ;
        
        const progress = Math.min(1, elapsed / (segment.duration * 1000));
        const easedProgress = this.applyEasing(progress, segment.easing || 'linear');
        
        const currentZ = fromZ + (toZ - fromZ) * easedProgress;
        this.cameraController.camera.position.z = currentZ;
        this.cameraController.targetZ = currentZ;
        
        this.updateSliderPositionByZ(currentZ);
        
        if (segment.checkpointName && progress >= 0.99) {
          this.changeDashboardTextToCheckpoint(segment.checkpointName);
        }
        
        if (progress < 1) {
          this.currentAnimationFrame = requestAnimationFrame(animateSegment);
        } else {
          console.log(`Timeline segment ${segmentIndex} complete: reached ${toZ}`);
          
          // Check if this move segment has a checkpointName - if so, stop here
          if (segment.checkpointName) {
            this.isAnimating = false;
            this.currentAnimationFrame = null;
            // Store the next segment index for auto-advance continuation
            this.currentTimelineSegmentIndex = segmentIndex + 1;
            // Ensure timeline state is preserved
            if (!this.currentTimeline) {
              this.currentTimeline = timeline;
            }
            if (this.currentTimelineCheckpointIndex === undefined) {
              this.currentTimelineCheckpointIndex = this.currentCheckpointIndex;
            }
            const checkpointIndex = this.checkpoints.findIndex(cp => cp.name === segment.checkpointName);
            if (checkpointIndex !== -1) {
              this.currentCheckpointIndex = checkpointIndex;
              this.updateSliderPosition(checkpointIndex);
            }
            this.startAutoAdvanceAtCheckpoint();
            // Update gradient indicator to show checkpoint is clickable
            this.updateDashboardGradientIndicator();
            console.log(`Stopped at checkpoint "${segment.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);
            return;
          }
          
          segmentIndex++;
          segmentStartTime = Date.now();
          segmentStartZ = toZ;
          if (segmentIndex < timeline.length) {
            const nextSegment = timeline[segmentIndex];
            console.log(`Timeline segment ${segmentIndex}: Next segment from ${segmentStartZ} → ${nextSegment.toZ || nextSegment.atZ || '?'}`);
          }
          this.currentAnimationFrame = requestAnimationFrame(animateSegment);
        }
      }
    };
    
    this.currentAnimationFrame = requestAnimationFrame(animateSegment);
  }
  
  /**
   * Start monitoring camera position to update slider in real-time
   */
  startCameraPositionMonitoring() {
    // Clear any existing monitoring
    if (this.cameraMonitoringFrame) {
      cancelAnimationFrame(this.cameraMonitoringFrame);
    }
    
    const monitorCamera = () => {
      if (!this.cameraController || !this.cameraController.camera) {
        this.cameraMonitoringFrame = requestAnimationFrame(monitorCamera);
        return;
      }
      
      const currentZ = this.cameraController.camera.position.z;
      
      // Update current point index based on camera position
      this.updateCurrentPointIndex(currentZ);
      
      // Only update slider if we have dashboard checkpoints initialized
      if (this.dashboardCheckpoints && this.dashboardCheckpoints.length > 0) {
        // Update slider position based on current Z
        this.updateSliderPositionByZ(currentZ);
      }
      
      // Update gradient indicator based on checkpoint state
      this.updateDashboardGradientIndicator();
      
      // Update navigation indicators based on z position
      this.updateNavigationIndicators(currentZ);
      
      this.cameraMonitoringFrame = requestAnimationFrame(monitorCamera);
    };
    
    // Start monitoring
    monitorCamera();
  }
  
  /**
   * Update current point index based on camera Z position
   */
  updateCurrentPointIndex(currentZ) {
    const points = getPoints();
    if (points.length === 0) return;
    
    // Find the last point we've reached (with tolerance)
    const tolerance = 0.5;
    let lastReachedIndex = -1;
    
    for (let i = 0; i < points.length; i++) {
      const point = points[i];
      // If current Z is at or past this point, we've reached it
      if (currentZ <= point.z + tolerance) {
        lastReachedIndex = i;
      } else {
        // Points are in descending order, so we can break once we find one we haven't reached
        break;
      }
    }
    
    if (lastReachedIndex !== -1 && lastReachedIndex !== this.currentPointIndex) {
      this.currentPointIndex = lastReachedIndex;
    }
  }
  
  /**
   * Update dashboard gradient indicator to show when at checkpoint (clickable)
   * Only shows at the two checkpoints: Start (index 0) and Bericht (index 1)
   */
  updateDashboardGradientIndicator() {
    const dashText = document.querySelector('.dash__text');
    if (!dashText) return;
    
    // Only show SVG stroke at the two checkpoints: Start (index 0) and Bericht (index 1)
    // Must not be animating and must be at one of these specific checkpoints
    const isAtCheckpoint = !this.isAnimating && 
                           (this.currentCheckpointIndex === 0 || this.currentCheckpointIndex === 1);
    
    if (isAtCheckpoint) {
      // At checkpoint: add gradient class to show it's clickable
      dashText.classList.add('at-checkpoint');
      // Remove clicked class to show SVG again at checkpoint
      const dashTextButton = document.querySelector('.dash__text--button');
      if (dashTextButton) {
        dashTextButton.classList.remove('clicked');
      }
    } else {
      // Not at checkpoint: remove gradient class
      dashText.classList.remove('at-checkpoint');
    }
  }
  
  /**
   * Update navigation indicators based on camera z position
   * Only one indicator can be active at a time
   */
  updateNavigationIndicators(currentZ) {
    const navigation = checkpointConfig?.navigation || [];
    if (navigation.length === 0) return;
    
    // Find the indicator that should be active based on z range
    // Check if currentZ is within the startZ and endZ range for each indicator
    let activeIndicator = null;
    
    for (const navItem of navigation) {
      // Check if currentZ is within the range (inclusive of startZ, exclusive of endZ)
      // Since z values are negative and decreasing (0 → -109 → -130 → -300),
      // we need to check: currentZ <= startZ (camera has reached/passed startZ)
      // AND currentZ > endZ (camera hasn't reached endZ yet)
      // Example: startZ: -109, endZ: -130
      //   z: -100 → not active (hasn't reached -109)
      //   z: -109 → active (reached startZ)
      //   z: -120 → active (between -109 and -130)
      //   z: -130 → not active (reached endZ)
      if (currentZ <= navItem.startZ && currentZ > navItem.endZ) {
        activeIndicator = navItem.indicator;
        break; // Only one indicator should be active at a time
      }
    }
    
    // Remove active__nav class from all indicators
    const allIndicators = ['indicatorWater', 'indicatorMessage', 'indicatorGift'];
    allIndicators.forEach(indicatorId => {
      const indicator = document.getElementById(indicatorId);
      if (indicator) {
        indicator.classList.remove('active__nav');
      }
    });
    
    // Add active__nav class to the active indicator
    if (activeIndicator) {
      const activeElement = document.getElementById(activeIndicator);
      if (activeElement) {
        activeElement.classList.add('active__nav');
      }
    }
  }
  
  /**
   * Stop monitoring camera position
   */
  stopCameraPositionMonitoring() {
    if (this.cameraMonitoringFrame) {
      cancelAnimationFrame(this.cameraMonitoringFrame);
      this.cameraMonitoringFrame = null;
    }
  }
}
