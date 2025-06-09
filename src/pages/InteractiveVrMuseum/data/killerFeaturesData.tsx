import Intro from '../../../assets/images/InteractiveVrMuseum/features/img_intro.webp';
import IntroTablet from '../../../assets/images/InteractiveVrMuseum/features/img_introTablet.webp';
import IntroMobile from '../../../assets/images/InteractiveVrMuseum/features/img_introMobile.webp';
import DiningRoom from '../../../assets/images/InteractiveVrMuseum/features/img_DiningRoom.webp';
import DiningRoomTablet from '../../../assets/images/InteractiveVrMuseum/features/img_DiningRoomTablet.webp';
import DiningRoomMobile from '../../../assets/images/InteractiveVrMuseum/features/img_DiningRoomMobile.webp';
import Porch from '../../../assets/images/InteractiveVrMuseum/features/img_Porch.webp';
import PorchTablet from '../../../assets/images/InteractiveVrMuseum/features/img_PorchTablet.webp';
import PorchMobile from '../../../assets/images/InteractiveVrMuseum/features/img_PorchMobile.webp';
import Salon from '../../../assets/images/InteractiveVrMuseum/features/img_Salon.webp';
import SalonTablet from '../../../assets/images/InteractiveVrMuseum/features/img_SalonTablet.webp';
import SalonMobile from '../../../assets/images/InteractiveVrMuseum/features/img_SalonMobile.webp';
import GreatHall from '../../../assets/images/InteractiveVrMuseum/features/img_GreatHall.webp';
import GreatHallTablet from '../../../assets/images/InteractiveVrMuseum/features/img_GreatHallTablet.webp';
import GreatHallMobile from '../../../assets/images/InteractiveVrMuseum/features/img_GreatHallMobile.webp';
import Vestibule from '../../../assets/images/InteractiveVrMuseum/features/img_Vestibule.webp';
import VestibuleTablet from '../../../assets/images/InteractiveVrMuseum/features/img_VestibuleTablet.webp';
import VestibuleMobile from '../../../assets/images/InteractiveVrMuseum/features/img_VestibuleMobile.webp';
import Epilouge from '../../../assets/images/InteractiveVrMuseum/features/img_Epilouge.webp';
import EpilougeTablet from '../../../assets/images/InteractiveVrMuseum/features/img_EpilougeTablet.webp';
import EpilougeMobile from '../../../assets/images/InteractiveVrMuseum/features/img_EpilougeMobile.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const KillerFeaturesData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Intro',
    text: `Anna Hedwig, the lady of Anija Manor, welcomes players. They learn that she has a secret
      that can be revealed if they complete five tasks before midnight.`,
    img: Intro,
    imgTablet: IntroTablet,
    imgMobile: IntroMobile,
  },
  {
    id: 2,
    title: 'Round 1: Dining Room',
    text: [
      `Players must identify guests seated around the table. Some are genuine historical figures,
      and others are time travelers or fictional characters.`,
      'Players can interact with each guest and ask them to stay or leave, depending on historical accuracy.',
    ],
    img: DiningRoom,
    imgTablet: DiningRoomTablet,
    imgMobile: DiningRoomMobile,
  },
  {
    id: 3,
    title: 'Round 2: Porch',
    text: [
      `To battle rat infestation in the manor, the player can use peppermint, ammonia, mousetraps,
      and a cat to catch and repel the rats.`,
      'Quick decision-making is required to clear the porch effectively and earn more points.',
    ],
    img: Porch,
    imgTablet: PorchTablet,
    imgMobile: PorchMobile,
  },
  {
    id: 4,
    title: 'Round 3: Salon',
    text: [
      'Players try their hand at managing Anija Manor`s economy in the 18th century.',
      `They must quickly choose between businesses like potato cultivation, horse breeding,
      or vodka production and play a fun game to accumulate points.`,
    ],
    img: Salon,
    imgTablet: SalonTablet,
    imgMobile: SalonMobile,
  },
  {
    id: 5,
    title: 'Round 4: Great Hall',
    text: 'Players must rank various events and rulers in Estonian history in chronological order to earn points.',
    img: GreatHall,
    imgTablet: GreatHallTablet,
    imgMobile: GreatHallMobile,
  },
  {
    id: 6,
    title: 'Round 5: Vestibule',
    text: `Players have to arrange paintings, candles, and furniture while being distracted
      by ghosts and the spooky atmosphere of the manor at night.`,
    img: Vestibule,
    imgTablet: VestibuleTablet,
    imgMobile: VestibuleMobile,
  },
  {
    id: 7,
    title: 'Epilogue',
    text: `The player finally learns whether Anna Hedwig has fallen in love, is terminally ill,
      committed a crime, or… what can it be?`,
    img: Epilouge,
    imgTablet: EpilougeTablet,
    imgMobile: EpilougeMobile,
  },
];

export default KillerFeaturesData;
