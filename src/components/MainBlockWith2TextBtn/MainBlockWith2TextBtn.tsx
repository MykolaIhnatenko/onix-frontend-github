import { ButtonType } from 'constants/enums';
import { useAppDispatch } from 'hook/reduxToolkit';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import { setShowContactForm } from 'store/app/contactForm/slice';
import ImageComponent from 'components/Image/Image';
import IMainBlockWith2TextBtn from './interfaces/IMainBlockWith2textBtn';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

function MainBlockWith2TextBtn({
  rightImg, blockBg, firstText, secondText, title, btnText,
}: IMainBlockWith2TextBtn) {
  const dispatch = useAppDispatch();

  return (
    <section className="relative flex min-h-screen max-w-[1920px] pl-[70px] min-xxxl:pl-[80px]
        screen-lg:flex-col screen-lg:pl-[30px] screen-lg:pr-[30px] screen-lg:min-h-[100%]
        screen-md:pr-[15px] screen-md:pl-[15px]
      "
    >
      <div className="absolute inset-0">
        <ImageComponent
          src={blockBg}
          alt="MainBackground"
          fill
          priority
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          className="object-cover"
        />
      </div>
      <div className="relative flex flex-col w-1/2 h-screen pt-[154px] pb-[70px] min-xxxl:pb-[80px]
          screen-lg:h-[100%] screen-lg:w-full screen-lg:pb-[80px] screen-lg:pt-[154px]
          screen-md:pt-[139px] screen-md:pb-[30px]
        "
      >
        <div className="mr-[70px] min-xxxl:mr-[80px] screen-lg:mr-0">
          <MainTitle
            className="max-w-[590px] pb-[40px]
              screen-lg:!text-[50px] screen-lg:!leading-[64px] screen-lg:pb-[30px] screen-lg:max-w-full
              screen-md:!text-[40px] screen-md:!leading-[50px] screen-md:pb-[15px]
            "
            tag="h1"
          >
            {title}
          </MainTitle>
          <ContentText
            marginAbsent
            tag="p"
            className="max-w-[460px] !ml-auto screen-md:!ml-0
              screen-md:!text-[16px] screen-md:!leading-[24px] screen-md:max-w-full
            "
          >
            {firstText}
          </ContentText>
        </div>
        <ContentText
          tag="p"
          marginAbsent
          className="max-w-[460px] !mt-auto !mr-[70px] !mb-[40px]
            screen-lg:!mt-[120px] screen-lg:!mb-[30px] screen-md:!mr-0
            screen-md:max-w-full screen-md:!mt-[30px]
          "
        >
          {secondText}
        </ContentText>
        <div className="w-[calc(100%-70px)] min-xxxl:w-[calc(100%-90px)] screen-lg:w-[460px] screen-md:w-full">
          <ButtonPrimary
            id={ButtonType.LAND}
            text={btnText}
            onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
          />
        </div>
      </div>
      <div className="relative w-1/2 screen-lg:hidden">
        <ImageComponent
          className="absolute inset-0 w-full h-full object-cover"
          src={rightImg}
          priority
        />
      </div>
    </section>
  );
}

export default MainBlockWith2TextBtn;
