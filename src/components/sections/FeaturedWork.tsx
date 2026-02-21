'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';

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
];

export const FeaturedWork = () => {
  return (
    <section className="section bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-gray-900 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                Work that works
              </h2>
              <p className="text-gray-400">
                Real results. Real impact. Real partnership.
              </p>
            </div>
            <Link 
              href="/work"
              className="text-accent hover:text-accent-hover font-medium transition-colors flex items-center gap-2"
            >
              View all work
              <span>→</span>
            </Link>
          </div>
        </FadeIn>
        
        {/* Featured project - large */}
        <FadeIn direction="up" delay={0.1} className="mb-8">
          <Link href={`/work/${projects[0].slug}`}>
            <Card className="group cursor-pointer overflow-hidden" padding="none">
              <div className="relative aspect-[21/9] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Badge variant="accent" className="mb-3">{projects[0].category}</Badge>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {projects[0].title}
                  </h3>
                  <p className="text-gray-400 max-w-xl">{projects[0].description}</p>
                  <p className="mt-3 text-accent font-semibold">{projects[0].result}</p>
                </div>
              </div>
            </Card>
          </Link>
        </FadeIn>
        
        {/* Other projects - grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(1).map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`}>
              <Card className="group cursor-pointer h-full" padding="none">
                <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge variant="default" className="mb-2">{project.category}</Badge>
                    <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                    <p className="mt-2 text-accent text-sm font-semibold">{project.result}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default FeaturedWork;
