import { shallowEqual, useDispatch } from 'react-redux';
import { StaticImageData } from 'next/image';
import { useEffect } from 'react';

import { useAppSelector } from '../../hook/reduxToolkit';
import ImageComponent from '../../components/Image/Image';
import FormView from '../../components/ContactFormModal/components/FormView';
import PagesToSalesChannels from '../../constants/PageToSalesChannels';
import { FormModalVariants } from '../../store/app/contactForm/interfaces/IContactForm';
import SuccessfulView from '../../components/ContactFormModal/components/SuccessfulView';
import ErrorPageView from '../ErrorPageView/ErrorPageView';
import ContactUsPageMobileBg from '../../assets/images/contactUsPageView/img_contactUsPageMobileBg@2x.webp';
import ContactUsPageTabletBg from '../../assets/images/contactUsPageView/img_contactUsPageTabletBg@2x.webp';
import ContactUsPageBg from '../../assets/images/contactUsPageView/img_contactUsPageBg@2x.webp';
import { setModalView } from '../../store/app/contactForm/slice';
import Modeltype from '../../constants/Modeltype';
import IContactUsPageView from './interfaces/IContactUsPageView';

import styles from './sass/contactUsPageView.module.scss';

function ContactUsPageView({ salesChannel }: IContactUsPageView) {
  const {
    modalView,
  } = useAppSelector((state) => state?.contactForm, shallowEqual);
  const {
    screenSizes: {
      isMDDevice, isSMDevice, isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const dispatch = useDispatch();
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
  const { FORM, SUCCESS, ERROR } = FormModalVariants;

  useEffect(() => () => {
    dispatch(setModalView({ modalView: FORM }));
  }, []);

  return (
    <div>
      <div
        className={`d-flex  ${styles.wrapper} ${styles[modalView]}`}
      >
        <div className={styles.formBg}>
          <ImageComponent
            src={getBackground().background}
            fill
            alt="form-background"
          />
        </div>
        <div className={styles.content}>
          {modalView === FORM && (
          <FormView
            modeltypeProps={Modeltype.CONTACT_FORM_PAGE}
            salesChannel={salesChannel || PagesToSalesChannels.CONTACT_US}
            pageMode
          />
          )}
          {modalView === SUCCESS && (<SuccessfulView />)}
          {modalView === ERROR && (<ErrorPageView />)}
        </div>
      </div>
    </div>
  );
}

export default ContactUsPageView;
