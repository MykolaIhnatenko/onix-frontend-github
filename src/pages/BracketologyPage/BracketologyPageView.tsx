import { useMemo } from 'react';

import { muktaVaaniFont } from '../../fonts/MainFonts';
import { IBracketologyPageView } from './interfaces/IBracketologyPageView';
import BracketologyMainSection from './components/BracketologyMainSection';
import processBg from '@/images/bracketology/processSection/img_process_bg@2x.webp';
import processBgTablet from '@/images/bracketology/processSection/img_process_bg_tablet@2x.webp';
import processBgMobile from '@/images/bracketology/processSection/img_process_bg_mobile@2x.webp';
import mainBg from '@/images/bracketology/mainSection/img_main_bg@2x.webp';
import mainBgTablet from '@/images/bracketology/mainSection/img_main_bg_tablet@2x.webp';
import mainBgMobile from '@/images/bracketology/mainSection/img_main_bg_mobile@2x.webp';
import BracketologyContactUs from './components/BracketologyContactUs';
import BracketologyTodaySection from './components/BracketologyTodaySection';
import BracketologyBachelorSection from './components/BracketologyBachelorSection';
import BracketologyFlowSection from './components/BracketologyFlowSection';
import BracketologyFunctionalitySection from './components/BracketologyFunctionalitySection';
import BracketologyChapterSection from './components/BracketologyChapterSection';
import BracketologyProcessSection from './components/BracketologyProcessSection';
import BracketologyTechnologiesSection from './components/BracketologyTechnologiesSection';
import BracketologyDevelopmentSection from './components/BracketologyDevelopmentSection';
import BracketologyChallengeSection from './components/BracketologyChallengeSection';
import BracketologyResultSection from './components/BracketologyRelultSection';
import { ButtonType } from 'constants/enums';

import styles from './sass/BracketologyPageView.module.scss';

function BracketologyPageView({
  isDesktop, isTablet, isMobile, isMDDevice, saleUrl,
}: IBracketologyPageView) {
  const [processSectionBg, mainBackground] = useMemo(() => {
    let paths = [processBg, mainBg];
    if (isTablet) {
      paths = [processBgTablet, mainBgTablet];
    }
    if (isMobile) {
      paths = [processBgMobile, mainBgMobile];
    }

    return paths;
  }, [isTablet, isMobile]);

  return (
    <div className={`${styles.bracketology} ${muktaVaaniFont.variable}`}>
      <BracketologyMainSection mainBackground={mainBackground} />
      {!saleUrl && <BracketologyContactUs firstVariant idBtn={ButtonType.CASE} />}
      <BracketologyTodaySection />
      <BracketologyBachelorSection />
      <BracketologyFlowSection
        isDesktop={isDesktop}
        isMDDevice={isMDDevice}
      />
      <BracketologyFunctionalitySection />
      <BracketologyChapterSection saleUrl={saleUrl} />
      {!saleUrl && <BracketologyContactUs idBtn={ButtonType.CASE2} />}
      <BracketologyProcessSection processSectionBg={processSectionBg} />
      <BracketologyTechnologiesSection />
      <div className={styles.sectionsWrapper}>
        <BracketologyDevelopmentSection />
        <BracketologyChallengeSection />
      </div>
      {!saleUrl && <BracketologyContactUs firstVariant className={styles.ctaThird} idBtn={ButtonType.CASE3} />}
      <BracketologyResultSection />
      {!saleUrl && <BracketologyContactUs className={styles.ctaFourth} idBtn={ButtonType.CASE4} />}
    </div>
  );
}

export default BracketologyPageView;
