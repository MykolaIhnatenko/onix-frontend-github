import OurExpertiseImg1 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourExpertise/img_ourExpertise1@2x.webp';
import OurExpertiseImg2 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourExpertise/img_ourExpertise2@2x.webp';
import OurExpertiseImg3 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourExpertise/img_ourExpertise3@2x.webp';
import OurExpertiseImg4 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourExpertise/img_ourExpertise4@2x.webp';
import OurExpertiseImg5 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourExpertise/img_ourExpertise5@2x.webp';
import { IStickySliderData } from 'components/StickySlider/interfaces/IStickySliderItem';
import ItemText from 'components/ItemText/ItemText';

const StickySliderData: IStickySliderData[] = [
  {
    id: 1,
    number: '01',
    title: 'Creating appealing visual',
    text: 'Our designers created stunning visuals and delivered a scalable design system to keep the Progress'
      + ' 247 look and feel consistent.',
    image: OurExpertiseImg1,
  },
  {
    id: 2,
    number: '02',
    title: 'Intuitive interface',
    text: 'We made a holistic dashboard view that effortlessly tracks and manages clients&apos; data in one place.',
    image: OurExpertiseImg2,
  },
  {
    id: 3,
    number: '03',
    title: 'Simple navigation',
    text: (
      <ItemText
        content={[
          'Our designers avoided adding a lot of complicated navigation links.',
          `We built an intuitive interface that enables users to find the required features easily and access
          them quickly rather than move from link to link and back all the time.`,
        ]}
        marginBottomAbsent
      />
    ),
    image: OurExpertiseImg3,
  },
  {
    id: 4,
    number: '04',
    title: 'Engaging user experience',
    text: (
      <ItemText
        content={[
          `We added a chatbot to the account pages to simulate Diren’s assistant coach requesting a user to go
          through a check-in process daily.`,
          `This solution replaced a standard boring form to fill out daily, introduced a more engaging experience,
          and encouraged users to input their data.`,
        ]}
        marginBottomAbsent
      />
    ),
    image: OurExpertiseImg4,
  },
  {
    id: 5,
    number: '05',
    title: 'Mobile responsive design',
    text: (
      <ItemText
        content={[
          'Our specialists made website design adapted to the size of the user\'s device.',
          `Our goal was to render content differently depending on the device or screen size so that users
          have a positive experience no matter how they access a Progress 247 platform.`,
        ]}
        marginBottomAbsent
      />
    ),
    image: OurExpertiseImg5,
  },
];

export default StickySliderData;
