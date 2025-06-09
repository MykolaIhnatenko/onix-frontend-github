import BusinessDataThird from '../data/BusinessDataThird';
import IconsContent from 'components/IconsContent/IconsContent';
import iconsData from '../data/iconsData';
import MainTitle from 'components/MainTitle/MainTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import VRARContent from 'components/VRARContent/VRARContent';
import BusinessContext from 'components/BusinessContext/BusinessContext';

import styles from '../sass/faynoMarketResults.module.scss';

function FaynoMarketResults() {
  return (
    <section className={styles.container}>
      <BusinessContext
        upTitle={BusinessDataThird.upTitle}
        title={BusinessDataThird.title}
        subTitle={BusinessDataThird.subTitle}
        leftContent={BusinessDataThird.firstText}
        rightContent={BusinessDataThird.secondText}
        classes={{
          section: '!pb-[80px] screen-md:!pb-[60px]',
          subTitle: '!text-[24px]/[35px] screen-md:!text-[20px]/[28px]',
        }}
      />
      <PageContainer className={styles.iconsContainer}>
        <VRARContent>
          <MainTitle tag="h3" className={styles.iconsTitle}>
            New features are planned:
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <IconsContent
            data={iconsData}
            classes={{
              container: `!p-0 !gap-[80px] !m-0 !max-w-[1300px]
                screen-lg:!max-w-full screen-lg:!gap-[22px] screen-lg:!flex-nowrap
                screen-md:!gap-[40px_10px] screen-md:!flex-wrap`,
              containerItemWrapper: '!w-full screen-md:!flex-[1_1_calc(50%_-_10px)]',
              containerItem: '!min-w-[auto] !max-w-[none]',
              iconContainer: `!p-[50px] !w-[160px] !h-[160px] !border !border-black !mx-auto !rounded-full
                screen-lg:!p-[42px] screen-lg:!w-[144px] screen-lg:!h-[144px]
                screen-md:!w-[132px] screen-md:!h-[132px]`,
              title: `!text-[20px] !leading-[28px]
                screen-md:!text-[18px] screen-md:!leading-[26px]`,
            }}
          />
        </VRARContent>
      </PageContainer>
    </section>
  );
}

export default FaynoMarketResults;
