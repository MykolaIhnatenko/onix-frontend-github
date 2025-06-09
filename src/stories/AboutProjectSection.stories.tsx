import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import AboutProjectSection from '../components/AboutProject/AboutProject';
import aboutBlockData from '../pages/VyraCasePageView/data/aboutBlockData.json';
import '../pages/App/sass/globals.scss';

const meta: Meta<typeof AboutProjectSection> = {
  title: 'AboutProjectSection',
  component: AboutProjectSection,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AboutProjectSection>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: aboutBlockData.title,
    content: aboutBlockData.content,
    subtitle: '',
  },
};
