import { ReactNode } from 'react';

export default interface IAdoricBrands {
  titleBlock: string;
  title: string | ReactNode;
  brandsList?: Array<JSX.Element[]>;
  brandListSlider?: Array<JSX.Element[]>;
}
