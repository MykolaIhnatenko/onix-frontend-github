import PropTypes from 'prop-types';

import ProjectXMainSection from './components/ProjectXMainSection';
import ProjectXAboutSection from './components/ProjectXAboutSection';
import ProjectXScopeSection from './components/ProjectXScopeSection';
import ProjectXReadySection from './components/ProjectXReadySection';
import ProjectXFeaturesSection from './components/ProjectXFeaturesSection';
import ProjectXDesignSection from './components/ProjectXDesignSection';
import ProjectXFlowSection from './components/ProjectXFlowSection';
import ProjectXImplementationSection from './components/ProjectXImplementationSection';
import ProjectXImplementationBlackSection from './components/ProjectXImplementationBlackSection';
import ProjectXTestimonialSection from './components/ProjectXTestimonialSection';
import ProjectXLastSection from './components/ProjectXLastSection';
import { muktaVaaniFont } from '../../../fonts/MainFonts';

import styles from './sass/ProjectXCasePageView.module.scss';

function ProjectXCasePageView({ isTablet, isMobile, isNotMobile }) {
  return (
    <div className={`${styles.projectX} ${muktaVaaniFont.variable}`}>
      <ProjectXMainSection isNotMobile={isNotMobile} />
      <ProjectXAboutSection isNotMobile={isNotMobile} />
      <ProjectXScopeSection isTablet={isTablet} isMobile={isMobile} />
      <ProjectXReadySection isTablet={isTablet} />
      <ProjectXFeaturesSection isNotMobile={isNotMobile} />
      <ProjectXDesignSection isTablet={isTablet} isMobile={isMobile} />
      <ProjectXFlowSection isTablet={isTablet} />
      <ProjectXImplementationSection />
      <ProjectXImplementationBlackSection isNotMobile={isNotMobile} />
      <ProjectXTestimonialSection isNotMobile={isNotMobile} />
      <ProjectXLastSection />
    </div>
  );
}

ProjectXCasePageView.propTypes = {
  isTablet: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isNotMobile: PropTypes.bool.isRequired,
};

export default ProjectXCasePageView;
