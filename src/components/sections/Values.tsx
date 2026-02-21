'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';

const values = [
  {
    title: 'Precision',
    description: 'Every workflow tested, every edge case considered.',
    icon: '🎯',
  },
  {
    title: 'Velocity',
    description: "Fast doesn't mean rushed. Iterative delivery.",
    icon: '⚡',
  },
  {
    title: 'Clarity',
    description: 'No black boxes. We document everything.',
    icon: '💎',
  },
];

export const Values = () => {
  return (
    <section className="section bg-black relative overflow-hidden">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              We don&apos;t just connect apps.
              <br />
              <span className="text-gradient">We engineer systems that think.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Every project starts with understanding. We dive deep into your workflows, 
              identify the real bottlenecks, and build solutions that actually move the needle.
            </p>
          </div>
        </FadeIn>
        
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value) => (
            <div 
              key={value.title}
              className="text-center p-8 rounded-2xl bg-white/5 border border-gray-800 hover:border-accent/50 transition-all duration-normal"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default Values;
