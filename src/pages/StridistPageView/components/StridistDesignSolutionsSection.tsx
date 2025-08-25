import ImageComponent from '../../../components/Image/Image';
import StridistAccordion from './StridistAccordion';
import useWindowSize from '../../../hook/useWindowSize';
import { MD_DEVICE } from '../../../constants/constants';

import DesignSolution from '@/images/StridistPage/img_design-solution@2x.webp';
import DesignSolutionTablet from '@/images/StridistPage/img_design-solution-tablet@2x.webp';
import styles from '../sass/stridistDesignSolutionsSection.module.scss';

function StridistDesignSolutionsSection() {
  const { width } = useWindowSize();
  const isMinDesktop = width >= MD_DEVICE;

  return (
    <section className={styles.designSolutionsSection}>
      <div className={`${styles.container} stridistContainer`}>
        <div className={styles.designSolutionsImg}>
          <ImageComponent
            src={isMinDesktop ? DesignSolution : DesignSolutionTablet}
            width={isMinDesktop ? 630 : 704}
            height={isMinDesktop ? 927 : 480}
            alt="woman"
          />
        </div>
        <StridistAccordion />
      </div>
    </section>
  );
}

export default StridistDesignSolutionsSection;
