import { useDispatch } from 'react-redux';

import { IButtonView } from '../interfaces/IButtonView';
import { setModalView, setShowContactForm, setIsFormSendFromPage } from '../../../store/app/contactForm/slice';
import { FormModalVariants } from '../../../store/app/contactForm/interfaces/IContactForm';
import { useAppSelector } from '../../../hook/reduxToolkit';
import { setIsOpenTopics, setIsShowSubscribeForm } from '../../../store/app/subscribeForm/slice';
import { setIsShowSubscribeMainForm } from '../../../store/app/subscribeMainForm/slice';
import { setIsShowDownloadForm } from '../../../store/app/downloadForm/slice';
import { ibmPlexMono } from '../../../fonts/MainFonts';
import { setShowCareersModal } from '../../../store/careers/slice';
import { FormMessageButtonVariant } from '../../../constants/enums';
import { setBlockShowLeavingForm, setLeavingModalView, setShowLeavingForm } from 'store/app/leavingForm/slice';
import { LeavingFormModalVariants } from 'store/app/leavingForm/interfaces/ILeavingForm';

import styles from '../sass/formMessagesButton.module.scss';

function FormMessagesButton({ title, variant }: IButtonView) {
  const dispatch = useDispatch();

  const {
    modalView, isFormSendFromPage,
  } = useAppSelector((state) => state?.contactForm);
  const { FORM, ERROR, SUCCESS } = FormModalVariants;
  const leavingForm = LeavingFormModalVariants.FORM;
  const onClickHandler = () => {
    if (modalView === ERROR || (modalView === SUCCESS && isFormSendFromPage)) {
      dispatch(setShowContactForm({ showContactForm: false }));
    }
    if (variant === FormMessageButtonVariant.BLOGS) {
      dispatch(setIsShowSubscribeForm({ isShowSubscribeForm: false }));
      dispatch(setIsShowDownloadForm({ isShowDownloadForm: false }));
      dispatch(setIsOpenTopics({ isOpenTopics: false }));
    }
    if (variant === FormMessageButtonVariant.CAREERS) {
      dispatch(setShowCareersModal({ isShowCareersModal: false }));
    }
    if (variant === FormMessageButtonVariant.LEAVING_FORM) {
      dispatch(setShowLeavingForm({ showLeavingForm: false }));
      dispatch(setLeavingModalView({ modalView: leavingForm }));
      dispatch(setModalView({ modalView: FORM }));
      dispatch(setBlockShowLeavingForm({ isBlockShowLeavingForm: true }));
    }
    dispatch(setIsShowSubscribeMainForm({ isShowSubscribeFormMein: false }));
    dispatch(setModalView({ modalView: FORM }));
    dispatch(setIsFormSendFromPage({ isFormSendFromPage: false }));
  };

  return (
    <button type="button" className={`${styles.btn} ${ibmPlexMono.variable}`} onClick={onClickHandler}>
      {title}
    </button>
  );
}

export default FormMessagesButton;
