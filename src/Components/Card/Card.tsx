import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>{
    children : ReactNode;
    asChild?: boolean;
    className?: string;
    color: 'blue-400' | 'blue-500'
}

export function Card({
  children, asChild, className, color, ...props
}: CardProps) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={clsx(
        'flex flex-col py-9 px-4 text-center rounded-[20px] max-w-[527px] blue-400',
        {
          'bg-blue-400': color === 'blue-400',
          'bg-blue-500': color === 'blue-500',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

Card.defaultProps = {
  asChild: false,
  className: '',
};
