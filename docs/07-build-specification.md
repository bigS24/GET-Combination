# Build Specification

Complete technical specification for building the GET website. Covers stack, architecture, components, CMS, and SEO.

---

## Technology Stack

### Core Framework
- **Next.js 14** (App Router)
  - Server Components for optimal performance
  - Route groups for organization
  - Server Actions for form handling
  - Streaming for progressive rendering

### Language & Type Safety
- **TypeScript 5.3+**
  - Strict mode enabled
  - Path aliases configured
  - Type checking in CI/CD

### Styling
- **Tailwind CSS 3.4+**
  - Custom design tokens via CSS variables
  - Plugin: @tailwindcss/forms
  - Plugin: @tailwindcss/typography
  - Plugin: tailwindcss-animate

### Animation & 3D
- **GSAP 3.12+**
  - Core library
  - ScrollTrigger plugin
  - Use in client components only
- **Three.js 0.160+**
  - @react-three/fiber for React integration
  - @react-three/drei for helpers
  - Use only on client-side

### UI Components
- **Framer Motion** (for page transitions, micro-interactions)
- **Radix UI** (headless components: Dialog, Dropdown, etc.)
- **Lucide React** (icon library)

### Headless CMS Options (Choose One)

**Option 1: Sanity CMS** (Recommended)
- Real-time collaboration
- Powerful structured content
- Excellent developer experience
- Built-in image optimization

**Option 2: Contentful**
- Industry standard
- Powerful APIs
- Good internationalization

**Option 3: MDX**
- Content in Git
- No external CMS needed
- Great for technical content

### Forms
- **React Hook Form** (form management)
- **Zod** (validation schema)

### Analytics
- **Vercel Analytics** (built-in)
- **Google Analytics 4** (optional)
- **PostHog** (product analytics, optional)

### Testing
- **Vitest** (unit tests)
- **Playwright** (E2E tests)
- **Testing Library** (component tests)

---

## Project Structure

```
get-digital-solutions/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (marketing)/              # Route group: marketing pages
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── about/
│   │   │   │   ├── page.tsx          # About landing
│   │   │   │   ├── agency/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── team/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── careers/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── partners/
│   │   │   │       └── page.tsx
│   │   │   ├── services/
│   │   │   │   ├── page.tsx          # Services overview
│   │   │   │   ├── automation/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── digital-products/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── integration/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── data-analytics/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── optimization/
│   │   │   │       └── page.tsx
│   │   │   ├── work/
│   │   │   │   ├── page.tsx          # Case studies index
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Case study detail
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx
│   │   │   ├── insights/
│   │   │   │   ├── page.tsx          # Insights index
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Article detail
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── legal/
│   │   │       ├── privacy/
│   │   │       │   └── page.tsx
│   │   │       ├── terms/
│   │   │       │   └── page.tsx
│   │   │       └── accessibility/
│   │   │           └── page.tsx
│   │   ├── (auth)/                   # Route group: auth pages (if needed)
│   │   │   └── login/
│   │   │       └── page.tsx
│   │   ├── layout.tsx                # Root layout
│   │   ├── globals.css               # Global styles + design tokens
│   │   ├── sitemap.xml              # Dynamic sitemap
│   │   └── robots.txt               # Robots configuration
│   │
│   ├── components/                   # React components
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header.tsx            # Navigation header
│   │   │   ├── Footer.tsx            # Footer
│   │   │   ├── MobileMenu.tsx        # Mobile navigation
│   │   │   ├── Breadcrumb.tsx        # Breadcrumbs
│   │   │   └── PageTransition.tsx    # Page transition wrapper
│   │   ├── ui/                       # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── Dialog.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── Tabs.tsx
│   │   │   └── Separator.tsx
│   │   ├── sections/                 # Page sections
│   │   │   ├── Hero.tsx              # Generic hero
│   │   │   ├── HeroThreeJS.tsx       # Hero with 3D scene
│   │   │   ├── ServicesGrid.tsx      # Services cards grid
│   │   │   ├── CaseStudyGrid.tsx     # Case studies grid
│   │   │   ├── Testimonials.tsx      # Testimonial carousel
│   │   │   ├── Process.tsx           # Process timeline
│   │   │   ├── PricingTable.tsx      # Pricing table
│   │   │   ├── ContactForm.tsx       # Contact form
│   │   │   ├── CTA.tsx               # CTA section
│   │   │   └── Newsletter.tsx        # Newsletter signup
│   │   ├── animations/              # Animation components
│   │   │   ├── FadeUp.tsx            # GSAP fade up
│   │   │   ├── StaggerCards.tsx      # Staggered cards
│   │   │   ├── RevealText.tsx        # Text reveal
│   │   │   ├── ParallaxImage.tsx     # Parallax image
│   │   │   ├── Counter.tsx           # Number counter
│   │   │   └── Marquee.tsx           # Marquee scroll
│   │   ├── threejs/                  # Three.js components
│   │   │   ├── NodeNetwork.tsx       # Hero node network
│   │   │   ├── Scene.tsx             # Base scene wrapper
│   │   │   └── Loading.tsx           # 3D loading state
│   │   └── forms/                   # Form components
│   │       ├── ContactForm.tsx
│   │       ├── NewsletterForm.tsx
│   │       └── forms.tsx            # Form schemas
│   │
│   ├── lib/                          # Utility functions
│   │   ├── utils.ts                  # General utilities
│   │   ├── cn.ts                     # className utility (clsx + tailwind-merge)
│   │   ├── validation.ts             # Zod schemas
│   │   ├── animations.ts             # GSAP animation functions
│   │   ├── api.ts                    # API client
│   │   └── constants.ts              # App constants
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── use-media-query.ts        # Responsive breakpoints
│   │   ├── use-reduced-motion.ts     # Reduced motion preference
│   │   ├── use-smooth-scroll.ts      # Smooth scroll
│   │   ├── use-intersection.ts       # Intersection Observer
│   │   ├── use-form-state.ts         # Form state management
│   │   └── use-analytics.ts          # Analytics tracking
│   │
│   ├── styles/                       # Additional styles
│   │   └── tokens.css                # Design tokens (CSS variables)
│   │
│   ├── types/                        # TypeScript types
│   │   ├── index.ts                  # Shared types
│   │   ├── content.ts                # CMS content types
│   │   └── api.ts                    # API response types
│   │
│   └── config/                       # Configuration files
│       ├── site.ts                   # Site metadata
│       ├── navigation.ts             # Navigation structure
│       └── services.ts               # Services data
│
├── public/                           # Static assets
│   ├── images/                       # Optimized images
│   ├── icons/                        # SVG icons
│   └── fonts/                        # Custom fonts
│
├── sanity/                           # Sanity CMS (if using)
│   ├── schemas/
│   │   ├── caseStudy.ts
│   │   ├── article.ts
│   │   ├── service.ts
│   │   ├── team.ts
│   │   └── settings.ts
│   ├── plugins/
│   └── config.ts
│
├── content/                          # MDX content (if using)
│   ├── articles/
│   ├── case-studies/
│   └── guides/
│
├── scripts/                          # Build/utility scripts
│   ├── generate-sitemap.ts
│   └── optimize-images.ts
│
├── .env.local                        # Environment variables
├── .eslintrc.json                   # ESLint config
├── .prettierrc                      # Prettier config
├── tailwind.config.ts               # Tailwind config
├── tsconfig.json                    # TypeScript config
├── next.config.js                   # Next.js config
├── package.json
└── README.md
```

---

## Component Architecture

### Page Component Hierarchy

```
layout.tsx (Root Layout)
├── Header
├── PageContent
│   ├── HeroSection
│   ├── Section 1
│   ├── Section 2
│   └── ...
└── Footer
```

### Component Categories

#### 1. Layout Components
- **Header**: Navigation, logo, mobile menu trigger
- **Footer**: Links, social, newsletter
- **MobileMenu**: Full-screen navigation overlay
- **PageTransition**: Wraps page content for transitions
- **Container**: Max-width container with responsive padding

#### 2. UI Components (Atomic)
- **Button**: Primary, secondary, ghost variants
- **Card**: Base card component
- **Input**: Text input with validation states
- **Textarea**: Multi-line input
- **Select**: Dropdown select
- **Badge**: Small status indicators
- **Tag**: Category/facet tags
- **Icon**: Icon wrapper (Lucide)

#### 3. Section Components (Molecular)
- **Hero**: Generic hero with title, subtitle, CTAs
- **HeroThreeJS**: Hero with Three.js background
- **ServicesGrid**: Grid of service cards
- **CaseStudyGrid**: Filterable case study grid
- **Testimonials**: Testimonial carousel
- **Process**: Timeline or step-based process
- **PricingTable**: Pricing comparison table
- **CTA**: Call-to-action section
- **Newsletter**: Newsletter signup

#### 4. Animation Components
- **FadeUp**: Scroll-triggered fade up animation
- **StaggerCards**: Staggered card reveal
- **RevealText**: Text word-by-word reveal
- **ParallaxImage**: Parallax scrolling image
- **Counter**: Animated number counter
- **Marquee**: Infinite scrolling content

#### 5. Form Components
- **ContactForm**: Main contact form with validation
- **NewsletterForm**: Email-only newsletter signup
- **FormField**: Input + label + error message wrapper

---

## CMS Structure (Sanity Example)

### Case Study Schema

```typescript
// sanity/schemas/caseStudy.ts
{
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
    {
      name: 'client',
      title: 'Client',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'logo', title: 'Logo', type: 'image' },
        { name: 'industry', title: 'Industry', type: 'string' },
        { name: 'size', title: 'Company Size', type: 'string' }
      ]
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'service' } }]
    },
    {
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' }
        ]
      }]
    },
    {
      name: 'timeline',
      title: 'Timeline',
      type: 'object',
      fields: [
        { name: 'startDate', title: 'Start Date', type: 'date' },
        { name: 'endDate', title: 'End Date', type: 'date' }
      ]
    },
    {
      name: 'challenge',
      title: 'The Challenge',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'solution',
      title: 'The Solution',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'results',
      title: 'The Results',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', title: 'Quote', type: 'text' },
        { name: 'author', title: 'Author', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'avatar', title: 'Avatar', type: 'image' }
      ]
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Meta Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text' },
        { name: 'ogImage', title: 'OG Image', type: 'image' }
      ]
    }
  ]
}
```

### Service Schema

```typescript
// sanity/schemas/service.ts
{
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug' },
    { name: 'icon', title: 'Icon', type: 'string' }, // Lucide icon name
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'longDescription', title: 'Long Description', type: 'array', of: [{ type: 'block' }] },
    { name: 'capabilities', title: 'Capabilities', type: 'array', of: [{ type: 'string' }] },
    { name: 'pricing', title: 'Pricing', type: 'string' },
    { name: 'featured', title: 'Featured', type: 'boolean' },
    { name: 'seo', title: 'SEO', type: 'seo' }
  ]
}
```

### Article Schema

```typescript
// sanity/schemas/article.ts
{
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'author', title: 'Author', type: 'reference', to: { type: 'author' } },
    { name: 'featuredImage', title: 'Featured Image', type: 'image' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
    { name: 'seo', title: 'SEO', type: 'seo' }
  ]
}
```

---

## SEO Configuration

### Meta Templates

```typescript
// config/site.ts
export const siteConfig = {
  name: 'GET - Digital Solutions',
  description: 'We build intelligent automation and digital products that eliminate bottlenecks, reduce costs, and accelerate growth for scaling B2B companies.',
  url: 'https://get.com',
  ogImage: 'https://get.com/og-image.png',
  links: {
    twitter: 'https://twitter.com/get_digital',
    linkedin: 'https://linkedin.com/company/get-digital-solutions',
  },
}

export const seoConfig = {
  defaultTitle: siteConfig.name,
  titleTemplate: '%s | GET - Digital Solutions',
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    handle: '@get_digital',
    site: '@get_digital',
    cardType: 'summary_large_image',
  },
}
```

### Page Metadata

```typescript
// app/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transform Operations Into Competitive Advantage',
  description: 'We build intelligent automation and digital products that eliminate bottlenecks, reduce costs, and accelerate growth for scaling B2B companies.',
  openGraph: {
    title: 'Transform Operations Into Competitive Advantage',
    description: 'We build intelligent automation and digital products...',
    images: ['/og-homepage.png'],
  },
  alternates: {
    canonical: '/',
  },
}
```

### Dynamic Sitemap

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://get.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Generate dynamically from CMS
    ...caseStudies.map(study => ({
      url: `${baseUrl}/work/${study.slug}`,
      lastModified: new Date(study._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
```

### Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://get.com/sitemap.xml',
  }
}
```

### Structured Data (JSON-LD)

```typescript
// components/structured-data.tsx
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GET - Digital Solutions',
    description: 'Digital automation and product agency for B2B companies',
    url: 'https://get.com',
    logo: 'https://get.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'hello@get.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/get-digital-solutions',
      'https://twitter.com/get_digital',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GET - Digital Solutions',
    url: 'https://get.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://get.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## Performance Optimization

### Image Strategy

```typescript
// components/optimized-image.tsx
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  fill?: boolean
}

export function OptimizedImage({ src, alt, width, height, priority, fill }: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      fill={fill}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  )
}
```

### Code Splitting

```typescript
// Dynamically import heavy components
const HeroThreeJS = dynamic(() => import('@/components/threejs/NodeNetwork'), {
  loading: () => <HeroSkeleton />,
  ssr: false, // Client-side only
})

const ContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  loading: () => <FormSkeleton />,
})
```

### Lazy Loading

```typescript
// Intersection Observer for lazy loading components
'use client'

import { useEffect, useRef, useState } from 'react'

export function LazyComponent({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return <div ref={ref}>{isVisible ? children : <div style={{ height: '400px' }} />}</div>
}
```

### Font Optimization

```typescript
// app/layout.tsx
import { Syne, Inter, JetBrains_Mono } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})
```

---

## Performance Checklist

### Core Web Vitals Targets

| Metric | Target | Good | Needs Improvement |
|--------|--------|------|-------------------|
| LCP (Largest Contentful Paint) | < 2.5s | ✓ | ⚠️ 2.5s - 4s |
| FID (First Input Delay) | < 100ms | ✓ | ⚠️ 100ms - 300ms |
| CLS (Cumulative Layout Shift) | < 0.1 | ✓ | ⚠️ 0.1 - 0.25 |
| FCP (First Contentful Paint) | < 1.8s | ✓ | ⚠️ 1.8s - 3s |
| TTI (Time to Interactive) | < 3.8s | ✓ | ⚠️ 3.8s - 7.3s |

### Pre-Launch Checklist

#### Images
- [ ] All images optimized (WebP format preferred)
- [ ] Responsive images with srcset/sizes
- [ ] Lazy loading implemented for below-fold images
- [ ] Blur placeholders for LCP images
- [ ] Image dimensions specified (avoid CLS)
- [ ] Alt text for all images

#### Fonts
- [ ] Font-display: swap
- [ ] Subset fonts (only used characters)
- [ ] Preload critical fonts
- [ ] Fallback fonts specified

#### JavaScript
- [ ] Code splitting implemented
- [ ] Tree shaking enabled
- [ ] Minification enabled
- [ ] Unused dependencies removed
- [ ] Heavy components lazy loaded
- [ ] Bundle size < 100KB (gzipped)

#### CSS
- [ ] Critical CSS inlined
- [ ] Unused CSS purged
- [ ] CSS minified
- [ ] No render-blocking CSS

#### Caching
- [ ] Static assets cached (1 year)
- [ ] API responses cached appropriately
- [ ] Cache headers configured
- [ ] CDN configured

#### Server
- [ ] HTTP/2 or HTTP/3 enabled
- [ ] Gzip/Brotli compression
- [ ] Server response time < 200ms
- [ ] Proper status codes (200, 404, 500)

#### Third-Party
- [ ] Minimal third-party scripts
- [ ] Scripts deferred/async
- [ ] No unnecessary tracking
- [ ] Scripts loaded from fast CDNs

---

## Environment Variables

```bash
# .env.local.example

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=

# Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

# Forms
FORMSPREE_ENDPOINT=

# API Keys (server-side only, never expose to client)
STRIPE_SECRET_KEY=
SENDGRID_API_KEY=

# Deployment
NEXT_PUBLIC_URL=http://localhost:3000
```

---

## Git Workflow

### Branch Strategy
- `main` - Production
- `develop` - Staging/integration
- `feature/*` - Feature branches
- `bugfix/*` - Bug fixes
- `hotfix/*` - Production hotfixes

### Commit Message Convention
```
feat: add hero section with Three.js
fix: resolve mobile navigation z-index issue
docs: update build specification
style: format code with prettier
refactor: simplify animation utility functions
test: add unit tests for counter component
chore: update dependencies
```

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] E2E tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No merge conflicts
```

---

## Deployment

### Vercel (Recommended)

**Features:**
- Automatic deployments from Git
- Edge functions
- Image optimization
- Analytics
- Preview deployments

**Configuration:**
```javascript
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm ci",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Environment-Specific Configuration

```typescript
// config/environment.ts
export const config = {
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  cmsUrl: process.env.NEXT_PUBLIC_CMS_URL,
}
```
