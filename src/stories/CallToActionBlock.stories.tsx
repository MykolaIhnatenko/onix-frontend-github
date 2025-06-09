import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import CallToActionComponent from '../components/CallToActionBlock/CallToActionComponent';
import ButtonTypes from '../constants/ButtonTypes';
import VRTellUsBg from '../assets/images/vrServicesPage/img_vr_bg_call_third_desktop.webp';
import '../pages/App/sass/globals.scss';
import { ButtonPathVariant } from '../constants/enums';

const meta: Meta<typeof CallToActionComponent> = {
  title: 'CTA/CallToActionBlock',
  component: CallToActionComponent,
  tags: ['autodocs'],
  argTypes: {
    buttonType: {
      options: Object.values(ButtonTypes),
      control: {
        type: 'radio',
      },
    },
    buttonPathVariant: {
      options: Object.values(ButtonPathVariant),
      control: {
        type: 'radio',
      },
    },
    tag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CallToActionComponent>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Need a fully immersive AR & VR solution for your specific industry?',
    btnText: 'Speak to our expert',
    content: '',
    buttonType: ButtonTypes.PRIMARY,
    onClick: () => {
    },
    withButton: true,
    background: VRTellUsBg,
  },
};
