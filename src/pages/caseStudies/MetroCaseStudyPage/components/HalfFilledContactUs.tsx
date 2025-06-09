import { useDispatch } from 'react-redux';

import ImageComponent from '../../../../components/Image/Image';
import { setShowContactForm } from '../../../../store/app/contactForm/slice';
import { IHalfFilledContactUs } from '../interfaces/IFilledContactUs';

import styles from '../sass/halfFilledContactUs.module.scss';

function HalfFilledContactUs({
  imageSrc,
  children,
  imageWidth,
  imageHeight,
  idBtnFirst,
  idBtnSecond,
}: IHalfFilledContactUs) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.outerImageContainer}>
          <div className={styles.imageWrapper}>
            <ImageComponent
              src={imageSrc}
              alt="mobileImage"
              width={imageWidth}
              height={imageHeight}
              sizes="100vw"
            />
          </div>
          <div
            id={idBtnFirst}
            role="presentation"
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
            className={`${styles.buttonContainer} btnContactModal`}
          >
            <span className="btn">Contact us</span>
          </div>
        </div>
        <div className={styles.outerTextContainer}>
          <div className={styles.textWrapper}>
            {children}
          </div>
          <div
            id={idBtnSecond}
            role="presentation"
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
            className={`${styles.buttonContainer} btnContactModal`}
          >
            <span className="btn">Contact us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HalfFilledContactUs;
