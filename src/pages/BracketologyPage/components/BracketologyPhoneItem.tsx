import { IBracketologyPhoneItem } from '../interfaces/IBracketologyPhoneItem';
import ImageComponent from '../../../components/Image/Image';

import styles from '../sass/BracketologyPhoneItem.module.scss';

function BracketologyPhoneItem({ imgSrc, children, itemClass }: IBracketologyPhoneItem) {
  return (
    <div className={`${styles.block} ${itemClass ? styles[itemClass] : ''}`}>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.phone}>
        <ImageComponent
          src={imgSrc}
          width={360}
          height={732}
          alt="phone"
          sizes="100vw"
        />
      </div>
    </div>
  );
}

export default BracketologyPhoneItem;
