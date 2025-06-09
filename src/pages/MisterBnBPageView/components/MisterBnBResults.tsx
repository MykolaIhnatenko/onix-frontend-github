import { businessContextDataThird } from '../data/businessContextData';
import IconsContent from 'components/IconsContent/IconsContent';
import MainTitle from 'components/MainTitle/MainTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import VRARContent from 'components/VRARContent/VRARContent';
import iconsData from '../data/iconsData';
import BusinessContext from 'components/BusinessContext/BusinessContext';

function MisterBnBResults() {
  return (
    <section>
      <BusinessContext
        upTitle={businessContextDataThird.name}
        title={businessContextDataThird.title}
        leftContent={businessContextDataThird.firstText}
        rightContent={businessContextDataThird.secondText}
        classes={{
          section: '!py-0',
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <PageContainer className="pt-[80px] pb-[120px] screen-lg:pt-[60px] screen-lg:pb-[80px] ">
        <VRARContent>
          <MainTitle
            tag="h3"
            className="!text-[30px]/[40px] screen-md:!text-[20px]/[28px]
             !mb-[60px] screen-lg:!mb-[40px] screen-md:!mb-[30px]"
          >
            Achieved results
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <IconsContent
            data={iconsData}
            classes={{
              container: `!m-0 !p-0 !gap-[80px] !max-w-[1300px]
                screen-lg:!max-w-full screen-lg:!gap-[22px] screen-lg:!flex-nowrap
                screen-md:!gap-[40px_10px] screen-md:!flex-wrap`,
              containerItemWrapper: `!w-full screen-md:!flex-[1_1_calc(50%_-_10px)]
                [&:nth-child(2)>div>div:first-child]:!p-0
                [&:nth-child(2)>div>div:first-child]:!w-[160px] [&:nth-child(2)>div>div:first-child]:!h-[160px]
                [&:nth-child(2)>div>div:first-child]:!flex [&:nth-child(2)>div>div:first-child]:!justify-center
                [&:nth-child(2)>div>div:first-child]:!items-center
                [&:nth-child(2)>div>div>svg]:!w-[110px] [&:nth-child(2)>div>div>svg]:!h-[110px]
                screen-lg:[&:nth-child(2)>div>div>svg]:!w-[98px] screen-lg:[&:nth-child(2)>div>div>svg]:!h-[98px]
                screen-md:[&:nth-child(2)>div>div>svg]:!w-[88px] screen-md:[&:nth-child(2)>div>div>svg]:!h-[88px]`,
              containerItem: '!min-w-auto !max-w-none',
              iconContainer: `!p-[50px] !max-w-[160px] !max-h-[160px] !border !border-black !rounded-full !mx-auto
                !flex !justify-center !items-center screen-lg:!max-w-[144px] screen-lg:!max-h-[144px]
                screen-lg:!p-[42px] screen-md:!max-w-[132px] screen-md:!max-h-[132px]`,
              title: `!max-w-[200px] !mx-auto !text-[20px] !leading-[28px]
                screen-md:!text-[18px] screen-md:!leading-[26px]`,
            }}
          />
        </VRARContent>
        <VRARContent>
          <MainTitle
            tag="h3"
            className="!text-[24px]/[34px] max-w-[1080px] m-[80px_auto_0]
             screen-lg:m-[60px_auto_0] text-center
             screen-md:!text-[20px]/[28px]
             min-xxxl:max-w-[1480px]"
          >
            Today, the client is still improving and updating its LGBTQ online marketplace
            for&nbsp;short and long term homestays in cooperation with&nbsp;Onix.
          </MainTitle>
        </VRARContent>
      </PageContainer>
    </section>
  );
}

export default MisterBnBResults;
