import Icon from '../../../assets/icon';
import { IIconsContentItem } from '../../../components/IconsContent/interfaces/IIconsContent';

const androidAppIconsContentData: IIconsContentItem[] = [
  {
    id: 1,
    title: 'Smartphones',
    icon: <Icon.IconContentAndroidApp1
      className="w-[60px] h-[60px] screen-lg:w-[47px] screen-lg:h-[47px] screen-md:w-[47px] screen-md:h-[47px]"
    />,

  },
  {
    id: 2,
    title: 'Tablets',
    icon: <Icon.IconContentAndroidApp2
      className="w-[60px] h-[60px] screen-lg:w-[47px] screen-lg:h-[47px] screen-md:w-[47px] screen-md:h-[47px]"
    />,
  },
  {
    id: 3,
    title: 'Wearable devices',
    icon: <Icon.IconContentAndroidApp3
      className="w-[60px] h-[60px] screen-lg:w-[47px] screen-lg:h-[47px] screen-md:w-[47px] screen-md:h-[47px]"
    />,
  },
  {
    id: 4,
    title: 'Android TV',
    icon: <Icon.IconContentAndroidApp4
      className="w-[60px] h-[60px] screen-lg:w-[47px] screen-lg:h-[47px] screen-md:w-[47px] screen-md:h-[47px]"
    />,
  },
];

export default androidAppIconsContentData;
