import type { ButtonHTMLAttributes } from 'react';
import { classesProcessor } from '@/shared/lib/helpers';
import { buttonVariants, type ButtonVariant } from './button-variants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ children, className, variant = 'secondary', ...props }: ButtonProps) {
  return (
    <button
      className={classesProcessor(
        `
          inline-flex
          items-center
          justify-center
          cursor-pointer
          gap-2
          rounded-lg
          px-4
          py-2
          text-sm
          font-medium
          transition-colors
        `,
        buttonVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
