import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../hook/reduxToolkit';
import Card from './components/Card';
import ImageComponent from '../Image/Image';
import { ICardBlockData } from './interfaces/ICardsBlock';
import { setShowContactForm } from '../../store/app/contactForm/slice';
import { ButtonPathVariant, DropBlockVariant } from '../../constants/enums';
import PageLinks from '../../constants/PageLinks';
import ContentText from '../ContentText/ContentText';
import VRARContent from '../VRARContent/VRARContent';
import DropBlockBgWebp from '../../assets/images/img_drop_block_bg@2x.webp';
import TrustUsBackgroundDesktopWebp from '../../assets/images/img_trust_us_desk_bg@2x.webp';
import TrustUsBackgroundTabletWebp from '../../assets/images/img_trust_us_tablet_bg@2x.webp';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';
import AnimatedGradientBackground from '../GradientBackground/GradientBackground';

function CardsBlock({
  data, mobileBg, tabletBg, bg, isJakarta,
  dropBlockBtnVariant, dropBlockVariant,
  disableBg, dropBlockText, classes,
  disableInfoBlock, withoutAnimate = true,
  withoutDropBlockBg = false,
  withBtn = true,
  dropBlockTitle = 'Set your budget and we will optimally adjust software development to it!',
  dropBlockBtnTitle = 'Speak to our expert',
  dropBlockBg = DropBlockBgWebp, idBtn, animatedGradient = false,
  isPInDropBlockTitle, hiddenTitleInTablet,
}: ICardBlockData) {
  const [activeId, setActiveId] = useState<string>('00');
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const isMobile = isXSDevice || isSMDevice || isMDDevice;

  const getBackground = () => {
    const bgImage = {
      background: bg || TrustUsBackgroundDesktopWebp,
    };
    if (isMDDevice) {
      bgImage.background = tabletBg || TrustUsBackgroundTabletWebp;
    } else if (isXSDevice || isSMDevice) {
      bgImage.background = mobileBg || TrustUsBackgroundTabletWebp;
    }

    return bgImage;
  };

  const buttonClick = async () => {
    if (dropBlockBtnVariant === ButtonPathVariant.CALCULATE) {
      await router.push(PageLinks.DEDICATED_TEAM_CALCULATOR);
    } else {
      dispatch(setShowContactForm({ showContactForm: true }));
    }
  };

  return (
    <div
      className={`
        relative z-[2] list-none flex flex-wrap min-md:flex
        ${classes?.cards || ''}
      `}
    >
      {data.map(({
        id, title, content, list,
      }, index) => (
        <Card
          key={id}
          id={id}
          title={title}
          content={content}
          activeId={activeId}
          setActiveId={setActiveId}
          classes={classes?.cardClasses}
          list={list}
          withoutAnimate={withoutAnimate}
          cardIndex={index}
          isJakarta={isJakarta}
          hiddenTitleInTablet={hiddenTitleInTablet}
        />
      ))}
      {dropBlockVariant !== DropBlockVariant.WITHOUT_DROP_BLOCK && !disableInfoBlock && (
        <div className={`
          relative z-[2] w-full bg-black p-[20px] flex flex-col justify-between h-[360px]
          min-md:justify-start min-md:p-[64px_30px_60px_30px]
          min-lg:p-[30px]
          min-xl:flex-[0_1_33.33333%] min-xl:h-[480px] min-xl:justify-between
          min-xxxl:h-[540px] ${classes?.dropBlock || ''}`}
        >
          {dropBlockBg && !withoutDropBlockBg && (
            <ImageComponent
              src={dropBlockBg}
              className={`hidden min-md:block min-xl:hidden object-cover ${classes?.dropBlockBg || ''}`}
              fill
              alt="dropBlockBackground"
              sizes="100vw"
            />
          )}
          <div>
            <VRARContent withoutAnimate={withoutAnimate}>
              {isPInDropBlockTitle ? (
                <p className={`
                  font-medium text-[25px] leading-[35px] text-white font-generalSans
                  min-md:text-[40px] min-md:leading-[56px] min-md:text-center min-md:max-w-[708px] min-md:mx-auto
                  min-md:pb-[32px] min-md:relative min-md:z-[2]
                  min-xl:max-w-[400px] min-xl:text-left min-xl:pb-0 min-xl:mx-0 ${classes?.dropBlockTitle || ''}`}
                >
                  {dropBlockTitle}
                </p>
              ) : (
                <h2 className={`
                  font-medium text-[25px] leading-[35px] text-white font-generalSans
                  min-md:text-[40px] min-md:leading-[56px] min-md:text-center min-md:max-w-[708px] min-md:mx-auto
                  min-md:pb-[32px] min-md:relative min-md:z-[2]
                  min-xl:max-w-[400px] min-xl:text-left min-xl:pb-0 min-xl:mx-0 ${classes?.dropBlockTitle || ''}`}
                >
                  {dropBlockTitle}
                </h2>
              )}
            </VRARContent>
            {dropBlockText && (
              <ContentText
                tag="p"
                className={`text-white ${classes?.dropBlockText || ''}`}
              >
                {dropBlockText}
              </ContentText>
            )}
          </div>
          {withBtn && (
            <div className={`
              min-md:w-full min-md:max-w-[420px] min-md:mx-auto z-[2] min-md:relative min-xl:max-w-none min-xl:m-0
              ${classes?.buttonWrapper || ''}
            `}
            >
              <ButtonLight
                id={idBtn}
                text={dropBlockBtnTitle}
                styleContainer={classes?.button}
                onClick={buttonClick}
              />
            </div>
          )}
        </div>
      )}
      {!disableBg && (
        <ImageComponent
          src={getBackground().background}
          alt="CardsBlockBackground"
          fill
          className={
            mobileBg
              ? `block object-cover z-[-1] ${classes?.bgMobile || ''}`
              : `hidden min-md:block object-cover ${classes?.bgDesktop || ''}`
          }
          sizes="100vw"
        />
      )}
      {animatedGradient && !isMobile && (
        <AnimatedGradientBackground lightMode />
      )}
    </div>
  );
}

export default CardsBlock;
