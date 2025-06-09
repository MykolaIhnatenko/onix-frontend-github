import RunningColsBlock from '../../../../components/RunningColsBlock/RunningColsBlock';
import runningColsData from '../data/runningColsData';
import digitalHealthcareOurSolutionsData from '../data/digitalHealthcareOurSolutionsData';
import OurSolutions from 'components/OurSolutions/OurSolutions';

import styles from '../sass/gatherGroupDesignSection.module.scss';

function GatherGroupDesignSection() {
  return (
    <section className={styles.designSection}>
      <RunningColsBlock
        runningCols={runningColsData}
        classes={{ section: 'bg-color-black' }}
      />
      <OurSolutions
        data={digitalHealthcareOurSolutionsData}
        desktopViewOnXL
        classes={{
          section: 'pt-[80px] !pb-0 screen-lg:pt-[60px] screen-md:pt-[80px]',
          item: 'min-lg:even:!flex-row min-lg:odd:!flex-row-reverse',
          itemContent: `min-lg:group-even:!p-[0_0_0_70px] min-lg:group-odd:!p-[0_70px_0_0]
            min-xxxl:group-odd:!p-[0_80px_0_0] min-xxxl:group-even:!p-[0_0_0_80px]`,
        }}
      />
    </section>
  );
}
export default GatherGroupDesignSection;
