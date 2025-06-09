import { useDispatch } from 'react-redux';

import ImageComponent from '../../../../components/Image/Image';
import { setShowContactForm } from '../../../../store/app/contactForm/slice';
import { IFilledContactUs } from '../interfaces/IFilledContactUs';

import styles from '../sass/filledContactUs.module.scss';

function FilledContactUs({
  imageSrc,
  children,
  imageWidth,
  imageHeight,
  idBtn,
}: IFilledContactUs) {
  const dispatch = useDispatch();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageWrapper}>
        <ImageComponent
          src={imageSrc}
          alt="mobileImage"
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <div className={styles.textWrapper}>
        {children}
        <div
          id={idBtn}
          role="presentation"
          onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          className={`${styles.buttonContainer} btnContactModal`}
        >
          <span className="btn">Contact us</span>
        </div>
      </div>
    </div>
  );
}

export default FilledContactUs;
