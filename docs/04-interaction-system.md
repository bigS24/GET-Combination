# Interaction System

This document defines all animation, interaction, and motion design specifications for the GET website.

---

## Animation Principles

### Core Philosophy
Motion should serve a purpose: guide attention, provide feedback, and create delight—never distract or confuse. All animations must be performant, accessible, and progressively enhanced.

### 1. Purposeful Motion
Every animation must have a clear purpose:
- **Guide:** Direct user attention to important elements
- **Feedback:** Confirm user actions (clicks, hovers, form submission)
- **Context:** Show relationships between elements
- **Delight:** Create memorable, premium experience

**Rule:** If you can't articulate the purpose of an animation, remove it.

### 2. Performance First
- Prioritize CSS transforms and opacity over layout-triggering properties
- Use `will-change` sparingly and only when needed
- Animate at 60fps minimum
- Test on low-end devices
- Reduce animation complexity for mobile

### 3. Accessibility First
- Respect `prefers-reduced-motion` media query
- Provide meaningful fallbacks for users who disable motion
- Never use motion to convey critical information
- Ensure animations don't trigger vestibular disorders
- Keep animations under 5 seconds for users with attention concerns

### 4. Progressive Enhancement
- Core functionality works without JavaScript
- Basic animations use CSS
- Advanced animations use GSAP/Three.js as enhancement
- Graceful degradation if libraries fail to load

---

## Timing & Easing

### Standard Durations

```javascript
const DURATION = {
  instant: 100,      // Micro-interactions, button presses
  fast: 200,         // Hover states, simple transitions
  normal: 300,       // Modal open/close, menu transitions
  slow: 500,         // Scroll-triggered reveals
  deliberate: 800,   // Complex animations
  cinematic: 1200,   // Hero animations
  page: 400,         // Page transitions
}
```

### Easing Functions

```javascript
const EASING = {
  // CSS cubic-bezier values
  easeOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',      // Smooth deceleration
  easeIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',    // Smooth acceleration
  easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',   // Both
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Overshoot end
  easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',   // Overshoot start
  easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',        // Fast start, slow end
  easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',    // Circular
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',            // Spring effect
}
```

### Usage Guidelines

| Interaction Type | Duration | Easing |
|-----------------|----------|---------|
| Hover states | 200ms | easeOut |
| Click/press | 100ms | easeOut |
| Modal open | 300ms | easeOutBack |
| Modal close | 200ms | easeIn |
| Menu toggle | 300ms | easeOutExpo |
| Scroll reveal | 500ms | easeOut |
| Text reveal | 800ms | easeOutExpo |
| Hero load | 1200ms | easeOutExpo |
| Page transition | 400ms | easeInOut |
| Number counter | 1500ms | easeOutExpo |

---

## GSAP ScrollTriggered Animations

### Setup & Configuration

```typescript
// gsap/animations.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Global configuration
const SCROLL_CONFIG = {
  start: 'top 80%',      // Animation starts when top hits 80% viewport
  end: 'bottom 20%',     // Animation ends when bottom hits 20% viewport
  toggleActions: 'play none none reverse', // Play on enter, reverse on leave
  scrub: false,          // Don't bind animation to scrollbar
}
```

### 1. Fade Up Animation
**Use case:** Section headings, feature cards, testimonials

```typescript
export function fadeUp(element: Element, delay = 0) {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}
```

### 2. Staggered Cards Animation
**Use case:** Service cards, case studies grid

```typescript
export function staggerCards(container: Element, selector: string) {
  return gsap.fromTo(
    selector,
    {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.1, // 100ms delay between each card
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
      },
    }
  )
}
```

### 3. Parallax Image
**Use case:** Case study images, hero backgrounds

```typescript
export function parallaxImage(element: Element, intensity = 0.2) {
  return gsap.to(element, {
    y: () => window.innerHeight * intensity,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true, // Bind to scrollbar
    },
  })
}
```

### 4. Horizontal Scroll (Marquee)
**Use case:** Logo scrolls, testimonial marquee

```typescript
export function marqueeScroll(container: Element, speed = 1) {
  const content = container.querySelector('.marquee-content')
  if (!content) return

  // Clone content for seamless loop
  const clone = content.cloneNode(true)
  container.appendChild(clone)

  const tween = gsap.to(container, {
    xPercent: -50,
    ease: 'none',
    duration: 20 / speed,
    repeat: -1,
  })

  // Pause on hover
  container.addEventListener('mouseenter', () => tween.pause())
  container.addEventListener('mouseleave', () => tween.play())

  return tween
}
```

### 5. Text Reveal (Word by Word)
**Use case:** Hero headlines, section headings

```typescript
export function revealText(element: Element) {
  // Split text into words
  const words = element.textContent?.split(' ') || []
  element.innerHTML = words
    .map(word => `<span class="word">${word}</span>`)
    .join(' ')

  const wordElements = element.querySelectorAll('.word')

  gsap.set(wordElements, { opacity: 0, y: 20 })

  return gsap.to(wordElements, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.05,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
    },
  })
}
```

### 6. Draw SVG Path
**Use case:** Animated icons, connecting lines, process diagrams

```typescript
export function drawPath(pathElement: SVGPathElement) {
  const length = pathElement.getTotalLength()

  gsap.set(pathElement, {
    strokeDasharray: length,
    strokeDashoffset: length,
  })

  return gsap.to(pathElement, {
    strokeDashoffset: 0,
    duration: 1.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: pathElement,
      start: 'top 80%',
    },
  })
}
```

### 7. Counter Animation
**Use case:** Metrics, statistics, results numbers

```typescript
export function animateCounter(element: HTMLElement, target: number) {
  return gsap.to(element, {
    innerText: target,
    duration: 2,
    ease: 'power2.out',
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true, // Only animate once
    },
    onUpdate: function() {
      element.innerText = Math.round(this.targets()[0].innerText).toLocaleString()
    },
  })
}
```

### 8. Pin Section
**Use case:** Case study hero, process timeline

```typescript
export function pinSection(container: Element, duration = '100%') {
  return ScrollTrigger.create({
    trigger: container,
    start: 'top top',
    end: `+=${duration}`,
    pin: true,
    pinSpacing: true,
  })
}
```

---

## Three.js Hero Scene (Node Network)

### Scene Overview
A 3D interactive node network representing data connections, automation, and digital transformation. Nodes connect dynamically, respond to mouse movement, and float organically.

### Implementation

```typescript
// threejs/hero-scene.ts
import * as THREE from 'three'
import { useEffect, useRef } from 'react'

interface NodeNetworkConfig {
  nodeCount: number
  connectionDistance: number
  mouseInfluence: number
  floatSpeed: number
}

export function useNodeNetwork(canvas: HTMLCanvasElement, config: NodeNetworkConfig) {
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationRef = useRef<number>()

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion || !canvas) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 50

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit to 2x for performance
    rendererRef.current = renderer

    // Nodes
    const nodes: THREE.Mesh[] = []
    const nodeGeometry = new THREE.SphereGeometry(0.5, 16, 16)
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x1A1AFF, // Electric blue
      transparent: true,
      opacity: 0.8,
    })

    for (let i = 0; i < config.nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone())
      node.position.x = (Math.random() - 0.5) * 100
      node.position.y = (Math.random() - 0.5) * 60
      node.position.z = (Math.random() - 0.5) * 40
      node.userData = {
        originalX: node.position.x,
        originalY: node.position.y,
        originalZ: node.position.z,
        floatOffset: Math.random() * Math.PI * 2,
        floatSpeed: config.floatSpeed * (0.5 + Math.random() * 0.5),
      }
      scene.add(node)
      nodes.push(node)
    }

    // Lines (connections)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x1A1AFF,
      transparent: true,
      opacity: 0.15,
    })

    const linesGeometry = new THREE.BufferGeometry()
    const lines = new THREE.LineSegments(linesGeometry, lineMaterial)
    scene.add(lines)

    // Mouse tracking
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let time = 0
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      time += 0.016

      // Smooth mouse
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Update nodes
      nodes.forEach((node, i) => {
        // Floating motion
        node.position.x = node.userData.originalX + Math.sin(time * node.userData.floatSpeed + node.userData.floatOffset) * 2
        node.position.y = node.userData.originalY + Math.cos(time * node.userData.floatSpeed + node.userData.floatOffset) * 2
        node.position.z = node.userData.originalZ + Math.sin(time * node.userData.floatSpeed * 0.5 + node.userData.floatOffset) * 1

        // Mouse influence
        node.position.x += mouseX * config.mouseInfluence * 0.1
        node.position.y += mouseY * config.mouseInfluence * 0.1

        // Scale based on distance to center
        const dist = node.position.length()
        const scale = 1 + Math.sin(dist * 0.1 + time) * 0.2
        node.scale.setScalar(scale)
      })

      // Update connections
      const positions: number[] = []
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position)
          if (distance < config.connectionDistance) {
            positions.push(
              nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
              nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
            )
          }
        }
      }
      linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

      // Subtle camera movement
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.02
      camera.position.y += (mouseY * 3 - camera.position.y) * 0.02
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      renderer.dispose()
      nodeGeometry.dispose()
      nodeMaterial.dispose()
      lineMaterial.dispose()
      linesGeometry.dispose()
    }
  }, [canvas, config, prefersReducedMotion])
}
```

### Performance Optimizations

1. **Reduced Motion Check:**
```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (prefersReducedMotion) {
  // Show static gradient background instead
  return
}
```

2. **Dynamic Node Count:**
```typescript
const nodeCount = window.innerWidth < 768 ? 30 : 60  // Fewer nodes on mobile
```

3. **Pixel Ratio Limiting:**
```typescript
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))  // Max 2x
```

4. **Lazy Load Scene:**
```typescript
// Only initialize when hero is in viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      initializeScene()
      observer.disconnect()
    }
  })
})
```

5. **Visibility API:**
```typescript
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(animationRef)  // Pause when tab hidden
  } else {
    animate()  // Resume when visible
  }
})
```

---

## Micro-Interactions

### Buttons

#### Primary Button
```css
.btn-primary {
  position: relative;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(26, 26, 255, 0.3);
}

.btn-primary:active {
  transform: translateY(0) scale(0.98);
}

/* Ripple effect */
.btn-primary::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.4s ease-out, height 0.4s ease-out, opacity 0.4s ease-out;
}

.btn-primary:hover::after {
  width: 300px;
  height: 300px;
  opacity: 0;
}
```

#### Secondary Button
```css
.btn-secondary {
  position: relative;
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.btn-secondary::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #1A1AFF;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.btn-secondary:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
```

### Cards

#### Service Card
```css
.service-card {
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.service-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-card:hover .card-arrow {
  transform: translateX(4px);
}
```

#### Case Study Card
```css
.case-card {
  overflow: hidden;
}

.case-card__image {
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.case-card:hover .case-card__image {
  transform: scale(1.08);
}

.case-card__overlay {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.case-card:hover .case-card__overlay {
  opacity: 1;
}
```

### Form Fields

```css
.form-field {
  position: relative;
}

.form-field__input {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-field__input:focus {
  border-color: #1A1AFF;
  box-shadow: 0 0 0 3px rgba(26, 26, 255, 0.1);
}

.form-field__label {
  transition: all 0.2s ease;
}

.form-field__input:focus + .form-field__label,
.form-field__input:not(:placeholder-shown) + .form-field__label {
  transform: translateY(-28px) scale(0.85);
  color: #1A1AFF;
}
```

### Navigation Items

```css
.nav-link {
  position: relative;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #1A1AFF;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}
```

---

## Page Transitions

### Transition System Architecture

```typescript
// components/page-transition.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.55, 0.055, 0.675, 0.19],
    },
  },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
```

### Smooth Scroll

```typescript
// hooks/use-smooth-scroll.ts
export function useSmoothScroll() {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    window.scrollTo({
      top: element.offsetTop - 80, // Account for sticky header
      behavior: 'smooth',
    })
  }

  return { scrollTo }
}
```

---

## Reduced Motion Fallbacks

### Implementation Pattern

```typescript
// utils/animation.ts
export const canUseMotion = () => {
  if (typeof window === 'undefined') return false
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Usage
export function animateElement(element: Element) {
  if (!canUseMotion()) {
    // Show element immediately, no animation
    gsap.set(element, { opacity: 1 })
    return
  }

  // Normal animation
  return gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.5 }
  )
}
```

### CSS-Only Fallbacks

```css
/* By default, elements are visible */
.reveal-on-scroll {
  opacity: 1;
  transform: none;
}

/* If motion is NOT reduced, hide initially and animate */
@media (prefers-reduced-motion: no-preference) {
  .reveal-on-scroll {
    opacity: 0;
    transform: translateY(30px);
  }

  .reveal-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
}
```

### Three.js Fallback

```typescript
// components/hero-background.tsx
export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Static gradient fallback
    return (
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0F0F1A] to-[#0A0A0A]"
      />
    )
  }

  // Three.js scene
  return <canvas ref={canvasRef} className="absolute inset-0" />
}
```

---

## Performance Rules

### 1. Animation Budget

| Metric | Target | Threshold |
|--------|--------|-----------|
| Initial JS bundle | < 100KB | Critical |
| First paint | < 1.5s | Critical |
| Time to interactive | < 3s | Critical |
| FPS during animations | 60fps | Critical |
| Janky frames (>50ms) | < 5% | Warning |

### 2. Optimization Checklist

- [ ] Use `transform` and `opacity` only for animations
- [ ] Avoid animating `width`, `height`, `margin`, `padding`
- [ ] Use `will-change` only on animating elements
- [ ] Remove `will-change` after animation completes
- [ ] Use `requestAnimationFrame` for JS animations
- [ ] Throttle/Debounce scroll and resize handlers
- [ ] Lazy load off-screen animations
- [ ] Cancel animations when elements leave viewport
- [ ] Use Intersection Observer for scroll triggers
- [ ] Limit concurrent animations (max 4-6)
- [ ] Test on low-end devices (iPhone SE, budget Android)
- [ ] Monitor FPS with Chrome DevTools Performance tab
- [ ] Use `contain` property for isolated animations

### 3. GSAP Performance Tips

```typescript
// Good: Simple transform
gsap.to(element, { x: 100, duration: 1 })

// Bad: Triggers layout
gsap.to(element, { width: 100, duration: 1 })

// Good: Batch animations
gsap.to('.card', { y: 0, opacity: 1, stagger: 0.1 })

// Bad: Separate timelines for similar elements
elements.forEach(el => gsap.to(el, { y: 0, opacity: 1 }))

// Good: Reuse tweens
const tween = gsap.to(element, { x: 100, paused: true })
// Later: tween.play() or tween.reverse()

// Good: Kill unused tweens
ScrollTrigger.getAll().forEach(trigger => trigger.kill())
```

### 4. Three.js Performance Tips

```typescript
// Good: Share geometries
const geometry = new THREE.SphereGeometry(0.5, 16, 16)
nodes.forEach(node => node.geometry = geometry)

// Good: Share materials where possible
const material = new THREE.MeshBasicMaterial({ color: 0x1A1AFF })
nodes.forEach(node => node.material = material)

// Good: Limit pixel ratio
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Good: Use instanced mesh for many identical objects
const instancedMesh = new THREE.InstancedMesh(geometry, material, count)

// Good: Dispose unused resources
geometry.dispose()
material.dispose()
texture.dispose()

// Good: Use object pooling for frequently created/destroyed objects
// Bad: Create new objects every frame
```

### 5. Mobile Optimizations

```typescript
// Reduce complexity on mobile
const config = {
  nodeCount: window.innerWidth < 768 ? 20 : 60,
  connectionDistance: window.innerWidth < 768 ? 15 : 25,
  floatSpeed: window.innerWidth < 768 ? 0.5 : 1,
}

// Disable heavy animations on mobile
const enableParallax = window.innerWidth > 768 && canUseMotion()

// Use simplified easing on mobile
const mobileEasing = window.innerWidth < 768 ? 'power1.out' : 'power2.out'
```

---

## Loading States

### Page Load Animation

```typescript
// components/loading-screen.tsx
export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    })

    tl.fromTo('.loading-bar', { width: '0%' }, { width: '100%', duration: 1, ease: 'power2.inOut' })
      .to('.loading-content', { opacity: 0, duration: 0.3 }, '+=0.2')
      .to('.loading-screen', { yPercent: -100, duration: 0.5, ease: 'power4.inOut' })
  }, [onComplete])

  return (
    <div className="loading-screen fixed inset-0 z-[9999] bg-[#0A0A0A]">
      <div className="loading-content absolute inset-0 flex items-center justify-center">
        <div className="loading-bar h-[2px] w-[200px] bg-[#1A1AFF]" />
      </div>
    </div>
  )
}
```

### Image Loading

```typescript
// components/lazy-image.tsx
export function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className="overflow-hidden">
      <img
        src={inView ? src : undefined}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}
```

---

## Interaction States

### Loading State
- Show spinner or skeleton UI
- Disable interactive elements
- Maintain layout stability

### Hover State
- Provide clear visual feedback
- Use 200-300ms transitions
- Avoid disruptive movements

### Active/Press State
- Immediate feedback (scale down 0.98)
- Clear visual change
- Tactile feel

### Focus State (Keyboard)
- Visible 2px outline/ring
- High contrast (#1A1AFF)
- Offset from content

### Disabled State
- Lower opacity (0.5)
- Remove hover effects
- Clear "disabled" cursor
- Maintain readability

### Error State
- Red accent (#FF3333)
- Shake animation (300ms)
- Clear error message
- Highlight problematic field

### Success State
- Green accent (#22C55E)
- Checkmark animation
- Positive feedback
- Auto-dismiss after 3 seconds
