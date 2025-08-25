import { useEffect, useRef, useState } from 'react';
import Plx from 'react-plx';

import { LG_DEVICE, MD_DEVICE } from '../../../constants/constants';
import IColumnAnimation from '../interfaces/IColumnAnimation';
import ImageComponent from 'components/Image/Image';
import { useAppSelector } from 'hook/reduxToolkit';

import ImageBottomFirst from '@/images/travelbid/processDesignSection/img_bottom-row-first-picture.webp';
import ImageBottomSecond from '@/images/travelbid/processDesignSection/img_bottom-row-second-picture.webp';
import ImageBottomThird from '@/images/travelbid/processDesignSection/img_bottom-row-third-picture.webp';
import ImageBottomFourth from '@/images/travelbid/processDesignSection/img_bottom-row-fourth-picture.webp';
import ImageTopFirst from '@/images/travelbid/processDesignSection/img_top-row-first-picture.webp';
import ImageTopSecond from '@/images/travelbid/processDesignSection/img_top-row-second-picture.webp';
import ImageTopThird from '@/images/travelbid/processDesignSection/img_top-row-third-picture.webp';
import ImageTopFourth from '@/images/travelbid/processDesignSection/img_top-row-fourth-picture.webp';
import styles from '../sass/ProcessDesignSlider.module.scss';

function ProcessDesignSlider({ isMobile }: { isMobile: boolean }) {
  const [topBlockAnimation, setTopBlockAnimation] = useState<IColumnAnimation[] | []>([]);
  const [bottomBlockAnimation, setBottomBlockAnimation] = useState<IColumnAnimation[] | []>([]);
  const widthRef = useRef(0);
  const { windowWidth } = useAppSelector((state) => state.app);
  const [{ width, height }, setSizes] = useState({ width: 550, height: 408 });

  const handleResize = () => {
    const screenHeight = window.innerHeight;
    widthRef.current = window.innerWidth;

    setTopBlockAnimation([
      {
        start: '.startTopBlockAnimation',
        duration: screenHeight,
        endOffset: 200,
        properties: [
          {
            startValue: 150,
            endValue: -1200,
            property: 'translateX',
          },
        ],
      },
    ]);
    setBottomBlockAnimation([
      {
        start: '.startBottomBlockAnimation',
        duration: screenHeight,
        endOffset: 200,
        properties: [
          {
            startValue: -1200,
            endValue: 150,
            property: 'translateX',
          },
        ],
      },
    ]);
  };

  useEffect(() => {
    handleResize();

    const updateSizes = () => {
      let newSizes = { width: 550, height: 408 };

      if (widthRef.current <= LG_DEVICE) {
        newSizes = { width: 293, height: 218 };
      }
      if (widthRef.current < MD_DEVICE) {
        newSizes = { width: 143, height: 106 };
      }

      setSizes(newSizes);
    };

    updateSizes();
  }, [windowWidth]);

  return (
    <div className={`${styles.processDesignSlider}  startTopBlockAnimation`}>
      <Plx
        parallaxData={topBlockAnimation as IColumnAnimation[]}
        className={`${styles.topRow} ${isMobile ? styles.topRowMobileAnime : ''}`}
        disabled={isMobile}
      >
        <ImageComponent
          sizes="100vw"
          src={ImageTopFirst}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
        <ImageComponent
          sizes="100vw"
          src={ImageTopSecond}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
        <ImageComponent
          sizes="100vw"
          src={ImageTopThird}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
        <ImageComponent
          sizes="100vw"
          src={ImageTopFourth}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
        <ImageComponent
          sizes="100vw"
          src={ImageTopFirst}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
        <ImageComponent
          sizes="100vw"
          src={ImageTopSecond}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
      </Plx>
      <Plx
        parallaxData={bottomBlockAnimation as IColumnAnimation[]}
        className={`${styles.bottomRow} ${isMobile ? styles.bottomRowMobileAnime : ''} startBottomBlockAnimation`}
        disabled={isMobile}
      >
        <ImageComponent
          sizes="100vw"
          src={ImageBottomFirst}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
        <ImageComponent
          sizes="100vw"
          src={ImageBottomSecond}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
        <ImageComponent
          sizes="100vw"
          src={ImageBottomThird}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
        <ImageComponent
          sizes="100vw"
          src={ImageBottomFourth}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
        <ImageComponent
          sizes="100vw"
          src={ImageBottomFirst}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
        <ImageComponent
          sizes="100vw"
          src={ImageBottomSecond}
          width={width}
          height={height}
          quality={95}
          alt="Carousel image"
        />
      </Plx>
    </div>
  );
}

export default ProcessDesignSlider;
