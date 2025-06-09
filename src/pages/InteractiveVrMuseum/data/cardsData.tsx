import Panorams from '../../../assets/images/InteractiveVrMuseum/img_Panorams.webp';
import GameManagement from '../../../assets/images/InteractiveVrMuseum/img_GameManagement.webp';
import Localization from '../../../assets/images/InteractiveVrMuseum/img_Localization.webp';
import { IOurSolutionVirtualItemData } from 'components/OurSolutionVirtual/interfaces/IOurSolutionVirtualItem';
import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';

const cardsData: IOurSolutionVirtualItemData[] = [
  {
    id: 1,
    title: 'Realistic panoramas',
    text: (
      <>
        <ItemText
          content={`
            The team made 360° photo panoramas to recreate
            the\u00A0manor’s interiors and\u00A0the\u00A0atmosphere
            of a\u00A0haunted mansion on a\u00A0winter evening.
          `}
        />
        <ItemList
          listTitle="Some of the technical challenges included:"
          list={[
            'Correct positioning of the player inside the 360° image of each location',
            `Accurate rendering of all visual and\u00A0interactive elements
            with respect to the player and against the 360° images`,
          ]}
          marginBottomAbsent
        />
      </>
    ),
    img: Panorams,
    imgTablet: Panorams,
    imgMobile: Panorams,
  },
  {
    id: 2,
    title: 'Game management',
    text: (
      <ItemText
        content={[
          `As the game contains rounds with a\u00A0similar structure,
          we decided to develop it in a way that facilitates changing/adjusting the game levels’
          content and interfaces in one place. This also makes removing levels or adding new mini-games
          easier and faster.`,
          `We’ve implemented/added our own ‘Testing Tools,’ as well as Unity’s Profiler
          and\u00A0Android Logcat testing functions that are\u00A0extremely helpful with projects
          of similar “level/stage” structure. They make it easier to test the game levels without
          spending much time going through all the levels each time.`,
        ]}
        marginBottomAbsent
      />
    ),
    img: GameManagement,
    imgTablet: GameManagement,
    imgMobile: GameManagement,
  },
  {
    id: 3,
    title: 'Localization',
    text: (
      <ItemList
        listTitle="The team successfully performed the&nbsp;application localization into several languages:"
        list={[
          'Estonian',
          'English',
          'Finnish',
          'Russian',
          'German',
        ]}
        marginBottomAbsent
      />
    ),
    img: Localization,
    imgTablet: Localization,
    imgMobile: Localization,
  },
];

export default cardsData;
