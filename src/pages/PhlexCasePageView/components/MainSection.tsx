import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import PageContainer from 'components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import Logo from '@/images/phlexCase/main/img_logo.webp';

function MainSection({ backgroundImg }: { backgroundImg: StaticImageData }) {
  return (
    <section className="
        bg-white relative h-screen min-h-[900px] max-h-[1240px]
        min-xxxl:min-h-[1000px]
        screen-xl:min-h-[700px] screen-xl:max-h-[800px]
        screen-lg:min-h-[1154px] screen-lg:max-h-[1240px]
        screen-md+100:min-h-[1024px] screen-md+100:max-h-[1140px]
        screen-md:min-h-[900px] screen-md:max-h-[1024px]
        screen-sm:min-h-[640px] screen-sm:max-h-[800px]"
    >
      <ImageComponent
        className="object-cover object-left screen-lg:object-left-bottom screen-sm:object-center"
        src={backgroundImg}
        alt="background"
        sizes="100vw"
        quality={97}
        fill
        priority
      />
      <PageContainer className="relative flex text-white min-xl:h-full">
        <div className="relative max-w-[650px] mb-[120px] mt-auto
            screen-xl:mt-[478px] screen-xl:max-w-[480px]
            screen-lg:mt-[154px] screen-lg:max-w-[708px]
            screen-md:mt-[139px]"
        >
          <ImageComponent
            className="w-[146px] h-[56px] mb-[40px]
            screen-lg:w-[115px] screen-lg:h-[44px] screen-lg:mb-[30px]
            screen-md:w-[84px] screen-md:h-[32px] screen-md:mb-[15px]"
            src={Logo}
            alt="BnB"
            sizes="100vw"
            priority
          />
          <MainTitle
            tag="h1"
            className="!text-[30px]/[40px] screen-lg:!text-[24px]/[34px] screen-md:!text-[20px]/[28px]"
          >
            Innovative solution to track swimming workouts and develop smart training plans
          </MainTitle>
        </div>
      </PageContainer>
    </section>
  );
}

export default MainSection;
