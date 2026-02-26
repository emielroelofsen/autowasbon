// Lottie Z-Index Trigger System
// Triggers Lottie animations based on camera z-index position
// Now works with checkpoint timeline configuration

import { checkpointConfig } from './checkpoint-config.js';

export class LottieZIndexTrigger {
  constructor(sceneSetup) {
    this.sceneSetup = sceneSetup;
    this.lottieAnimations = [];
    this.activeIndices = new Set(); // Track multiple active Lotties
    this.overlay = document.getElementById('lottieOverlay');
    this.containers = this.overlay ? Array.from(this.overlay.querySelectorAll('.lottie-container')) : [];
    this.allowFirstLottieAutoPlay = false; // Prevent first Lottie from auto-playing until user clicks button
    
    // Load configuration from checkpointConfig if available, otherwise use fallback
    this.loadConfig();
    
    this.init();
  }
  
  /**
   * Load configuration from checkpointConfig or use fallback
   */
  loadConfig() {
    // Try to load from checkpointConfig first
    if (checkpointConfig && checkpointConfig.lotties && Array.isArray(checkpointConfig.lotties)) {
      // Convert from new format (playZ/stopZ) to internal format
      this.config = checkpointConfig.lotties.map((l, index) => ({
        index: index,
        url: l.url,
        playZ: l.playZ,
        stopZ: l.stopZ !== undefined ? l.stopZ : null
      }));
      console.log('Loaded lottie configuration from checkpointConfig:', this.config);
    } else {
      // Fallback to old format for backward compatibility
      // Convert old zindex format to new playZ format
      const fallbackConfig = [
        { zindex: -270, lottie: 'https://lottie.host/2163daee-29c1-4123-9142-6c20cc13258a/i3hyETa25l.lottie' },
        { zindex: -280, lottie: 'https://lottie.host/3a5f76fe-dec4-4993-99dc-a2a88eb55d21/vMzEEWSE7u.lottie' }
      ];
      this.config = fallbackConfig.map((c, index) => ({
        index: index,
        url: c.lottie,
        playZ: c.zindex,
        stopZ: null
      }));
      console.log('Using fallback lottie configuration:', this.config);
    }
  }
  
  init() {
    if (!this.overlay || this.containers.length === 0) {
      console.warn('Lottie overlay or containers not found');
      return;
    }
    
    // Load Lottie animations for each container (async)
    this.config.forEach((config) => {
      const index = config.index !== undefined ? config.index : this.config.indexOf(config);
      const url = config.url || config.lottie; // Support both url and lottie property
      if (url && url.trim() !== '') {
        this.loadLottie(index, url).catch(error => {
          console.error(`Failed to load Lottie ${index}:`, error);
        });
      }
    });
    
    // Start monitoring camera position
    this.startMonitoring();
  }
  
  async loadLottie(index, url) {
    if (index >= this.containers.length) {
      console.warn(`Lottie container index ${index} out of range`);
      return;
    }
    
    if (typeof lottie === 'undefined') {
      console.warn('Lottie library not loaded yet. Retrying in 100ms...');
      setTimeout(() => this.loadLottie(index, url), 100);
      return;
    }
    
    const container = this.containers[index];
    
    // Clear any existing animation
    container.innerHTML = '';
    
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
          let zip = null;
          if (!animationData) {
            const zipBlob = await fetch(url).then(r => r.blob());
            zip = await JSZip.loadAsync(zipBlob);
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
          
          // Extract images from .lottie file, convert to blob URLs, and preload them
          // This is needed for Lotties that contain images
          if (zip && animationData.assets && Array.isArray(animationData.assets)) {
            const imagePromises = [];
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
            
            // Wait for all images to be loaded
            await Promise.all(imagePromises);
          }
          
          // Load animation with extracted animationData
          const animConfig = {
            container: container,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animationData
          };
          
          // If we have blob URLs, configure to use them directly
          if (animationData._blobUrls && animationData._blobUrls.length > 0) {
            // Set assetsPath to empty to prevent path prepending
            animConfig.assetsPath = '';
          }
          
          animation = lottie.loadAnimation(animConfig);
          
          // Store blob URLs cleanup function on animation for later cleanup
          if (animationData._blobUrls && animationData._blobUrls.length > 0) {
            animation._blobUrls = animationData._blobUrls;
          }
          
        } catch (error) {
          console.error(`Error processing .lottie file ${index} from ${url}:`, error);
          return;
        }
      } else {
        // For regular JSON URLs, use path parameter
        animation = lottie.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: url
        });
      }
      
      // Store animation reference
      if (!this.lottieAnimations[index]) {
        this.lottieAnimations[index] = animation;
      }
      
      animation.addEventListener('DOMLoaded', () => {
        // Lottie loaded - ensure SVG stretches to fill container
        this.ensureSVGStretch(container);
      });
      
      animation.addEventListener('data_ready', () => {
        // Lottie data ready - ensure SVG is stretched
        this.ensureSVGStretch(container);
      });
      
      animation.addEventListener('data_failed', (error) => {
        console.error(`Lottie ${index} failed to load from ${url}:`, error);
      });
    } catch (error) {
      console.error(`Error loading Lottie ${index} from ${url}:`, error);
    }
  }
  
  startMonitoring() {
    const checkCameraZ = () => {
      if (!this.sceneSetup || !this.sceneSetup.getCamera()) {
        requestAnimationFrame(checkCameraZ);
        return;
      }
      
      const cameraZ = this.sceneSetup.getCamera().position.z;
      this.updateActiveLottie(cameraZ);
      
      requestAnimationFrame(checkCameraZ);
    };
    
    checkCameraZ();
  }
  
  ensureSVGStretch(container) {
    // Ensure SVG stretches to fill container without preserving aspect ratio
    const svg = container.querySelector('svg');
    if (svg) {
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.style.width = '100%';
      svg.style.height = '100%';
    }
  }
  
  updateActiveLottie(cameraZ) {
    // Check each Lottie individually based on playZ and stopZ positions
    // Each Lottie is active when camera z is at or past its playZ position
    // Lotties stop when camera moves past stopZ (if specified) or when camera moves back past playZ
    // Multiple Lotties can be active at the same time
    const newActiveIndices = new Set();
    
    // Check all Lotties to see which should be active
    for (let i = 0; i < this.config.length; i++) {
      const config = this.config[i];
      const index = config.index !== undefined ? config.index : i;
      
      // Check if this Lottie has a URL configured
      const url = config.url || config.lottie;
      if (url && url.trim() !== '') {
        const playZ = config.playZ !== undefined ? config.playZ : config.zindex;
        const stopZ = config.stopZ !== undefined ? config.stopZ : null;
        
        // Lottie is active when camera z is at or past playZ
        // If stopZ is specified, stop when camera moves past stopZ (cameraZ > stopZ)
        // If stopZ is not specified, play until end (never stop automatically)
        if (cameraZ <= playZ) {
          if (stopZ === null || stopZ === undefined) {
            // No stop position - play until end (always active once past playZ)
            newActiveIndices.add(index);
          } else {
            // Has stop position - only active between playZ and stopZ
            // Since we're moving forward (0 to negative), playZ is more positive than stopZ
            // So we need: cameraZ <= playZ AND cameraZ >= stopZ (or cameraZ <= stopZ if moving forward)
            // Actually, if playZ is -270 and stopZ is -280, we want active when cameraZ is between -270 and -280
            // Since we're moving forward (0 to -280), cameraZ will go from -270 to -280
            // So: cameraZ <= playZ (already checked) AND cameraZ >= stopZ
            if (cameraZ >= stopZ) {
              newActiveIndices.add(index);
            }
          }
        }
      }
    }
    
    // Show/hide Lotties based on new active state
    for (let i = 0; i < this.containers.length; i++) {
      const container = this.containers[i];
      const shouldBeActive = newActiveIndices.has(i);
      const isCurrentlyActive = this.activeIndices.has(i);
      
      // Prevent first Lottie (index 0) from auto-playing until user clicks button
      if (i === 0 && !this.allowFirstLottieAutoPlay) {
        // Skip auto-playing the first Lottie
        continue;
      }
      
      if (shouldBeActive && !isCurrentlyActive) {
        // Show and play this Lottie
        container.classList.add('active');
        if (this.lottieAnimations[i]) {
          this.lottieAnimations[i].goToAndPlay(0);
        }
        // Ensure SVG stretches to fill container
        this.ensureSVGStretch(container);
      } else if (!shouldBeActive && isCurrentlyActive) {
        // Hide and stop this Lottie (camera has moved past the z-index)
        container.classList.remove('active');
        if (this.lottieAnimations[i]) {
          this.lottieAnimations[i].stop();
        }
      }
    }
    
    // Handle end card and dashboard visibility at -330
    const endCardThreshold = -240;
    const endCard = document.querySelector('.end__card--autowasbon');
    const dashboardWrapper = document.querySelector('.dashboard__wrapper--off');
    
    if (cameraZ <= endCardThreshold) {
      // Show end card with fade-in
      if (endCard && !endCard.classList.contains('visible')) {
        endCard.classList.add('visible');
      }
      // Hide dashboard wrapper
      if (dashboardWrapper && !dashboardWrapper.classList.contains('hidden')) {
        dashboardWrapper.classList.add('hidden');
      }
    } else {
      // Hide end card
      if (endCard && endCard.classList.contains('visible')) {
        endCard.classList.remove('visible');
      }
      // Show dashboard wrapper
      if (dashboardWrapper && dashboardWrapper.classList.contains('hidden')) {
        dashboardWrapper.classList.remove('hidden');
      }
    }
    
    // Update active indices set
    this.activeIndices = newActiveIndices;
  }
  
  // Method to update configuration
  updateConfig(newConfig) {
    if (Array.isArray(newConfig) && newConfig.length <= 8) {
      // Clean up blob URLs from existing animations before clearing
      this.lottieAnimations.forEach((anim) => {
        if (anim && anim._blobUrls && Array.isArray(anim._blobUrls)) {
          anim._blobUrls.forEach((blobUrl) => {
            URL.revokeObjectURL(blobUrl);
          });
        }
      });
      
      // Convert to internal format if needed
      this.config = newConfig.map((c, index) => ({
        index: index,
        url: c.url || c.lottie,
        playZ: c.playZ !== undefined ? c.playZ : c.zindex,
        stopZ: c.stopZ !== undefined ? c.stopZ : null
      }));
      
      // Reload Lotties with new URLs (async)
      this.config.forEach((config) => {
        const index = config.index !== undefined ? config.index : this.config.indexOf(config);
        const url = config.url || config.lottie;
        if (url && url.trim() !== '') {
          this.loadLottie(index, url).catch(error => {
            console.error(`Failed to load Lottie ${index}:`, error);
          });
        }
      });
    }
  }
  
  /**
   * Reload configuration from checkpointConfig
   * Call this when checkpointConfig is updated
   */
  reloadConfig() {
    this.loadConfig();
    
    // Clean up blob URLs from existing animations before clearing
    this.lottieAnimations.forEach((anim) => {
      if (anim && anim._blobUrls && Array.isArray(anim._blobUrls)) {
        anim._blobUrls.forEach((blobUrl) => {
          URL.revokeObjectURL(blobUrl);
        });
      }
      // Destroy animation if it exists
      if (anim && typeof anim.destroy === 'function') {
        try {
          anim.destroy();
        } catch (e) {
          console.warn('Error destroying lottie animation:', e);
        }
      }
    });
    
    // Clear existing animations
    this.lottieAnimations = [];
    this.activeIndices.clear();
    
    // Reload all Lotties
    this.init();
  }
  
  // Method to get current configuration
  getConfig() {
    return this.config;
  }
}

// Export default instance (will be initialized in carwash-main.js)
export let lottieZIndexTrigger = null;
