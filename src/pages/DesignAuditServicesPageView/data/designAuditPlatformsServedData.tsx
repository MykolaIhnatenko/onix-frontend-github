import Icons from '../../../assets/icon';
import { IPlatformsServedData } from 'components/PlatformsServed/interfaces/IPlatformsServed';

const designAuditPlatformsServedData: IPlatformsServedData = {
  title: 'Design Tools We Use',
  text: `Our digital product design company uses various design and
    management tools to create exceptional designs and manage projects
    efficiently.`,
  content: [
    {
      id: 1,
      itemTitle: 'Some of the tools we use include :',
      itemContent: [
        {
          id: 1,
          itemIconTitle: 'Figma',
          icon: <Icons.IconDesignPlatforms1 />,
        },
        {
          id: 2,
          itemIconTitle: 'Illustrator',
          icon: <Icons.IconDesignPlatforms2 />,
        },
        {
          id: 3,
          itemIconTitle: 'After effects',
          icon: <Icons.IconDesignPlatforms3 />,
        },
      ],
    },
  ],
};

export default designAuditPlatformsServedData;
