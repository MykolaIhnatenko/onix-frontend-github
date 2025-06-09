import { StaticImageData } from 'next/image';

import { ButtonType } from '../../../constants/enums';

interface IAdvantagesBlock {
  blockTitle?: string;
  data: IAdvantagesData[];
  classes?: {
    section?: string;
    title?: string;
    content?: string;
    imageContainer?: string;
    image?: string;
  } & IAdvantagesBlockItem['classes'];
}

interface IAdvantagesImageItem {
  image?: StaticImageData;
}

export interface IAdvantagesBlockItem {
  title?: string;
  text?: string | string[];
  btnText?: string;
  idBtn?: ButtonType;
  classes?: {
    item?: string;
    itemTitle?: string;
    itemTextBlock?: string;
    itemText?: string;
    button?: string;
  };
}

export type IAdvantagesData = IAdvantagesBlockItem & IAdvantagesImageItem & {
  id: number;
};

export default IAdvantagesBlock;
