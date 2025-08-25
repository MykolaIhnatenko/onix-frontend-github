import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ContentText from '../../../components/ContentText/ContentText';
import HoverAccordion from '../../../components/HoverAccordion/HoverAccordion';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import devopsSolutionsHoverAccordionData from '../data/devopsSolutionsHoverAccordionData';
import devopsSolutionsDragSliderDataMobile from '../data/devopsSolutionsDragSliderDataMobile';
import IStore from '../../../store/interfaces/IStore';
import { IScreenSizes } from '../../../store/app/interfaces/IApp';
import DragSlider from '../../../components/DragSlider/DragSlider';

import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgBigDesc from '@/images/industriesPage/img_industries_main_bgBigDesc@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import styles from '../sass/devopsSolutionsMainBlock.module.scss';

function DevopsSolutionsMainBlock() {
  const {
    isMDDevice, isSMDevice, isXSDevice, isXXXLDevice,
  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;
  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: IndustriesMainBg,
    };
    if (isXXXLDevice) {
      bg.background = IndustriesMainBgBigDesc;
    } else if (isMDDevice || isSMDevice) {
      bg.background = IndustriesMainBgTablet;
    } else if (isXSDevice) {
      bg.background = IndustriesMainBgMobile;
    }
    return bg;
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          priority
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
      </div>
      <div className={styles.content}>
        <MainTitle className={styles.title} tag="h1">
          DevOps Solutions and Services
        </MainTitle>
        <div className={styles.textContainer}>
          <ContentText tag="p" className={styles.text}>
            Onix is a reliable DevOps solutions provider that has vast experience delivering cutting-edge
            DevOps services for startups and established businesses, ensuring our solutions align with
            our client&apos;s unique needs to foster an ongoing partnership.
          </ContentText>
          <ContentText tag="p" className={styles.secondText}>
            Using cutting-edge technologies, our DevOps specialists help you accelerate the teams&apos;
            performance speed, provide an efficient production environment, ensure quick adaptation to
            alterations, and promote value monitoring along the way.
          </ContentText>
        </div>
        {isMobile ? (
          <DragSlider
            data={devopsSolutionsDragSliderDataMobile}
          />
        ) : (
          <HoverAccordion priority data={devopsSolutionsHoverAccordionData} />
        )}
      </div>
    </div>
  );
}

export default DevopsSolutionsMainBlock;
