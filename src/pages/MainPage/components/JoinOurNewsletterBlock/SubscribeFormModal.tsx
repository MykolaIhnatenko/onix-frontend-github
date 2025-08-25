import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../../hook/reduxToolkit';
import Modal from '../../../../components/ContactFormModal/components/Modal';
import CloseButton from '../../../../components/CloseButton/CloseButton';
import SuccessfulView from '../../../../components/ContactFormModal/components/SuccessfulView';
import ErrorView from '../../../../components/ContactFormModal/components/ErrorView';
import { FormModalVariants } from '../../../../store/app/contactForm/interfaces/IContactForm';
import { setIsShowSubscribeMainForm } from '../../../../store/app/subscribeMainForm/slice';
import { setModalView } from '../../../../store/app/contactForm/slice';
import ContactUsPageBg from '../../../../assets/images/contactUsPageView/img_contactUsPageBg@2x.webp';
import ContactUsPageTabletBg from '../../../../assets/images/contactUsPageView/img_contactUsPageTabletBg@2x.webp';
import ContactUsPageMobileBg from '../../../../assets/images/contactUsPageView/img_contactUsPageMobileBg@2x.webp';
import useScrollBlocked from '../../../../hook/useScrollBlocked';

function BlogsFormModal() {
  const dispatch = useDispatch();
  const { isShowSubscribeForm, modalView } = useAppSelector((state) => state?.subscribeFormMain);
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice,
    },
  } = useAppSelector((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: ContactUsPageBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = ContactUsPageTabletBg;
    } else if (isXSDevice) {
      bg.background = ContactUsPageMobileBg;
    }
    return bg;
  };

  const modal = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: '0%', opacity: 1 },
  };
  const { FORM, SUCCESS, ERROR } = FormModalVariants;

  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      dispatch(setIsShowSubscribeMainForm({ isShowSubscribeFormMein: false }));
      dispatch(setModalView({ modalView: FORM }));
    }
  };

  useEffect(() => {
    if (isShowSubscribeForm) {
      window.addEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isShowSubscribeForm]);

  useScrollBlocked(isShowSubscribeForm);

  return (
    <Modal isShow={isShowSubscribeForm}>
      <motion.div
        variants={modal}
        initial="hidden"
        animate={isShowSubscribeForm ? 'visible' : 'hidden'}
        className={`relative flex justify-center min-h-[calc(100vh-70px)] bg-white
         mt-[70px] gap-[100px] p-[64px_20px_0_20px] overflow-hidden
          screen-lg:p-[80px_49px_40px] screen-lg:min-h-[calc(100vh-145px)] screen-lg:mt-[145px]
          screen-md:p-[80px_0_40px_0] screen-md:min-h-[calc(100vh-70px)] screen-md:mt-[70px]
        `}
      >
        <CloseButton
          onClick={() => {
            dispatch(setIsShowSubscribeMainForm({ isShowSubscribeFormMein: false }));
            dispatch(setModalView({ modalView: FORM }));
          }}
          classes={{
            container: 'absolute right-[20px] top-[20px] screen-lg:right-[30px] '
              + 'screen-lg:top-[30px] screen-sm:right-[15px] screen-sm:top-[20px]',
          }}
        />
        {(modalView === SUCCESS) && (
        <SuccessfulView
          text="You have successfully subscribed to our Newsletter."
          background={getBackground().background}
        />
        )}
        {(modalView === ERROR) && (<ErrorView />)}
      </motion.div>
    </Modal>
  );
}
export default BlogsFormModal;
