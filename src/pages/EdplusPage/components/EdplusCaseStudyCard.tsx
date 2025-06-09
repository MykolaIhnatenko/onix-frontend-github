import VRARContent from '../../../components/VRARContent/VRARContent';
import IEdplusCaseStudyCard from '../interfaces/IEdplusCaseStudyCard';

import styles from '../sass/edplusCaseStudyCard.module.scss';

function EdplusCaseStudyCard({ content }: IEdplusCaseStudyCard) {
  return (
    <VRARContent className={styles.boxItem}>
      <p className={styles.edplusTextStyle}>
        {content}
      </p>
    </VRARContent>
  );
}

export default EdplusCaseStudyCard;
