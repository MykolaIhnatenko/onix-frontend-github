import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ProcessBlock from '../components/ProcessBlock/ProcessBlock';
import { processAccordionData, processBlockContent, processImages } from '../pages/MainPage/data/processData';
import '../pages/App/sass/globals.scss';

const meta: Meta<typeof ProcessBlock> = {
  title: 'ProcessBlock',
  component: ProcessBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProcessBlock>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440, margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    data: processAccordionData,
    imagesData: processImages,
    title: processBlockContent.title,
    subtitle: processBlockContent.subtitle,
    bottomTitle: '',
    notice: '',
    firstText: '',
    secondText: '',
  },
};
