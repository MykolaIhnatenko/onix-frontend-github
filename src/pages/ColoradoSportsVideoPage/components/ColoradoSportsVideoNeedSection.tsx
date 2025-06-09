import ColoradoSportVideoNumberList from './ColoradoSportsVideoNumberList';
import needContent from '../data/needContentData';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/coloradoSportsVideoNeedSection.module.scss';

function ColoradoSportsVideoNeedSection() {
  return (
    <section className={styles.needSection}>
      <div className={`${styles.container} coloradoContainer rightContainer`}>
        <div className={`${styles.needContainer} cardContainer`}>
          <VRARContent>
            <h2 className={`${styles.sectionTitle} sectionTitle`}>The Onix team needed to:</h2>
          </VRARContent>
          <ColoradoSportVideoNumberList list={needContent} />
        </div>
      </div>
    </section>
  );
}

export default ColoradoSportsVideoNeedSection;
