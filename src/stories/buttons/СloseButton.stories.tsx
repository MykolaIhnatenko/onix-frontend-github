import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import '../../pages/App/sass/globals.scss';
import CloseButton from '../../components/CloseButton/CloseButton';

const meta: Meta<typeof CloseButton> = {
  title: 'Buttons/CloseButton',
  component: CloseButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', margin: 50 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    type: 'button',
    onClick: () => {},
  },
};
