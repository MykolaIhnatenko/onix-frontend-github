import GoodFaceTechnology from './GoodFaceTechnology';
import technologiesData from '../data/technologiesData.json';
import { useAppSelector } from '../../../hook/reduxToolkit';
import GoodFaceTechnologiesCarousel from './GoodFaceTechnologiesCarousel';

import styles from '../sass/goodFaceTechnologySection.module.scss';

function GoodFaceTechnologySection() {
  const {
    isSMDevice, isXSDevice, isMDDevice,
  } = useAppSelector((state) => state.app.screenSizes);
  const isNotDesktop = isXSDevice || isSMDevice || isMDDevice;

  return (
    <section className={styles.technologySection}>
      <div className="technologyContainer container">
        <h2>
          Core
          <span> technology</span>
        </h2>
        {isNotDesktop ? (
          <GoodFaceTechnologiesCarousel technologies={technologiesData} />
        ) : (
          <ul className={styles.technologiesContainer}>
            {technologiesData
              .flat()
              .map((technology, index) => (
                <GoodFaceTechnology key={[technology, index].join('_')} technology={technology} />
              ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default GoodFaceTechnologySection;
