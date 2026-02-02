# Pong Party Games - Comprehensive Design Guidelines

> **Last Updated:** February 1, 2026  
> **Version:** 1.0  
> **Purpose:** Complete design specifications to reproduce the Pong Party Games homepage from scratch

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Navigation System](#navigation-system)
6. [Homepage Hero Section](#homepage-hero-section)
7. [Scroll-Based Baseball Animation](#scroll-based-baseball-animation)
8. [Footer Design](#footer-design)
9. [Responsive Breakpoints](#responsive-breakpoints)
10. [Complete CSS Reference](#complete-css-reference)
11. [Route Structure](#route-structure)

---

## Brand Identity

### Logo Components
- **Logo Image:** `/images/logo.png` (60x60px)
- **Logo Text Structure:**
  - Line 1: "PONG" - Bright Blue (#0066cc)
  - Line 2: "PARTY" - Red (#e63946)
  - Line 3: "GAMES" - Black (changes to white on non-homepage)

### Logo Positioning
- **Position:** Fixed, top-left
- **Desktop:** `top: 20px; left: 64px`
- **Mobile:** `top: 72px; left: 16px`
- **Z-index:** 50

---

## Color Palette

### Primary Colors
```css
--color-navy: #1a2b4a;           /* Primary brand color - headlines, borders */
--color-bright-blue: #0066cc;    /* CTA accents, pricing boxes */
--color-red: #e63946;            /* Primary CTA buttons */
--color-white: #ffffff;          /* Background, text on dark */
--color-light-gray: #f5f5f7;     /* Section backgrounds */
```

### Secondary Colors
```css
--color-charcoal: #2d3748;       /* Body text */
--color-gray-medium: #6b7280;    /* Secondary text, crossed-out prices */
```

### Functional Colors
```css
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #dc2626;
--color-info: #3b82f6;
```

### Gradient Patterns
```css
/* Price Box NOW - Bright Blue Gradient */
background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);

/* Feature Card Icons */
background: linear-gradient(135deg, var(--color-bright-blue) 0%, var(--color-navy) 100%);
```

---

## Typography

### Font Families
```css
--font-display: 'Fredoka', 'Nunito', 'Poppins', sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Font Sizes (Desktop)
```css
--text-6xl: 64px;    /* Large decorative text */
--text-5xl: 48px;    /* Section headers */
--text-4xl: 36px;    /* Subsection headers */
--text-3xl: 30px;    /* Pricing large */
--text-2xl: 24px;    /* Pricing medium */
--text-xl: 20px;     /* Subheadlines */
--text-lg: 18px;     /* Large body */
--text-base: 16px;   /* Body text */
--text-sm: 14px;     /* Small text */
--text-xs: 12px;     /* Labels */
```

### Font Sizes (Mobile < 767px)
```css
--text-6xl: 51px;
--text-5xl: 38px;
--text-4xl: 29px;
--text-3xl: 24px;
--text-2xl: 20px;
--text-xl: 18px;
```

### Typography Usage

#### Hero Headline
```css
font-family: var(--font-display);
font-size: 72px;           /* Desktop */
font-weight: 600;
line-height: 1.05;
color: var(--color-navy);
letter-spacing: -0.01em;
```

#### Hero Subheadline
```css
font-family: var(--font-body);
font-size: 22px;
font-weight: 700;
line-height: 1.5;
color: var(--color-charcoal);
```

#### Body Text
```css
font-family: var(--font-body);
font-size: 16px;
font-weight: 400;
line-height: 1.6;
color: var(--color-charcoal);
```

---

## Spacing & Layout

### Spacing Scale
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### Border Radius
```css
--radius-sm: 4px;      /* Small elements */
--radius-md: 8px;      /* Cards, buttons */
--radius-lg: 12px;     /* Large cards */
--radius-xl: 16px;     /* Pricing boxes */
--radius-full: 9999px; /* Pills, badges */
```

### Container
```css
--container-max: 1280px;
--container-padding: 24px;  /* Desktop */
--container-padding: 16px;  /* Mobile */
```

### Transitions
```css
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

---

## Navigation System

### Floating Navigation Pill

#### Desktop Navigation
- **Position:** Fixed, top-right
- **Coordinates:** `top: 20px; right: 64px`
- **Structure:** Horizontal pill-shaped container
- **Z-index:** 50

```css
.floating-nav-pill {
  position: fixed;
  top: 20px;
  right: 64px;
  display: flex;
  align-items: center;
  gap: 0;
  background: var(--color-navy);
  border-radius: 9999px;
  padding: 4px 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 50;
}
```

#### Navigation Links
```css
.nav-pill-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 15px;
  border-radius: 20px;
  transition: all var(--duration-normal) var(--ease-out);
}

.nav-pill-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-pill-link.active {
  background: var(--color-white);
  color: var(--color-navy);
}
```

#### Mobile Navigation (< 768px)
```css
.floating-nav-pill {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  border-radius: 0;
  padding: 12px 16px;
  flex-wrap: nowrap;
  overflow-x: auto;
  max-width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### Navigation Icons
- **Library:** Lucide React
- **Size:** 20px x 20px
- **Stroke Width:** 2px
- **Icons Used:**
  - Home
  - Play (How To Play)
  - Star (About Us, Reviews)
  - Gift (Custom Games)
  - ShoppingCart (Shop)

### Navigation Routes

```typescript
const routes = [
  { path: '/', icon: 'Home', label: 'Home' },
  { path: '/how-to-play', icon: 'Play', label: 'How To Play' },
  { path: '/about-us', icon: 'Star', label: 'About Us' },
  { path: '/reviews', icon: 'Star', label: 'Reviews' },
  { path: '/custom-games', icon: 'Gift', label: 'Custom Games' },
  { path: 'https://ah2s1r-3i.myshopify.com/', icon: 'ShoppingCart', label: 'Shop', external: true }
];
```

---

## Homepage Hero Section

### Hero Container
```css
.hero-target {
  position: relative;
  padding: 50px 64px 30px;
  background: var(--color-white);
  min-height: 100vh;
  display: flex;
  align-items: center;
}
```

### Two-Column Grid Layout
```css
.hero-grid-target {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}
```

### Left Column - Content Elements

#### 1. Made in USA Badge
```css
.badge-made-in-usa-target {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: var(--color-white);
  border: 2.5px solid var(--color-navy);
  border-radius: 20px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  color: var(--color-navy);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
  margin-bottom: 8px;
}
```
- **USA Flag Image:** 24x24px
- **Image Source:** `/images/usa-flag.png`

#### 2. Main Headline
```css
.hero-headline-target {
  font-family: var(--font-display);
  font-size: 72px;
  font-weight: 600;
  line-height: 1.05;
  color: var(--color-navy);
  letter-spacing: -0.01em;
  margin: 0 0 18px 0;
  max-width: 700px;
}
```
**Text:** "The Ultimate Baseball Party Game"

#### 3. Subheadline
```css
.hero-subheadline-target {
  font-family: var(--font-body);
  font-size: 22px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--color-charcoal);
  margin: 0 0 24px 0;
}
```
**Text:** "All Ages can play!"

#### 4. Feature Row (Horizontal)
```css
.feature-row-target {
  display: flex;
  gap: 32px;
  margin: 8px 0;
}

.feature-item-target {
  display: flex;
  align-items: center;
  gap: 12px;
}

.feature-item-target span {
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 600;
  color: var(--color-charcoal);
}
```

**Features:**
- ⚡ Ready in 5 Minutes
- 👥 2-8 Players
- ⭐ Premium Quality

**Icons:** Lucide React (Zap, Users, StarIcon) - 24px, strokeWidth: 2, color: #1a2b4a

#### 5. Pricing Boxes

**WAS Price Box (Gray):**
```css
.price-box-was {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  border: 1px solid rgba(26, 43, 74, 0.12);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: transform var(--duration-normal) var(--ease-out);
}

.price-box-was::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(26, 43, 74, 0.1), transparent);
}

.price-box-was .price-box-label {
  font-size: 12px;
  font-weight: 700;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.price-box-was .price-box-amount {
  font-size: 24px;
  font-weight: 600;
  color: #6c757d;
  text-decoration: line-through;
  opacity: 0.7;
}
```

**NOW Price Box (Bright Blue):**
```css
.price-box-now {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 24px;
  background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 102, 204, 0.4), 
              0 2px 8px rgba(0, 102, 204, 0.2), 
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.price-box-now::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
}

.price-box-now .price-box-label {
  font-size: 12px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.price-box-now .price-box-amount-large {
  font-size: 36px;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: -0.02em;
}
```

**Hover Effects:**
```css
.price-box-was:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.price-box-now:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 28px rgba(0, 102, 204, 0.5);
}
```

#### 6. CTA Buttons

**Buy Now Button (Red):**
```css
.btn-buy-now {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 36px;
  background: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 700;
  border: none;
  border-radius: 32px;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
  box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
}

.btn-buy-now:hover {
  background: #d62839;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(230, 57, 70, 0.4);
}
```

**Customize Button (Navy Outline):**
```css
.btn-customize {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 36px;
  background: transparent;
  color: var(--color-navy);
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 700;
  border: 2px solid var(--color-navy);
  border-radius: 32px;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
}

.btn-customize:hover {
  background: var(--color-navy);
  color: var(--color-white);
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(26, 43, 74, 0.25);
}
```

#### 7. Free Shipping Text
```css
.free-shipping-text {
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 500;
  color: var(--color-charcoal);
  margin: 16px 0 0 0;
}

.free-shipping-text strong {
  font-weight: 700;
  color: var(--color-navy);
}
```
**Text:** "**Handcrafted Quality** ensured on all products"

### Right Column - Product Image

```css
.hero-image-target {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-product-img-target {
  width: 100%;
  height: auto;
  max-width: 480px;
  filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.25)) 
          drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
  animation: float-product 4s ease-in-out infinite;
}

@keyframes float-product {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
```

**Product Image Source:** `/images/pongpartygame_heroproduct.png`
- **Size:** 480x480px
- **Priority:** true (for LCP optimization)

---

## Scroll-Based Baseball Animation

### Overview
The baseball follows a parabolic path from top-right to the product cup as the user scrolls, creating an engaging interactive experience.

### Configuration Parameters
```javascript
const pathConfig = {
  // Start position (baseball initial position)
  startX: 0,      // 0% from left (top right area)
  startY: 0.3,    // 30% from top
  
  // End position (cup in pong party game)
  endX: 0.5,      // 50% from left
  endY: 0.4,      // 40% from top
  
  // Control point for parabolic curve
  curveHeight: -0.3,  // Negative = upward curve
  
  // Animation settings
  maxScroll: 200,  // Pixels to scroll for full animation
};
```

### Path Calculation (Quadratic Bezier)
```javascript
// Calculate parabolic path
const midX = (startX + endX) / 2;
const midY = Math.min(startY, endY) + (height * curveHeight);

// Create SVG path
const path = `M ${startX} ${startY} Q ${midX} ${midY}, ${endX} ${endY}`;

// Calculate ball position at scroll progress t
const t = scrollProgress; // 0 to 1
const ballX = Math.pow(1 - t, 2) * startX + 
              2 * (1 - t) * t * midX + 
              Math.pow(t, 2) * endX;

const ballY = Math.pow(1 - t, 2) * startY + 
              2 * (1 - t) * t * midY + 
              Math.pow(t, 2) * endY;
```

### SVG Trail Effect
```jsx
<svg width="100%" height="100%" style={{ position: 'absolute' }}>
  <defs>
    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 0.7 }} />
      <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 0.8 }} />
      <stop offset="100%" style={{ stopColor: '#FF4444', stopOpacity: 0.9 }} />
    </linearGradient>
  </defs>
  <path
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

### Baseball Animation
```jsx
<div style={{
  position: 'absolute',
  left: `${ballPos.x}px`,
  top: `${ballPos.y}px`,
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
```

### Scroll Event Handler
```javascript
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / pathConfig.maxScroll, 1);
    setScrollProgress(progress);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Animation Effects
1. **Path Trail:** Disappears behind the ball (synchronized with scroll)
2. **Ball Rotation:** 720° rotation (two full spins)
3. **Ball Scale:** Shrinks from 1.0 to 0.6
4. **Shadow:** Increases from 4px to 12px blur
5. **Z-Index Switch:** Ball goes behind product at 80% progress

---

## Footer Design

### Footer Structure
```css
footer {
  text-sm: 14px;
  color: var(--color-gray-medium);
}
```

### Top Section
```css
.footer-top {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-top: 1px solid rgba(107, 114, 128, 0.2);
  padding: 48px 24px;
}

@media (min-width: 768px) {
  .footer-top {
    flex-direction: row;
    gap: 48px;
  }
}
```

### Logo Section
```css
.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-navy);
}

.footer-logo img {
  width: 40px;
  height: 40px;
}

.footer-logo span {
  text-transform: uppercase;
  font-weight: 600;
}
```

### Footer Menu
- **Menu Handle:** `next-js-frontend-footer-menu`
- **Layout:** Vertical list with gap
- **Link Styles:**
  ```css
  .footer-link {
    color: var(--color-gray-medium);
    transition: color var(--duration-normal);
  }
  
  .footer-link:hover {
    color: var(--color-navy);
    text-decoration: underline;
  }
  ```

### Bottom Copyright Section
```css
.footer-bottom {
  border-top: 1px solid rgba(107, 114, 128, 0.2);
  padding: 24px 0;
}

.footer-bottom-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .footer-bottom-content {
    flex-direction: row;
    gap: 0;
  }
}
```

**Copyright Text Example:**
```
© 2023-2026 Pong Party Games. All rights reserved.
```

---

## Responsive Breakpoints

### Desktop (> 1024px)
- Full two-column grid layout
- Floating navigation pill (top-right)
- Full logo with vertical text
- Features in horizontal row
- Buttons side-by-side

### Tablet (768px - 1024px)
```css
@media (max-width: 1024px) {
  .hero-grid-target {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .hero-headline-target {
    font-size: 52px;
  }
  
  .hero-image-target {
    order: -1; /* Image appears above content */
  }
}
```

### Mobile (< 768px)
```css
@media (max-width: 768px) {
  .hero-target {
    padding: 100px 24px 40px;
    min-height: auto;
  }
  
  .floating-nav-pill {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    padding: 12px 16px;
    overflow-x: auto;
  }
  
  .feature-row-target {
    flex-direction: column;
    gap: 14px;
  }
  
  .button-group-target {
    flex-direction: column;
    width: 100%;
  }
  
  .pricing-boxes-target {
    flex-direction: column;
  }
}
```

### Small Mobile (< 480px)
```css
@media (max-width: 480px) {
  .hero-headline-target {
    font-size: 32px;
  }
  
  .hero-subheadline-target {
    font-size: 16px;
  }
  
  .nav-pill-link {
    padding: 8px 12px;
    font-size: 14px;
  }
}
```

---

## Complete CSS Reference

### Critical CSS Variables
```css
:root {
  /* Colors */
  --color-navy: #1a2b4a;
  --color-bright-blue: #0066cc;
  --color-red: #e63946;
  --color-white: #ffffff;
  --color-light-gray: #f5f5f7;
  --color-gray-medium: #6b7280;
  --color-charcoal: #2d3748;
  
  /* Typography */
  --font-display: 'Fredoka', 'Nunito', 'Poppins', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Font Sizes */
  --text-6xl: 64px;
  --text-5xl: 48px;
  --text-4xl: 36px;
  --text-3xl: 30px;
  --text-2xl: 24px;
  --text-xl: 20px;
  --text-lg: 18px;
  --text-base: 16px;
  --text-sm: 14px;
  --text-xs: 12px;
  
  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Transitions */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

### Base Reset
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-charcoal);
  background: var(--color-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Image Handling
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-md);
}

/* Remove border radius for icons and UI images */
.nav-logo img,
.social-link img,
.icon img,
.made-in-usa-flag,
.usa-flag-only {
  border-radius: 0;
}
```

### Accessibility
```css
/* Focus Styles */
button:focus-visible,
a:focus-visible {
  outline: 3px solid var(--color-bright-blue);
  outline-offset: 2px;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Route Structure

### Main Routes
```
/                        - Homepage (Hero + Why Buy + Video sections)
/how-to-play            - How to Play page
/about-us               - About Us page
/reviews                - Reviews page
/custom-games           - Custom Games page
/shop                   - Shop page
https://ah2s1r-3i.myshopify.com/ - External Shopify store
```

### Dynamic Routes
```
/product/[handle]       - Product detail pages
/search                 - Search page
/search/[collection]    - Collection pages
/[page]                 - Dynamic CMS pages
```

### API Routes
```
/api/revalidate         - On-demand revalidation
```

---

## Component Architecture

### Homepage Structure
```jsx
<HeroSection />
  ├── Logo (Fixed position)
  ├── FloatingNav (Fixed position)
  └── Hero Grid
      ├── Left Column (Content)
      │   ├── Made in USA Badge
      │   ├── Main Headline
      │   ├── Subheadline
      │   ├── Feature Row (3 items)
      │   ├── Pricing Boxes (WAS/NOW)
      │   ├── CTA Buttons (Buy Now/Customize)
      │   └── Free Shipping Text
      └── Right Column (Image)
          ├── SVG Path Animation
          ├── Baseball Element (animated)
          └── Product Image

<WhyBuySection />
  └── Features Grid (6 cards)

<VideoSection />
  └── Video embed or content

<Footer />
  ├── Logo & Menu
  └── Copyright info
```

---

## Key Assets Required

### Images
```
/images/logo.png                              - Main logo (60x60px)
/images/usa-flag.png                          - USA flag badge (24x24px)
/images/pongpartygame_heroproduct.png         - Hero product image (480x480px)
/images/pong-party-game-ball-image.png        - Baseball for animation (50x50px)
```

### Icon Library
- **Package:** `lucide-react`
- **Icons:** Home, Play, Star, Gift, ShoppingCart, Zap, Users, Award, CloudSun, CreditCard, Package, Megaphone

---

## Performance Optimizations

### Image Optimization
```jsx
<Image
  src="/images/pongpartygame_heroproduct.png"
  alt="Pong Party Games"
  width={480}
  height={480}
  priority  // For hero image
/>
```

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Scroll Performance
- Use `requestAnimationFrame` for scroll animations
- Debounce resize calculations
- Lazy load images below the fold

---

## Browser Support

### Modern Browsers
- Chrome/Edge (Chromium) 90+
- Firefox 88+
- Safari 14+

### Fallbacks
- CSS Custom Properties with fallback values
- Reduced motion support
- High contrast mode support

---

## Development Notes

### Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** CSS Modules + Tailwind CSS v4
- **TypeScript:** Strict mode enabled
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Fredoka, Inter)

### File Locations
```
app/
  page.tsx                              - Homepage entry
  globals.css                           - Global styles
  layout.tsx                            - Root layout

components/
  home/
    hero-section.tsx                    - Hero component with animation
    why-buy-section.tsx                 - Features section
    video-section.tsx                   - Video section
  layout/
    navbar/
      floating-nav.tsx                  - Main navigation
      index.tsx                         - Alternative navbar
    footer.tsx                          - Footer component
```

---

## Quick Start Checklist

### To Reproduce Homepage:
1. ✅ Set up CSS custom properties (colors, fonts, spacing)
2. ✅ Install fonts (Fredoka, Inter)
3. ✅ Create floating navigation pill (fixed position)
4. ✅ Add logo in top-left corner
5. ✅ Build two-column hero grid
6. ✅ Add Made in USA badge
7. ✅ Style headline and subheadline
8. ✅ Create horizontal feature row with icons
9. ✅ Design pricing boxes (WAS/NOW) with gradients
10. ✅ Add CTA buttons with hover effects
11. ✅ Implement baseball scroll animation
12. ✅ Add product image with float animation
13. ✅ Make responsive for mobile
14. ✅ Add footer with menu and copyright
15. ✅ Test scroll performance

---

## Additional Sections

### Why Buy Section
- **Background:** Light gray (#f5f5f7)
- **Padding:** 96px 0
- **Grid:** 3 columns (desktop), 2 (tablet), 1 (mobile)
- **Cards:** White background, 12px border-radius, shadow on hover

### Feature Cards
```css
.feature-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all var(--duration-normal) var(--ease-out);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.feature-card-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--color-bright-blue) 0%, var(--color-navy) 100%);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  margin-bottom: var(--space-5);
}
```

---

## Summary

This design guideline provides complete specifications to reproduce the Pong Party Games homepage, including:

- ✅ Complete color palette and typography system
- ✅ Floating navigation pill with all routes
- ✅ Hero section with two-column layout
- ✅ Scroll-based baseball animation with parabolic path
- ✅ Pricing boxes with gradients and hover effects
- ✅ CTA buttons with micro-interactions
- ✅ Footer structure and styling
- ✅ Full responsive breakpoints
- ✅ Complete CSS reference
- ✅ Performance optimizations
- ✅ Accessibility considerations

**Last Updated:** February 1, 2026
