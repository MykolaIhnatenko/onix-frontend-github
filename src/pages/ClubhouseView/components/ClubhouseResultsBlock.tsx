import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import VRARMainTitle from '../../../components/VRARMainTitle/VRARMainTitle';

function ClubhouseResultsBlock() {
  return (
    <section className="py-[120px] screen-lg:py-[80px]">
      <PageContainer>
        <MainTitle className="mb-[40px] screen-md:mb-[30px]">
          Results
        </MainTitle>
        <MainTitle tag="p" className="!text-[24px]/[34px] screen-md:!text-[20px]/[28px]">
          Thanks to our collaboration, Clubhouse Fitness has become a thriving online fitness platform.
        </MainTitle>
        <div className="py-[80px] screen-lg:py-[60px]">
          <div className="p-[40px] screen-md:p-[30px] border-l-2 border-color-cruise bg-color-pale-gray">
            <MainTitle
              tag="h3"
              className={`!text-[24px]/[34px] screen-md:!text-[20px]/[28px]
               mb-[30px] screen-md:mb-[20px]`}
            >
              Key Achievements:
            </MainTitle>
            <ContentText tag="p" marginAbsent>
              <span className="flex mb-[5px]">
                <span className="mr-[10px]">﹂</span>
                <span>
                  The previous website acquired just
                  <b className="font-semibold"> 100 users in six months</b>
                </span>
              </span>
              <span className="flex mb-[5px]">
                <span className="mr-[10px]">﹂</span>
                <span>
                  The new version developed by Onix brought
                  <b className="font-semibold"> 350 new users in just 1.5 months</b>
                </span>
              </span>
              <span className="flex">
                <span className="mr-[10px]">﹂</span>
                <span>Ongoing feature development to ensure the platform remains cutting-edge</span>
              </span>
            </ContentText>
          </div>
        </div>
        <VRARMainTitle
          title={(
            <>
              Eric’s vision has now become a reality — Clubhouse is a trusted online fitness community
              where users find motivation, support, and high-quality workout experiences.
            </>
            )}
          tag="p"
          classes={{
            title: `m-[0_auto] text-center
              max-w-[1480px] screen-xxxl:max-w-[1080px] screen-lg:max-w-full
              !text-[24px]/[34px] screen-md:!text-[20px]/[28px]`,
          }}
        />
      </PageContainer>
    </section>
  );
}

export default ClubhouseResultsBlock;
