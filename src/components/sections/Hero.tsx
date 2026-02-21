'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const NodeNetworkCanvas = dynamic(
  () => import('@/components/three/NodeNetworkCanvas'),
  { ssr: false }
);

gsap.registerPlugin(SplitText);

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (prefersReducedMotion || !headlineRef.current) return;
    
    const ctx = gsap.context(() => {
      // Headline character animation
      const split = new SplitText(headlineRef.current, { 
        type: 'chars, words'
      });
      
      const tl = gsap.timeline({ delay: 0.3 });
      
      tl.from(split.chars, {
        opacity: 0,
        y: 60,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: 'power4.out',
      })
      .from(subheadlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3')
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power3.out',
      }, '-=0.2');
      
    }, containerRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <NodeNetworkCanvas />
      </div>
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <h1 
          ref={headlineRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight"
        >
          Stop doing things
          <br />
          <span className="text-gradient">that computers can do.</span>
        </h1>
        
        <p 
          ref={subheadlineRef}
          className="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Automation that compounds your output.
          <br className="hidden sm:block" />
          Products that scale your ambition.
        </p>
        
        <div ref={ctaRef} className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/contact" variant="primary" size="lg">
            Let&apos;s automate something
          </Button>
          <Button href="/work" variant="ghost" size="lg">
            See our work
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 md:mt-20">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {/* Placeholder logos - replace with actual client logos */}
            <div className="text-gray-400 font-display font-bold text-lg">Company A</div>
            <div className="text-gray-400 font-display font-bold text-lg">Company B</div>
            <div className="text-gray-400 font-display font-bold text-lg">Company C</div>
            <div className="text-gray-400 font-display font-bold text-lg">Company D</div>
            <div className="text-gray-400 font-display font-bold text-lg">Company E</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
