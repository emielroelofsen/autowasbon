/* ===== SCENE SETUP ===== */
import * as THREE from 'three';
import { MobileOptimizer } from './mobile-optimizer.js';

export class SceneSetup {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.card = null;
    this.mobileOptimizer = null;
    this.lights = {
      ambient: null,
      directional1: null,
      directional2: null,
      directional3: null
    };
    
    this.init();
  }
  
  init() {
    this.card = document.querySelector('.card');
    
    // Initialize mobile optimizer
    this.mobileOptimizer = new MobileOptimizer();
    
    // Get optimized renderer options
    const rendererOptions = this.mobileOptimizer.getRendererOptions();
    
    // Create renderer with mobile optimizations
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvas, 
      antialias: rendererOptions.antialias, 
      alpha: rendererOptions.alpha,
      powerPreference: rendererOptions.powerPreference,
      precision: rendererOptions.precision
    });
    
    // Apply mobile optimizations to renderer
    this.mobileOptimizer.optimizeRenderer(this.renderer);
    
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    
    // Shadows always disabled - not used in this project
    this.renderer.shadowMap.enabled = false;
    
    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = null;
    
    // Add lighting
    this.setupLighting();
    
    // Create camera
    this.setupCamera();
    
    // Setup resize handler
    this.setupResize();
  }
  
  setupLighting() {
    // Ambient light - increased for better base illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    this.lights.ambient = ambientLight;

    // const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.2 );
    // hemiLight.color.setHex( 0xFFFFFF ); // Blue (sky)
    // hemiLight.groundColor.setHex( 0xFFFFFF ); // Green (ground)
    // hemiLight.position.set( 0, 50, 0 );
    // this.scene.add( hemiLight );
    // this.lights.hemiLight = hemiLight;
    
    // Main directional light - increased intensity
    // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    // directionalLight.position.set(5, 5, 5);
    // //directionalLight.castShadow = false;
    // this.scene.add(directionalLight);
    // this.lights.directional1 = directionalLight;
    
    // // Fill light - increased for better fill
    // const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    // directionalLight2.position.set(-5, 5, -5);
    // this.scene.add(directionalLight2);
    // this.lights.directional2 = directionalLight2;
    
    // // Top light - increased for better top illumination
    // const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.4);
    // directionalLight3.position.set(0, 10, 0);
    // this.scene.add(directionalLight3);
    // this.lights.directional3 = directionalLight3;

    // Add lighting to the scene
// Reduced lighting intensities to match Spline's appearance
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Lower ambient light
// this.scene.add(ambientLight);

// // Main directional light - reduced intensity
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7); // Reduced intensity
// directionalLight.position.set(5, 10, 5); // Position the light
// directionalLight.castShadow = true; // Optional: enable shadows if needed
// this.scene.add(directionalLight);

// // Fill light from the opposite side - reduced intensity
// const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3); // Reduced fill light
// directionalLight2.position.set(-5, 5, -5);
// this.scene.add(directionalLight2);

// // Add a light from above for top-down illumination - reduced intensity
// const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.2);
// directionalLight3.position.set(0, 10, 0);
// this.scene.add(directionalLight3);


// Add lighting to the scene - reduced intensity
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Reduced ambient light
// this.scene.add(ambientLight);

// // Add directional light for shadows - reduced intensity
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Reduced from 1.0 to 0.5
// directionalLight.position.set(5, 10, 5);
// directionalLight.castShadow = true;
// directionalLight.shadow.mapSize.width = 2048;
// directionalLight.shadow.mapSize.height = 2048;
// directionalLight.shadow.camera.near = 0.5;
// directionalLight.shadow.camera.far = 500;
// directionalLight.shadow.camera.left = -50;
// directionalLight.shadow.camera.right = 50;
// directionalLight.shadow.camera.top = 50;
// directionalLight.shadow.camera.bottom = -50;
// this.scene.add(directionalLight);
// this.lights.directional1 = directionalLight;

// Main directional light - reduced intensity
// const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Reduced intensity
// directionalLight.position.set(5, 10, 5); // Position the light
// directionalLight.castShadow = false; // Optional: enable shadows if needed
// this.scene.add(directionalLight);

// // Fill light from the opposite side - reduced intensity
// const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3); // Reduced fill light
// directionalLight2.position.set(-5, 5, -5);
// directionalLight2.castShadow = false;
// this.scene.add(directionalLight2);

// // Add a light from above for top-down illumination - reduced intensity
// const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.2);
// directionalLight3.position.set(0, 10, 0);
// directionalLight3.castShadow = false;
// this.scene.add(directionalLight3);


  }
  
  getLights() {
    return this.lights;
  }
  
  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(
      90,
      this.card.clientWidth / this.card.clientHeight,
      0.1,
      2000
    );
    
    // Camera starting positions (keeping original settings)
    this.introStartZ = this.mobileOptimizer && this.mobileOptimizer.getIsMobile() ? -10 : -28;
    // Set normalStartZ to 20 for mobile, 0 for desktop
    this.normalStartZ = this.mobileOptimizer && this.mobileOptimizer.getIsMobile() ? -10 : -28;
    this.startY = 8;
    this.endY = 8;
    this.defaultCameraRotationX = 0;
    
    this.camera.position.set(0, this.startY, this.introStartZ);
  }
  
  setupResize() {
    window.addEventListener('resize', () => this.resize());
    this.resize();
  }
  
  resize() {
    if (!this.card || !this.renderer || !this.camera) return;
    
    const w = this.card.clientWidth;
    const h = this.card.clientHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
  
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  
  getScene() {
    return this.scene;
  }
  
  getCamera() {
    return this.camera;
  }
  
  getRenderer() {
    return this.renderer;
  }
  
  getMobileOptimizer() {
    return this.mobileOptimizer;
  }
}
