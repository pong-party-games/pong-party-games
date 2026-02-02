# Ball Throw Animation - Visual Math Guide

## Coordinate System Overview

```
Container (Hero Section)
┌─────────────────────────────────────────┐
│ (0,0)                                   │ Top-Left
│                                         │
│            ⚾ startX: 0, startY: 0.3    │
│              (Initial Position)         │
│                                         │
│                  🎯 Control Point       │
│                   midX, midY            │
│                   (Peak of Arc)         │
│                                         │
│                                         │
│                    🥤                   │
│                 endX: 0.5, endY: 0.4   │
│                 (Final Position)        │
│                                         │
└─────────────────────────────────────────┘
 (0,1)                              (1,1) Bottom-Right
```

---

## Path Calculation Breakdown

### Step 1: Define Points (Relative Coordinates)
```
Configuration:
- startX = 0    (0% = left edge)
- startY = 0.3  (30% from top)
- endX = 0.5    (50% = center)
- endY = 0.4    (40% from top)
- curveHeight = -0.3  (upward arc)
```

### Step 2: Convert to Absolute Coordinates
```
Given container: 800px wide × 600px tall

startX = 800 × 0   = 0px    (left edge)
startY = 600 × 0.3 = 180px  (180px from top)

endX = 800 × 0.5   = 400px  (center)
endY = 600 × 0.4   = 240px  (240px from top)
```

### Step 3: Calculate Control Point
```
Horizontal midpoint:
midX = (startX + endX) / 2
     = (0 + 400) / 2
     = 200px

Vertical control (creates upward arc):
midY = Math.min(startY, endY) + (height × curveHeight)
     = Math.min(180, 240) + (600 × -0.3)
     = 180 + (-180)
     = 0px  (goes all the way to top!)
```

---

## Quadratic Bezier Curve Formula

### Mathematical Definition
```
B(t) = (1-t)²·P₀ + 2(1-t)·t·P₁ + t²·P₂

Where:
- t = progress (0 to 1)
- P₀ = start point
- P₁ = control point
- P₂ = end point
```

### Visual Representation
```
          P₁ (Control Point)
          ●
         /│\
        / │ \
       /  │  \
      /   │   \
     /    │    \
    /     │     \
   /      │      \
  ●───────┼───────●
 P₀       │       P₂
 (Start)  │      (End)
          │
      Parabolic Path
```

---

## Ball Position Calculation Examples

### At t = 0 (Start)
```javascript
ballX = (1-0)² × 0 + 2(1-0)×0 × 200 + 0² × 400
      = 1 × 0 + 0 + 0
      = 0px  ✓ (at starting position)

ballY = (1-0)² × 180 + 2(1-0)×0 × 0 + 0² × 240
      = 1 × 180 + 0 + 0
      = 180px  ✓ (at starting position)
```

### At t = 0.25 (25% scrolled)
```javascript
ballX = (0.75)² × 0 + 2(0.75)(0.25) × 200 + (0.25)² × 400
      = 0 + 75 + 25
      = 100px  (moved 100px right)

ballY = (0.75)² × 180 + 2(0.75)(0.25) × 0 + (0.25)² × 240
      = 101.25 + 0 + 15
      = 116.25px  (moved UP from 180px!)
```

### At t = 0.5 (Halfway - Peak of Arc)
```javascript
ballX = (0.5)² × 0 + 2(0.5)(0.5) × 200 + (0.5)² × 400
      = 0 + 100 + 100
      = 200px  (exactly at control point X)

ballY = (0.5)² × 180 + 2(0.5)(0.5) × 0 + (0.5)² × 240
      = 45 + 0 + 60
      = 105px  (influenced by control point Y)
```

### At t = 0.75 (75% scrolled)
```javascript
ballX = (0.25)² × 0 + 2(0.25)(0.75) × 200 + (0.75)² × 400
      = 0 + 75 + 225
      = 300px

ballY = (0.25)² × 180 + 2(0.25)(0.75) × 0 + (0.75)² × 240
      = 11.25 + 0 + 135
      = 146.25px  (descending now)
```

### At t = 1 (End)
```javascript
ballX = (0)² × 0 + 2(0)(1) × 200 + 1² × 400
      = 0 + 0 + 400
      = 400px  ✓ (at ending position)

ballY = (0)² × 180 + 2(0)(1) × 0 + 1² × 240
      = 0 + 0 + 240
      = 240px  ✓ (at ending position)
```

---

## Trail Effect Visualization

### strokeDasharray & strokeDashoffset

```
Progress = 0 (Start):
━━━━━━━━━━━━━━━━━━━━  Full trail visible
⚾                     Ball at start

Progress = 0.25:
━━━━━━━━━━━━━━━       Trail shortening
            ⚾         Ball 25% along

Progress = 0.5:
━━━━━━━━━━            Half trail visible
          ⚾           Ball at peak

Progress = 0.75:
━━━━━                 Trail almost gone
      ⚾               Ball 75% along

Progress = 1.0:
                      No trail
    🥤 ⚾              Ball at cup
```

### How it Works
```javascript
// Total path length (example)
pathLength = 500px

// At progress = 0.3 (30% scrolled)
visibleLength = (1 - 0.3) × 500 = 350px
strokeDasharray = "350 500"
// Creates: 350px solid, 150px gap

strokeDashoffset = -0.3 × 500 = -150px
// Shifts pattern: trail appears to follow ball
```

---

## Visual Effects Timeline

### Scale Effect
```
t = 0.0:  scale(1.0)   ⚾ Full size
t = 0.2:  scale(0.92)  ⚾ Slightly smaller
t = 0.5:  scale(0.8)   ⚾ Noticeably smaller
t = 0.8:  scale(0.68)  ⚾ Much smaller
t = 1.0:  scale(0.6)   ⚾ Entering cup
```

### Rotation Effect
```
t = 0.0:  rotate(0°)    ⚾ No rotation
t = 0.25: rotate(180°)  ⚾ Half spin
t = 0.5:  rotate(360°)  ⚾ One full rotation
t = 0.75: rotate(540°)  ⚾ 1.5 rotations
t = 1.0:  rotate(720°)  ⚾ Two full rotations
```

### Shadow Effect
```
t = 0.0:  offset 4px,  blur 8px,  opacity 0.3
          ⚾ 
          ○ Small, light shadow

t = 0.5:  offset 8px,  blur 14px, opacity 0.4
          ⚾
           ◯ Growing shadow

t = 1.0:  offset 12px, blur 20px, opacity 0.5
          ⚾
            ◯◯ Large, dark shadow
```

---

## SVG Path Format

### Quadratic Bezier Command
```
M startX startY Q controlX controlY, endX endY
│   │      │    │    │        │        │     │
│   │      │    │    │        │        │     └─ End Y coordinate
│   │      │    │    │        │        └─────── End X coordinate
│   │      │    │    │        └────────────── Control Y coordinate
│   │      │    │    └────────────────────── Control X coordinate
│   │      │    └──────────────────────── Quadratic Bezier command
│   │      └──────────────────────────── Start Y coordinate
│   └────────────────────────────────── Start X coordinate
└────────────────────────────────────── Move to command

Example:
M 0 180 Q 200 0, 400 240
```

---

## Scroll Progress Calculation

### Formula
```
scrollProgress = Math.min(scrollY / maxScroll, 1)
```

### Example Timeline (maxScroll = 200)
```
User Scroll    Formula                    Progress
───────────────────────────────────────────────────
0px           Math.min(0/200, 1)         = 0.0
50px          Math.min(50/200, 1)        = 0.25
100px         Math.min(100/200, 1)       = 0.5
150px         Math.min(150/200, 1)       = 0.75
200px         Math.min(200/200, 1)       = 1.0
300px         Math.min(300/200, 1)       = 1.0  (capped)
```

---

## Configuration Impact Examples

### Changing curveHeight

```
curveHeight = -0.5 (High Arc):
         ●────────● Very pronounced upward curve
        /          \
       /            \
      ●              ●

curveHeight = -0.2 (Medium Arc):
       ●──────────● Moderate curve
      /            \
     ●              ●

curveHeight = 0 (No Arc):
    ●──────────────● Straight line
    ●              ●

curveHeight = 0.3 (Downward Arc):
    ●              ●
     \            /
      ●──────────● Unnatural downward curve
```

### Changing maxScroll

```
maxScroll = 100:
Scroll 0px  → 50px  → 100px
Ball   0%   → 50%   → 100%   ← Fast animation

maxScroll = 200:
Scroll 0px  → 100px → 200px
Ball   0%   → 50%   → 100%   ← Medium speed

maxScroll = 500:
Scroll 0px  → 250px → 500px
Ball   0%   → 50%   → 100%   ← Slow animation
```

---

## Z-Index Switching

```
Progress < 0.8:                Progress > 0.8:
─────────────                  ─────────────
⚾ (z-index: 100)              🥤 (z-index: auto)
                               ⚾ (z-index: 1)
🥤 (z-index: auto)            
                               Ball goes BEHIND cup rim
Ball is ABOVE cup              Creates "entering cup" effect
```

---

## Responsive Behavior

### On Window Resize
```
1. Container dimensions change
   Before: 800px × 600px
   After:  400px × 300px

2. Recalculate absolute coordinates
   startX: 800 × 0 = 0px   →  400 × 0 = 0px
   startY: 600 × 0.3 = 180px → 300 × 0.3 = 90px
   endX:   800 × 0.5 = 400px → 400 × 0.5 = 200px
   endY:   600 × 0.4 = 240px → 300 × 0.4 = 120px

3. Path and ball positions update automatically
   Animation scales proportionally
```

---

## Performance Optimization

### GPU Acceleration
```css
/* ✓ GOOD - Uses GPU */
transform: translate(-50%, -50%) scale(0.8) rotate(45deg);
will-change: transform;

/* ✗ BAD - CPU intensive */
left: 100px;
top: 200px;
width: 40px;
height: 40px;
```

### Throttled Scroll Handler (Optional)
```javascript
let ticking = false;

function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateAnimation();
      ticking = false;
    });
    ticking = true;
  }
}

// Limits updates to monitor refresh rate (~60fps)
```

---

## Common Adjustments Cheat Sheet

### Make animation start earlier in viewport
```javascript
maxScroll: 100  // Animation completes faster
```

### Make ball arc higher
```javascript
curveHeight: -0.5  // More negative = higher arc
```

### Make ball start from top-right corner
```javascript
startX: 1,    // 100% from left (right edge)
startY: 0.1,  // 10% from top
```

### Make ball end at bottom-center
```javascript
endX: 0.5,  // 50% from left (center)
endY: 0.8,  // 80% from top (near bottom)
```

### Disable rotation
```javascript
// In transform calculation:
transform: `translate(-50%, -50%) scale(${scale})`
// Remove: rotate(${rotation}deg)
```

### Change trail colors to blue theme
```javascript
trailColors: [
  { offset: 0,   color: '#4A90E2', opacity: 0.7 },
  { offset: 50,  color: '#0066CC', opacity: 0.8 },
  { offset: 100, color: '#003D7A', opacity: 0.9 }
]
```

---

## Testing Checklist

- [ ] Ball starts at correct position (top-right area)
- [ ] Ball follows smooth parabolic curve
- [ ] Ball ends at product cup location
- [ ] Trail appears behind ball
- [ ] Trail disappears as ball moves forward
- [ ] Ball rotates during flight
- [ ] Ball scales down (gets smaller)
- [ ] Shadow grows and darkens
- [ ] Ball goes behind cup rim at end (z-index switch)
- [ ] Animation scales properly on window resize
- [ ] Animation is smooth during scroll (no jank)
- [ ] Works on mobile devices
- [ ] Works on different screen sizes

---

## Mathematical Proof: Ball Follows Curve

### At Any Point t:
```
Position on curve = B(t)
Ball position = B(t)
∴ Ball position = Position on curve

Q.E.D. - The ball perfectly follows the curve because
both use the same Bezier formula with the same parameters.
```

The trail effect creates the illusion of the path "appearing"
as the ball moves, but mathematically, the entire path exists
from the start - we just reveal it progressively using
strokeDasharray and strokeDashoffset.

---

## Summary Diagram

```
┌─────────────────────────────────────────────────────┐
│  SCROLL DOWN (0 → 200px)                           │
│                                                     │
│  ⚾ Ball Position = Bezier(t)                      │
│     where t = scrollY / 200                        │
│                                                     │
│  ━━━ Trail Length = (1 - t) × pathLength          │
│                                                     │
│  🎨 Visual Effects:                                │
│     • Scale: 1 → 0.6                              │
│     • Rotate: 0° → 720°                           │
│     • Shadow: 4px → 12px blur                     │
│     • Z-Index: 100 → 1 (at t > 0.8)               │
│                                                     │
│  Result: Smooth parabolic throw animation          │
└─────────────────────────────────────────────────────┘
```

This guide provides the complete mathematical foundation for
recreating the ball throw animation in any context.
