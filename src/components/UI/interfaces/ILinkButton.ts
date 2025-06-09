import PageLinks from 'constants/PageLinks';
import { ArrowVariant } from '../../../constants/enums';

export default interface ILinkButton {
  text: string;
  styleContainer?: string;
  hasArrow?: boolean;
  path: PageLinks | string;
  arrowVariant?: ArrowVariant;
  fontSizeSmallOnMobile?: boolean;
  id?: string;
  classes?: {
    container?: string;
    content?: string;
    textContainer?: string;
    icon?: string;
  };
}
