/**
 * Lottie Mask Implementation
 * 
 * Loads a .lottie file (zip archive), extracts the animation JSON,
 * renders it as SVG using lottie-web, and creates an SVG mask
 * that can be used with CSS backdrop-filter for live blur effects.
 * 
 * Mask behavior: White/opaque areas in the Lottie = visible (blur shows through)
 *                Black/transparent areas = masked out (no blur)
 */
import lottie from 'lottie-web';
import JSZip from 'jszip';

/**
 * Loads a .lottie file (zip archive) and extracts the animation JSON
 * @param {string} url - URL to the .lottie file
 * @returns {Promise<Object>} Parsed Lottie animation JSON
 */
async function loadDotLottieAsJson(url) {
  try {
    // Fetch the .lottie file as ArrayBuffer
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch .lottie file: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    
    // Load the zip file using JSZip
    const zip = await JSZip.loadAsync(arrayBuffer);
    
    // Read manifest.json to find the animation file
    let animationJson = null;
    
    if (zip.files['manifest.json']) {
      const manifestContent = await zip.files['manifest.json'].async('string');
      const manifest = JSON.parse(manifestContent);
      
      // Get the first animation from the manifest
      if (manifest.animations && manifest.animations.length > 0) {
        const firstAnim = manifest.animations[0];
        const animPath = firstAnim.id || `animations/${firstAnim.id || 'animation'}.json`;
        
        // Try to find the animation file
        if (zip.files[animPath]) {
          const animContent = await zip.files[animPath].async('string');
          animationJson = JSON.parse(animContent);
        } else {
          // Fallback: try common paths
          const fallbackPaths = [
            `animations/${firstAnim.id}.json`,
            `animations/animation.json`,
            `${firstAnim.id}.json`,
            'animation.json'
          ];
          
          for (const path of fallbackPaths) {
            if (zip.files[path]) {
              const animContent = await zip.files[path].async('string');
              animationJson = JSON.parse(animContent);
              break;
            }
          }
        }
      }
    }
    
    // Fallback: look for any .json file in the animations folder
    if (!animationJson) {
      for (const fileName in zip.files) {
        if (fileName.includes('animations/') && fileName.endsWith('.json')) {
          const animContent = await zip.files[fileName].async('string');
          animationJson = JSON.parse(animContent);
          break;
        }
      }
    }
    
    // Last resort: find any .json file
    if (!animationJson) {
      for (const fileName in zip.files) {
        if (fileName.endsWith('.json') && fileName !== 'manifest.json') {
          const animContent = await zip.files[fileName].async('string');
          const parsed = JSON.parse(animContent);
          // Check if it looks like a Lottie animation (has 'v' and 'fr' properties)
          if (parsed.v && parsed.fr) {
            animationJson = parsed;
            break;
          }
        }
      }
    }
    
    if (!animationJson) {
      throw new Error('Could not find animation JSON in .lottie file');
    }
    
    return animationJson;
  } catch (error) {
    console.error('Error loading .lottie file:', error);
    throw error;
  }
}

/**
 * Initializes a Lottie animation as a live mask for backdrop-filter blur
 * @param {Object} options - Configuration options
 * @param {string} options.targetId - ID of the target element to apply the mask to
 * @param {string} options.lottieUrl - URL to the .lottie file
 * @param {string} [options.maskId='windowFrameMask'] - ID for the SVG mask element
 * @returns {Promise<void>}
 */
export async function initWindowFrameLottieMask({ 
  targetId = 'window_frame', 
  lottieUrl,
  maskId = 'windowFrameMask' 
}) {
  if (!lottieUrl) {
    throw new Error('lottieUrl is required');
  }
  
  const targetElement = document.getElementById(targetId);
  if (!targetElement) {
    throw new Error(`Target element with id "${targetId}" not found`);
  }
  
  // Check for backdrop-filter support
  const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(1px)') || 
                                  CSS.supports('-webkit-backdrop-filter', 'blur(1px)');
  
  if (!supportsBackdropFilter) {
    console.warn('backdrop-filter not supported, using fallback');
    // Fallback: semi-transparent overlay
    targetElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    return;
  }
  
  try {
    // Load the Lottie animation JSON
    const animationData = await loadDotLottieAsJson(lottieUrl);
    
    // Create a hidden container for the Lottie SVG renderer
    const lottieContainer = document.createElement('div');
    lottieContainer.style.position = 'absolute';
    lottieContainer.style.width = '0';
    lottieContainer.style.height = '0';
    lottieContainer.style.overflow = 'hidden';
    lottieContainer.style.opacity = '0';
    lottieContainer.style.pointerEvents = 'none';
    lottieContainer.id = 'lottieMaskContainer';
    document.body.appendChild(lottieContainer);
    
    // Create SVG element for mask
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.style.position = 'absolute';
    svg.style.overflow = 'hidden';
    svg.setAttribute('aria-hidden', 'true');
    
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    mask.setAttribute('id', maskId);
    // Use objectBoundingBox for mask positioning (0-1 relative to element)
    mask.setAttribute('maskUnits', 'objectBoundingBox');
    // Use userSpaceOnUse for content so we can use pixel-based viewBox
    mask.setAttribute('maskContentUnits', 'userSpaceOnUse');
    
    // Create a group inside the mask to hold the Lottie SVG content
    const maskGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    maskGroup.setAttribute('id', `${maskId}Group`);
    
    // Add a black background to the mask (black = transparent in mask, white = visible)
    // This covers the entire target element area
    const bgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bgRect.setAttribute('x', '0');
    bgRect.setAttribute('y', '0');
    bgRect.setAttribute('width', '100%');
    bgRect.setAttribute('height', '100%');
    bgRect.setAttribute('fill', 'black');
    mask.appendChild(bgRect);
    mask.appendChild(maskGroup);
    
    defs.appendChild(mask);
    svg.appendChild(defs);
    document.body.appendChild(svg);
    
    // Initialize Lottie with SVG renderer
    const anim = lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });
    
    // Wait for the animation to be ready
    await new Promise((resolve) => {
      if (anim.isLoaded) {
        resolve();
      } else {
        anim.addEventListener('DOMLoaded', resolve);
      }
    });
    
    // Get the SVG element created by Lottie
    const lottieSvg = lottieContainer.querySelector('svg');
    if (!lottieSvg) {
      throw new Error('Lottie SVG not found after rendering');
    }
    
    // Get the Lottie content group (the main <g> element containing the animation)
    const lottieContent = lottieSvg.querySelector('g');
    if (!lottieContent) {
      throw new Error('Lottie content group not found');
    }
    
    // Set up viewBox and preserveAspectRatio to match target element
    const animWidth = animationData.w || 1920;
    const animHeight = animationData.h || 1080;
    
    // Get target element dimensions for proper scaling
    const targetRect = targetElement.getBoundingClientRect();
    const targetWidth = targetRect.width || animWidth;
    const targetHeight = targetRect.height || animHeight;
    
    // Create a wrapper SVG for proper scaling inside the mask
    // Since maskContentUnits is userSpaceOnUse, we use actual pixel dimensions
    const maskSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    maskSvg.setAttribute('viewBox', `0 0 ${animWidth} ${animHeight}`);
    maskSvg.setAttribute('preserveAspectRatio', 'none');
    maskSvg.setAttribute('width', targetWidth);
    maskSvg.setAttribute('height', targetHeight);
    maskSvg.setAttribute('x', '0');
    maskSvg.setAttribute('y', '0');
    
    // Create a group to hold the cloned content
    const maskContentGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    maskSvg.appendChild(maskContentGroup);
    maskGroup.appendChild(maskSvg);
    
    /**
     * Clones the Lottie content and converts all colors to white for the mask
     * In SVG masks: white = visible (opaque), black = transparent
     */
    const syncMaskContent = () => {
      // Remove existing content
      while (maskContentGroup.firstChild) {
        maskContentGroup.removeChild(maskContentGroup.firstChild);
      }
      
      // Clone the current Lottie content
      const clonedContent = lottieContent.cloneNode(true);
      
      // Convert all fills and strokes to white
      // This ensures the mask shows white where the Lottie has content
      const convertToWhite = (element) => {
        if (element.hasAttribute('fill') && element.getAttribute('fill') !== 'none') {
          element.setAttribute('fill', 'white');
        }
        if (element.hasAttribute('stroke') && element.getAttribute('stroke') !== 'none') {
          element.setAttribute('stroke', 'white');
        }
        // Recursively process children
        Array.from(element.children).forEach(convertToWhite);
      };
      
      convertToWhite(clonedContent);
      
      maskContentGroup.appendChild(clonedContent);
    };
    
    // Initial sync
   // syncMaskContent();
    
    // Use MutationObserver to detect when Lottie updates the DOM
    // This is more efficient than checking every frame
    const observer = new MutationObserver(() => {
      //syncMaskContent();
    });
    
    observer.observe(lottieContent, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['d', 'transform', 'opacity', 'fill', 'stroke', 'x', 'y', 'width', 'height', 'cx', 'cy', 'r', 'rx', 'ry', 'points']
    });
    
    // Also sync on animation frame updates as a backup
    // Some Lottie updates might not trigger mutations (e.g., CSS transforms)
    let lastFrame = -1;
    const frameSync = () => {
      const currentFrame = Math.floor(anim.currentFrame);
      if (currentFrame !== lastFrame) {
        lastFrame = currentFrame;
        syncMaskContent();
      }
      requestAnimationFrame(frameSync);
    };
    requestAnimationFrame(frameSync);
    
    // Apply the mask to the target element
    targetElement.style.maskImage = `url(#${maskId})`;
    targetElement.style.webkitMaskImage = `url(#${maskId})`;
    targetElement.style.mask = `url(#${maskId})`;
    targetElement.style.webkitMask = `url(#${maskId})`;
    targetElement.style.maskSize = '100% 100%';
    targetElement.style.webkitMaskSize = '100% 100%';
    targetElement.style.maskRepeat = 'no-repeat';
    targetElement.style.webkitMaskRepeat = 'no-repeat';
    targetElement.style.maskPosition = 'center';
    targetElement.style.webkitMaskPosition = 'center';
    
    // Ensure backdrop-filter is applied
    targetElement.style.backdropFilter = 'blur(18px)';
    targetElement.style.webkitBackdropFilter = 'blur(18px)';
    
    // Required for backdrop-filter to render
    targetElement.style.background = 'rgba(255, 255, 255, 0.001)';
    
    // Handle resize to keep mask in sync with target element size
    const resizeObserver = new ResizeObserver(() => {
      const newRect = targetElement.getBoundingClientRect();
      const newWidth = newRect.width;
      const newHeight = newRect.height;
      
      if (maskSvg) {
        maskSvg.setAttribute('width', newWidth);
        maskSvg.setAttribute('height', newHeight);
      }
    });
    resizeObserver.observe(targetElement);
    
    console.log('Lottie mask initialized successfully');
    
    // Return cleanup function
    return () => {
      anim.destroy();
      observer.disconnect();
      resizeObserver.disconnect();
      if (lottieContainer.parentNode) {
        lottieContainer.parentNode.removeChild(lottieContainer);
      }
      if (svg.parentNode) {
        svg.parentNode.removeChild(svg);
      }
    };
    
  } catch (error) {
    console.error('Error initializing Lottie mask:', error);
    // Fallback: semi-transparent overlay
    targetElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    throw error;
  }
}
