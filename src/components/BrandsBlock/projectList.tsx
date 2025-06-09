import Icons from '../../assets/icon';

const iconStyles = `flex-[1_1_100%] w-[100px] h-[42px] text-black 
  min-360:w-[156px] min-360:h-[62px] min-lg:w-[150px] min-lg:h-[62px]
  min-xl:w-[180px] min-xl:h-[74px] min-xxl:w-[210px] min-xxl:h-[85px]
  min-xxxl:w-[240px] min-xxxl:h-[96px]`;

const projectList: Array<JSX.Element[]> = [
  [
    <Icons.IconAdoric className={iconStyles} />,
    <Icons.IconLearningPool className={iconStyles} />,
    <Icons.IconImpersa className={iconStyles} />,
    <Icons.IconMisterBnb className={iconStyles} />,
    <Icons.IconJsa className={iconStyles} />,
    <Icons.IconDuscholux className={iconStyles} />,
  ],
  [
    <Icons.IconHaas className={iconStyles} />,
    <Icons.IconBetterMe className={iconStyles} />,
    <Icons.IconMiPaddle className={iconStyles} />,
    <Icons.IconRoi className={iconStyles} />,
    <Icons.IconProjectX className={iconStyles} />,
    <Icons.IconClubHouse className={iconStyles} />,
  ],
  [
    <Icons.IconPhlex className={iconStyles} />,
    <Icons.IconInner className={iconStyles} />,
    <Icons.IconColorado className={iconStyles} />,
  ],
];

export const whiteProjectList: Array<JSX.Element[]> = [
  [
    <Icons.IconAdoric className={`${iconStyles} !text-white`} />,
    <Icons.IconLearningPool className={`${iconStyles} !text-white`} />,
    <Icons.IconImpersa className={`${iconStyles} !text-white`} />,
    <Icons.IconMisterBnb className={`${iconStyles} !text-white`} />,
    <Icons.IconJsa className={`${iconStyles} !text-white`} />,
    <Icons.IconDuscholux className={`${iconStyles} !text-white`} />,
  ],
  [
    <Icons.IconHaas className={`${iconStyles} !text-white`} />,
    <Icons.IconBetterMeWhite className={`${iconStyles} !text-white`} />,
    <Icons.IconMiPaddleWhite className={`${iconStyles} !text-white`} />,
    <Icons.IconRoi className={`${iconStyles} !text-white`} />,
    <Icons.IconProjectXWhite className={`${iconStyles} !text-white`} />,
    <Icons.IconClubHouse className={`${iconStyles} !text-white`} />,
  ],
  [
    <Icons.IconInner className={`${iconStyles} !text-white`} />,
    <Icons.IconColorado className={`${iconStyles} !text-white`} />,
    <Icons.IconPhlexWhite className={`${iconStyles} !text-white`} />,
  ],
];

export default projectList;

const iconStylesAdoric = `text-black min-360:w-[120px] min-360:h-[62px]
  min-lg:w-[150px] min-lg:h-[62px] min-xl:w-[228px] min-xl:h-[120px]
  min-xxl:w-[228px] min-xxl:h-[120px] min-xxxl:w-[228px] min-xxxl:h-[120px]`;

export const projectListAdoric: Array<JSX.Element[]> = [
  [
    <Icons.IconPampers className={iconStylesAdoric} />,
    <Icons.IconTimberland className={iconStylesAdoric} />,
    <Icons.IconXiaomi className={iconStylesAdoric} />,
    <Icons.IconGroupon className={iconStylesAdoric} />,
    <Icons.IconPG className={iconStylesAdoric} />,
  ],
  [
    <Icons.IconWix className={iconStylesAdoric} />,
    <Icons.IconNautica className={iconStylesAdoric} />,
    <Icons.IconPhilipMoris className={iconStylesAdoric} />,
    <Icons.IconToyota className={iconStylesAdoric} />,
    <Icons.IconFila className={iconStylesAdoric} />,
  ],
];

export const projectListAdoricSlider: Array<JSX.Element[]> = [
  [
    <Icons.IconPampers className={iconStyles} />,
    <Icons.IconTimberland className={iconStyles} />,
    <Icons.IconXiaomi className={iconStyles} />,
    <Icons.IconGroupon className={iconStyles} />,
    <Icons.IconPG className={iconStyles} />,
    <Icons.IconWix className={iconStyles} />,
  ],
  [
    <Icons.IconNautica className={iconStyles} />,
    <Icons.IconPhilipMoris className={iconStyles} />,
    <Icons.IconToyota className={iconStyles} />,
    <Icons.IconFila className={iconStyles} />,
  ],
];
