import InnerVRCard from './InnerVRCard';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import { stack } from '../data/InnerVRData';

import styles from '../sass/InnerVRTeamAndStackSection.module.scss';

function InnerVRTeamAndStackSection() {
  return (
    <section className={styles.teamAndStackSection}>
      <div className="containerInnerVR pt">
        <InnerVRCard>
          <VRARPageAppearAnimation tag="p" classes="title">
            The development team
            <br />
            and technology stack
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle} subtitle`}>
            The tech stack for the VR relaxation app development included:
          </VRARPageAppearAnimation>
          <div className={styles.cardsBlock}>
            {stack.map(({ id, title, text }) => (
              <div key={id} className={styles.card}>
                <h3 className="itemTitle whiteTitleColor">{title}</h3>
                <p className={`${styles.cardText} text`}>{text}</p>
                <p className="itemTitle whiteTitleColor">{id}</p>
              </div>
            ))}
          </div>
          <VRARPageAppearAnimation tag="p" classes={`${styles.testimonial} text`}>
            “We like having a project manager who helps manage the project, the development, and art team.”
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation tag="p" classes="itemTitle pinkTitleColor">
            Jimmy Gambier,
            <br />
            InnerVR CEO
          </VRARPageAppearAnimation>
        </InnerVRCard>
      </div>
    </section>
  );
}

export default InnerVRTeamAndStackSection;
