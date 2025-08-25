import { StaticImageData } from 'next/image';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import BusinessContext from '../../../components/BusinessContext/BusinessContext';
import ImageComponent from '../../../components/Image/Image';

function Hotel4BoxResultsBlock({ background }:{ background: StaticImageData }) {
  return (
    <section className="relative py-[120px] screen-lg:py-[80px]">
      <ImageComponent
        src={background}
        alt="background"
        className="object-cover max-h-[520px] screen-lg:max-h-[480px] screen-md:max-h-[430px]"
        fill
      />
      <BusinessContext
        upTitle="[ Results ]"
        title="Thanks to our extensive redevelopment, Hotel4Box now operates on a fully modernized ERP system
         that efficiently manages international shipping logistics, customer orders, and package processing."
        subTitle={(
          <>
            The rewrite from PHP to Laravel eliminated legacy issues, improved
            system stability, and enabled the implementation of advanced features.
          </>
      )}
        leftContent="The platform now handles thousands of orders daily with improved efficiency,
         reduced processing times, and enhanced tracking capabilities. "
        rightContent="The introduction of automated package consolidation and dynamic shipping
         calculations has significantly lowered costs for customers and increased operational profitability."
        subText={(
          <>
            Customer experience is smoother, faster, and more reliable than ever before.
          </>
        )}
        classes={{ section: '!py-0', subText: 'inline-block' }}
      />
      <PageContainer className="pt-[80px] screen-lg:pt-[60px]">
        <div>
          <div className="p-[40px] screen-md:p-[30px] border-l-2 border-color-cruise bg-color-pale-gray">
            <MainTitle
              tag="h3"
              className={`!text-[24px]/[34px] screen-md:!text-[20px]/[28px]
               mb-[30px] screen-md:mb-[20px] tracking-[-0.04px]`}
            >
              Results obtained in numbers:
            </MainTitle>
            <div className="flex min-xxxl:justify-between min-lg:gap-10 screen-lg:flex-col">
              <ContentText tag="p" marginAbsent className="flex-1 min-xxxl:max-w-[810px]">
                <span className="flex mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">100,000+ </b>
                    international shipments processed annually
                  </span>
                </span>
                <span className="flex screen-lg:mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold"> 150+ </b>
                    countries covered by Hotel4Box shipping services
                  </span>
                </span>
              </ContentText>
              <ContentText tag="p" marginAbsent className="flex-1 min-xxxl:max-w-[810px]">
                <span className="flex mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">99.9% </b>
                    uptime after migrating from legacy PHP to modern Laravel infrastructure
                  </span>
                </span>
                <span className="flex">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">30% </b>
                    reduction in shipping costs through optimized package consolidation
                  </span>
                </span>
              </ContentText>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

export default Hotel4BoxResultsBlock;
