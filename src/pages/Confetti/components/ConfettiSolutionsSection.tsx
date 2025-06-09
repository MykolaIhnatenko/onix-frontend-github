import { StaticImageData } from 'next/image';

import useWindowSize from '../../../hook/useWindowSize';
import PageContainer from '../../../components/PageContainer/PageContainer';
import runningCols from '../data/runningCols';
import ourSolutionsContentData from '../data/ourSolutionsContentData';
import { businessContextDataSecond } from '../data/businessContextData';
import { LG_DEVICE, MD_DEVICE } from '../../../constants/constants';
import BgDesktop from '@/images/confettiPage/solutionSection/img_bg@2x.webp';
import BgTablet from '@/images/confettiPage/solutionSection/img_bg-tablet@2x.webp';
import BgMobile from '@/images/confettiPage/solutionSection/img_bg-mobile@2x.webp';
import RunningColsBlock from 'components/RunningColsBlock/RunningColsBlock';
import carouselData from '../data/carouselData';
import RunningRowsBlock from 'components/RunningRowsBlock/RunningRowsBlock';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import BusinessContextDiagonal from 'components/BusinessContextDiagonal/BusinessContextDiagonal';
import MainTitle from 'components/MainTitle/MainTitle';

import styles from '../sass/confettiSolutionsSection.module.scss';

function ConfettiSolutionsSection() {
  const { width } = useWindowSize();

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      first: BgDesktop,
    };
    if (width < LG_DEVICE) {
      bg.first = BgTablet;
    }
    if (width < MD_DEVICE) {
      bg.first = BgMobile;
    }
    return bg;
  };

  return (
    <section className={styles.solutionSection}>
      <BusinessContextDiagonal
        upTitle={businessContextDataSecond.name}
        title={businessContextDataSecond.title}
        leftContent={businessContextDataSecond.firstText}
        rightContent={businessContextDataSecond.secondText}
        classes={{
          section: '!pb-[80px] screen-lg:!pb-[60px] screen-md:!pb-[40px]',
          upTitle: 'screen-md:!text-[14px]/[24px]',
        }}
      />
      <PageContainer
        className={`!pt-[40px] !pb-[80px] screen-lg:!pt-[20px] screen-lg:!pb-[60px]
        screen-md:!pt-[40px] screen-md:!pb-[40px]`}
      >
        <MainTitle
          className={`!text-[40px]/[56px] max-w-[1080px] min-xxxl:max-w-[1480px]
          screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]`}
        >
          Summing up all our work for the product, these are our leading solutions:
        </MainTitle>
      </PageContainer>
      <RunningColsBlock
        bg={getBackground().first}
        runningCols={runningCols}
      />
      <OurSolutions
        data={ourSolutionsContentData}
        desktopViewOnXL
        classes={{
          section: `!pb-[80px] pt-[80px] screen-lg:pt-[60px] screen-lg:!pb-[60px]
          screen-md:pt-[40px] screen-md:!pb-[40px]`,
        }}
      />
      <RunningRowsBlock
        background={getBackground().first}
        runningRows={carouselData}
      />
    </section>
  );
}

export default ConfettiSolutionsSection;
