import { useSelector } from 'react-redux';

import ImageComponent from '../../../../components/Image/Image';
import Icon from '../../../../assets/icon';
import IStore from '../../../../store/interfaces/IStore';
import { IApp } from '../../../../store/app/interfaces/IApp';

import HeaderBg from '@/images/BstevrCaseSudy/img_header.webp';
import HeaderBgTablet from '@/images/BstevrCaseSudy/img_headerTablet.webp';
import styles from '../sass/bstevrHeader.module.scss';

function BstevrHeader() {
  const {
    screenSizes: {
      isLGDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  return (
    <section className={styles.header}>
      <ImageComponent
        src={(isLGDevice || isMDDevice) ? HeaderBgTablet : HeaderBg}
        alt="BsTevr Case Study"
        fill
        sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
        priority
      />
      <h1 className={styles.offer}>
        BSTEVR — NFL game simulator  development
      </h1>
      <div className={styles.descr}>
        <p>
          NFL games simulator and game reviews generator application development project
        </p>
      </div>
      <Icon.IconBstevrArrow className={styles.arrow} />
    </section>
  );
}

export default BstevrHeader;
