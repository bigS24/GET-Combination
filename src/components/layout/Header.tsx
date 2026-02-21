'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Work', href: '/work' },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'Automation', href: '/services/automation' },
      { label: 'MVP Builds', href: '/services/mvp-builds' },
      { label: 'Web Apps', href: '/services/web-apps' },
      { label: 'AI Workflows', href: '/services/ai-workflows' },
      { label: 'Integrations', href: '/services/integrations' },
      { label: 'Dashboards', href: '/services/dashboards' },
      { label: 'Retainers', href: '/services/retainers' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const isActive = (href: string) => pathname === href;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 font-display font-bold text-xl text-white hover:text-accent transition-colors"
          >
            <span className="text-gradient">GET</span>
            <span className="text-gray-500 text-sm font-normal">for Digital Solutions</span>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                {item.children ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className={cn(
                        "flex items-center gap-1 py-2 text-sm font-medium transition-colors",
                        isActive(item.href) ? "text-accent" : "text-gray-300 hover:text-white"
                      )}
                    >
                      {item.label}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown */}
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 w-48">
                        <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "py-2 text-sm font-medium transition-colors",
                      isActive(item.href) ? "text-accent" : "text-gray-300 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <div className="container-custom py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2 text-base font-medium transition-colors",
                      isActive(item.href) ? "text-accent" : "text-gray-300"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 mt-2 space-y-2 border-l border-gray-800 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1 text-sm text-gray-500 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
