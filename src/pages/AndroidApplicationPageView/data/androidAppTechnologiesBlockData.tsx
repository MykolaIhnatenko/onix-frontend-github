import { ITechnologiesBlocksData } from '../../../components/Technologies/interfaces/ITechnologies';

export const androidAppTechnologiesBlocksNames = {
  Languages: [
    'Java', 'Kotlin',
  ],
  Frameworks: [
    'Android Architecture Components', 'Firebase', 'Material Design', 'Jetpack Compose',
  ],
  Libraries: [
    'Volley', 'Picasso', 'OkHttp', 'Room', 'Dagger', 'RxJava', 'EventBus', 'Butter Knife', 'LeakCanary', 'Timber',
  ],
  Databases: [
    'SQLite', 'Realm',
  ],
  'Testing tools': [
    'jUnit', 'Mockito', 'Robolectric',
  ],
};

export const androidAppTechnologiesBlocksData: ITechnologiesBlocksData = {
  pageTitle: `To build Android apps of the highest quality,
    we use a reliable and top-notch set of technologies.`,
};
