'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';

const projects = [
  {
    slug: 'client-onboarding',
    title: 'Client Onboarding Automation',
    category: 'automation',
    description: 'Turned 15-step manual onboarding into a 2-click process.',
    result: 'Saved 40 hours/week',
  },
  {
    slug: 'real-estate-dashboard',
    title: 'Real Estate Analytics Dashboard',
    category: 'dashboard',
    description: 'Centralized analytics for 50+ agents across 3 regions.',
    result: '3x faster decisions',
  },
  {
    slug: 'ecommerce-ai',
    title: 'E-commerce AI Support Bot',
    category: 'ai',
    description: 'AI-powered customer support that handles 80% of queries.',
    result: '60% cost reduction',
  },
  {
    slug: 'inventory-sync',
    title: 'Multi-Channel Inventory Sync',
    category: 'integration',
    description: 'Real-time inventory sync across 5 e-commerce platforms.',
    result: 'Zero oversells',
  },
  {
    slug: 'crm-automation',
    title: 'CRM Workflow Automation',
    category: 'automation',
    description: 'Automated lead scoring and follow-up sequences.',
    result: '45% more conversions',
  },
  {
    slug: 'saas-mvp',
    title: 'SaaS MVP Launch',
    category: 'mvp',
    description: 'Full-stack SaaS product from concept to launch.',
    result: '100 users in 30 days',
  },
];

const categories = ['all', 'automation', 'dashboard', 'ai', 'integration', 'mvp'];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);
  
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="container-custom relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Work
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Real results. Real impact. Browse our latest projects to see how we&apos;ve helped businesses transform their operations.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Filter */}
      <section className="bg-gray-900 border-y border-gray-800 sticky top-20 z-40">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${activeCategory === category 
                    ? 'bg-accent text-white' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`}>
                <Card className="group cursor-pointer h-full" padding="none">
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge variant="accent" className="mb-2">{project.category}</Badge>
                      <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                      <p className="text-accent text-sm font-semibold">{project.result}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button href="/contact" variant="outline">
              Start your project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
