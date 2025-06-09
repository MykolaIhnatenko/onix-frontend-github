import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import DTCNumbersSection from './components/DTCNumbersSection';
import ButtonTypes from '../../constants/ButtonTypes';
import DTCCalculator from './components/DTCCalculator';
import IDedicatedTeamCalculatorPageView from './interfaces/IDedicatedTeamCalculatorPageView';
import { FormModalVariants } from '../../store/app/contactForm/interfaces/IContactForm';
import { setModalView } from '../../store/app/contactForm/slice';
import { ButtonType } from 'constants/enums';
import DTCFirstCTAImage from '@/images/dedicatedTeamCalculator/img_bg_first_CTA@2x.webp';
import DTCFirstCTATabletImage from '@/images/dedicatedTeamCalculator/img_bg_first_CTA_tablet@2x.webp';
import DTCFirstCTAMobileImage from '@/images/dedicatedTeamCalculator/img_bg_first_CTA_mobile@2x.webp';
import DTCSecondCTAImage from '@/images/dedicatedTeamCalculator/img_bg_second_CTA@2x.webp';
import DTCSecondCTATabletImage from '@/images/dedicatedTeamCalculator/img_bg_second_CTA_tablet@2x.webp';
import DTCSecondCTAMobileImage from '@/images/dedicatedTeamCalculator/img_bg_second_CTA_mobile@2x.webp';
import IndustriesMainBg from '@/images/industriesPage/img_industries_main_bg@2x.webp';
import IndustriesMainBgBigDesc from '@/images/industriesPage/img_industries_main_bgBigDesc@2x.webp';
import IndustriesMainBgTablet from '@/images/industriesPage/img_industries_main_bg_tablet@2x.webp';
import IndustriesMainBgMobile from '@/images/industriesPage/img_industries_main_bg_mobile@2x.webp';
import MainBlockWith1TextBtn from 'components/MainBlockWith1TextBtn/MainBlockWith1TextBtn';
import DTCMainPeopleImage from '@/images/dedicatedTeamCalculator/img_main_bg.webp';

function DedicatedTeamCalculatorPageView({
  resetSpecialistValue, changeSpecialistValue, changeTechnologyValue,
  resetTechnologyValue, duration, setDuration, currentDomain, setDomains, specialists,
  technologies, resetAllValues,
}: IDedicatedTeamCalculatorPageView) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const dispatch = useDispatch();
  const { FORM } = FormModalVariants;

  const getBackground = () => {
    const bg = {
      mainScreen: IndustriesMainBg,
      First: DTCFirstCTAImage,
      Second: DTCSecondCTAImage,
    };
    if (isXXXLDevice) {
      bg.mainScreen = IndustriesMainBgBigDesc;
    } else if (isSMDevice) {
      bg.mainScreen = IndustriesMainBgTablet;
      bg.First = DTCFirstCTATabletImage;
      bg.Second = DTCSecondCTATabletImage;
    } else if (isXSDevice) {
      bg.mainScreen = IndustriesMainBgMobile;
      bg.First = DTCFirstCTAMobileImage;
      bg.Second = DTCSecondCTAMobileImage;
    }

    return bg;
  };

  useEffect(() => () => {
    dispatch(setModalView({ modalView: FORM }));
  }, []);

  return (
    <>
      <MainBlockWith1TextBtn
        pageTitle="Dedicated team cost calculator"
        pageText="Fast cost estimation of your dedicated team one click away"
        btnText="Speak to our expert"
        rightImg={DTCMainPeopleImage}
        backgroundImg={getBackground().mainScreen}
        isMobile={isXSDevice || isSMDevice || isMDDevice}
      />
      <DTCNumbersSection />
      <CallToActionComponent
        id={ButtonType.LAND2}
        background={getBackground().First}
        withButton
        title={(
          <>
            Looking for specialists? Tell us more about your
            business needs and we&apos;ll form your perfect&nbsp;team!
          </>
        )}
        btnText="Speak to Our Expert"
        buttonType={ButtonTypes.PRIMARY}
        classes={{
          cta: `!pt-[72px] !pb-[160px] !text-black screen-lg:!p-[40px_30px_120px]
          screen-md:!p-[20px_30px_80px] screen-sm:!p-[20px_15px_80px]`,
          background: 'after:!hidden',
          title: `!max-w-[708px] !mx-auto !text-center !pb-[40px] !text-[30px] !leading-[40px]
          !text-black screen-md:!pb-[30px] screen-md:!text-[20px] screen-md:!leading-[28px]
          screen-md:!max-w-none`,
          btn: 'screen-md:!max-w-[330px]',
        }}
      />
      <DTCCalculator
        resetSpecialistValue={resetSpecialistValue}
        changeSpecialistValue={changeSpecialistValue}
        changeTechnologyValue={changeTechnologyValue}
        resetTechnologyValue={resetTechnologyValue}
        duration={duration}
        setDuration={setDuration}
        currentDomain={currentDomain}
        setDomains={setDomains}
        specialists={specialists}
        technologies={technologies}
        resetAllValues={resetAllValues}
      />
      <CallToActionComponent
        id={ButtonType.LAND3}
        background={getBackground().Second}
        withButton
        title={(
          <>
            Tell us about your product idea
            and let the&nbsp;magic&nbsp;unfold.
          </>
        )}
        btnText="Speak to Our Expert"
      />
    </>
  );
}

export default DedicatedTeamCalculatorPageView;
