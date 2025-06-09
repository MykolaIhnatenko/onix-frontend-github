import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import AboutColorTextBlock from '../components/AboutColorTextBlock/AboutColorTextBlock';
import '../pages/App/sass/globals.scss';
import { AboutColorTextBlockVariant } from '../constants/enums';

const meta: Meta<typeof AboutColorTextBlock> = {
  title: 'AboutColorTextBlock',
  component: AboutColorTextBlock,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: Object.values(AboutColorTextBlockVariant),
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AboutColorTextBlock>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: '[ About Onix ]',
    text: 'Onix is a travel and hospitality tech company with 23+ years of experience ',
    textGray: 'professionally turning your ideas into tailor-made software.',
    textSecondBlock: 'We get the most out of cutting-edge technologies to build reliable travel',
    textGraySecondBlock: ' accomplish your business goals and keep users satisfied.',
    afterTextGray: '',
    text2: '',
    textGray2: '',
    revertBlock: false,
    textGrayThirtyBlock: '',
    textThirtyBlock: '',
  },
};
