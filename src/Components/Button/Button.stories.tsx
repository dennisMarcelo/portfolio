// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Saiba mais sobre mim',
  },
  argTypes: {

  },

} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
