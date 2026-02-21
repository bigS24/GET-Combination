import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 active:translate-y-0 shadow-accent hover:shadow-lg',
      ghost: 'bg-transparent text-white border border-gray-700 hover:border-gray-500 hover:bg-white/5',
      outline: 'bg-transparent text-white border border-gray-700 hover:border-accent hover:text-accent',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition-all duration-fast focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const styles = cn(baseStyles, variants[variant], sizes[size], className);
    
    if (href) {
      return (
        <Link href={href} className={styles}>
          {children}
        </Link>
      );
    }
    
    return (
      <button ref={ref} className={styles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
