/* ===== MOBILE OPTIMIZER ===== */
/**
 * Mobile optimizer for Three.js applications
 * Automatically detects mobile devices and applies performance optimizations
 */
export class MobileOptimizer {
  constructor() {
    this.isMobile = this.detectMobile();
    this.isLowEnd = false;
    
    // Get THREE from global scope (will be available when module loads)
    const THREE = window.THREE || globalThis.THREE;
    
    // Shadow map types (use string keys that will be resolved later)
    this.shadowMapTypes = {
      basic: THREE ? THREE.BasicShadowMap : 0,
      pcf: THREE ? THREE.PCFSoftShadowMap : 1
    };
    
    // DISABLED: Mobile optimizations are disabled, but mobile detection is kept for camera position
    // All optimizations use desktop settings regardless of device
    this.optimizations = {
      pixelRatio: window.devicePixelRatio, // Use full pixel ratio
      antialias: true, // Enable antialiasing
      shadowMapSize: 2048, // Full shadow map size
      shadowMapType: THREE ? THREE.PCFSoftShadowMap : 1, // High quality shadows
      textureQuality: 1.0, // Full texture quality
      lottieFPS: 60, // Full FPS
      enableShadows: false, // Shadows always disabled - not used in this project
      maxTextureSize: 4096 // Full texture size
    };
    
    // Detect low-end devices (but don't apply optimizations)
    this.detectLowEnd();
    
    // Low-end optimizations disabled - keep desktop settings
    
    // Mobile optimizer initialized
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
  
  /**
   * Detect low-end devices based on hardware concurrency and memory
   */
  detectLowEnd() {
    // Check hardware concurrency (CPU cores)
    const cores = navigator.hardwareConcurrency || 4;
    
    // Check device memory (if available)
    const memory = navigator.deviceMemory || 4;
    
    // Check if it's a mobile device with limited resources
    if (this.isMobile) {
      // Low-end if: less than 4 cores OR less than 4GB RAM
      this.isLowEnd = cores < 4 || memory < 4;
    }
    
    // Additional check: very small screen might indicate older device
    if (window.innerWidth < 375) {
      this.isLowEnd = true;
    }
  }
  
  /**
   * Apply optimizations to a Three.js renderer
   * DISABLED: No optimizations applied, but method kept for compatibility
   */
  optimizeRenderer(renderer) {
    if (!renderer) return;
    
    // Get THREE from global scope to ensure shadow map types are correct
    const THREE = window.THREE || globalThis.THREE;
    
    // Set pixel ratio (use desktop settings)
    renderer.setPixelRatio(this.optimizations.pixelRatio);
    
    // Shadow map settings - shadows always disabled (not used in this project)
    if (renderer.shadowMap) {
      renderer.shadowMap.enabled = false; // Always disabled
      // Shadow map type doesn't matter since shadows are disabled
      if (THREE) {
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      } else {
        renderer.shadowMap.type = this.optimizations.shadowMapType;
      }
    }
    
    // Renderer optimized (with desktop settings)
  }
  
  /**
   * Optimize texture loading
   */
  optimizeTexture(texture) {
    if (!texture) return texture;
    
    // Get THREE from global scope
    const THREE = window.THREE || globalThis.THREE;
    if (!THREE) return texture;
    
    // Reduce texture quality on mobile
    if (this.isMobile && texture.image) {
      // Scale down texture if it's too large
      const maxSize = this.optimizations.maxTextureSize;
      if (texture.image.width > maxSize || texture.image.height > maxSize) {
        // Note: Actual resizing would require canvas manipulation
        // This is a placeholder for texture optimization logic
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false; // Disable mipmaps for better performance
      }
    }
    
    return texture;
  }
  
  /**
   * Get optimized renderer options
   * DISABLED: Returns desktop settings regardless of device
   */
  getRendererOptions() {
    return {
      antialias: this.optimizations.antialias, // true (desktop setting)
      alpha: true,
      powerPreference: 'high-performance', // Always high performance
      precision: 'highp' // Always high precision
    };
  }
  
  /**
   * Get optimized shadow map size
   */
  getShadowMapSize() {
    return this.optimizations.shadowMapSize;
  }
  
  /**
   * Get optimized pixel ratio
   */
  getPixelRatio() {
    return this.optimizations.pixelRatio;
  }
  
  /**
   * Get optimized Lottie FPS
   */
  getLottieFPS() {
    return this.optimizations.lottieFPS;
  }
  
  /**
   * Get texture quality multiplier
   */
  getTextureQuality() {
    return this.optimizations.textureQuality;
  }
  
  /**
   * Check if device is mobile
   */
  getIsMobile() {
    return this.isMobile;
  }
  
  /**
   * Check if device is low-end
   */
  getIsLowEnd() {
    return this.isLowEnd;
  }
  
  /**
   * Apply frame rate limiting for animations (throttle updates)
   * DISABLED: Always uses 60 FPS regardless of device
   */
  createThrottledUpdate(callback, targetFPS = null) {
    if (!targetFPS) {
      targetFPS = 60; // Always use 60 FPS (desktop setting)
    }
    
    const interval = 1000 / targetFPS;
    let lastTime = 0;
    
    return (currentTime) => {
      if (currentTime - lastTime >= interval) {
        callback();
        lastTime = currentTime;
      }
    };
  }
  
  /**
   * Optimize geometry (reduce complexity if needed)
   */
  optimizeGeometry(geometry) {
    if (!geometry || !this.isLowEnd) return geometry;
    
    // For low-end devices, we could simplify geometry here
    // This is a placeholder - actual simplification would use BufferGeometryUtils
    // or similar tools
    
    return geometry;
  }
  
  /**
   * Get all optimization settings
   */
  getOptimizations() {
    return { ...this.optimizations };
  }
}

// THREE.js will be available globally when the module loads
// The MobileOptimizer handles cases where THREE might not be loaded yet
