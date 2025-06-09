import { AboutColorTextBlockVariant } from '../../../constants/enums';

export default interface IAboutColorTextBlock {
  title: string;
  afterTextGray?: string;
  text: string;
  textGray?: string;
  text2?: string;
  textGray2?: string;
  revertBlock?: boolean;
  textSecondBlock?: string;
  textGraySecondBlock?: string;
  textThirtyBlock?: string;
  textGrayThirtyBlock?: string;
  variant?: AboutColorTextBlockVariant;
}
