import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import VRARMainTitle from '../../../components/VRARMainTitle/VRARMainTitle';
import BusinessContext from '../../../components/BusinessContext/BusinessContext';
import { businessContextDataThird } from '../data/businessContextData';

function HydraResultsBlock() {
  return (
    <section className="py-[120px] screen-lg:py-[80px]">
      <BusinessContext
        upTitle={businessContextDataThird.name}
        title={businessContextDataThird.title}
        subTitle={businessContextDataThird.subTitle}
        subText={businessContextDataThird.subText}
        leftContent={businessContextDataThird.firstText}
        rightContent={businessContextDataThird.secondText}
        classes={{ section: '!py-0' }}
      />
      <PageContainer>
        <div className="py-[80px] screen-lg:py-[60px]">
          <div className="p-[40px] screen-md:p-[30px] border-l-2 border-color-cruise bg-color-pale-gray">
            <MainTitle
              tag="h3"
              className={`!text-[24px]/[34px] screen-md:!text-[20px]/[28px]
               mb-[30px] screen-md:mb-[20px]`}
            >
              Key Achievements:
            </MainTitle>
            <div className="flex screen-lg:flex-col">
              <ContentText tag="p" marginAbsent className="flex-1">
                <span className="flex mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">50% </b>
                    increase in operational efficiency
                  </span>
                </span>
                <span className="flex mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">Centralized </b>
                    data management
                  </span>
                </span>
                <span className="flex screen-lg:mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold"> Manual work reduced </b>
                    from days to hours
                  </span>
                </span>
              </ContentText>
              <ContentText tag="p" marginAbsent className="flex-1">
                <span className="flex mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">$75k </b>
                    saved annually by eliminating SaaS subscriptions
                  </span>
                </span>
                <span className="flex mb-[5px]">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">Enhanced </b>
                    team collaboration
                  </span>
                </span>
                <span className="flex">
                  <span className="mr-[10px]">﹂</span>
                  <span>
                    <b className="font-semibold">Scalable </b>
                    growth
                  </span>
                </span>
              </ContentText>
            </div>
          </div>
        </div>
        <VRARMainTitle
          title={(
            <>
              As a result, Onix continues to refine and expand Hydra ERP,
              ensuring&nbsp;it&nbsp;evolves alongside the company&apos;s growing needs.
            </>
            )}
          tag="p"
          classes={{
            title: `m-[0_auto] text-center
              max-w-[1480px] screen-xxxl:max-w-[735px] screen-lg:max-w-full
              !text-[24px]/[34px] screen-md:!text-[20px]/[28px]`,
          }}
        />
      </PageContainer>
    </section>
  );
}

export default HydraResultsBlock;
