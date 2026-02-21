'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-black">
        <div className="container-custom py-20">
          <Card className="max-w-xl mx-auto text-center">
            <div className="text-6xl mb-6">✓</div>
            <h1 className="text-2xl font-display font-bold text-white mb-4">
              Message sent!
            </h1>
            <p className="text-gray-400 mb-6">
              Thanks for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <Button href="/" variant="primary">
              Back to home
            </Button>
          </Card>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section bg-black relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="container-custom relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Let&apos;s talk
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Tell us about your project. We&apos;ll help you figure out the best approach.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="section bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <FadeIn direction="up">
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                      placeholder="you@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      What do you need?
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Select a service</option>
                      <option value="automation">Automation</option>
                      <option value="ai-workflows">AI Workflows</option>
                      <option value="mvp-builds">MVP Builds</option>
                      <option value="integrations">Integrations</option>
                      <option value="dashboards">Dashboards</option>
                      <option value="retainers">Retainers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Tell us more
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                      placeholder="Describe your project or challenge..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </Button>
                </form>
              </Card>
            </FadeIn>
            
            {/* Info */}
            <FadeIn direction="up" delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-4">
                    Prefer to book a call?
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Schedule a 30-minute call to discuss your project.
                  </p>
                  <Button href="#" variant="outline">
                    Book a call
                  </Button>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-4">
                    Or email us directly
                  </h3>
                  <a 
                    href="mailto:hello@getfordigital.com"
                    className="text-accent hover:text-accent-hover transition-colors text-lg"
                  >
                    hello@getfordigital.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-4">
                    Follow us
                  </h3>
                  <div className="flex gap-4">
                    {['LinkedIn', 'Twitter', 'GitHub'].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
