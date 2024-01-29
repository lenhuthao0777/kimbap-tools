import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';

const buttonVariants = cva(
  'text-zinc-900 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-white light:text-zinc-900',
  {
    variants: {
      variant: {
        default: 'bg-white text-zinc-900 shadow hover:bg-gray-100/80',
        destructive: 'bg-red-500 text-white shadow-sm hover:bg-red-500/90',
        outline:
          'bg-white border border-input bg-transparent shadow-sm hover:bg-gray-100/80 dark:hover:text-zinc-900',
        secondary: 'bg-sky-500 text-white shadow-sm hover:bg-sky-500/80',
        ghost: 'hover:bg-gray-100/80 dark:hover:text-zinc-900',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, loading, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
