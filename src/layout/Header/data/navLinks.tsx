import INavLink from '../interfaces/INavLink';
import Icons from '../../../assets/icon';
import PageLinks from '../../../constants/PageLinks';

const navLinks: INavLink[] = [
  {
    id: 1,
    title: 'SERVICES',
    icon: <Icons.IconChevron width={13} />,
    mobileIndex: 1,
    subMenu: [
      {
        id: 11,
        title: 'Services Overview',
        to: PageLinks.SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 1,
      },
      {
        id: 12,
        title: 'VR/AR Development',
        to: PageLinks.VR_AR_VIRTUAL_REALITY_AUGMENTED_REALITY_DEVELOPMENT,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 6,
      },
      {
        id: 13,
        title: 'Dedicated Team',
        to: PageLinks.DEDICATED_TEAM,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 11,
      },
      {
        id: 14,
        title: 'Web Development',
        to: PageLinks.WEB_DESIGN_AND_DEVELOPMENT,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 2,
      },
      {
        id: 15,
        title: '3D Art Unity',
        to: PageLinks.GAME_ART_DEVELOPMENT_SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 7,
      },
      {
        id: 16,
        title: 'Dedicated Team Calculator',
        to: PageLinks.DEDICATED_TEAM_CALCULATOR,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 12,
      },
      {
        id: 17,
        title: 'Android Development',
        to: PageLinks.ANDROID_APPLICATION_DEVELOPMENT,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 3,
      },
      {
        id: 18,
        title: 'UI/UX Design',
        to: PageLinks.UI_UX_DESIGN_AND_DEVELOPMENT,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 8,
        subMenu: [
          {
            id: 181,
            title: (
              <>
                <span>﹂</span>
                UX Audit
              </>
            ),
            to: PageLinks.UX_AUDIT,
            mobileIndex: 1,
          },
          {
            id: 182,
            title: (
              <>
                <span>﹂</span>
                Branding Design
              </>
            ),
            to: PageLinks.BRANDING_DESIGN,
            mobileIndex: 2,
          },
          {
            id: 183,
            title: (
              <>
                <span>﹂</span>
                Motion Design
              </>
            ),
            to: PageLinks.MOTION_GRAPHICS_DESIGN_SERVICES,
            mobileIndex: 3,
          },
          {
            id: 184,
            title: (
              <>
                <span>﹂</span>
                Crossplatform Design and Development
              </>
            ),
            to: PageLinks.CROSS_PLATFORM,
            mobileIndex: 4,
          },
          {
            id: 185,
            title: (
              <>
                <span>﹂</span>
                Webflow Design
              </>
            ),
            to: PageLinks.WEBFLOW_DESIGN_AND_DEVELOPMENT_SERVICES,
            mobileIndex: 5,
          },
          {
            id: 186,
            title: (
              <>
                <span>﹂</span>
                Digital Product Design
              </>
            ),
            to: PageLinks.DIGITAL_PRODUCT_DESIGN_SERVICES,
            mobileIndex: 6,
          },
        ],
      },
      {
        id: 19,
        title: 'Salesforce Development',
        to: PageLinks.SALESFORCE_DEV_SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 13,
      },
      {
        id: 110,
        title: 'iOS Development',
        to: PageLinks.IOS_DEVELOPMENT,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 4,
      },
      {
        id: 111,
        title: 'DevOps Services',
        to: PageLinks.DEVOPS_SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 9,
      },
      {
        id: 112,
        title: 'Discovery Phase',
        to: PageLinks.PRODUCT_DISCOVERY,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 14,
      },
      {
        id: 113,
        title: 'AI  Development',
        to: PageLinks.MACHINE_LEARNING_DEVELOPMENT_SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 5,
      },
      {
        id: 114,
        title: 'QA Services',
        to: PageLinks.SOFTWARE_TESTING_QA_SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 10,
      },
    ],
  },
  {
    id: 2,
    title: 'INDUSTRIES',
    icon: <Icons.IconChevron width={13} />,
    mobileIndex: 2,
    subMenu: [
      {
        id: 21,
        title: 'Industries Overview',
        to: PageLinks.INDUSTRIES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 1,
      },
      {
        id: 22,
        title: 'Online Scheduling and Booking',
        to: PageLinks.ONLINE_SCHEDULING_AND_BOOKING_SYSTEM,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 4,
      },
      {
        id: 23,
        title: 'Fitness App Development',
        to: PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 7,
      },
      {
        id: 24,
        title: 'Healthcare Software Development',
        to: PageLinks.HEALTHCARE_SOFTWARE_DEVELOPMENT_SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 2,
      },
      {
        id: 25,
        title: 'eLearning',
        to: PageLinks.ELEARNING_DEVELOPMENT_SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 5,
      },
      {
        id: 26,
        title: 'Fintech',
        to: PageLinks.FINTECH_SOFTWARE_AND_APP_DEVELOPMENT,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 8,
      },
      {
        id: 27,
        title: 'Travel Software Development',
        to: PageLinks.TRAVEL_SOFTWARE_DEVELOPMENT_SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 3,
      },
      {
        id: 28,
        title: 'LMS',
        to: PageLinks.LMS_DEVELOPMENT_SERVICES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 6,
      },
    ],
  },
  {
    id: 3,
    title: 'WORK',
    icon: <Icons.IconChevron width={13} />,
    mobileIndex: 3,
    subMenu: [
      {
        id: 31,
        title: 'Case Studies',
        to: PageLinks.CASE_STUDIES,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 1,
      },
      {
        id: 32,
        title: 'Design Portfolio',
        to: PageLinks.DESIGN_PORTFOLIO,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 2,
      },
      {
        id: 33,
        title: 'Testimonials',
        to: PageLinks.TESTIMONIALS,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 3,
      },
    ],
  },
  {
    id: 4,
    title: 'COMPANY',
    icon: <Icons.IconChevron width={13} />,
    mobileIndex: 4,
    subMenu: [
      {
        id: 41,
        title: 'Onix Story',
        to: PageLinks.THE_ONIX_STORY,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 1,
      },
      {
        id: 42,
        title: 'Careers',
        to: PageLinks.CAREERS,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 4,
      },
      {
        id: 43,
        title: 'About Ukraine',
        to: PageLinks.ABOUT_UKRAINE,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 2,
      },
      {
        id: 44,
        title: 'Referral Program',
        to: PageLinks.REFERRAL_PROGRAM,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 2,
      },
    ],
  },
  {
    id: 5,
    title: 'BLOG',
    to: PageLinks.BLOGS,
    icon: <Icons.IconChevron width={13} />,
    mobileIndex: 5,
    subMenu: [
      {
        id: 51,
        title: 'Healthcare',
        to: PageLinks.BLOGS_HEALTHCARE,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 1,
      },
      {
        id: 52,
        title: 'Travel',
        to: PageLinks.BLOGS_TRAVEL,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 2,
      },

      {
        id: 53,
        title: 'Sports & Fitness',
        to: PageLinks.BLOGS_SPORTS_AND_FITNESS,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 3,
      },
      {
        id: 54,
        title: 'AI',
        to: PageLinks.BLOGS_ARTIFICIAL_INTELLIGENCE,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 4,
      },
      {
        id: 55,
        title: 'eCommerce',
        to: PageLinks.BLOGS_ECOMMERCE,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 5,
      },
      {
        id: 56,
        title: 'VR/AR',
        to: PageLinks.BLOGS_VIRTUAL_AND_AUGMENTED_REALITY,
        icon: <Icons.IconArrowUp45 width={16} />,
        mobileIndex: 6,
      },
    ],
  },
  {
    id: 6,
    title: 'CONTACT',
    to: PageLinks.CONTACT_US,
    icon: <Icons.IconArrowUp45 width={16} />,
    mobileIndex: 6,
  },
];

export default navLinks;
