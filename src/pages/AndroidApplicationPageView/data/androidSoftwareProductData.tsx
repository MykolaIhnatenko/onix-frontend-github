import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';

const data: IAccordionTextData[] = [
  {
    id: 101,
    number: '01',
    title: 'Maps and geolocation',
    content: [`We deliver mobile apps with display and analysis of itineraries. And with the help of
      OpenStreetMap, we provide solutions that allow users to work with offline maps and
      implement maps with direct access to a GPS receiver.`],
  },
  {
    id: 108,
    number: '08',
    title: 'Networking',
    content: [`We apply technologies that create specialized interfaces and implement any network-level
      protocols such as torrent and VoIP. To simplify the development and processing of REST
      queries, we use object frameworks that speed up the app development process.`],
  },
  {
    id: 102,
    number: '02',
    title: 'Advertising',
    content: [`Our experts assist you in monetizing Android apps using WebView for most integrations.
      We use advertising network integrators to speed up several advertising providers' integration processes
      and ensure their setup without mobile app recompilation.`],
  },
  {
    id: 109,
    number: '09',
    title: 'Analytics',
    content: [`We integrate analytics systems with online user support systems that help solve typical
      errors occurring when less common mobile devices are used, like Kindle or Android Wear.
      There are additional income opportunities when all mobile devices are usable.`],
  },
  {
    id: 103,
    number: '03',
    title: 'In-app purchases',
    content: [`We enable your users to purchase items within the app making it convenient for them to
      invest in your app. We integrate not only standard mobile payment services from Google Play but also
      other payment systems that allow for distributing apps via other international markets.`],
  },
  {
    id: 110,
    number: '10',
    title: 'Android NDK',
    content: [`Android's main language is Java, and to implement critical code areas that deal with
      speed development within the application, we use C/ C++ and add it to the project in
      a library format. This allows us to solve issues with important application features,
      so the app is not limited by the resources of the Java machine and can use all available
      mobile device memory.`],
  },
  {
    id: 104,
    number: '04',
    title: 'Social conversations',
    content: [`We can integrate your Android application with the most powerful social media channels
      and messengers making the registration process for users as simple as possible, and
      allowing the app to receive the necessary information from a user's social media profile.`],
  },
  {
    id: 111,
    number: '11',
    title: 'Android graphics',
    content: [`An Android device can create graphics in different ways. For a full-screen display, we
      use OpenGL to facilitate porting of the existing cross-platform code and RenderScript
      library to process images with the help of a video accelerator.`],
  },
  {
    id: 105,
    number: '05',
    title: 'Android data access',
    content: [`We use a variety of technology tools for data processing in activities like data search
      within the smartphone, processing external archives of photos, Geolocation coordinates
      or accessing aggregated contacts, calendars, and reminders.`],
  },
  {
    id: 112,
    number: '12',
    title: 'Game render / engines',
    content: [`Our knowledge of multiple cross-platform engines, together with specific Android libraries,
      allows us to significantly facilitate the developers' work with basic objects and their
      properties. Cross-platform engines make it possible to develop mobile games, not
      only in Java but in C# and Lua.`],
  },
  {
    id: 106,
    number: '06',
    title: 'Video',
    content: [`We ensure all video content, including 4K videos with the high bit-rate can be viewed in
      your app. We make mobile video processing possible through apparatus methods and Android
      frameworks, which provide interfaces for video coding and decoding. Our Android developers
      use the FFMpeg library and implement video effect layers in real time via shaders and
      direct processing of the pixel array.`],
  },
  {
    id: 113,
    number: '13',
    title: 'External hardware',
    content: [`We apply external devices within the scope of the Android ecosystem and offer solutions
      to help automate access or unfold the augmented reality infrastructure. Fast prototyping
      via Arduino allows us to implement any type of system in smart home technologies or robotics.`],
  },
  {
    id: 107,
    number: '07',
    title: 'Native Android technologies',
    content: [`We implement a vast number of native Android technologies to support multiple user
      activities within mobile apps. To facilitate a user's interaction with an app's
      interface, we apply tools that enable a gesture recognition system and multi-touch advantage.`],
  },
  {
    id: 114,
    number: '14',
    title: 'Distributing',
    content: [`Android apps we develop are mainly distributed via Google Play and can also be distributed
      through other application markets, and made available for downloading via specific websites.
      To simplify app testing and correct targeting, we use specialized tools to distribute beta
      versions of apps, such as Crashlytics Beta.`],
  },
];

const doubleAccordionData = getAccordionTextData(data);

export default doubleAccordionData;
