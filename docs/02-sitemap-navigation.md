# Sitemap & Navigation

## Complete Site Structure (17 Pages)

```
/
├── /                          # Homepage
├── /about/                    # About GET
│   ├── /about/agency/         # Our story & mission
│   ├── /about/team/           # Team members
│   ├── /about/careers/        # Open positions
│   └── /about/partners/       # Technology & strategic partners
├── /services/                 # Services overview
│   ├── /services/automation/  # Workflow automation
│   ├── /services/digital-products/    # Custom product development
│   ├── /services/integration/        # System integration & APIs
│   ├── /services/data-analytics/     # Data pipelines & analytics
│   └── /services/optimization/       # Performance & conversion optimization
├── /work/                     # Case studies index
│   ├── /work/[slug]/          # Individual case study
├── /pricing/                  # Pricing & packages
├── /insights/                 # Blog, articles, resources
│   ├── /insights/articles/    # Long-form articles
│   ├── /insights/guides/      # How-to guides
│   └── /insights/[slug]/      # Individual article/guide
├── /contact/                  # Contact & consultation request
└── /legal/                    # Legal pages
    ├── /legal/privacy/        # Privacy policy
    ├── /legal/terms/          # Terms of service
    └── /legal/accessibility/  # Accessibility statement
```

---

## Page-by-Page Content Summary

### Homepage (/)
- **Purpose:** Primary conversion entry point, communicate value proposition
- **Key Sections:** Hero, services teaser, selected case studies, social proof, CTA
- **Primary CTAs:** Schedule consultation, Explore work

### About: Agency (/about/agency/)
- **Purpose:** Tell brand story, establish credibility
- **Content:** Mission, vision, values, company timeline, certifications
- **Key Sections:** Our story, our approach, why GET

### About: Team (/about/team/)
- **Purpose:** Humanize the brand, showcase expertise
- **Content:** Team member profiles with bios, expertise areas, fun facts
- **Key Sections:** Leadership, engineers, designers, operations

### About: Careers (/about/careers/)
- **Purpose:** Attract top talent, demonstrate culture
- **Content:** Open positions, benefits, culture, application process
- **Key Sections:** Why work at GET, open roles, benefits, culture

### About: Partners (/about/partners/)
- **Purpose:** Show ecosystem and technology alliances
- **Content:** Technology partners (AWS, HubSpot, etc.), strategic partners
- **Key Sections:** Technology stack, certification partners, integration partners

### Services Overview (/services/)
- **Purpose:** Comprehensive service catalog
- **Content:** All 5 services with teasers, process overview, engagement models
- **Key Sections:** All services, our process, engagement types, FAQ

### Services: Automation (/services/automation/)
- **Purpose:** Deep dive into workflow automation
- **Content:** Detailed capabilities, case studies, tools used, pricing
- **Key Sections:** What we automate, automation stack, case studies, pricing

### Services: Digital Products (/services/digital-products/)
- **Purpose:** Deep dive into custom product development
- **Content:** Product types, development process, tech stack, case studies
- **Key Sections:** Product types, process, tech stack, case studies

### Services: Integration (/services/integration/)
- **Purpose:** Deep dive into system integration and APIs
- **Content:** Integration capabilities, platforms we connect, architecture approach
- **Key Sections:** Integration capabilities, platforms, architecture, case studies

### Services: Data Analytics (/services/data-analytics/)
- **Purpose:** Deep dive into data pipelines and analytics
- **Content:** Data engineering, analytics platforms, visualization, ML integration
- **Key Sections:** Data capabilities, platforms, case studies, pricing

### Services: Optimization (/services/optimization/)
- **Purpose:** Deep dive into performance and conversion optimization
- **Content:** Performance tuning, CRO, UX auditing, A/B testing
- **Key Sections:** Optimization services, process, case studies, pricing

### Work Index (/work/)
- **Purpose:** Showcase portfolio and capabilities
- **Content:** Filterable case study grid with thumbnails, metrics, tags
- **Key Sections:** Featured work, all work with filters, by industry, by service

### Work: Case Study Detail (/work/[slug]/)
- **Purpose:** Deep dive into specific project
- **Content:** Challenge, solution, results, process, metrics, testimonials
- **Key Sections:** Project overview, challenge, solution, results, process, next steps

### Pricing (/pricing/)
- **Purpose:** Transparent pricing information
- **Content:** 3-4 pricing packages, custom pricing option, FAQ
- **Key Sections:** Packages, custom projects, what's included, FAQ

### Insights Index (/insights/)
- **Purpose:** Thought leadership, SEO, nurture prospects
- **Content:** Featured articles, recent articles, categories, newsletter signup
- **Key Sections:** Featured, latest, by category, newsletter

### Insights: Article Detail (/insights/[slug]/)
- **Purpose:** Deep dive into specific topic
- **Content:** Long-form article, related content, author bio, newsletter CTA
- **Key Sections:** Article, related insights, newsletter signup

### Contact (/contact/)
- **Purpose:** Primary conversion page
- **Content:** Contact form, contact information, office locations, consultation scheduler
- **Key Sections:** Form, contact info, locations, FAQ, ways to work together

---

## Primary Navigation Structure

### Desktop Navigation (1024px+)

```
[ GET Logo ]  [ Services ▾ ]  [ Work ]  [ Insights ]  [ About ▾ ]  [ Contact ]  [ Let's Talk → ]
```

**Mega Menu - Services:**
- Automation
- Digital Products
- Integration
- Data Analytics
- Optimization
- View all services →

**Mega Menu - About:**
- Our Story
- Team
- Careers
- Partners

**Sticky Behavior:**
- Navigation transforms on scroll: background appears, logo shrinks slightly
- Active state indicator (underline or pill) for current section

### Mobile Navigation (< 1024px)

**Hamburger Menu:**
- Icon in top-right corner
- Opens full-screen overlay from right
- Smooth slide-in animation (300ms)
- Backdrop blur

**Mobile Menu Structure:**
```
[ Close X ]
[ GET Logo ]

Services
  Automation
  Digital Products
  Integration
  Data Analytics
  Optimization

Work
Insights
About
  Our Story
  Team
  Careers
  Partners

[ Let's Talk → ]
```

**Mobile Navigation Behavior:**
- Active page highlighted
- Services dropdown expands inline with accordion animation
- Footer links in menu overlay (Privacy, Terms, Accessibility)

---

## Footer Structure

### Desktop Footer (4 Columns)

```
Column 1: Brand                Column 2: Services       Column 3: Company        Column 4: Connect
────────────────────────────   ──────────────────────── ──────────────────────── ────────────────────────
[ GET Logo ]                    Services                 About                    Newsletter
Transform operations            Automation                Our Story                Subscribe for insights
into competitive advantage     Digital Products          Team
                                Integration              Careers
Contact                         Data Analytics           Partners
hello@get.com                   Optimization
                                Pricing                  Social
                                Work                      LinkedIn →
                                                          Twitter →
────────────────────────────   ──────────────────────── ──────────────────────── ────────────────────────
© 2025 GET Digital Solutions    Privacy Policy           Terms of Service         Accessibility
```

### Mobile Footer (Stacked)

```
[ GET Logo ]

Transform operations into competitive advantage

Services
  Automation
  Digital Products
  Integration
  Data Analytics
  Optimization
  Pricing

About
  Our Story
  Team
  Careers
  Partners

Connect
  hello@get.com
  LinkedIn →
  Twitter →

Subscribe for insights
[ Email Input ] [ Subscribe ]

© 2025 GET Digital Solutions
Privacy Policy | Terms of Service | Accessibility
```

---

## Navigation UX Principles

### 1. Clear Hierarchy
- Primary navigation limited to 5 items maximum
- Secondary items organized logically in mega menus
- Current page clearly indicated

### 2. Predictable Behavior
- Hover states on all interactive elements (desktop)
- Click/tap states on all interactive elements (mobile)
- Consistent animation timing (200-300ms)

### 3. Accessibility
- All navigation items accessible via keyboard (Tab navigation)
- Skip to main content link for keyboard users
- ARIA labels for dropdowns and mega menus
- Focus indicators visible
- Menu items have descriptive names

### 4. Performance
- Navigation is critical path CSS—inline or preloaded
- Mega menu content lazy-loaded
- No blocking JavaScript for navigation
- Sub-second menu open/close animations

### 5. Mobile-First
- Touch targets minimum 44x44px
- Sufficient spacing between items
- Easy to tap without zoom
- No hover-dependent interactions

---

## Breadcrumb System

### Desktop Breadcrumbs (Above content)
```
Home > Services > Automation
```

### Mobile Breadcrumbs (Compact)
```
Services / Automation
```

**Breadcrumb Behavior:**
- Only show on pages 3+ levels deep
- Clickable except for current page
- Separator: ">" (desktop), "/" (mobile)
- Truncate very long paths if needed

---

## URL Structure

### Canonical URLs
- All lowercase
- Hyphen-separated words
- No trailing slashes (except root)
- Example: `/services/workflow-automation`

### URL Patterns
```
/                                    # Homepage
/about/                              # About landing
/about/agency/                       # About: Agency
/about/team/                         # About: Team
/services/                           # Services overview
/services/automation/                # Service detail
/work/                               # Work index
/work/client-name-project-name/      # Case study detail
/insights/                           # Insights index
/insights/article-slug/              # Article detail
/contact/                            # Contact
```

### 301 Redirects (if applicable)
- Old URLs to new URLs during migration
- Common typos to correct URLs
- Campaign URLs to canonical URLs

---

## Internal Linking Strategy

### Cross-Linking Opportunities
1. **Service pages** → Relevant case studies
2. **Case studies** → Related services
3. **Blog posts** → Relevant services and case studies
4. **About pages** → Team member profiles
5. **Pricing page** → Service detail pages

### Link Behavior
- External links: Open in new tab with `rel="noopener noreferrer"`
- Internal links: Same page, smooth scroll if anchor link
- Download links: Clear file type and size indicator
- CTA buttons: High contrast, clear action

---

## Search Functionality (Phase 2)

### Site Search
- Global search accessible via Cmd+K (desktop) or search icon (mobile)
- Search modal overlays entire screen
- Real-time results as user types
- Results categorized: Pages, Case Studies, Insights

### Search Results Display
```
Showing 12 results for "automation"

Pages (2)
  Services: Automation
  Pricing

Case Studies (5)
  [Thumbnail] Automating Customer Onboarding for [Client]
  [Thumbnail] Building Data Pipeline for [Client]
  ...

Insights (5)
  [Date] 7 Signs Your Business Needs Automation
  [Date] The ROI of Workflow Automation
  ...
```

---

## Navigation States & Indicators

### Current Page Indicator
- Desktop: Underline accent (electric blue #1A1AFF) with subtle glow
- Mobile: Left accent border or different background shade

### Hover States
- Desktop: Background color change + subtle lift animation
- Mobile: Background color change (no hover on touch, but tap feedback)

### Focus States (Keyboard)
- Visible outline/ring (2px electric blue)
- Offset from element (don't obscure content)

### Active/Pressed States
- Slight scale down (0.98) for tactile feedback
- Darker background for immediate visual feedback

---

## Navigation Accessibility Checklist

- [ ] Skip to main content link present
- [ ] All menu items keyboard accessible (Tab, Enter, Escape)
- [ ] Focus indicators visible on all interactive elements
- [ ] ARIA labels for dropdowns and mega menus
- [ ] Menu can be closed with Escape key
- [ ] Mobile menu can be toggled with keyboard
- [ ] Touch targets minimum 44x44px
- [ ] Sufficient color contrast (WCAG AA)
- [ ] No hover-dependent critical content
- [ ] Current page clearly indicated in navigation
