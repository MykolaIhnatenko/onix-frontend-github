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

import styles from '../../../components/ContactFormModal/sass/contactFormModal.module.scss';

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
        className={`d-flex ${styles.wrapper}
        ${careersModalView === CAREERS_SUCCESS
          ? styles.blogsSuccessContainer : ''}`}
      >
        <div className={`${careersModalView === CAREERS_ERROR ? styles.errorBg : styles.bg}`}>
          <ImageComponent
            src={ContactFormBackground}
            fill
            alt="form-background"
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
