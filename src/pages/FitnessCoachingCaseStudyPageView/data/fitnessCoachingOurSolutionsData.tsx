import OurSolutionsImg1 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutions1@2x.webp';
import OurSolutionsImg2 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutions2@2x.webp';
import OurSolutionsImg3 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutions3@2x.webp';
import OurSolutionsImg4 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutions4@2x.webp';
import OurSolutionsImg5 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutions5@2x.webp';
import OurSolutionsImg6 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutions6@2x.webp';
import OurSolutionsImg7 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutions7@2x.webp';
import OurSolutionsImg8 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutions8@2x.webp';
import OurSolutionsImgTablet1 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsTablet1@2x.webp';
import OurSolutionsImgTablet2 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsTablet2@2x.webp';
import OurSolutionsImgTablet3 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsTablet3@2x.webp';
import OurSolutionsImgTablet4 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsTablet4@2x.webp';
import OurSolutionsImgTablet5 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsTablet5@2x.webp';
import OurSolutionsImgTablet6 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsTablet6@2x.webp';
import OurSolutionsImgTablet7 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsTablet7@2x.webp';
import OurSolutionsImgTablet8 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsTablet8@2x.webp';
import OurSolutionsImgMobile1 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsMobile1@2x.webp';
import OurSolutionsImgMobile2 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsMobile2@2x.webp';
import OurSolutionsImgMobile3 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsMobile3@2x.webp';
import OurSolutionsImgMobile4 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsMobile4@2x.webp';
import OurSolutionsImgMobile5 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsMobile5@2x.webp';
import OurSolutionsImgMobile6 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsMobile6@2x.webp';
import OurSolutionsImgMobile7 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsMobile7@2x.webp';
import OurSolutionsImgMobile8 from '../../../assets/images/fitnessCoachingCaseStudyPageView/ourSolutions/img_ourSolutionsMobile8@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const fitnessCoachingOurSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Proper product operation and efficiency',
    text: `The main task was to migrate a WordPress site to a custom-built web application (with mobile responsive
      design). For the backend, we used Node.Js, and for the frontend Vue.Js. Using reliable technologies allowed us
      to guarantee high-quality app operation, enhance the product capacity, and significantly broaden functionality.`,
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Effortless client management and accountability',
    text: `Managing clients and their results are now easier since all data is in one place. We built a sophisticated
      administrative panel with appropriate filters and report-generating tools that allow administrators to track
      users' membership transitions, payments, and accountability and communicate with them.`,
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Easy generation of customized workout plan',
    text: `The coach can generate a customized workout plan according to the information given by users during
      onboarding (goals, medical condition, biodata, etc.) All of this info is available in the admin panel.`,
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Calorie calculator',
    text: `This feature calculates the daily calorie intake for the users according to their goals and anthropometry.
      We used the owner’s formula that was adjusted to the users’ goals and correctly displayed each user's custom
      instruction. Also, we integrated SendGrid to send users their results of the calorie calculation via email.`,
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 5,
    title: 'Challenges for clients',
    text: [
      `This is a gamifying feature that encourages people to take part in the competition and reach great results.
        Users with a subscription (monthly/yearly) can participate in these challenges, track their progress, and
        compete with other users to achieve their goals.`,
      `Users check-in daily (fill in all the required data), upload their “Progress photo", and get points. They also
        can monitor their results on the leaderboards. This fun feature allows us to tap users' intrinsic motivations
        so they enjoy using Progress 247 more.`,
    ],
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
  {
    id: 6,
    title: 'Email automation',
    text: [
      `The auto-emailing feature allows automatically sending various encouraging and motivational messages to users
        at specific intervals. This feature is designed to keep users engaged, motivated, and informed throughout
        their fitness journey.`,
      `The platform sends personalized messages based on user activities, achievements, or progress. For example,
        after completing a workout, the platform can send a congratulatory message to acknowledge the user's effort
        and progress. If a user hasn't logged in for a few days, the platform can send a gentle reminder encouraging
        them to get back on track.`,
    ],
    img: OurSolutionsImg6,
    imgTablet: OurSolutionsImgTablet6,
    imgMobile: OurSolutionsImgMobile6,
  },
  {
    id: 7,
    title: 'Workout tracking',
    text: [
      `This feature provides users with a comprehensive and efficient way to monitor and manage their fitness routines.
        Users can customize their workout routines by adding specific exercises, sets, reps, and weights.`,
      'This feature allows them to track their progress over time, making setting and achieving fitness goals easier.',
    ],
    img: OurSolutionsImg7,
    imgTablet: OurSolutionsImgTablet7,
    imgMobile: OurSolutionsImgMobile7,
  },
  {
    id: 8,
    title: 'Secure payments processing',
    text: `We integrated the Stripe system, allowing users to accept payments and send payouts online securely. This
      feature also provides an opportunity to track payments within the platform and manage subscriptions in the app.`,
    img: OurSolutionsImg8,
    imgTablet: OurSolutionsImgTablet8,
    imgMobile: OurSolutionsImgMobile8,
  },
];

export default fitnessCoachingOurSolutionsData;
