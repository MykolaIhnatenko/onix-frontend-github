import { IIconsContentItem } from '../../../components/IconsContent/interfaces/IIconsContent';
import Icon from '../../../assets/icon';

const iconContentData: IIconsContentItem[] = [
  {
    id: 1,
    title: 'Web',
    icon: <Icon.IconQAWeb
      className={`w-[144px] h-[144px] screen-lg:max-w-[126px] screen-lg:max-h-[126px]
        screen-md:w-[132px] screen-md:h-[132px]`}
    />,
    lessIcon: <Icon.IconQAWebLess className={`w-[144px] h-[144px] screen-lg:max-w-[126px] screen-lg:max-h-[126px]
       screen-md:w-[132px] screen-md:h-[132px]`}
    />,
  },
  {
    id: 2,
    title: 'Mobile',
    icon: <Icon.IconQAMobile className={`w-[144px] h-[144px] screen-lg:max-w-[126px] screen-lg:max-h-[126px]
       screen-md:w-[132px] screen-md:h-[132px]`}
    />,
    lessIcon: <Icon.IconQAMobileLess className={`w-[144px] h-[144px] screen-lg:max-w-[126px] screen-lg:max-h-[126px]
       screen-md:w-[132px] screen-md:h-[132px]`}
    />,
  },
  {
    id: 3,
    title: 'Desktop',
    icon: <Icon.IconQADesktop className={`w-[144px] h-[144px] screen-lg:max-w-[126px] screen-lg:max-h-[126px]
       screen-md:w-[132px] screen-md:h-[132px]`}
    />,
    lessIcon: <Icon.IconQADesktopLess className={`w-[144px] h-[144px] screen-lg:max-w-[126px] screen-lg:max-h-[126px]
       screen-md:w-[132px] screen-md:h-[132px]`}
    />,
  },
  {
    id: 4,
    title: 'Cloud',
    icon: <Icon.IconQACloud className={`w-[144px] h-[144px] screen-lg:max-w-[126px] screen-lg:max-h-[126px]
       screen-md:w-[132px] screen-md:h-[132px]`}
    />,
    lessIcon: <Icon.IconQACloudLess className={`w-[144px] h-[144px] screen-lg:max-w-[126px] screen-lg:max-h-[126px]
       screen-md:w-[132px] screen-md:h-[132px]`}
    />,
  },
];

export default iconContentData;
