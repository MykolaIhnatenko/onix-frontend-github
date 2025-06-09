import '../pages/App/sass/globals.scss';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import cooperateList from '../pages/MainPage/data/cooperateList';
import CooperateBlock from '../components/CooperateBlock/CooperateBlock';

const meta: Meta<typeof CooperateBlock> = {
  title: 'CooperateBlock',
  component: CooperateBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CooperateBlock>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440, margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    data: cooperateList,
    title: 'Lorem ipsum dolor sit amet',
    subtitle: `lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
};
