import { useSelector } from 'react-redux';

import IStore from 'store/interfaces/IStore';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { processContent } from '../data/data';
import ImageComponent from '../../../components/Image/Image';
import ProcessDesk from '@/images/caseStudiesPage/InteractiveTrainingSimulator/process-img-desk.webp';
import ProcessTablet from '@/images/caseStudiesPage/InteractiveTrainingSimulator/process-img-tablet.webp';
import { IScreenSizes } from 'store/app/interfaces/IApp';
import InteractiveTitleBlock from './InteractiveTitleBlock';

import styles from '../sass/InteractiveProcessSection.module.scss';

function InteractiveProcessSection() {
  const { isLGDevice, isMDDevice } = useSelector<IStore, IScreenSizes>((state) => state.app.screenSizes);
  const isMobile = isMDDevice || isLGDevice;

  return (
    <div
      className={`${styles.processSection} white processInteractive interactive-section mb`}
    >
      <div className={`${styles.container} container4D`}>
        <InteractiveTitleBlock
          variant="flow"
          title="The 4DiSimulator development process"
          number="05"
          color="gray"
        />
        <div className={styles.content}>
          {processContent.map(({ id, title, content }) => (
            <VRARContent
              key={id}
              className={styles.item}
            >
              <h3 className={styles.headerDiscovery}>{title}</h3>
              <div className={styles.itemContent}>{content}</div>
            </VRARContent>
          ))}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <ImageComponent
          src={isMobile ? ProcessTablet : ProcessDesk}
          width={isMobile ? 672 : 600}
          height={isMobile ? 1411 : 1505}
          quality={100}
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          alt="process-background"
        />
      </div>
    </div>
  );
}

export default InteractiveProcessSection;
