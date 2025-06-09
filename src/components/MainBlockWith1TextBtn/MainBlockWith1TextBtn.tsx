import { useDispatch } from 'react-redux';

import { setShowContactForm } from '../../store/app/contactForm/slice';
import { ButtonType } from '../../constants/enums';
import ContentText from '../ContentText/ContentText';
import ImageComponent from '../Image/Image';
import MainTitle from '../MainTitle/MainTitle';
import PageContainer from '../PageContainer/PageContainer';
import { IMainBlockWith1TextBtn } from './interfaces/IMainBlockWith1TextBtn';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

function MainBlockWith1TextBtn({
  pageTitle, pageText, btnText, backgroundImg, rightImg, isMobile,
}: IMainBlockWith1TextBtn) {
  const dispatch = useDispatch();

  return (
    <div
      className="
        relative overflow-visible min-h-screen max-h-[1400px] h-screen
        screen-lg:h-auto screen-lg:min-h-[unset]
      "
    >
      <div className="absolute inset-0">
        <ImageComponent
          src={backgroundImg}
          alt="MainBackground"
          fill
          priority
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-[-1px] h-[60px] bg-gradient-to-b from-transparent to-white" />
      </div>
      <PageContainer className="relative z-10">
        <div className="
            min-xxxl:pb-[80px] min-xxxl:pr-[80px]
            flex flex-col justify-between h-auto max-w-[calc(50%+30px)] h-screen pt-[154px] pr-[70px] pb-[70px] pl-0
            screen-xl:pr-0 screen-xl:max-w-[610px]
            screen-lg:h-auto screen-lg:pb-[80px] screen-lg:max-w-[100%]
            screen-md:pb-[30px] screen-md:pt-[139px]
          "
        >
          <div>
            <MainTitle
              tag="h1"
              className="
                font-medium !text-[40px] !leading-[50px] pb-[40px] max-w-[610px]
                min-xxl:!text-[50px] min-xxl:!leading-[64px]
                screen-lg:!text-[50px] screen-lg:!leading-[64px] screen-lg:!pb-[30px] screen-lg:max-w-[708px]
                screen-md:!text-[40px] screen-md:!leading-[50px] screen-md:!pb-[15px] screen-md:max-w-[unset]
              "
            >
              {pageTitle}
            </MainTitle>
            <ContentText
              tag="p"
              className="
                !m-0 text-[15px] pb-[40px] max-w-[610px]
                screen-lg:pb-[120px] screen-lg:max-w-[708px]
                screen-md:pb-[30px] screen-md:max-w-[unset]
              "
            >
              {pageText}
            </ContentText>
          </div>
          <ButtonPrimary
            id={ButtonType.LAND}
            text={btnText}
            styleContainer="
              w-full max-w-full screen-lg:max-w-[460px] screen-md:max-w-full
              screen-md:!text-[16px] screen-md:!leading-[24px]
            "
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          />
        </div>
      </PageContainer>
      {!isMobile && (
        <div className="screen-xl:hidden absolute top-0 right-0 w-[47.9%] h-full">
          <ImageComponent
            src={rightImg}
            alt="developers"
            fill
            priority
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default MainBlockWith1TextBtn;
