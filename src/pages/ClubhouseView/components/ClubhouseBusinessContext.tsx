import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import { businessContextDataFirst } from '../data/businessContextData';
import BusinessContext from '../../../components/BusinessContext/BusinessContext';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';

import Icon1 from '@/images/clubhouse/businessContext/img_icon_1.webp';
import Icon2 from '@/images/clubhouse/businessContext/img_icon_2.webp';
import Icon3 from '@/images/clubhouse/businessContext/img_icon_3.webp';

function ClubhouseBusinessContext({ background }:{ background: StaticImageData }) {
  return (
    <section className="relative">
      <ImageComponent
        src={background}
        alt="background"
        className="max-h-[520px] screen-lg:max-h-[480px] screen-md:max-h-[430px]"
        fill
      />
      <BusinessContext
        title={businessContextDataFirst.title}
        leftContent={businessContextDataFirst.firstText}
        rightContent={businessContextDataFirst.secondText}
      />
      <PageContainer>
        <MainTitle className="relative max-w-[1080px] mb-[80px] min-xxxl:max-w-[1480px] !text-[40px]/[56px]
          screen-lg:mb-[40px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]"
        >
          To achieve this, Eric partnered with Onix to develop a highly intuitive
          and engaging fitness platform that would:
        </MainTitle>
        <div className="flex justify-between gap-[80px] max-w-full mx-auto screen-lg:flex-col
                        screen-lg:gap-10 screen-md:gap-5"
        >
          <div className="flex flex-1 flex-col max-w-[380px] screen-lg:max-w-full min-xxl:max-w-[534px]">
            <ImageComponent
              src={Icon1}
              alt="icon"
              className="w-[60px] h-[60px] m-[20px_0_30px] screen-md:m-[20px_0_20px] screen-md:w-10 screen-md:h-10 "
            />
            <ContentText tag="p" marginAbsent>
              Provide a seamless virtual workout experience
            </ContentText>
          </div>
          <div className="flex flex-1 flex-col max-w-[380px] screen-lg:max-w-full min-xxl:max-w-[534px]">
            <ImageComponent
              src={Icon2}
              alt="icon"
              className="w-[60px] h-[60px] m-[20px_0_30px] screen-md:m-[20px_0_20px] screen-md:w-10 screen-md:h-10"
            />
            <ContentText tag="p" marginAbsent>
              Help users stay motivated and on track with their fitness goals
            </ContentText>
          </div>
          <div className="flex flex-1 flex-col max-w-[380px] screen-lg:max-w-full min-xxl:max-w-[534px]">
            <ImageComponent
              src={Icon3}
              alt="icon"
              className="w-[60px] h-[60px] m-[20px_0_30px] screen-md:m-[20px_0_20px] screen-md:w-10 screen-md:h-10"
            />
            <ContentText tag="p" marginAbsent>
              Offer a robust and scalable architecture to support long-term growth
            </ContentText>
          </div>
        </div>
        <div className="p-[80px_0_120px] screen-lg:p-[60px_0_80px]">
          <div className="p-[40px] screen-md:p-[30px] border-l-2 border-color-cruise bg-color-pale-gray">
            <MainTitle
              tag="h3"
              className={`!text-[24px]/[34px] screen-md:!text-[20px]/[28px]
               mb-[30px] screen-md:mb-[20px]`}
            >
              Benefits of the Platform:
            </MainTitle>
            <ContentText tag="p" marginAbsent>
              <span className="flex mb-[5px]">
                <span className="mr-[10px]">﹂</span>
                <span>
                  Access to high-quality virtual fitness classes
                </span>
              </span>
              <span className="flex mb-[5px]">
                <span className="mr-[10px]">﹂</span>
                <span>
                  Personalized workout plans for beginners and advanced users
                </span>
              </span>
              <span className="flex mb-[5px]">
                <span className="mr-[10px]">﹂</span>
                <span>
                  Integrated nutrition support for a complete health experience
                </span>
              </span>
              <span className="flex mb-[5px]">
                <span className="mr-[10px]">﹂</span>
                <span>
                  Secure and smooth payment process
                </span>
              </span>
              <span className="flex">
                <span className="mr-[10px]">﹂</span>
                <span>A welcoming and motivating fitness community</span>
              </span>
            </ContentText>
          </div>
        </div>
      </PageContainer>

    </section>
  );
}

export default ClubhouseBusinessContext;
