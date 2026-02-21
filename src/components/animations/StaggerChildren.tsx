'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface StaggerChildrenProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
}

export const StaggerChildren = ({ 
  children, 
  stagger = 0.1,
  className = '' 
}: StaggerChildrenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.children;
      
      if (elements) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger,
            duration: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion, stagger]);
  
  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default StaggerChildren;
