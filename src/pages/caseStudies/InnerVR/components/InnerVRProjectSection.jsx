import InnerVRCard from './InnerVRCard';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/InnerVRProjectSection.module.scss';

function InnerVRProjectSection() {
  return (
    <section className={styles.projectSection}>
      <div className="containerInnerVR pt">
        <InnerVRCard>
          <VRARPageAppearAnimation tag="p" classes="title">
            How Onix joined the project
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle} subtitle`}>
            Jimmy Gambier, the founder and CEO of InnerVR, is a product manager at Growth Verticals, Uber,
            but also tried his hand at virtual reality development.
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation tag="p" classes={`${styles.text} text`}>
            When he conceived a VR-first relaxation game experience, he began to develop it on his own.
          </VRARPageAppearAnimation>
          <div className={`${styles.textBlock} dFlex`}>
            <VRARPageAppearAnimation classes="leftFlex">
              <p className={`${styles.text} text`}>
                Unfortunately, despite initial promise, the project didn&apos;t go well as expected. The app performed
                well on Unity, but not so well on Oculus VR, causing unexpected challenges.
              </p>
            </VRARPageAppearAnimation>
            <VRARPageAppearAnimation classes="rightFlex">
              <p className={`${styles.text} text`}>
                When the creators arrived at the mountain forest village scene rendered in the Scriptable Render
                Pipeline, performance, lighting Issues, and bugs became a serious problem.
              </p>
            </VRARPageAppearAnimation>
          </div>
        </InnerVRCard>
      </div>
    </section>
  );
}

export default InnerVRProjectSection;
