import { useDispatch, useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import { generalSans, ibmPlexMono } from '../../../fonts/MainFonts';
import TrustUsBackgroundMobileWebp from '@/images/img_trust_us_mobile_bg@2x.webp';
import CardsBlock from '../../../components/CardsBlock/CardsBlock';
import { ITrustUsBlock } from '../../MachineLearningPageView/interfaces/ITrustUsBlock';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import styles from '../sass/trustUsBlock.module.scss';

function TrustUsBlock({
  title, subtitle = null, data, dropBlockTitle, dropBlockBtnTitle, variant, classes,
  dropBlockBgVariant, buttonText, dropBlockVariant, mobileBg, dropBlockText, disableBg,
  mobileBgVariant, buttonFontSizeSmall, withBtn, withoutDropBlockBg, tabletBg,
  trustUsBlockBg = TrustUsBackgroundMobileWebp, withoutAnimate = true, saleUrl, idBtn,
  trustUsBlockMobileBg, animatedGradient = false,
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
      ${styles.container} 
      ${generalSans.variable} 
      ${ibmPlexMono.variable} 
      ${variant ? styles[variant] : ''}
      `}
    >
      {(!mobileBgVariant && trustUsBlockBg) && (
        <ImageComponent
          src={getBackground().background}
          alt="TrustUsBackground"
          fill
          className={styles.bgMobile}
          sizes="100vw"
        />
      )}
      <MainTitle className={`${styles.sectionTitle} ${subtitle ? styles.sectionTitleWithSub : ''}`}>
        {title}
      </MainTitle>
      {subtitle}
      {buttonText && !saleUrl && (
        <div className={styles.buttonWrapper}>
          <ButtonPrimary
            id={idBtn}
            text={buttonText}
            styleContainer={styles.button}
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
        classes={classes}
        animatedGradient={animatedGradient}
      />
    </div>
  );
}

export default TrustUsBlock;
