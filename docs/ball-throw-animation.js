/**
 * BALL THROW ANIMATION - Vanilla JavaScript Implementation
 * 
 * This is a framework-agnostic implementation of the scroll-based
 * baseball throw animation. Can be used with any JavaScript project.
 * 
 * @version 1.0.0
 * @author Pong Party Games
 */

class BallThrowAnimation {
  /**
   * Initialize the ball throw animation
   * @param {HTMLElement} container - The container element for the animation
   * @param {Object} config - Configuration options
   */
  constructor(container, config = {}) {
    // Default configuration
    this.config = {
      // Initial point (where ball starts) - relative coordinates (0-1)
      startX: 0,       // 0% from left
      startY: 0.3,     // 30% from top
      
      // Final point (where ball ends) - relative coordinates (0-1)
      endX: 0.5,       // 50% from left
      endY: 0.4,       // 40% from top
      
      // Curve control
      curveHeight: -0.3,  // Negative = upward arc
      
      // Animation settings
      maxScroll: 200,     // Pixels to scroll for full animation
      
      // Ball settings
      ballImageUrl: '/images/pong-party-game-ball-image.png',
      ballSize: 50,       // Ball width/height in pixels
      
      // Trail settings
      trailWidth: 3,
      trailColors: [
        { offset: 0, color: '#FF6B6B', opacity: 0.7 },
        { offset: 50, color: '#FFA500', opacity: 0.8 },
        { offset: 100, color: '#FF4444', opacity: 0.9 }
      ],
      
      // Visual effects
      enableRotation: true,
      enableScale: true,
      enableShadow: true,
      enableZIndexSwitch: true,
      zIndexSwitchPoint: 0.8,
      
      ...config  // Override with user config
    };
    
    this.container = container;
    this.scrollProgress = 0;
    this.pathData = {
      path: '',
      ballPos: { x: 0, y: 0 },
      pathLength: 0
    };
    
    this.init();
  }
  
  /**
   * Initialize the animation
   */
  init() {
    this.createElements();
    this.attachEventListeners();
    
    // Initial calculation after a short delay to ensure DOM is ready
    setTimeout(() => this.calculatePath(), 100);
  }
  
  /**
   * Create DOM elements for the animation
   */
  createElements() {
    // Create animation wrapper
    this.wrapper = document.createElement('div');
    this.wrapper.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10;
    `;
    
    // Create SVG for trail
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('width', '100%');
    this.svg.setAttribute('height', '100%');
    this.svg.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
    `;
    
    // Create gradient
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'pathGradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');
    
    this.config.trailColors.forEach(stop => {
      const stopEl = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stopEl.setAttribute('offset', `${stop.offset}%`);
      stopEl.setAttribute('style', `stop-color: ${stop.color}; stop-opacity: ${stop.opacity}`);
      gradient.appendChild(stopEl);
    });
    
    defs.appendChild(gradient);
    this.svg.appendChild(defs);
    
    // Create path
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path.setAttribute('stroke', 'url(#pathGradient)');
    this.path.setAttribute('stroke-width', this.config.trailWidth);
    this.path.setAttribute('fill', 'none');
    this.path.setAttribute('stroke-linecap', 'round');
    this.path.setAttribute('opacity', '0.8');
    this.svg.appendChild(this.path);
    
    // Create ball element
    this.ball = document.createElement('div');
    this.ball.style.cssText = `
      position: absolute;
      will-change: transform;
    `;
    
    this.ballImg = document.createElement('img');
    this.ballImg.src = this.config.ballImageUrl;
    this.ballImg.alt = 'Ball';
    this.ballImg.width = this.config.ballSize;
    this.ballImg.height = this.config.ballSize;
    this.ballImg.style.display = 'block';
    this.ball.appendChild(this.ballImg);
    
    // Append to wrapper
    this.wrapper.appendChild(this.svg);
    this.wrapper.appendChild(this.ball);
    
    // Append to container
    this.container.style.position = 'relative';
    this.container.appendChild(this.wrapper);
  }
  
  /**
   * Attach event listeners
   */
  attachEventListeners() {
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }
  
  /**
   * Handle scroll events
   */
  handleScroll() {
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / this.config.maxScroll, 1);
    
    if (progress !== this.scrollProgress) {
      this.scrollProgress = progress;
      this.calculatePath();
    }
  }
  
  /**
   * Handle resize events
   */
  handleResize() {
    this.calculatePath();
  }
  
  /**
   * Calculate the parabolic path and ball position
   */
  calculatePath() {
    // Get container dimensions
    const rect = this.container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Convert relative positions to absolute coordinates
    const startX = width * this.config.startX;
    const startY = height * this.config.startY;
    const endX = width * this.config.endX;
    const endY = height * this.config.endY;
    
    // Calculate control point for parabolic curve
    const midX = (startX + endX) / 2;
    const midY = Math.min(startY, endY) + (height * this.config.curveHeight);
    
    // Create SVG path (Quadratic Bezier curve)
    const pathString = `M ${startX} ${startY} Q ${midX} ${midY}, ${endX} ${endY}`;
    this.path.setAttribute('d', pathString);
    
    // Calculate ball position using Quadratic Bezier formula
    const t = this.scrollProgress;
    const ballX = Math.pow(1 - t, 2) * startX +
                  2 * (1 - t) * t * midX +
                  Math.pow(t, 2) * endX;
    
    const ballY = Math.pow(1 - t, 2) * startY +
                  2 * (1 - t) * t * midY +
                  Math.pow(t, 2) * endY;
    
    // Get path length for trail effect
    const pathLength = this.path.getTotalLength();
    
    // Update path data
    this.pathData = {
      path: pathString,
      ballPos: { x: ballX, y: ballY },
      pathLength: pathLength
    };
    
    // Update visual elements
    this.updateTrail();
    this.updateBall();
  }
  
  /**
   * Update the trail effect
   */
  updateTrail() {
    const visibleLength = (1 - this.scrollProgress) * this.pathData.pathLength;
    const totalLength = this.pathData.pathLength;
    
    this.path.setAttribute('stroke-dasharray', `${visibleLength} ${totalLength}`);
    this.path.setAttribute('stroke-dashoffset', -this.scrollProgress * this.pathData.pathLength);
  }
  
  /**
   * Update ball position and effects
   */
  updateBall() {
    const { x, y } = this.pathData.ballPos;
    const progress = this.scrollProgress;
    
    // Build transform string
    let transform = `translate(-50%, -50%)`;
    
    // Scale effect (ball shrinks as it enters cup)
    if (this.config.enableScale) {
      const scale = 1 - progress * 0.4;
      transform += ` scale(${scale})`;
    }
    
    // Rotation effect (ball spins during flight)
    if (this.config.enableRotation) {
      const rotation = progress * 720; // 2 full rotations
      transform += ` rotate(${rotation}deg)`;
    }
    
    // Apply transform
    this.ball.style.transform = transform;
    this.ball.style.left = `${x}px`;
    this.ball.style.top = `${y}px`;
    
    // Shadow effect (shadow grows as ball descends)
    if (this.config.enableShadow) {
      const offsetY = 4 + progress * 8;
      const blur = 8 + progress * 12;
      const opacity = 0.3 + progress * 0.2;
      this.ball.style.filter = `drop-shadow(0 ${offsetY}px ${blur}px rgba(0,0,0,${opacity}))`;
    }
    
    // Z-index switching (ball goes behind cup rim at end)
    if (this.config.enableZIndexSwitch) {
      this.ball.style.zIndex = progress > this.config.zIndexSwitchPoint ? '1' : '100';
    }
  }
  
  /**
   * Update configuration
   * @param {Object} newConfig - New configuration options
   */
  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.calculatePath();
  }
  
  /**
   * Destroy the animation and clean up
   */
  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    
    if (this.wrapper && this.wrapper.parentNode) {
      this.wrapper.parentNode.removeChild(this.wrapper);
    }
  }
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BallThrowAnimation;
}

// Example usage:
/*
// HTML:
<div id="hero-container" style="width: 600px; height: 400px; background: #f0f0f0;">
  <img src="/images/product.png" alt="Product" />
</div>

// JavaScript:
const container = document.getElementById('hero-container');
const animation = new BallThrowAnimation(container, {
  startX: 0,
  startY: 0.3,
  endX: 0.5,
  endY: 0.4,
  curveHeight: -0.3,
  maxScroll: 200,
  ballImageUrl: '/images/pong-party-game-ball-image.png'
});

// To update config dynamically:
animation.updateConfig({ maxScroll: 300 });

// To clean up:
animation.destroy();
*/
