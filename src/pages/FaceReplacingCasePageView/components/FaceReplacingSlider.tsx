import { useSelector } from 'react-redux';

import PageContainer from '../../../components/PageContainer/PageContainer';
import VRARPageAppearAnimation from '../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import MainTitle from '../../../components/MainTitle/MainTitle';
import DragSlider from '../../../components/DragSlider/DragSlider';
import ScrollSliderDefault from '../../../components/ScrollSliderDefault/ScrollSliderDefault';
import IStore from '../../../store/interfaces/IStore';
import { IScreenSizes } from '../../../store/app/interfaces/IApp';
import projectPhasesData from '../data/projectPhases';
import ImageComponent from '../../../components/Image/Image';

import Bg from '@/images/caseStudiesBlock/img_bottomBg.webp';
import BgTablet from '@/images/faceReplacingCasePage/sliderBlock/img_tablet_bg.webp';
import BgMobile from '@/images/faceReplacingCasePage/sliderBlock/img_mobile_bg.webp';
import styles from '../sass/faceReplacingSlider.module.scss';

function FaceReplacingSlider() {
  const {
    isMDDevice,
    isSMDevice,
    isXSDevice,

  } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);

  const isMobile = isSMDevice || isXSDevice || isMDDevice;

  const getBackground = () => {
    if (isMDDevice) {
      return BgTablet;
    }

    if (isXSDevice || isSMDevice) {
      return BgMobile;
    }

    return Bg;
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground()}
          alt="background"
          quality={100}
          fill
          sizes="100vw"
        />
      </div>
      <PageContainer>
        <VRARPageAppearAnimation>
          <MainTitle className={styles.title}>
            Business goals we helped our client to achieve:
          </MainTitle>
        </VRARPageAppearAnimation>
      </PageContainer>
      {isMobile ? (
        <DragSlider
          data={projectPhasesData}
          withoutDots
        />
      ) : (
        <ScrollSliderDefault
          data={projectPhasesData}
        />
      )}
    </section>
  );
}

export default FaceReplacingSlider;
