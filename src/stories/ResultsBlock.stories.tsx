import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ResultsBlock from '../components/ResultsBlock/ResultsBlock';
import resultsBlockData from '../pages/VyraCasePageView/data/resultsBlockData';
import Bg from '../assets/images/vyraCasePage/resultsBlock/img_resultsBlock@2x.webp';
import '../pages/App/sass/globals.scss';

const meta: Meta<typeof ResultsBlock> = {
  title: 'ResultsBlock',
  component: ResultsBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResultsBlock>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: resultsBlockData.title,
    content: resultsBlockData.content,
    background: Bg,
  },
};
