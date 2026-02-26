/* ===== WASBON FORM COMPONENT ===== */
// Multi-step form for creating autowasbon (steps 1-4)

import { WENSEN, DEFAULT_PLACEHOLDER } from './wensen-config.js';

let splideInstance = null;

export class WasbonForm {
  constructor(onComplete, onStepChange = null, onThemeChange = null, onWensChange = null) {
    this.onComplete = onComplete;
    this.onStepChange = onStepChange;
    this.onThemeChange = onThemeChange;
    this.onWensChange = onWensChange;
    this.currentStep = 1;
    this.formData = {
      value: null,
      name: '',
      wens: '',
      theme: 'Power Sop' // Default to first theme in array
    };
    this.themes = ['Party Party', 'Sweet Flowers', 'Pop Sop', 'Power Sop', 'Feel Good', 'Soft Calm', 'Autowasbon'];
    // Map theme names to image filenames
    this.themeImages = {
      'Party Party': 'soap__party.png',
      'Sweet Flowers': 'soap__love.png',
      'Pop Sop': 'soap__pop.png',
      'Power Sop': 'soap__power.png',
      'Feel Good': 'soap__feelgood.png',
      'Soft Calm': 'soap__calm.png',
      'Autowasbon': 'soap__autowasbon.png'
    };
    this.currentThemeIndex = 3; // Track current carousel position (Power Sop is index 3)
    this.wensen = WENSEN;

    this.init();
  }
  
  init() {
    this.createFormHTML();
    this.populateWensOptions();
    this.attachEventListeners();
    this.initSplide();
    this.showStep(1);
  }

  /** Populate wasbon-wens-options from wensen config (used when form exists in HTML) */
  populateWensOptions() {
    const container = document.getElementById('wasbon-wens-options');
    if (!container || this.wensen.length === 0) return;

    container.innerHTML = this.wensen.map(wens => `
      <button class="wasbon-wens-btn shadow-lg/40" data-wens="${this.escapeHtml(wens.name)}" data-wens-key="${this.escapeHtml(wens.key)}" data-wens-index="${this.wensen.indexOf(wens)}">
        <img src="${this.escapeHtml(wens.thumbnail)}" alt="${this.escapeHtml(wens.alt)}" class="wasbon-wens-image">
      </button>
    `).join('');
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  
  initSplide() {
    // Wait for Splide to be available
    if (typeof Splide === 'undefined') {
      // Load Splide CSS and JS if not already loaded
      this.loadSplide().then(() => {
        this.setupSplide();
      });
    } else {
      this.setupSplide();
    }
  }
  
  loadSplide() {
    return new Promise((resolve) => {
      // Check if already loaded
      if (document.querySelector('link[href*="splide"]') && typeof Splide !== 'undefined') {
        resolve();
        return;
      }
      
      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
      document.head.appendChild(link);
      
      // Load JS
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
      script.onload = resolve;
      document.body.appendChild(script);
    });
  }
  
  setupSplide() {
    const splideEl = document.getElementById('wasbon-theme-splide');
    if (!splideEl || typeof Splide === 'undefined') return;
    
    // Destroy existing instance if any
    if (splideInstance) {
      splideInstance.destroy();
    }
    
    splideInstance = new Splide('#wasbon-theme-splide', {
      type: 'loop',
      focus: 'center',
      perPage: 3,
      gap: '20px',
      padding: { left: '20%', right: '20%' },
      arrows: true,
      pagination: false,
      trimSpace: false,
      updateOnMove: true,
      breakpoints: {
        768: {
          perPage: 1,
          padding: { left: '10%', right: '10%' },
        }
      }
    });
    
    // Handle theme change on move (fires before slide moves)
    splideInstance.on('move', (newIndex, prevIndex) => {
      // Get the actual index (accounting for loop mode)
      const actualIndex = splideInstance.Components.Slides.getAt(newIndex)?.index ?? newIndex;
      this.currentThemeIndex = actualIndex;
      const theme = this.themes[actualIndex];
      this.formData.theme = theme;
      this.updateNextButton();
      
      // Update active class
      document.querySelectorAll('.wasbon-theme-carousel-item').forEach((item, index) => {
        item.classList.toggle('active', index === actualIndex);
      });
      
      // Notify theme change immediately (at same time as arrow click)
      if (this.onThemeChange) {
        this.onThemeChange(theme);
      }
    });
    
    // Also handle moved event to sync state
    splideInstance.on('moved', (newIndex) => {
      const actualIndex = splideInstance.Components.Slides.getAt(newIndex)?.index ?? newIndex;
      this.currentThemeIndex = actualIndex;
      const theme = this.themes[actualIndex];
      this.formData.theme = theme;
      this.updateNextButton();
      
      // Update active class
      document.querySelectorAll('.wasbon-theme-carousel-item').forEach((item, index) => {
        item.classList.toggle('active', index === actualIndex);
      });
    });
    
    splideInstance.mount();
    
    // Intercept arrow clicks to trigger theme change immediately
    setTimeout(() => {
      const prevArrow = splideEl.querySelector('.splide__arrow--prev');
      const nextArrow = splideEl.querySelector('.splide__arrow--next');
      
      if (prevArrow) {
        prevArrow.addEventListener('click', (e) => {
          // Get current slide index
          const currentSlide = splideInstance.Components.Slides.getAt(splideInstance.index);
          const currentIndex = currentSlide?.index ?? splideInstance.index;
          
          // Calculate previous index
          const newIndex = (currentIndex - 1 + this.themes.length) % this.themes.length;
          const theme = this.themes[newIndex];
          
          // Trigger theme change immediately on arrow click (before slide moves)
          if (this.onThemeChange) {
            this.onThemeChange(theme);
          }
        }, true); // Use capture phase to fire before Splide's handler
      }
      
      if (nextArrow) {
        nextArrow.addEventListener('click', (e) => {
          // Get current slide index
          const currentSlide = splideInstance.Components.Slides.getAt(splideInstance.index);
          const currentIndex = currentSlide?.index ?? splideInstance.index;
          
          // Calculate next index
          const newIndex = (currentIndex + 1) % this.themes.length;
          const theme = this.themes[newIndex];
          
          // Trigger theme change immediately on arrow click (before slide moves)
          if (this.onThemeChange) {
            this.onThemeChange(theme);
          }
        }, true); // Use capture phase to fire before Splide's handler
      }
    }, 100);
    
    // Set initial slide
    if (this.currentThemeIndex >= 0) {
      splideInstance.go(this.currentThemeIndex);
    }
  }
  
  createFormHTML() {
    // Check if form already exists in HTML
    let formContainer = document.getElementById('wasbon-form-container');
    
    if (!formContainer) {
      // If form doesn't exist, create it dynamically (fallback)
      formContainer = document.createElement('div');
      formContainer.id = 'wasbon-form-container';
      formContainer.innerHTML = `
        <div class="wasbon-form-overlay" id="wasbon-form-overlay">
          <div class="wasbon-form-dialog">
            <div class="wasbon-form-content">
              <!-- Step 1: Value -->
              <div class="wasbon-step-content" id="step-1" data-step="1">
                <div class="wasbon-step-content-inner">
                  <h3>Kies een waarde</h3>
                  <div class="wasbon-value-options">
                    <button class="wasbon-value-btn" data-value="7.5">€7,50</button>
                    <button class="wasbon-value-btn" data-value="10">€10</button>
                    <button class="wasbon-value-btn" data-value="15">€15</button>
                  </div>
                </div>
              </div>
              
              <!-- Step 2: Name -->
              <div class="wasbon-step-content" id="step-2" data-step="2" style="display: none;">
                <div class="wasbon-step-content-inner">
                  <h3>Voer een naam in</h3>
                  <input type="text" 
                         id="wasbon-name-input" 
                         class="wasbon-input" 
                         placeholder="Naam van de ontvanger"
                         maxlength="50">
                  <p class="wasbon-hint">Vul de naam in van degene die de autowasbon ontvangt</p>
                </div>
              </div>
              
              <!-- Step 3: Wens -->
              <div class="wasbon-step-content" id="step-3" data-step="3" style="display: none;">
                <div class="wasbon-step-content-inner">
                  <h3>Kies een wens</h3>
                  <div class="wasbon-wens-options" id="wasbon-wens-options">
                    ${this.wensen.map((w, i) => `
                      <button class="wasbon-wens-btn" data-wens="${w.name}" data-wens-key="${w.key}" data-wens-index="${i}">
                        <img src="${w.thumbnail}" alt="${w.alt}" class="wasbon-wens-image">
                      </button>
                    `).join('')}
                  </div>
                </div>
              </div>
              
              <!-- Step 4: Theme/Soap -->
              <div class="wasbon-step-content" id="step-4" data-step="4" style="display: none;">
                <div class="wasbon-step-content-inner">
                  <h3>Kies een thema/zeep</h3>
                  <div class="wasbon-theme-carousel">
                    <div class="splide" id="wasbon-theme-splide">
                      <div class="splide__track">
                        <ul class="splide__list">
                          ${this.themes.map((theme, index) => `
                            <li class="splide__slide">
                              <div class="wasbon-theme-carousel-item ${index === this.currentThemeIndex ? 'active' : ''}" data-theme="${theme}" data-index="${index}">
                                <button class="wasbon-theme-btn-carousel" data-theme="${theme}">
                                  <div class="wasbon-theme-image-wrapper">
                                    <img src="_assets/_style/_images/_soap/${this.themeImages[theme]}" alt="${theme}" class="wasbon-theme-image">
                                  </div>
                                  <span class="wasbon-theme-name">${theme}</span>
                                </button>
                              </div>
                            </li>
                          `).join('')}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="wasbon-form-footer">
              <button class="wasbon-btn wasbon-btn-secondary" id="wasbon-btn-prev" style="display: none;">Vorige</button>
              <button class="wasbon-btn wasbon-btn-primary" id="wasbon-btn-next">Volgende</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(formContainer);
    } else {
      // Form exists in HTML, ensure active class is set correctly on theme carousel
      const activeItem = formContainer.querySelector(`.wasbon-theme-carousel-item[data-index="${this.currentThemeIndex}"]`);
      if (activeItem) {
        // Remove active class from all items
        formContainer.querySelectorAll('.wasbon-theme-carousel-item').forEach(item => {
          item.classList.remove('active');
        });
        // Add active class to current theme
        activeItem.classList.add('active');
      }
    }
  }
  
  attachEventListeners() {
    // Value buttons - auto-advance to next step on click
    document.querySelectorAll('.wasbon-value-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.wasbon-value-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.formData.value = parseFloat(btn.dataset.value);
        
        // Automatically proceed to next step
        if (this.currentStep === 1) {
          setTimeout(() => {
            this.nextStep();
          }, 300); // Small delay for visual feedback
        }
      });
    });
    
    // Name input
    const nameInput = document.getElementById('wasbon-name-input');
    if (nameInput) {
      nameInput.addEventListener('input', (e) => {
        this.formData.name = e.target.value.trim();
        this.updateNextButton();
      });
    }
    
    // Wens buttons - auto-advance to next step on click, update message textarea placeholder, trigger Lottie update
    document.querySelectorAll('.wasbon-wens-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.wasbon-wens-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.formData.wens = btn.dataset.wens;
        const wensKey = btn.dataset.wensKey;
        const wensIndex = parseInt(btn.dataset.wensIndex, 10);
        const wens = !isNaN(wensIndex) && this.wensen[wensIndex] ? this.wensen[wensIndex] : this.wensen.find(w => w.key === wensKey);

        if (wens) {
          this.formData.wensPlaceholder = wens.placeholder ?? DEFAULT_PLACEHOLDER;
          const messageTextarea = document.getElementById('wasbon-message-textarea');
          if (messageTextarea) {
            messageTextarea.placeholder = wens.placeholder ?? DEFAULT_PLACEHOLDER;
          }
          // Notify to update user__wens Lottie
          if (this.onWensChange) {
            this.onWensChange(wens);
          }
        }

        // Automatically proceed to next step (soap slider)
        if (this.currentStep === 3) {
          setTimeout(() => {
            this.nextStep();
          }, 300); // Small delay for visual feedback
        }
      });
    });
    
    // Theme carousel: whole slide (and button) clickable to change soap
    document.querySelectorAll('.wasbon-theme-carousel-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const theme = item.dataset.theme;
        const index = parseInt(item.dataset.index, 10);
        if (theme == null || isNaN(index)) return;

        // Trigger theme change immediately
        if (this.onThemeChange) {
          this.onThemeChange(theme);
        }

        // Move Splide to this index
        if (splideInstance) {
          splideInstance.go(index);
        }
      });
    });
    
    // Navigation buttons
    const prevBtn = document.getElementById('wasbon-btn-prev');
    const nextBtn = document.getElementById('wasbon-btn-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.previousStep());
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextStep());
    }

    const nextStep2Btn = document.getElementById('wasbon-btn-next-step2');
    if (nextStep2Btn) {
      nextStep2Btn.addEventListener('click', () => this.nextStep());
    }
  }
  
  showStep(step) {
    // Hide all steps
    document.querySelectorAll('.wasbon-step-content').forEach(content => {
      content.style.display = 'none';
    });
    
    // Show current step
    const currentStepContent = document.getElementById(`step-${step}`);
    if (currentStepContent) {
      currentStepContent.style.display = 'block';
    }
    
    // Update current step
    this.currentStep = step;
    
    // Notify step change callback
    if (this.onStepChange) {
      this.onStepChange(step);
    }
    
    // Update progress
    const progressFill = document.getElementById('wasbon-progress-fill');
    if (progressFill) {
      progressFill.style.width = `${(step / 4) * 100}%`;
    }
    
    // Update step indicators
    document.querySelectorAll('.wasbon-step').forEach((stepEl, index) => {
      if (index + 1 <= step) {
        stepEl.classList.add('active');
      } else {
        stepEl.classList.remove('active');
      }
    });
    
    // Update navigation buttons
    const prevBtn = document.getElementById('wasbon-btn-prev');
    const nextBtn = document.getElementById('wasbon-btn-next');
    
    // Hide "Vorige" button
    if (prevBtn) {
      prevBtn.style.display = 'none';
    }
    
    // Show "Volgende" button - for step 2 use only the one under the name input (wasbon-btn-next-step2)
    if (nextBtn) {
      if (step === 2) {
        nextBtn.style.display = 'none'; // Hide footer; step 2 has its own Volgende under the input
      } else if (step === 4) {
        nextBtn.style.display = 'flex';
        nextBtn.innerHTML = 'Voeg toe <i class="fa-sharp fa-solid fa-arrow-right fa-sm"></i>';
      } else {
        nextBtn.style.display = 'none';
      }
    }
    
    // Show/hide background clouds for soap step (step 4)
    const bgClouds = document.getElementById('bg-clouds-soap');
    if (bgClouds) {
      bgClouds.style.display = step === 4 ? 'block' : 'none';
    }
    
    this.updateNextButton();
    
    // If showing step 4 (theme selection), reinitialize Splide
    if (step === 4) {
      setTimeout(() => {
        if (typeof Splide !== 'undefined') {
          this.setupSplide();
        } else {
          this.initSplide();
        }
      }, 100);
    }
  }
  
  updateNextButton() {
    const nextBtn = document.getElementById('wasbon-btn-next');
    if (!nextBtn) return;
    
    let canProceed = false;
    
    switch (this.currentStep) {
      case 1:
        canProceed = this.formData.value !== null;
        break;
      case 2:
        canProceed = this.formData.name.length > 0;
        break;
      case 3:
        canProceed = this.formData.wens.length > 0;
        break;
      case 4:
        canProceed = this.formData.theme !== null;
        break;
    }
    
    nextBtn.disabled = !canProceed;
    nextBtn.classList.toggle('disabled', !canProceed);
  }
  
  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
      this.showStep(this.currentStep);
    } else {
      // Complete form
      this.complete();
    }
  }
  
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.showStep(this.currentStep);
    }
  }
  
  complete() {
    // Hide form
    const overlay = document.getElementById('wasbon-form-overlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
    
    // Call completion callback
    if (this.onComplete) {
      this.onComplete(this.formData);
    }
  }
  
  show() {
    const overlay = document.getElementById('wasbon-form-overlay');
    if (overlay) {
      overlay.style.display = 'flex';
    }
  }
  
  hide() {
    const overlay = document.getElementById('wasbon-form-overlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
  }
  
  getFormData() {
    return { ...this.formData };
  }
  
}
