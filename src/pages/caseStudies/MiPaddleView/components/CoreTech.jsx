import PropTypes from 'prop-types';

import Image from '../../../../components/Image/Image';
import VRARPageAppearAnimation from '../../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/CoreTech.module.scss';

function CoreTech({ coreTechList }) {
  return (
    <section className={styles.coreTechWr}>
      <VRARPageAppearAnimation triggerOnce>
        <h2>Core technologies</h2>
      </VRARPageAppearAnimation>
      <div className={styles.coreTech}>
        {Object.keys(coreTechList).map((title) => (
          <VRARPageAppearAnimation
            classes={styles.coreTechItem}
            key={title}
            delay={coreTechList[title].delay}
            triggerOnce
          >
            <div className={styles.coreTechItemImg}>
              <Image
                src={coreTechList[title].src}
                width={coreTechList[title].width}
                height={coreTechList[title].height}
                alt="Core tech"
              />
            </div>
            <p>{title}</p>
          </VRARPageAppearAnimation>
        ))}
      </div>
    </section>
  );
}

CoreTech.propTypes = {
  coreTechList: PropTypes.shape({}).isRequired,
};

export default CoreTech;
