import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import IMainBlock from '../interfaces/IMainBlock';
import PageContainer from 'components/PageContainer/PageContainer';

function MainBlock({ background }: IMainBlock) {
  return (
    <div className={`
        relative h-screen min-lg:min-h-[700px] screen-xl:h-[700px] screen-xxl:max-h-[900px] 
        screen-xxxl:max-h-[1080px] screen-lg:h-[940px]
        screen-md:h-[800px] screen-sm:h-[640px] bg-[#E6E6E6]
      `}
    >
      <div className={`
          absolute w-full h-screen screen-xxl:max-h-[900px]
          screen-xxxl:max-h-[1080px] min-lg:min-h-[700px] screen-xl:h-[700px] screen-lg:h-[940px]
          screen-md:h-[800px] screen-sm:h-[640px]
        `}
      >
        <ImageComponent
          src={background}
          alt="background"
          sizes="100vw"
          quality={90}
          priority
          fill
          className={`w-full h-full object-cover min-xxl:object-right object-[20%_50%] screen-xl:object-left
            screen-lg:object-[50%_60%] screen-md:object-[50%_80%] screen-sm:object-[50%_70%]`}
        />
      </div>
      <div className="h-full flex min-lg:items-center screen-lg:pt-[154px] screen-md:pt-[139px]">
        <PageContainer className="!m-0 relative">
          <MainTitle
            tag="h1"
            className={`
              mb-[40px] screen-xl:mb-[30px] screen-md:mb-[15px]
              screen-xl:!text-[40px]/[56px] screen-md:!text-[25px]/[35px]
            `}
          >
            360° Shower
          </MainTitle>
          <MainTitle
            tag="p"
            className="!text-[30px]/[40px] screen-xl:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]"
          >
            A complete service that makes the
            <br className="screen-lg:hidden" />
            {' '}
            sanitary professional’s daily routine
            <br className="screen-lg:hidden" />
            {' '}
            easier and customers happier
          </MainTitle>
        </PageContainer>
      </div>
    </div>
  );
}

export default MainBlock;
