import Icons from '../../../assets/icon';
import PageLinks from '../../../constants/PageLinks';
import IconFlagUkraine from '../../../assets/icon/ic_ukraine.svg';
import IconCircleUkraine from '../../../assets/icon/dedicatedTeamPage/ic_circle_ukraine.svg';
import IconFlagPoland from '../../../assets/icon/ic_poland.svg';
import IconCirclePoland from '../../../assets/icon/dedicatedTeamPage/ic_circle_poland.svg';
import IconFlagSlovakia from '../../../assets/icon/ic_slovakia.svg';
import IconCircleSlovakia from '../../../assets/icon/dedicatedTeamPage/ic_circle_slovakia.svg';
import IconFlagPortugal from '../../../assets/icon/ic_portugal.svg';
import IconCirclePortugal from '../../../assets/icon/dedicatedTeamPage/ic_circle_portugal.svg';

export const getFooterData = {
  services: [
    {
      id: 0,
      title: 'VR/AR Development',
      url: PageLinks.VR_AR_VIRTUAL_REALITY_AUGMENTED_REALITY_DEVELOPMENT,
    },
    {
      id: 1,
      title: 'ML Development',
      url: PageLinks.MACHINE_LEARNING_DEVELOPMENT_SERVICES,
    },
    {
      id: 2,
      title: '3D Art Services',
      url: PageLinks.ART_UNITY,
    },
    {
      id: 3,
      title: 'iOS Development',
      url: PageLinks.IOS_DEVELOPMENT,
    },
    {
      id: 4,
      title: 'Web Development',
      url: PageLinks.WEB_DESIGN_AND_DEVELOPMENT,
    },
    {
      id: 5,
      title: 'UX Audit Services',
      url: PageLinks.UX_AUDIT,
    },
  ],
  industries: [
    {
      id: 0,
      title: 'Travel',
      url: PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES,
    },
    {
      id: 1,
      title: 'Healthcare',
      url: PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES,
    },
    {
      id: 2,
      title: 'LMS',
      url: PageLinks.LMS_DEVELOPMENT_SERVICES,
    },
    {
      id: 3,
      title: 'eLearning',
      url: PageLinks.ELEARNING_DEVELOPMENT_SERVICES,
    },
    {
      id: 4,
      title: 'Sports & Fitness',
      url: PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES,
    },
    {
      id: 5,
      title: 'Fintech',
      url: PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT,
    },
  ],
  company: [
    {
      id: 0,
      title: 'The Onix Story',
      url: PageLinks.THE_ONIX_STORY,
    },
    {
      id: 1,
      title: 'About Ukraine',
      url: PageLinks.ABOUT_UKRAINE,
    },
    {
      id: 2,
      title: 'Referral Program',
      url: PageLinks.REFERRAL_PROGRAM,
    },
    {
      id: 3,
      title: 'National Holidays',
      url: PageLinks.NATIONALS_HOLIDAYS,
    },
  ],
  work: [],
  blog: [],
  'ar/vr': [
    {
      id: 0,
      title: 'VR Meeting App Development: Onix\'s Insights & Cases',
      url: PageLinks.BLOG_VIRTUAL_REALITY_MEETINGS,
    },
    {
      id: 1,
      title: 'Custom VR Training: The Guide to Create Your VR Simulation Solution',
      url: PageLinks.BLOG_VR_FOR_TRAINING,
    },
    {
      id: 2,
      title: 'How Is Virtual Reality Used In Museum Experiences?',
      url: PageLinks.BLOG_USING_VIRTUAL_REALITY_FOR_MUSEUMS,
    },
    {
      id: 3,
      title: 'VR App Development',
      url: PageLinks.BLOG_VR_APP_DEVELOPMENT,
    },
    {
      id: 4,
      title: 'Maritime VR Simulator Development: Benefits & Types',
      url: PageLinks.BLOG_DEVELOPING_MARINE_VR_SIMULATOR,
    },
    {
      id: 5,
      title: 'How AR & VR in Healthcare Enhances Medical Training?',
      url: PageLinks.BLOG_AR_VR_IN_MEDICAL_TRAINING,
    },
  ],
  ml: [
    {
      id: 0,
      title: 'Top 10 Java Machine Learning Libraries & Tools For Your Project',
      url: PageLinks.BLOG_TOP_10_JAVA_MACHINE_LEARNING_TOOLS_AND_LIBRARIES,
    },
    {
      id: 1,
      title: 'Hand Tracking and Gesture Recognition Using AI: Challenges and Applications',
      url: PageLinks.BLOG_HAND_TRACKING_AND_GESTURE_RECOGNITION_USING_AI,
    },
    {
      id: 2,
      title: 'How To Build an AI-powered Mobile App',
      url: PageLinks.BLOG_HOW_TO_BUILD_AI_POWERED_MOBILE_APP,
    },
    {
      id: 3,
      title: 'The Future of Chatbots: 10 Trends, Latest Stats & Market Size',
      url: PageLinks.BLOG_6_CHATBOT_TRENDS_THAT_ARE_BRINGING_THE_FUTURE_CLOSER,
    },
    {
      id: 4,
      title: 'Machine Learning in Ecommerce: 8 Ways ML Can Help Ecommerce Businesses',
      url: PageLinks.BLOG_ML_IN_ECOMMERCE,
    },
    {
      id: 5,
      title: 'How AI is Used in Euro 2024 & 6 Ways You Can Use It Too',
      url: PageLinks.BLOG_AI_IN_FOOTBALL,
    },
  ],
  'product development': [
    {
      id: 0,
      title: 'Super App Development Guide: Features, Trends, and Onix\'s Tips',
      url: PageLinks.BLOG_SUCCESSFUL_CASES_IN_SUPER_APPS_DEVELOPMENT,
    },
    {
      id: 1,
      title: 'QR Code for Payments: How to Implement and Why?',
      url: PageLinks.BLOG_HOW_TO_IMPLEMENT_QR_CODE_FOR_PAYMENTS,
    },
    {
      id: 2,
      title: 'Construction Application Development – A Step-by-step Guide',
      url: PageLinks.BLOG_INTRODUCTION_TO_CONSTRUCTION_APP_DEVELOPMENT,
    },
    {
      id: 3,
      title: '7 Best Software Development Models and Methodologies',
      url: PageLinks.BLOG_7_BASIC_SOFTWARE_DEVELOPMENT_MODELS_WHICH_ONE_TO_CHOOSE,
    },
    {
      id: 4,
      title: 'Ukraine: IT Outsourcing Rates and Other Reasons to Choose It',
      url: PageLinks.BLOG_WHY_ARE_OUTSOURCING_DEVELOPMENT_RATES_DIFFERENT_IN_UKRAINE,
    },
  ],
};

export const getSocialLinks = () => ([
  {
    id: 0,
    href: 'https://www.linkedin.com/company/onix-systems',
    component: <Icons.IconLinkedin width={40} height={40} />,
    label: 'Linkedin',
  },
  {
    id: 1,
    href: 'https://www.facebook.com/OnixSystemsCompany',
    component: <Icons.IconFacebook width={40} height={40} />,
    label: 'Facebook',
  },
  {
    id: 2,
    href: 'https://github.com/Onix-Systems/',
    component: <Icons.IconGithub width={40} height={40} />,
    label: 'Github',
  },
  {
    id: 3,
    href: 'https://onix-systems.medium.com/',
    component: <Icons.IconMedium width={40} height={40} />,
    label: 'Medium',
  },
  {
    id: 4,
    href: 'https://www.instagram.com/onix_systems/',
    component: <Icons.IconInstagram width={40} height={40} />,
    label: 'Instagram',
  },
]);

export const getFooterAddresses = [
  {
    flagPic: <IconFlagUkraine width={16} height={12} />,
    flagCircle: <IconCircleUkraine />,
    title: 'Ukraine',
    address: (
      <>
        Kropyvnytskyi
        <br />
        76 Tarasa Karpy Street, 25006
      </>
    ),
  },
  {
    flagPic: <IconFlagPoland width={16} height={12} />,
    flagCircle: <IconCirclePoland />,
    title: 'Poland',
    address: (
      <>
        Poznań
        <br />
        Świętego Rocha 19P, 60-142
      </>
    ),
  },
  {
    flagPic: <IconFlagSlovakia width={16} height={12} />,
    flagCircle: <IconCircleSlovakia />,
    title: 'Slovakia',
    address: (
      <>
        Bratislava
        <br />
        Tomášikova, 12570/50A
      </>
    ),
  },
  {
    flagPic: <IconFlagPortugal width={16} height={12} />,
    flagCircle: <IconCirclePortugal />,
    title: 'Portugal',
    address: (
      <>
        Albufeira
        <br />
        Beco Da Correeira 188/189, 8200-047
      </>
    ),
  },
];
