import { ICarouselAutomaticData } from '../../../components/CarouselAutomatic/interfaces/ICarouselAutomatic';
import IndustriesWeServeCarouselItem
  from '../../../components/IndustriesWeServeBlock/components/IndustriesWeServeCarouselItem';
import PageLinks from 'constants/PageLinks';

import CrossPlatformFintechImage from '@/images/crossplatformDesign/img_fintech.webp';
import CrossPlatformElearningImage from '@/images/crossplatformDesign/img_elearning.webp';
import CrossPlatformSportsImage from '@/images/crossplatformDesign/img_Sports_&_Fitness.webp';
import CrossPlatformTravelsImage from '@/images/crossplatformDesign/img_Travel_&_Tourism.webp';
import CrossPlatformHealthcareImage from '@/images/crossplatformDesign/img_Healthcare.webp';
import CrossPlatformReatilImage from '@/images/crossplatformDesign/img_Retail_&_Ecommerce.webp';
import CrossPlatformGamingImage from '@/images/crossplatformDesign/img_gaming.webp';
import CrossPlatformSocialNetworkingImage from '@/images/crossplatformDesign/img_social_networking.webp';
import CrossPlatformMoreImage from '@/images/crossplatformDesign/img_and_many_more...webp';

export const weServeBlockData = {
  upTitle: '[ Industries we serve ]',
  pageTitle: `We’re a highly competent cross platform mobile app development company
      that delivers next-gen solutions for various industry domains:`,
};

export const carouselTop: ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Fintech"
        img={CrossPlatformFintechImage}
        alt="Fintech"
        url={PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Elearning"
        img={CrossPlatformElearningImage}
        alt="Elearning"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Sports and fitness"
        img={CrossPlatformSportsImage}
        alt="Sports and fitness"
        url={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Travel & tourism"
        img={CrossPlatformTravelsImage}
        alt="Financial services"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="Healthcare"
        img={CrossPlatformHealthcareImage}
        alt="Healthcare"
        url={PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Fintech"
        img={CrossPlatformFintechImage}
        alt="Fintech"
        url={PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT}
      />
    ),
    copy: true,
  },
  {
    id: 7,
    content: (
      <IndustriesWeServeCarouselItem
        title="Elearning"
        img={CrossPlatformElearningImage}
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
        title="Sports and fitness"
        img={CrossPlatformSportsImage}
        alt="Sports and fitness"
        url={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
      />
    ),
    copy: true,
  },
  {
    id: 9,
    content: (
      <IndustriesWeServeCarouselItem
        title="Travel & tourism"
        img={CrossPlatformTravelsImage}
        alt="Financial services"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
    copy: true,
  },
  {
    id: 10,
    content: (
      <IndustriesWeServeCarouselItem
        title="Healthcare"
        img={CrossPlatformHealthcareImage}
        alt="Healthcare"
        url={PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES}
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
        title="Retail & Ecommerce"
        img={CrossPlatformReatilImage}
        alt="Retail & Ecommerce"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Gaming"
        img={CrossPlatformGamingImage}
        alt="Gaming"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Social networking"
        img={CrossPlatformSocialNetworkingImage}
        alt="Social networking"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="And many more"
        img={CrossPlatformMoreImage}
        alt="And many more"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="Retail & Ecommerce"
        img={CrossPlatformReatilImage}
        alt="Retail & Ecommerce"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Gaming"
        img={CrossPlatformGamingImage}
        alt="Gaming"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 7,
    content: (
      <IndustriesWeServeCarouselItem
        title="Social networking"
        img={CrossPlatformSocialNetworkingImage}
        alt="Social networking"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 8,
    content: (
      <IndustriesWeServeCarouselItem
        title="And many more"
        img={CrossPlatformMoreImage}
        alt="And many more"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
];
