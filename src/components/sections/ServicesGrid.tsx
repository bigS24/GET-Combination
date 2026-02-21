'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';

const services = [
  {
    id: 'automation',
    title: 'Automation',
    icon: '⚡',
    description: 'Zapier, Make, n8n — we build workflows that run while you sleep.',
    features: ['Multi-app workflows', 'Conditional logic', 'Error handling'],
    href: '/services/automation',
  },
  {
    id: 'ai-workflows',
    title: 'AI Workflows',
    icon: '🧠',
    description: 'Custom AI integrations that make your tools smarter.',
    features: ['Custom AI integrations', 'LLM workflows', 'Smart automation'],
    href: '/services/ai-workflows',
  },
  {
    id: 'mvp-builds',
    title: 'MVP Builds',
    icon: '🚀',
    description: 'From concept to launch in weeks. Not months. Not never.',
    features: ['Rapid prototyping', 'Full-stack development', 'Launch support'],
    href: '/services/mvp-builds',
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: '🔌',
    description: 'APIs, webhooks, syncs — your tools, finally talking.',
    features: ['API development', 'Webhook setups', 'Data syncing'],
    href: '/services/integrations',
  },
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: '📊',
    description: 'Real-time insights without the spreadsheet gymnastics.',
    features: ['Custom dashboards', 'Real-time data', 'Visual analytics'],
    href: '/services/dashboards',
  },
  {
    id: 'retainers',
    title: 'Retainers',
    icon: '🔄',
    description: 'Ongoing partnership. Priority support. Someone who knows your stack.',
    features: ['Priority support', 'Monthly strategy', 'Dedicated support'],
    href: '/services/retainers',
  },
];

export const ServicesGrid = () => {
  return (
    <section className="section bg-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              What we build
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From automated workflows to full product builds — we engineer systems that think.
            </p>
          </div>
        </FadeIn>
        
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.id} href={service.href}>
              <Card className="h-full group cursor-pointer">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-accent text-sm font-medium group-hover:gap-3 transition-all">
                  Explore
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Card>
            </Link>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default ServicesGrid;
