import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    id: 101,
    number: '01',
    title: 'Activity monitoring',
    content: [
      `Activity data can be used to set goals, track progress, and motivate users
      to stay active. Various monitoring ways include step counting,
      heart rate tracking, sleep hours, activity levels, and GPS tracking.`,
      `Onix experts can display activity data in a variety of ways, including graphs,
      charts, and tables. We can also export data to other apps or fitness devices for
      further analysis. Our developers use Apple’s HealthKit and Google Fit API to
      facilitate access to the health and fitness data collected on the iOS and Android platforms`,
    ],
  },
  {
    id: 105,
    number: '05',
    title: 'Goal-setting',
    content: [
      `Goal-setting is a great way to motivate users to stay active and engaged with your fitness app.
      One way to do this is to allow users to set daily, weekly, or monthly goals. For each goal,
      they can track their progress and see how close they are to achieving it. We also add a rewards
      system for users who reach their goals. This can be anything from a virtual badge to a discount
      on a premium subscription.`,
    ],
  },
  {
    id: 102,
    number: '02',
    title: 'User onboarding',
    content: [
      `User onboarding is an essential part of any fitness app and should be
      carefully considered to ensure it meets users' needs. It usually includes
      a series of tutorials, walkthroughs, or tips that guide users through the
      app's different features. Our developers and designers make onboarding pages simple,
      concise and tailored to the individual user's needs.`,
    ],
  },
  {
    id: 106,
    number: '06',
    title: 'Payment system integration',
    content: [
      `We ensure a payment option that is easy to use and highly secure. To implement the payment feature,
      we can integrate a secure payment gateway using a payment platform like Stripe or PayPal.`,
    ],
  },
  {
    id: 103,
    number: '03',
    title: 'Gamification',
    content: [
      `We know how to add gamification and competitiveness to your fitness app
      to encourage users to stick to their workout routine. These apps can make
      working out more fun and engaging by incorporating features such as badges,
      leaderboards, and progress tracking. For example, a badge could be awarded
      for completing a set number of workouts, or for burning a certain number of calories.`,
    ],
  },
  {
    id: 107,
    number: '07',
    title: 'Social media integrations',
    content: [
      `Sports & fitness products with social media integration increase user engagement and make
      the experience interactive and shareable. We can empower your customers to share their
      results with friends on social media such as Facebook, YouTube, Twitter, etc.`,
    ],
  },
  {
    id: 104,
    number: '04',
    title: 'Analytics',
    content: [
      `Adding analytics functionality to your fitness app can help you track user engagement
      and usage patterns. This can be useful for understanding which features are being used
      most often, and how users are navigating through the app.`,
      `To add analytics functionality to your fitness app, we mainly use a third-party
      service such as Google Analytics or Mixpanel.`,
    ],
  },
  {
    id: 108,
    number: '08',
    title: '3rd-party services & devices integration',
    content: [
      `Adding third-party services and integrating devices into your fitness app can give your users
      a more comprehensive and personalized experience. We can integrate popular services like Fitbit,
      MyFitnessPal, and MapMyRun and provide your users with data from their favorite tracking devices
      and apps. We can also add support for popular devices like the Apple Watch and Android Wear.`,
    ],
  },
];

const featerProvideFitnessData = getAccordionTextData(data);

export default featerProvideFitnessData;
