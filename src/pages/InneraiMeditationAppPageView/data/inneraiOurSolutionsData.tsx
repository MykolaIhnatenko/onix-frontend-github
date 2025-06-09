import VRARContent from '../../../components/VRARContent/VRARContent';
import ContentText from '../../../components/ContentText/ContentText';
import OurSolutionsImg1 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutions2@2x.webp';
import OurSolutionsImg3 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutions3@2x.webp';
import OurSolutionsImg4 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutions4@2x.webp';
import OurSolutionsImg5 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutions5@2x.webp';
import OurSolutionsImgTablet1 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutionsTablet1@2x.webp';
import OurSolutionsImgTablet2 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutionsTablet2@2x.webp';
import OurSolutionsImgTablet3 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutionsTablet3@2x.webp';
import OurSolutionsImgTablet4 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutionsTablet4@2x.webp';
import OurSolutionsImgTablet5 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutionsTablet5@2x.webp';
import OurSolutionsImgMobile1 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutionsMobile1@2x.webp';
import OurSolutionsImgMobile2 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutionsMobile2@2x.webp';
import OurSolutionsImgMobile3 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutionsMobile3@2x.webp';
import OurSolutionsImgMobile4 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutionsMobile4@2x.webp';
import OurSolutionsImgMobile5 from '../../../assets/images/inneraiMeditationAppPage/ourSolutions/img_ourSolutionsMobile5@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const inneraiOurSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'AI-generated personalized meditations',
    text: (
      <>
        <VRARContent>
          <ContentText tag="p" marginAbsent className="!mb-[20px] screen-md:!mb-[15px]">
            To create a custom meditation, users only need to enter several parameters:
          </ContentText>
        </VRARContent>
        <VRARContent>
          <ol className="mb-[30px] screen-md:mb-[20px]">
            <li>
              <ContentText tag="p" marginAbsent className="!mb-[5px]">
                1.Their problem (e.g., they are battling stress, trying to quell anxiety, or want to fall asleep
                after a turbulent day), which can be expressed as a metaphor (e.g., waves at the beach or
                waiting for a train)
              </ContentText>
            </li>
            <li>
              <ContentText tag="p" marginAbsent className="!mb-[5px]">
                2.Meditation type (e.g., breath, visualization, sleep stories, Zen, relaxation, energizing, etc.)
              </ContentText>
            </li>
            <li>
              <ContentText tag="p" marginAbsent className="!mb-[5px]">
                3.Meditation duration
              </ContentText>
            </li>
            <li>
              <ContentText tag="p" marginAbsent>
                4.Guide’s voice
              </ContentText>
            </li>
          </ol>
        </VRARContent>
        <VRARContent>
          <ContentText tag="p" marginAbsent>
            As a result, each meditation is an intimate reflection of the user’s current thoughts and feelings
            and a fresh, engaging experience. The user can listen to the newly created meditation immediately.
            Moreover, it is automatically added to their meditations list so they can play it afterward.
          </ContentText>
        </VRARContent>
      </>
    ),
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Variety of meditation styles',
    text: `Whether the user has Monday blues or is experiencing a dramatic life change, InnerAI can offer relief.
      Users can choose from many options, from breath-focused exercises to guided imagery.`,
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Selection of meditation guides',
    text: `Users can choose among a variety of soothing or empowering narrator voices and teaching styles to find
      a guide that truly resonates with them and enhances their meditation practice.`,
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Adaptive content',
    text: [
      'InnerAI continuously tailors the meditation process to each user’s goals and needs.',
      `Each time, it recommends a meditation style and offers specialized modules with advanced mindfulness
      techniques and philosophies perfectly suited to their current emotional and mental state.`,
    ],
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 5,
    title: 'Daily health insights',
    text: [
      `InnerAI also provides personalized health and mindfulness insights and advice to assist the users’
      daily self-care routines.`,
      `The actionable recommendations and enriching content should help users seamlessly incorporate well-being
      into their lifestyles.`,
    ],
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
];

export default inneraiOurSolutionsData;
