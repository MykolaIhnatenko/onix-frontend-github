import Link from 'next/link';

import ImageComponent from '../../../components/Image/Image';
import { IOurInsightsBlockItem } from '../interfaces/IOnlineSchedulingAndBookingView';

import styles from '../sass/OurInsightsBlockItem.module.scss';

function OurInsightsBlockItem({
  title, img, alt, url,
}:IOurInsightsBlockItem) {
  return (
    <div className={`d-flex d-col ${styles.container}`}>
      <ImageComponent
        src={img}
        alt={alt}
        height={298}
        width={420}
      />
      <div className={styles.linkBlock}>
        <span className={styles.title}>
          <Link href={url || ''}>
            {title}
          </Link>
        </span>
      </div>
    </div>
  );
}

export default OurInsightsBlockItem;
