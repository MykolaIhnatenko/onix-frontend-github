import { ButtonPathVariant, DropBlockVariant } from '../../../constants/enums';
import ICard, { ICardBlockClasses } from '../../CardsBlock/interfaces/ICardsBlock';

export default interface IContainerActiveBlocks {
  data: ICard[];
  title?: string;
  btnTitle?: string;
  disableInfoBlock?: boolean;
  titleBlock?: string;
  dropBlockBtnVariant?: ButtonPathVariant;
  dropBlockVariant?: DropBlockVariant;
  idBtn?: string;
  classes?: {
    containerBlock?: string;
    title?: string;
    cardBlock?: ICardBlockClasses;
  };
}
