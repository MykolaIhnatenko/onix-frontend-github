import { IStickySliderData } from './IStickySliderItem';

export default interface IStickySlider {
  upTitle?: string;
  blockTitle: string;
  blockText?: string;
  secondBlockText?: string;
  data: IStickySliderData[];
  classes?: {
    container?: string;
    upTitle?: string;
    blockTitle?: string;
    blockText?: string;
    secondBlockText?: string;
    content?: string;
    item?: string;
    itemTitleContainer?: string;
    itemNumber?: string;
    itemTitle?: string;
    itemContent?: string;
    itemText?: string;
    itemImage?: string;
    imageContainer?: string;
    image?: string;
  };
}
