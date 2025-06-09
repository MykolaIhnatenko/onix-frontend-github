import PropTypes from 'prop-types';

import Image from '../../../../components/Image/Image';
import VRARPageAppearAnimation from '../../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/HeaderInfo.module.scss';

const infoWrBg = '/static/images/Pages/MiPaddle/headerInfoBg.png';

function HeaderInfo({ headerInfoContent, isNotMobile }) {
  return (
    <VRARPageAppearAnimation classes={`${styles.infoWr} ${isNotMobile ? '' : styles.mobile}`} translate="translateX">
      <Image
        className={styles.yellowLineBg}
        src={infoWrBg}
        alt="background"
        fill
        priority
      />
      <div className={styles.infoCardWr}>
        {headerInfoContent.map(({
          title, id, img: { src, width, height }, content, delay,
        }) => (
          <VRARPageAppearAnimation classes={styles.infoCard} key={id} translate="translateX" delay={delay} offset={2}>
            <div className={styles.infoCardImg}>
              <Image
                src={src}
                alt={title}
                width={width}
                height={height}
              />
            </div>
            <div className={styles.infoCardText}>
              <p>{title}</p>
              <p>{content}</p>
            </div>
          </VRARPageAppearAnimation>
        ))}
      </div>
    </VRARPageAppearAnimation>
  );
}

HeaderInfo.defaultProps = {
  isNotMobile: false,
};

HeaderInfo.propTypes = {
  headerInfoContent: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isNotMobile: PropTypes.bool,
};

export default HeaderInfo;
