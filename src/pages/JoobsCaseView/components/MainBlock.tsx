import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import IMainBlock from '../interfaces/IMainBlock';
import Logo from '@/images/joobs/mainBlock/img_logo.webp';
import PageContainer from 'components/PageContainer/PageContainer';

function MainBlock({ background, macImage }: IMainBlock) {
  return (
    <div className={`
        relative h-screen min-lg:min-h-[700px] screen-lg:h-[1024px]
        screen-md:h-[850px] screen-sm:h-[640px] bg-[#E6E6E6]
      `}
    >
      <div className={`
          absolute w-full h-screen min-lg:min-h-[700px] screen-lg:h-[1024px] screen-md:h-[850px] screen-sm:h-[640px]
        `}
      >
        <ImageComponent
          src={background}
          alt="background"
          sizes="100vw"
          quality={87}
          priority
          fill
          className="w-full h-full object-cover object-[50%_30%]"
        />
      </div>
      <div className="h-full flex min-lg:items-center screen-lg:pt-[154px] screen-md:pt-[139px]">
        <PageContainer className="text-color-white !m-0 relative">
          <ImageComponent
            src={Logo}
            alt="logo"
            sizes="100vw"
            priority
            className={`
              w-[106px] h-[56px] screen-xl:w-[84px] screen-xl:h-[44px] screen-md:w-[60px] screen-md:h-[32px]
              mb-[40px] screen-xl:mb-[30px] screen-md:mb-[15px]
            `}
          />
          <MainTitle
            tag="h1"
            className={`
              mb-[40px] screen-xl:mb-[30px] screen-md:mb-[15px]
              screen-xl:!text-[40px]/[56px] screen-md:!text-[25px]/[35px]
            `}
          >
            Joobs Platform
            <br className="min-xxxl:hidden screen-lg:hidden" />
            {' '}
            Redesign
          </MainTitle>
          <MainTitle
            tag="p"
            className="!text-[30px]/[40px] screen-xl:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]"
          >
            Enhancing the job search
            <br className="min-xxxl:hidden screen-lg:hidden" />
            {' '}
            experience platform
          </MainTitle>
        </PageContainer>
        <ImageComponent
          src={macImage}
          alt="iMac"
          sizes="100vw"
          quality={87}
          priority
          className={`
            absolute bottom-0 right-0 w-[85%] max-h-full object-contain object-right-bottom pt-[87px]
            min-xxxl:pt-[100px] screen-lg:p-0 screen-lg:w-[125%] screen-lg:max-h-[650px]
            screen-md:max-h-[550px] screen-md:w-[135%] screen-sm:max-h-[340px]
          `}
        />
      </div>
    </div>
  );
}

export default MainBlock;
