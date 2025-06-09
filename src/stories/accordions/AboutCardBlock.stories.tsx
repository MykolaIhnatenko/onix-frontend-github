import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import AboutCardBlock from '../../components/AboutCardBlock/AboutCardBlock';
import '../../pages/App/sass/globals.scss';
import cardTravelData from '../../pages/TravelSoftwarePageView/data/cardTravelData';

const meta: Meta<typeof AboutCardBlock> = {
  title: 'Accordions/AboutCardBlock',
  component: AboutCardBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutCardBlock>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 1440 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    data: cardTravelData,
    whiteBlock: false,
  },
};
