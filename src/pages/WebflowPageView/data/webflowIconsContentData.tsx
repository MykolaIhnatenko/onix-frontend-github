import Icon from '../../../assets/icon';

const webflowIconsContentData = [
  {
    id: 1,
    title: (
      <>
        Custom landing
        <br className="screen-lg:hidden" />
        {' '}
        page design
      </>
    ),
    icon: <Icon.IconWebflowIconsContent1 className={`!w-[60px] !h-[60px] screen-lg:!w-[45px] screen-lg:!h-[45px]
                screen-md:!w-[45px] screen-md:!h-[45px]`}
    />,
  },
  {
    id: 2,
    title: (
      <>
        Webflow website
        <br className="screen-lg:hidden" />
        {' '}
        development
      </>
    ),
    icon: <Icon.IconWebflowIconsContent4 className={`!w-[60px] !h-[60px] screen-lg:!w-[45px] screen-lg:!h-[45px]
                screen-md:!w-[45px] screen-md:!h-[45px]`}
    />,
  },
  {
    id: 3,
    title: (
      <>
        Creative
        <br />
        {' '}
        animations
      </>
    ),
    icon: <Icon.IconWebflowIconsContent2 className={`!w-[60px] !h-[60px] screen-lg:!w-[45px] screen-lg:!h-[45px]
                screen-md:!w-[45px] screen-md:!h-[45px]`}
    />,
  },
  {
    id: 4,
    title: 'Engaging and seamless interactions',
    icon: <Icon.IconWebflowIconsContent3 className={`!w-[60px] !h-[60px] screen-lg:!w-[45px] screen-lg:!h-[45px]
                screen-md:!w-[45px] screen-md:!h-[45px]`}
    />,
  },
];

export default webflowIconsContentData;
