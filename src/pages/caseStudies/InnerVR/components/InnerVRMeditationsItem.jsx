import PropTypes from 'prop-types';
import { useMemo } from 'react';

import useWindowSize from '../../../../hook/useWindowSize';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/InnerVRMeditationsItem.module.scss';

function InnerVRMeditationsItem({
  id, text, img, imgTablet, imgMobile,
}) {
  const { width } = useWindowSize();

  const { src, imgHeight, imgWidth } = useMemo(() => {
    const values = { src: img, imgWidth: 610, imgHeight: 397 };
    if (width < 968) {
      values.src = imgTablet;
      values.imgWidth = 658;
      values.imgHeight = 397;
    }
    if (width < 768) {
      values.src = imgMobile;
      values.imgWidth = 295;
      values.imgHeight = 192;
    }

    return values;
  });

  return (
    <VRARPageAppearAnimation classes={styles.item} key={id}>
      <div className={styles.textWrapper}>
        {text}
      </div>
      <div className={styles.image}>
        <ImageComponent
          src={src}
          width={imgWidth}
          height={imgHeight}
          alt="vr_hero"
          sizes="100vw"
        />
      </div>
    </VRARPageAppearAnimation>
  );
}

InnerVRMeditationsItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  imgTablet: PropTypes.string.isRequired,
  imgMobile: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};

export default InnerVRMeditationsItem;
