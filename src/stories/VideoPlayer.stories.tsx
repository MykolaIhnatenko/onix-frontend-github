import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import Poster from '@/images/InteractiveVrMuseum/img_VideoSlide.webp';
import '../pages/App/sass/globals.scss';

const meta: Meta<typeof VideoPlayer> = {
  title: 'VideoPlayer',
  component: VideoPlayer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{
        maxWidth: 1440, height: 'fit-content', margin: 'auto', position: 'relative',
      }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    src: '/static/video/VrMuseum.mp4',
    poster: Poster,
  },
};
