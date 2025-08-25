import { ICarouselAutomaticData } from '../../../components/CarouselAutomatic/interfaces/ICarouselAutomatic';
import IndustriesWeServeCarouselItem from '../../../components/IndustriesWeServeBlock/components/IndustriesWeServeCarouselItem';
import PageLinks from 'constants/PageLinks';

import BookCarousel from '@/images/carousel/img_book.webp';
import ElearningCarousel from '@/images/carousel/img_elearning.webp';
import FintechCarousel from '@/images/carousel/img_fintech.webp';
import HealthcareCarousel from '@/images/carousel/img_healthcare.webp';
import OpenCarousel from '@/images/carousel/img_open.webp';
import RetailCarousel from '@/images/carousel/img_retail.webp';
import SportsCarousel from '@/images/carousel/img_sports.webp';
import TravelCarousel from '@/images/carousel/img_travel.webp';

export const carouselTop: ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Healthcare"
        img={HealthcareCarousel}
        alt="Healthcare"
        url={PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Sports&nbsp;& Fitness"
        img={SportsCarousel}
        alt="Sports & Fitness"
        url={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Elearning"
        img={ElearningCarousel}
        alt="Elearning"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Retail & Ecommerce"
        img={RetailCarousel}
        alt="Retail & Ecommerce"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="Healthcare"
        img={HealthcareCarousel}
        alt="Healthcare"
        url={PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
    copy: true,
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Sports&nbsp;& Fitness"
        img={SportsCarousel}
        alt="Sports & Fitness"
        url={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
      />
    ),
    copy: true,
  },
  {
    id: 7,
    content: (
      <IndustriesWeServeCarouselItem
        title="Elearning"
        img={ElearningCarousel}
        alt="Elearning"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
      />
    ),
    copy: true,
  },
  {
    id: 8,
    content: (
      <IndustriesWeServeCarouselItem
        title="Retail & Ecommerce"
        img={RetailCarousel}
        alt="Retail & Ecommerce"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
];

export const carouselBottom: ICarouselAutomaticData[] = [
  {
    id: 1,
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
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Booking & Scheduling"
        img={BookCarousel}
        alt="Booking & Scheduling"
        url={PageLinks.ONLINE_SCHEDULING_AND_BOOKING_SYSTEM}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Always Open to New..."
        img={OpenCarousel}
        alt="Always Open to New..."
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 4,
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
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="Travel & Tourism"
        img={TravelCarousel}
        alt="Travel & Tourism"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
    copy: true,
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Booking & Scheduling"
        img={BookCarousel}
        alt="Booking & Scheduling"
        url={PageLinks.ONLINE_SCHEDULING_AND_BOOKING_SYSTEM}
      />
    ),
    copy: true,
  },
  {
    id: 7,
    content: (
      <IndustriesWeServeCarouselItem
        title="Always Open to New..."
        img={OpenCarousel}
        alt="Always Open to New..."
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 8,
    content: (
      <IndustriesWeServeCarouselItem
        title="Fintech"
        img={FintechCarousel}
        alt="Fintech"
        url={PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT}
      />
    ),
    copy: true,
  },
];

export const content = {
  title: '[ Industries we serve ]',
  description: 'We\'re a competent software\n'
      + 'development team that delivers reliable\n'
      + 'products for various industry domains:',
};
