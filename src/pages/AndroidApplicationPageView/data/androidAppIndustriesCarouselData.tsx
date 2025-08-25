import IndustriesWeServeCarouselItem from '../../../components/IndustriesWeServeBlock/components/IndustriesWeServeCarouselItem';
import { ICarouselAutomaticData } from '../../../components/CarouselAutomatic/interfaces/ICarouselAutomatic';
import PageLinks from 'constants/PageLinks';

import SocialCarousel from '@/images/androidApplication/carousel/img_social.webp';
import GamingCarousel from '@/images/androidApplication/carousel/img_gaming.webp';
import TravelCarousel from '@/images/carousel/img_travel.webp';
import OpenCarousel from '@/images/carousel/img_open.webp';
import FintechCarousel from '@/images/carousel/img_fintech.webp';

export const androidAppIndustriesCarouselData = {
  upTitle: '[ Industries we serve ]',
  pageTitle: `We're a competent Android application development company that delivers
    next-gen mobile solutions for various industry domains:`,
};

export const androidCarouselBottom: ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Fintech"
        img={FintechCarousel}
        alt="Fintech"
        url={PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="And many more..."
        img={OpenCarousel}
        alt="Always Open to New..."
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Travel & Tourism"
        img={TravelCarousel}
        alt="Travel & Tourism"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Gaming"
        img={GamingCarousel}
        alt="Gaming"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="Social networking"
        img={SocialCarousel}
        alt="Booking & Scheduling"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Fintech"
        img={FintechCarousel}
        alt="Fintech"
        url={PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT}
      />
    ),
  },
  {
    id: 7,
    content: (
      <IndustriesWeServeCarouselItem
        title="And many more..."
        img={OpenCarousel}
        alt="Always Open to New..."
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 8,
    content: (
      <IndustriesWeServeCarouselItem
        title="Travel & Tourism"
        img={TravelCarousel}
        alt="Travel & Tourism"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 9,
    content: (
      <IndustriesWeServeCarouselItem
        title="Gaming"
        img={GamingCarousel}
        alt="Gaming"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 10,
    content: (
      <IndustriesWeServeCarouselItem
        title="Social networking"
        img={SocialCarousel}
        alt="Booking & Scheduling"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
];
