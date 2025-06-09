import InnerVRCard from './InnerVRCard';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import { solutions } from '../data/InnerVRData';

import styles from '../sass/InnerVRSolutionsSection.module.scss';

function InnerVRSolutionsSection() {
  return (
    <section className={styles.solutionsSection}>
      <div className={styles.wrapperBlock}>
        <InnerVRCard typeStyle="fullWidth">
          <VRARPageAppearAnimation tag="p" classes="title">
            Solutions we made
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle} subtitle`}>
            Onix helped the client to prepare InnerVR Beta for release on the Oculus App Lab store. We optimized
            the beta version to the app store’s standards to facilitate its rapid approval and prepared the textual
            and visual content for InnerVR’s page.
          </VRARPageAppearAnimation>
          <ul className={styles.solutionsBlock}>
            {solutions.map(({ id, title, text }) => (
              <li key={id} className={`${styles.item} dFlex`}>
                <div className={`${styles.title} itemTitle whiteTitleColor leftFlex`}>
                  <span>{id}</span>
                  <h3 className="unsetText">{title}</h3>
                </div>
                <div className={`${styles.text} rightFlex`}>
                  <p className="text">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </InnerVRCard>
      </div>
    </section>
  );
}

export default InnerVRSolutionsSection;
