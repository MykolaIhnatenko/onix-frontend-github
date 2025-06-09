const technicalChallengeDescription = [
  {
    id: 1,
    content: 'EdPlus approached Onix with two applications that they wanted to merge. The first, their own '
        + 'educational application, was written in React Native. The second, an app locker, '
        + 'was acquired from a third party. The idea was to merge the two applications so that '
        + 'the resulting product can support the Android platform (written in Java) but still '
        + 'leverage the React Native application using bridges.',
  },
  {
    id: 2,
    content: 'A module was realized as a bridge between two programming languages to enable interaction between '
        + 'the React Native and Java components. Then, the project was expanded to native development. '
        + 'The application for Android was written in Kotlin using Android SDK, Android Architecture '
        + 'Components, and third-party libraries.',
  },
  {
    id: 3,
    content: 'The application’s ability to block third-party applications was developed by obtaining '
        + 'Android system services that allow accessing statistics on all started processes. '
        + 'That enabled our service, by deducting statistics, to determine which process is running, '
        + 'as well as its classification in the Android environment: service, foreground or background '
        + 'application, and so on. Based on this info, the application can detect the current state of '
        + 'the system and react by displaying itself instead of another application.',
  },
  {
    id: 4,
    content: 'Unfortunately, Apple’s policy prohibits such technical solutions on iOS applications. '
        + 'The third-party apps locker is not available on the application that was developed '
        + 'for Apple’s App Store. It was written in Swift. The developers were using Alamofire, '
        + 'Firebase, Fabric, and Crashlytics.',
  },
];

export default technicalChallengeDescription;
