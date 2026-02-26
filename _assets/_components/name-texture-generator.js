/* ===== NAME TEXTURE GENERATOR ===== */
// Utility to generate dynamic canvas textures for UV mapping names

/**
 * Generates a canvas texture with the given name text, centered, plain black text
 * @param {string} name - The name text to display
 * @param {Object} options - Configuration options
 * @param {number} options.width - Canvas width (default: 1024)
 * @param {number} options.height - Canvas height (default: 512)
 * @param {string} options.fontFamily - Font family (default: 'Sink, sans-serif')
 * @param {number} options.fontSize - Font size in pixels (default: 120)
 * @param {string} options.textColor - Text color (default: '#000000')
 * @param {number} options.letterSpacing - Letter spacing in pixels (default: 0)
 * @returns {HTMLCanvasElement} - The generated canvas
 */
export function generateNameTexture(name, options = {}) {
  const {
    width = 1024,
    height = 512,
    fontFamily = 'Sink, sans-serif',
    fontSize = 120,
    textColor = '#000000',
    letterSpacing = 0
  } = options;

  // Create canvas with device pixel ratio for better quality
  const dpr = window.devicePixelRatio || 1;
  const canvas = document.createElement('canvas');
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  const ctx = canvas.getContext('2d');

  // Enable high-quality rendering
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  
  // Scale context to match device pixel ratio
  ctx.scale(dpr, dpr);

  // Clear canvas (transparent background)
  ctx.clearRect(0, 0, width, height);

  // Set font with adjusted size
  ctx.font = `bold ${fontSize}px ${fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top'; // Use 'top' baseline for positioning from top
  
  // Set letter spacing
  ctx.letterSpacing = `${letterSpacing}px`;

  // If name is empty, return transparent canvas (no text)
  if (!name || name.trim() === '') {
    return canvas; // Already cleared, so it's transparent
  }

  // Center position horizontally, 20px from top
  const centerX = width / 2;
  const topOffset = 18; // Distance from top
  const textY = topOffset;

  // Draw plain black text (no embossed effect, no shadows, no highlights)
  ctx.fillStyle = textColor;
  ctx.fillText(name, centerX, textY);

  return canvas;
}

/**
 * Generates a canvas texture with multiline text, centered in a text box
 * @param {string} text - The text to display (can contain newlines)
 * @param {Object} options - Configuration options
 * @param {number} options.width - Canvas width (default: 736)
 * @param {number} options.height - Canvas height (default: 540)
 * @param {number} options.textBoxWidth - Text box width (default: 600)
 * @param {number} options.textBoxHeight - Text box height (default: 290)
 * @param {number} options.textBoxTop - Top position of text box (default: 110)
 * @param {string} options.fontFamily - Font family (default: 'Sink, sans-serif')
 * @param {number} options.fontSize - Font size in pixels (default: 40)
 * @param {string} options.textColor - Text color (default: '#000000')
 * @param {number} options.lineHeight - Line height multiplier (default: 1.4)
 * @returns {HTMLCanvasElement} - The generated canvas
 */
export function generateMultilineTexture(text, options = {}) {
  const {
    width = 736,
    height = 540,
    textBoxWidth = 600,
    textBoxHeight = 290,
    textBoxTop = 110,
    fontFamily = 'Sink, sans-serif',
    fontSize = 40,
    textColor = '#000000',
    lineHeight = 1.4
  } = options;

  // Create canvas with device pixel ratio for better quality
  const dpr = window.devicePixelRatio || 1;
  const canvas = document.createElement('canvas');
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  const ctx = canvas.getContext('2d');

  // Enable high-quality rendering
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  
  // Scale context to match device pixel ratio
  ctx.scale(dpr, dpr);

  // Clear canvas (transparent background)
  ctx.clearRect(0, 0, width, height);

  // If text is empty, return transparent canvas
  if (!text || text.trim() === '') {
    return canvas;
  }

  // Set font
  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillStyle = textColor;

  // Calculate text box position (centered horizontally)
  const textBoxLeft = (width - textBoxWidth) / 2;
  const textBoxCenterX = width / 2;

  // Split text into lines (handle both \n and \r\n)
  const inputLines = text.split(/\r?\n/);

  // Calculate line height
  const actualLineHeight = fontSize * lineHeight;

  // Word wrap each line and collect all wrapped lines
  const maxWidth = textBoxWidth - 20; // Add some padding
  const allLines = [];
  
  inputLines.forEach(line => {
    if (line.trim() === '') {
      // Empty line - add it to preserve spacing
      allLines.push('');
      return;
    }
    
    const words = line.split(' ');
    let currentLine = '';
    
    words.forEach(word => {
      const testLine = currentLine + (currentLine ? ' ' : '') + word;
      const metrics = ctx.measureText(testLine);
      
      if (metrics.width > maxWidth && currentLine) {
        // Current line is too long, save it and start new one
        allLines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });
    
    // Add the last line (or the only line if no wrapping needed)
    if (currentLine) {
      allLines.push(currentLine);
    }
  });

  // Calculate total text height
  const totalTextHeight = allLines.length * actualLineHeight;

  // Calculate starting Y position to center text vertically in the text box
  const textStartY = textBoxTop + (textBoxHeight - totalTextHeight) / 2;

  // Draw each line
  allLines.forEach((line, index) => {
    const y = textStartY + (index * actualLineHeight);
    if (line.trim() !== '') {
      ctx.fillText(line, textBoxCenterX, y);
    }
  });

  return canvas;
}

/**
 * Converts a canvas to a Three.js texture
 * @param {HTMLCanvasElement} canvas - The canvas element
 * @param {Object} options - Texture options
 * @returns {THREE.Texture} - Three.js texture
 */
export function canvasToTexture(canvas, options = {}) {
  const THREE = window.THREE || (typeof THREE !== 'undefined' ? THREE : null);
  if (!THREE) {
    throw new Error('Three.js is not available');
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.flipY = false; // Canvas textures typically don't need flipping
  texture.needsUpdate = true;
  
  // Apply options
  if (options.wrapS !== undefined) texture.wrapS = options.wrapS;
  if (options.wrapT !== undefined) texture.wrapT = options.wrapT;
  if (options.colorSpace !== undefined) texture.colorSpace = options.colorSpace;
  
  return texture;
}
