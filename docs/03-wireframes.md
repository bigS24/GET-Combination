# Wireframes

This document provides detailed section-by-section wireframes for all major page templates. Note: These are content and structure specifications, not visual designs.

---

## Homepage Wireframe

### Section 1: Hero (100vh)
**Purpose:** Immediate value proposition, primary conversion

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]        [Nav...]                                 [CTA] │  ← Sticky nav
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   [Three.js Scene: 3D Node Network Background]            │
│   Animated nodes connecting in real-time                    │
│                                                             │
│              HEADLINE                                        │
│         Transform Operations Into                           │
│         Competitive Advantage                               │
│                                                             │
│         We build intelligent automation and digital         │
│         products that eliminate bottlenecks, reduce         │
│         costs, and accelerate growth for                    │
│         scaling B2B companies.                              │
│                                                             │
│   [Schedule Consultation]   [Explore Our Work]             │
│   (Primary CTA)              (Secondary CTA)                │
│                                                             │
│   Trusted by: [Logos: 8-12 client logos, grayscale]         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Animation:**
- Three.js scene animates on load (2s fade-in)
- Text staggers in (headline → subhead → CTAs → logos)
- Logo scroll triggers on scroll past hero

---

### Section 2: Problem/Solution (Alternating)
**Purpose:** Empathize with pain points, introduce solutions

**Layout (3 pairs, alternating sides):**

```
┌─────────────────────────────────────────────────────────────┐
│  The Challenge: Operational Bottlenecks                     │
│                                                             │
│  Manual processes, hand-offs, and data silos are            │
│  killing productivity. Your team spends 40%+ of time        │
│  on repetitive tasks instead of strategic work.             │
│                                                             │
│  [Icon: Stopwatch/Clock]                                    │
│                                                             │
│  → The Solution: Workflow Automation                        │
│                                                             │
│  We identify and automate repetitive tasks, reclaiming      │
│  hundreds of hours per month. Average efficiency gain:      │
│  35% within 90 days.                                        │
│                                                             │
│  [Icon: Automation/Gears]                                    │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ • Reduced onboarding from 14 days to 3 days         │   │
│   │ • Automated 85% of manual reporting                   │   │
│   │ • Built unified data pipeline                        │   │
│   └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

[Repeat for: Technical Debt → System Integration]
[Repeat for: Low Conversion → Optimization]
```

**Animation:**
- Scroll-triggered fade-in + slide-up (300ms)
- Cards stagger (100ms delay between)
- Icon micro-animations on hover

---

### Section 3: Services Teaser (Grid)
**Purpose:** Preview capabilities, drive traffic to services pages

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                     Our Services                             │
│                   Comprehensive solutions                    │
│                   for every challenge                        │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │              │  │              │  │              │       │
│  │   [Icon]     │  │   [Icon]     │  │   [Icon]     │       │
│  │              │  │              │  │              │       │
│  │  Automation  │  │  Digital     │  │  Integration │       │
│  │              │  │  Products    │  │              │       │
│  │  Identify &  │  │  Build       │  │  Connect     │       │
│  │  automate    │  │  custom      │  │  systems     │       │
│  │  repetitive  │  │  products    │  │  & APIs      │       │
│  │  tasks       │  │  & platforms │  │              │       │
│  │              │  │              │  │              │       │
│  │  Learn more →│  │  Learn more →│  │  Learn more →│       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐                         │
│  │   [Icon]     │  │   [Icon]     │                         │
│  │   Data       │  │  Optimization│                         │
│  │   Analytics  │  │              │                         │
│  │   Build      │  │  Optimize    │                         │
│  │   pipelines  │  │  performance│                         │
│  │   & insights │  │  & conversion│                         │
│  │              │  │              │                         │
│  │  Learn more →│  │  Learn more →│                         │
│  └──────────────┘  └──────────────┘                         │
│                                                             │
│                  [View All Services →]                       │
└─────────────────────────────────────────────────────────────┘
```

**Animation:**
- Cards float up on scroll
- Hover: slight scale (1.02) + glow effect
- Cards stagger in sequence (row by row)

---

### Section 4: Featured Work (Case Studies)
**Purpose:** Social proof, demonstrate capabilities

**Layout (2 large featured + grid of smaller):**

```
┌─────────────────────────────────────────────────────────────┐
│                       Selected Work                          │
│                   Results that speak                         │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │  [Large Featured Case Study Image/Video]             │   │
│  │  Hover: Overlay with "View Case Study"              │   │
│  │                                                      │   │
│  │  Automating Customer Onboarding                      │   │
│  │  [Client Name]                                       │   │
│  │                                                       • 2.3x faster onboarding
│  │                                                       • 67% fewer support tickets
│  │                                                       • 98% CSAT score
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │ [Thumbnail]     │  │ [Thumbnail]     │                   │
│  │                 │  │                 │                   │
│  │ Title           │  │ Title           │                   │
│  │ Client          │  │ Client          │                   │
│  │  • Metric 1     │  │  • Metric 1     │                   │
│  │  • Metric 2     │  │  • Metric 2     │                   │
│  │ View →          │  │ View →          │                   │
│  └─────────────────┘  └─────────────────┘                   │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │ [Thumbnail]     │  │ [Thumbnail]     │                   │
│  │                 │  │                 │                   │
│  │ Title           │  │ Title           │                   │
│  │ Client          │  │ Client          │                   │
│  │  • Metric 1     │  │  • Metric 1     │   [See all work →]│
│  │  • Metric 2     │  │  • Metric 2     │                   │
│  │ View →          │  │ View →          │                   │
│  └─────────────────┘  └─────────────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

**Animation:**
- Featured case study parallax on scroll
- Thumbnails reveal with stagger
- Hover: image zoom + overlay slide up

---

### Section 5: Social Proof (Testimonials)
**Purpose:** Build trust, reinforce value proposition

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                      Client Stories                         │
│                   Hear from partners                         │
│                   we've grown with                           │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  [Avatar]  [Quote Icon]                              │   │
│  │                                                      │   │
│  │  "GET didn't just build what we asked for—they       │   │
│  │   challenged us to think bigger about what was        │   │
│  │   possible. The ROI on our automation project        │   │
│  │   exceeded projections by 40%."                       │   │
│  │                                                      │   │
│  │                      — [Name], [Title]               │   │
│  │                         [Company Logo]                │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  [Testimonial Carousel - 3-5 testimonials]                  │
│  ○ ○ ○ ○  ←  →                                              │
│                                                             │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                    │
│  │[Logo]│ │[Logo]│ │[Logo]│ │[Logo]│ │[Logo]│ [More logos]│
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Animation:**
- Testimonials slide horizontally with fade
- Auto-advance every 6 seconds
- Pause on hover
- Logo scroll infinite loop (marquee)

---

### Section 6: Process Overview
**Purpose:** Demystify working with GET, reduce friction

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                      How We Work                            │
│                    From strategy to                          │
│                    measurable impact                         │
│                                                             │
│  1. Discovery              2. Strategy           3. Execute │
│  ┌──────────────┐         ┌──────────────┐     ┌──────────────┐
│  │              │         │              │     │              │
│  │   [Icon]     │    →    │   [Icon]     │  →  │   [Icon]     │
│  │              │         │              │     │              │
│  │  Understand  │         │  Design      │     │  Build &     │
│  │  your        │         │  solution    │     │  iterate     │
│  │  business    │         │  & plan      │     │  together    │
│  │              │         │              │     │              │
│  │  Deep dive   │         │  Roadmap,    │     │  Regular     │
│  │  into ops,   │         │  timeline,   │     │  check-ins,  │
│  │  goals, tech │         │  success     │     │  demos,      │
│  │              │         │  metrics     │     │  feedback    │
│  └──────────────┘         └──────────────┘     └──────────────┘
│                                                             │
│              4. Measure              5. Scale                │
│  ┌──────────────┐         ┌──────────────┐                   │
│  │              │         │              │                   │
│  │   [Icon]     │    →    │   [Icon]     │                   │
│  │              │         │              │                   │
│  │  Track &     │         │  Optimize &  │                   │
│  │  optimize    │         │  expand      │                   │
│  │              │         │              │                   │
│  │  Performance │         │  Continuous  │                   │
│  │  metrics,    │         │  improvement │                   │
│  │  ROI,       │         │  New         │                   │
│  │  feedback   │         │  opportunities│                   │
│  └──────────────┘         └──────────────┘                   │
│                                                             │
│                    [Learn About Our Process →]               │
└─────────────────────────────────────────────────────────────┘
```

**Animation:**
- Connecting line animates between steps on scroll
- Cards highlight sequentially
- Step numbers count up

---

### Section 7: Final CTA
**Purpose:** Last chance to convert, clear next step

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Ready to transform your operations?            │
│                                                             │
│         Schedule a free 30-minute automation audit          │
│         and we'll identify opportunities to                 │
│         reclaim 100+ hours this quarter.                    │
│                                                             │
│                                                             │
│         [Schedule Your Free Audit →]                        │
│                                                             │
│         No commitment. Just insights.                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Animation:**
- Button pulse animation (subtle, 2s cycle)
- Background gradient slowly shifts

---

## Services Overview Page Wireframe

### Section 1: Hero
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] [Nav...]                                      [CTA]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              Services & Capabilities                        │
│                                                             │
│         From strategy to execution, we handle              │
│         the complexity others can't.                        │
│                                                             │
│  [Automate Workflows]  [Build Products]  [Integrate Systems]│
│  [Analyze Data]        [Optimize Performance]               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 2: Services Grid (5 Cards)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Automation                                           │   │
│  │                                                      │   │
│  │ Identify and automate repetitive tasks, reclaiming   │   │
│  │ hundreds of hours per month.                        │   │
│  │                                                      │   │
│  │ • Process mapping & auditing                         │   │
│  │ • Workflow automation (Zapier, Make, custom)        │   │
│  │ • RPA & intelligent automation                       │   │
│  │ • Ongoing optimization & monitoring                  │   │
│  │                                                      │   │
│  │ [Learn More →]        [See Case Studies →]          │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  [Repeat for 4 other services...]                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 3: Our Process
```
┌─────────────────────────────────────────────────────────────┐
│                      Our Approach                            │
│                                                             │
│  Discovery → Strategy → Design → Build → Test → Launch →   │
│  Optimize                                                    │
│                                                             │
│  [Timeline graphic with phases and duration estimates]       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 4: Engagement Models
```
┌─────────────────────────────────────────────────────────────┐
│                   How We Work Together                       │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌───────────┐  │
│  │  Project-Based  │  │  Retainer       │  │  Staff    │  │
│  │                 │  │                 │  │  Augment  │  │
│  │  Defined scope, │  │  Ongoing        │  │           │  │
│  │  timeline,      │  │  partnership,   │  │  Extend   │  │
│  │  deliverables   │  │  monthly hours  │  │  your     │  │
│  │                 │  │                 │  │  team      │  │
│  │  [Learn More →] │  │  [Learn More →] │  │  [Learn   │  │
│  │                 │  │                 │  │  More →]  │  │
│  └─────────────────┘  └─────────────────┘  └───────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Service Detail Page Template

### Section 1: Service Hero
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Workflow Automation                            │
│                                                             │
│         Identify and automate repetitive tasks,             │
│         reclaiming hundreds of hours per month.             │
│                                                             │
│         Average efficiency gain: 35% within 90 days          │
│                                                             │
│         [Get Started →]        [View Case Studies →]       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 2: What We Automate (Tabs/Grid)
```
┌─────────────────────────────────────────────────────────────┐
│                   What We Automate                           │
│                                                             │
│  [Customer Onboarding]  [Data Entry & Sync]  [Reporting]    │
│  [Order Processing]     [Inventory Management] [Notifications]│
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │  Customer Onboarding                                 │   │
│  │                                                      │   │
│  │  Automate the entire customer journey from lead to   │   │
│  │  activation. Eliminate manual hand-offs and reduce   │   │
│  │  time-to-value from weeks to days.                   │   │
│  │                                                      │   │
│  │  Typical Results:                                    │   │
│  │  • Onboarding time: 14 days → 3 days                │   │
│  │  • Hand-off errors: 90% reduction                   │   │
│  │  • CSAT improvement: 40%+                            │   │
│  │                                                      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 3: Our Stack
```
┌─────────────────────────────────────────────────────────────┐
│                    Automation Stack                          │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ Low-Code     │  │ Custom Code  │  │ RPA          │       │
│  │              │  │              │  │              │       │
│  │ [Logos]      │  │ [Languages]  │  │ [Tools]      │       │
│  │ Zapier, Make │  │ Python, Node │  │ UiPath,      │       │
│  │ n8n          │  │ TypeScript   │  │ Automation   │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 4: Case Studies (Teasers)
```
┌─────────────────────────────────────────────────────────────┐
│                      Related Work                            │
│                                                             │
│  [3-4 relevant case study teasers with thumbnails]         │
│                                                             │
│              [View All Case Studies →]                      │
└─────────────────────────────────────────────────────────────┘
```

### Section 5: Pricing/FAQ
```
┌─────────────────────────────────────────────────────────────┐
│                   Pricing & FAQ                              │
│                                                             │
│  Starting from $15,000/project or $5,000/month retainer     │
│                                                             │
│  [Accordion FAQ items]                                      │
│                                                             │
│              [Get a Custom Quote →]                          │
└─────────────────────────────────────────────────────────────┘
```

---

## Work/Case Studies Index Wireframe

### Section 1: Hero
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                       Our Work                              │
│                                                             │
│         Real results for ambitious companies                 │
│                                                             │
│         Every project generates measurable impact            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 2: Filters (Sticky)
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [All Services ▾]  [All Industries ▾]  [All Results ▾]    [Search]│
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 3: Case Study Grid
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌───────────┐   │
│  │ [Thumbnail]     │  │ [Thumbnail]     │  │ [Thumbnail]│   │
│  │                 │  │                 │  │           │   │
│  │ Title           │  │ Title           │  │ Title     │   │
│  │ Client          │  │ Client          │  │ Client    │   │
│  │                 │  │                 │  │           │   │
│  │ Services:       │  │ Services:       │  │ Services: │   │
│  │ • Automation    │  │ • Integration   │  │ • Products│   │
│  │ • Integration   │  │                 │  │           │   │
│  │                 │  │                 │  │           │   │
│  │ Results:        │  │ Results:        │  │ Results:  │   │
│  │ • 2.3x faster   │  │ • 85% manual    │  │ • 41%     │   │
│  │   onboarding    │  │   work reduced  │  │   conversion│   │
│  │ • 67% fewer     │  │ • $200K saved   │  │ • $1.2M   │   │
│  │   tickets       │  │   annually      │  │   revenue  │   │
│  │                 │  │                 │  │           │   │
│  │ View Case →     │  │ View Case →     │  │ View →    │   │
│  └─────────────────┘  └─────────────────┘  └───────────┘   │
│                                                             │
│  [Continue grid...]                                         │
│                                                             │
│  [Load More →]                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Case Study Detail Template

### Section 1: Hero with Results
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              Automating Customer Onboarding                  │
│                                                             │
│              For [Client Name]                              │
│                                                             │
│         [Client Logo]                                       │
│                                                             │
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                        │
│  │ 2.3x    │ │ 67%     │ │ 98%     │                        │
│  │ Faster  │ │ Fewer   │ │ CSAT    │                        │
│  │ Onboard │ │ Tickets │ │ Score   │                        │
│  └─────────┘ └─────────┘ └─────────┘                        │
│                                                             │
│         [Next Project →]   [Contact Us →]                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 2: Project Overview
```
┌─────────────────────────────────────────────────────────────┐
│                      Project Overview                        │
│                                                             │
│  ┌─────────────────────┐  ┌──────────────────────────────┐   │
│  │ Client              │  │ Timeline                     │   │
│  │                     │  │                              │   │
│  │ [Client Name]       │  │ 3 months                     │   │
│  │ Series B SaaS       │  │ Jan - Mar 2024               │   │
│  │ $50M ARR            │  │                              │   │
│  │ 200 employees       │  │                              │   │
│  └─────────────────────┘  └──────────────────────────────┘   │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Services Delivered                                    │   │
│  │                                                       │   │
│  │ ✓ Workflow Automation    ✓ System Integration         │   │
│  │ ✓ Custom Development     ✓ Data Analytics            │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Section 3: The Challenge
```
┌─────────────────────────────────────────────────────────────┐
│                      The Challenge                           │
│                                                             │
│  [Image/Illustration of the problem]                        │
│                                                             │
│  [Client Name]'s customer onboarding process required       │
│  hand-offs between five different teams and took an         │
│  average of 14 days. New customers were frustrated,        │
│  and the operations team was drowning in manual work.      │
│                                                             │
│  Key Issues:                                                │
│  • No visibility into onboarding status                    │
│  • Manual data entry caused 23% error rate                 │
│  • Operations team spending 40+ hours/week on onboarding   │
│  • Customer churn increased 15% due to poor onboarding      │
│                                                             │
│  [Quote from client about the pain]                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 4: The Solution
```
┌─────────────────────────────────────────────────────────────┐
│                      The Solution                            │
│                                                             │
│  [Process diagram showing the solution]                      │
│                                                             │
│  GET built an automated onboarding platform that unified    │
│  data, eliminated manual hand-offs, and provided real-time  │
│  status tracking.                                           │
│                                                             │
│  What We Built:                                             │
│  • Unified customer data platform                          │
│  • Automated workflow engine (5 workflows automated)       │
│  • Real-time status dashboard for customers                 │
│  • Integration layer connecting CRM, billing, and product   │
│  • Custom notification system                              │
│                                                             │
│  Tech Stack:                                                │
│  [Logos: Next.js, Node.js, PostgreSQL, Make.com, HubSpot]   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 5: Implementation
```
┌─────────────────────────────────────────────────────────────┐
│                    Implementation                           │
│                                                             │
│  [Timeline graphic]                                         │
│                                                             │
│  Phase 1: Discovery & Mapping (2 weeks)                     │
│  • Process mapping workshops with all teams                │
│  • Technical audit of existing systems                     │
│  • Requirements definition                                 │
│                                                             │
│  Phase 2: Design & Architecture (3 weeks)                   │
│  • Solution architecture design                            │
│  • Data model design                                       │
│  • UX/UI design for customer portal                        │
│                                                             │
│  Phase 3: Development (6 weeks)                             │
│  • Backend API development                                 │
│  • Integration layer development                           │
│  • Workflow automation build                               │
│  • Frontend portal development                             │
│                                                             │
│  Phase 4: Testing & Launch (2 weeks)                        │
│  • QA testing with real customer scenarios                 │
│  • User acceptance testing                                 │
│  • Phased rollout (pilot → full launch)                   │
│  • Team training & documentation                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 6: The Results
```
┌─────────────────────────────────────────────────────────────┐
│                      The Results                             │
│                                                             │
│  [Animated metrics counting up]                             │
│                                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │ 14→3    │ │ 200→80  │ │ 23→2%   │ │ 15→8%   │          │
│  │ Days    │ │ Hours/  │ │ Error   │ │ Churn   │          │
│  │ Onboard │ │ Week    │ │ Rate    │ │ Rate    │          │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│                                                             │
│  Business Impact:                                           │
│  • Operations team redeployed 120 hours/month to strategy   │
│  • Customer satisfaction increased 43%                       │
│  • Time-to-value decreased 79%                              │
│  • Support tickets decreased 67%                           │
│  • Estimated annual savings: $340,000                      │
│                                                             │
│  [Chart showing before/after comparison]                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 7: Testimonial
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Avatar]                                                   │
│                                                             │
│  "GET transformed our onboarding from a major pain point   │
│   into a competitive advantage. Our customers now love     │
│   the experience, and our team can focus on growth instead  │
│   of firefighting."                                         │
│                                                             │
│                        — [Name]                             │
│                           [Title], [Client]                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 8: Related Work
```
┌─────────────────────────────────────────────────────────────┐
│                      Related Projects                        │
│                                                             │
│  [2-3 related case study cards]                             │
│                                                             │
│              [Explore All Work →]                            │
└─────────────────────────────────────────────────────────────┘
```

---

## Pricing Page Wireframe

### Section 1: Hero
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      Transparent Pricing                     │
│                                                             │
│         Clear investment. Measurable returns.               │
│                                                             │
│         We offer flexible engagement models to              │
│         fit your needs and budget.                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 2: Pricing Packages
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐  │
│  │   Starter       │  │   Growth       │  │  Enterprise │  │
│  │                 │  │                 │  │             │  │
│  │ $15,000         │  │ $45,000        │  │  Custom     │  │
│  │ per project     │  │ per project    │  │  pricing   │  │
│  │                 │  │                 │  │             │  │
│  │ Best for:       │  │ Best for:       │  │ Best for:  │  │
│  │ • Single        │  │ • Complex       │  │ • Ongoing   │  │
│  │   automation    │  │   projects      │  │   work      │  │
│  │ • Quick wins    │  │ • Multiple     │  │ • Large     │  │
│  │                 │  │   integrations  │  │   teams     │  │
│  │                 │  │                 │  │             │  │
│  │ Includes:       │  │ Includes:       │  │ Includes:   │  │
│  │ • 1 workflow    │  │ • 3-5          │  │ • Unlimited  │  │
│  │   automated     │  │   workflows    │  │   scope      │  │
│  │ • Basic         │  │ • Custom       │  │ • Dedicated  │  │
│  │   integration   │  │   development  │  │   team       │  │
│  │ • 2-week        │  │ • Full-stack   │  │ • SLA       │  │
│  │   support       │  │   team        │  │             │  │
│  │ • Documentation │  │ • 4-week      │  │ • Priority  │  │
│  │                 │  │   support      │  │   support   │  │
│  │                 │  │ • Testing      │  │ • Ongoing   │  │
│  │                 │  │ • Training     │  │   opt       │  │
│  │                 │  │                 │  │             │  │
│  │ [Get Started →] │  │ [Get Started →] │  │ [Contact →] │  │
│  └─────────────────┘  └─────────────────┘  └─────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 3: Retainer Options
```
┌─────────────────────────────────────────────────────────────┐
│                   Monthly Retainers                           │
│                                                             │
│  For ongoing work and continuous improvement                │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │  Standard       │  │  Premium        │                   │
│  │                 │  │                 │                   │
│  │ $5,000          │  │ $12,000         │                   │
│  │ per month       │  │ per month       │                   │
│  │                 │  │                 │                   │
│  │ • 40 hours/month│  │ • 100 hours/    │                   │
│  │                 │  │   month         │                   │
│  │ • Priority      │  │ • Dedicated     │                   │
│  │   support       │  │   engineer      │                   │
│  │ • Monthly       │  │ • Weekly        │                   │
│  │   reviews       │  │   reviews       │                   │
│  │ • 24-hour       │  │ • 4-hour        │                   │
│  │   response      │  │   response      │                   │
│  │                 │  │                 │                   │
│  │ [Get Started →] │  │ [Get Started →] │                   │
│  └─────────────────┘  └─────────────────┘                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 4: FAQ
```
┌─────────────────────────────────────────────────────────────┐
│                   Frequently Asked Questions                │
│                                                             │
│  [Accordion with 6-8 FAQ items]                            │
│                                                             │
│  • What's included in the discovery phase?                  │
│  • Do you offer discounts for long-term contracts?          │
│  • What happens if the project scope changes?              │
│  • Do you work with startups?                              │
│  • What's your payment schedule?                            │
│  • Do you provide ongoing support after launch?            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Contact Page Wireframe

### Section 1: Hero
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      Let's Talk                             │
│                                                             │
│         Ready to transform your operations?                 │
│         We'd love to hear about your challenges.           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 2: Contact Form + Info
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───────────────────────────────┐  ┌───────────────────┐  │
│  │                               │  │                   │  │
│  │  Get in Touch                 │  │  Contact Info     │  │
│  │                               │  │                   │  │
│  │  Name *                        │  │  [Email Icon]    │  │
│  │  [Input field]                 │  │  hello@get.com   │  │
│  │                               │  │                   │  │
│  │  Email *                       │  │  [Phone Icon]    │  │
│  │  [Input field]                 │  │  +1 (555) 123-4567│ │
│  │                               │  │                   │  │
│  │  Company                       │  │  [Location Icon] │  │
│  │  [Input field]                 │  │  San Francisco,  │  │
│  │                               │  │  CA              │  │
│  │  Service Interest *            │  │                   │  │
│  │  [Dropdown: Automation,        │  │                   │  │
│  │   Products, Integration,       │  │  [Social Icons]  │  │
│  │   Data, Optimization]           │  │  LinkedIn, Twitter│ │
│  │                               │  │                   │  │
│  │  Project Budget *              │  │                   │  │
│  │  [Dropdown: <$25K, $25-50K,    │  │  Office Hours:   │  │
│  │   $50-100K, $100K+]            │  │  Mon-Fri,        │  │
│  │                               │  │  9am-6pm PST     │  │
│  │  Message *                     │  │                   │  │
│  │  [Textarea]                    │  │                   │  │
│  │                               │  │                   │  │
│  │  How did you hear about us?    │  │                   │  │
│  │  [Dropdown: Referral, Search,  │  │                   │  │
│  │   Social, Event, Other]        │  │                   │  │
│  │                               │  │                   │  │
│  │  [Send Message →]             │  │                   │  │
│  │                               │  │                   │  │
│  │  We typically respond within  │  │                   │  │
│  │  24 business hours.            │  │                   │  │
│  │                               │  │                   │  │
│  └───────────────────────────────┘  └───────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 3: Ways to Work Together
```
┌─────────────────────────────────────────────────────────────┐
│                  Ways to Work Together                       │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐  │
│  │  Free Audit     │  │  Strategy Call │  │  Workshop   │  │
│  │                 │  │                 │  │             │  │
│  │ 30-min call     │  │ 60-min call     │  │ Half-day    │  │
│  │ We identify     │  │ Deep dive into  │  │ Hands-on    │  │
│  │ 1-2 quick wins  │  │ your challenge  │  │ problem     │  │
│  │                 │  │ & opportunities │  │ solving     │
│  │                 │  │                 │  │             │  │
│  │ Free            │  │ $500            │  │ $2,500      │  │
│  │ [Schedule →]    │  │ [Book →]        │  │ [Book →]    │  │
│  └─────────────────┘  └─────────────────┘  └─────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 4: FAQ
```
┌─────────────────────────────────────────────────────────────┐
│                   Common Questions                          │
│                                                             │
│  [Accordion FAQ items]                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Mobile Responsiveness Notes

### Breakpoints
- **Mobile:** < 640px (single column, stacked)
- **Tablet:** 640px - 1024px (2 columns, adjusted navigation)
- **Desktop:** > 1024px (full layout)

### Key Adjustments
1. **Hero:** Text stacks, CTAs vertically aligned, reduce Three.js complexity
2. **Grids:** 1 column (mobile) → 2 columns (tablet) → 3-4 columns (desktop)
3. **Navigation:** Hamburger menu < 1024px
4. **Forms:** Full-width inputs on mobile
5. **Spacing:** Reduced padding on mobile (60-80px vertical sections)
6. **Typography:** Smaller font sizes, adjusted line heights
7. **Animations:** Simplified for mobile performance (no parallax, reduced particle count)
