import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import { ICardSliderItem } from '../../../components/CardSlider/interfaces/ICardSlider';
import { CalculateMachineLVariant } from '../../../constants/enums';

interface ICalculateMachineL {
  pageTitle: ReactNode;
  pageText?: ReactNode;
  background?: StaticImageData;
  data: ICardSliderItem[];
  variant?: CalculateMachineLVariant;
}

export default ICalculateMachineL;
