import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setShowContactForm } from '../../../../store/app/contactForm/slice';
import Image from '../../../../components/Image/Image';
import VRARPageAppearAnimation from '../../../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import { ButtonType } from '../../../../constants/enums';

import styles from '../sass/ResultBody.module.scss';

const arrowResultsBg = '/static/images/Pages/MiPaddle/arrowResultBg@2x.png';

function ResultBody() {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = () => setIsActive(!isActive);
  const dispatch = useDispatch();
  return (
    <div
      className={styles.resultsBody}
      onClick={onClickHandler}
      role="presentation"
    >
      <VRARPageAppearAnimation offset={-4} delay={400} triggerOnce>
        <h2>Look for a custom mobile app development for your particular business needs?</h2>
      </VRARPageAppearAnimation>

      <div
        id={ButtonType.CASE}
        onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
        onKeyDown={() => dispatch(setShowContactForm({ showContactForm: true }))}
        role="button"
        tabIndex="0"
        className="btnContactModal"
      >
        <VRARPageAppearAnimation
          offset={-4}
          delay={400}
          classes={isActive ? `${styles.btn} ${styles.active}` : styles.btn}
          triggerOnce
        >
          contact us
        </VRARPageAppearAnimation>
      </div>

      <VRARPageAppearAnimation
        classes={isActive ? `${styles.resultsArrowBg} ${styles.arrowActive}` : styles.resultsArrowBg}
        translate="translateX"
        delay={400}
        offset={-4}
        triggerOnce
      >
        <Image
          width={365}
          height={560}
          src={arrowResultsBg}
          alt="arrow"
        />
      </VRARPageAppearAnimation>
    </div>
  );
}

export default ResultBody;
