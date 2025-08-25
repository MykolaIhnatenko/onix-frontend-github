import PageLinks from 'constants/PageLinks';
import { ICarouselAutomaticData } from '../../../components/CarouselAutomatic/interfaces/ICarouselAutomatic';
import IndustriesWeServeCarouselItem from '../../../components/IndustriesWeServeBlock/components/IndustriesWeServeCarouselItem';

import BookCarousel from '@/images/carousel/img_book.webp';
import ElearningCarousel from '@/images/carousel/img_elearning.webp';
import FintechCarousel from '@/images/carousel/img_fintech.webp';
import HealthcareCarousel from '@/images/carousel/img_healthcare.webp';
import OpenCarousel from '@/images/carousel/img_open.webp';
import RetailCarousel from '@/images/carousel/img_retail.webp';
import SportsCarousel from '@/images/carousel/img_sports.webp';
import TravelCarousel from '@/images/carousel/img_travel.webp';

const stylesTitle = ' !text-[20px]/[1.4] min-lg:!text-[38px]/[1.2] min-md:!text-[28px]/[1.3]';
const stylesContainer = '!min-w-[720px] screen-lg:!min-w-[320px] screen-md:!min-w-[240px]';
const stylesImg = 'w-[380px] h-[240px] screen-lg:w-[320px] screen-lg:h-[202px] screen-md:w-[240px] screen-md:h-[150px]';

export const carouselTop: ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Healthcare"
        img={HealthcareCarousel}
        alt="Healthcare"
        url={PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES}
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
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
        isJakarta
        classes={{
          title: stylesTitle,
          container: stylesContainer,
          img: stylesImg,
        }}
      />
    ),
    copy: true,
  },
];
