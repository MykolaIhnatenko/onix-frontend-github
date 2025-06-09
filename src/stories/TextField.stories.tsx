import { Meta, StoryObj } from '@storybook/react';

import '../pages/App/sass/globals.scss';
import TextField from '../components/ContactFormModal/components/TextField';

const meta: Meta<typeof TextField> = {
  title: 'Input/TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', margin: 50 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    name: 'text',
    label: 'Text Field',
  },
};
