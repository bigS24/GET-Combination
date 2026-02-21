'use client';

import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';

export const CTAStrip = () => {
  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to get your time back?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Let&apos;s talk about how automation can transform your operations and give you back hours every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Book a 30-min call
              </Button>
              <Button href="/pricing" variant="ghost" size="lg">
                See pricing
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTAStrip;
