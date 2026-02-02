# Ball Throw Animation - Complete Recreation Guide

## Overview
This guide provides comprehensive instructions to recreate the scroll-based baseball throw animation used on the Pong Party Games website. The animation shows a baseball following a parabolic trajectory from the top of the hero section into the product cup as the user scrolls down the page.

---

## Table of Contents
1. [Animation Behavior](#animation-behavior)
2. [Configuration Parameters](#configuration-parameters)
3. [Initial and Final Points Definition](#initial-and-final-points-definition)
4. [Path Line Calculation](#path-line-calculation)
5. [Ball Position Updates](#ball-position-updates)
6. [Trail Effect Implementation](#trail-effect-implementation)
7. [Complete Implementation](#complete-implementation)
8. [Visual Effects](#visual-effects)

---

## Animation Behavior

### What Happens
- **At Page Load (scroll = 0)**: Baseball appears at top-right area (initial position)
- **As User Scrolls**: Baseball follows a parabolic curve downward and leftward
- **At Full Scroll**: Baseball lands in the product cup (final position)
- **Trail Effect**: A gradient path line appears behind the ball, showing its trajectory

### Scroll Trigger
- Animation is triggered by `window.scrollY`
- Full animation completes after scrolling **200 pixels** (configurable)
- Progress is calculated as: `progress = Math.min(scrollY / 200, 1)` (0 to 1)

---

## Configuration Parameters

### Modular Configuration Object
```javascript
const pathConfig = {
  // INITIAL POINT - Baseball starting position (relative to container)
  startX: 0,      // 0% from left (can be 0-1, where 0=left edge, 1=right edge)
  startY: 0.3,    // 30% from top (can be 0-1, where 0=top edge, 1=bottom)
  
  // FINAL POINT - Cup/target position (relative to container)
  endX: 0.5,      // 50% from left (center horizontally)
  endY: 0.4,      // 40% from top (lower than start)
  
  // CURVE CONTROL - How much the ball arcs upward
  curveHeight: -0.3,  // Negative = upward arc, positive = downward arc
  
  // ANIMATION SPEED
  maxScroll: 200,  // Pixels to scroll for full animation (lower = faster)
};
```

### How to Adjust Positions
1. **startX/startY**: Where the ball begins
   - `0, 0` = top-left corner
   - `1, 1` = bottom-right corner
   - `0.5, 0.5` = dead center

2. **endX/endY**: Where the ball ends (cup position)
   - Measure the cup's position in your design
   - Convert to percentage of container width/height

3. **curveHeight**: Controls the parabolic arc
   - `-0.3` = pronounced upward curve (natural throw)
   - `0` = straight line
   - `+0.3` = downward curve (unnatural)

---

## Initial and Final Points Definition

### Step 1: Identify Container Boundaries
```javascript
const containerRef = useRef<HTMLDivElement>(null);

// Get container dimensions
const rect = containerRef.current.getBoundingClientRect();
const width = rect.width;   // Container width in pixels
const height = rect.height; // Container height in pixels
```

### Step 2: Convert Relative to Absolute Coordinates
```javascript
// Initial point (where ball starts)
const startX = width * pathConfig.startX;   // 0 * width = 0px (left edge)
const startY = height * pathConfig.startY;  // 0.3 * height = 30% down

// Final point (where ball ends - the cup)
const endX = width * pathConfig.endX;       // 0.5 * width = center
const endY = height * pathConfig.endY;      // 0.4 * height = 40% down
```

### Step 3: Calculate Control Point for Parabola
```javascript
// Control point creates the upward arc
const midX = (startX + endX) / 2;  // Horizontal midpoint

// Vertical control point - determines arc height
const midY = Math.min(startY, endY) + (height * pathConfig.curveHeight);
// If curveHeight = -0.3 and height = 400px:
// midY = lower_of(startY, endY) + (400 * -0.3) = lower - 120px (goes UP)
```

**Why this formula?**
- `Math.min(startY, endY)` = Find the higher point (smaller Y value)
- `+ (height * curveHeight)` = Offset by the curve amount
- Negative curveHeight makes the ball arc UPWARD before descending

---

## Path Line Calculation

### Quadratic Bezier Curve
The path uses a **Quadratic Bezier curve** with 3 control points:
- **P0** = Start point (initial position)
- **P1** = Control point (peak of the arc)
- **P2** = End point (final position)

### SVG Path Creation
```javascript
// Create SVG path string
const path = `M ${startX} ${startY} Q ${midX} ${midY}, ${endX} ${endY}`;

// Breakdown:
// M = MoveTo command (starting point)
// Q = Quadratic Bezier command (control point, end point)
```

**Example:**
```
M 0 120 Q 200 -40, 400 160
│   │   │  │    │   │   │
│   │   │  │    │   │   └─ endY (160px from top)
│   │   │  │    │   └───── endX (400px from left)
│   │   │  │    └───────── control Y (-40px = above start)
│   │   │  └────────────── control X (200px = midpoint)
│   │   └───────────────── Q = Quadratic Bezier command
│   └───────────────────── startY (120px from top)
└───────────────────────── startX (0px from left)
```

### Path Length Calculation
```javascript
// Get the total path length for trail effects
const pathLength = pathRef.current.getTotalLength();
// Returns the pixel length of the entire curve
```

---

## Ball Position Updates

### Scroll Progress Tracking
```javascript
const handleScroll = () => {
  const scrollY = window.scrollY;  // Current scroll position
  const progress = Math.min(scrollY / pathConfig.maxScroll, 1);
  setScrollProgress(progress);  // Value between 0 and 1
};
```

### Ball Position Formula (Quadratic Bezier)
At any scroll progress `t` (0 to 1), calculate position using:

```javascript
const t = scrollProgress;  // 0 = start, 1 = end

// Quadratic Bezier Formula: B(t) = (1-t)²P0 + 2(1-t)tP1 + t²P2

// X position
const ballX = Math.pow(1 - t, 2) * startX +     // Start influence
              2 * (1 - t) * t * midX +          // Control influence  
              Math.pow(t, 2) * endX;            // End influence

// Y position
const ballY = Math.pow(1 - t, 2) * startY +     // Start influence
              2 * (1 - t) * t * midY +          // Control influence
              Math.pow(t, 2) * endY;            // End influence
```

### How the Formula Works

**At t = 0 (scroll start):**
```
ballX = (1)² * startX + 2(1)(0) * midX + (0)² * endX = startX
ballY = (1)² * startY + 2(1)(0) * midY + (0)² * endY = startY
✓ Ball is at starting position
```

**At t = 0.5 (halfway scrolled):**
```
ballX = (0.5)² * startX + 2(0.5)(0.5) * midX + (0.5)² * endX
      = 0.25*startX + 0.5*midX + 0.25*endX
✓ Ball is influenced mostly by control point (peak of arc)
```

**At t = 1 (fully scrolled):**
```
ballX = (0)² * startX + 2(0)(1) * midX + (1)² * endX = endX
ballY = (0)² * startY + 2(0)(1) * midY + (1)² * endY = endY
✓ Ball is at ending position
```

### Update Frequency
```javascript
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Recalculate path on window resize
  window.addEventListener('resize', calculatePath);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };
}, []);

// Recalculate ball position whenever scroll changes
useEffect(() => {
  calculatePath();
}, [scrollProgress]);
```

---

## Trail Effect Implementation

### SVG Path with Gradient
```jsx
<svg width="100%" height="100%">
  <defs>
    {/* Gradient for the trail */}
    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 0.7 }} />
      <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 0.8 }} />
      <stop offset="100%" style={{ stopColor: '#FF4444', stopOpacity: 0.9 }} />
    </linearGradient>
  </defs>
  
  <path
    ref={pathRef}
    d={pathData.path}
    stroke="url(#pathGradient)"
    strokeWidth="3"
    strokeDasharray={`${(1 - scrollProgress) * pathLength} ${pathLength}`}
    strokeDashoffset={-scrollProgress * pathLength}
    fill="none"
    strokeLinecap="round"
    opacity={0.8}
  />
</svg>
```

### How the Trail Works

**strokeDasharray:** Creates dashes along the path
```javascript
strokeDasharray = `${visibleLength} ${totalLength}`
visibleLength = (1 - scrollProgress) * pathLength

// At scrollProgress = 0:
//   visibleLength = 1 * pathLength = full path visible
// At scrollProgress = 0.5:
//   visibleLength = 0.5 * pathLength = half visible
// At scrollProgress = 1:
//   visibleLength = 0 * pathLength = no path visible
```

**strokeDashoffset:** Shifts the dash pattern
```javascript
strokeDashoffset = -scrollProgress * pathLength

// Shifts the "gap" forward as scroll increases
// Creates effect of path disappearing behind the ball
```

**Visual Effect:**
- Trail appears behind the ball
- Gradually disappears as ball moves forward
- Perfectly synchronized with ball position

---

## Complete Implementation

### 1. State Management
```typescript
const [scrollProgress, setScrollProgress] = useState(0);
const [pathData, setPathData] = useState({ 
  path: '',           // SVG path string
  ballPos: { x: 0, y: 0 },  // Ball coordinates
  pathLength: 0       // Total path length
});
const containerRef = useRef<HTMLDivElement>(null);
const pathRef = useRef<SVGPathElement>(null);
```

### 2. Path Calculation Function
```typescript
const calculatePath = () => {
  if (!containerRef.current) return;
  
  // Get container dimensions
  const rect = containerRef.current.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  
  // Convert relative positions to absolute
  const startX = width * pathConfig.startX;
  const startY = height * pathConfig.startY;
  const endX = width * pathConfig.endX;
  const endY = height * pathConfig.endY;
  
  // Calculate control point
  const midX = (startX + endX) / 2;
  const midY = Math.min(startY, endY) + (height * pathConfig.curveHeight);
  
  // Create SVG path
  const path = `M ${startX} ${startY} Q ${midX} ${midY}, ${endX} ${endY}`;
  
  // Calculate ball position
  const t = scrollProgress;
  const ballX = Math.pow(1 - t, 2) * startX +
                2 * (1 - t) * t * midX +
                Math.pow(t, 2) * endX;
  const ballY = Math.pow(1 - t, 2) * startY +
                2 * (1 - t) * t * midY +
                Math.pow(t, 2) * endY;
  
  // Get path length
  let pathLength = 0;
  if (pathRef.current) {
    pathLength = pathRef.current.getTotalLength();
  }
  
  setPathData({ path, ballPos: { x: ballX, y: ballY }, pathLength });
};
```

### 3. Event Listeners
```typescript
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / pathConfig.maxScroll, 1);
    setScrollProgress(progress);
  };
  
  const handleResize = () => {
    calculatePath();
  };
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  
  // Initial calculation (delay ensures DOM is ready)
  setTimeout(calculatePath, 100);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };
}, []);

// Recalculate when scroll changes
useEffect(() => {
  calculatePath();
}, [scrollProgress]);
```

### 4. JSX Rendering
```tsx
<div ref={containerRef} style={{ position: 'relative' }}>
  {/* Animation container */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',  // Allow clicks through
    zIndex: 10
  }}>
    {/* SVG Trail */}
    <svg width="100%" height="100%" style={{ position: 'absolute' }}>
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 0.7 }} />
          <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#FF4444', stopOpacity: 0.9 }} />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={pathData.path}
        stroke="url(#pathGradient)"
        strokeWidth="3"
        strokeDasharray={`${(1 - scrollProgress) * pathData.pathLength} ${pathData.pathLength}`}
        strokeDashoffset={-scrollProgress * pathData.pathLength}
        fill="none"
        strokeLinecap="round"
        opacity={0.8}
      />
    </svg>
    
    {/* Baseball */}
    <div style={{
      position: 'absolute',
      left: `${pathData.ballPos.x}px`,
      top: `${pathData.ballPos.y}px`,
      transform: `translate(-50%, -50%) scale(${1 - scrollProgress * 0.4}) rotate(${scrollProgress * 720}deg)`,
      filter: `drop-shadow(0 ${4 + scrollProgress * 8}px ${8 + scrollProgress * 12}px rgba(0,0,0,${0.3 + scrollProgress * 0.2}))`,
      zIndex: scrollProgress > 0.8 ? 1 : 100
    }}>
      <Image
        src="/images/pong-party-game-ball-image.png"
        alt="Baseball"
        width={50}
        height={50}
      />
    </div>
  </div>
  
  {/* Your product image */}
  <Image src="/images/product.png" alt="Product" />
</div>
```

---

## Visual Effects

### Ball Transformations

**Scale Effect:**
```javascript
scale(${1 - scrollProgress * 0.4})

// At scrollProgress = 0: scale(1) = 100% size
// At scrollProgress = 0.5: scale(0.8) = 80% size
// At scrollProgress = 1: scale(0.6) = 60% size
// ✓ Ball shrinks as it enters the cup
```

**Rotation Effect:**
```javascript
rotate(${scrollProgress * 720}deg)

// At scrollProgress = 0: rotate(0deg) = no rotation
// At scrollProgress = 0.5: rotate(360deg) = 1 full rotation
// At scrollProgress = 1: rotate(720deg) = 2 full rotations
// ✓ Ball spins realistically during flight
```

**Shadow Effect:**
```javascript
drop-shadow(0 ${4 + scrollProgress * 8}px ${8 + scrollProgress * 12}px rgba(0,0,0,${0.3 + scrollProgress * 0.2}))

// Offset Y: 4px → 12px (shadow lengthens)
// Blur: 8px → 20px (shadow softens)
// Opacity: 0.3 → 0.5 (shadow darkens)
// ✓ Shadow grows as ball descends
```

**Z-Index Switching:**
```javascript
zIndex: scrollProgress > 0.8 ? 1 : 100

// When scrollProgress < 0.8: zIndex = 100 (ball above product)
// When scrollProgress > 0.8: zIndex = 1 (ball behind cup rim)
// ✓ Ball appears to enter the cup
```

---

## Quick Reference Checklist

### To Recreate This Animation:

- [ ] Set up state for `scrollProgress` and `pathData`
- [ ] Create refs for container and SVG path
- [ ] Define `pathConfig` with start/end positions
- [ ] Implement `calculatePath()` function:
  - [ ] Convert relative to absolute coordinates
  - [ ] Calculate control point for parabola
  - [ ] Create SVG path string
  - [ ] Calculate ball position with Bezier formula
  - [ ] Get path length from SVG element
- [ ] Add scroll event listener:
  - [ ] Track `window.scrollY`
  - [ ] Calculate progress (0 to 1)
  - [ ] Update state
- [ ] Add resize event listener to recalculate on window resize
- [ ] Render SVG with:
  - [ ] Gradient definition
  - [ ] Path with strokeDasharray/offset for trail
- [ ] Render ball with:
  - [ ] Position from calculated coordinates
  - [ ] Transform with scale, rotation, translation
  - [ ] Filter for drop shadow
  - [ ] Conditional z-index

---

## Customization Tips

### Change Animation Speed
```javascript
maxScroll: 100,  // Faster (completes in 100px scroll)
maxScroll: 500,  // Slower (completes in 500px scroll)
```

### Change Arc Height
```javascript
curveHeight: -0.5,  // Higher arc
curveHeight: -0.1,  // Subtle arc
curveHeight: 0,     // No arc (straight line)
```

### Change Trail Colors
```jsx
<stop offset="0%" style={{ stopColor: '#00FF00', stopOpacity: 1 }} />
<stop offset="100%" style={{ stopColor: '#0000FF', stopOpacity: 1 }} />
```

### Disable Ball Spin
```javascript
transform: `translate(-50%, -50%) scale(${1 - scrollProgress * 0.4})`
// Remove rotate()
```

---

## Performance Considerations

1. **Throttle scroll events** (optional for smoother performance):
```javascript
let ticking = false;
const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / pathConfig.maxScroll, 1);
      setScrollProgress(progress);
      ticking = false;
    });
    ticking = true;
  }
};
```

2. **Use `transform` instead of `left/top`** for GPU acceleration (already implemented)

3. **Delay initial calculation** to ensure DOM is ready:
```javascript
setTimeout(calculatePath, 100);
```

---

## Mathematical Foundation

### Quadratic Bezier Curve Formula
```
B(t) = (1-t)²P₀ + 2(1-t)tP₁ + t²P₂

Where:
- P₀ = Start point (x₀, y₀)
- P₁ = Control point (x₁, y₁)  
- P₂ = End point (x₂, y₂)
- t = Progress (0 to 1)
```

**Expanded:**
```
Bₓ(t) = (1-t)²x₀ + 2(1-t)tx₁ + t²x₂
Bᵧ(t) = (1-t)²y₀ + 2(1-t)ty₁ + t²y₂
```

This creates a smooth parabolic curve that:
- Starts at P₀ when t=0
- Is influenced by P₁ (doesn't touch it)
- Ends at P₂ when t=1

---

## Troubleshooting

### Ball Not Appearing
- Check if container ref is set
- Ensure `calculatePath()` is called after mount
- Verify image path exists

### Path Not Showing
- Ensure SVG has proper dimensions
- Check if `pathRef` is attached
- Verify stroke color is visible

### Animation Not Smooth
- Check scroll event is firing
- Verify progress calculation is correct
- Ensure `useEffect` dependencies are set

### Ball Not Landing in Cup
- Adjust `endX` and `endY` values
- Use browser inspector to find cup position
- Convert cup position to relative coordinates

---

## Complete Working Example

See the full implementation in:
**File:** `components/home/hero-section.tsx`

This guide provides everything needed to recreate the animation from scratch in any framework or vanilla JavaScript.
