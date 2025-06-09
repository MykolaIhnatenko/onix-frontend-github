import { useState } from 'react';
import { StaticImageData } from 'next/image';

import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { IKillerFeaturesBlockProps } from '../interfaces/IKillerFeaturesBlock';
import KillerFeaturesBlockCard from './KillerFeaturesBlockCard';
import { useAppSelector } from 'hook/reduxToolkit';
import BackgroundImg from '../../../assets/images/convertCasePage/phones/img_killerFeaturesBlockBg@2x.webp';
import BackgroundImgTablet from '../../../assets/images/convertCasePage/phones/img_killerFeaturesBlockTabletBg@2x.webp';
import BackgroundImgMobile from '../../../assets/images/convertCasePage/phones/img_killerFeaturesBlockMobileBg@2x.webp';

import styles from '../sass/killerFeaturesBlock.module.scss';

function KillerFeaturesBlock({ data, titleSection, description }: IKillerFeaturesBlockProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { screenSizes: { isMDDevice, isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: BackgroundImg,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = BackgroundImgTablet;
    } else if (isXSDevice) {
      bg.background = BackgroundImgMobile;
    }
    return bg;
  };

  const handleMouseDownSale = (event: React.MouseEvent) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    setIsDragging(true);
    setStartX(event.pageX - target.offsetLeft);
    setScrollLeft(target.scrollLeft);
  };

  const handleMouseMoveSale = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const target = event.currentTarget as HTMLElement;
    const x = event.pageX - target.offsetLeft;
    const walk = (x - startX);
    target.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpSale = () => {
    setIsDragging(false);
  };

  return (
    <section className={`${styles.section}`}>
      <VRARContent className={styles.titleWrapper}>
        <MainTitle className={styles.mainTitle}>
          {titleSection}
        </MainTitle>
        <ContentText className={styles.subtitle} tag="p">
          {description}
        </ContentText>
      </VRARContent>
      <div className={styles.dragWrapper} id="wrap">
        <div
          className={styles.contentItems}
          onMouseDown={handleMouseDownSale}
          onMouseMove={handleMouseMoveSale}
          onMouseLeave={handleMouseUpSale}
          onMouseUp={handleMouseUpSale}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          {data.map(({
            id, title, img, text,
          }) => (
            <KillerFeaturesBlockCard
              key={id}
              img={img}
              title={title}
              text={text}
              background={getBackground().background}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default KillerFeaturesBlock;
