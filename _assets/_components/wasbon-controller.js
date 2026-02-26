/* ===== WASBON CONTROLLER ===== */
// Controller to manage wasbon creation flow and integrate with camera controller

import { WasbonForm } from './wasbon-form.js';
import { WasbonMessageStation } from './wasbon-message-station.js';
import { SOAP_THEMES, setNameGetter, setDoucheGordijnTextGetter, generateDoucheGordijnTexture } from './carwash-config.js';
import { USER_WENS_LOTTIE_OPTIONS } from './wensen-config.js';
import { applyUVMappings } from './uv-mapping-config.js';
import { checkpointConfig } from './checkpoint-config.js';
import * as THREE from 'three';

export class WasbonController {
  constructor(cameraController, sceneSetup, textureManager = null, stations = null) {
    this.cameraController = cameraController;
    this.sceneSetup = sceneSetup;
    this.textureManager = textureManager;
    this.stations = stations;
    
    // State
    this.stepsCompleted = {
      form: false,        // Steps 1-4 completed
      message: false     // Step 5 completed
    };
    
    // Z positions for checkpoints (maak-bon: bericht at -109, media at -160)
    this.checkpointZ = {
      messageStation: -109,  // Bericht (personal message station)
      userMediaStation: -160, // Media (user photo station)
      end: -368              // End of tunnel
    };

    // Camera z at which step-5 (message station) is shown vs hidden (override to tune visibility)
    this.cameraZStep5Visible = this.checkpointZ.messageStation;       // show step-5 when camera is at or past this z
    this.cameraZStep5Hidden = this.checkpointZ.messageStation + 15;   // hide step-5 when camera is above this z (scrolled back)
    
    // Camera Y position variables for each step
    // Individual parameters for each step to allow fine-tuned control
    this.cameraY = {
      step1: 20,           // Step 1: Add value
      step2: 20,           // Step 2: Insert name
      step3: 20,           // Step 3: Select wens
      step4: 8,            // Step 4: Pick theme/soap
      messageStation: 8,  // Personal message station
      afterMessage: 8,     // After message is created
      userMediaStation: 8  // User media station
    };
    
    // Camera X rotation variables for each step (in degrees)
    // Individual parameters for each step to allow fine-tuned control
    this.cameraRotationX = {
      step1: 90,            // Step 1: Add value
      step2: 45,            // Step 2: Insert name
      step3: 0,            // Step 3: Select wens
      step4: 0,            // Step 4: Pick theme/soap
      messageStation: 0,   // Personal message station
      afterMessage: 0,     // After message is created
      userMediaStation: 0  // User media station
    };
    
    // Current form step (1-4)
    this.currentFormStep = 1;
    
    // Form data storage
    this.wasbonData = {
      form: null,
      message: null
    };
    
    // Store original scroll handler
    this.originalScrollHandler = null;
    
    // Soap Lottie animation scroll handling
    this.soapLottieScrollHandler = null;
    this.soapLottieHideTimeout = null;
    
    // Animation state
    this.isAnimatingToEnd = false;
    
    // Initialize components with step change callback, theme change callback, and wens change callback
    this.wasbonForm = new WasbonForm(
      (formData) => this.onFormComplete(formData),
      (step) => this.onFormStepChange(step),
      (theme) => this.onThemeSelected(theme),
      (wens) => this.onWensSelected(wens)
    );
    this.messageStation = new WasbonMessageStation(
      (messageData) => this.onMessageComplete(messageData),
      (messageData) => this.onAddMessage(messageData),
      (text) => this.onDoucheGordijnTextChange(text)
    );
    
    // Setup camera Y control
    this.setupCameraYControl();
    
    // Setup scroll blocking
    this.setupScrollBlocking();
    
    // Setup camera position monitoring
    this.setupCameraMonitoring();
    
    // Setup step 6 button handlers
    this.setupStep6Handlers();
    
    // Set up name getter for dynamic texture generation
    // Check both completed form data and current form data
    // On maak-bon page, return empty string if no name (will show nothing)
    setNameGetter(() => {
      // First check if form is completed
      if (this.wasbonData.form?.name) {
        return this.wasbonData.form.name;
      }
      // Otherwise check current form data (for real-time updates)
      if (this.wasbonForm?.formData?.name) {
        return this.wasbonForm.formData.name;
      }
      // Return empty string on maak-bon page (no default name)
      // The getName() function in carwash-config.js will handle the page-specific default
      return '';
    });
    
    // Set up douche gordijn text getter for dynamic texture generation
    // Use the personal message text for douche gordijn
    setDoucheGordijnTextGetter(() => {
      // First check if message is completed
      if (this.wasbonData.message?.message) {
        return this.wasbonData.message.message;
      }
      // Otherwise check current message station data (for real-time updates)
      if (this.messageStation?.messageData?.message) {
        return this.messageStation.messageData.message;
      }
      // Return empty string on maak-bon page (no default text)
      // The getDoucheGordijnText() function in carwash-config.js will handle the page-specific default
      return '';
    });
    
    // Show form on init
    this.wasbonForm.show();
    
    // Set initial camera position and rotation (step 1)
    this.setCameraY(this.cameraY.step1);
    this.setCameraRotationX(this.cameraRotationX.step1);
  }
  
  setupScrollBlocking() {
    // Intercept targetZ updates to add blocking
    if (!this.cameraController) return;
    
    // Store original targetZ
    const originalTargetZ = this.cameraController.targetZ;
    
    // Create a proxy or monitor targetZ changes
    // We'll check targetZ in the update loop instead
    this.checkTargetZBlocking();
  }
  
  checkTargetZBlocking() {
    // Monitor and block targetZ updates
    const checkLoop = () => {
      if (!this.cameraController || !this.sceneSetup) {
        requestAnimationFrame(checkLoop);
        return;
      }
      
      // Don't block if we're animating to end
      if (this.isAnimatingToEnd) {
        requestAnimationFrame(checkLoop);
        return;
      }
      
      // Check if targetZ would violate our blocking rules
      if (this.shouldBlockScrolling(this.cameraController.targetZ)) {
        // Clamp targetZ to allowed range
        if (!this.stepsCompleted.form) {
          // Block past message station
          this.cameraController.targetZ = Math.max(
            this.cameraController.targetZ,
            this.checkpointZ.messageStation
          );
          } else if (!this.stepsCompleted.message) {
          // If no message has been added, block past message station
          if (!this.wasbonData.message) {
            this.cameraController.targetZ = Math.max(
              this.cameraController.targetZ,
              this.checkpointZ.messageStation
            );
          } else {
            // Message has been added, block past user media station
            this.cameraController.targetZ = Math.max(
              this.cameraController.targetZ,
              this.checkpointZ.userMediaStation
            );
          }
        }
      }
      
      // Also clamp camera position directly
      const camera = this.sceneSetup.getCamera();
      if (camera) {
        if (this.shouldBlockScrolling(camera.position.z)) {
          if (!this.stepsCompleted.form) {
            camera.position.z = Math.max(camera.position.z, this.checkpointZ.messageStation);
          } else if (!this.stepsCompleted.message) {
            if (!this.wasbonData.message) {
              camera.position.z = Math.max(camera.position.z, this.checkpointZ.messageStation);
              
              // Show message station when camera is clamped at the scroll stop point
              const step5 = document.getElementById('step-5');
              const formOverlay = document.getElementById('wasbon-form-overlay');
              if (step5 && formOverlay && Math.abs(camera.position.z - this.cameraZStep5Visible) < 1) {
                // Make sure form overlay is visible
                if (formOverlay.style.display === 'none') {
                  formOverlay.style.display = 'flex';
                }
                // Show step 5 if not already shown
                if (step5.style.display === 'none') {
                  // Hide all other steps first
                  document.querySelectorAll('.wasbon-step-content').forEach(step => {
                    if (step.id !== 'step-5') {
                      step.style.display = 'none';
                    }
                  });
                  
                  this.setCameraY(this.cameraY.messageStation);
                  this.setCameraRotationX(this.cameraRotationX.messageStation);
                  this.applyWensPlaceholderToMessageTextarea();
                  this.messageStation.show();
                }
              }
            } else {
              camera.position.z = Math.max(camera.position.z, this.checkpointZ.userMediaStation);
              
              // Show step 6 when camera is clamped at the user media station scroll stop point
              const step6 = document.getElementById('step-6');
              const formOverlay = document.getElementById('wasbon-form-overlay');
              if (step6 && formOverlay && Math.abs(camera.position.z - this.checkpointZ.userMediaStation) < 1) {
                // Make sure form overlay is visible
                if (formOverlay.style.display === 'none') {
                  formOverlay.style.display = 'flex';
                }
                // Show step 6 if not already shown
                if (step6.style.display === 'none') {
                  // Hide all other steps first
                  document.querySelectorAll('.wasbon-step-content').forEach(step => {
                    if (step.id !== 'step-6') {
                      step.style.display = 'none';
                    }
                  });
                  
                  this.setCameraY(this.cameraY.userMediaStation);
                  this.setCameraRotationX(this.cameraRotationX.userMediaStation);
                  step6.style.display = 'block';
                }
              }
            }
          }
        }
      }
      
      requestAnimationFrame(checkLoop);
    };
    
    checkLoop();
  }
  
  setupCameraMonitoring() {
    // Monitor camera position to show/hide message station
    const checkCameraPosition = () => {
      if (!this.sceneSetup || !this.sceneSetup.getCamera()) {
        requestAnimationFrame(checkCameraPosition);
        return;
      }
      
      const camera = this.sceneSetup.getCamera();
      const cameraZ = camera.position.z;
      
      // Check if we're at the message station
      if (this.stepsCompleted.form && !this.stepsCompleted.message) {
        // Only show message station if message hasn't been added yet
        if (!this.wasbonData.message) {
          // Check if scrolling is blocked at message station (user reached the stop point)
          const isAtScrollStop = this.shouldBlockScrolling(cameraZ) && 
                                 Math.abs(cameraZ - this.cameraZStep5Visible) < 5;
          
          // Show message station when camera is at or near the visibility z
          if (isAtScrollStop || (cameraZ <= this.cameraZStep5Visible + 10 && cameraZ >= this.cameraZStep5Visible - 5)) {
            // Check if message station is not already shown
            const step5 = document.getElementById('step-5');
            const formOverlay = document.getElementById('wasbon-form-overlay');
            
            // Make sure form overlay is visible
            if (formOverlay && formOverlay.style.display === 'none') {
              formOverlay.style.display = 'flex';
            }
            
            if (step5 && step5.style.display === 'none') {
              // Hide all other steps first
              document.querySelectorAll('.wasbon-step-content').forEach(step => {
                if (step.id !== 'step-5') {
                  step.style.display = 'none';
                }
              });
              
              // Camera position and rotation for personal message station
              this.setCameraY(this.cameraY.messageStation);
              this.setCameraRotationX(this.cameraRotationX.messageStation);
              this.applyWensPlaceholderToMessageTextarea();
              this.messageStation.show();
            }
          }
        }
      }

      // Hide step-5 when camera is above cameraZStep5Hidden (scrolled back)
      if (cameraZ > this.cameraZStep5Hidden) {
        const step5Back = document.getElementById('step-5');
        if (step5Back && step5Back.style.display !== 'none') {
          step5Back.classList.remove('is-visible');
          step5Back.style.display = 'none';
        }
      }

      // If message has been added (but not completed), allow scrolling to end
      // The message station step should be hidden, but user can scroll
      if (this.wasbonData.message && !this.stepsCompleted.message) {
        // Message has been added, scrolling to end is already enabled
        // User can continue scrolling to the end
        // Make sure step 5 stays hidden
        const step5 = document.getElementById('step-5');
        if (step5 && step5.style.display !== 'none') {
          step5.classList.remove('is-visible');
          step5.style.display = 'none';
        }
        
        // Check if we're at the user media station (step 6)
        const isAtUserMediaStop = this.shouldBlockScrolling(cameraZ) && 
                                  Math.abs(cameraZ - this.checkpointZ.userMediaStation) < 5;
        
        // Show step 6 when camera is at or near the user media station scroll stop point
        if (isAtUserMediaStop || (cameraZ <= this.checkpointZ.userMediaStation + 10 && cameraZ >= this.checkpointZ.userMediaStation - 5)) {
          const step6 = document.getElementById('step-6');
          const formOverlay = document.getElementById('wasbon-form-overlay');
          
          // Make sure form overlay is visible
          if (formOverlay && formOverlay.style.display === 'none') {
            formOverlay.style.display = 'flex';
          }
          
          if (step6 && step6.style.display === 'none') {
            // Hide all other steps first
            document.querySelectorAll('.wasbon-step-content').forEach(step => {
              if (step.id !== 'step-6') {
                step.style.display = 'none';
              }
            });
            
            // Camera position and rotation for user media station
            this.setCameraY(this.cameraY.userMediaStation);
            this.setCameraRotationX(this.cameraRotationX.userMediaStation);
            step6.style.display = 'block';
          }
        }
      }
      
      requestAnimationFrame(checkCameraPosition);
    };
    
    checkCameraPosition();
  }
  
  setupStep6Handlers() {
    // Confirm and pay button - animate to end of tunnel
    const confirmBtn = document.getElementById('wasbon-confirm-payment');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        this.animateToEnd();
      });
    }
    
    // Edit message button - show message step again
    const editMessageBtn = document.getElementById('wasbon-edit-message');
    if (editMessageBtn) {
      editMessageBtn.addEventListener('click', () => {
        this.showMessageStepAgain();
      });
    }
  }
  
  animateToEnd() {
    // Animate camera to end of tunnel following carwash timeline/points (like carwash.html)
    if (!this.cameraController || !this.sceneSetup) {
      console.warn('Camera controller or scene setup not available');
      return;
    }
    
    const camera = this.sceneSetup.getCamera();
    if (!camera) {
      console.warn('Camera not available');
      return;
    }
    
    // Don't start new animation if one is already in progress
    if (this.isAnimatingToEnd) {
      return;
    }
    
    // Set animation flag
    this.isAnimatingToEnd = true;
    
    // Hide step 5, step 6 and form overlay immediately
    const step5 = document.getElementById('step-5');
    const step6 = document.getElementById('step-6');
    const formOverlay = document.getElementById('wasbon-form-overlay');
    if (step5) step5.style.display = 'none';
    if (step6) step6.style.display = 'none';
    if (formOverlay) formOverlay.style.display = 'none';
    
    // Mark message as completed (so blocking doesn't interfere)
    this.stepsCompleted.message = true;
    
    const targetZ = this.checkpointZ.end;
    const checkpointCtrl = typeof window !== 'undefined' ? window.checkpointController : null;
    
    if (checkpointCtrl) {
      // Follow carwash timeline/points: -109 → -191 → -260 (same as carwash.html)
      checkpointCtrl.syncWithCameraPosition();
      const success = checkpointCtrl.goToNextPoint(true);
      if (success) {
        // Points total ~24s; clear flag after animation completes
        const totalDurationMs = 35000;
        setTimeout(() => {
          this.isAnimatingToEnd = false;
        }, totalDurationMs);
        return;
      }
    }
    
    // Fallback: linear movement if no checkpoint controller
    const duration = 3;
    this.cameraController.minZ = Math.min(this.cameraController.minZ, targetZ - 10);
    this.cameraController.setLinearTargetZ(targetZ, duration);
    
    setTimeout(() => {
      this.isAnimatingToEnd = false;
      camera.position.z = targetZ;
      this.cameraController.targetZ = targetZ;
    }, duration * 1000 + 100);
  }
  
  showMessageStepAgain() {
    // Hide step 6
    const step6 = document.getElementById('step-6');
    if (step6) {
      step6.style.display = 'none';
    }

    // Apply selected wens placeholder and show message step (step 5) again
    this.applyWensPlaceholderToMessageTextarea();
    this.messageStation.show();
  }

  /** Set the message textarea placeholder from the selected wens (form step 3). */
  applyWensPlaceholderToMessageTextarea() {
    const placeholder = this.wasbonForm?.formData?.wensPlaceholder;
    const messageTextarea = document.getElementById('wasbon-message-textarea');
    if (messageTextarea && placeholder) {
      messageTextarea.placeholder = placeholder;
    }
  }
  
  setupCameraYControl() {
    // Enable manual Y control in camera controller
    if (this.cameraController) {
      this.cameraController.useManualY = true;
      this.cameraController.useManualRotation = true;
    }
  }
  
  setCameraY(yPosition) {
    // Set camera Y position
    if (this.cameraController) {
      this.cameraController.targetCameraY = yPosition;
    }
  }
  
  setCameraRotationX(rotationX) {
    // Set camera X rotation (in degrees)
    if (this.cameraController) {
      this.cameraController.targetCameraRotationX = rotationX;
    }
  }
  
  onFormStepChange(step) {
    // Handle form step changes
    this.currentFormStep = step;
    
    // Set camera Y position and X rotation based on current step
    switch(step) {
      case 1:
        this.setCameraY(this.cameraY.step1);
        this.setCameraRotationX(this.cameraRotationX.step1);
        break;
      case 2:
        this.setCameraY(this.cameraY.step2);
        this.setCameraRotationX(this.cameraRotationX.step2);
        break;
      case 3:
        this.setCameraY(this.cameraY.step3);
        this.setCameraRotationX(this.cameraRotationX.step3);
        // When moving to step 3, the user has entered the name and pressed next
        // Update the name texture with the entered name
        if (this.wasbonForm?.formData?.name) {
          this.updatePoortNameTexture();
        }
        break;
      case 4:
        this.setCameraY(this.cameraY.step4);
        this.setCameraRotationX(this.cameraRotationX.step4);
        break;
      case 5:
        // User clicked "Voeg toe" on soap step: start timeline to first checkpoint (message at -109)
        this.stepsCompleted.form = true;
        this.startTimelineToFirstCheckpoint();
        break;
      default:
        // Default to step 1 position
        this.setCameraY(this.cameraY.step1);
        this.setCameraRotationX(this.cameraRotationX.step1);
    }
  }

  /**
   * Start the timeline from checkpoint-config: animate camera to first checkpoint (message station at -109) and stop.
   */
  startTimelineToFirstCheckpoint() {
    if (!this.cameraController || !this.sceneSetup) return;
    const points = typeof window !== 'undefined' && window.innerWidth <= 768 && checkpointConfig.pointsMobile?.length
      ? checkpointConfig.pointsMobile
      : checkpointConfig.points;
    const firstPoint = points?.[0];
    if (!firstPoint || firstPoint.z !== this.checkpointZ.messageStation) {
      // Fallback: animate to -109 in 16 seconds
      this.cameraController.minZ = Math.min(this.cameraController.minZ, this.checkpointZ.messageStation - 10);
      this.cameraController.setLinearTargetZ(this.checkpointZ.messageStation, 16);
      return;
    }
    const duration = firstPoint.duration ?? 16;
    this.cameraController.minZ = Math.min(this.cameraController.minZ, this.checkpointZ.messageStation - 10);
    this.cameraController.setLinearTargetZ(this.checkpointZ.messageStation, duration);
  }
  
  onThemeSelected(themeName) {
    // Show Lottie overlay, apply UV mappings, hide overlay when done (no camera rotation)
    console.log('Theme selected:', themeName);
    this.showSoapChangeLottieAndApplyTheme(themeName);
  }

  /** Update user__wens Lottie when user selects a wens in step 3 */
  onWensSelected(wens) {
    if (!this.textureManager || !wens?.lottie) return;

    this.textureManager.applyLottieTexture('user__wens', wens.lottie, 'x', {
      ...USER_WENS_LOTTIE_OPTIONS
    }).catch(error => {
      console.error('Failed to update user__wens Lottie:', error);
    });
  }

  /** Soap change Lottie overlay URL (fullscreen overlay when user changes soap) */
  static SOAP_CHANGE_LOTTIE_URL = 'https://lottie.host/dba15554-1624-41a6-a4d3-f2c51b190284/ZMSdUrsRRp.lottie';

  async showSoapChangeLottieAndApplyTheme(themeName) {
    const overlay = document.getElementById('soap-change-lottie-overlay');
    const container = document.getElementById('soap-change-lottie-container');
    if (!overlay || !container) {
      await this.applyTheme(themeName);
      return;
    }

    overlay.classList.add('active');
    container.innerHTML = '';

    // Apply UV mappings in the background (don't wait – Lottie plays fully regardless)
    this.applyTheme(themeName).catch(err => console.error('Theme apply error:', err));

    if (typeof lottie === 'undefined' || typeof JSZip === 'undefined') {
      this.hideSoapChangeLottieOverlay();
      return;
    }

    try {
      const url = WasbonController.SOAP_CHANGE_LOTTIE_URL;
      let animationData = null;

      if (url.endsWith('.lottie')) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
        const blob = await response.blob();
        const text = await blob.text();
        try {
          const parsed = JSON.parse(text);
          if (parsed && (parsed.layers || parsed.assets || parsed.fr !== undefined)) {
            animationData = parsed;
          }
        } catch (_) {}
        if (!animationData) {
          const zip = await JSZip.loadAsync(await fetch(url).then(r => r.blob()));
          const names = Object.keys(zip.files);
          for (const name of names) {
            if (name.endsWith('.json') && !zip.files[name].dir) {
              const json = JSON.parse(await zip.files[name].async('string'));
              if (json && (json.layers || json.assets || json.fr !== undefined)) {
                animationData = json;
                break;
              }
            }
          }
        }
      }

      if (!animationData) {
        this.hideSoapChangeLottieOverlay();
        return;
      }
      if (!animationData.layers) animationData.layers = [];
      if (!animationData.assets) animationData.assets = [];
      if (animationData.fr === undefined) animationData.fr = 60;
      if (animationData.v === undefined) animationData.v = '5.5.7';

      const animation = lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData
      });

      // Stretch Lottie SVG to fill container (100% width/height, no aspect ratio)
      animation.addEventListener('DOMLoaded', () => {
        const svg = container.querySelector('svg');
        if (svg) svg.setAttribute('preserveAspectRatio', 'none');
      });

      const hideAfter = () => {
        if (animation && animation.destroy) animation.destroy();
        this.hideSoapChangeLottieOverlay();
      };

      // Hide only when the Lottie has fully played (complete event)
      animation.addEventListener('complete', hideAfter, { once: true });
    } catch (err) {
      console.error('Soap change Lottie error:', err);
      this.hideSoapChangeLottieOverlay();
    }
  }

  hideSoapChangeLottieOverlay() {
    const overlay = document.getElementById('soap-change-lottie-overlay');
    const container = document.getElementById('soap-change-lottie-container');
    if (overlay) overlay.classList.remove('active');
    if (container) container.innerHTML = '';
  }
  
  onFormComplete(formData) {
    console.log('Form completed:', formData);
    this.wasbonData.form = formData;
    this.stepsCompleted.form = true;
    
    // Apply selected theme to carwash (async, but don't wait for it)
    if (formData.theme) {
      this.applyTheme(formData.theme).catch(error => {
        console.error('Error applying theme:', error);
      });
    } else {
      // If no theme selected, still update the name texture with the current name
      setTimeout(() => {
        this.updatePoortNameTexture();
      }, 500);
    }
    
    // Start timeline to first checkpoint (message at -109) when user clicked "Voeg toe" on soap step
    this.startTimelineToFirstCheckpoint();
    
    // Allow scrolling through carwash (minZ so user can reach message station)
    this.enableScrollingToMessageStation();
    
    // Camera stays down after form completion (step 4 was down)
    // It will go up when message station is shown
  }
  
  async showSoapLottieAnimation() {
    const container = document.getElementById('soap-lottie-container');
    if (!container) {
      console.warn('Soap Lottie container not found');
      return;
    }
    
    // Check if Lottie library is loaded
    if (typeof lottie === 'undefined') {
      console.warn('Lottie library not loaded yet. Retrying in 100ms...');
      setTimeout(() => this.showSoapLottieAnimation(), 100);
      return;
    }
    
    // Clear any existing animation
    container.innerHTML = '';
    
    // Show container
    container.classList.add('active');
    
    const url = 'https://lottie.host/3daa7c07-7439-4169-a6b1-d3bf20528bcb/mpZvE1i0I1.lottie';
    
    try {
      let animation;
      
      // For .lottie files, we need to manually extract JSON since the library doesn't handle them natively
      if (url.endsWith('.lottie')) {
        if (typeof JSZip === 'undefined') {
          console.error('JSZip is required for .lottie files. Please include JSZip library.');
          return;
        }
        
        try {
          // Fetch the .lottie file
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Failed to fetch Lottie file: ${response.statusText}`);
          }
          
          const blob = await response.blob();
          let animationData = null;
          
          // Try parsing as JSON first (some .lottie files are actually JSON)
          const text = await blob.text();
          try {
            const parsed = JSON.parse(text);
            // Validate it looks like Lottie animation data
            if (parsed && (parsed.layers || parsed.assets || parsed.fr !== undefined)) {
              animationData = parsed;
            }
          } catch (jsonError) {
            // Not JSON, will try as ZIP below
          }
          
          // If not JSON, try as ZIP
          if (!animationData) {
            const zipBlob = await fetch(url).then(r => r.blob());
            const zip = await JSZip.loadAsync(zipBlob);
            const fileNames = Object.keys(zip.files);
            
            // Try to find the animation JSON file
            const possibleJsonNames = ['data.json', 'animation.json', 'comp.json'];
            for (const jsonName of possibleJsonNames) {
              if (zip.files[jsonName] && !zip.files[jsonName].dir) {
                const jsonContent = await zip.files[jsonName].async('string');
                const parsed = JSON.parse(jsonContent);
                if (parsed && (parsed.layers || parsed.assets || parsed.fr !== undefined)) {
                  animationData = parsed;
                  break;
                }
              }
            }
            
            // If not found, look for any .json file
            if (!animationData) {
              for (const fileName of fileNames) {
                if (fileName.endsWith('.json') && !zip.files[fileName].dir) {
                  const jsonContent = await zip.files[fileName].async('string');
                  const parsed = JSON.parse(jsonContent);
                  if (parsed && (parsed.layers || parsed.assets || parsed.fr !== undefined)) {
                    animationData = parsed;
                    break;
                  }
                }
              }
            }
          }
          
          if (!animationData) {
            throw new Error('No JSON animation data found in .lottie file');
          }
          
          // Ensure layers array exists (required by Lottie library)
          if (!animationData.layers) {
            animationData.layers = [];
          }
          
          // Ensure assets array exists (if not present)
          if (!animationData.assets) {
            animationData.assets = [];
          }
          
          // Ensure basic required properties exist
          if (animationData.fr === undefined) {
            animationData.fr = 60; // Default frame rate
          }
          if (animationData.v === undefined) {
            animationData.v = '5.5.7'; // Default version
          }
          
          // Load animation with extracted animationData
          animation = lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
          });
          
        } catch (error) {
          console.error('Error processing .lottie file:', error);
          container.classList.remove('active');
          return;
        }
      } else {
        // For regular JSON URLs, use path parameter
        animation = lottie.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: url
        });
      }
      
      // Store animation reference for cleanup if needed
      this.soapLottieAnimation = animation;
      
      // Add event listeners for debugging
      animation.addEventListener('DOMLoaded', () => {
        console.log('Soap Lottie animation loaded');
      });
      
      animation.addEventListener('data_ready', () => {
        console.log('Soap Lottie animation data ready');
      });
      
      animation.addEventListener('data_failed', (error) => {
        console.error('Soap Lottie animation failed to load:', error);
        this.hideSoapLottieAnimation();
      });
      
      // Setup scroll detection to hide animation after 1 second
      this.setupSoapLottieScrollDetection();
      
    } catch (error) {
      console.error('Error loading Soap Lottie animation:', error);
      this.hideSoapLottieAnimation();
    }
  }
  
  setupSoapLottieScrollDetection() {
    // Clean up any existing scroll handler
    if (this.soapLottieScrollHandler) {
      window.removeEventListener('wheel', this.soapLottieScrollHandler);
      window.removeEventListener('touchmove', this.soapLottieScrollHandler);
      if (this.soapLottieHideTimeout) {
        clearTimeout(this.soapLottieHideTimeout);
        this.soapLottieHideTimeout = null;
      }
    }
    
    // Create scroll handler
    this.soapLottieScrollHandler = () => {
      // Clear any existing timeout
      if (this.soapLottieHideTimeout) {
        clearTimeout(this.soapLottieHideTimeout);
      }
      
      // Set timeout to hide animation after 1 second
      this.soapLottieHideTimeout = setTimeout(() => {
        this.hideSoapLottieAnimation();
      }, 1000);
    };
    
    // Add scroll event listeners
    window.addEventListener('wheel', this.soapLottieScrollHandler, { passive: true });
    window.addEventListener('touchmove', this.soapLottieScrollHandler, { passive: true });
  }
  
  hideSoapLottieAnimation() {
    const container = document.getElementById('soap-lottie-container');
    if (container) {
      container.classList.remove('active');
    }
    
    // Stop and destroy animation if it exists
    if (this.soapLottieAnimation) {
      this.soapLottieAnimation.destroy();
      this.soapLottieAnimation = null;
    }
    
    // Clean up scroll handlers
    if (this.soapLottieScrollHandler) {
      window.removeEventListener('wheel', this.soapLottieScrollHandler);
      window.removeEventListener('touchmove', this.soapLottieScrollHandler);
      this.soapLottieScrollHandler = null;
    }
    
    // Clear timeout
    if (this.soapLottieHideTimeout) {
      clearTimeout(this.soapLottieHideTimeout);
      this.soapLottieHideTimeout = null;
    }
  }
  
  async applyTheme(themeName) {
    // Apply the selected theme by updating UV mappings
    if (!this.textureManager || !this.stations || !this.sceneSetup) {
      console.warn('TextureManager, stations, or sceneSetup not available for theme change');
      return Promise.resolve();
    }
    
    if (!SOAP_THEMES[themeName]) {
      console.warn(`Theme "${themeName}" not found in SOAP_THEMES`);
      return Promise.resolve();
    }

    // Wait 200ms before changing UV map (allows Lottie/transition to settle)
    await new Promise(r => setTimeout(r, 200));
    
    console.log(`Applying theme: ${themeName}`);
    
    // Get current theme
    const currentTheme = SOAP_THEMES[themeName] || SOAP_THEMES['Power Sop'];
    
    console.log('Theme textures:', {
      poort: currentTheme.poort,
      boogSoap: currentTheme.boogSoap,
      boogBrushup: currentTheme.boogBrushup,
      boogDefault: currentTheme.boogDefault,
      tunnel: currentTheme.tunnel
    });
    
    // First, apply base poort texture with force replace to ensure it updates
    // This must be done before applyUVMappings to ensure proper order
    this.textureManager.giveObjectMapping('poort', currentTheme.poort, 'x', { forceReplace: true });
    
    // Re-apply ALL UV mappings with the new theme
    // This ensures all textures are updated, not just theme-specific ones
    // This will reapply poort, boog textures, and all other mappings
    applyUVMappings(this.textureManager, themeName, SOAP_THEMES, this.stations);
    
    // Update tunnel textures on all existing tunnel objects (async)
    const tunnelPromise = this.updateTunnelTextures(currentTheme.tunnel);
    
    // Update gate door textures to match theme's tunnel color
    this.updateGateTextures(currentTheme.tunnel);
    
    // Update Lottie animations if they differ per theme (async)
    const lottiePromise = this.updateLottieAnimations(themeName, currentTheme);
    
    // Wait for all async operations to complete
    await Promise.all([tunnelPromise, lottiePromise]);
    
    // Apply poort name texture after textures are loaded
    // This allows it to layer on top of the base poort texture (not replace it)
    // Since poortName is now a function that generates a canvas, it will be called dynamically
    setTimeout(() => {
      this.updatePoortNameTexture(currentTheme);
    }, 100);
    
    console.log('Theme application complete');
  }

  // Update poort name texture with current name
  updatePoortNameTexture(theme = null) {
    if (!this.textureManager) {
      console.warn('TextureManager not available for name texture update');
      return;
    }
    
    // Get theme from parameter, completed form, current form, or default
    let themeName = theme;
    if (!themeName) {
      themeName = this.wasbonData.form?.theme || this.wasbonForm?.formData?.theme || 'Start';
    }
    const currentTheme = SOAP_THEMES[themeName] || SOAP_THEMES['Start'];
    
    // Apply poort name texture (will generate new canvas with current name)
    // Use forceReplace: false to layer on top of base texture
    this.textureManager.giveObjectMapping('poort', currentTheme.poortName, 'x', { forceReplace: false });
  }
  
  updateTunnelTextures(tunnelTextureName) {
    // Update tunnel textures on all tunnel objects in the scene
    if (!tunnelTextureName || !this.sceneSetup) {
      return Promise.resolve();
    }
    
    return new Promise((resolve, reject) => {
      const texturePath = tunnelTextureName.startsWith('_assets/') || tunnelTextureName.startsWith('/')
        ? tunnelTextureName
        : `_assets/_objects/_textures/${tunnelTextureName}`;
      
      // Find all tunnel objects in the scene
      // Tunnel objects are from overlay__tunnel.glb and are added to the scene
      const tunnelMeshes = [];
      this.sceneSetup.getScene().traverse((child) => {
        if (child.isMesh && child.material) {
          const material = Array.isArray(child.material) ? child.material[0] : child.material;
          // Tunnel materials are ShaderMaterials with DoubleSide, transparent, and map uniform
          // They don't have lighting (no gamma uniform typically)
          if (material.type === 'ShaderMaterial' && 
              material.side === THREE.DoubleSide && 
              material.transparent === true &&
              material.uniforms && material.uniforms.map &&
              !material.uniforms.gamma) { // Tunnel materials don't have gamma
            tunnelMeshes.push(child);
          }
        }
      });
      
      if (tunnelMeshes.length === 0) {
        console.warn('No tunnel meshes found to update');
        resolve();
        return;
      }
      
      console.log(`Updating ${tunnelMeshes.length} tunnel meshes with texture: ${texturePath}`);
      
      // Load and apply new texture to all tunnel meshes
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        texturePath,
        (texture) => {
          texture.flipY = false;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          
          // Update all tunnel meshes with new texture
          tunnelMeshes.forEach((mesh) => {
            const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
            if (material && material.uniforms && material.uniforms.map) {
              // Dispose old texture if it exists
              const oldTexture = material.uniforms.map.value;
              if (oldTexture && oldTexture !== texture) {
                oldTexture.dispose();
              }
              // Update the texture in the uniform
              material.uniforms.map.value = texture;
              material.needsUpdate = true;
            }
          });
          resolve();
        },
        undefined,
        (error) => {
          console.error(`Error loading tunnel texture ${texturePath}:`, error);
          reject(error);
        }
      );
    });
  }
  
  updateGateTextures(tunnelTextureName) {
    // Update gate door textures to match theme's tunnel color
    if (!tunnelTextureName || !this.textureManager) return;
    
    const texturePath = tunnelTextureName.startsWith('_assets/') || tunnelTextureName.startsWith('/')
      ? tunnelTextureName
      : `_assets/_objects/_textures/${tunnelTextureName}`;
    
    console.log(`Updating gate textures with tunnel texture: ${texturePath}`);
    
    // Update gates for brush1 station
    this.textureManager.giveObjectMapping('gate__right', texturePath, 'xy', { stationId: 'brush1', forceReplace: true });
    this.textureManager.giveObjectMapping('gate__left', texturePath, 'xy', { stationId: 'brush1', forceReplace: true });
    
    // Update gates for brush2 station (if they exist)
    this.textureManager.giveObjectMapping('gate__right', texturePath, 'xy', { stationId: 'brush2', forceReplace: true });
    this.textureManager.giveObjectMapping('gate__left', texturePath, 'xy', { stationId: 'brush2', forceReplace: true });
  }
  
  updateLottieAnimations(themeName, currentTheme) {
    // Update Lottie animations when theme changes
    if (!window.lottieManager || !this.stations || !this.sceneSetup) {
      return Promise.resolve();
    }
    
    console.log('Updating Lottie animations for theme:', themeName);
    
    // Get all models in the scene
    const scene = this.sceneSetup.getScene();
    const allModels = [];
    scene.traverse((child) => {
      // Collect root models (the ones that were loaded)
      if (child.parent === scene || (child.parent && child.parent.parent === scene)) {
        // Check if this model or its children have stationId
        let hasStationId = false;
        child.traverse((descendant) => {
          if (descendant.userData && descendant.userData.stationId) {
            hasStationId = true;
          }
        });
        if (hasStationId && !allModels.includes(child)) {
          allModels.push(child);
        }
      }
    });
    
    // Group models by stationId
    const modelsByStation = {};
    allModels.forEach(model => {
      model.traverse((child) => {
        if (child.userData && child.userData.stationId) {
          const stationId = child.userData.stationId;
          if (!modelsByStation[stationId]) {
            modelsByStation[stationId] = [];
          }
          if (!modelsByStation[stationId].includes(model)) {
            modelsByStation[stationId].push(model);
          }
        }
      });
    });
    
    // Collect all lottie loading promises
    const lottiePromises = [];
    
    // Update lotties for each station that has theme-specific lotties
    if (currentTheme.lotties) {
      Object.keys(currentTheme.lotties).forEach(stationId => {
        const themeLotties = currentTheme.lotties[stationId];
        const stationModels = modelsByStation[stationId];
        
        if (!stationModels || stationModels.length === 0) {
          return; // Station not loaded yet
        }
        
        // Find the station config to get base lottie config (for startZ, stopZ, times)
        const stationConfig = this.stations.find(s => s.id === stationId);
        if (!stationConfig || !stationConfig.lottie) {
          return;
        }
        
        // Clean up old lottie animations for this station before applying new ones
        // This prevents memory leaks and performance degradation
        stationModels.forEach(model => {
          window.lottieManager.cleanupLottieAnimationsForLayers([model], ['lottie_front', 'lottie_back']);
        });
        
        // Merge theme lotties with station config (same logic as in maak-bon-main.js)
        const mergeLottie = (themeValue, stationValue) => {
          if (themeValue !== undefined) {
            if (themeValue === null) {
              return null;
            } else if (typeof themeValue === 'string') {
              if (stationValue && typeof stationValue === 'object' && stationValue.url) {
                return {
                  url: themeValue,
                  startZ: stationValue.startZ,
                  stopZ: stationValue.stopZ,
                  times: stationValue.times
                };
              } else {
                return themeValue;
              }
            }
          }
          return stationValue;
        };
        
        const mergedLottieConfig = {
          front: mergeLottie(themeLotties.front, stationConfig.lottie.front),
          back: mergeLottie(themeLotties.back, stationConfig.lottie.back),
          customLayers: stationConfig.lottie.customLayers // Preserve custom layers from station config
        };
        
        // Reapply lotties to all models for this station
        stationModels.forEach(model => {
          const promise = window.lottieManager.applyLottieToLayers([model], mergedLottieConfig).catch(error => {
            console.error(`Failed to update lotties for station ${stationId}:`, error);
          });
          lottiePromises.push(promise);
        });
      });
    }
    
    // Wait for all lottie loading operations to complete
    return Promise.all(lottiePromises).then(() => {
      // Refresh all lottie textures after updates
      if (window.lottieManager) {
        window.lottieManager.refreshAllLottieTextures();
      }
    });
  }
  
  onAddMessage(messageData) {
    console.log('Message added:', messageData);
    // Store message data
    this.wasbonData.message = messageData;
    
    // Update douche gordijn texture with the new text
    this.updateDoucheGordijnTexture();
    
    // Ensure manual Y control is enabled
    if (this.cameraController) {
      this.cameraController.useManualY = true;
    }
    
    // Camera goes down when "Voeg toe" is clicked
    this.setCameraY(this.cameraY.afterMessage);
    this.setCameraRotationX(this.cameraRotationX.afterMessage);
    console.log('Setting camera Y to:', this.cameraY.afterMessage);
    console.log('Setting camera rotation X to:', this.cameraRotationX.afterMessage);
    
    // Mark message complete so scroll blocking allows moving to end
    this.stepsCompleted.message = true;
    
    // Animate camera to end point (same as "Bevestig en reken af")
    this.animateToEnd();
  }
  
  onDoucheGordijnTextChange(text) {
    // Update douche gordijn texture in real-time as user types
    this.updateDoucheGordijnTexture();
  }
  
  // Update douche gordijn texture with current text
  updateDoucheGordijnTexture() {
    if (!this.textureManager) {
      console.warn('TextureManager not available for douche gordijn texture update');
      return;
    }
    
    // Apply douche gordijn texture (will generate new canvas with current text)
    // Use forceReplace: false to layer on top of base texture
    this.textureManager.giveObjectMapping('douche__gordijn', generateDoucheGordijnTexture, 'y', { forceReplace: false });
  }
  
  onMessageComplete(messageData) {
    console.log('Message completed:', messageData);
    this.wasbonData.message = messageData;
    this.stepsCompleted.message = true;
    
    // Update douche gordijn texture with the final text
    this.updateDoucheGordijnTexture();
    
    // Camera position and rotation after message is created
    this.setCameraY(this.cameraY.afterMessage);
    this.setCameraRotationX(this.cameraRotationX.afterMessage);
    
    // Scroll to end of tunnel
    this.scrollToEnd();
  }
  
  enableScrollingToEnd() {
    // Enable scrolling to the user media station (step 6)
    if (this.cameraController) {
      // Update minZ to allow scrolling to the user media station
      this.cameraController.minZ = Math.min(this.cameraController.minZ, this.checkpointZ.userMediaStation - 10);
    }
  }
  
  enableScrollingToMessageStation() {
    // Remove scroll restrictions - user can now scroll to message station
    // The camera controller already handles free scrolling, so we just need to ensure
    // the max scroll limit allows reaching the message station
    if (this.cameraController) {
      // Update minZ to allow scrolling to message station
      // The message station is at -232, so we need to allow at least that far
      this.cameraController.minZ = Math.min(this.cameraController.minZ, this.checkpointZ.messageStation - 10);
    }
  }
  
  scrollToEnd() {
    // Scroll camera to end of tunnel
    if (this.cameraController) {
      // Set targetZ - camera controller will smoothly lerp to it
      this.cameraController.targetZ = this.checkpointZ.end;
      // Ensure minZ allows reaching the end
      this.cameraController.minZ = Math.min(this.cameraController.minZ, this.checkpointZ.end - 10);
    }
  }
  
  // Check if scrolling should be blocked
  shouldBlockScrolling(targetZ) {
    // Block scrolling past message station if form not completed
    if (!this.stepsCompleted.form && targetZ < this.checkpointZ.messageStation) {
      return true;
    }
    
    // Block scrolling past end if message not completed
    // Also block scrolling past message station if message hasn't been added yet
    if (!this.stepsCompleted.message) {
      // If no message has been added, block scrolling past message station
      if (!this.wasbonData.message && targetZ < this.checkpointZ.messageStation) {
        return true;
      }
      // If message has been added but not completed, block scrolling past user media station
      if (this.wasbonData.message && targetZ < this.checkpointZ.userMediaStation) {
        return true;
      }
    }
    
    return false;
  }
  
  // Get current wasbon data
  getWasbonData() {
    return {
      ...this.wasbonData,
      completed: this.stepsCompleted.form && this.stepsCompleted.message
    };
  }
  
  // Reset wasbon creation
  reset() {
    this.stepsCompleted = {
      form: false,
      message: false
    };
    this.wasbonData = {
      form: null,
      message: null
    };
    this.currentFormStep = 1;
    this.wasbonForm.show();
    this.messageStation.reset();
    // Reset camera to step 1 position and rotation
    this.setCameraY(this.cameraY.step1);
    this.setCameraRotationX(this.cameraRotationX.step1);
  }
}
