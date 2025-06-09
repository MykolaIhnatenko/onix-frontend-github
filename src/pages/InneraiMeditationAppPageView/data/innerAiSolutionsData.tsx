import SolutionImage1 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution1.webp';
import SolutionImageTablet1 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution-tablet1.webp';
import SolutionImageMobile1 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution-mobile1.webp';
import SolutionImage2 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution2.webp';
import SolutionImageTablet2 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution-tablet2.webp';
import SolutionImageMobile2 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution-mobile2.webp';
import SolutionImage3 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution3.webp';
import SolutionImageTablet3 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution-tablet3.webp';
import SolutionImageMobile3 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution-mobile3.webp';
import SolutionImage4 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution4.webp';
import SolutionImageTablet4 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution-tablet4.webp';
import SolutionImageMobile4 from '../../../assets/images/inneraiMeditationAppPage/solutionsSection/img_solution-mobile4.webp';
import { ITabData } from 'components/TabsBlock/interfaces/ITab';

const innerAiSolutionsContent: ITabData[] = [
  {
    id: 1,
    title: 'OpenAI GPT',
    subTitle: 'We chose the GPT API as the core for generating the meditation text.',
    text: [
      `As an additional feature, we decided to replicate the Chat GPT functionality with an option to stream
      text without waiting for a complete response from the service.`,
      `Parsing the text coming from Open AI for meditations consisting of different parts was challenging.
      Since the AI understands queries quite literally, it’s tricky to make it return the text in the right format.`,
      `We solved this problem by using an additional fresh feature – Function Calling. It allows sending
      to the AI requests with embedded special data models that specify the data format it should return.
      This solution helped reduce the number of errors during the text generation and improved the developers’
      interaction with the service.`,
    ],
    imgMobile: SolutionImageMobile1,
    imgTablet: SolutionImageTablet1,
    img: SolutionImage1,
  },
  {
    id: 2,
    title: 'Narrator’s voice generation',
    subTitle: 'We used Azure and WellSaid for a more natural human voice generation.',
    text: `Azure helped with the correct arrangement of pauses so that the narrator’s intonation matches the text.
      WellSaid facilitates the use of synthesized voices that are almost indistinguishable from real humans,
      including the right intonation.`,
    imgMobile: SolutionImageMobile2,
    imgTablet: SolutionImageTablet2,
    img: SolutionImage2,
  },
  {
    id: 3,
    title: 'Operation in the background',
    subTitle: `The client also requested that the custom meditation generation should not stop even when
      the user's phone is locked, as well as the ability to play a meditation in the background.`,
    text: `This turned out to be a significant challenge since we cannot directly interact with the Unity
      application when it is out of focus; in that case, it simply enters sleep mode. Therefore,
      Onix’s iOS developers had to create a native module capable of interacting with Unity that
      can make requests in the background and execute these requests on the native side.`,
    imgMobile: SolutionImageMobile3,
    imgTablet: SolutionImageTablet3,
    img: SolutionImage3,
  },
  {
    id: 4,
    title: 'Authentication system',
    subTitle: 'Our developers also integrated the PlayFab API to store user data and identify users.',
    text: `This enables users to store their personal meditations in the app’s storage and play them back
      on any supported device.`,
    imgMobile: SolutionImageMobile4,
    imgTablet: SolutionImageTablet4,
    img: SolutionImage4,
  },
];

const innerAiSolutionsData = {
  upTitle: '[ Challenges and solutions ]',
  title: 'The project is unique because it required AI\u00A0to\u00A0create meditations in real time.',
  firstText: 'The AI solution not only generates text for a guided meditation based on the parameters '
    + 'entered by the user but also instantly converts it into audio.',
  secondText: 'The user support feature, where AI provides advice and guidance, can enhance the user '
    + 'experience and make the\u00A0app more effective in achieving relaxation and long-term mental health goals.',
  content: innerAiSolutionsContent,
};

export default innerAiSolutionsData;
