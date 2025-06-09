import Personalized from '../../../assets/images/Solomiya/features/img_Personalized.webp';
import PersonalizedTablet from '../../../assets/images/Solomiya/features/img_PersonalizedTablet.webp';
import PersonalizedMobile from '../../../assets/images/Solomiya/features/img_PersonalizedMobile.webp';
import WeeklyPlans from '../../../assets/images/Solomiya/features/img_WeeklyPlans.webp';
import WeeklyPlansTablet from '../../../assets/images/Solomiya/features/img_WeeklyPlansTablet.webp';
import WeeklyPlansMobile from '../../../assets/images/Solomiya/features/img_WeeklyPlansMobile.webp';
import Favorites from '../../../assets/images/Solomiya/features/img_Favorites.webp';
import FavoritesTablet from '../../../assets/images/Solomiya/features/img_FavoritesTablet.webp';
import FavoritesMobile from '../../../assets/images/Solomiya/features/img_FavoritesMobile.webp';
import Regular from '../../../assets/images/Solomiya/features/img_Regular.webp';
import RegularTablet from '../../../assets/images/Solomiya/features/img_RegularTablet.webp';
import RegularMobile from '../../../assets/images/Solomiya/features/img_RegularMobile.webp';
import Progress from '../../../assets/images/Solomiya/features/img_Progress.webp';
import ProgressTablet from '../../../assets/images/Solomiya/features/img_ProgressTablet.webp';
import ProgressMobile from '../../../assets/images/Solomiya/features/img_ProgressMobile.webp';
import Reward from '../../../assets/images/Solomiya/features/img_Reward.webp';
import RewardTablet from '../../../assets/images/Solomiya/features/img_RewardTablet.webp';
import RewardMobile from '../../../assets/images/Solomiya/features/img_RewardMobile.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';
import ItemText from 'components/ItemText/ItemText';
import VRARContent from 'components/VRARContent/VRARContent';

const content: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Personalized recommendations',
    text: [
      `The user flow begins with a survey that helps assess the user’s mental state and\u00A0detect any
      problems the app may help to alleviate. In further versions, the app will recommend meditation
      courses or techniques based on each user’s response.`,
    ],
    img: Personalized,
    imgTablet: PersonalizedTablet,
    imgMobile: PersonalizedMobile,
  },
  {
    id: 2,
    title: 'Weekly plans',
    text: [
      `Each weekly plan includes various educational videos, quizzes, intervention activities, etc.,
      to help users improve their condition.`,
      `Users can unlock the next week’s plan only after completing the previous week’s tasks and\u00A0assessment.
      This ensures a more structured approach to mental health – just as in real life.`,
      'Users will retain access to all exercises and videos after completing the program.',
    ],
    img: WeeklyPlans,
    imgTablet: WeeklyPlansTablet,
    imgMobile: WeeklyPlansMobile,
  },
  {
    id: 3,
    title: 'Favorites',
    text: [
      `Users can save educational content and\u00A0interventions that proved to be most helpful, which they
      enjoyed most, or which they would like to practice after completing a week’s course.
      The goal is to create a “treasure box” with activities that users can go back to wherever they want.`,
      `Eventually, Solomiya may offer a wrap-up of 6 weekly plans (similar to “Spotify Wrapped”) summarizing
      their favorite and\u00A0most-watched videos, interventions, and\u00A0activities they have done.`,
    ],
    img: Favorites,
    imgTablet: FavoritesTablet,
    imgMobile: FavoritesMobile,
  },
  {
    id: 4,
    title: 'Regular reminders',
    text: (
      <>
        <ItemText
          content="Users will receive several types of push notifications:"
          withAnimate
        />
        <VRARContent>
          <ol className="list-decimal ml-[28px] mb-[30px] screen-md:mb-[20px]">
            <li className="font-ibmPlexMono font-normal text-[18px]/[26px] screen-md:text-[16px]/[24px]">
              a weekly notification reminding them to use the app, e.g., “You have completed Week 1” or
              “Press here to view content of Week 2.”
            </li>
            <li className="font-ibmPlexMono font-normal text-[18px]/[26px] screen-md:text-[16px]/[24px]">
              daily reminders to do their homework, such as look at their cards and do one of the positive
              activities/resource activation.
            </li>
          </ol>
        </VRARContent>
        <ItemText
          content="Users will select the time when they want to receive these reminders during the app set-up."
          withAnimate
          marginBottomAbsent
        />
      </>
    ),
    img: Regular,
    imgTablet: RegularTablet,
    imgMobile: RegularMobile,
  },
  {
    id: 5,
    title: 'Progress tracking',
    text: [
      `Users will complete weekly surveys (a PHQ depression and\u00A0insomnia checklist) so that Solomiya
      can assess their psychological condition and\u00A0sleep quality while also tracking improvements.`,
    ],
    img: Progress,
    imgTablet: ProgressTablet,
    imgMobile: ProgressMobile,
  },
  {
    id: 6,
    title: 'Reward system',
    text: [
      `After weekly assessments, scores are awarded for positive results (and\u00A0withdrawn if the user’s
      condition deteriorated). Users can track the dynamics in the personal profile. This will help visualize
      their progress in handling their problems and\u00A0will motivate them to continue.`,
    ],
    img: Reward,
    imgTablet: RewardTablet,
    imgMobile: RewardMobile,
  },
];

const KillerFeaturesData = {
  title: 'The app’s key features',
  content,
};

export default KillerFeaturesData;
