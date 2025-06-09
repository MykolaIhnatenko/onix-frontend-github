import InnerVRCard from './InnerVRCard';
import InnerVRBorder from './InnerVRBorder';
import InnerVRAboutBlock from './InnerVRAboutBlock';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/InnerVRAboutSection.module.scss';

function InnerVRAboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="containerInnerVR pt">
        <InnerVRCard>
          <VRARPageAppearAnimation tag="p" classes="title">
            About InnerVR
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle} subtitle`}>
            InnerVR is a meditation and relaxation VR game for Oculus Quest 2 designed to help users
            live a more mindful life.
          </VRARPageAppearAnimation>
          <div className={styles.textContent}>
            <VRARPageAppearAnimation classes={`${styles.textWrapper} leftFlex`}>
              <p className={`${styles.text} text`}>
                Enticing users with diverse content and helping them meditate, calm down, and recharge daily,
                InnerVR aims to make mindfulness a habit.
              </p>
            </VRARPageAppearAnimation>
            <VRARPageAppearAnimation classes={`${styles.textWrapper} rightFlex`}>
              <p className={`${styles.text} text`}>
                The application supports Quest, Quest 2, and Meta Quest Pro.
              </p>
            </VRARPageAppearAnimation>
          </div>
          <InnerVRBorder />
          <InnerVRAboutBlock />
        </InnerVRCard>
      </div>
    </section>
  );
}

export default InnerVRAboutSection;
