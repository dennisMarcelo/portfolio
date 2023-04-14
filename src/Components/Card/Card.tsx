import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface CardProps extends React.Component<React.HTMLAttributes<HTMLDivElement>>{
    children : ReactNode;
    asChild?: boolean;
    className?: string;
    color: 'b1' | 'b2'
}

export function Card({
  children, asChild, className, color, ...props
}: CardProps) {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      className={clsx(
        'flex flex-col py-9 px-4 text-center rounded-[20px] max-w-[527px]',
        {
          'bg-blue-400': color === 'b1',
          'bg-blue-500': color === 'b2',
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
