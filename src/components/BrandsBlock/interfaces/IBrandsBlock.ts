export interface IClasses {
  slider?: string,
  innerSlider?: string,
  sliderCard?: string,
  brand?: string,
  projectBlock?: string,
  paginationClasses?: {
    pagination?: string,
    pageItem?: string,
    activePageItem?: string,
  }
}
export interface IBrandsBlock {
  slider?: boolean,
  brandsBlockBlack?: boolean,
  brandsList?: Array<JSX.Element[]>,
  classes?: IClasses,
}

export type DirectionType = 0 | 1 | -1;

export interface IBrandsBlockPagination {
  activeId: number,
  setActiveId: ([page, direction]: [number, number[]]) => void,
  directionSlider: number[],
  classes?: {
    pagination?: string,
    pageItem?: string,
    activePageItem?: string,
  }
}

export interface IBrand {
  Item: JSX.Element,
  index: number,
  classes?: string,
}

export interface IBrandSlider {
  projectList: Array<JSX.Element[]>,
  typeSlider?: DirectionType[];
  classes?: IClasses,
}
