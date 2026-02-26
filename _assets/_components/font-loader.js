/* ===== FONT LOADER ===== */
export class FontLoader {
  constructor() {
    this.sinkFontLoaded = false;
  }
  
  async loadSinkFont() {
    if (this.sinkFontLoaded) {
      return Promise.resolve();
    }
    
    try {
      const fontFace = new FontFace('Sink', 'url(_assets/_style/_fonts/Sink.otf)');
      const loadedFont = await fontFace.load();
      document.fonts.add(loadedFont);
      this.sinkFontLoaded = true;
      // Font loaded successfully
      return loadedFont;
    } catch (error) {
      console.error('Error loading Sink font:', error);
      this.sinkFontLoaded = false;
      return null;
    }
  }
  
  isFontLoaded() {
    return this.sinkFontLoaded;
  }
}