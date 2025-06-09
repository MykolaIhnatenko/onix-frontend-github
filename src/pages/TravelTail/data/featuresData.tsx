import TravelTailFeaturesImage1 from '@/images/travelTail/featuresSection/img_features1@2x.webp';
import TravelTailFeaturesImage2 from '@/images/travelTail/featuresSection/img_features2@2x.webp';
import TravelTailFeaturesImage3 from '@/images/travelTail/featuresSection/img_features3@2x.webp';
import TravelTailFeaturesImageMobile1 from '@/images/travelTail/featuresSection/img_features_mobile1@2x.webp';
import TravelTailFeaturesImageMobile2 from '@/images/travelTail/featuresSection/img_features_mobile2@2x.webp';
import TravelTailFeaturesImageMobile3 from '@/images/travelTail/featuresSection/img_features_mobile3@2x.webp';
import TravelTailFeaturesImageTablet1 from '@/images/travelTail/featuresSection/img_features_tablet1@2x.webp';
import TravelTailFeaturesImageTablet2 from '@/images/travelTail/featuresSection/img_features_tablet2@2x.webp';
import TravelTailFeaturesImageTablet3 from '@/images/travelTail/featuresSection/img_features_tablet3@2x.webp';
import { ITabData } from 'components/TabsBlock/interfaces/ITab';

const solutionsContent: ITabData[] = [
  {
    id: 1,
    title: 'Pet-friendly accommodations',
    subTitle: `The platform offers an exhaustive catalog of pet-friendly accommodations,
      extending beyond hotels to encompass resorts and rentals globally.`,
    text: [
      `This comprehensive list identifies pet-friendly establishments and provides detailed insights into
      their offerings. Users gain access to vital information, such as specific pet policies, available
      facilities, and services tailored for furry companions. The database continually updates to ensure
      accuracy and relevance.`,
      `Whether it's hotels with designated pet areas or vacation rentals equipped with pet-friendly
      amenities, TravelTail empowers users to make informed decisions, promoting a seamless and delightful
      stay for pets and their owners worldwide.`,
    ],
    imgMobile: TravelTailFeaturesImageMobile1,
    imgTablet: TravelTailFeaturesImageTablet1,
    img: TravelTailFeaturesImage1,
  },
  {
    id: 2,
    title: 'Mapping',
    subTitle: `The map feature is a dynamic navigational tool that enhances the user experience by providing an
      interactive and visually intuitive interface.`,
    text: [
      'Users can directly explore pet-friendly destinations, accommodations, and points of interest on the map.',
      `From considering pet-friendly parks and rest areas to providing insights into local veterinary services,
      the mapping feature allows users to visualize and plan their journeys efficiently.`,
    ],
    imgMobile: TravelTailFeaturesImageMobile2,
    imgTablet: TravelTailFeaturesImageTablet2,
    img: TravelTailFeaturesImage2,
  },
  {
    id: 3,
    title: 'Pet-welcoming food and drinks spaces',
    subTitle: `The platform provides a carefully curated list of pet-friendly restaurants that offer an inviting
      atmosphere where pets are not just tolerated but genuinely welcomed.`,
    text: `From cozy cafes to upscale restaurants, this feature elevates the dining adventure, making every
      meal enjoyable and pet-friendly.`,
    imgMobile: TravelTailFeaturesImageMobile3,
    imgTablet: TravelTailFeaturesImageTablet3,
    img: TravelTailFeaturesImage3,
  },
];

export default solutionsContent;
