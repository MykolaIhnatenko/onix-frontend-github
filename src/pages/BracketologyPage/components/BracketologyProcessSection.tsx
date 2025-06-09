import { IBracketologyProcessSection } from '../interfaces/IBracketologyProcessSection';
import useWindowSize from '../../../hook/useWindowSize';
import ImageComponent from '../../../components/Image/Image';
import processCards from '../data/processCards';
import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';
import Icons from '../../../assets/icon';
import ProcessCarousel from './ProcessCarousel';
import { SM_DEVICE } from '../../../constants/constants';

import styles from '../sass/BracketologyProcessSection.module.scss';

function BracketologyProcessSection({ processSectionBg }: IBracketologyProcessSection) {
  const { width } = useWindowSize();
  const isMobile = width < SM_DEVICE;

  return (
    <section className={styles.processSection}>
      <div className={styles.processBg}>
        <ImageComponent
          src={processSectionBg}
          fill
          alt="man"
          sizes="100vw"
        />
      </div>
      <BracketologyPageContainer className={styles.container}>
        <BracketologyText tag="h2" variant="title">
          The process of the fantasy gaming platform website development
        </BracketologyText>
        <BracketologyText tag="p" variant="text" className={styles.text}>
          The team for the Bach Bracket old and new websites included:
        </BracketologyText>
      </BracketologyPageContainer>
      {isMobile ? (
        <div className={`${styles.processCarouselContainer} container`}>
          <ProcessCarousel processCards={processCards} />
        </div>
      ) : (
        <BracketologyPageContainer className={styles.processCardsContainer}>
          {processCards.map(({ id, number, content }) => (
            <div key={id} className={styles.processCardWrapper}>
              <div className={styles.processCard}>
                <div className={styles.processIconBlock}>
                  <span>{number}</span>
                  <Icons.IconBracketologyProcess className={styles.processIconBlockIcon} />
                </div>
                <BracketologyText tag="p" variant="text">{content}</BracketologyText>
              </div>
            </div>
          ))}
        </BracketologyPageContainer>
      )}
      <BracketologyPageContainer className={styles.container}>
        <BracketologyText tag="p" variant="text" className={styles.text}>
          Aloa Manage, the platform’s project management system, proved excellent for facilitating their
          collaboration.
        </BracketologyText>
      </BracketologyPageContainer>
    </section>
  );
}

export default BracketologyProcessSection;
