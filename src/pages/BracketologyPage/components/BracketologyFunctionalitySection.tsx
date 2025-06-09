import { useState } from 'react';

import BracketologyAccordion from './BracketologyAccordion';
import functionalityAccordionContent from '../data/functionalityAccordionContent';
import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';
import FunctionalityCarousel from './FunctionalityCarousel';

import styles from '../sass/BracketologyFunctionalitySection.module.scss';

function BracketologyFunctionalitySection() {
  const [isShowItem, setIsShowItem] = useState(0);

  return (
    <section className={styles.functionalitySection}>
      <BracketologyPageContainer className={styles.container}>
        <BracketologyText tag="h2" variant="title" className={styles.title}>
          To this end, the Bracketology website has the following functionalities:
        </BracketologyText>
        <BracketologyAccordion
          accordionContent={functionalityAccordionContent}
          itemClass="functionalityItem"
          variant="functionalityAccordion"
          setIsShowItem={setIsShowItem}
        />
        <FunctionalityCarousel isShowItem={isShowItem} />
      </BracketologyPageContainer>
    </section>
  );
}

export default BracketologyFunctionalitySection;
