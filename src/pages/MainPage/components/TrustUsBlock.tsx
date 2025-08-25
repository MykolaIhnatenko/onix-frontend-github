import { useDispatch, useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import { generalSans, ibmPlexMono } from '../../../fonts/MainFonts';
import CardsBlock from '../../../components/CardsBlock/CardsBlock';
import { ITrustUsBlock } from '../../MachineLearningPageView/interfaces/ITrustUsBlock';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import TrustUsBackgroundMobileWebp from '@/images/img_trust_us_mobile_bg@2x.webp';

function TrustUsBlock({
  title, subtitle = null, data, dropBlockTitle, dropBlockBtnTitle, classes,
  dropBlockBgVariant, buttonText, dropBlockVariant, mobileBg, dropBlockText, disableBg,
  mobileBgVariant, buttonFontSizeSmall, withBtn, withoutDropBlockBg, tabletBg,
  trustUsBlockBg = TrustUsBackgroundMobileWebp, withoutAnimate = true, saleUrl, idBtn,
  trustUsBlockMobileBg, animatedGradient = false, isPInDropBlockTitle,
}: ITrustUsBlock) {
  const dispatch = useDispatch();
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: trustUsBlockBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = trustUsBlockBg;
    } else if (isXSDevice) {
      bg.background = trustUsBlockMobileBg || trustUsBlockBg;
    }
    return bg;
  };

  return (
    <div className={`
      max-w-[1920px] pt-[80px] mx-auto relative bg-white
      ${generalSans.variable} 
      ${ibmPlexMono.variable} 
      ${classes?.container || ''}
      `}
    >
      {(!mobileBgVariant && trustUsBlockBg) && (
        <ImageComponent
          src={getBackground().background}
          alt="TrustUsBackground"
          fill
          className={`min-md:hidden ${classes?.bgMobile || ''}`}
          sizes="100vw"
        />
      )}
      <MainTitle
        className={`normal-case mb-[40px] px-[15px] z-[2] relative min-md:pl-[30px]
          min-md:mb-[60px] min-lg:mb-[80px] min-lg:pl-[70px] min-xxxl:pl-[80px]
          ${classes?.sectionTitle || ''}`}
      >
        {title}
      </MainTitle>
      {subtitle}
      {buttonText && !saleUrl && (
        <div
          className={`px-[15px] pb-[80px] min-md:px-[30px] min-md:pb-[60px] min-lg:px-[70px]
            min-lg:pb-[40px] min-xxxl:px-[80px] ${classes?.buttonWrapper || ''}`}
        >
          <ButtonPrimary
            id={idBtn}
            text={buttonText}
            styleContainer={`max-w-[420px] text-[18px] leading-[24px] ${classes?.button || ''}`}
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
            fontSizeSmallOnMobile={buttonFontSizeSmall}
          />
        </div>
      )}
      <CardsBlock
        idBtn={idBtn}
        data={data}
        dropBlockTitle={dropBlockTitle}
        dropBlockBtnTitle={dropBlockBtnTitle}
        dropBlockBg={dropBlockBgVariant}
        dropBlockVariant={dropBlockVariant}
        mobileBg={mobileBg}
        dropBlockText={dropBlockText}
        disableBg={disableBg}
        withoutAnimate={withoutAnimate}
        withBtn={withBtn}
        withoutDropBlockBg={withoutDropBlockBg}
        tabletBg={tabletBg}
        classes={classes?.CardsBlockClasses}
        animatedGradient={animatedGradient}
        isPInDropBlockTitle={isPInDropBlockTitle}
      />
    </div>
  );
}

export default TrustUsBlock;
