import React from 'react';
import { clsx } from 'clsx';
import { Heading } from '../Heading/Heading';
import { Hexagon } from '../../Icons/Hexagon';

export interface SkillProps extends React.HTMLAttributes<HTMLDivElement>{
    className?: string;
    skillName: string;
    proficiency: 1 | 2 | 3 | 4 | 5;
}

function getHexagon(proficiency:number) {
  const hexagons = [];

  for (let i = 1; i <= 5; i += 1) {
    if (i <= proficiency) {
      hexagons.push(<Hexagon color="y-200" />);
    } else {
      hexagons.push(<Hexagon color="y-50" />);
    }
  }

  return hexagons;
}

export function Skill({
  className, skillName, proficiency, ...props
}: SkillProps) {
  const Comp = 'div';

  return (
    <Comp
      className={clsx(
        'flex flex-col text-center max-w-[212px]',
        className,
      )}
      {...props}
    >
      <Heading size="sm" className="pb-4 text-blue-200">
        {skillName}
      </Heading>
      <div className="flex flex-nowrap gap-2">
        {getHexagon(proficiency)}
      </div>
    </Comp>

  );
}

Skill.defaultProps = {
  className: '',
};
