// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react';
import { CardWork, CardWorkProps } from './CardWork';

export default {
  title: 'Components/CardWork',
  component: CardWork,
  args: {
    color: 'blue-4',
    size: 'h-md',
    image: {
      pathStaic: 'https://geekdama.com.br/wp-content/uploads/2022/12/one-piece-manga-1070-luffy-gear-5-colorizacao-by-JLjarx-postcover-1280x670.jpg',
      pathGif: 'https://i.pinimg.com/originals/68/ab/3f/68ab3f1b4c93a51801bb8d16bdc92837.gif',
      alt: 'Luffy gear 5',
    },
    pathGitHubRepository: 'https://github.com/topics/onepiece',
    pathPage: 'https://onepieceex.net/',
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    size: {
      options: ['h-md', 'h-lg'],
      control: {
        type: 'radio',
      },
    },
    color: {
      options: ['blue-2', 'blue-4', 'blue-5'],
      control: {
        type: 'radio',
      },
    },
  },

}as Meta<CardWorkProps>;

export const Default: StoryObj<CardWorkProps> = {};
