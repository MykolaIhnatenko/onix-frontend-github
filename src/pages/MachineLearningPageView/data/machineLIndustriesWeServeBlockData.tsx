import { ICarouselAutomaticData } from '../../../components/CarouselAutomatic/interfaces/ICarouselAutomatic';
import healthcareCarousel from '@/images/machineLearning/carousel/img_healthcareCarousel.webp';
import financialCarousel from '@/images/machineLearning/carousel/img_financialCarousel.webp';
import construction from '@/images/machineLearning/carousel/img_Construction.webp';
import manufacturing from '@/images/machineLearning/carousel/img_Manufacturing.webp';
import marketing from '@/images/machineLearning/carousel/img_Marketing.webp';
import realEstate from '@/images/machineLearning/carousel/img_RealEstate.webp';
import IndustriesWeServeCarouselItem from '../../../components/IndustriesWeServeBlock/components/IndustriesWeServeCarouselItem';
import PageLinks from 'constants/PageLinks';

export const machineLIndustriesWeServeBlockData = {
  pageTitle: 'Our other areas of expertise',
};

export const carouselTop:ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Banking & Finance"
        img={financialCarousel}
        alt="Banking & Finance"
        url={PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT}
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
        title="Real estate"
        img={realEstate}
        alt="Real estate"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Banking & Finance"
        img={financialCarousel}
        alt="Banking & Finance"
        url={PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT}
      />
    ),
    copy: true,
  },
  {
    id: 5,
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
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Real estate"
        img={realEstate}
        alt="Real estate"
        url={PageLinks.INDUSTRIES}
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
        title="Construction"
        img={construction}
        alt="Construction"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Manufacturing"
        img={manufacturing}
        alt="Manufacturing"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Marketing"
        img={marketing}
        alt="Marketing"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Construction"
        img={construction}
        alt="Construction"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="Manufacturing"
        img={manufacturing}
        alt="Manufacturing"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Marketing"
        img={marketing}
        alt="Marketing"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
];
