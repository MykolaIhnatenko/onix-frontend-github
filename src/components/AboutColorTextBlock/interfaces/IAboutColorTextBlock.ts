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
  classes?: {
    containerColorBlock?: string;
    titleColorBox?: string;
    contentBox?: string;
    textBlack?: string;
    textGray?: string;
    secondBlock?: string;
  }
}
