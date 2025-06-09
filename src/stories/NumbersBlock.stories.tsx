import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import '../pages/App/sass/globals.scss';
import NumbersBlock from '../components/NumbersBlock/NumbersBlock';
import numbersData from '../pages/BrandingDesignPageView/data/numbersData';

const meta: Meta<typeof NumbersBlock> = {
  title: 'NumbersBlock',
  component: NumbersBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumbersBlock>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{
        position: 'relative',
        margin: 70,
        maxWidth: 1440,
      }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    data: numbersData,
  },
};
