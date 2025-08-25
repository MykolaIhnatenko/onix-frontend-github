import { motion } from 'framer-motion';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Modal from '../../../components/ContactFormModal/components/Modal';
import CloseButton from '../../../components/CloseButton/CloseButton';
import SuccessfulView from '../../../components/ContactFormModal/components/SuccessfulView';
import ErrorView from '../../../components/ContactFormModal/components/ErrorView';
import IStore from '../../../store/interfaces/IStore';
import { CareersFormModalVariants, ICareers } from '../../../store/careers/interfaces/ICareers';
import { setCareersModalView, setShowCareersModal } from '../../../store/careers/slice';
import ImageComponent from '../../../components/Image/Image';
import { FormMessageButtonVariant } from '../../../constants/enums';

import ContactFormBackground from '@/images/mainPage/img_contactFormBackground.webp';

function CareersFormModal() {
  const dispatch = useDispatch();
  const {
    isShowCareersModal, careersModalView,
  } = useSelector<IStore, ICareers>((state) => state?.careers, shallowEqual);

  const { CAREERS_FORM, CAREERS_SUCCESS, CAREERS_ERROR } = CareersFormModalVariants;

  const modal = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: '0%', opacity: 1 },
  };

  return (
    <Modal isShow={isShowCareersModal}>
      <motion.div
        variants={modal}
        initial="hidden"
        animate={isShowCareersModal ? 'visible' : 'hidden'}
        className={`d-flex relative flex justify-center items-center p-[64px_20px_0_20px] overflow-auto
            overflow-y-hidden min-h-[calc(100vh-70px)] bg-white mt-[70px] gap-[100px] 
            screen-lg:mt-[145px] screen-lg:min-h-[calc(100vh-145px)] screen-lg:p-[80px_49px_40px] 
            screen-sm:mt-[70px] screen-sm:p-[80px_0_100px_0] screen-sm:min-h-[calc(100vh-70px)]`}
      >
        <div
          className={`${careersModalView === CAREERS_ERROR
            ? 'hidden'
            : 'absolute right-0 bottom-0 w-full h-full z-[-1]'}`}
        >
          <ImageComponent
            src={ContactFormBackground}
            fill
            alt="form-background"
            className="object-cover"
          />
        </div>
        <CloseButton
          onClick={() => {
            dispatch(setShowCareersModal({ isShowCareersModal: false }));
            dispatch(setCareersModalView({ modalView: CAREERS_FORM }));
          }}
          classes={{
            container: 'absolute right-[20px] top-[20px] screen-lg:right-[30px] '
              + 'screen-lg:top-[30px] screen-sm:right-[15px] screen-sm:top-[20px]',
          }}
        />
        {(careersModalView === CAREERS_SUCCESS) && (<SuccessfulView variant={FormMessageButtonVariant.CAREERS} />)}
        {(careersModalView === CAREERS_ERROR) && (<ErrorView />)}
      </motion.div>
    </Modal>
  );
}
export default CareersFormModal;
