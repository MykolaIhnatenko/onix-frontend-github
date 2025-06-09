import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import MainDesk from '@/images/caseStudiesPage/InteractiveTrainingSimulator/main-bg-desk.webp';
import MainMobile from '@/images/caseStudiesPage/InteractiveTrainingSimulator/main-bg-mobile.webp';
import MainTablet from '@/images/caseStudiesPage/InteractiveTrainingSimulator/main-bg-tablet.webp';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/InteractiveMainSection.module.scss';

function InteractiveMainSection() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const bg = useMemo(() => {
    let src = MainDesk;
    if (isXSDevice || isSMDevice) {
      src = MainMobile;
    }
    if (isMDDevice) {
      src = MainTablet;
    }

    return src;
  }, [isSMDevice, isXSDevice, isMDDevice]);

  return (
    <section
      className={`${styles.mainSection} mainInteractive interactive-section`}
    >
      <div className={styles.mainContent}>
        <ImageComponent
          src={bg}
          quality={100}
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          fill
          alt="background"
        />
        <div className={`${styles.container} container4D`}>
          <VRARContent>
            <h1>
              Interactive Simulator
              <br />
              Development
            </h1>
          </VRARContent>
          <VRARContent>
            <p className={styles.descText}>– scenario-based online training simulation app development project</p>
          </VRARContent>
        </div>
      </div>
    </section>
  );
}

export default InteractiveMainSection;
