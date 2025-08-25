import { IAdvantagesData } from '../../../components/AdvantagesBlock/interfaces/IAdvantagesBlock';
import { ButtonType } from '../../../constants/enums';

import TravelAdvantagesBlockImg1 from '@/images/travelHospitalityPage/AdvantagesBlock/img_travelAdvantagesBlockImg1@2x.webp';
import TravelAdvantagesBlockImg2 from '@/images/travelHospitalityPage/AdvantagesBlock/img_travelAdvantagesBlockImg2@2x.webp';
import TravelAdvantagesBlockImg3 from '@/images/travelHospitalityPage/AdvantagesBlock/img_travelAdvantagesBlockImg3@2x.webp';

const travelAdvantagesBlockData: IAdvantagesData[] = [
  {
    id: 1,
    image: TravelAdvantagesBlockImg1,
  },
  {
    id: 2,
    title: 'Build custom travel software',
    text: [
      'Need custom travel technology solutions tailored to your business needs?',
      `We provide travel software development services that guarantee a full product
      development life cycle: gathering business scope and requirements, setting up a transparent
      development process, preparing UI/UX design, testing your product, and providing project maintenance.`,
    ],
    idBtn: ButtonType.LAND3,
  },
  {
    id: 3,
    image: TravelAdvantagesBlockImg2,
  },
  {
    id: 4,
    title: 'MVP development',
    text: [
      `You have a startup idea, and you're in the process of turning it into a viable product?
      Building an MVP is your optimal choice.`,
      `We assist you in developing an MVP for your travel solution focusing on the most vital
      features to verify your app idea, accelerate the time to market, and get user feedback early on.`,
      'Over time, you can gradually add additional features, not wasting money on unnecessary ones.',
    ],
    idBtn: ButtonType.LAND4,
  },
  {
    id: 5,
    image: TravelAdvantagesBlockImg3,
  },
  {
    id: 6,
    title: 'Upgrade your website or mobile app',
    text: [
      `You feel it's the right moment to add more useful features to your travel & hospitality
      software solutions and grow?`,
      `Our specialists provide a free audit of your current website or app, prepare a list of
      improvements, manage your technology needs, conduct a UI/UX audit, visualize new features,
      implement new functionality, and integrate required APIs. We're here to help!`,
    ],
    idBtn: ButtonType.LAND5,
  },
];

export default travelAdvantagesBlockData;
