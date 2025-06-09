import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import IndustriesWeServeBlock from '../components/IndustriesWeServeBlock/IndustriesWeServe';
import { androidAppIndustriesCarouselData, androidCarouselBottom } from 'pages/AndroidApplicationPageView/data/androidAppIndustriesCarouselData';
import { carouselTop } from 'pages/MainPage/data/industriesWeServeCarouselData';

import '../pages/App/sass/globals.scss';

const meta: Meta<typeof IndustriesWeServeBlock> = {
  title: 'IndustriesWeServeBlock',
  component: IndustriesWeServeBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IndustriesWeServeBlock>;

export const Template: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 1440, margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    upTitle: androidAppIndustriesCarouselData.upTitle,
    title: androidAppIndustriesCarouselData.pageTitle,
    carouselTop,
    carouselBottom: androidCarouselBottom,
    carouselTopClasses: {
      animation: 'animate-android-projects '
        + 'screen-lg:animate-android-projects-tablet '
        + 'screen-md:animate-android-projects-mobile',
    },
    carouselBottomClasses: {
      animation: 'animate-android-projects-revert '
        + 'screen-lg:animate-android-projects-tablet-revert '
        + 'screen-md:animate-android-projects-mobile-revert',
    },
  },
};
