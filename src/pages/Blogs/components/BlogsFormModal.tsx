import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Modal from '../../../components/ContactFormModal/components/Modal';
import { useAppSelector } from '../../../hook/reduxToolkit';
import CloseButton from '../../../components/CloseButton/CloseButton';
import { setModalView } from '../../../store/app/contactForm/slice';
import SuccessfulView from '../../../components/ContactFormModal/components/SuccessfulView';
import ErrorView from '../../../components/ContactFormModal/components/ErrorView';
import { FormModalVariants } from '../../../store/app/contactForm/interfaces/IContactForm';
import { setIsOpenTopics, setIsShowSubscribeForm } from '../../../store/app/subscribeForm/slice';
import IBlogsFormModal from '../interfaces/IBlogsFormModal';
import { setDownloadModalView, setIsShowDownloadForm } from '../../../store/app/downloadForm/slice';

import styles from '../sass/blogsFormModal.module.scss';

function BlogsFormModal({ btnVariant }: IBlogsFormModal) {
  const dispatch = useDispatch();
  const { isShowSubscribeForm, subscribeModalView } = useAppSelector((state) => state?.subscribeForm);
  const { downloadModalView, isShowDownloadForm } = useAppSelector((state) => state?.downloadForm);
  const modal = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: '0%', opacity: 1 },
  };
  const { FORM, SUCCESS, ERROR } = FormModalVariants;

  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      dispatch(setIsShowSubscribeForm({ isShowSubscribeForm: false }));
      dispatch(setModalView({ modalView: FORM }));
      dispatch(setIsShowDownloadForm({ isShowDownloadForm: false }));
      dispatch(setDownloadModalView({ downloadModalView: FORM }));
      dispatch(setIsOpenTopics({ isOpenTopics: false }));
    }
  };

  useEffect(() => {
    if (isShowDownloadForm || isShowSubscribeForm) {
      window.addEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isShowDownloadForm, isShowSubscribeForm]);

  return (
    <Modal isShow={isShowSubscribeForm || isShowDownloadForm}>
      <motion.div
        variants={modal}
        initial="hidden"
        animate={isShowSubscribeForm || isShowDownloadForm ? 'visible' : 'hidden'}
        className={`d-flex ${styles.container} 
        ${btnVariant && (downloadModalView === SUCCESS || subscribeModalView === SUCCESS)
          ? styles.blogsSuccessContainer : ''}`}
      >
        <CloseButton
          onClick={() => {
            dispatch(setIsShowSubscribeForm({ isShowSubscribeForm: false }));
            dispatch(setModalView({ modalView: FORM }));
            dispatch(setIsShowDownloadForm({ isShowDownloadForm: false }));
            dispatch(setDownloadModalView({ downloadModalView: FORM }));
            dispatch(setIsOpenTopics({ isOpenTopics: false }));
          }}
          classes={{
            container: 'absolute right-[20px] top-[20px] screen-lg:right-[30px] '
              + 'screen-lg:top-[30px] screen-sm:right-[15px] screen-sm:top-[20px]',
          }}
        />
        {(subscribeModalView === SUCCESS || downloadModalView === SUCCESS) && (<SuccessfulView variant={btnVariant} />)}
        {(subscribeModalView === ERROR || downloadModalView === ERROR) && (<ErrorView />)}
      </motion.div>
    </Modal>
  );
}
export default BlogsFormModal;
