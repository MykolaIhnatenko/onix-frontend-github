import { StaticImageData } from 'next/image';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import BusinessContext from '../../../components/BusinessContext/BusinessContext';
import ImageComponent from '../../../components/Image/Image';

function ArmyResultsBlock({ background }:{ background: StaticImageData }) {
  return (
    <section className="relative py-[120px] screen-lg:py-[80px]">
      <ImageComponent
        src={background}
        alt="background"
        className="max-h-[520px] screen-lg:max-h-[480px] screen-md:max-h-[430px]"
        fill
      />
      <BusinessContext
        upTitle="[ Results ]"
        title="Through our collaboration, the Army Health System is now a fully
        functional health monitoring tool for soldiers and military families."
        subTitle={(
          <>
            The transition to a tablet-first interface has significantly improved usability in
            the field. With&nbsp;future AI capabilities, the platform will evolve into
            a predictive health tool, helping&nbsp;military&nbsp;personnel optimize
            performance and prevent health risks.
          </>
      )}
        classes={{ section: '!py-0', contentContainer: 'screen-lg:!gap-[20px]' }}
      />
      <PageContainer className="pt-[40px] screen-lg:pt-0 screen-md:pt-[10px]">
        <div>
          <div className="p-[40px] screen-md:p-[30px] border-l-2 border-color-cruise bg-color-pale-gray">
            <MainTitle
              tag="h3"
              className={`!text-[24px]/[34px] screen-md:!text-[20px]/[28px]
               mb-[30px] screen-md:mb-[20px]`}
            >
              Key Metrics:
            </MainTitle>
            <div className="flex min-lg:gap-10 screen-lg:flex-col">
              <ContentText tag="p" marginAbsent className="flex-1">
                <span className="flex mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">10,000+ </b>
                    active users in military communities
                  </span>
                </span>
                <span className="flex screen-lg:mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold"> 2x faster performance </b>
                    with Svelte vs. traditional frontend frameworks
                  </span>
                </span>
              </ContentText>
              <ContentText tag="p" marginAbsent className="flex-1">
                <span className="flex mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">Ongoing AI feature development </b>
                    for automated health risk detection
                  </span>
                </span>
                <span className="flex">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">80%  </b>
                    of users report improvements in at least one health area (fitness,
                    nutrition, sleep, or stress management)
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

export default ArmyResultsBlock;
