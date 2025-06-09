import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import ContactForm from './ContactForm';
import ContentText from '../../ContentText/ContentText';
import MainTitle from '../../MainTitle/MainTitle';
import contactFormData from '../data/contactFormData';
import refferralFormData from '../data/referralFormData';
import IContactFormModal from '../interfaces/IContactFormModal';

import styles from '../sass/formView.module.scss';

function FormView({ salesChannel, pageMode = false, modeltypeProps }: IContactFormModal) {
  const { route } = useRouter();
  const isReferralPage = route === '/referral-program';

  const mainTitle = () => {
    const titleText = 'Start your project easily with the Onix team today!';
    const referralText = 'Join the Onix Referral Program and Get Rewarded!';

    if (pageMode) {
      return <MainTitle tag="h1" className={styles.title}>{titleText}</MainTitle>;
    }

    if (isReferralPage) {
      return <MainTitle tag="h2" className={`${styles.title} ${styles.titleReferral}`}>{referralText}</MainTitle>;
    }

    return <MainTitle tag="h2" className={styles.title}>{titleText}</MainTitle>;
  };
  const featureAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const formData = isReferralPage ? refferralFormData : contactFormData;

  return (
    <>
      <div className={styles.leftBlock}>
        {mainTitle()}
        <ContactForm
          salesChannel={salesChannel}
          modeltypeProps={modeltypeProps}
          isReferralPage={isReferralPage}
        />
      </div>
      <div className={`d-flex d-col ${styles.rightBlock}`}>
        {isReferralPage
          ? <MainTitle tag="p" className={styles.rightBlockReferralTitle}>How to Refer:</MainTitle>
          : <ContentText tag="p" className={styles.rightBlockTitle}>What’s next?</ContentText>}
        <div className={`d-flex d-col ${styles.list}`}>
          {formData.map(({ id, title }, index) => (
            <motion.div
              custom={index + 1}
              variants={featureAnimation}
              key={id}
              className={`d-flex d-col ${styles.item}`}
            >
              {isReferralPage ? (
                <p className={`${isReferralPage ? styles.referralID : ''}`}>{id}</p>
              ) : (
                <span className={`${isReferralPage ? styles.referralID : ''}`}>{id}</span>
              )}
              <p className={styles.rightBlockText}>{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FormView;
