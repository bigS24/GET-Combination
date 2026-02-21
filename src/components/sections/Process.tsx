'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We map your current workflows, identify bottlenecks, and prioritize automation opportunities by impact.',
    details: [
      'Workflow audit',
      'Tool stack review',
      'Impact prioritization',
    ],
  },
  {
    number: '02',
    title: 'Design',
    description: 'We architect solutions that scale. No band-aids, no duct tape.',
    details: [
      'System architecture',
      'Workflow design',
      'Integration planning',
    ],
  },
  {
    number: '03',
    title: 'Build',
    description: 'We code, connect, and configure. Then we test everything twice.',
    details: [
      'Development',
      'Testing & QA',
      'Documentation',
    ],
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy, train your team, and stick around to make sure it works.',
    details: [
      'Deployment',
      'Team training',
      'Ongoing support',
    ],
  },
];

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <section className="section bg-black relative">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              How we work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No surprises. No fluff. Just a proven process that delivers results.
            </p>
          </div>
        </FadeIn>
        
        {/* Step indicators */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 md:gap-4">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-fast
                    ${index === activeStep 
                      ? 'bg-accent text-white' 
                      : 'text-gray-500 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <span className="text-xs md:text-sm font-mono font-semibold">{step.number}</span>
                  <span className="hidden md:inline text-sm font-medium">{step.title}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
        
        {/* Step content */}
        <FadeIn key={activeStep} direction="up" delay={0.2}>
          <Card className="max-w-3xl mx-auto">
            <div className="flex items-start gap-6">
              <span className="text-5xl md:text-7xl font-display font-bold text-gradient">
                {steps[activeStep].number}
              </span>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {steps[activeStep].description}
                </p>
                <ul className="space-y-3">
                  {steps[activeStep].details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </FadeIn>
        
        {/* Step progress line - desktop */}
        <div className="hidden md:flex justify-center mt-8">
          <div className="flex items-center gap-1">
            {steps.map((_, index) => (
              <div 
                key={index}
                className={`
                  h-1 rounded-full transition-all duration-fast
                  ${index <= activeStep ? 'bg-accent w-8' : 'bg-gray-800 w-4'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
