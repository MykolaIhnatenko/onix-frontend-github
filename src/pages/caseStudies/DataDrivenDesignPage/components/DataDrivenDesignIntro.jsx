import FAQs from './FAQs';
import Tags from './Tags';
import ImageComponent from '../../../../components/Image/Image';
import { useAppSelector } from '../../../../hook/reduxToolkit';
import { SM_DEVICE } from '../../../../constants/constants';

import styles from '../sass/DataDrivenDesignIntro.module.scss';

const adoricImage = '/static/images/Pages/DataDrivenDesignPage/img_adoric_campaign.webp';
const whistleImage = '/static/images/Pages/DataDrivenDesignPage/img_whistle_live.webp';

function DataDrivenDesignIntro() {
  const { screenWidth } = useAppSelector((state) => state.app.screenSizes);

  const isNotMobile = screenWidth > SM_DEVICE;

  const moveToAdoricCase = () => {
    const offset = document?.querySelector('#adoricCase')?.offsetTop;
    window.scrollTo({
      top: offset || 0,
      behavior: 'smooth',
    });
  };

  const moveToWhistleLiveCase = () => {
    const offset = document?.querySelector('#whistleLiveCase')?.offsetTop;
    window.scrollTo({
      top: offset || 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.titleContainer}>Data-driven design at Onix</h1>
      <h2 className={styles.subTitleContainer}>The art of design backed by the science of data</h2>
      <div className={styles.introTextContainer}>
        At Onix, we adhere to the philosophy of data-driven UX and UI design: the creation of genuinely
        user-centered software products must be guided by information about what works with the end-users
        and what doesn’t. Our experts measure design efficiency by analyzing and interpreting users’ behavior.
        This allows them to generate and implement solutions for the best customer experience and business growth.
      </div>
      <div className={styles.introImagesContainer}>
        <div className={styles.introImageWrapper}>
          <div
            onClick={moveToAdoricCase}
            role="presentation"
            className={`${styles.introBackgroundAdoric} ${styles.imageAnimation}`}
          >
            <div className={styles.introImageAdoric}>
              <ImageComponent
                src={adoricImage}
                fill
                sizes="(max-width: 450px) 50vw, 100vw"
                alt="woman"
                priority={isNotMobile}
              />
            </div>
          </div>
          <div className={styles.introImageCaptionTitle}>
            <span
              onClick={moveToAdoricCase}
              role="presentation"
            >
              Case 1
            </span>
          </div>
          <div className={styles.introImageCaptionText}>
            <span
              onClick={moveToAdoricCase}
              role="presentation"
            >
              Adoric’s campaign templates
            </span>
          </div>
        </div>
        <div className={styles.introImageWrapper}>
          <div
            onClick={moveToWhistleLiveCase}
            role="presentation"
            className={`${styles.introBackgroundWhistle} ${styles.imageAnimation}`}
          >
            <div className={styles.introImageWhistle}>
              <ImageComponent
                src={whistleImage}
                fill
                sizes="(max-width: 450px) 50vw, 100vw"
                alt="people"
                priority={isNotMobile}
              />
            </div>
          </div>
          <div className={styles.introImageCaptionTitle}>
            <span
              onClick={moveToWhistleLiveCase}
              role="presentation"
            >
              Case 2
            </span>
          </div>
          <div className={styles.introImageCaptionText}>
            <span
              onClick={moveToWhistleLiveCase}
              role="presentation"
            >
              Whistle.Live categories and search
            </span>
          </div>
        </div>
      </div>
      <FAQs />
      <Tags />
    </div>
  );
}

export default DataDrivenDesignIntro;
