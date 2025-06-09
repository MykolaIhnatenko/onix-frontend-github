import IndustriesWeServeCarouselItem from '../../../components/IndustriesWeServeBlock/components/IndustriesWeServeCarouselItem';
import { ICarouselAutomaticData } from '../../../components/CarouselAutomatic/interfaces/ICarouselAutomatic';
import ManufacruringSalesforceCarousel from '@/images/salesforcePage/carousel/img_manufacruringSalesforceCarousel.webp';
import HospitalitySalesforceCarousel from '@/images/salesforcePage/carousel/img_hospitalitySalesforceCarousel.webp';
import InsuranceSalesforceCarousel from '@/images/salesforcePage/carousel/img_insuranceSalesforceCarousel.webp';
import FinancialSalesforceCarousel from '@/images/salesforcePage/carousel/img_financialSalesforceCarousel.webp';
import retailCarousel from '@/images/machineLearning/carousel/img_retailCarousel.webp';
import healthcareCarousel from '@/images/machineLearning/carousel/img_healthcareCarousel.webp';
import educationCarousel from '@/images/machineLearning/carousel/img_educationCarousel.webp';
import PageLinks from 'constants/PageLinks';

export const salesforceIndustriesWeServeBlockData = {
  upTitle: '[ Industries we serve ]',
  pageTitle: 'Here is a table with industries where Salesforce development services can be applied:',
};

export const carouselTop: ICarouselAutomaticData[] = [
  {
    id: 1,
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
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Retail & Ecommerce"
        img={retailCarousel}
        alt="Retail"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Finance"
        img={FinancialSalesforceCarousel}
        alt="Finance"
        url={PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Education"
        img={educationCarousel}
        alt="Education"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
      />
    ),
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
        title="Retail & Ecommerce"
        img={retailCarousel}
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
        title="Finance"
        img={FinancialSalesforceCarousel}
        alt="Finance"
        url={PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT}
      />
    ),
    copy: true,
  },
  {
    id: 8,
    content: (
      <IndustriesWeServeCarouselItem
        title="Education"
        img={educationCarousel}
        alt="Education"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
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
        title="Insurance"
        img={InsuranceSalesforceCarousel}
        alt="Insurance"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Manufacruring"
        img={ManufacruringSalesforceCarousel}
        alt="Manufacruring"
        url={PageLinks.INDUSTRIES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Hospitality"
        img={HospitalitySalesforceCarousel}
        alt="Hospitality"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="Insurance"
        img={InsuranceSalesforceCarousel}
        alt="Insurance"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title="Manufacruring"
        img={ManufacruringSalesforceCarousel}
        alt="Manufacruring"
        url={PageLinks.INDUSTRIES}
      />
    ),
    copy: true,
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Hospitality"
        img={HospitalitySalesforceCarousel}
        alt="Hospitality"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
    copy: true,
  },
];
