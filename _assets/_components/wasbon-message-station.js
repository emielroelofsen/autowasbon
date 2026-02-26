/* ===== WASBON MESSAGE STATION COMPONENT ===== */
// Component for personal message station (step 5)

export class WasbonMessageStation {
  constructor(onComplete, onAddMessage = null, onDoucheGordijnTextChange = null) {
    this.onComplete = onComplete;
    this.onAddMessage = onAddMessage;
    this.onDoucheGordijnTextChange = onDoucheGordijnTextChange;
    this.messageData = {
      message: '',
      media: null,
      mediaPreview: null
    };
    this.messageAdded = false; // Track if message has been added
    
    this.init();
  }
  
  init() {
    // Use existing HTML from step-5 instead of creating it
    this.attachEventListeners();
  }
  
  attachEventListeners() {
    // Message textarea
    const messageTextarea = document.getElementById('wasbon-message-textarea');
    const charCount = document.getElementById('wasbon-char-count');
    
    if (messageTextarea && charCount) {
      messageTextarea.addEventListener('input', (e) => {
        this.messageData.message = e.target.value;
        charCount.textContent = e.target.value.length;
        this.updateCompleteButton();
        // Trigger douche gordijn texture update when message changes
        if (this.onDoucheGordijnTextChange) {
          this.onDoucheGordijnTextChange(e.target.value);
        }
      });
    }
    
    // Media upload
    const uploadBtn = document.getElementById('wasbon-upload-btn');
    const mediaInput = document.getElementById('wasbon-media-input');
    const mediaPreview = document.getElementById('wasbon-media-preview');
    const mediaPreviewImg = document.getElementById('wasbon-media-preview-img');
    const removeMediaBtn = document.getElementById('wasbon-remove-media');
    
    if (uploadBtn && mediaInput) {
      uploadBtn.addEventListener('click', () => {
        mediaInput.click();
      });
    }
    
    if (mediaInput) {
      mediaInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          // Validate file type
          if (!file.type.startsWith('image/')) {
            alert('Alleen afbeeldingen zijn toegestaan');
            return;
          }
          
          // Validate file size (max 5MB)
          if (file.size > 5 * 1024 * 1024) {
            alert('Bestand is te groot. Maximum grootte is 5MB');
            return;
          }
          
          // Create preview
          const reader = new FileReader();
          reader.onload = (event) => {
            this.messageData.media = file;
            this.messageData.mediaPreview = event.target.result;
            
            if (mediaPreviewImg) {
              mediaPreviewImg.src = event.target.result;
            }
            if (mediaPreview) {
              mediaPreview.style.display = 'block';
            }
            if (uploadBtn) {
              uploadBtn.style.display = 'none';
            }
            
            this.updateCompleteButton();
          };
          reader.readAsDataURL(file);
        }
      });
    }
    
    if (removeMediaBtn) {
      removeMediaBtn.addEventListener('click', () => {
        this.messageData.media = null;
        this.messageData.mediaPreview = null;
        
        if (mediaInput) {
          mediaInput.value = '';
        }
        if (mediaPreview) {
          mediaPreview.style.display = 'none';
        }
        if (uploadBtn) {
          uploadBtn.style.display = 'block';
        }
        
        this.updateCompleteButton();
      });
    }
    
    // Complete button (now "Voeg toe")
    const completeBtn = document.getElementById('wasbon-message-complete');
    if (completeBtn) {
      completeBtn.addEventListener('click', () => {
        if (this.messageAdded) {
          // If message already added, complete the flow
          this.complete();
        } else {
          // First click: add message (camera down, enable scrolling)
          this.addMessage();
        }
      });
    }
  }
  
  updateCompleteButton() {
    const completeBtn = document.getElementById('wasbon-message-complete');
    if (!completeBtn) return;
    
    // Message is optional, but at least one should be filled
    const hasContent = this.messageData.message.trim().length > 0 || this.messageData.media !== null;
    completeBtn.disabled = !hasContent;
    completeBtn.classList.toggle('disabled', !hasContent);
    
    // Update button text based on state
    if (this.messageAdded) {
      completeBtn.textContent = 'Voltooien';
    } else {
      completeBtn.textContent = 'Voeg toe';
    }
  }
  
  addMessage() {
    // Validate that we have content before adding
    const hasContent = this.messageData.message.trim().length > 0 || this.messageData.media !== null;
    if (!hasContent) {
      console.log('No content to add');
      return; // Don't proceed if no content
    }
    
    console.log('Adding message:', this.messageData);
    
    // Mark message as added
    this.messageAdded = true;
    
    // Call onAddMessage callback FIRST (camera down, enable scrolling)
    if (this.onAddMessage) {
      this.onAddMessage(this.messageData);
    }
    
    // Hide the message station step AFTER callback
    const step5 = document.getElementById('step-5');
    if (step5) {
      step5.classList.remove('is-visible');
      step5.style.display = 'none';
    }
    
    // Hide form overlay so user can see the scene and scroll
    const formOverlay = document.getElementById('wasbon-form-overlay');
    if (formOverlay) {
      formOverlay.style.display = 'none';
    }
    
    // Hide clouds background
    const bgClouds = document.getElementById('bg-clouds-soap');
    if (bgClouds) {
      bgClouds.style.display = 'none';
    }
  }
  
  complete() {
    // Hide station step
    const step5 = document.getElementById('step-5');
    if (step5) {
      step5.classList.remove('is-visible');
      step5.style.display = 'none';
    }
    
    // Hide clouds background
    const bgClouds = document.getElementById('bg-clouds-soap');
    if (bgClouds) {
      bgClouds.style.display = 'none';
    }
    
    // Call completion callback
    if (this.onComplete) {
      this.onComplete(this.messageData);
    }
  }
  
  show() {
    // Hide all other steps (1-4)
    document.querySelectorAll('.wasbon-step-content').forEach(step => {
      if (step.id !== 'step-5') {
        step.style.display = 'none';
      }
    });
    
    const step5 = document.getElementById('step-5');
    if (step5) {
      step5.classList.remove('is-visible');
      step5.style.display = 'block';
      requestAnimationFrame(() => {
        step5.classList.add('is-visible');
      });
      
      // Hide clouds background in step 5 (message station)
      const bgClouds = document.getElementById('bg-clouds-soap');
      if (bgClouds) {
        bgClouds.style.display = 'none';
      }
      
      // Hide footer navigation buttons
      const prevBtn = document.getElementById('wasbon-btn-prev');
      const nextBtn = document.getElementById('wasbon-btn-next');
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      
      // Only reset if message hasn't been added yet
      if (!this.messageAdded) {
        this.reset();
      } else {
        // Restore message data if it was already added
        this.restoreMessageData();
      }
    }
  }
  
  restoreMessageData() {
    // Restore the textarea and other fields with existing message data
    const messageTextarea = document.getElementById('wasbon-message-textarea');
    const charCount = document.getElementById('wasbon-char-count');
    const mediaPreview = document.getElementById('wasbon-media-preview');
    const mediaPreviewImg = document.getElementById('wasbon-media-preview-img');
    const uploadBtn = document.getElementById('wasbon-upload-btn');
    
    // Restore textarea value
    if (messageTextarea && this.messageData.message) {
      messageTextarea.value = this.messageData.message;
    }
    if (charCount) {
      charCount.textContent = this.messageData.message ? this.messageData.message.length : 0;
    }
    
    // Restore media preview if exists
    if (this.messageData.mediaPreview) {
      if (mediaPreviewImg) {
        mediaPreviewImg.src = this.messageData.mediaPreview;
      }
      if (mediaPreview) {
        mediaPreview.style.display = 'block';
      }
      if (uploadBtn) {
        uploadBtn.style.display = 'none';
      }
    } else {
      // Make sure upload button is visible if no media
      if (uploadBtn) {
        uploadBtn.style.display = 'block';
      }
      if (mediaPreview) {
        mediaPreview.style.display = 'none';
      }
    }
    
    // Update button state
    this.updateCompleteButton();
  }
  
  hide() {
    const step5 = document.getElementById('step-5');
    if (step5) {
      step5.classList.remove('is-visible');
      step5.style.display = 'none';
    }
    
    // Hide clouds background
    const bgClouds = document.getElementById('bg-clouds-soap');
    if (bgClouds) {
      bgClouds.style.display = 'none';
    }
  }
  
  reset() {
    // Only reset if message hasn't been added yet
    if (!this.messageAdded) {
    this.messageData = {
      message: '',
      media: null,
      mediaPreview: null
    };
      
      const messageTextarea = document.getElementById('wasbon-message-textarea');
      const charCount = document.getElementById('wasbon-char-count');
      const mediaInput = document.getElementById('wasbon-media-input');
      const mediaPreview = document.getElementById('wasbon-media-preview');
      const uploadBtn = document.getElementById('wasbon-upload-btn');
      
      if (messageTextarea) messageTextarea.value = '';
      if (charCount) charCount.textContent = '0';
      if (mediaInput) mediaInput.value = '';
      if (mediaPreview) mediaPreview.style.display = 'none';
      if (uploadBtn) uploadBtn.style.display = 'block';
    }
    
    this.updateCompleteButton();
  }
  
  getMessageData() {
    return { ...this.messageData };
  }
}
