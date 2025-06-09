import BracketologyAccordion from './BracketologyAccordion';
import BracketologyProgress from './BracketologyProgress';
import developmentAccordionContent from '../data/developmentAccordionContent';
import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';

import styles from '../sass/BracketologyDevelopmentSection.module.scss';

function BracketologyDevelopmentSection() {
  return (
    <section className={styles.developmentSection}>
      <BracketologyPageContainer className={styles.container}>
        <BracketologyText tag="h2" variant="title">
          The planning and preparation for the updates and the development took 7 months.
          The work completed during this period included:
        </BracketologyText>
        <span className={styles.titleTablet}>0 MONTH</span>
        <div className={styles.developmentContent}>
          <div className={styles.progressContainer}>
            <BracketologyProgress />
          </div>
          <div className={styles.accordionContainer}>
            <BracketologyAccordion
              variant="developmentAccordion"
              accordionContent={developmentAccordionContent}
            />
          </div>
        </div>
        <span className={styles.titleTablet}>7 MONTH</span>
      </BracketologyPageContainer>
    </section>
  );
}

export default BracketologyDevelopmentSection;
