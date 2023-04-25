// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react';
import { Skill, SkillProps } from './Skill';

export default {
  title: 'Components/Skill',
  component: Skill,
  args: {
    skillName: 'JavaScript',
    proficiency: 3,
  },
  argTypes: {
    proficiency: {
      options: ['1', '2', '3', '4', '5'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<SkillProps>;

export const Default: StoryObj<SkillProps> = {};
