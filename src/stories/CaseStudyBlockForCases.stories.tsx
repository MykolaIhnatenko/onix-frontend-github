import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import CaseStudiesBlockForCases from '../components/CaseStudiesBlockForCases/CaseStudiesBlockForCases';
import '../pages/App/sass/globals.scss';

const meta: Meta<typeof CaseStudiesBlockForCases> = {
  title: 'CaseStudiesBlockForCases',
  component: CaseStudiesBlockForCases,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof CaseStudiesBlockForCases>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'See other related projects',
    sliderIds: Array.from({ length: 1000 }, (_, i) => i + 1),
  },
};
