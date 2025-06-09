import VRARContent from '../../../components/VRARContent/VRARContent';
import { featuresCards } from '../data/data';
import InteractiveTitleBlock from './InteractiveTitleBlock';
import InteractiveFeaturesCard from './InteractiveFeaturesCard';

import styles from '../sass/InteractiveFeaturesSection.module.scss';

function InteractiveFeaturesSection() {
  return (
    <div
      className={`${styles.featuresSection} black featuresInteractive interactive-section mb`}
    >
      <div className={`${styles.container} container4D`}>
        <InteractiveTitleBlock
          color="white"
          title="Features"
          number="04"
        />
        <div className={styles.content}>
          <VRARContent className={styles.title}>
            <h2 className="featureTitle">
              The core feature
              <br />
              of the 4DiSimulator.
            </h2>
          </VRARContent>
          <div className={styles.cards}>
            {featuresCards.map(({ id, title, content }) => (
              <InteractiveFeaturesCard
                key={id}
                title={title}
                content={content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractiveFeaturesSection;
