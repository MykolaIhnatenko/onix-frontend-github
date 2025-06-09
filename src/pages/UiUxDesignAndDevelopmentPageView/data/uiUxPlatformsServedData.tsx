import Icons from '../../../assets/icon';
import { IPlatformsServedData } from 'components/PlatformsServed/interfaces/IPlatformsServed';

const iconStyles = `h-[60px] w-[60px] screen-lg:h-[50px]
  screen-lg:w-[50px] screen-md:h-[40px] screen-md:w-[40px]`;

const uiUxPlatformsServedData: IPlatformsServedData = {
  title: 'Designing & Management Tools We\u00A0Use',
  text: `At our UI/UX design department, we use various designing and management tools to create
    exceptional designs and manage projects efficiently. Some of the tools we use include:`,
  content: [
    {
      id: 1,
      itemTitle: 'Designing Tools',
      itemContent: [
        {
          id: 1,
          itemIconTitle: 'Figma',
          icon: <Icons.IconDesignPlatforms1 className={iconStyles} />,
        },
        {
          id: 2,
          itemIconTitle: 'Photoshop',
          icon: <Icons.IconPhotoshop className={iconStyles} />,
        },
        {
          id: 3,
          itemIconTitle: 'Illustrator',
          icon: <Icons.IconDesignPlatforms2 className={iconStyles} />,
        },
        {
          id: 4,
          itemIconTitle: 'After\u00A0effects',
          icon: <Icons.IconDesignPlatforms3 className={iconStyles} />,
        },
      ],
    },
    {
      id: 2,
      itemTitle: 'Management Tools',
      itemContent: [
        {
          id: 1,
          itemIconTitle: 'Miro',
          icon: <Icons.IconMiro className={iconStyles} />,
        },
        {
          id: 2,
          itemIconTitle: 'Jira',
          icon: <Icons.IconJira className={iconStyles} />,
        },
        {
          id: 3,
          itemIconTitle: 'Notion',
          icon: <Icons.IconNotion className={iconStyles} />,
        },
        {
          id: 4,
          itemIconTitle: 'Hydra',
          icon: <Icons.IconHydra className={`${iconStyles} !w-[145px] screen-lg:!w-[120px] screen-md:!w-[97px]`} />,
        },
      ],
    },
  ],
};

export default uiUxPlatformsServedData;
