import { useDispatch, useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';
import { useEffect } from 'react';

import useWindowSize from '../../../hook/useWindowSize';
import { useAppSelector } from '../../../hook/reduxToolkit';
import SuccessfulView from '../../../components/ContactFormModal/components/SuccessfulView';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import DTCContactForm from './DTCContactForm';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import ImageComponent from '../../../components/Image/Image';
import { FormModalVariants } from '../../../store/app/contactForm/interfaces/IContactForm';
import PagesToSalesChannels from '../../../constants/PageToSalesChannels';
import { FormMessageButtonVariant } from '../../../constants/enums';
import IDedicatedTeamCalculatorPageView from '../interfaces/IDedicatedTeamCalculatorPageView';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import { SM_DEVICE } from '../../../constants/constants';
import DTCFormSuccessBg from '../../../assets/images/dedicatedTeamCalculator/img_form_bg_success.webp';
import DTCFormSuccessBgTablet from '../../../assets/images/dedicatedTeamCalculator/img_form_bg_success_tablet.webp';
import { setModalView, setShowContactForm } from '../../../store/app/contactForm/slice';

import DTCCalculatorFormBg from '@/images/dedicatedTeamCalculator/img_form_bg@2x.webp';
import DTCCalculatorFormTabletBg from '@/images/dedicatedTeamCalculator/img_form_tablet_bg@2x.webp';
import DTCCalculatorFormMobileBg from '@/images/dedicatedTeamCalculator/img_form_mobile_bg@2x.webp';
import styles from '../sass/DTCCalculator.module.scss';

function DTCCalculatorView({
  resetSpecialistValue, changeSpecialistValue, changeTechnologyValue,
  resetTechnologyValue, duration, setDuration, currentDomain, setDomains, specialists,
  technologies, resetAllValues,
}: IDedicatedTeamCalculatorPageView) {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isLGDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const dispatch = useDispatch();
  const { modalView } = useAppSelector((state) => state?.contactForm);
  const { FORM, SUCCESS } = FormModalVariants;
  const isSuccess = modalView === SUCCESS;
  const { width } = useWindowSize();
  const mobileSuccess = width < SM_DEVICE && modalView === SUCCESS;
  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      form: DTCCalculatorFormBg,
      success: DTCFormSuccessBg,
    };
    if (isMDDevice || isSMDevice || isLGDevice) {
      bg.form = DTCCalculatorFormTabletBg;
      bg.success = DTCFormSuccessBgTablet;
    } else if (isXSDevice) {
      bg.form = DTCCalculatorFormMobileBg;
      bg.success = DTCFormSuccessBgTablet;
    }
    return bg;
  };

  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      dispatch(setShowContactForm({ showContactForm: false }));
      dispatch(setModalView({ modalView: FORM }));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    };
  });

  return (
    <PageContainer className={styles.container}>
      <MainTitle className={styles.title}>
        Get an approximate team cost for your project in 4 simple steps
      </MainTitle>
      <div className={styles.calculatorWrapper}>
        <div>
          <StepOne
            specialists={specialists}
            changeSpecialistValue={changeSpecialistValue}
          />
          <StepTwo
            technologies={technologies}
            changeTechnologyValue={changeTechnologyValue}
          />
          <StepThree
            setDomains={setDomains}
            currentDomain={currentDomain}
          />
          <StepFour
            duration={duration}
            setDuration={setDuration}
          />
        </div>
        <div className={styles.form} style={{ minHeight: mobileSuccess ? '392px' : '' }}>
          <div className={`${styles.backgroundForm} ${isSuccess ? styles.backgroundSuccess : ''}`}>
            <ImageComponent
              src={isSuccess ? getBackground().success : getBackground().form}
              alt="Dedicated Team Calculator Form Background"
              sizes="100vw"
            />
          </div>
          { modalView === FORM && (
            <DTCContactForm
              salesChannel={PagesToSalesChannels.DEDICATED_TEAM_CALCULATOR}
              resetSpecialistValue={resetSpecialistValue}
              resetTechnologyValue={resetTechnologyValue}
              setDuration={setDuration}
              setDomains={setDomains}
              specialists={specialists}
              technologies={technologies}
              duration={duration}
              currentDomain={currentDomain}
              resetAllValues={resetAllValues}
            />
          )}
          <div style={{ display: isSuccess ? 'block' : 'none' }}>
            <SuccessfulView variant={FormMessageButtonVariant.CALCULATOR} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default DTCCalculatorView;
