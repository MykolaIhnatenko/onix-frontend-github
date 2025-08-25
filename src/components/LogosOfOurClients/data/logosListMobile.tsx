import Icon from '../../../assets/icon';

const iconStyles = 'w-[200px] h-[96px] screen-xl:w-[146px] screen-xl:h-[70px]';

const logosListMobile: Array<JSX.Element[]> = [
  [
    <Icon.IconLogoAdoric className={iconStyles} />,
    <Icon.IconLogoLearningpool className={iconStyles} />,
    <Icon.IconLogoImpesa className={iconStyles} />,
    <Icon.IconLogoMisterbb className={iconStyles} />,
    <Icon.IconLogoJsa className={iconStyles} />,
    <Icon.IconLogoColoradosports className={iconStyles} />,
  ],
  [
    <Icon.IconLogoPhlex className={iconStyles} />,
    <Icon.IconLogoDuscholux className={iconStyles} />,
    <Icon.IconLogoMipaddle className={iconStyles} />,
    <Icon.IconLogoRoi className={iconStyles} />,
    <Icon.IconLogoMifos className={iconStyles} />,
    <Icon.IconLogoClubhouse className={iconStyles} />,
  ],
  [
    <Icon.IconLogoProjectx className={iconStyles} />,
    <Icon.IconLogoHaas className={iconStyles} />,
    <Icon.IconLogoBetterme className={iconStyles} />,
    <Icon.IconLogoInner className={iconStyles} />,
  ],
];

export default logosListMobile;
