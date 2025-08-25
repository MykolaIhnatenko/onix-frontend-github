import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import gameArtOutsourcingData from '../data/gameArtOutsourcingData';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import ScrollSliderDefault from '../../../components/ScrollSliderDefault/ScrollSliderDefault';
import DragSlider from '../../../components/DragSlider/DragSlider';
import PageContainer from 'components/PageContainer/PageContainer';
import ContentTextNew from 'components/ContentTextNew/ContentTextNew';

import GameArtOutsourcingBg from '@/images/gameArt/artOutsourcing/img_bg_game_art_outsourcing@2x.webp';
import GameArtOutsourcingBigBg from '@/images/gameArt/artOutsourcing/img_bg_game_art_outsourcing_big@2x.webp';
import GameArtOutsourcingTabletBg from '@/images/gameArt/artOutsourcing/img_bg_game_art_outsourcing_tablet@2x.webp';
import GameArtOutsourcingMobileBg from '@/images/gameArt/artOutsourcing/img_bg_game_art_outsourcing_mobile@2x.webp';
import styles from '../sass/gameArtOutsourcing.module.scss';

function GameArtOutsourcing() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: GameArtOutsourcingBg,
    };

    if (isXXXLDevice) {
      bg.background = GameArtOutsourcingBigBg;
    } else if (isMDDevice || isSMDevice) {
      bg.background = GameArtOutsourcingTabletBg;
    } else if (isXSDevice) {
      bg.background = GameArtOutsourcingMobileBg;
    }

    return bg;
  };

  return (
    <section className={styles.industriesCaseStudiesBlock}>
      <div className={styles.bgContainer}>
        <ImageComponent
          src={getBackground().background}
          fill
          alt="figures"
          sizes="100vw"
        />
      </div>
      <div className={styles.container}>
        <PageContainer className="text-color-white relative z-[2]">
          <MainTitle className="mb-[40px] min-lg:max-w-[692px]">
            3D Game Art Outsourcing Services We Offer
          </MainTitle>
          <ContentTextNew
            text={`Discover the exceptional 3D game art development services we offer, designed to bring
              your gaming vision to life with unparalleled style and engaging experiences.`}
            className={`
              mb-[40px] screen-lg:mb-[80px] max-w-[765px] screen-lg:max-w-full screen-md:!text-[16px]/[24px]
            `}
          />
        </PageContainer>
        {isMobile ? (
          <DragSlider
            data={gameArtOutsourcingData}
          />
        ) : (
          <ScrollSliderDefault
            data={gameArtOutsourcingData}
          />
        )}
      </div>
    </section>
  );
}

export default GameArtOutsourcing;
