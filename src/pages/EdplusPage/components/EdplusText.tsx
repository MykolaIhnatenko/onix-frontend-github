import { EdplusTextVariant } from '../../../constants/enums';
import IEdplusText from '../interfaces/IEdplusText';

import styles from '../sass/edplusText.module.scss';

function EdplusText({ content, variant = EdplusTextVariant.TOP_MARGIN }: IEdplusText) {
  return (
    <p className={`${styles.edplusTextStyle} ${variant ? styles[variant] : ''}`}>
      {content}
    </p>
  );
}

export default EdplusText;
