'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';

const pricingTiers = [
  {
    name: 'Workflow',
    description: 'Single automation workflow',
    price: 2500,
    priceSuffix: 'starting',
    features: [
      '1 workflow',
      'Up to 5 connected apps',
      '2 rounds of revisions',
      'Handoff documentation',
      '30-day support',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Project',
    description: 'End-to-end build',
    price: 8000,
    priceSuffix: 'starting',
    features: [
      'Discovery & planning',
      'Custom build',
      'Testing & QA',
      'Launch support',
      'Team training',
      '60-day support',
    ],
    cta: 'Get started',
    highlighted: true,
  },
  {
    name: 'Retainer',
    description: 'Ongoing partnership',
    price: 2000,
    priceSuffix: '/mo starting',
    features: [
      'Priority support',
      '10 hours/month',
      'Monthly strategy call',
      'Proactive monitoring',
      'Dedicated support channel',
      'Annual roadmap planning',
    ],
    cta: 'Get started',
    highlighted: false,
  },
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Most workflows take 1-2 weeks. MVP builds typically run 4-8 weeks depending on complexity. We\'ll give you a timeline during our initial consultation.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes. Projects over $5,000 can be split into 2-3 payments tied to milestones.',
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'All packages include post-launch support. For ongoing needs, our retainer provides dedicated capacity.',
  },
  {
    question: 'What platforms do you work with?',
    answer: 'Zapier, Make.com, n8n, custom APIs, and most major SaaS platforms. We pick the right tool for your specific needs.',
  },
  {
    question: 'Do you work with agencies?',
    answer: 'Yes, we partner with agencies as a white-label automation partner.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="container-custom relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Pricing
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Transparent pricing, no surprises. Choose the package that fits your needs.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <FadeIn key={tier.name} direction="up" delay={index * 0.1}>
                <Card 
                  className={`h-full flex flex-col ${tier.highlighted ? 'border-accent relative' : ''}`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {tier.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-display font-bold text-white">
                      ${tier.price.toLocaleString()}
                    </span>
                    {tier.priceSuffix && (
                      <span className="text-gray-500 text-sm ml-1">
                        {tier.priceSuffix}
                      </span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    href="/contact" 
                    variant={tier.highlighted ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="section bg-black">
        <div className="container-custom">
          <FadeIn direction="up">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <span className={`text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-black/30">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <Card className="text-center max-w-2xl mx-auto bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Need something custom?
            </h2>
            <p className="text-gray-400 mb-6">
              We love unique challenges. Let&apos;s talk about your specific needs.
            </p>
            <Button href="/contact" variant="primary">
              Contact us
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
