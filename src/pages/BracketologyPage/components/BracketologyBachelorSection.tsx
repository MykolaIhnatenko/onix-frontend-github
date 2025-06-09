import BracketologyAccordion from './BracketologyAccordion';
import BracketologyPageContainer from './BracketologyPageContainer';
import bachelorAccordionContent from '../data/bachelorAccordionContent';

import styles from '../sass/BracketologyBachelorSection.module.scss';

function BracketologyBachelorSection() {
  return (
    <section className={styles.bachelorSection}>
      <BracketologyPageContainer className={styles.container}>
        <BracketologyAccordion
          answerClass="bachelorAnswer"
          plusStyle="bachelorPlus"
          accordionContent={bachelorAccordionContent}
        />
      </BracketologyPageContainer>
    </section>
  );
}

export default BracketologyBachelorSection;
