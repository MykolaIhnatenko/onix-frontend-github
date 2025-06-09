import { muktaVaaniFont } from '../../../../fonts/MainFonts';
import ImageComponent from '../../../../components/Image/Image';
import { designApps, steps } from '../data/MetroCaseAppDesignData';
import VRARContent from '../../../../components/VRARContent/VRARContent';

import styles from '../sass/metroCaseAppDesign.module.scss';

function MetroCaseAppDesign() {
  return (
    <div className={`${styles.mainContainer} ${muktaVaaniFont.variable}`}>
      <div className={styles.contentContainer}>
        <VRARContent>
          <h2 className={styles.contentTitle}>The app design</h2>
        </VRARContent>
        <VRARContent className={styles.contentListContainer}>
          <p className={styles.contentListTitle}>
            The work on the wholesale grocery application’s design also proceeded in increments as follows:
          </p>
          <div className={styles.contentList}>
            {steps.map((col, index) => (
              <div key={['col', index].join('_')} className={styles.listColumn}>
                {col.map((item) => (
                  <div key={item.title} className={styles.listItemWrapper}>
                    <div className={styles.listItemImage}>
                      {item.icon}
                    </div>
                    <p className={`${styles.listItemText} ${item.titleClassName || ''}`}>
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </VRARContent>
        <VRARContent className={styles.contentTextContainer}>
          <p>
            METRO UA is a practical shopping application, so we keep
            it simple and clean, not overwhelming users with details.
          </p>
          <p>
            The designers used
            <span className={styles.strongText}> Sketch and Invision </span>
            for the wireframes and high-fidelity mockups.
            All later updates to the design were implemented in Figma.
          </p>
        </VRARContent>
        <VRARContent className={styles.contentImagesContainer}>
          {designApps.map((item) => (
            <div key={item.alt} className={styles.imageContainer}>
              <div className={styles.innerImageContainer}>
                <ImageComponent
                  src={item.icon}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </div>
            </div>
          ))}
        </VRARContent>
      </div>
    </div>
  );
}

export default MetroCaseAppDesign;
