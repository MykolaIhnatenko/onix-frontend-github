import { useDispatch } from 'react-redux';

import VRARContent from 'components/VRARContent/VRARContent';
import ImageComponent from '../../../components/Image/Image';
import IUsabilityTestingMainBlock from '../interfaces/IUsabilityTestingMainBlock';
import { setShowContactForm } from 'store/app/contactForm/slice';
import { ButtonType } from 'constants/enums';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

function UsabilityTestingMainBlock({
  title, text, icon, background, image, btnText, saleUrl, classes,
}: IUsabilityTestingMainBlock) {
  const dispatch = useDispatch();

  return (
    <div
      className={`h-screen relative min-h-[750px] bg-[linear-gradient(111deg,_#EBF7FF_0%,_#DFF1FF_50%)]
      max-1390:h-[1110px] screen-lg:h-[1024px] screen-md:h-[640px] screen-md:min-h-[700px]
      ${classes?.container || ''}`}
    >
      <div
        className={`absolute bottom-[-3px] right-0 h-auto w-[65vw]
        max-1390:w-auto max-1390:h-[816px] max-1390:bottom-0
        screen-lg:h-[632px] screen-lg:w-[748px]
        screen-md:h-[370px] screen-md:w-auto
        screen-sm:h-[305px] screen-sm:w-auto ${classes?.background || ''}`}
      >
        <ImageComponent
          className={`w-full h-full object-cover object-bottom screen-lg:object-center
          screen-md:object-bottom ${classes?.backgroundImage || ''}`}
          src={background}
          alt="background"
          sizes="100vw"
          priority
        />
      </div>
      <div
        className={`relative h-full flex flex-col justify-center
        max-1390:block max-1390:pt-[146px] screen-md:pt-[136px] ${classes?.contentContainer || ''}`}
      >
        <div
          className={`pl-[70px] min-xxxl:pl-[80px] max-1390:pl-[30px] screen-md:pl-[15px]
          screen-md:pr-[15px] ${classes?.content || ''}`}
        >
          <div className={classes?.textContainer || ''}>
            {icon && (
              <div
                className={`pb-[40px] max-1390:pb-[30px] screen-md:pb-[15px]
                ${classes?.logo || ''}`}
              >
                {icon}
              </div>
            )}
            <MainTitleWithoutSize
              tag="h1"
              className={`max-w-[649px] pb-[40px] text-[50px] leading-[64px]
              max-1390:pb-[30px] max-1390:max-w-[708px] max-1390:text-[40px] max-1390:leading-[56px]
              screen-md:pb-[15px] screen-md:text-[25px] screen-md:leading-[35px]
              ${classes?.title || ''}`}
            >
              {title}
            </MainTitleWithoutSize>
            {text && (
              <MainTitleWithoutSize
                tag="p"
                className={`max-w-[649px] text-[30px] leading-[40px] 
                max-1390:max-w-none max-1390:text-[24px] max-1390:leading-[34px] 
                screen-md:max-w-none screen-md:text-[20px] screen-md:leading-[28px]
                ${classes?.text || ''}`}
              >
                {text}
              </MainTitleWithoutSize>
            )}
            {btnText && !saleUrl && (
              <VRARContent>
                <ButtonLight
                  id={ButtonType.CASE}
                  styleContainer={classes?.btn || ''}
                  text={btnText}
                  onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
                />
              </VRARContent>
            )}
          </div>
          {image && (
            <div className={classes?.image || ''}>
              <ImageComponent
                className={classes?.imageContent || ''}
                src={image}
                alt="main Image"
                sizes="100vw"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsabilityTestingMainBlock;
