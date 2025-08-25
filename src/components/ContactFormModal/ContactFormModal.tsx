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

function ContactFormModal({ salesChannel }: IContactFormModal) {
  const dispatch = useDispatch();
  const { route } = useRouter();

  const {
    isShowContactForm, modalView,
  } = useAppSelector((state) => state?.contactForm, shallowEqual);

  const { FORM, SUCCESS, ERROR } = FormModalVariants;

  const modal = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: '0%', opacity: 1 },
  };

  const getBgClassName = () => {
    let className = 'absolute right-0 bottom-0 w-full h-full z-[-1]';
    if (modalView === FORM) {
      className = 'absolute right-0 bottom-0 w-full h-full z-[-1] screen-lg:hidden';
    }
    if (modalView === ERROR) {
      className = 'hidden';
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
        className={`d-flex relative flex justify-center items-center p-[64px_20px_0_20px]
            overflow-auto overflow-y-hidden min-h-[calc(100vh-70px)] bg-white mt-[70px] gap-[100px] 
            screen-lg:mt-[145px] screen-lg:min-h-[calc(100vh-145px)] screen-lg:p-[80px_49px_40px] 
            screen-sm:mt-[70px] screen-sm:p-[80px_0_100px_0] screen-sm:min-h-[calc(100vh-70px)]
        ${modalView === SUCCESS || modalView === ERROR ? '!pb-[64px]' : ''}
        ${ibmPlexMono.variable} ${generalSans.variable} ${RobotoFont.variable}`}
        onClick={onClickHandler}
      >
        <div className={getBgClassName()}>
          <ImageComponent
            src={ContactFormBackground}
            fill
            alt="form-background"
            className="w-full h-full object-cover"
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
