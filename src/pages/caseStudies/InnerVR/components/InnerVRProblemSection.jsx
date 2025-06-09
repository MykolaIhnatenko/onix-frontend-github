import InnerVRCard from './InnerVRCard';
import InnerVRBorder from './InnerVRBorder';
import InnerVRVideoBlock from './InnerVRVideoBlock';
import InnerVRListItem from './InnerVRListItem';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import { problems } from '../data/InnerVRData';

import styles from '../sass/InnerVRProblemSection.module.scss';

function InnerVRProblemSection() {
  return (
    <section className={styles.problemSection}>
      <div className="containerInnerVR pt">
        <InnerVRCard>
          <InnerVRVideoBlock />
          <InnerVRBorder />
          <div className={styles.content}>
            <div className={`${styles.left} leftFlex`}>
              <VRARPageAppearAnimation tag="p" classes={`${styles.leftText} text`}>
                VR technology has the unique capability to create a sense of presence in various 3D
                computer-generated environments, capturing a person’s attention and blocking distractions
                from the real world.
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation tag="h3" classes={`${styles.leftSubtitle} subtitle`}>
                This allows addressing
                {' '}
                <br />
                the challenges of practicing mindfulness by:
              </VRARPageAppearAnimation>
              <ul className={styles.list}>
                {problems.map((item, index) => (
                  <InnerVRListItem key={['item', index].join('_')} item={item} />
                ))}
              </ul>
            </div>
            <div className={`${styles.right} rightFlex`}>
              <VRARPageAppearAnimation tag="p" classes={`${styles.rightText} text`}>
                There is evidence that appropriately designed VR mindfulness sessions can support mindfulness
                practice by increasing users’ state of mindfulness, reducing negative emotional states,
                and inducing positive affect.
                <br />
                <br />
                Some reported effects include decreased levels of sadness, anger, and anxiety, as well as
                being significantly more relaxed.
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation tag="h3" classes={`${styles.rightSubtitle} subtitle`}>
                This makes VR meditation app development a promising undertaking for game developers,
                patients, and therapists alike.
              </VRARPageAppearAnimation>
            </div>
          </div>
        </InnerVRCard>
      </div>
    </section>
  );
}

export default InnerVRProblemSection;
