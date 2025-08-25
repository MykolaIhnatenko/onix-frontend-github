import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { IBracketologyContactUs } from '../interfaces/IBracketologyContactUs';
import useWindowSize from '../../../hook/useWindowSize';
import { MD_DEVICE, SM_DEVICE } from '../../../constants/constants';
import ImageComponent from '../../../components/Image/Image';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';

import contactUsBgMobile1 from '@/images/bracketology/contactUs/img_bg_mobile1@2x.webp';
import contactUsBgMobile2 from '@/images/bracketology/contactUs/img_bg_mobile2@2x.webp';
import contactUsBgTablet1 from '@/images/bracketology/contactUs/img_bg_tablet1@2x.webp';
import contactUsBgTablet2 from '@/images/bracketology/contactUs/img_bg_tablet2@2x.webp';
import contactUsBgDesktop1 from '@/images/bracketology/contactUs/img_bg_desktop1@2x.webp';
import contactUsBgDesktop2 from '@/images/bracketology/contactUs/img_bg_desktop2@2x.webp';
import styles from '../sass/BracketologyContactUs.module.scss';

function BracketologyContactUs({ firstVariant, className = '', idBtn }: IBracketologyContactUs) {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const [contactUs1PicturePath, contactUs2PicturePath] = useMemo(() => {
    let paths = [contactUsBgDesktop1, contactUsBgDesktop2];
    if (width <= MD_DEVICE) {
      paths = [contactUsBgTablet1, contactUsBgTablet2];
    }
    if (width < SM_DEVICE) {
      paths = [contactUsBgMobile1, contactUsBgMobile2];
    }

    return paths;
  }, [width]);

  return (
    <section className={`${styles.wrapper} ${className}`}>
      <div className={styles.content}>
        <ImageComponent
          src={firstVariant ? contactUs1PicturePath : contactUs2PicturePath}
          fill
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          quality={100}
          alt="sunset"
        />
        <BracketologyPageContainer className={styles.container}>
          <BracketologyText tag="h2" variant="title">
            Are you interested in TV gaming platform website design and development?
          </BracketologyText>
          <BracketologyText tag="p" variant="text">
            Just drop us a line and our experts will respond in no time.
          </BracketologyText>
          <div
            id={idBtn}
            className={`${styles.btn} btnContactModal`}
            role="presentation"
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          >
            Contact Us
          </div>
        </BracketologyPageContainer>
      </div>
    </section>
  );
}

export default BracketologyContactUs;
