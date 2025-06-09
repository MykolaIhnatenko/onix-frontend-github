import { StaticImageData } from 'next/image';

import MainTitle from '../../../components/MainTitle/MainTitle';
import runningRowsBlockData from '../data/runningRowsBlockData';
import RunningRowsBlock from '../../../components/RunningRowsBlock/RunningRowsBlock';
import ourSolutionsContentData from '../data/ourSolutionsContentData';
import OurSolutions from 'components/OurSolutions/OurSolutions';

import styles from '../sass/spatioRunningRowsBlock.module.scss';

function SpatioRunningRowsBlock({ background }:{ background:StaticImageData }) {
  return (
    <section className={styles.section}>
      <MainTitle className={styles.title}>
        Working on these projects, we provided the following solutions
      </MainTitle>
      <RunningRowsBlock
        background={background}
        runningRows={runningRowsBlockData}
        classes={{
          block: 'h-[390px] min-md:h-[619px] min-lg:h-[1044px]',
          container: 'h-[360px] min-md:h-[569px] min-lg:h-[1035px]',
          img: '!object-contain',
          row: 'flex gap-[15px] w-[1407px] min-md:w-[2276px] min-md:gap-[40px] min-lg:w-[3950px] min-lg:gap-[70px]',
        }}
      />
      <OurSolutions
        data={ourSolutionsContentData}
        desktopViewOnXL
        classes={{
          section: 'py-[80px] screen-lg:pt-[60px] screen-md:pt-[40px]',
        }}
      />
    </section>
  );
}

export default SpatioRunningRowsBlock;
