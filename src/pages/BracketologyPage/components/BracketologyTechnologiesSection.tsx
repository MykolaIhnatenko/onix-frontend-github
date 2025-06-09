import Card from './Card';
import BracketologyTechnology from './BracketologyTechnology';
import technologies from '../data/technologies';
import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';

import styles from '../sass/BracketologyTechnologiesSection.module.scss';

function BracketologyTechnologiesSection() {
  return (
    <section className={styles.technologySection}>
      <BracketologyPageContainer variant="technologiesContainer">
        <Card cardVariant="technologyCard">
          <BracketologyText tag="h2" variant="title">
            The team used the following technologies for the fantasy gaming platform app development:
          </BracketologyText>
          <div className={styles.technologyContainer}>
            {technologies.map(({
              id, imgSrc, title, content,
            }) => (
              <BracketologyTechnology key={id} content={content} title={title} imgSrc={imgSrc} />
            ))}
          </div>
        </Card>
      </BracketologyPageContainer>
    </section>
  );
}

export default BracketologyTechnologiesSection;
