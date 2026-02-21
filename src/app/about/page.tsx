'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="container-custom relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              About
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              We&apos;re automation engineers who believe that the best technology is the kind that disappears into the background.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Story */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn direction="up">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  GET for Digital Solutions was born from a simple frustration: businesses were drowning in manual work that computers could easily handle.
                </p>
                <p>
                  We saw teams spending hours on repetitive tasks — copying data between apps, sending follow-up emails, updating spreadsheets — when they should be focused on work that actually mattered.
                </p>
                <p>
                  So we built GET to fix that. We engineer automation systems that handle the busywork, giving teams their time back. And when automation isn&apos;t enough, we build custom products that scale.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1}>
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl block mb-4">⚡</span>
                  <p className="text-gray-500">Our story in numbers</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section bg-black">
        <div className="container-custom">
          <FadeIn direction="up">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-12 text-center">
              Our Values
            </h2>
          </FadeIn>
          
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-gray-800">
              <span className="text-4xl block mb-4">🎯</span>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                Precision
              </h3>
              <p className="text-gray-400">
                Every workflow tested, every edge case considered. We don&apos;t do &quot;good enough.&quot;
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-gray-800">
              <span className="text-4xl block mb-4">⚡</span>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                Velocity
              </h3>
              <p className="text-gray-400">
                Fast doesn&apos;t mean rushed. We deliver quickly without cutting corners.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-gray-800">
              <span className="text-4xl block mb-4">💎</span>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                Clarity
              </h3>
              <p className="text-gray-400">
                No black boxes. We document everything so you own your systems.
              </p>
            </div>
          </StaggerChildren>
        </div>
      </section>
      
      {/* Process */}
      <section className="section bg-gray-900" id="process">
        <div className="container-custom">
          <FadeIn direction="up">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-12 text-center">
              How We Work
            </h2>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We map your current workflows, identify bottlenecks, and prioritize automation opportunities by impact.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'We architect solutions that scale. No band-aids, no duct tape.',
              },
              {
                step: '03',
                title: 'Build',
                description: 'We code, connect, and configure. Then we test everything twice.',
              },
              {
                step: '04',
                title: 'Launch',
                description: 'We deploy, train your team, and stick around to make sure it works.',
              },
            ].map((item, index) => (
              <FadeIn key={item.step} direction="up" delay={index * 0.1}>
                <div className="flex gap-6">
                  <span className="text-4xl font-display font-bold text-gradient flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
