// Gorkha Ink Scroll Frame Animation Controller — Full Page Backdrop

// Configuration
const totalFrames = 221;
const framePattern = (index) => `frames/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;
const images = [];
let loadedCount = 0;

// Easing variables for smooth scroll interpolation
let scrollState = {
  current: 0, // Current interpolated frame index
  target: 0   // Target frame index based on scroll
};
const easeFactor = 0.08; // Damping factor (lower = smoother/slower, higher = faster)

// Get DOM Elements
const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');
const preloader = document.getElementById('preloader');
const progressFill = document.getElementById('progress-fill');
const progressPercent = document.getElementById('progress-percent');

// Setup Canvas scaling for high-DPI displays (Retina)
function resizeCanvas() {
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  
  // Re-draw the current frame immediately
  drawFrame(Math.round(scrollState.current));
}

// Draw a specific frame to the canvas with "cover" aspect ratio
function drawFrame(index) {
  const imgIndex = Math.max(0, Math.min(totalFrames - 1, index));
  const img = images[imgIndex];
  if (!img || !img.complete) return;

  const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
  const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
  
  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;
  
  // Calculate aspect ratios
  const canvasRatio = canvasWidth / canvasHeight;
  const imgRatio = imgWidth / imgHeight;
  
  let drawWidth, drawHeight, drawX, drawY;
  
  if (imgRatio > canvasRatio) {
    // Image is wider than canvas
    drawHeight = canvasHeight;
    drawWidth = canvasHeight * imgRatio;
    drawX = (canvasWidth - drawWidth) / 2;
    drawY = 0;
  } else {
    // Image is taller than canvas
    drawWidth = canvasWidth;
    drawHeight = canvasWidth / imgRatio;
    drawX = 0;
    drawY = (canvasHeight - drawHeight) / 2;
  }
  
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
}

// Preload all frame images
function preloadImages() {
  return new Promise((resolve) => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        const percent = Math.round((loadedCount / totalFrames) * 100);
        progressFill.style.width = `${percent}%`;
        progressPercent.textContent = `${percent}%`;
        
        if (loadedCount === totalFrames) {
          resolve();
        }
      };
      
      img.onerror = () => {
        console.error(`Failed to load frame: ${framePattern(i)}`);
        // Still count failed loads to avoid blocking the loading process
        loadedCount++;
        if (loadedCount === totalFrames) {
          resolve();
        }
      };
      
      img.src = framePattern(i);
      images.push(img);
    }
  });
}

// Update scroll target based on global document scroll position
function updateScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  // Calculate raw scroll progress (0.0 to 1.0)
  const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
  
  // Map progress (0.0 to 1.0) to frame index target (0 to 220)
  scrollState.target = scrollProgress * (totalFrames - 1);
}

// Animation loop using requestAnimationFrame
let lastRenderedFrame = -1;
function tick() {
  // LERP: Linear Interpolation for easing scroll movements
  const delta = scrollState.target - scrollState.current;
  
  if (Math.abs(delta) > 0.01) {
    scrollState.current += delta * easeFactor;
  } else {
    scrollState.current = scrollState.target;
  }
  
  const frameToRender = Math.round(scrollState.current);
  
  // Only draw if frame index changes to preserve CPU/GPU
  if (frameToRender !== lastRenderedFrame) {
    drawFrame(frameToRender);
    lastRenderedFrame = frameToRender;
  }
  
  requestAnimationFrame(tick);
}

// Initialize application
async function init() {
  // 1. Resize canvas right away
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  // 2. Preload all frame images
  await preloadImages();
  
  // 3. Render the initial frame
  drawFrame(0);
  
  // 4. Hide loader once loading is complete
  setTimeout(() => {
    if (preloader) {
      preloader.classList.add('loaded');
    }
    document.body.style.overflowY = 'auto'; // Re-enable scrolling
    
    // Initialize initial scroll and slides check
    updateScroll();
    
    // Start animation tick loop
    requestAnimationFrame(tick);
  }, 300);
}

// Disable body scroll while loading images
document.body.style.overflowY = 'hidden';

// Bind Events
window.addEventListener('scroll', updateScroll, { passive: true });
window.addEventListener('DOMContentLoaded', init);
