import { ITechnologiesMiniData } from '../../../components/TechnologiesMini/interfaces/ITechnologiesMini';
import Icon from '../../../assets/icon';

const iconStyles = 'w-[60px] h-[60px] screen-md:w-[40px] screen-md:h-[40px]';
const webflowTechnologiesMiniData: ITechnologiesMiniData = {
  blockTitle: 'Technologies we work with',
  data: [
    {
      id: 1,
      title: 'Webflow',
      icon: <Icon.IconWebflowTechnologies1 className={iconStyles} />,
    },
    {
      id: 2,
      title: 'Figma',
      icon: <Icon.IconWebflowTechnologies2 className={iconStyles} />,
    },
    {
      id: 3,
      title: 'Google Analytics',
      icon: <Icon.IconWebflowTechnologies3 className={iconStyles} />,
    },
    {
      id: 4,
      title: 'Hotjar',
      icon: <Icon.IconWebflowTechnologies4 className={iconStyles} />,
    },
  ],
};

export default webflowTechnologiesMiniData;
