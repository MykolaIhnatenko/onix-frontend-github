import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import { about } from '../data/InnerVRData';

import styles from '../sass/InnerVRAboutBlock.module.scss';

function InnerVRAboutBlock() {
  return (
    <div className={styles.aboutBlock}>
      {about.map(({ id, title, text }) => (
        <VRARPageAppearAnimation key={id} classes={styles.item}>
          <p className="subtitle">{title}</p>
          <p className="text">{text}</p>
        </VRARPageAppearAnimation>
      ))}
    </div>
  );
}

export default InnerVRAboutBlock;
