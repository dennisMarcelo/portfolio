import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children : ReactNode;
    asChild?: boolean;
    className?: string
}

export function Button({
  children, asChild, className, ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'rounded-[20px] font-semibold transition-colors focus:ring-2 ring-2 bg-blue-400 text-blue-200 hover:bg-blue-300',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

Button.defaultProps = {
  asChild: false,
  className: 'bg-blue-400 text-blue-200 hover:bg-blue-300',
};
