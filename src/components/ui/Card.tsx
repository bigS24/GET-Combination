import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, padding = 'md', ...props }, ref) => {
    const paddingSizes = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };
    
    const baseStyles = 'bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg transition-all duration-normal';
    const hoverStyles = hover ? 'hover:-translate-y-1 hover:shadow-xl hover:border-accent/50' : '';
    
    return (
      <div
        ref={ref}
        className={cn(baseStyles, hoverStyles, paddingSizes[padding], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
