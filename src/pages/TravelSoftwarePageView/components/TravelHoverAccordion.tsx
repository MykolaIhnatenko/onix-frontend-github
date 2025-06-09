import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import HoverAccordion from '../../../components/HoverAccordion/HoverAccordion';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import travelHoverAccordionSliderData from '../data/travelHoverAccordionSliderData';
import travelHoverAccordionData from '../data/travelHoverAccordionData';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import DragSlider from '../../../components/DragSlider/DragSlider';

import styles from '../sass/travelHoverAccordion.module.scss';

function TravelHoverAccordion({ background }: { background: StaticImageData }) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          src={background}
          alt="background"
          sizes="(max-width: 768px) 80vw, (min-width: 768px) 100vw"
        />
      </div>
      <div className={styles.content}>
        <MainTitle className={styles.title}>
          Let&apos;s give flight to your business by creating a top-notch travel software solution!
        </MainTitle>
        {isMobile ? (
          <DragSlider
            data={travelHoverAccordionSliderData}
            withoutDots
          />
        ) : (
          <HoverAccordion
            data={travelHoverAccordionData}
            whiteVariant
          />
        )}
      </div>
    </div>
  );
}
export default TravelHoverAccordion;
