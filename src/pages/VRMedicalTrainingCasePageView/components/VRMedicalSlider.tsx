import { StaticImageData } from 'next/image';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import DragSlider from '../../../components/DragSlider/DragSlider';
import projectPhasesData from '../data/projectPhases';
import ImageComponent from '../../../components/Image/Image';
import BgTablet from '@/images/faceReplacingCasePage/sliderBlock/img_tablet_bg.webp';
import BgMobile from '@/images/faceReplacingCasePage/sliderBlock/img_mobile_bg.webp';
import BgDesktop from '@/images/vrMedicalTrainingCasePage/img_desktop_bg@2x.webp';
import { useAppSelector } from '../../../hook/reduxToolkit';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/VRMedicalSlider.module.scss';

function VRMedicalSlider() {
  const {
    isMDDevice,
    isSMDevice,
    isXSDevice,

  } = useAppSelector((state) => state.app.screenSizes);
  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      background: BgDesktop,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = BgTablet;
    } else if (isXSDevice) {
      bg.background = BgMobile;
    }
    return bg;
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          quality={100}
          fill
          sizes="100vw"
        />
      </div>
      <PageContainer>
        <VRARContent>
          <MainTitle className={styles.title}>
            Phases of the project we worked on:
          </MainTitle>
        </VRARContent>
      </PageContainer>
      <DragSlider
        data={projectPhasesData}
        withoutDots
      />
    </section>
  );
}

export default VRMedicalSlider;
