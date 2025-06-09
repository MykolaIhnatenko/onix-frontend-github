import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import ourSolutionsContentData from '../pages/VyraCasePageView/data/ourSolutionsContentData';
import '../pages/App/sass/globals.scss';
import OurSolutions from 'components/OurSolutions/OurSolutions';

const meta: Meta<typeof OurSolutions> = {
  title: 'OurSolutions',
  component: OurSolutions,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OurSolutions>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    upTitle: '',
    title: ourSolutionsContentData.blockTitle,
    firstText: '',
    secondText: '',
    data: ourSolutionsContentData.data,
  },
};
