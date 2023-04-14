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
        'py-5 px-8 bg-blue-400 rounded-[20px] font-semibold text-blue-200 text-sm transition-colors  w-full hover:bg-blue-300 focus:ring-2 ring-w',
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
  className: '',
};
