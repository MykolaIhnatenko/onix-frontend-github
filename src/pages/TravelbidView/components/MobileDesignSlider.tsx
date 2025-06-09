import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import Plx from 'react-plx';

import { LG_DEVICE } from '../../../constants/constants';
import IColumnAnimation from '../interfaces/IColumnAnimation';
import ImageComponent from 'components/Image/Image';
import ImageFirstColumnBottom from '@/images/travelbid/mobileDesignSection/img_first-column-bottom.webp';
import ImageFirstColumnTop from '@/images/travelbid/mobileDesignSection/img_first-column-top.webp';
import ImageSecondColumnBottom from '@/images/travelbid/mobileDesignSection/img_second-column-bottom.webp';
import ImageSecondColumnTop from '@/images/travelbid/mobileDesignSection/img_second-column-top.webp';
import ImageThirdColumnBottom from '@/images/travelbid/mobileDesignSection/img_third-column-bottom.webp';
import ImageThirdColumnTop from '@/images/travelbid/mobileDesignSection/img_third-column-top.webp';

import styles from '../sass/MobileDesignSlider.module.scss';

function MobileDesignSlider({ isMobile }: { isMobile: boolean }) {
  const [firstColumnAnimation, setFirstColumnAnimation] = useState<IColumnAnimation[] | []>([]);
  const [secondColumnAnimation, setSecondColumnAnimation] = useState<IColumnAnimation[] | []>([]);
  const [thirdColumnAnimation, setThirdColumnAnimation] = useState<IColumnAnimation[] | []>([]);
  const widthRef = useRef(0);

  const handleResize = () => {
    const screenHeight = window.innerHeight;
    widthRef.current = window.innerWidth;

    setFirstColumnAnimation([
      {
        start: '.startMobileDesignAnimation',
        duration: screenHeight,
        endOffset: 200,
        properties: [
          {
            startValue: -180,
            endValue: 200,
            property: 'translateY',
          },
        ],
      },
    ]);
    setSecondColumnAnimation([
      {
        start: '.startMobileDesignAnimation',
        duration: screenHeight,
        endOffset: 200,
        properties: [
          {
            startValue: 150,
            endValue: -150,
            property: 'translateY',
          },
        ],
      },
    ]);
    setThirdColumnAnimation([
      {
        start: '.startMobileDesignAnimation',
        duration: screenHeight,
        endOffset: 200,
        properties: [
          {
            startValue: -115,
            endValue: 250,
            property: 'translateY',
          },
        ],
      },
    ]);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pictureSize = useMemo(() => {
    const sizes = { width: 245, height: 531 };
    if (widthRef.current < 1440) {
      sizes.width = 101;
      sizes.height = 219;
    }
    if (widthRef.current < LG_DEVICE) {
      sizes.width = 208;
      sizes.height = 452;
    }
    return sizes;
  }, [widthRef.current]);

  return (
    <div className={styles.mobileDesignSlider}>
      <div className={styles.shadowBgTop} />
      <Plx
        parallaxData={firstColumnAnimation as IColumnAnimation[]}
        className={`${styles.firstColumn} ${isMobile ? styles.firstColumnMobileAnime : ''}`}
        disabled={isMobile}
      >
        <ImageComponent
          src={ImageFirstColumnTop}
          width={pictureSize.width}
          height={pictureSize.height}
        />
        <ImageComponent
          src={ImageFirstColumnBottom}
          width={pictureSize.width}
          height={pictureSize.height}
        />
      </Plx>
      <Plx
        parallaxData={secondColumnAnimation as IColumnAnimation[]}
        className={`${styles.secondColumn} ${isMobile ? styles.secondColumnMobileAnime : ''}`}
        disabled={isMobile}
      >
        <ImageComponent
          src={ImageSecondColumnTop}
          width={pictureSize.width}
          height={pictureSize.height}
        />
        <ImageComponent
          src={ImageSecondColumnBottom}
          width={pictureSize.width}
          height={pictureSize.height}
        />
      </Plx>
      <Plx
        parallaxData={thirdColumnAnimation as IColumnAnimation[]}
        className={`${styles.thirdColumn} ${isMobile ? styles.thirdColumnMobileAnime : ''}`}
        disabled={isMobile}
      >
        <ImageComponent
          src={ImageThirdColumnTop}
          width={pictureSize.width}
          height={pictureSize.height}
        />
        <ImageComponent
          src={ImageThirdColumnBottom}
          width={pictureSize.width}
          height={pictureSize.height}
        />
      </Plx>
    </div>
  );
}

export default MobileDesignSlider;
