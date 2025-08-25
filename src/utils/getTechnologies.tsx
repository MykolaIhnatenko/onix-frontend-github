import ITechnologies, { ITechnology } from '../components/Technologies/interfaces/ITechnologies';
import Icons from '../assets/icon';

type TechnologiesNamesType = {
  [key: string]: string[]
};

export const technologies: ITechnologies = {
  'Programming languages': [
    {
      title: 'HTML',
      icon: <Icons.IconHtml width={42} height={48} />,
    },
    {
      title: 'PHP',
      icon: <Icons.IconPhp width={76} height={40} />,
    },
    {
      title: 'JavaScript',
      icon: <Icons.IconJS width={45} height={45} />,
    },
  ],
  'Backend development': [
    {
      title: 'Python',
      icon: <Icons.IconPython width={47.5} height={48} />,
    },
    {
      title: 'Node.js',
      icon: <Icons.IconNode width={42.5} height={48} />,
    },
    {
      title: 'Node.JS',
      icon: <Icons.IconNode width={42.5} height={48} />,
    },
    {
      title: 'Java',
      icon: <Icons.IconJava width={48} height={48} />,
    },
    {
      title: 'Ruby',
      icon: <Icons.IconRuby width={48} height={48} />,
    },
    {
      title: 'PHP',
      icon: <Icons.IconPhp width={76} height={40} />,
    },
    {
      title: 'Typescript',
      icon: <Icons.IconWebTypescript width={48} height={48} />,
    },
    {
      title: 'Cake PHP',
    },
  ],
  'Frontend development': [
    {
      title: 'React.js',
      icon: <Icons.IconReact width={54} height={48} />,
    },
    {
      title: 'React',
      icon: <Icons.IconReact width={54} height={48} />,
    },
    {
      title: 'Vue.js',
      icon: <Icons.IconVue width={55.5} height={48} />,
    },
    {
      title: 'CSS',
      icon: <Icons.IconCss width={42} height={48} />,
    },
    {
      title: 'HTML5',
      icon: <Icons.IconHtml width={42} height={48} />,
    },
    {
      title: 'Angular',
      icon: <Icons.IconAngular width={45} height={48} />,
    },
    {
      title: 'Javascript',
      icon: <Icons.IconJS width={45} height={45} />,
    },
    {
      title: 'JavaScript',
      icon: <Icons.IconJS width={45} height={45} />,
    },
    {
      title: 'Typescript',
      icon: <Icons.IconWebTypescript width={48} height={48} />,
    },
    {
      title: 'TypeScript',
      icon: <Icons.IconWebTypescript width={48} height={48} />,
    },
  ],
  'Mobile development': [
    {
      title: 'Kotlin',
      icon: <Icons.IconKotlin width={46} height={46} />,
    },
    {
      title: 'Android',
      icon: <Icons.IconAndroid width={50} height={50} />,
    },
    {
      title: 'Flutter',
      icon: <Icons.IconFlutter width={39} height={48} />,
    },
    {
      title: 'Swift',
      icon: <Icons.IconSwift width={48} height={48} />,
    },
    {
      title: 'Objective-C',
      icon: <Icons.IconObjectiveC width={66} height={67} />,
    },
    {
      title: 'React Native',
      icon: <Icons.IconReactNative width={54} height={48} />,
    },
    {
      title: 'IOS SDK',
      icon: <Icons.IconIOSSDK width={48} height={48} />,
    },
  ],
  'Platform customization': [
    {
      title: 'Shopify',
      icon: <Icons.IconShopify width={42} height={48} />,
    },
    {
      title: 'WordPress',
      icon: <Icons.IconWordpress width={48} height={48} />,
    },
    {
      title: 'Salesforce',
      icon: <Icons.IconSalesforce width={68} height={48} />,
    },
    {
      title: 'Magento',
      icon: <Icons.IconMagento width={41} height={48} />,
    },
    {
      title: 'OpenCart',
      icon: <Icons.IconOpenCart width={66} height={48} />,
    },
    {
      title: 'Canva',
      icon: <Icons.IconCanva width={48} height={48} />,
    },
  ],
  'Framework and CMS': [
    {
      title: 'Shopify',
      icon: <Icons.IconShopify width={42} height={48} />,
    },
    {
      title: 'CakePHP',
      icon: <Icons.IconCacePHP width={50} height={50} />,
    },
    {
      title: 'Django',
      icon: <Icons.IconDjango width={77} height={28} />,
    },
    {
      title: 'Laravel',
      icon: <Icons.IconLaravel width={52} height={52} />,
    },
    {
      title: 'WordPress',
      icon: <Icons.IconWordpress width={48} height={48} />,
    },
  ],
  'VR/AR and 3D design': [
    {
      title: 'Unity',
      icon: <Icons.IconUnity width={48} height={48} />,
    },
    {
      title: 'Visual Studio',
      icon: <Icons.IconVisualStudio width={48} height={48} />,
    },
    {
      title: 'Blender',
      icon: <Icons.IconBlender width={59} height={48} />,
    },
    {
      title: 'Maya',
      icon: <Icons.IconMaya width={53} height={48} />,
    },
    {
      title: 'Houdini',
      icon: <Icons.IconHoudini width={48} height={48} />,
    },
    {
      title: 'V-Ray',
      icon: <Icons.IconVray width={48} height={48} />,
    },
    {
      title: '3D MAX',
      icon: <Icons.Icon3DMax width={49} height={49} />,
    },
    {
      title: 'WebGL',
      icon: <Icons.IconWebGL width={63} height={63} />,
    },
    {
      title: 'WEBGL',
      icon: <Icons.IconWebGL width={63} height={63} />,
    },
  ],
  'Payment System': [
    {
      title: 'Stripe',
    },
  ],
  'Email Services': [
    {
      title: 'MailChimp',
    },
  ],
  Algorithms: [
    {
      title: 'Supervised Learning',
      icon: <Icons.IconSupervised width={67} height={40} />,
    },
    {
      title: 'Unsupervised Learning',
      icon: <Icons.IconUnsupervised width={72} height={48} />,
    },
    {
      title: 'Statistical Learning',
      icon: <Icons.IconStatistical width={53} height={48} />,
    },
    {
      title: 'Deep Learning',
      icon: <Icons.IconDeep width={48} height={48} />,
    },
    {
      title: 'Clustering',
      icon: <Icons.IconClustering width={48} height={48} />,
    },
    {
      title: 'Neural Network',
      icon: <Icons.IconNeural width={48} height={48} />,
    },
    {
      title: 'Computer Vision',
      icon: <Icons.IconComputer width={48} height={48} />,
    },
    {
      title: 'Object Detection',
      icon: <Icons.IconObject width={48} height={48} />,
    },
    {
      title: 'And many more',
    },
  ],
  Languages: [
    {
      title: 'Python',
      icon: <Icons.IconPython width={48} height={48} />,
    },
    {
      title: 'MATLAB',
      icon: <Icons.IconMatlab width={54} height={48} />,
    },
    {
      title: 'Java',
      icon: <Icons.IconJava width={60} height={48} />,
    },
    {
      title: 'Kotlin',
      icon: <Icons.IconKotlin width={46} height={46} />,
    },
    {
      title: 'Typescript',
      icon: <Icons.IconWebTypescript width={48} height={48} />,
    },
  ],
  Frameworks: [
    {
      title: 'TensorFlow',
      icon: <Icons.IconTensorflow width={48} height={48} />,
    },
    {
      title: 'PyTorch',
      icon: <Icons.IconPytorch width={48} height={48} />,
    },
    {
      title: 'SciKit-Learn',
      icon: <Icons.IconSimpleiconsTeam width={64} height={64} />,
    },
    {
      title: 'SciPy',
      icon: <Icons.IconScipy width={48} height={48} />,
    },
    {
      title: 'Darknet',
      icon: <Icons.IconDarknet width={64} height={29.3} />,
    },
    {
      title: 'spaCy',
    },
    {
      title: 'Yii/Yii2',
      icon: <Icons.IconYYii width={64} height={29.3} />,
    },
    {
      title: 'Yii2',
      icon: <Icons.IconYYii width={25} height={29.3} />,
    },
    {
      title: 'Ruby on Rails',
      icon: <Icons.IconWebRubyOnRails width={76} height={48} />,
    },
    {
      title: 'Laravel',
      icon: <Icons.IconLaravel width={52} height={52} />,
    },
    {
      title: 'Symphony',
    },
    {
      title: 'React',
      icon: <Icons.IconReact width={54} height={48} />,
    },
    {
      title: 'Angular',
      icon: <Icons.IconAngular width={45} height={48} />,
    },
    {
      title: 'Android Architecture Components',
      icon: <Icons.IconAndroid width={50} height={48} />,
    },
    {
      title: 'Firebase',
      icon: <Icons.IconFirebase width={50} height={50} />,
    },
    {
      title: 'Material Design',
      icon: <Icons.IconMaterialDesign width={48} height={48} />,
    },
    {
      title: 'Jetpack Compose',
      icon: <Icons.IconJetpack width={43} height={48} />,
    },
    {
      title: 'Ruby On Rail',
      icon: <Icons.IconRuby width={48} height={48} />,
    },
    {
      title: 'Spring',
    },
  ],
  'Cloud Platforms': [
    {
      title: 'Amazon Web Services',
      icon: <Icons.IconAmazon width={66} height={40} />,
    },
    {
      title: 'Google Cloud Platform',
      icon: <Icons.IconGoogleCloud width={48} height={48} />,
    },
    {
      title: 'GCP (Google Cloud Platform)',
      icon: <Icons.IconGoogle width={55} height={48} />,
    },
    {
      title: 'Microsoft Azure',
      icon: <Icons.IconMicrosoft width={62} height={48} />,
    },
    {
      title: 'Firebase',
      icon: <Icons.IconFirebase width={50} height={50} />,
    },
  ],
  DBMS: [
    {
      title: 'MS SQL',
      icon: <Icons.IconMssql width={48} height={53} />,
    },
    {
      title: 'PostgreSQL',
      icon: <Icons.IconPostgreSQL width={48} height={48} />,
    },
    {
      title: 'MySQL',
      icon: <Icons.IconMysql width={48} height={48} />,
    },
    {
      title: 'MongoDB',
      icon: <Icons.IconMongoDB width={48} height={55} />,
    },
    {
      title: 'Elasticsearch',
      icon: <Icons.IconElastic width={48} height={55} />,
    },
    {
      title: 'Postgresql',
      icon: <Icons.IconPostgreSQL width={48} height={48} />,
    },
  ],
  Visualization: [
    {
      title: 'Seaborn',
      icon: <Icons.IconSeaborn width={48} height={48} />,
    },
    {
      title: 'Pillow',
      icon: <Icons.IconPillow width={53} height={48} />,
    },
    {
      title: 'Matplotlib',
      icon: <Icons.IconMatplotlib width={48} height={48} />,
    },
    {
      title: 'Keras',
      icon: <Icons.IconKeras width={48} height={48} />,
    },
    {
      title: 'Fastai',
      icon: <Icons.IconFastai width={48} height={48} />,
    },
  ],
  Another: [
    {
      title: 'N/A',
    },
    {
      title: 'Combine',
    },
    {
      title: 'MVVM + Coordinator',
    },
    {
      title: 'Integration with the client’s Salesforce organization',
    },
  ],
  'E-Commerce platforms': [
    {
      title: 'Magento',
      icon: <Icons.IconMagento width={41} height={48} />,
    },
    {
      title: 'Shopware',
    },
    {
      title: 'Spreker',
    },
    {
      title: 'SFCC',
    },
  ],
  Libraries: [
    {
      title: 'Volley',
      icon: <Icons.IconVolley width={48} height={48} />,
    },
    {
      title: 'Picasso',
      icon: <Icons.IconPicasso width={81} height={48} />,
    },
    {
      title: 'OkHttp',
      icon: <Icons.IconOkHttp width={48} height={48} />,
    },
    {
      title: 'Room',
    },
    {
      title: 'Dagger',
    },
    {
      title: 'RxJava',
      icon: <Icons.IconRxJava width={50} height={48} />,
    },
    {
      title: 'EventBus',
      icon: <Icons.IconEventBus width={44} height={48} />,
    },
    {
      title: 'Butter Knife',
      icon: <Icons.IconButterKnife width={48} height={48} />,
    },
    {
      title: 'LeakCanary',
      icon: <Icons.IconLeakCanary width={48} height={48} />,
    },
    {
      title: 'Timber',
    },
  ],
  Databases: [
    {
      title: 'MySQL',
      icon: <Icons.IconMysql width={48} height={48} />,
    },
    {
      title: 'MongoDB',
      icon: <Icons.IconMongoDB width={48} height={55} />,
    },
    {
      title: 'PostgreSQL',
      icon: <Icons.IconPostgreSQL width={48} height={48} />,
    },
    {
      title: 'Percona',
    },
    {
      title: 'MariaDB',
      icon: <Icons.IconMariaDB width={60} height={60} />,
    },
    {
      title: 'Oracle',
    },
    {
      title: 'MS SQL',
      icon: <Icons.IconMssql width={48} height={53} />,
    },
    {
      title: 'SQLite',
      icon: <Icons.IconSQLite width={43} height={48} />,
    },
    {
      title: 'Realm',
      icon: <Icons.IconRealm width={48} height={48} />,
    },
  ],
  Mobile: [
    {
      title: 'Kotlin (Android)',
      icon: <Icons.IconKotlin width={46} height={46} />,
    },
    {
      title: 'Swift (iOS)',
      icon: <Icons.IconSwift width={48} height={48} />,
    },
  ],
  'Cloud Providers': [
    {
      title: 'AWS',
      icon: <Icons.IconAws width={67} height={40} />,
    },
    {
      title: 'Google Cloud Platform',
      icon: <Icons.IconGoogle width={53} height={48} />,
    },
    {
      title: 'Microsoft Azure',
      icon: <Icons.IconAzure width={72} height={48} />,
    },
    {
      title: 'DigitalOcean',
      icon: <Icons.IconDigitalOcean width={48} height={48} />,
    },
    {
      title: 'Any private cloud',
    },
  ],
  'Microservices and Containers': [
    {
      title: 'Kubernetes',
    },
    {
      title: 'Rancher',
    },
    {
      title: 'Docker Swarm',
    },
    {
      title: 'Docker Compose',
    },
  ],
  'CI/CD': [
    {
      title: 'Jenkins',
      icon: <Icons.IconWebJenkins width={44} height={48} />,
    },
    {
      title: 'Gitlab',
      icon: <Icons.IconGitlab width={44} height={48} />,
    },
    {
      title: 'Github',
      icon: <Icons.IconGithub width={44} height={48} />,
    },
    {
      title: 'Teamcity',
    },
    {
      title: 'Circle CI',
    },
    {
      title: 'Travis CI',
    },
    {
      title: 'Bitbucket Pipelines',
    },
  ],
  'Orchestration and Automation': [
    {
      title: 'Ansible',
    },
    {
      title: 'Puppet',
    },
    {
      title: 'Terraform',
    },
    {
      title: 'Packer',
    },
    {
      title: 'Consul',
    },
    {
      title: 'SQLite',
      icon: <Icons.IconSQLite width={43} height={48} />,
    },
    {
      title: 'Realm',
      icon: <Icons.IconRealm width={48} height={48} />,
    },
  ],
  'Testing tools': [
    {
      title: 'jUnit',
      icon: <Icons.IconJUnit width={48} height={48} />,
    },
    {
      title: 'Mockito',
      icon: <Icons.IconMockito width={83} height={48} />,
    },
    {
      title: 'Robolectric',
      icon: <Icons.IconRobolectric width={59.8} height={48} />,
    },
  ],
  Database: [
    {
      title: 'PostgreSQL',
      icon: <Icons.IconPostgreSQL width={58} height={58} />,
    },
    {
      title: 'MongoDB',
      icon: <Icons.IconMongoDB width={58} height={58} />,
    },
    {
      title: 'MariaDB',
      icon: <Icons.IconMariaDb width={60} height={60} />,
    },
    {
      title: 'AWS DynamoDB',
      icon: <Icons.IconAWSDynamoDB width={59} height={59} />,
    },
    {
      title: 'Dynamo DB',
      icon: <Icons.IconAWSDynamoDB width={59} height={59} />,
    },
  ],
  'Cloud storage': [
    {
      title: 'AWS',
      icon: <Icons.IconAws width={67} height={48} />,
    },
    {
      title: 'Azure',
      icon: <Icons.IconAzure width={72} height={48} />,
    },
    {
      title: 'Google Cloud Platform',
      icon: <Icons.IconGoogle width={53} height={48} />,
    },
    {
      title: 'GCP',
      icon: <Icons.IconGoogle width={53} height={48} />,
    },
    {
      title: 'Heroku',
      icon: <Icons.IconHeroku width={48} height={48} />,
    },
    {
      title: 'DigitalOcean',
      icon: <Icons.IconDigitalOcean width={48} height={48} />,
    },
  ],
  CMS: [
    {
      title: 'Shopify',
      icon: <Icons.IconShopify width={42} height={48} />,
    },
    {
      title: 'WordPress',
      icon: <Icons.IconWordpress width={48} height={48} />,
    },
    {
      title: 'Moodle',
      icon: <Icons.IconMoodle width={56} height={56} />,
    },
    {
      title: 'Strapi',
      icon: <Icons.IconStrapi width={50} height={49.2} />,
    },
  ],
  'Manual testing': [
    {
      title: 'jMeter',
      icon: <Icons.IconJMater width={32} height={62} />,
    },
    {
      title: 'Postman',
      icon: <Icons.IconPostman width={57} height={57} />,
    },
    {
      title: 'Swagger',
      icon: <Icons.IconSwagger width={57} height={57} />,
    },
    {
      title: 'Charles Proxy',
    },
    {
      title: 'Firebase',
      icon: <Icons.IconFirebase width={50} height={50} />,
    },
    {
      title: 'TestRail',
      icon: <Icons.IconTestRail width={46} height={56} />,
    },
    {
      title: 'xCode',
      icon: <Icons.IconXCode width={47} height={47} />,
    },
    {
      title: 'TestFlight',
      icon: <Icons.IconTestFlight width={64} height={64} />,
    },
    {
      title: 'Proxyman',
      icon: <Icons.IconProxyman width={55} height={55} />,
    },
    {
      title: 'App Center',
      icon: <Icons.IconAppcenter width={55} height={55} />,
    },
    {
      title: 'Qase',
      icon: <Icons.IconQase width={48} height={48} />,
    },
    {
      title: 'X-RAY',
      icon: <Icons.IconXRay width={61} height={61} />,
    },
    {
      title: 'BrowserStack',
      icon: <Icons.IconBrowserstack width={57} height={57} />,
    },
    {
      title: 'MySQL',
      icon: <Icons.IconMysql width={51} height={71} />,
    },
    {
      title: 'PostgresSQL',
      icon: <Icons.IconPostgreSQL width={59} height={59} />,
    },
    {
      title: 'OWASP Zed Attack Proxy (ZAP)',
      icon: <Icons.IconProxyZap width={55} height={55} />,
    },
  ],
  'Automation testing': [
    {
      title: 'Java',
      icon: <Icons.IconJava width={50} height={50} />,
    },
    {
      title: 'Selenium',
      icon: <Icons.IconSelenium width={50} height={50} />,
    },
    {
      title: 'Selenide',
      icon: <Icons.IconSelenide width={142} height={47} />,
    },
    {
      title: 'Robot Framework',
      icon: <Icons.IconRobotFramework width={68} height={68} />,
    },
    {
      title: 'JUnit 5',
      icon: <Icons.IconJUnit width={72} height={48} />,
    },
    {
      title: 'Maven',
      icon: <Icons.IconMaven width={76} height={76} />,
    },
    {
      title: 'Allure Report',
      icon: <Icons.IconAllureReport width={46} height={46} />,
    },
    {
      title: 'Playwright',
      icon: <Icons.IconPlaywright width={64} height={64} />,
    },
    {
      title: 'Cypress IO',
      icon: <Icons.IconCypress width={106} height={43} />,
    },
    {
      title: 'Postman',
      icon: <Icons.IconPostmanQA width={57} height={57} />,
    },
    {
      title: 'Appium',
      icon: <Icons.IconAppium width={48} height={48} />,
    },
    {
      title: 'RESTinstance',
    },
  ],
  'Some of the tools we use include:': [
    {
      title: 'Blender',
      icon: <Icons.IconBlender3D width={48} height={48} />,
    },
    {
      title: 'Maya',
      icon: <Icons.IconMaya3D width={48} height={48} />,
    },
    {
      title: 'Houdini',
      icon: <Icons.IconHoudini width={48} height={48} />,
    },
    {
      title: 'Zbrush',
      icon: <Icons.IconZbrush width={48} height={48} />,
    },
    {
      title: 'Fusion 360',
      icon: <Icons.IconFusion width={34} height={48} />,
    },
    {
      title: 'Substance painter',
      icon: <Icons.IconSubPainter width={50} height={48} />,
    },
    {
      title: 'Substance designer',
      icon: <Icons.IconSubDesigner width={59} height={48} />,
    },
    {
      title: 'Unity',
      icon: <Icons.IconUnity width={47} height={48} />,
    },
    {
      title: 'Unreal',
      icon: <Icons.IconUnreal width={48} height={48} />,
    },
    {
      title: 'Adobe after effects',
      icon: <Icons.IconAdobe width={48} height={48} />,
    },
    {
      title: 'Davinci resolve',
      icon: <Icons.IconDavinci width={48} height={48} />,
    },
    {
      title: 'Natron',
      icon: <Icons.IconNatron width={54} height={48} />,
    },
  ],
  'Front-end technologies': [
    {
      title: 'HTML, CSS',
    },
  ],
  'Back-end technologies': [
    {
      title: 'PHP, Laravel',
    },
  ],
  'Designers’ instruments': [
    {
      title: 'Figma',
    },
    {
      title: 'Adobe Illustrator',
    },
    {
      title: 'Adobe Photoshop',
    },
  ],
  'AWS Cost Explorer': [
    {
      title: 'Visualize, understand, and manage AWS costs and usage over time',
    },
  ],
  'AWS Budgets': [
    {
      title: 'AWS Budgets lets you set custom cost and usage budgets that alert '
      + 'you when your budget thresholds are exceeded',
    },
  ],
  'AWS Budget Reports': [
    {
      title: 'Preparing diverse reports regarding expenses, forecasts, etc.',
    },
  ],
  'AWS Cost Anomaly Detection': [
    {
      title: 'Automated cost anomaly detection and root cause analysis',
    },
  ],
};

const getTechnologies = (blocksNames: TechnologiesNamesType, isShortKeys = false) => {
  const keys = Object.keys(blocksNames);
  let replacedObj;

  const technologyObj = Object.keys(technologies)
    .filter((key: string) => keys.includes(key))
    .reduce((obj: ITechnologies, key: string) => {
      const compareFn = (a: ITechnology, b: ITechnology) => ((
        blocksNames[key].indexOf(a.title) - blocksNames[key].indexOf(b.title)));

      const filteredValues = technologies[key]
        .filter(({ title }) => blocksNames[key].includes(title))
        .sort(compareFn);

      return ({
        ...obj,
        [key]: filteredValues,
      });
    }, {});

  if (isShortKeys) {
    const {
      'Backend development': backendDeletedKey,
      'Frontend development': frontendDeletedKey,
      ...rest
    } = technologyObj;
    replacedObj = { Backend: backendDeletedKey, Frontend: frontendDeletedKey, ...rest };
  }

  return replacedObj || technologyObj;
};

export const getTechnologiesBooking = (blocksNames: TechnologiesNamesType) => {
  const newObj: Record<string, ITechnology[]> = {};
  const listTech:ITechnology[] = [];
  Object.values(technologies).forEach((item) => listTech.push(...item));
  Object.keys(blocksNames).forEach((item) => {
    const newArray:ITechnology[] = [];
    blocksNames[item].forEach((el) => {
      const indexEl = listTech.findIndex((itemTech) => itemTech.title === el);
      if (indexEl !== -1) {
        newArray.push(listTech[indexEl]);
      }
    });

    newObj[item] = [...newArray];
  });
  return newObj;
};

export default getTechnologies;
