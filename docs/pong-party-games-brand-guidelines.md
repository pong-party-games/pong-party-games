# Pong Party Games Brand Guidelines
## Version 1.0 | January 2026

---

## Table of Contents
1. [Brand Overview](#brand-overview)
2. [Brand Voice & Personality](#brand-voice--personality)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Iconography & Visual Elements](#iconography--visual-elements)
6. [Spacing & Layout System](#spacing--layout-system)
7. [Photography & Imagery](#photography--imagery)
8. [Button & CTA Standards](#button--cta-standards)
9. [Navigation Standards](#navigation-standards)
10. [Animation & Interaction Guidelines](#animation--interaction-guidelines)
11. [Accessibility Standards](#accessibility-standards)

---

## 1. Brand Overview

### Brand Essence
Pong Party Games delivers premium, handcrafted party entertainment that brings the nostalgia and excitement of baseball to social gatherings. We transform simple ping pong balls into memorable experiences.

### Brand Promise
"All Ages can play!"

### Target Audience
- **Primary**: Adults 25-45, social hosts, party planners
- **Secondary**: Corporate event coordinators, family gatherings, sports enthusiasts
- **Psychographics**: Value quality craftsmanship, appreciate nostalgic sports culture, seek unique social experiences

### Brand Positioning
Premium handcrafted party game combining sports nostalgia with modern design sensibility. Made in USA quality at accessible luxury pricing.

---

## 2. Brand Voice & Personality

### Voice Characteristics
- **Confident but Approachable**: We know we're premium, but we're not pretentious
- **Enthusiastic but Professional**: Excited about play, serious about quality
- **Clear and Direct**: No jargon, straightforward benefits
- **Nostalgic but Modern**: Honors baseball tradition with contemporary appeal

### Tone Guidelines
**DO:**
- Use active, energetic language
- Emphasize quality and craftsmanship
- Highlight the "ready to play" convenience
- Connect to baseball/sports culture authentically
- Focus on social experience and memories

**DON'T:**
- Be overly casual or use excessive slang
- Over-promise or use hyperbole
- Be technical or mechanical in product descriptions
- Use corporate or stuffy language
- Apologize for premium pricing

### Sample Voice Applications
- **Headlines**: Bold, benefit-driven ("The Ultimate Baseball Party Game")
- **Subheads**: Clear value propositions ("All Ages can play!")
- **Body Copy**: Conversational but informative
- **CTAs**: Action-oriented and immediate ("Buy Now", "Customize")

---

## 3. Color System

### Primary Brand Colors

#### Navy Blue (Primary Brand Color)
- **Hex**: `#1a2b4a` 
- **RGB**: rgb(26, 43, 74)
- **CMYK**: C:100 M:75 Y:30 K:50
- **Pantone Equivalent**: Pantone 533 C
- **Usage**: Primary text, navigation background, headers, brand elements
- **Accessibility**: WCAG AAA compliant on white backgrounds
- **Psychology**: Trust, reliability, premium quality, sports tradition

#### Bright Blue (Secondary/Accent)
- **Hex**: `#0066cc`
- **RGB**: rgb(0, 102, 204)
- **CMYK**: C:100 M:50 Y:0 K:0
- **Usage**: Price highlights, accent buttons, interactive elements
- **Accessibility**: WCAG AA compliant with white text
- **Psychology**: Energy, confidence, action

#### Bright Red (Call-to-Action)
- **Hex**: `#e63946`
- **RGB**: rgb(230, 57, 70)
- **CMYK**: C:0 M:94 Y:79 K:0
- **Pantone Equivalent**: Pantone 1795 C
- **Usage**: Primary CTAs, "Buy Now" buttons, urgent actions
- **Accessibility**: WCAG AA compliant with white text
- **Psychology**: Urgency, excitement, sports energy, baseball association

### Supporting Colors

#### White (Background)
- **Hex**: `#ffffff`
- **Usage**: Primary background, negative space, card backgrounds
- **Psychology**: Cleanliness, simplicity, premium quality

#### Light Gray (Subtle Backgrounds)
- **Hex**: `#f5f5f7`
- **RGB**: rgb(245, 245, 247)
- **Usage**: Subtle section backgrounds, alternate sections
- **Note**: Very subtle, almost white

#### Medium Gray (Secondary Text)
- **Hex**: `#6b7280`
- **RGB**: rgb(107, 114, 128)
- **Usage**: Secondary information, descriptive text, captions
- **Accessibility**: WCAG AA compliant on white

#### Charcoal (Alternative Dark Text)
- **Hex**: `#2d3748`
- **RGB**: rgb(45, 55, 72)
- **Usage**: Body text alternative to navy when needed

### Functional Colors

#### Success Green
- **Hex**: `#10b981`
- **Usage**: Success messages, confirmations, availability indicators

#### Warning Amber
- **Hex**: `#f59e0b`
- **Usage**: Warnings, low stock notifications

#### Error Red
- **Hex**: `#dc2626`
- **Usage**: Error messages, form validation errors

#### Info Blue
- **Hex**: `#3b82f6`
- **Usage**: Information callouts, tooltips

### Color Usage Rules

**Primary Color Hierarchy**:
1. Navy Blue: 60% (dominant - backgrounds, text)
2. White: 30% (negative space, breathing room)
3. Red: 5% (CTAs, strategic accents)
4. Bright Blue: 5% (secondary accents, highlights)

**Gradient Usage**:
- Avoid gradients in primary brand applications
- If gradients are needed for specific effects, use subtle transitions within the same color family
- Never use rainbow or multi-color gradients

**Color Accessibility Matrix**:
| Background | Text Color | Contrast Ratio | WCAG Level |
|------------|-----------|----------------|------------|
| White (#ffffff) | Navy (#1a2b4a) | 12.6:1 | AAA |
| White (#ffffff) | Charcoal (#2d3748) | 11.4:1 | AAA |
| Navy (#1a2b4a) | White (#ffffff) | 12.6:1 | AAA |
| Red (#e63946) | White (#ffffff) | 4.8:1 | AA |
| Bright Blue (#0066cc) | White (#ffffff) | 4.9:1 | AA |

**Color Combinations to Avoid**:
- Red text on blue backgrounds
- Blue text on red backgrounds
- Any color combinations under 4.5:1 contrast ratio
- More than 3 colors in a single component

---

## 4. Typography

### Font Family System

#### Primary Display Font: **Fredoka** (Bold/SemiBold)
- **Source**: Google Fonts
- **Weights Used**: 
  - Bold (700): Main headlines, hero text
  - SemiBold (600): Subheadlines, section headers
- **Fallback Stack**: `'Fredoka', 'Nunito', 'Poppins', sans-serif`
- **Characteristics**: Rounded, friendly, approachable, modern
- **Usage**: All display headlines, hero text, section headers, card titles
- **Letter Spacing**: -0.02em for large sizes (48px+)
- **Line Height**: 1.1 for hero text, 1.2 for headlines

#### Secondary Body Font: **Inter** (Regular/Medium)
- **Source**: Google Fonts
- **Weights Used**:
  - Regular (400): Body text, descriptions
  - Medium (500): Emphasized text, subheadings
  - SemiBold (600): Strong emphasis, small headlines
- **Fallback Stack**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Characteristics**: Clean, readable, professional, modern
- **Usage**: Body copy, navigation text, feature descriptions, secondary information
- **Letter Spacing**: Normal (0) for body text
- **Line Height**: 1.6 for body text

### Typography Scale

#### Desktop Scale
```css
/* Hero/Display */
--text-6xl: 64px;    /* Hero headlines */
--text-5xl: 48px;    /* Major section headlines */
--text-4xl: 36px;    /* Section headlines */
--text-3xl: 30px;    /* Subsection headlines */
--text-2xl: 24px;    /* Card titles, large text */
--text-xl: 20px;     /* Feature headlines */

/* Body & UI */
--text-lg: 18px;     /* Large body text, subheadings */
--text-base: 16px;   /* Standard body text */
--text-sm: 14px;     /* Secondary information */
--text-xs: 12px;     /* Captions, labels */
```

#### Mobile Scale (Responsive Reduction)
```css
/* Apply 20% reduction on screens < 768px */
--text-6xl-mobile: 51px;   /* Was 64px */
--text-5xl-mobile: 38px;   /* Was 48px */
--text-4xl-mobile: 29px;   /* Was 36px */
--text-3xl-mobile: 24px;   /* Was 30px */
--text-2xl-mobile: 20px;   /* Was 24px */
--text-xl-mobile: 18px;    /* Was 20px */

/* Body sizes remain same or reduce slightly */
--text-base-mobile: 16px;  /* No change */
--text-sm-mobile: 14px;    /* No change */
```

### Typography Usage Guidelines

#### Headlines
```css
.hero-headline {
    font-family: 'Fredoka', sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #1a2b4a;
}

.section-headline {
    font-family: 'Fredoka', sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #1a2b4a;
}
```

#### Body Text
```css
.body-text {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    color: #2d3748;
}

.subheading {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.5;
    color: #1a2b4a;
}
```

#### Feature Text (Icons + Text)
```css
.feature-label {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #2d3748;
}
```

### Typography Rules

**DO:**
- Use Fredoka for all headlines and attention-grabbing text
- Use Inter for all body copy and navigation
- Maintain consistent line heights within sections
- Use proper hierarchy (never skip levels)
- Apply letter-spacing adjustments for large display text
- Ensure minimum 16px for body text on mobile

**DON'T:**
- Mix more than 2 font families
- Use all caps for long text (max 3-4 words)
- Use italic for body text (use medium/semibold for emphasis)
- Set line height below 1.4 for body text
- Use font weights below 400 (regular)
- Use decorative fonts for body copy

### Text Color Standards
- **Primary Text**: Navy (#1a2b4a) - Headlines, important text
- **Body Text**: Charcoal (#2d3748) - Regular body copy
- **Secondary Text**: Medium Gray (#6b7280) - Captions, less important info
- **Accent Text**: Bright Blue (#0066cc) - Prices, highlighted info
- **CTA Text**: White (#ffffff) - Button text on colored backgrounds

---

## 5. Iconography & Visual Elements

### Icon Style Guidelines

#### Icon Characteristics
- **Style**: Line icons with rounded ends
- **Stroke Weight**: 2px
- **Corner Radius**: Rounded (border-radius: 4px on terminals)
- **Size Range**: 20px - 48px (use specific sizes only)
- **Color**: Inherits from parent or uses brand navy (#1a2b4a)

#### Standard Icon Sizes
```css
--icon-sm: 20px;   /* Inline with text */
--icon-md: 24px;   /* Feature callouts */
--icon-lg: 32px;   /* Section icons */
--icon-xl: 48px;   /* Hero section icons */
```

#### Icon Usage Examples (From Homepage)

**Lightning Bolt (Speed/Quick Setup)**
- Usage: "Ready in 5 Minutes" feature
- Size: 24px
- Placement: Left of text
- Color: Navy (#1a2b4a)

**People/Users Icon (Multiplayer)**
- Usage: "2-8 Players" feature
- Size: 24px
- Placement: Left of text
- Color: Navy (#1a2b4a)

**Star Icon (Quality)**
- Usage: "Premium Quality" feature
- Size: 24px
- Placement: Left of text
- Color: Navy (#1a2b4a)

### Badge & Label System

#### "Made in USA" Badge
```css
.made-in-usa-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 2px solid #1a2b4a;
    border-radius: 24px;
    background: white;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #1a2b4a;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.flag-icon {
    width: 24px;
    height: 16px;
}
```

**Usage Guidelines**:
- Always include American flag icon
- Position in top-left of hero sections
- Use on product pages and key landing pages
- Maintain 2px border thickness
- Keep text uppercase with letter spacing

### Decorative Elements

#### Corner Radius System
```css
--radius-sm: 4px;    /* Small elements, icons */
--radius-md: 8px;    /* Buttons, small cards */
--radius-lg: 16px;   /* Large cards, modals */
--radius-xl: 24px;   /* Hero sections, feature blocks */
--radius-full: 9999px; /* Pills, badges, circular elements */
```

#### Shadow System
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.2);
```

**Shadow Usage**:
- `shadow-sm`: Subtle depth on flat cards
- `shadow-md`: Buttons, raised cards
- `shadow-lg`: Floating elements, dropdowns
- `shadow-xl`: Modals, overlays
- `shadow-2xl`: Hero images, key product shots

#### Product Image Treatment
- **Drop Shadow**: Use shadow-2xl for primary product images
- **Background**: Pure white or subtle light gray
- **Padding**: Generous negative space around product (min 40px)
- **Perspective**: Use subtle 3D perspective for physical products
- **Quality**: Minimum 2x resolution for retina displays

---

## 6. Spacing & Layout System

### Spacing Scale
```css
/* Base unit: 4px */
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
--space-32: 128px;
```

### Container System

#### Max Widths
```css
--container-sm: 640px;   /* Narrow content, forms */
--container-md: 768px;   /* Articles, single column */
--container-lg: 1024px;  /* Standard content width */
--container-xl: 1280px;  /* Wide content, dashboards */
--container-2xl: 1440px; /* Maximum site width */
```

#### Container Padding
```css
.container {
    max-width: var(--container-2xl);
    margin: 0 auto;
    padding: 0 var(--space-6); /* 24px on mobile */
}

@media (min-width: 768px) {
    .container {
        padding: 0 var(--space-12); /* 48px on tablet+ */
    }
}

@media (min-width: 1024px) {
    .container {
        padding: 0 var(--space-16); /* 64px on desktop */
    }
}
```

### Grid System

#### Standard Layout Grid
```css
.grid-standard {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--space-6);
}

@media (min-width: 768px) {
    .grid-standard {
        gap: var(--space-8);
    }
}
```

#### Two-Column Hero Layout (Homepage Example)
```css
.hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-12);
    align-items: center;
}

@media (min-width: 1024px) {
    .hero-grid {
        grid-template-columns: 1fr 1fr;
        gap: var(--space-16);
    }
}
```

**Left Column (Content)**:
- Width: 45-50% of container
- Padding: 48px vertical, 32px horizontal
- Contains: Badge, headline, subheadline, features, pricing, CTAs

**Right Column (Image)**:
- Width: 50-55% of container
- Contains: Product hero image with shadow
- Alignment: Center vertically

### Section Spacing

```css
.section {
    padding: var(--space-20) 0; /* 80px top/bottom on mobile */
}

@media (min-width: 768px) {
    .section {
        padding: var(--space-32) 0; /* 128px on desktop */
    }
}
```

### Component Spacing Patterns

#### Feature List (Icon + Text)
```css
.feature-item {
    display: flex;
    align-items: center;
    gap: var(--space-4); /* 16px between icon and text */
    margin-bottom: var(--space-5); /* 20px between features */
}
```

#### Button Groups
```css
.button-group {
    display: flex;
    gap: var(--space-4); /* 16px between buttons */
    flex-wrap: wrap;
}
```

#### Text Spacing
```css
.text-stack {
    margin-bottom: var(--space-6); /* 24px after headlines */
}

.subheadline {
    margin-top: var(--space-4); /* 16px after headline */
    margin-bottom: var(--space-8); /* 32px before features */
}
```

### Responsive Breakpoints
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large desktops */
```

**Mobile Behavior** (< 768px):
- Single column layouts
- Full-width buttons
- Stacked navigation
- Reduced spacing (20-30% reduction)
- Larger tap targets (min 44x44px)

**Tablet Behavior** (768px - 1023px):
- Two-column layouts where appropriate
- Side-by-side buttons
- Horizontal navigation if space permits
- Standard spacing

**Desktop Behavior** (1024px+):
- Multi-column layouts
- Horizontal navigation
- Full spacing system
- Hover states enabled

---

## 7. Photography & Imagery

### Product Photography Guidelines

#### Primary Product Shots
- **Resolution**: Minimum 2000x2000px, 72 DPI for web
- **Format**: PNG with transparency for products, JPG for contextual shots
- **Background**: Pure white (#ffffff) or transparent
- **Lighting**: Soft, diffused lighting from 45° angle, no harsh shadows
- **Perspective**: Slight 3/4 view showing depth and dimension
- **Context**: Show scale with subtle environmental elements (table, gathering)

#### Hero Image Standards (As seen in homepage)
- **Composition**: Product at 3/4 angle showing baseball stadium backdrop
- **Depth**: Use shadows and perspective to show 3D form
- **Details**: Visible texture, craftsmanship details, brand elements
- **Shadow**: Strong drop shadow (shadow-2xl) for floating effect
- **Size**: Minimum 1200px wide for desktop hero sections

#### Stadium/Baseball Elements
- Stylized crowd illustration (not realistic photography)
- Visible scoreboards and stadium details
- Red seating sections creating visual interest
- Blue and red color accents matching brand palette
- Miniature/toy aesthetic maintaining playful quality

### Lifestyle Photography

#### When to Use Lifestyle Images
- Secondary pages showing product in use
- Social gathering contexts
- Party/event settings
- Player interaction shots

#### Lifestyle Photography Standards
- **Setting**: Clean, modern homes or party venues
- **People**: Diverse ages (25-55), mixed gender, genuine smiles
- **Activity**: Active play, laughter, social engagement
- **Lighting**: Natural lighting preferred, warm tones
- **Composition**: Product visible but not forced
- **Editing**: Bright, airy, slightly desaturated for premium feel

### Image Specifications by Use

#### Hero Images
- **Desktop**: 1440x900px minimum (16:10 ratio)
- **Mobile**: 800x1000px minimum (4:5 ratio)
- **Format**: JPG (80-90% quality) or WebP
- **File Size**: < 300KB (use compression)

#### Product Thumbnails
- **Size**: 600x600px
- **Format**: PNG with transparency
- **File Size**: < 150KB

#### Gallery Images
- **Size**: 1200x800px (3:2 ratio)
- **Format**: JPG or WebP
- **File Size**: < 200KB

### Image Optimization

#### Responsive Images
```html
<img 
    src="product-hero.jpg"
    srcset="product-hero-400.jpg 400w,
            product-hero-800.jpg 800w,
            product-hero-1200.jpg 1200w,
            product-hero-1600.jpg 1600w"
    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           800px"
    alt="Pong Party Games baseball party game setup"
/>
```

#### Alt Text Standards
- Describe what's visible: "Pong Party Games baseball stadium setup with crowd backdrop"
- Include brand name when relevant
- Describe activity for lifestyle shots: "Four friends playing Pong Party Games at backyard party"
- Keep under 125 characters
- No "image of" or "picture of" prefix

---

## 8. Button & CTA Standards

### Button Hierarchy

#### Primary Button (Red CTA)
```css
.btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 32px;
    background: #e63946;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px rgba(230, 57, 70, 0.2);
}

.btn-primary:hover {
    background: #d62839;
    transform: translateY(-1px);
    box-shadow: 0 6px 12px rgba(230, 57, 70, 0.3);
}

.btn-primary:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(230, 57, 70, 0.2);
}
```

**Usage**: Primary CTAs, "Buy Now", "Add to Cart", "Checkout", "Subscribe"

#### Secondary Button (Navy Outline)
```css
.btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 32px;
    background: transparent;
    color: #1a2b4a;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    border: 2px solid #1a2b4a;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;
}

.btn-secondary:hover {
    background: #1a2b4a;
    color: #ffffff;
    transform: translateY(-1px);
}

.btn-secondary:active {
    transform: translateY(0);
}
```

**Usage**: "Customize", "Learn More", "View Details", secondary actions

### Button Sizing

#### Size Variations
```css
/* Small Button */
.btn-sm {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 6px;
}

/* Default Button (as above) */
.btn-md {
    padding: 16px 32px;
    font-size: 16px;
    border-radius: 8px;
}

/* Large Button */
.btn-lg {
    padding: 18px 40px;
    font-size: 18px;
    border-radius: 10px;
}
```

### Button States

#### Disabled State
```css
.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}
```

#### Loading State
```css
.btn-loading {
    position: relative;
    color: transparent;
}

.btn-loading::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
```

### CTA Placement Guidelines

**Homepage Hero Section**:
- Primary CTA: "Buy Now" (red button)
- Secondary CTA: "Customize" (navy outline)
- Horizontal layout with 16px gap
- Full-width on mobile (< 640px)
- Side-by-side on tablet+ (> 640px)

**Product Pages**:
- Primary CTA: "Add to Cart" (red button)
- Secondary CTA: "Save for Later" (navy outline)
- Sticky on mobile, inline on desktop

**Navigation**:
- "Shop" button in nav: red primary button
- Keep visible on all viewports
- Maintain accessibility on colored backgrounds

### Button Copy Guidelines

**DO:**
- Use action verbs: "Buy", "Shop", "Customize", "Get Started"
- Keep it short: 1-3 words ideal
- Be specific: "Buy Now" not "Click Here"
- Create urgency when appropriate: "Shop Now", "Get Yours"

**DON'T:**
- Use vague language: "Learn More" (use "See Details" instead)
- Be too clever: Clarity > creativity for CTAs
- Use all caps unless brand voice requires it
- Use passive voice: "Order Yours" not "Be Ordered"

---

## 9. Navigation Standards

### Primary Navigation Structure

#### Desktop Navigation (> 1024px)
```css
.nav-desktop {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0;
    padding: 16px 32px;
    background: #1a2b4a;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    border-radius: 24px;
    transition: background 0.2s ease;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
    background: rgba(255, 255, 255, 0.15);
}
```

#### Navigation Links (from Homepage)
1. **Home** (house icon)
2. **Shop** (shopping cart icon - primary red button)
3. **Custom Games** (customize/settings icon)
4. **Testimonials** (star/quote icon)
5. **How to Play** (play circle icon)
6. **About** (info icon)

#### Navigation Icons
- Size: 20px
- Stroke: 2px
- Style: Line icons, rounded
- Color: White (#ffffff)
- Position: Left of text label

### Mobile Navigation (< 1024px)

#### Hamburger Menu Pattern
```css
.nav-mobile {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: #1a2b4a;
    padding: 80px 24px 24px;
    transition: right 0.3s ease;
    z-index: 1000;
}

.nav-mobile.open {
    right: 0;
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.3);
}

.nav-mobile-link {
    display: block;
    padding: 16px 0;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### Mobile Menu Button
```css
.hamburger {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 32px;
    height: 32px;
    padding: 4px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.hamburger-line {
    width: 100%;
    height: 3px;
    background: #1a2b4a;
    border-radius: 2px;
    transition: all 0.3s ease;
}

.hamburger.open .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.open .hamburger-line:nth-child(2) {
    opacity: 0;
}

.hamburger.open .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
}
```

### Navigation Behavior Rules

**Desktop**:
- Fixed position or static at top
- Always visible (no auto-hide)
- Links have hover states
- "Shop" button always stands out with red background
- Smooth scroll to sections on single-page layouts

**Mobile**:
- Hamburger menu in top-right
- Slide-in drawer from right
- Full-height overlay
- Close button visible and accessible
- Links stack vertically with ample touch targets (min 44px height)
- "Shop" button maintains prominence

**Both**:
- Logo/brand always links to homepage
- Current page indicated with active state
- Keyboard accessible (tab navigation)
- Focus states visible for accessibility

---

## 10. Animation & Interaction Guidelines

### Animation Principles

#### Core Philosophy
- **Purposeful**: Every animation serves a function (feedback, guidance, delight)
- **Subtle**: Animations enhance, don't distract
- **Fast**: Keep duration under 400ms for UI elements
- **Smooth**: Use easing functions, avoid linear timing

### Standard Animation Timings

```css
/* Timing Variables */
--duration-fast: 150ms;      /* Hover states, quick feedback */
--duration-normal: 250ms;    /* Standard transitions */
--duration-slow: 400ms;      /* Larger movements, fades */

/* Easing Functions */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Interaction Animations

#### Button Hover & Press
```css
.button {
    transition: all var(--duration-normal) var(--ease-out);
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.button:active {
    transform: translateY(0);
    transition-duration: var(--duration-fast);
}
```

#### Card Hover
```css
.card {
    transition: transform var(--duration-normal) var(--ease-out),
                box-shadow var(--duration-normal) var(--ease-out);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}
```

#### Link Underline
```css
.text-link {
    position: relative;
    text-decoration: none;
}

.text-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width var(--duration-normal) var(--ease-out);
}

.text-link:hover::after {
    width: 100%;
}
```

### Page Load Animations

#### Fade In on Load
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-on-load {
    animation: fadeIn var(--duration-slow) var(--ease-out);
}
```

#### Staggered Element Entry
```css
.stagger-1 { animation-delay: 0ms; }
.stagger-2 { animation-delay: 100ms; }
.stagger-3 { animation-delay: 200ms; }
.stagger-4 { animation-delay: 300ms; }
```

### Scroll-Triggered Animations

#### Intersection Observer Pattern
```javascript
// Fade in elements as they scroll into view
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});
```

```css
.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity var(--duration-slow) var(--ease-out),
                transform var(--duration-slow) var(--ease-out);
}

.animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
}
```

### Loading States

#### Skeleton Loader
```css
@keyframes skeleton-loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}

.skeleton {
    background: linear-gradient(
        90deg,
        #f0f0f0 0%,
        #e0e0e0 50%,
        #f0f0f0 100%
    );
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s ease-in-out infinite;
    border-radius: 4px;
}
```

#### Spinner
```css
@keyframes spin {
    to { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(26, 43, 74, 0.1);
    border-top-color: #1a2b4a;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}
```

### Animation Accessibility

#### Respect Reduced Motion
```css
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

### Animation Rules

**DO:**
- Use for feedback (button clicks, form submissions)
- Guide attention (new content appearing)
- Add delight (subtle hover effects)
- Respect user preferences (reduced motion)
- Test on slower devices

**DON'T:**
- Animate everything constantly
- Use animations longer than 500ms for UI
- Create distracting or jarring movements
- Ignore performance impact
- Block interactions during animations

---

## 11. Accessibility Standards

### WCAG 2.1 Compliance

**Target Level**: AA (minimum), AAA where feasible

### Color Contrast Requirements

#### Text Contrast
- **Normal Text** (< 18px): Minimum 4.5:1 ratio
- **Large Text** (≥ 18px or ≥ 14px bold): Minimum 3:1 ratio
- **UI Components**: Minimum 3:1 ratio against adjacent colors

#### Approved Combinations
| Background | Foreground | Ratio | Pass |
|------------|-----------|-------|------|
| White | Navy (#1a2b4a) | 12.6:1 | AAA |
| White | Charcoal (#2d3748) | 11.4:1 | AAA |
| Navy | White | 12.6:1 | AAA |
| Red (#e63946) | White | 4.8:1 | AA |
| Blue (#0066cc) | White | 4.9:1 | AA |

### Keyboard Navigation

#### Tab Order
- Logical flow: top to bottom, left to right
- Skip to main content link at page top
- All interactive elements keyboard accessible
- Focus indicators always visible

#### Focus States
```css
*:focus {
    outline: 3px solid #0066cc;
    outline-offset: 2px;
}

/* Alternative for buttons */
.button:focus {
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.4);
    outline: none;
}
```

### Screen Reader Support

#### Semantic HTML
```html
<!-- Correct structure -->
<header>
    <nav aria-label="Primary navigation">
        <ul role="list">
            <li><a href="/">Home</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h1>Page Title</h1>
        <section>
            <h2>Section Title</h2>
        </section>
    </article>
</main>

<footer>
    <!-- Footer content -->
</footer>
```

#### ARIA Labels
```html
<!-- Icon buttons need labels -->
<button aria-label="Open menu" class="hamburger">
    <span class="sr-only">Menu</span>
    <!-- Icon SVG -->
</button>

<!-- Images need meaningful alt text -->
<img src="product.jpg" 
     alt="Pong Party Games baseball stadium setup">

<!-- Navigation current page -->
<a href="/" aria-current="page">Home</a>

<!-- Loading states -->
<button aria-busy="true" aria-label="Processing">
    <span class="spinner" aria-hidden="true"></span>
</button>
```

#### Screen Reader Only Text
```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

### Touch Targets

#### Minimum Sizes
- **Minimum**: 44x44px for all touch targets
- **Recommended**: 48x48px for primary actions
- **Spacing**: Minimum 8px between adjacent touch targets

```css
.touch-target {
    min-width: 44px;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
```

### Form Accessibility

#### Required Elements
```html
<form>
    <label for="email">
        Email Address
        <span aria-label="required">*</span>
    </label>
    <input 
        type="email" 
        id="email" 
        name="email"
        required
        aria-required="true"
        aria-describedby="email-error"
        aria-invalid="false"
    />
    <span id="email-error" role="alert"></span>
</form>
```

#### Error Handling
```html
<input 
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
/>
<span id="email-error" role="alert">
    Please enter a valid email address
</span>
```

### Motion & Animation

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Testing Requirements

#### Accessibility Testing Checklist
- [ ] All images have meaningful alt text
- [ ] Color contrast passes WCAG AA for all text
- [ ] Keyboard navigation works throughout site
- [ ] Focus indicators visible on all interactive elements
- [ ] Forms have proper labels and error messages
- [ ] Headings follow logical hierarchy (h1 → h2 → h3)
- [ ] Screen reader testing completed
- [ ] Touch targets minimum 44x44px
- [ ] Skip to main content link present
- [ ] ARIA labels used appropriately
- [ ] Reduced motion preferences respected
- [ ] No keyboard traps

#### Tools for Testing
- **axe DevTools**: Browser extension for automated testing
- **WAVE**: Web accessibility evaluation tool
- **Screen Readers**: NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android)
- **Keyboard Only**: Navigate site using only Tab, Enter, Space, Arrow keys
- **Color Contrast Analyzer**: Ensure all text meets WCAG standards

---

## Implementation Checklist

### Before Starting Development
- [ ] Review all brand guidelines thoroughly
- [ ] Set up CSS variables for colors, spacing, typography
- [ ] Configure font loading (Google Fonts: Fredoka + Inter)
- [ ] Establish base styles and resets
- [ ] Create component library with button styles
- [ ] Set up responsive breakpoints

### Quality Assurance
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness on multiple devices
- [ ] Accessibility audit completed
- [ ] Performance optimization (images, fonts, code)
- [ ] Color contrast validation
- [ ] Keyboard navigation testing

### Brand Consistency
- [ ] All colors from approved palette only
- [ ] Fredoka for headlines, Inter for body
- [ ] Proper spacing using scale
- [ ] Consistent corner radius
- [ ] Shadow system applied correctly
- [ ] Icon style matches guidelines

---

## Version Control & Updates

**Current Version**: 1.0
**Last Updated**: January 2026
**Next Review**: Q2 2026

### Change Log
- **v1.0 (Jan 2026)**: Initial brand guidelines established based on homepage design

---

## Contact & Questions

For questions about these brand guidelines or design review requests:
- **Design Team**: [To be added]
- **Brand Manager**: [To be added]
- **Developer Support**: [To be added]

---

*These guidelines are living documents. Suggest updates and improvements as the brand evolves.*
