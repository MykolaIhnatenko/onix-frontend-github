import Group1 from '@/images/carousel/img_group_1.webp';
import Group2 from '@/images/carousel/img_group_2.webp';
import Group3 from '@/images/carousel/img_group_3.webp';
import Group4 from '@/images/carousel/img_group_4.webp';
import Elearning from '@/images/carousel/img_elearning_1.webp';
import Networking from '@/images/carousel/img_social_networking.webp';
import Fintech from '@/images/carousel/img_fintech_1.webp';
import TravelCarousel from '@/images/carousel/img_travel.webp';
import FintechCarousel from '@/images/carousel/img_fintech.webp';
import HealthcareCarousel from '@/images/carousel/img_healthcare.webp';
import ElearningCarousel from '@/images/carousel/img_elearning.webp';
import RetailCarousel from '@/images/carousel/img_retail.webp';
import { ICarouselAutomaticData } from '../../../components/CarouselAutomatic/interfaces/ICarouselAutomatic';
import IndustriesWeServeCarouselItem from '../../../components/IndustriesWeServeBlock/components/IndustriesWeServeCarouselItem';
import OurInsightsBlockItem from '../components/OurInsightsBlockItem';
import PageLinks from 'constants/PageLinks';

export const carouselTop:ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Ecommerce"
        img={RetailCarousel}
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
        title="Ecommerce"
        img={RetailCarousel}
        alt="Ecommerce"
        url={PageLinks.INDUSTRIES}
      />
    ),
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
  },
];

export const carouselBottom:ICarouselAutomaticData[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
        title="Tourism"
        img={TravelCarousel}
        alt="Tourism"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
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
  },
  {
    id: 7,
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
    id: 8,
    content: (
      <IndustriesWeServeCarouselItem
        title="Fitness"
        img={Fintech}
        alt="Fitness"
        url={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
      />
    ),
  },
];

export const OurInsightsBlockData = [
  {
    id: 1,
    content: (
      <OurInsightsBlockItem
        title="How to Develop a Mobile Booking App in 2023"
        img={Group1}
        alt="Develop"
        url="https://onix-systems.com/blog/what-does-a-software-test-engineer-do-during-software-development"
      />
    ),
  },
  {
    id: 2,
    content: (
      <OurInsightsBlockItem
        title="An Overview of Travel Booking APIs for Tourism Providers"
        img={Group2}
        alt="Overview"
        url="https://onix-systems.com/blog/how-web-application-performance-testing-benefits-your-business"
      />
    ),
  },
  {
    id: 3,
    content: (
      <OurInsightsBlockItem
        title="How to Create a Booking Website for a Travel Business – Onix’s Guide"
        img={Group3}
        alt="Website"
        url=""
      />
    ),
  },
  {
    id: 4,
    content: (
      <OurInsightsBlockItem
        title="How to Develop a Mobile Booking App in 2023"
        img={Group4}
        alt="Mobile"
        url=""
      />
    ),
  },
  {
    id: 5,
    content: (
      <OurInsightsBlockItem
        title="How to Develop a Mobile Booking App in 2023"
        img={Group1}
        alt="Develop"
        url="https://onix-systems.com/blog/what-does-a-software-test-engineer-do-during-software-development"
      />
    ),
  },
  {
    id: 6,
    content: (
      <OurInsightsBlockItem
        title="An Overview of Travel Booking APIs for Tourism Providers"
        img={Group2}
        alt="Overview"
        url="https://onix-systems.com/blog/how-web-application-performance-testing-benefits-your-business"
      />
    ),
  },
  {
    id: 7,
    content: (
      <OurInsightsBlockItem
        title="How to Create a Booking Website for a Travel Business – Onix’s Guide"
        img={Group3}
        alt="Website"
        url=""
      />
    ),
  },
  {
    id: 8,
    content: (
      <OurInsightsBlockItem
        title="How to Develop a Mobile Booking App in 2023"
        img={Group4}
        alt="Mobile"
        url=""
      />
    ),
  },
  {
    id: 9,
    content: (
      <OurInsightsBlockItem
        title="How to Develop a Mobile Booking App in 2023"
        img={Group1}
        alt="Develop"
        url="https://onix-systems.com/blog/what-does-a-software-test-engineer-do-during-software-development"
      />
    ),
  },
  {
    id: 10,
    content: (
      <OurInsightsBlockItem
        title="An Overview of Travel Booking APIs for Tourism Providers"
        img={Group2}
        alt="Overview"
        url="https://onix-systems.com/blog/how-web-application-performance-testing-benefits-your-business"
      />
    ),
  },
  {
    id: 11,
    content: (
      <OurInsightsBlockItem
        title="How to Create a Booking Website for a Travel Business – Onix’s Guide"
        img={Group3}
        alt="Website"
        url=""
      />
    ),
  },
  {
    id: 12,
    content: (
      <OurInsightsBlockItem
        title="How to Develop a Mobile Booking App in 2023"
        img={Group4}
        alt="Mobile"
        url=""
      />
    ),
  },
];

export const bookingWeServeBlockData = {
  pageTitle: 'Industries we serve',
};
