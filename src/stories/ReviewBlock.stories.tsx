import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import '../pages/App/sass/globals.scss';
import ReviewBlock from '../components/ReviewBlock/ReviewBlock';
import quotesList from '../pages/VRServicesPageView/data/quotesList';

const meta: Meta<typeof ReviewBlock> = {
  title: 'ReviewBlock',
  component: ReviewBlock,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ReviewBlock>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{
        position: 'relative', display: 'flex', justifyContent: 'center', margin: 50, maxWidth: 1440,
      }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    quotesList,
    slider: false,
    withProjectBlock: false,
  },
};
