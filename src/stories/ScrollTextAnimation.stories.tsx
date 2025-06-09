import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ScrollTextAnimation from '../components/ScrollTextAnimation/ScrollTextAnimation';
import digitalHealthcareScrollTextData
  from '../pages/caseStudies/DigitalHealthcarePageView/data/digitalHealthcareScrollTextData';

import '../pages/App/sass/globals.scss';

const meta: Meta<typeof ScrollTextAnimation> = {
  title: 'ScrollTextAnimation',
  component: ScrollTextAnimation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollTextAnimation>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440, margin: 'auto', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    textList: digitalHealthcareScrollTextData.textList,
    scaleIndex: 1.5,
    scaleIndexMobile: 1.5,
    description: '',
  },
};
