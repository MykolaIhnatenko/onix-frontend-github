import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import ICallToActionBlock from './interfaces/ICallToActionBlock';
import MainTitle from '../MainTitle/MainTitle';
import ContentText from '../ContentText/ContentText';
import { setShowContactForm } from '../../store/app/contactForm/slice';
import ButtonTypes from '../../constants/ButtonTypes';
import { ButtonPathVariant } from '../../constants/enums';
import PageLinks from '../../constants/PageLinks';
import ImageComponent from '../Image/Image';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

function CallToActionComponent({
  background, title, content,
  withButton, btnText, buttonType = ButtonTypes.LIGHT, buttonPathVariant, tag = 'h2',
  classes, onClick, sizesBg = '100vw', id, btnFontSizeSmallOnMobile,
}: ICallToActionBlock) {
  const dispatch = useDispatch();
  const router = useRouter();

  const btnOnClick = () => {
    if (onClick) {
      return onClick();
    }
    if (buttonPathVariant === ButtonPathVariant.CALCULATE) {
      return router.push(PageLinks.DEDICATED_TEAM_CALCULATOR);
    }
    return dispatch(setShowContactForm({ showContactForm: true }));
  };

  return (
    <div
      className={`
        bg-black text-white relative py-[160px]
        screen-lg:p-[80px_30px] screen-md:p-[80px_30px] screen-sm:p-[80px_15px]
        ${classes?.cta || ''}`}
    >
      {background && (
        <div className={`
          absolute top-0 left-0 w-full h-full
          after:absolute after:bottom-0 after:left-0 after:w-full after:h-[70px]
          after:bg-gradient-to-b after:from-[rgba(253,253,253,0)_5%]
          after:to-black screen-lg:after:h-[110px]
          ${classes?.background || ''}`}
        >
          <ImageComponent
            className={`object-cover object-top ${classes?.image || ''}`}
            src={background}
            fill
            alt="call_to_action_bg"
            sizes={sizesBg}
            quality={100}
          />
        </div>
      )}

      <div className={`
        relative z-[1]
        ${classes?.contentBlock || ''}`}
      >
        {title && (
          <MainTitle
            tag={tag}
            className={`
              pb-[40px] text-center text-white max-w-[720px] mx-auto
              screen-lg:max-w-[630px] screen-md:pb-[30px] screen-md:max-w-full
              ${classes?.title || ''}`}
          >
            {title}
          </MainTitle>
        )}
        {content && (
        <ContentText
          tag="p"
          className={`
            !m-0 pb-[56px] text-center text-white max-w-[670px] !mx-auto !text-[20px] !leading-[26px]
            screen-md:max-w-full
            ${classes?.content || ''}`}
        >
          {content}
        </ContentText>
        )}
        {withButton && btnText && buttonType === ButtonTypes.LIGHT && (
          <ButtonLight
            id={id}
            styleContainer={`
              block max-w-[420px] mx-auto screen-md:max-w-[330px]
              ${classes?.btn || ''}
            `}
            text={btnText}
            fontSizeSmallOnMobile={btnFontSizeSmallOnMobile}
            onClick={() => btnOnClick()}
          />
        )}
        {withButton && btnText && buttonType !== ButtonTypes.LIGHT && (
          <ButtonPrimary
            id={id}
            styleContainer={`
              block max-w-[420px] mx-auto screen-md:max-w-[330px]
              ${classes?.btn || ''}
            `}
            fontSizeSmallOnMobile={btnFontSizeSmallOnMobile}
            text={btnText}
            onClick={() => btnOnClick()}
          />
        )}
      </div>
    </div>
  );
}

export default CallToActionComponent;
