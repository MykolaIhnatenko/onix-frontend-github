import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import RunningColsBlock from '../components/RunningColsBlock/RunningColsBlock';
import runningColsData from '../pages/caseStudies/DigitalHealthcarePageView/data/runningColsData';
import '../pages/App/sass/globals.scss';

const meta: Meta<typeof RunningColsBlock> = {
  title: 'RunningColsBlock',
  component: RunningColsBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RunningColsBlock>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440, margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    runningCols: runningColsData,
  },
};
