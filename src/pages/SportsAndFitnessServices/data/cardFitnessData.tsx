import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';

import SportStreamingApps from '@/images/fitness/img_sportStreamingApps.webp';
import SportsApps from '@/images/fitness/img_sportsApps.webp';
import SportEventBookingApps from '@/images/fitness/img_sportEventBookingApps.webp';
import MobileApps from '@/images/fitness/img_mobileApps.webp';
import CoachingApps from '@/images/fitness/img_coachingApps.webp';
import AppsDev from '@/images/fitness/img_appsDev.webp';

const cardFitnessData: IAccordionData[] = [
  {
    id: 11,
    number: '01',
    title: 'Wearable apps development',
    content: (
      <AccordionItemContentWithImg
        image={AppsDev}
        imageAlt="AppsDev"
      >
        <ItemText
          content={[
            `We offer sound wearable app development solutions to enhance the digital
            fitness experience on various wearable devices.`,
            `Our team can develop sports apps for all the major wearable platforms,
            such as Android Wear, Apple Watch, Samsung Gear, Fitbit, Garmin, and more.
            Here is what types of apps we create:`,
          ]}
        />
        <ItemList
          list={[
            'Wristband app',
            'Eyewear app',
            'Android Fitness App/Apple Watch app',
            'Android/iOS VR app',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 21,
    number: '02',
    title: 'Fitness mobile apps',
    content: (
      <AccordionItemContentWithImg
        image={MobileApps}
        imageAlt="MobileApps"
      >
        <ItemText
          content={[
            `Onix sports software developers know how to build custom fitness apps that are robust,
            competitive, and intuitive.`,
            `We can develop fitness apps for platforms including iOS Android, and Windows Phone.
            We also offer a wide range of features and services, such as`,
          ]}
        />
        <ItemList
          list={[
            'Custom sports app development',
            'Integration with existing systems',
            'User management and security',
            'Data storage and backup',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 31,
    number: '03',
    title: 'Sports apps UI/UX design',
    content: (
      <AccordionItemContentWithImg
        image={SportsApps}
        imageAlt="SportsApps"
      >
        <ItemText
          content={[
            `We can help you with creating wireframes, interactive prototypes and
            delivering an outstanding UI/UX design for a fitness app from scratch.
            Or we can redesign your existing sports app.`,
            `Our designers’ team will conduct an audit to provide you with new
            ideas of how your fitness app can be improved and what features or
            interface changes can make it user-friendly and easier to use.`,
          ]}
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 41,
    number: '04',
    title: 'Coaching apps',
    content: (
      <AccordionItemContentWithImg
        image={CoachingApps}
        imageAlt="CoachingApps"
      >
        <ItemText
          content={[
            `We can help you create custom-tailored applications to improve your coaching business.
            You can use these apps to manage your clients, create training programs, and track progress.`,
            `We provide online coaching app development services that allow businesses to improve client management,
            customize training programs, and provide personalized coaching experiences to clients.`,
          ]}
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 51,
    number: '05',
    title: 'Sports streaming apps',
    content: (
      <AccordionItemContentWithImg
        image={SportStreamingApps}
        imageAlt="SportStreamingApps"
      >
        <ItemText
          content={[
            `We have developed many successful fitness streaming apps for our clients and
            know what it takes to create a winning sports software solution.`,
            `Whether you need an app for sports live streaming, on-demand content, or both, we can help. We can also
            integrate your app with popular sports streaming platforms like ESPN, NBC Sports, and more.`,
          ]}
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 61,
    number: '06',
    title: 'Sports event booking apps',
    content: (
      <AccordionItemContentWithImg
        image={SportEventBookingApps}
        imageAlt="SportEventBookingApps"
      >
        <ItemText
          content={[
            `Our team of skilled developers is well-versed in the latest technologies and trends and creates
            custom-made booking apps that are sleek, user-friendly, and packed with features.`,
            `Our sports event booking apps are designed to make the booking process simple and efficient for
            both the users and the event organizers.`,
          ]}
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default cardFitnessData;
