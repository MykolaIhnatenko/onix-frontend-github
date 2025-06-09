export default interface ITechnologies {
  [key: string]: Array<{
    title: string;
    icon?: React.ReactNode;
  }>;
}

interface ITechnologiesDataClasses {
  technology?: string;
  keyTitle?: string;
  technologiesList?: string;
  item?: string;
  itemHover?: string;
  icon?: string;
  iconTitle?: string;
}

export interface ITechnologiesData {
  technologies: ITechnologies,
  noShowIcon?: boolean,
  withoutComma?: boolean;
  classes?: ITechnologiesDataClasses
}

export interface ITechnologiesBlock {
  pageTitle?: React.ReactNode,
  subTitle?: React.ReactNode,
  technologies: ITechnologies,
  noShowIcon?: boolean;
  titleBlock?: string;
  titleDesc?: string | React.ReactNode;
  withoutComma?: boolean;
  classes?: {
    container?: string;
    sectionTitle?: string;
    blockTitle?: string;
    blockTitleText?: string;
    blockTitleDesc?: string;
    sectionSubTitle?: string;
    technologies?: ITechnologiesDataClasses;
  }
}

export interface ITechnologiesBlocksData {
  pageTitle: React.ReactNode,
  subTitle?: React.ReactNode,
}

export interface ITechnology {
  title: string;
  icon?: React.ReactNode;
}
