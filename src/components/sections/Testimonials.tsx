'use client';

import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';

const testimonials = [
  {
    quote: "GET turned our 15-step onboarding into a 2-click process. We reclaimed 3 full workdays per week.",
    author: 'Sarah Chen',
    role: 'Founder',
    company: 'TechFlow',
  },
  {
    quote: "They didn't just build an automation. They taught us how to think about our operations differently.",
    author: 'Marcus Johnson',
    role: 'COO',
    company: 'ScaleUp Inc',
  },
  {
    quote: "The dashboard they built is the first thing I check every morning. It's like having an extra team member.",
    author: 'Emily Rodriguez',
    role: 'Head of Operations',
    company: 'Growth Labs',
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              What clients say
            </h2>
          </div>
        </FadeIn>
        
        {/* Testimonial carousel */}
        <FadeIn key={activeIndex} direction="up">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quote marks */}
            <div className="text-6xl md:text-8xl text-accent/20 font-serif leading-none mb-4">
              &ldquo;
            </div>
            
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-white leading-relaxed mb-8">
              {testimonials[activeIndex].quote}
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-white font-bold text-lg mb-3">
                {testimonials[activeIndex].author[0]}
              </div>
              <cite className="not-italic">
                <span className="text-white font-semibold">
                  {testimonials[activeIndex].author}
                </span>
                <span className="text-gray-500">, </span>
                <span className="text-gray-400">
                  {testimonials[activeIndex].role}
                </span>
                <span className="text-gray-600">, </span>
                <span className="text-gray-400">
                  {testimonials[activeIndex].company}
                </span>
              </cite>
            </div>
          </div>
        </FadeIn>
        
        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-fast
                ${index === activeIndex ? 'bg-accent w-6' : 'bg-gray-700 hover:bg-gray-600'}
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
