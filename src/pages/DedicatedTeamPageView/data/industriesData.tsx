import { ICarouselAutomaticData } from '../../../components/CarouselAutomatic/interfaces/ICarouselAutomatic';
import IndustriesWeServeCarouselItem from '../../../components/IndustriesWeServeBlock/components/IndustriesWeServeCarouselItem';
import TravelCarousel from '@/images/carousel/img_travel.webp';
import ElearningCarousel from '@/images/carousel/img_elearning.webp';
import RetailCarousel from '@/images/carousel/img_retail.webp';
import SportsCarousel from '@/images/carousel/img_sports.webp';
import BookCarousel from '@/images/carousel/img_book.webp';
import PageLinks from 'constants/PageLinks';

export const industriesTitle = {
  title: 'Industries we serve',
  text: `We’re a highly skilled dedicated development team that
    delivers reliable products for various industry domains:`,
};

const industriesData: ICarouselAutomaticData[] = [
  {
    id: 1,
    content: (
      <IndustriesWeServeCarouselItem
        title="Travel & Hospitality"
        img={TravelCarousel}
        alt="Travel & Hospitality"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 2,
    content: (
      <IndustriesWeServeCarouselItem
        title="Education & training"
        img={ElearningCarousel}
        alt="Education & training"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 3,
    content: (
      <IndustriesWeServeCarouselItem
        title="Sports & Fitness"
        img={SportsCarousel}
        alt="Sports & Fitness"
        url={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 4,
    content: (
      <IndustriesWeServeCarouselItem
        title="LMS software"
        img={RetailCarousel}
        alt="LMS software "
        url={PageLinks.LMS_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 5,
    content: (
      <IndustriesWeServeCarouselItem
        title={(
          <>
            Booking & online
            <br />
            {' '}
            scheduling
          </>
        )}
        img={BookCarousel}
        alt="Booking & online scheduling"
        url={PageLinks.ONLINE_SCHEDULING_AND_BOOKING_SYSTEM}
      />
    ),
  },
  {
    id: 6,
    content: (
      <IndustriesWeServeCarouselItem
        title="Travel & Hospitality"
        img={TravelCarousel}
        alt="Travel & Hospitality"
        url={PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 7,
    content: (
      <IndustriesWeServeCarouselItem
        title="Education & training"
        img={ElearningCarousel}
        alt="Education & training"
        url={PageLinks.ELEARNING_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 8,
    content: (
      <IndustriesWeServeCarouselItem
        title="Sports & Fitness"
        img={SportsCarousel}
        alt="Sports & Fitness"
        url={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 9,
    content: (
      <IndustriesWeServeCarouselItem
        title="LMS software"
        img={RetailCarousel}
        alt="LMS software "
        url={PageLinks.LMS_DEVELOPMENT_SERVICES}
      />
    ),
  },
  {
    id: 10,
    content: (
      <IndustriesWeServeCarouselItem
        title={(
          <>
            Booking & online
            <br />
            {' '}
            scheduling
          </>
        )}
        img={BookCarousel}
        alt="Booking & online scheduling"
        url={PageLinks.ONLINE_SCHEDULING_AND_BOOKING_SYSTEM}
      />
    ),
  },
];

export default industriesData;
