import Image from '../../../../components/Image/Image';
import VRARPageAppearAnimation from '../../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/SolutionsListStrip.module.scss';

const strip = '/static/images/Pages/MiPaddle/Solutions/solutionListType.svg';

function SolutionsListStrip() {
  return (
    <VRARPageAppearAnimation
      classes={styles.strip}
      translate="translateX"
      offset={-1}
      triggerOnce
    >
      <Image
        src={strip}
        width={31}
        height={28}
      />
    </VRARPageAppearAnimation>
  );
}

export default SolutionsListStrip;
