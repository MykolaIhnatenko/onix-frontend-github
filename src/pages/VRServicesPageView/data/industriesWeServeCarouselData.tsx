import IndustriesWeServeCarouselItem from '../../../components/IndustriesWeServeBlock/components/IndustriesWeServeCarouselItem';
import VRIndustriesAutomotive from '../../../assets/images/vrServicesPage/img_vr_automotive.webp';
import VRIndustriesConstruction from '../../../assets/images/vrServicesPage/img_vr_construction.webp';
import VRIndustriesEducation from '../../../assets/images/vrServicesPage/img_vr_education.webp';
import VRIndustriesGame from '../../../assets/images/vrServicesPage/img_vr_game.webp';
import VRIndustriesHealthcare from '../../../assets/images/vrServicesPage/img_vr_healthcare.webp';
import VRIndustriesManufacture from '../../../assets/images/vrServicesPage/img_vr_manufacture.webp';
import VRIndustriesMarine from '../../../assets/images/vrServicesPage/img_vr_marine.webp';
import VRIndustriesMarketing from '../../../assets/images/vrServicesPage/img_vr_marketing&advertising.webp';
import VRIndustriesRealEstate from '../../../assets/images/vrServicesPage/img_vr_real_estate.webp';
import VRIndustriesRetail from '../../../assets/images/vrServicesPage/img_vr_retail.webp';
import VRIndustriesTourism from '../../../assets/images/vrServicesPage/img_vr_tourism.webp';
import { ICarouselAutomaticData } from '../../../components/CarouselAutomatic/interfaces/ICarouselAutomatic';
import PageLinks from 'constants/PageLinks';

export const industriesWeServeBlockData = {
  pageTitle: 'Enhance Your Business With Our\u00A0AR\u00A0&\u00A0VR Solutions',
  text: `We're AR & VR development experts who deliver reliable
    products for various industry domains:`,
};

export const carouselTop:ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Healthcare"
        img={VRIndustriesHealthcare}
        alt="Healthcare"
        url={PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Tourism"
        img={VRIndustriesTourism}
        alt="Tourism"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Construction"
        img={VRIndustriesConstruction}
        alt="Construction"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Retail"
        img={VRIndustriesRetail}
        alt="Retail"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="Education"
        img={VRIndustriesEducation}
        alt="Education"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Healthcare"
        img={VRIndustriesHealthcare}
        alt="Healthcare"
        url={PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 7,
    content: (
      <IndustriesWeServeCarouselItem
        title="Tourism"
        img={VRIndustriesTourism}
        alt="Tourism"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 8,
    content: (
      <IndustriesWeServeCarouselItem
        title="Construction"
        img={VRIndustriesConstruction}
        alt="Construction"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 9,
    content: (
      <IndustriesWeServeCarouselItem
        title="Retail"
        img={VRIndustriesRetail}
        alt="Retail"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 10,
    content: (
      <IndustriesWeServeCarouselItem
        title="Education"
        img={VRIndustriesEducation}
        alt="Education"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
      />
    ),
  },
];

export const carouselBottom:ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Real estate"
        img={VRIndustriesRealEstate}
        alt="Real estate"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Marketing & advertising"
        img={VRIndustriesMarketing}
        alt="Marketing & advertising"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Marine"
        img={VRIndustriesMarine}
        alt="Marine"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Game"
        img={VRIndustriesGame}
        alt="Game"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="Automotive"
        img={VRIndustriesAutomotive}
        alt="Automotive"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Manufacture"
        img={VRIndustriesManufacture}
        alt="Manufacture"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 7,
    content: (
      <IndustriesWeServeCarouselItem
        title="Real estate"
        img={VRIndustriesRealEstate}
        alt="Real estate"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 8,
    content: (
      <IndustriesWeServeCarouselItem
        title="Marketing & advertising"
        img={VRIndustriesMarketing}
        alt="Marketing & advertising"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 9,
    content: (
      <IndustriesWeServeCarouselItem
        title="Marine"
        img={VRIndustriesMarine}
        alt="Marine"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 10,
    content: (
      <IndustriesWeServeCarouselItem
        title="Game"
        img={VRIndustriesGame}
        alt="Game"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 11,
    content: (
      <IndustriesWeServeCarouselItem
        title="Automotive"
        img={VRIndustriesAutomotive}
        alt="Automotive"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 12,
    content: (
      <IndustriesWeServeCarouselItem
        title="Manufacture"
        img={VRIndustriesManufacture}
        alt="Manufacture"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
];
