import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import '../pages/App/sass/globals.scss';

import trustUsCardsData from '../pages/MainPage/data/trustUsCardsData';
import CardsBlock from '../components/CardsBlock/CardsBlock';
import { DropBlockVariant } from '../constants/enums';

const meta: Meta<typeof CardsBlock> = {
  title: 'CardsBlock',
  component: CardsBlock,
  tags: ['autodocs'],
  argTypes: {
    dropBlockBtnVariant: {
      options: Object.values(DropBlockVariant),
      control: {
        type: 'radio',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof CardsBlock>;

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
    data: trustUsCardsData,
    withBtn: false,
    withoutDropBlockBg: false,
    disableBg: false,
    dropBlockText: 'Drop block',
    withoutAnimate: false,
    disableInfoBlock: false,
  },
};
