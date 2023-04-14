// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card, CardProps } from './Card';
import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    color: 'b1',
    children: [
      <Heading size="sm" className="text-yellow-200">Cargo</Heading>,
      <Text size="md" className="text-blue-200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</Text>,
    ],
  },

}as Meta<CardProps>;

export const Default: StoryObj<CardProps> = {};
