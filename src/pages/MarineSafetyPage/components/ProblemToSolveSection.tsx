import VRARContent from 'components/VRARContent/VRARContent';
import problemIcons from '../data/problemIcons';

import styles from '../sass/MarineSafety.module.scss';

function ProblemToSolveSection() {
  return (
    <section className={styles.problemOuterContainer}>
      <div className={styles.problemInnerContainer}>
        <VRARContent className={styles.subtitleContainer}>
          <h2 className={styles.subtitle}>Problem to solve</h2>
        </VRARContent>
        <VRARContent className={styles.biggerTextContainer}>
          <p className={styles.biggerText}>
            The application addresses the problem of safety for
            individuals and groups while on the open water,
            in the mountains, woods, caves, or other environments
            where getting lost is highly probable and may prove fatal.
          </p>
        </VRARContent>
        <VRARContent className={styles.mainTextContainer}>
          <p className={styles.mainText}>
            For example, people, children, and pets
            on motor and sailing vessels quite often fall overboard.
            If it happens unnoticed by others, the crew eventually
            may have difficulty locating the spot, whereas they
            might have minutes to recover the person, e.g., when the water is cold.
          </p>
          <p className={styles.mainText}>
            A prompt alarm and clear direction to the incident
            spot are essential for overnight
            passages, couples, and families.
          </p>
        </VRARContent>
        <VRARContent className={styles.iconsContainer}>
          {problemIcons.map((icon, index) => (
            <div className={styles.iconContainer} key={['icons', index].join('_')}>
              {icon}
            </div>
          ))}
        </VRARContent>
      </div>
    </section>
  );
}

export default ProblemToSolveSection;
