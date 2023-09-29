import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md';
    children : ReactNode;
    asChild?: boolean;
    className?: string
}

export function Text({
  size = 'md', children, asChild, className,
}: TextProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={clsx(
        'font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
}

Text.defaultProps = {
  size: '',
  asChild: false,
  className: 'text-blue-100',
};
