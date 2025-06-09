import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../../hook/reduxToolkit';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import Icons from '../../../assets/icon';
import IGoodFaceContactUs from '../interfaces/IGoodFaceContactUs';

import styles from '../sass/goodFaceContactUsSection.module.scss';

function GoodFaceContactUsSection({
  bg, bgMobile, title, btnTitle, type = ' ', idBtn,
}: IGoodFaceContactUs) {
  const dispatch = useDispatch();
  const { isSMDevice, isXSDevice } = useAppSelector((state) => state.app.screenSizes);
  const isMobile = isXSDevice || isSMDevice;

  return (
    <section className={`${styles.contactUs} ${styles[type]}`}>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.content}>
            {title}
          </div>
          <div
            id={idBtn}
            role="presentation"
            className={`${styles.btn} btnContactModal`}
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          >
            <div className={`${styles.titleContainer} btn`}>
              {btnTitle}
              <div className={styles.arrow}>
                <Icons.IconGoodFaceArrow />
              </div>
            </div>
          </div>
        </div>
        {isMobile ? bgMobile : bg}
      </div>
    </section>
  );
}

export default GoodFaceContactUsSection;
