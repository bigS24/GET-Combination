'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';

const services = [
  {
    slug: 'automation',
    title: 'Automation',
    icon: '⚡',
    description: 'We build workflows that run while you sleep. Zapier, Make, n8n, or custom solutions — we pick the right tool for the job.',
    features: [
      'Multi-app workflows',
      'Conditional logic chains',
      'Error handling & monitoring',
      'Custom webhook integrations',
      'Scheduled triggers',
      'Data transformation',
      'Approval workflows',
      'Notification systems',
    ],
    pricing: 'Starting at $2,500',
  },
  {
    slug: 'ai-workflows',
    title: 'AI Workflows',
    icon: '🧠',
    description: 'Custom AI integrations that make your tools smarter, not more complicated.',
    features: [
      'LLM integrations',
      'AI-powered automation',
      'Smart document processing',
      'Custom AI agents',
      'Knowledge base automation',
      'Predictive workflows',
    ],
    pricing: 'Starting at $5,000',
  },
  {
    slug: 'mvp-builds',
    title: 'MVP Builds',
    icon: '🚀',
    description: 'From concept to launch in weeks. Not months. Not never. Validated, tested, and ready to ship.',
    features: [
      'Rapid prototyping',
      'Full-stack development',
      'Database architecture',
      'API development',
      'Authentication',
      'Payment integration',
      'Launch support',
    ],
    pricing: 'Starting at $8,000',
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    icon: '🔌',
    description: 'APIs, webhooks, syncs — your tools, finally talking to each other.',
    features: [
      'API development',
      'Webhook setups',
      'Data syncing',
      'Custom integrations',
      'Third-party connections',
      'Data transformation',
    ],
    pricing: 'Starting at $3,000',
  },
  {
    slug: 'dashboards',
    title: 'Dashboards',
    icon: '📊',
    description: 'Real-time insights without the spreadsheet gymnastics.',
    features: [
      'Custom dashboards',
      'Real-time data',
      'Visual analytics',
      'Automated reporting',
      'Data visualization',
      'KPI tracking',
    ],
    pricing: 'Starting at $4,000',
  },
  {
    slug: 'retainers',
    title: 'Retainers',
    icon: '🔄',
    description: 'Ongoing partnership. Priority support. Someone who knows your stack.',
    features: [
      'Priority support',
      'Dedicated hours',
      'Monthly strategy',
      'Proactive monitoring',
      'Ongoing optimization',
      'Roadmap planning',
    ],
    pricing: 'Starting at $2,000/mo',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="container-custom relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Services
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              What we build for you. From automated workflows to full product builds — we engineer systems that think.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Services */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <StaggerChildren className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.slug}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-400 text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <span className="text-accent font-semibold">{service.pricing}</span>
                    <Button href={`/contact?service=${service.slug}`} variant="primary" size="sm">
                      Get started
                    </Button>
                  </div>
                </div>
                
                <Card className="bg-black/50">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl block mb-4">{service.icon}</span>
                      <p className="text-gray-500 text-sm">Preview coming soon</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section bg-black">
        <div className="container-custom">
          <Card className="text-center max-w-2xl mx-auto bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Not sure what you need?
            </h2>
            <p className="text-gray-400 mb-6">
              Let&apos;s talk about your challenges. We&apos;ll help you figure out the best approach.
            </p>
            <Button href="/contact" variant="primary">
              Book a free consultation
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
