import ColoradoSportsVideoDotsList from './ColoradoSportsVideoDotsList';
import requirementsContent from '../data/requirementsContentData.json';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/coloradoSportsVideoRequirementsSection.module.scss';

function ColoradoSportsVideoRequirementsSection() {
  return (
    <section className={styles.requirementsSection}>
      <div className={`${styles.container} coloradoContainer rightContainer`}>
        <div className="cardContainer">
          <VRARContent>
            <h2 className={`${styles.sectionTitle} sectionTitle`}>The main requirements were:</h2>
          </VRARContent>
          <ColoradoSportsVideoDotsList list={requirementsContent} variant="requirements" />
        </div>
      </div>
    </section>
  );
}

export default ColoradoSportsVideoRequirementsSection;
