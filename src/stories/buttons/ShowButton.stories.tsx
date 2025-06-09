import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import '../../pages/App/sass/globals.scss';
import { ShowButtonTitleVariants } from '../../constants/enums';
import ShowButton from '../../components/ShowButton/ShowButton';

const meta: Meta<typeof ShowButton> = {
  title: 'Buttons/ShowButton',
  component: ShowButton,
  tags: ['autodocs'],
  argTypes: {
    title: {
      options: Object.values(ShowButtonTitleVariants),
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShowButton>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex', justifyContent: 'center', margin: 50,
      }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    title: ShowButtonTitleVariants.SHOW_LESS,
  },
};
