import { useState } from 'react';

import { useAppSelector } from 'hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import imageInfoBlockData from '../data/imageInfoBlockData';

import styles from '../sass/ProductDiscoveryMainSection.module.scss';

function ProductDiscoveryImageBlock() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useAppSelector((state) => state?.app);
  const [activeCard, setActiveCard] = useState(1);

  const activeCardHandler = (id:number) => setActiveCard(id);

  const sizeTablet = isMDDevice || isSMDevice || isXSDevice;

  return (
    <div className={styles.contentContainer}>
      {imageInfoBlockData.length > 0 && imageInfoBlockData.map(({
        id, number, image, imageTablet, title: titleCard,
      }, index) => (
        <div
          key={[number, index].join('_')}
          className={`${styles.card} ${activeCard === id ? styles.activeCard : ''}`}
          onClick={() => activeCardHandler(id)}
          onKeyDown={() => activeCardHandler(id)}
          onMouseEnter={() => activeCardHandler(id)}
          role="button"
          tabIndex={0}
        >
          <span className={styles.numberBlock}>{number}</span>
          <h3 className={styles.titleCard}>{titleCard}</h3>
          <ImageComponent
            src={sizeTablet ? imageTablet : image}
            alt="imageCard"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
            priority
            className={`${styles.cardImage} ${activeCard === id ? styles.activeCardImage : ''}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductDiscoveryImageBlock;
