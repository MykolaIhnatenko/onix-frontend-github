import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import PageContainer from '../../../components/PageContainer/PageContainer';
import data from '../data/benefitsBlockData';

function Hotel4BoxBenefitsBlock({ background }:{ background: StaticImageData }) {
  return (
    <div className="relative overflow-hidden py-[120px] screen-lg:py-[80px] screen-md:pb-[60px]">
      <div className="absolute inset-0 max-h-[100%]">
        <ImageComponent
          src={background}
          alt="background"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover object-top w-full h-auto max-h-[100%]"
        />
      </div>
      <PageContainer className="relative">
        <MainTitle className="mb-[40px] screen-md:mb-[30px]">
          Benefits of the app
        </MainTitle>
        <ContentText
          marginAbsent
          tag="p"
          className="max-w-[1480px] screen-xxxl:max-w-[1080px] screen-lg:max-w-full
                                !mb-[80px] screen-lg:!mb-[40px]"
        >
          Whether you&apos;re a frequent shopper or sending occasional packages, the app
          streamlines the entire international shipping experience.
        </ContentText>
        <div className="grid grid-cols-2 gap-[80px] screen-lg:gap-[40px_60px]
        screen-md:gap-[20px] screen-md:grid-cols-1"
        >
          {data.map((item, index) => (
            <div key={item.id} className="pt-[20px] flex flex-col items-start gap-[30px] screen-md:gap-[20px]">
              <ImageComponent
                src={item.icon}
                alt={`Icon ${index + 1}`}
                className="w-[60px] h-[60px] screen-md:w-[40px] screen-md:h-[40px]"
              />
              <ContentText tag="p" marginAbsent className="">
                {item.title}
              </ContentText>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}

export default Hotel4BoxBenefitsBlock;
