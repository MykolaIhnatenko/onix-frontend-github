import { IHaasAutomationPageView } from './interfaces/IHaasAutomationPageView';
import PoppinsFont from '../../fonts/PoppinsFont';
import HaasMainSection from './components/HaasMainSection';
import HaasBusinessSection from './components/HaasBusinessSection';
import HaasNeededSection from './components/HaasNeededSection';
import HaasFlowSection from './components/HaasFlowSection';
import HaasSolutionSection from './components/HaasSolutionSection';
import HaasWhatSection from './components/HaasWhatSection';
import HaasTechnologiesSection from './components/HaasTechnologiesSection';
import HaasTestimonialSection from './components/HaasTestimonialSection';
import HaasResultsSection from './components/HaasResultsSection';
import HaasContactUsSection from './components/HaasContactUsSection';
import { useAppSelector } from 'hook/reduxToolkit';
import { LG_DEVICE, XXL_DEVICE } from 'constants/constants';

import styles from './sass/HaasAutomationPageView.module.scss';

function HaasAutomationPageView({ saleUrl }: IHaasAutomationPageView) {
  const {
    screenSizes: {
      isSMDevice, isXSDevice, isMDDevice, screenWidth,
    },
  } = useAppSelector((state) => state.app);

  return (
    <div className={`${styles.haas} ${PoppinsFont.variable}`}>
      <HaasMainSection isMobile={isXSDevice || isSMDevice} />
      <HaasBusinessSection />
      <HaasNeededSection
        isDesktop={screenWidth > LG_DEVICE}
        isTablet={isMDDevice}
        isMobile={isXSDevice || isSMDevice}
      />
      <HaasFlowSection
        isMaxDesktop={screenWidth >= XXL_DEVICE}
        isTablet={isMDDevice}
        isMobile={isXSDevice || isSMDevice}
      />
      <HaasWhatSection
        isMaxDesktop={screenWidth >= XXL_DEVICE}
        isMobile={isXSDevice || isSMDevice}
      />
      <HaasSolutionSection />
      <HaasTechnologiesSection isMobile={isXSDevice || isSMDevice} />
      <HaasTestimonialSection />
      <HaasResultsSection />
      {!saleUrl && <HaasContactUsSection />}
    </div>
  );
}

export default HaasAutomationPageView;
