export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'automation' | 'web-app' | 'dashboard' | 'ai' | 'mvp' | 'integration';
  year: number;
  client?: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  services: string[];
  techStack: string[];
  thumbnail: string;
  heroImage?: string;
  featured: boolean;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  pricing?: {
    startingAt: number;
    description: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'automation' | 'product' | 'ai' | 'operations';
  publishedAt: string;
  readTime: number;
  author: {
    name: string;
    avatar?: string;
  };
  featuredImage?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  priceSuffix?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
}
