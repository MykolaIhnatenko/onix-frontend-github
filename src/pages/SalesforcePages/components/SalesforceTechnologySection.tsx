import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ISalesforceTechnologySection from '../interfaces/ISalesforceTechnologySection';

import styles from '../sass/salesforceTechnologySection.module.scss';

function SalesforceTechnologySection({ classes = '', technologies }:ISalesforceTechnologySection) {
  return (
    <div className={`${styles.technologySection} ${styles[classes]}`}>
      <div className={`${styles.container} salesforceContainer`}>
        <VRARContent>
          <h2>Core technology</h2>
        </VRARContent>
        <div className={styles.technologiesContainer}>
          <div className={styles.technologiesContainer}>
            {technologies.map(({
              id, width, height, src,
            }) => (
              <VRARContent key={id} className={styles.technology}>
                <ImageComponent
                  src={src}
                  alt="technology"
                  width={width}
                  height={height}
                />
              </VRARContent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesforceTechnologySection;
