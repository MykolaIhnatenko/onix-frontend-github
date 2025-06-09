import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import { businessContextDataThird } from '../data/businessContextData';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import BusinessContextWithTable from '../../../components/BusinessContextWithTables/BusinessContextWithTable';
import Icon1 from '@/images/phlexCase/businessContext/img_icon_1.webp';
import Icon2 from '@/images/phlexCase/businessContext/img_icon_2.webp';
import Icon3 from '@/images/phlexCase/businessContext/img_icon_3.webp';

function PhlexBusinessContext({ background }:{ background: StaticImageData }) {
  return (
    <section className="relative pb-[120px] screen-lg:pb-[80px]">
      <ImageComponent
        src={background}
        alt="background"
        className="max-h-[528px] screen-lg:max-h-[480px] screen-md:max-h-[430px]"
        fill
      />
      <div className="relative">
        <BusinessContextWithTable
          title={businessContextDataThird.title}
          subTitle={businessContextDataThird.subTitle}
          content={businessContextDataThird.content}
          withoutAnimateTable
          classes={{
            section: '!pb-[80px] screen-lg:!pb-[60px] screen-md:!pb-[40px]',
            subTitle: '!text-[18px]/[26px] mb-[80px] font-ibmPlexMono font-normal screen-lg:mb-[60px] '
              + 'screen-md:mb-[40px] screen-md:!text-[16px]/[24px]',
            column: 'screen-md:!pb-[20px]',
          }}
        />
      </div>
      <PageContainer>
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
              Sophisticated flexible monitoring of training results
            </ContentText>
          </div>
          <div className="flex flex-1 flex-col max-w-[380px] screen-lg:max-w-full min-xxl:max-w-[534px]">
            <ImageComponent
              src={Icon2}
              alt="icon"
              className="w-[60px] h-[60px] m-[20px_0_30px] screen-md:m-[20px_0_20px] screen-md:w-10 screen-md:h-10"
            />
            <ContentText tag="p" marginAbsent>
              Tracking swimming technique and performance in a smart and convenient way
            </ContentText>
          </div>
          <div className="flex flex-1 flex-col max-w-[380px] screen-lg:max-w-full min-xxl:max-w-[534px]">
            <ImageComponent
              src={Icon3}
              alt="icon"
              className="w-[60px] h-[60px] m-[20px_0_30px] screen-md:m-[20px_0_20px] screen-md:w-10 screen-md:h-10"
            />
            <ContentText tag="p" marginAbsent>
              Hit great swimming goals using a data-driven approach
            </ContentText>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default PhlexBusinessContext;
