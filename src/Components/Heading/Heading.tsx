import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children : ReactNode;
    asChild?: boolean;
    className?: string
}

export function Heading({
  size = 'md', children, asChild, className,
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={clsx(
        'font-bold font-sans',
        {
          'text-md': size === 'sm',
          'text-lg': size === 'md',
          'text-xl': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
}

Heading.defaultProps = {
  size: '',
  asChild: false,
  className: '',
};
