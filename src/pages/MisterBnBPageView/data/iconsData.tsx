import Icon from '../../../assets/icon';
import { IIconsContentItem } from '../../../components/IconsContent/interfaces/IIconsContent';

const iconsData: IIconsContentItem[] = [
  {
    id: 1,
    title: '900K+ LGBTQ members',
    icon: <Icon.IconResultsMisterBnB1 className="w-[60px] h-[60px] screen-md:w-[48px] screen-md:h-[48px]" />,
  },
  {
    id: 2,
    title: 'MisterB&B was called the "gay Airbnb" by Forbes',
    icon: <Icon.IconResultsMisterBnB2 className="w-[60px] h-[60px] screen-md:w-[48px] screen-md:h-[48px]" />,
  },
  {
    id: 3,
    title: '1 million accommodations in 200 countries',
    icon: <Icon.IconResultsMisterBnB3 className="w-[60px] h-[60px] screen-md:w-[48px] screen-md:h-[48px]" />,
  },
  {
    id: 4,
    title: 'MisterB&B is considered the largest gay hotelier in the world',
    icon: <Icon.IconResultsMisterBnB4 className="w-[60px] h-[60px] screen-md:w-[48px] screen-md:h-[48px]" />,
  },
];

export default iconsData;
