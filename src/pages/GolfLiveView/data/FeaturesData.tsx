import Future1 from '../../../assets/images/GolfLive/featuresSection/img_feature1@2x.webp';
import Future1Tablet from '../../../assets/images/GolfLive/featuresSection/img_feature1_tablet@2x.webp';
import Future1Mobile from '../../../assets/images/GolfLive/featuresSection/img_feature1_mobile@2x.webp';
import Future2 from '../../../assets/images/GolfLive/featuresSection/img_feature2.webp';
import Future2Tablet from '../../../assets/images/GolfLive/featuresSection/img_feature2_tablet.webp';
import Future2Mobile from '../../../assets/images/GolfLive/featuresSection/img_feature2_mobile.webp';
import Future3 from '../../../assets/images/GolfLive/featuresSection/img_feature3.webp';
import Future3Tablet from '../../../assets/images/GolfLive/featuresSection/img_feature3_tablet.webp';
import Future3Mobile from '../../../assets/images/GolfLive/featuresSection/img_feature3_mobile.webp';
import Future4 from '../../../assets/images/GolfLive/featuresSection/img_feature4.webp';
import Future4Tablet from '../../../assets/images/GolfLive/featuresSection/img_feature4_tablet.webp';
import Future4Mobile from '../../../assets/images/GolfLive/featuresSection/img_feature4_mobile.webp';
import Future5 from '../../../assets/images/GolfLive/featuresSection/img_feature5.webp';
import Future5Tablet from '../../../assets/images/GolfLive/featuresSection/img_feature5_tablet.webp';
import Future5Mobile from '../../../assets/images/GolfLive/featuresSection/img_feature5_mobile.webp';
import Future6 from '../../../assets/images/GolfLive/featuresSection/img_feature6.webp';
import Future6Tablet from '../../../assets/images/GolfLive/featuresSection/img_feature6_tablet.webp';
import Future6Mobile from '../../../assets/images/GolfLive/featuresSection/img_feature6_mobile.webp';
import Future7 from '../../../assets/images/GolfLive/featuresSection/img_feature7.webp';
import Future7Tablet from '../../../assets/images/GolfLive/featuresSection/img_feature7_tablet.webp';
import Future7Mobile from '../../../assets/images/GolfLive/featuresSection/img_feature7_mobile.webp';
import Future8 from '../../../assets/images/GolfLive/featuresSection/img_feature8.webp';
import Future8Tablet from '../../../assets/images/GolfLive/featuresSection/img_feature8_tablet.webp';
import Future8Mobile from '../../../assets/images/GolfLive/featuresSection/img_feature8_mobile.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';
import ItemList from 'components/ItemList/ItemList';

const content: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Rewriting the application',
    text: [
      `We chose native development for both the\u00A0Android and iOS platforms to ensure the highest performance levels
      and user experience for the\u00A0application's audience.`,
      `By opting for native development, the\u00A0Onix team leveraged the\u00A0inherent advantages of each
      platform to deliver a tailored experience optimized for the\u00A0respective operating systems.`,
      `This approach allowed for deeper integration with platform-specific features and functionalities,
      resulting in a more seamless and intuitive user experience.`,
    ],
    img: Future1,
    imgTablet: Future1Tablet,
    imgMobile: Future1Mobile,
  },
  {
    id: 2,
    title: 'New architecture design',
    text: [
      `The primary objective was to develop a robust and scalable architecture that could seamlessly support
      the increasing demands and complexities of the\u00A0application over time. To achieve this, the team employed
      industry-standard practices and leveraged cutting-edge technologies to ensure a solid foundation for
      the platform's expansion.`,
      `The architecture was meticulously designed with scalability in mind, utilizing modular components
      and microservices architecture to facilitate easier management and scaling of individual functionalities.
      This approach enabled the application to adapt and grow in response to changing user needs and market dynamics
      without compromising performance or reliability.`,
    ],
    img: Future2,
    imgTablet: Future2Tablet,
    imgMobile: Future2Mobile,
  },
  {
    id: 3,
    title: 'Coach search',
    text: [
      `The coach search feature allows golfers to find and connect with coaches tailored to their specific needs
      and preferences. This feature is a comprehensive tool for golfers to find coaches based on various criteria,
      such as rating, reviews, profile descriptions, and pricing.`,
    ],
    img: Future3,
    imgTablet: Future3Tablet,
    imgMobile: Future3Mobile,
  },
  {
    id: 4,
    title: '1:1 lessons',
    text: (
      <ItemList
        listTitle={`This essential component streamlines booking appointments, ensuring convenience
          and efficiency for both parties involved:`}
        list={[
          (
            <span className="black">
              <span className="font-semibold">Session selection.</span>
              {' '}
              Golfers can view coaches&apos; schedules and select
              desired dates and times for their sessions.
            </span>
          ),
          (
            <span className="black">
              <span className="font-semibold">Booking request submission.</span>
              {' '}
              Once golfers have chosen their preferred session time,
              they can proceed to submit a booking request. This request includes essential details
              such as the selected date, time, and duration of the coaching session.
            </span>
          ),
          (
            <span className="black">
              <span className="font-semibold">Coach notification.</span>
              {' '}
              Upon receiving a booking request, coaches are promptly notified via the application.
            </span>
          ),
          (
            <span className="black">
              <span className="font-semibold">Confirmation or rejection.</span>
              {' '}
              Coaches can confirm or reject the booking request based on availability and scheduling preferences.
            </span>
          ),
          (
            <span className="black">
              <span className="font-semibold">Payment processing.</span>
              {' '}
              Upon booking confirmation, the application facilitates secure payment processing
              to finalize the session reservation.
            </span>
          ),
        ]}
        withAnimate
        marginBottomAbsent
      />
    ),
    img: Future4,
    imgTablet: Future4Tablet,
    imgMobile: Future4Mobile,
  },
  {
    id: 5,
    title: 'Instant replay',
    text: [
      `Coaches can enhance the learning experience by recording short videos during coaching sessions, enabling
      golfers to review and analyze specific moments in detail.`,
      `This feature serves as a valuable tool for visual learning, allowing golfers to identify areas
      for improvement and make necessary adjustments to their technique.`,
    ],
    img: Future5,
    imgTablet: Future5Tablet,
    imgMobile: Future5Mobile,
  },
  {
    id: 6,
    title: 'Live stream',
    text: [
      `Coaches can host real-time video sessions to share their expertise, demonstrate techniques,
      and engage with users.`,
      `By leveraging live streaming technology, coaches can share their expertise, provide
      personalized guidance, and foster a sense of community among participants, ultimately
      enhancing the overall learning and enjoyment of the sport.`,
    ],
    img: Future6,
    imgTablet: Future6Tablet,
    imgMobile: Future6Mobile,
  },
  {
    id: 7,
    title: 'Chat',
    text: [
      `This feature facilitates seamless communication and collaboration between golfers and coaches within
      the\u00A0application.`,
      `By offering direct messaging, personalized guidance, immediate feedback,
      and interactive Q&A sessions, this feature enhances the\u00A0overall coaching experience,
      fosters engagement, and strengthens relationships between users.`,
    ],
    img: Future7,
    imgTablet: Future7Tablet,
    imgMobile: Future7Mobile,
  },
  {
    id: 8,
    title: 'Membership',
    text: [
      `Golfers can subscribe to coaches, unlocking exclusive benefits such as free live streams
      and discounts on coaching sessions.`,
      'This feature incentivizes golfer-coach relationships, fosters loyalty, and enhances the user experience.',
    ],
    img: Future8,
    imgTablet: Future8Tablet,
    imgMobile: Future8Mobile,
  },
];

const FeaturesData = {
  title: 'Solutions we provided',
  desc: `A dedicated team of Onix specialists meticulously adhered to a carefully crafted development process to
    deliver the\u00A0following solutions:`,
  content,
};

export default FeaturesData;
