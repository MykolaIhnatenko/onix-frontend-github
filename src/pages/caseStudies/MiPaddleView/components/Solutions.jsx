import PropTypes from 'prop-types';

import Image from '../../../../components/Image/Image';
import VRARPageAppearAnimation from '../../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/Solutions.module.scss';

function Solutions({ solutionList }) {
  return (
    <div className={styles.solutionListContainer}>
      <VRARPageAppearAnimation
        classes={styles.solutionListWr}
        translate="translateX"
        delay={1000}
        triggerOnce
      >
        <Image
          alt="solution background"
          className={styles.solutionBg}
          width={532}
          height={890}
          src="/static/images/Pages/MiPaddle/Solutions/solutionListBg.jpg"
          sizes="(max-width: 768px) 33vw, (min-width: 768px) 100vw"
        />
        {Object.keys(solutionList).map((title) => (
          <VRARPageAppearAnimation
            classes={styles.solutionListItem}
            key={title}
            translate="translateX"
            delay={1200}
            triggerOnce
          >
            <div className={styles.solutionListItemImg}>
              <Image
                alt="solution"
                width={40}
                height={40}
                src={solutionList[title]}
              />
            </div>
            <p>{title}</p>
          </VRARPageAppearAnimation>
        ))}
      </VRARPageAppearAnimation>
    </div>
  );
}

Solutions.propTypes = {
  solutionList: PropTypes.shape({}).isRequired,
};

export default Solutions;
