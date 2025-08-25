import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import MainTitle from '../MainTitle/MainTitle';
import ContentText from '../ContentText/ContentText';
import { setShowContactForm } from '../../store/app/contactForm/slice';
import ButtonTypes from '../../constants/ButtonTypes';
import { ButtonPathVariant } from '../../constants/enums';
import PageLinks from '../../constants/PageLinks';
import ImageComponent from '../Image/Image';
import VRARContent from '../VRARContent/VRARContent';
import IVRARCallToActionBlock from './interfaces/IVRARCallToActionBlock';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

function VRARCallToActionComponent({
  background, title, content, id, btnFontSizeSmallOnMobile,
  withButton, btnText, buttonType = ButtonTypes.LIGHT, buttonPathVariant, tag, classes,
  isJakarta,
}: IVRARCallToActionBlock) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div
      className={`bg-black text-white relative p-[120px_70px] screen-lg:p-[80px_30px]
        screen-md:p-[80px_15px] ${classes?.cta || ''}`}
    >
      {background && (
        <div className={`absolute top-0 left-0 w-full h-full ${classes?.background || ''}`}>
          <ImageComponent
            src={background}
            fill
            alt="call_to_action_bg"
            sizes="100vw"
            quality={95}
            className={`object-cover object-top ${classes?.image || ''}`}
          />
        </div>
      )}

      <div className={`relative ${classes?.contentBlock || ''}`}>
        {title && (
          <VRARContent>
            <MainTitle
              tag={tag || 'h2'}
              className={`pb-[40px] text-center text-white max-w-[1080px] mx-auto
              screen-lg:max-w-[643px] screen-lg:text-[40px] screen-lg:leading-[56px] screen-md:pb-[30px]
              screen-md:text-[25px] screen-md:leading-[35px] ${classes?.title || ''}`}
            >
              {title}
            </MainTitle>
          </VRARContent>
        )}
        {content && (
          <VRARContent>
            <ContentText className={classes?.content || ''} tag="p">
              {content}
            </ContentText>
          </VRARContent>
        )}
        {withButton && (
          <VRARContent>
            {buttonType === ButtonTypes.LIGHT ? (
              <ButtonLight
                id={id}
                styleContainer={`block max-w-[420px] mx-auto screen-md:max-w-[330px]
                  screen-md:text-[18px] ${classes?.btn || ''}`}
                text={btnText}
                fontSizeSmallOnMobile={btnFontSizeSmallOnMobile}
                isJakarta={isJakarta}
                onClick={buttonPathVariant === ButtonPathVariant.CALCULATE
                  ? () => router.push(PageLinks.DEDICATED_TEAM_CALCULATOR)
                  : () => dispatch(setShowContactForm({ showContactForm: true }))}
              />
            ) : (
              <ButtonPrimary
                id={id}
                styleContainer={`block max-w-[420px] mx-auto screen-md:max-w-[330px]
                  screen-md:text-[18px] ${classes?.btn || ''}`}
                text={btnText}
                fontSizeSmallOnMobile={btnFontSizeSmallOnMobile}
                isJakarta={isJakarta}
                onClick={buttonPathVariant === ButtonPathVariant.CALCULATE
                  ? () => router.push(PageLinks.DEDICATED_TEAM_CALCULATOR)
                  : () => dispatch(setShowContactForm({ showContactForm: true }))}
              />
            )}
          </VRARContent>
        )}
      </div>
    </div>
  );
}

export default VRARCallToActionComponent;
