import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import IInteractiveAppSection from '../interfaces/IInteractiveAppSection';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../components/Image/Image';
import InteractiveContactUsBlock from './InteractiveContactUsBlock';
import InteractiveTitleBlock from './InteractiveTitleBlock';
import { appContent } from '../data/data';
import InteractiveTrainingSimulator from '@/images/caseStudiesPage/InteractiveTrainingSimulator/app-bg.webp';
import InteractiveTrainingSimulatorTablet from '@/images/caseStudiesPage/InteractiveTrainingSimulator/app-bg-tablet.webp';
import InteractiveTrainingSimulatorMobile from '@/images/caseStudiesPage/InteractiveTrainingSimulator/app-bg-mobile.webp';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import { ButtonType } from 'constants/enums';

import styles from '../sass/InteractiveAppSection.module.scss';

function InteractiveAppSection({ saleUrl }: IInteractiveAppSection) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const bg = useMemo(() => {
    let src = InteractiveTrainingSimulator;
    if (isSMDevice || isXSDevice) {
      src = InteractiveTrainingSimulatorMobile;
    }
    if (isMDDevice) {
      src = InteractiveTrainingSimulatorTablet;
    }

    return src;
  }, [isSMDevice, isXSDevice, isMDDevice]);

  return (
    <div
      className={`${styles.appSection} appInteractive interactive-section mb`}
    >
      {!saleUrl && <InteractiveContactUsBlock idBtn={ButtonType.CASE} />}
      <div className={`${styles.appBlock} black`}>
        <div className={`${styles.container} container4D`}>
          <InteractiveTitleBlock
            number="02"
            title="About the app"
            color="white"
          />
          <VRARContent>
            <h2>For whom the training simulator app is designed.</h2>
          </VRARContent>
          <div className={styles.contentBlock}>
            {Object.keys(appContent).map((item) => (
              <VRARContent key={item} className={styles.contentBlockItem}>
                <h3>{item}</h3>
                <ul>
                  {appContent[item].map((listItem, index) => (
                    <li className="fs16" key={[listItem, index].join('_')}>
                      <p>
                        <span />
                        {listItem}
                      </p>
                    </li>
                  ))}
                </ul>
              </VRARContent>
            ))}
          </div>
          <VRARContent>
            <p className="fs16">
              — The training sessions can also be adapted to educational and entertainment environments,
              e.g., as tests or trivia games.
            </p>
          </VRARContent>
        </div>
        <ImageComponent
          src={bg}
          quality={100}
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          fill
          alt="background"
          className={styles.background}
        />
      </div>
    </div>
  );
}

export default InteractiveAppSection;
