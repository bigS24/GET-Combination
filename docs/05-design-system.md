# Design System

Complete design token system for GET website. Tokens are organized by semantic purpose and implemented using CSS Custom Properties for consistency and maintainability.

---

## Token System Architecture

### Token Categories

```css
:root {
  /* Colors */
  --color-...;

  /* Typography */
  --font-...;
  --text-...;

  /* Spacing */
  --space-...;

  /* Borders */
  --border-...;

  /* Shadows */
  --shadow-...;

  /* Animation */
  --ease-...;
  --duration-...;

  /* Z-index */
  --z-...;

  /* Layout */
  --container-...;
  --grid-...;
}
```

### Usage Pattern

```css
.component {
  color: var(--color-text-primary);
  font: var(--text-body-lg);
  padding: var(--space-6);
  border: var(--border-width) var(--border-style) var(--color-border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-fast) var(--ease-out);
}
```

---

## Color Palette

### Base Colors (Two-Tone Theme)

```css
:root {
  /* Light mode base (dark theme inverted for light mode) */
  --color-bg-primary: #0A0A0A;      /* Deepest black - main background */
  --color-bg-secondary: #111111;    /* Slightly lighter - cards, sections */
  --color-bg-tertiary: #1A1A1A;     /* Medium dark - nested elements */
  --color-bg-elevated: #222222;     /* Lightest dark - elevated elements */

  /* Light mode (inverted) */
  --color-bg-primary-light: #FAFAFA;
  --color-bg-secondary-light: #F5F5F5;
  --color-bg-tertiary-light: #EAEAEA;
  --color-bg-elevated-light: #FFFFFF;
}
```

### Accent Color (Electric Blue)

```css
:root {
  --color-accent-primary: #1A1AFF;      /* Main accent - CTAs, links */
  --color-accent-hover: #0505E0;        /* Hover state */
  --color-accent-light: #4D4DFF;       /* Light variant - badges, tags */
  --color-accent-faint: rgba(26, 26, 255, 0.1);  /* Subtle backgrounds */
  --color-accent-glow: rgba(26, 26, 255, 0.4);  /* Glows, shadows */
}
```

### Semantic Colors

```css
:root {
  /* Success */
  --color-success-primary: #22C55E;
  --color-success-bg: rgba(34, 197, 94, 0.1);
  --color-success-border: rgba(34, 197, 94, 0.3);

  /* Error */
  --color-error-primary: #FF3333;
  --color-error-bg: rgba(255, 51, 51, 0.1);
  --color-error-border: rgba(255, 51, 51, 0.3);

  /* Warning */
  --color-warning-primary: #F59E0B;
  --color-warning-bg: rgba(245, 158, 11, 0.1);
  --color-warning-border: rgba(245, 158, 11, 0.3);

  /* Info */
  --color-info-primary: #3B82F6;
  --color-info-bg: rgba(59, 130, 246, 0.1);
  --color-info-border: rgba(59, 130, 246, 0.3);
}
```

### Text Colors

```css
:root {
  /* Primary text */
  --color-text-primary: #FAFAFA;        /* Headings, body text */
  --color-text-secondary: #A0A0A0;      /* Subtitles, descriptions */
  --color-text-tertiary: #6B6B6B;       /* Captions, labels */
  --color-text-disabled: #4A4A4A;       /* Disabled state */

  /* On accent backgrounds */
  --color-text-on-accent: #FFFFFF;
  --color-text-on-accent-hover: #F0F0F0;

  /* Light mode variants */
  --color-text-primary-light: #0A0A0A;
  --color-text-secondary-light: #333333;
  --color-text-tertiary-light: #666666;
  --color-text-disabled-light: #999999;
}
```

### Border Colors

```css
:root {
  --color-border-primary: #2A2A2A;      /* Main borders */
  --color-border-secondary: #333333;    /* Subtle borders */
  --color-border-subtle: #1F1F1F;       /* Very subtle borders */
  --color-border-focus: #1A1AFF;        /* Focus state */

  /* Light mode variants */
  --color-border-primary-light: #E0E0E0;
  --color-border-secondary-light: #D0D0D0;
  --color-border-subtle-light: #E8E8E8;
}
```

### Gradients

```css
:root {
  /* Hero gradient */
  --gradient-hero: linear-gradient(135deg, #0A0A0A 0%, #0F0F1A 50%, #0A0A0A 100%);

  /* Accent gradient */
  --gradient-accent: linear-gradient(135deg, #1A1AFF 0%, #4D4DFF 100%);

  /* Subtle mesh gradient */
  --gradient-mesh: radial-gradient(ellipse at top, rgba(26, 26, 255, 0.15) 0%, transparent 50%),
                   radial-gradient(ellipse at bottom right, rgba(26, 26, 255, 0.1) 0%, transparent 50%);
}
```

---

## Typography

### Font Families

```css
:root {
  /* Display font - headings, hero text */
  --font-display: 'Syne', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display-weight: 700;

  /* Body font - paragraphs, UI text */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body-weight: 400;
  --font-body-weight-medium: 500;
  --font-body-weight-semibold: 600;

  /* Code font - technical content, code snippets */
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', monospace;
}
```

### Font Sizes (Type Scale)

```css
:root {
  /* Display scale (exponential) */
  --text-display-xl: clamp(3rem, 8vw, 6rem);     /* 48-96px */
  --text-display-lg: clamp(2.5rem, 6vw, 4.5rem);  /* 40-72px */
  --text-display-md: clamp(2rem, 5vw, 3.5rem);   /* 32-56px */
  --text-display-sm: clamp(1.5rem, 4vw, 2.5rem);  /* 24-40px */

  /* Heading scale (modular) */
  --text-h1: clamp(1.875rem, 4vw, 3rem);        /* 30-48px */
  --text-h2: clamp(1.5rem, 3vw, 2.25rem);       /* 24-36px */
  --text-h3: clamp(1.25rem, 2.5vw, 1.875rem);   /* 20-30px */
  --text-h4: clamp(1.125rem, 2vw, 1.5rem);      /* 18-24px */
  --text-h5: 1.125rem;                          /* 18px */
  --text-h6: 1rem;                               /* 16px */

  /* Body scale */
  --text-xl: 1.125rem;                          /* 18px */
  --text-lg: 1rem;                               /* 16px */
  --text-base: 0.9375rem;                        /* 15px */
  --text-sm: 0.875rem;                           /* 14px */
  --text-xs: 0.75rem;                            /* 12px */
}
```

### Font Weights

```css
:root {
  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
}
```

### Line Heights

```css
:root {
  --leading-tight: 1.1;
  --leading-snug: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --leading-loose: 1.8;
}
```

### Letter Spacing

```css
:root {
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
}
```

### Typography Tokens (Composite)

```css
:root {
  /* Display styles */
  --text-display: var(--font-display) var(--font-display-weight) var(--text-display-lg) / var(--leading-tight) var(--tracking-tight);
  --text-display-hero: var(--font-display) var(--font-display-weight) var(--text-display-xl) / 1 var(--tracking-tight);

  /* Heading styles */
  --text-h1-style: var(--font-display) var(--font-weight-bold) var(--text-h1) / var(--leading-snug) var(--tracking-tight);
  --text-h2-style: var(--font-display) var(--font-weight-bold) var(--text-h2) / var(--leading-snug) var(--tracking-tight);
  --text-h3-style: var(--font-display) var(--font-weight-semibold) var(--text-h3) / var(--leading-snug) var(--tracking-tight);
  --text-h4-style: var(--font-body) var(--font-weight-semibold) var(--text-h4) / var(--leading-snug) var(--tracking-normal);

  /* Body styles */
  --text-body-lg: var(--font-body) var(--font-body-weight) var(--text-lg) / var(--leading-normal) var(--tracking-normal);
  --text-body: var(--font-body) var(--font-body-weight) var(--text-base) / var(--leading-normal) var(--tracking-normal);
  --text-body-sm: var(--font-body) var(--font-body-weight) var(--text-sm) / var(--leading-relaxed) var(--tracking-normal);

  /* Caption styles */
  --text-caption: var(--font-body) var(--font-body-weight-medium) var(--text-xs) / var(--leading-normal) var(--tracking-wide);
  --text-overline: var(--font-body) var(--font-weight-semibold) var(--text-xs) / var(--leading-normal) var(--tracking-widest);

  /* Code styles */
  --text-code: var(--font-mono) var(--font-weight-regular) 0.875rem / 1.5 var(--tracking-normal);
}
```

---

## Spacing

### Spacing Scale (4px base unit)

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
  --space-40: 10rem;     /* 160px */
  --space-48: 12rem;     /* 192px */
  --space-56: 14rem;     /* 224px */
  --space-64: 16rem;     /* 256px */
}
```

### Section Spacing

```css
:root {
  --section-padding-mobile: var(--space-12);      /* 48px */
  --section-padding-tablet: var(--space-20);     /* 80px */
  --section-padding-desktop: var(--space-32);    /* 128px */
}

@media (max-width: 640px) {
  :root {
    --section-padding: var(--section-padding-mobile);
  }
}

@media (min-width: 641px) and (max-width: 1023px) {
  :root {
    --section-padding: var(--section-padding-tablet);
  }
}

@media (min-width: 1024px) {
  :root {
    --section-padding: var(--section-padding-desktop);
  }
}
```

### Component Spacing

```css
:root {
  /* Buttons */
  --button-padding-x: var(--space-6);
  --button-padding-y: var(--space-3);
  --button-padding-x-sm: var(--space-4);
  --button-padding-y-sm: var(--space-2);
  --button-padding-x-lg: var(--space-8);
  --button-padding-y-lg: var(--space-4);

  /* Cards */
  --card-padding: var(--space-8);
  --card-padding-sm: var(--space-6);
  --card-padding-lg: var(--space-12);

  /* Form fields */
  --form-padding-x: var(--space-4);
  --form-padding-y: var(--space-3);

  /* Navigation */
  --nav-item-padding: var(--space-4);
  --nav-item-spacing: var(--space-2);
}
```

---

## Borders

### Border Widths

```css
:root {
  --border-width: 1px;
  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 3px;
}
```

### Border Styles

```css
:root {
  --border-style: solid;
  --border-style-dashed: dashed;
  --border-style-dotted: dotted;
}
```

### Border Radius

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;      /* 4px */
  --radius-md: 0.375rem;     /* 6px */
  --radius-lg: 0.5rem;       /* 8px */
  --radius-xl: 0.75rem;      /* 12px */
  --radius-2xl: 1rem;        /* 16px */
  --radius-3xl: 1.5rem;      /* 24px */
  --radius-full: 9999px;     /* Pill/circle */
}
```

### Component Border Tokens

```css
:root {
  /* Buttons */
  --button-border-radius: var(--radius-lg);
  --button-border-radius-sm: var(--radius-md);
  --button-border-radius-pill: var(--radius-full);

  /* Cards */
  --card-border-radius: var(--radius-xl);
  --card-border-radius-sm: var(--radius-lg);

  /* Inputs */
  --input-border-radius: var(--radius-md);
  --input-border-radius-lg: var(--radius-lg);

  /* Modals */
  --modal-border-radius: var(--radius-2xl);

  /* Tags/badges */
  --tag-border-radius: var(--radius-full);
}
```

---

## Shadows

### Shadow Scale

```css
:root {
  --shadow-none: none;

  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* Colored shadows (accent) */
  --shadow-accent-sm: 0 2px 8px rgba(26, 26, 255, 0.15);
  --shadow-accent-md: 0 4px 16px rgba(26, 26, 255, 0.2);
  --shadow-accent-lg: 0 8px 24px rgba(26, 26, 255, 0.3);
  --shadow-accent-glow: 0 0 40px rgba(26, 26, 255, 0.4);

  /* Inner shadows */
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}
```

### Component Shadow Tokens

```css
:root {
  /* Buttons */
  --button-shadow: var(--shadow-sm);
  --button-shadow-hover: var(--shadow-md);

  /* Cards */
  --card-shadow: var(--shadow-sm);
  --card-shadow-hover: var(--shadow-lg);

  /* Dropdowns/modals */
  --dropdown-shadow: var(--shadow-lg);
  --modal-shadow: var(--shadow-2xl);

  /* Navigation */
  --nav-shadow: var(--shadow-sm);
}
```

---

## Animation Tokens

### Duration Tokens

```css
:root {
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-deliberate: 800ms;
  --duration-cinematic: 1200ms;
}
```

### Easing Tokens

```css
:root {
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-in-back: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Animation Composite Tokens

```css
:root {
  /* Hover transitions */
  --transition-hover: all var(--duration-fast) var(--ease-out);

  /* Focus transitions */
  --transition-focus: box-shadow var(--duration-fast) var(--ease-out);

  /* Modal transitions */
  --transition-modal: all var(--duration-normal) var(--ease-out-back);

  /* Menu transitions */
  --transition-menu: all var(--duration-normal) var(--ease-out-expo);

  /* Scroll reveal */
  --transition-reveal: opacity var(--duration-slow) var(--ease-out),
                      transform var(--duration-slow) var(--ease-out);

  /* Page transitions */
  --transition-page: opacity var(--duration-normal) var(--ease-in-out),
                     transform var(--duration-normal) var(--ease-in-out);
}
```

---

## Z-Index Scale

```css
:root {
  --z-below: -1;
  --z-base: 0;
  --z-above: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
  --z-notification: 800;
  --z-overlay: 9999;
}
```

### Component Z-Index Tokens

```css
:root {
  --z-header: var(--z-sticky);
  --z-footer: var(--z-base);
  --z-dropdown: var(--z-dropdown);
  --z-mobile-menu: var(--z-modal);
  --z-modal-backdrop: var(--z-modal-backdrop);
  --z-modal: var(--z-modal);
  --z-tooltip: var(--z-tooltip);
  --z-notification: var(--z-notification);
  --z-threejs-canvas: var(--z-below);
}
```

---

## Layout

### Container Widths

```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
}
```

### Max Widths

```css
:root {
  --max-width-none: none;
  --max-width-xs: 20rem;     /* 320px */
  --max-width-sm: 24rem;     /* 384px */
  --max-width-md: 28rem;     /* 448px */
  --max-width-lg: 32rem;     /* 512px */
  --max-width-xl: 36rem;     /* 576px */
  --max-width-2xl: 42rem;    /* 672px */
  --max-width-3xl: 48rem;    /* 768px */
  --max-width-4xl: 56rem;    /* 896px */
  --max-width-5xl: 64rem;    /* 1024px */
  --max-width-6xl: 72rem;    /* 1152px */
  --max-width-7xl: 80rem;    /* 1280px */
  --max-width-prose: 65ch;   /* Optimal reading length */
}
```

### Grid System

```css
:root {
  --grid-cols-1: repeat(1, minmax(0, 1fr));
  --grid-cols-2: repeat(2, minmax(0, 1fr));
  --grid-cols-3: repeat(3, minmax(0, 1fr));
  --grid-cols-4: repeat(4, minmax(0, 1fr));
  --grid-cols-5: repeat(5, minmax(0, 1fr));
  --grid-cols-6: repeat(6, minmax(0, 1fr));
  --grid-cols-12: repeat(12, minmax(0, 1fr));

  /* Grid gaps */
  --gap-sm: var(--space-4);
  --gap-md: var(--space-6);
  --gap-lg: var(--space-8);
  --gap-xl: var(--space-12);
}
```

---

## Component Tokens

### Button Tokens

```css
:root {
  /* Primary button */
  --button-primary-bg: var(--color-accent-primary);
  --button-primary-bg-hover: var(--color-accent-hover);
  --button-primary-text: var(--color-text-on-accent);
  --button-primary-border: transparent;
  --button-primary-shadow: var(--shadow-accent-sm);
  --button-primary-shadow-hover: var(--shadow-accent-md);
  --button-primary-radius: var(--radius-lg);
  --button-primary-padding-x: var(--button-padding-x);
  --button-primary-padding-y: var(--button-padding-y);

  /* Secondary button */
  --button-secondary-bg: transparent;
  --button-secondary-bg-hover: var(--color-accent-faint);
  --button-secondary-text: var(--color-text-primary);
  --button-secondary-border: var(--color-border-primary);
  --button-secondary-border-hover: var(--color-accent-primary);
  --button-secondary-radius: var(--radius-lg);
  --button-secondary-padding-x: var(--button-padding-x);
  --button-secondary-padding-y: var(--button-padding-y);

  /* Ghost button */
  --button-ghost-bg: transparent;
  --button-ghost-bg-hover: var(--color-bg-tertiary);
  --button-ghost-text: var(--color-text-primary);
  --button-ghost-border: transparent;
  --button-ghost-radius: var(--radius-lg);
  --button-ghost-padding-x: var(--space-4);
  --button-ghost-padding-y: var(--space-3);
}
```

### Card Tokens

```css
:root {
  --card-bg: var(--color-bg-secondary);
  --card-bg-hover: var(--color-bg-tertiary);
  --card-border: var(--color-border-subtle);
  --card-border-hover: var(--color-border-primary);
  --card-radius: var(--radius-xl);
  --card-padding: var(--card-padding);
  --card-shadow: var(--shadow-sm);
  --card-shadow-hover: var(--shadow-lg);
}
```

### Input Tokens

```css
:root {
  --input-bg: var(--color-bg-tertiary);
  --input-bg-focus: var(--color-bg-elevated);
  --input-bg-disabled: var(--color-bg-secondary);
  --input-border: var(--color-border-primary);
  --input-border-focus: var(--color-accent-primary);
  --input-border-error: var(--color-error-primary);
  --input-text: var(--color-text-primary);
  --input-text-placeholder: var(--color-text-tertiary);
  --input-radius: var(--radius-md);
  --input-padding-x: var(--form-padding-x);
  --input-padding-y: var(--form-padding-y);
  --input-shadow: none;
  --input-shadow-focus: 0 0 0 3px var(--color-accent-faint);
}
```

### Navigation Tokens

```css
:root {
  --nav-bg: var(--color-bg-primary);
  --nav-bg-scrolled: rgba(10, 10, 10, 0.95);
  --nav-border: var(--color-border-subtle);
  --nav-height: 80px;
  --nav-height-scrolled: 64px;
  --nav-item-text: var(--color-text-secondary);
  --nav-item-text-hover: var(--color-text-primary);
  --nav-item-text-active: var(--color-accent-primary);
  --nav-item-underline: var(--color-accent-primary);
}
```

---

## Responsive Breakpoints

```css
:root {
  /* Breakpoint values */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* Media query pattern */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }

/* Mobile-first approach */
@media (max-width: 639px) { /* mobile only */ }
@media (min-width: 640px) and (max-width: 1023px) { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
```

---

## Swiss/Minimal Grid Rules

### Grid Philosophy
- **8px base unit:** All spacing and sizing aligns to 8px grid
- **Consistent rhythm:** Vertical spacing follows 8px, 16px, 24px, 32px, 48px, 64px, 96px
- **Clear hierarchy:** Size differences create visual hierarchy
- **Generous whitespace:** Don't fear negative space
- **Alignment first:** Everything aligns to grid lines

### Grid Implementation

```css
.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding-left: var(--space-6);
  padding-right: var(--space-6);
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--gap-lg);
}

@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--gap-lg);
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Alignment Rules

```css
/* Section spacing: 96px (12 * 8px) on desktop */
section {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}

/* Element spacing within sections: 48px (6 * 8px) */
section > * + * {
  margin-top: var(--space-12);
}

/* Tight spacing for related items: 24px (3 * 8px) */
.card-content > * + * {
  margin-top: var(--space-6);
}

/* Compact spacing for lists: 16px (2 * 8px) */
ul > li + li {
  margin-top: var(--space-4);
}
```

---

## Token Usage Examples

### Example 1: Button Component

```css
.btn {
  /* Reset */
  appearance: none;
  border: none;
  cursor: pointer;
  font-family: inherit;

  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  /* Spacing */
  padding: var(--button-primary-padding-y) var(--button-primary-padding-x);

  /* Typography */
  font: var(--text-body-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;

  /* Appearance */
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  border-radius: var(--button-primary-radius);
  box-shadow: var(--button-primary-shadow);

  /* Transition */
  transition: background var(--duration-fast) var(--ease-out),
              color var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);

  /* Focus */
  outline: none;
}

.btn:hover {
  background: var(--button-primary-bg-hover);
  box-shadow: var(--button-primary-shadow-hover);
  transform: translateY(-2px);
}

.btn:focus-visible {
  box-shadow: 0 0 0 3px var(--color-accent-faint),
              0 0 0 5px var(--color-accent-primary);
}

.btn:active {
  transform: translateY(0) scale(0.98);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
```

### Example 2: Card Component

```css
.card {
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Appearance */
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding);
  box-shadow: var(--card-shadow);

  /* Transition */
  transition: background var(--duration-normal) var(--ease-out),
              border-color var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out),
              transform var(--duration-normal) var(--ease-out);
}

.card:hover {
  background: var(--card-bg-hover);
  border-color: var(--card-border-hover);
  box-shadow: var(--card-shadow-hover);
  transform: translateY(-8px);
}

.card-title {
  margin: 0 0 var(--space-4) 0;
  font: var(--text-h3-style);
  color: var(--color-text-primary);
}

.card-content {
  margin-bottom: var(--space-6);
}

.card-footer {
  margin-top: auto;
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-border-subtle);
}
```

### Example 3: Form Input Component

```css
.form-field {
  margin-bottom: var(--space-6);
}

.form-label {
  display: block;
  margin-bottom: var(--space-2);
  font: var(--text-body-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.form-input {
  width: 100%;
  padding: var(--input-padding-y) var(--input-padding-x);
  font: var(--text-body);
  color: var(--input-text);
  background: var(--input-bg);
  border: var(--border-width) solid var(--input-border);
  border-radius: var(--input-radius);
  box-shadow: var(--input-shadow);
  transition: background var(--duration-fast) var(--ease-out),
              border-color var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
}

.form-input::placeholder {
  color: var(--input-text-placeholder);
}

.form-input:hover {
  border-color: var(--color-border-focus);
}

.form-input:focus {
  outline: none;
  background: var(--input-bg-focus);
  border-color: var(--input-border-focus);
  box-shadow: var(--input-shadow-focus);
}

.form-input:disabled {
  background: var(--input-bg-disabled);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

.form-input.error {
  border-color: var(--input-border-error);
}

.form-input.error:focus {
  box-shadow: 0 0 0 3px var(--color-error-bg);
}
```
