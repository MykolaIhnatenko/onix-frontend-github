import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import technologyData from '../pages/DeployingWordpressCasePageView/data/technologyData.json';
import CoreTechnology from '../components/CoreTechnology/CoreTechnology';
import '../pages/App/sass/globals.scss';

const meta: Meta<typeof CoreTechnology> = {
  title: 'CoreTechnology',
  component: CoreTechnology,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CoreTechnology>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{
        maxWidth: 1440,
      }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    data: technologyData,
    title: 'Core technology',
    blackTheme: false,
  },
};
