import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import '../pages/App/sass/globals.scss';
import AchievementsBlock from '../components/AchievementBlock/AchievementsBlock';

const meta: Meta<typeof AchievementsBlock> = {
  title: 'AchievementsBlock',
  component: AchievementsBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AchievementsBlock>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440, margin: 'auto', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: '',
  },
};
