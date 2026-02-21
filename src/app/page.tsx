import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Values } from '@/components/sections/Values';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTAStrip } from '@/components/sections/CTAStrip';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Values />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
