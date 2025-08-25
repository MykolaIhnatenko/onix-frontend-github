import IndustriesWeServeCarouselItem from '../../../components/IndustriesWeServeBlock/components/IndustriesWeServeCarouselItem';
import { ICarouselAutomaticData } from '../../../components/CarouselAutomatic/interfaces/ICarouselAutomatic';
import PageLinks from 'constants/PageLinks';

import Elearning from '@/images/carousel/img_elearning_1.webp';
import Networking from '@/images/carousel/img_social_networking.webp';
import Fintech from '@/images/carousel/img_fintech_1.webp';
import retailCarousel from '@/images/machineLearning/carousel/img_retailCarousel.webp';
import healthcareCarousel from '@/images/machineLearning/carousel/img_healthcareCarousel.webp';
import TravelCarousel from '@/images/carousel/img_travel.webp';
import OpenCarousel from '@/images/carousel/img_open.webp';
import FintechCarousel from '@/images/carousel/img_fintech.webp';
import ElearningCarousel from '@/images/carousel/img_elearning.webp';

export const webDesignIndustriesWeServeBlockData = {
  pageTitle: 'Industries we serve',
};

export const carouselTop: ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Ecommerce"
        img={retailCarousel}
        alt="Ecommerce"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Education"
        img={ElearningCarousel}
        alt="Education"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Real estate"
        img={Elearning}
        alt="Real estate"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Tourism"
        img={TravelCarousel}
        alt="Tourism"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="Ecommerce"
        img={retailCarousel}
        alt="Ecommerce"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Education"
        img={ElearningCarousel}
        alt="Education"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
      />
    ),
    copy: true,
  },
  {
    id: 7,
    content: (
      <IndustriesWeServeCarouselItem
        title="Real estate"
        img={Elearning}
        alt="Real estate"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 8,
    content: (
      <IndustriesWeServeCarouselItem
        title="Tourism"
        img={TravelCarousel}
        alt="Tourism"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
    copy: true,
  },
];

export const carouselBottom:ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Retail"
        img={Networking}
        alt="Retail"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Healthcare"
        img={healthcareCarousel}
        alt="Healthcare"
        url={PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 3,
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
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Fitness"
        img={Fintech}
        alt="Fitness"
        url={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="And many more..."
        img={OpenCarousel}
        alt="And many more..."
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Retail"
        img={Networking}
        alt="Retail"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 7,
    content: (
      <IndustriesWeServeCarouselItem
        title="Healthcare"
        img={healthcareCarousel}
        alt="Healthcare"
        url={PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES}
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
  {
    id: 9,
    content: (
      <IndustriesWeServeCarouselItem
        title="Fitness"
        img={Fintech}
        alt="Fitness"
        url={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
      />
    ),
    copy: true,
  },
  {
    id: 10,
    content: (
      <IndustriesWeServeCarouselItem
        title="Amd many more..."
        img={OpenCarousel}
        alt="And many more..."
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
];
