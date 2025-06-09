import { motion } from 'framer-motion';
import { shallowEqual, useDispatch } from 'react-redux';
import { MouseEvent, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../hook/reduxToolkit';
import FormView from './components/FormView';
import SuccessfulView from './components/SuccessfulView';
import ErrorView from './components/ErrorView';
import CloseButton from '../CloseButton/CloseButton';
import ImageComponent from '../Image/Image';
import IContactFormModal from './interfaces/IContactFormModal';
import { FormModalVariants } from '../../store/app/contactForm/interfaces/IContactForm';
import Modal from './components/Modal';
import { setShowContactForm, setModalView } from '../../store/app/contactForm/slice';
import { generalSans, ibmPlexMono } from '../../fonts/MainFonts';
import RobotoFont from '../../fonts/RobotoFont';
import ContactFormBackground from '@/images/mainPage/img_contactFormBackground.webp';

import styles from './sass/contactFormModal.module.scss';

function ContactFormModal({ salesChannel }: IContactFormModal) {
  const dispatch = useDispatch();
  const { route } = useRouter();
  const isReferralPage = route === '/referral-program';

  const {
    isShowContactForm, modalView,
  } = useAppSelector((state) => state?.contactForm, shallowEqual);

  const { FORM, SUCCESS, ERROR } = FormModalVariants;

  const modal = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: '0%', opacity: 1 },
  };

  const getBgClassName = () => {
    let className = styles.bg;
    if (modalView === FORM) {
      className = styles.formBg;
    }
    if (modalView === ERROR) {
      className = styles.errorBg;
    }

    return className;
  };

  useEffect(() => {
    if (isShowContactForm) {
      dispatch(setShowContactForm({ showContactForm: false }));
      dispatch(setModalView({ modalView: FORM }));
    }
  }, [route]);

  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      dispatch(setShowContactForm({ showContactForm: false }));
      dispatch(setModalView({ modalView: FORM }));
    }
  };

  useEffect(() => {
    if (isShowContactForm) {
      window.addEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isShowContactForm]);

  const onClose = () => {
    dispatch(setShowContactForm({ showContactForm: false }));
    dispatch(setModalView({ modalView: FORM }));
  };

  const onClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Modal isShow={isShowContactForm} onClose={onClose}>
      <motion.div
        variants={modal}
        initial="hidden"
        animate={isShowContactForm ? 'visible' : 'hidden'}
        className={`d-flex  ${styles.wrapper} 
        ${isReferralPage ? styles.referralWrapper : styles.contactWrapper}
        ${modalView === SUCCESS || modalView === ERROR ? styles.successAndErrorWrapper : ''}
        ${ibmPlexMono.variable} ${generalSans.variable} ${RobotoFont.variable}`}
        onClick={onClickHandler}
      >
        <div className={getBgClassName()}>
          <ImageComponent
            src={ContactFormBackground}
            fill
            alt="form-background"
          />
        </div>
        <CloseButton
          onClick={() => {
            dispatch(setShowContactForm({ showContactForm: false }));
            dispatch(setModalView({ modalView: FORM }));
          }}
          classes={{
            container: 'absolute right-[20px] top-[20px] '
              + 'screen-lg:right-[30px] screen-lg:top-[30px] '
              + 'screen-md:right-[15px] screen-md:top-[20px]',
            rectangle: styles.closeButtonRectangle,
          }}
        />
        {modalView === FORM && (<FormView salesChannel={salesChannel} />)}
        {modalView === SUCCESS && (<SuccessfulView />)}
        {modalView === ERROR && (<ErrorView />)}
      </motion.div>
    </Modal>
  );
}

export default ContactFormModal;
