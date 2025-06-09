import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';

const solutionsData: IAccordionData[] = [
  {
    id: 110,
    number: '01',
    title: 'Maps and geolocations',
    content: (
      <ItemText
        content={[
          `Onix can successfully build the best map and geolocation tools into its apps to ensure that
          smartphone users always receive precise information about their current location and itinerary.`,
        ]}
      />
    ),
  },
  {
    id: 710,
    number: '07',
    title: 'External hardware',
    content: (
      <ItemText
        content={[
          `Onix can link iOS apps to external hardware such as GoPro cameras, Apple watches, certain home
          appliances, and more. We use iBeacon, printing, Bluetooth, HomeKit, Wi-Fi, and WatchKit.`,
        ]}
      />
    ),
  },
  {
    id: 210,
    number: '02',
    title: 'iOS data access',
    content: (
      <ItemText
        content={[
          `Onix simplifies a user's interaction within the app interface by utilizing data processing
          technology tools. For example, sharing data between apps allows the app to use data from another
          app or provide needed data to it.`,
        ]}
      />
    ),
  },
  {
    id: 810,
    number: '08',
    title: 'Distributing',
    content: (
      <ItemList
        listTitle={
          `Onix uses these tools to allow programmers to test their programs in real-time before the grand
          release, ensuring top quality. These pre-tests are extremely important, as they show developers what
          people think of the applications.`
        }
        list={[
          'Crashlytics Beta',
          'HockeyApp',
          'TestFlight',
          'BetaBuilder',
        ]}
      />
    ),
  },
  {
    id: 310,
    number: '03',
    title: 'Social conversations',
    content: (
      <ItemText
        content={[
          `Onix improves an app's usability, making apps even more enticing to a user. These allow users to
          interact with their contacts and build connections in programs such as iMessage, Mail, Twitter, Facebook,
          LinkedIn, Instagram, etc.`,
        ]}
      />
    ),
  },
  {
    id: 910,
    number: '09',
    title: 'Analytics',
    content: (
      <ItemList
        listTitle={
          `By using these analytic tools, Onix’s developers can evaluate the effective use of chosen technologies
          for app development and design solutions. This makes it possible to easily analyze user activities in
          the app and help bring in new targeted user audiences.`
        }
        list={[
          'Flurry',
          'Google Analytics',
          'Crashlytics',
        ]}
      />
    ),
  },
  {
    id: 410,
    number: '04',
    title: 'Networking',
    content: (
      <ItemText
        content={[
          `Onix guarantees that the technology solutions we apply simplify issues and eliminate costs associated
          with integrating SMS and MMS services. We use P2P, Sockets, APNS, Push Notifications, StoreKit, RSS,
          and Networking Frameworks to stay up-to-date on their programs.`,
        ]}
      />
    ),
  },
  {
    id: 1010,
    number: '10',
    title: 'Media player',
    content: (
      <ItemText
        content={[
          `Onix recognizes that the presentation of text and media is a critical element of most iOS apps and
          uses these tools to facilitate customization of an app's media layer.`,
          `We use Media Accessibility Framework, Accelerate Framework, Assets Library, Image I/O, Photos Framework,
          Text Kit, and Core Kit.`,
        ]}
      />
    ),
  },
  {
    id: 510,
    number: '05',
    title: 'Video',
    content: (
      <ItemList
        listTitle="Onix uses these practical tools in managing videos in iOS:"
        list={[
          'Media Player',
          'UIImagePickerController',
          'Core Media',
          'AV Foundation',
          'RTMP',
          'RTSP',
          'HLS',
          'AirPlay',
        ]}
      />
    ),
  },
  {
    id: 1110,
    number: '11',
    title: 'Data',
    content: (
      <ItemText
        content={[
          `Onix relies on adaptive data analysis tools, allowing programmers to store and view data collected
          from applications used in real-time.`,
          `For this, we use CoreData, Keychain, Parse SDK, Magical Record, User Defaults, SQLite, XML, Plist,
          HTML5 Client-Side Storage in Safari, and Key Archiving.`,
        ]}
      />
    ),
  },
  {
    id: 610,
    number: '06',
    title: 'In-app purchase',
    content: (
      <ItemText
        content={[
          `Onix's expertise in multiple payment systems helps clients propose the best solutions to their
          applications. StoreKit is used for digital content and helps monetize any product for clients who want
          to sell hard or soft goods; PayPal and Stripe's integration works well everywhere.`,
        ]}
      />
    ),
  },
  {
    id: 1210,
    number: '12',
    title: 'Graphics',
    content: (
      <ItemText
        content={[
          `Graphics is one of the first things that attract people to an app. Onix integrated graphics tools that
          make it possible to support apps with 2D and 3D digital content.`,
          `We can also add supporting device features, such as a library of users' photos, battery life details,
          or remote control. Here are short descriptions of the tools commonly used in the iOS development
          of graphics.`,
        ]}
      />
    ),
  },
];

export default solutionsData;
