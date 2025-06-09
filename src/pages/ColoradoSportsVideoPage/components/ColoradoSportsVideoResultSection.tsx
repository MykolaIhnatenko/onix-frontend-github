import ColoradoSportsVideoResultImage from './ColoradoSportsVideoResultImage';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/coloradoSportsVideoResultSection.module.scss';

function ColoradoSportsVideoResultSection() {
  return (
    <section className={styles.resultSection}>
      <div className={`${styles.container} coloradoContainer`}>
        <div className={`${styles.resultCard} cardContainer`}>
          <div className={styles.content}>
            <div className={styles.titles}>
              <VRARContent>
                <p className={`${styles.sectionTitle} sectionTitle`}>Results</p>
              </VRARContent>
              <VRARContent>
                <h2>
                  <span>Progress Report: </span>
                  Achievements and
                  {' '}
                  <br />
                  Outcomes of Our Development Efforts
                </h2>
              </VRARContent>
            </div>
            <ColoradoSportsVideoResultImage imageStyle="mobile" />
            <VRARContent>
              <p className="fs16">
                The Onix team has implemented a lot of new functionality on the project and improved the existing
                functionality and will continue supporting the project once the development is completed.
              </p>
            </VRARContent>
          </div>
          <ColoradoSportsVideoResultImage imageStyle="desk" />
        </div>
      </div>
    </section>
  );
}

export default ColoradoSportsVideoResultSection;
