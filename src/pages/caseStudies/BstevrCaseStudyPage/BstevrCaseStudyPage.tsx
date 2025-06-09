import BstevrHeader from './components/BstevrHeader';
import BstevrIdeaSection from './components/BstevrIdeaSection';
import BstevrStartProjectSection from './components/BstevrStartProjectSection';
import BstevrSolutionSection from './components/BstevrSolutionSection';
import BstevrFlowSection from './components/BstevrFlowSection';
import BstevrDesignSection from './components/BstevrDesingnSection';
import BstevrResultSection from './components/BstevrResultSection';
import IBstevrCaseStudyPage from './interfaces/IBstevrCaseStudyPage';
import { muktaVaaniFont } from 'fonts/MainFonts';

import styles from './sass/bstevrCaseStudy.module.scss';

function BstevrCaseStudyPage({
  videoStarted, videoClickHandler,
}: IBstevrCaseStudyPage) {
  return (
    <div className={`${styles.bstevrCaseStudy} ${muktaVaaniFont.variable}`}>
      <BstevrHeader />
      <BstevrIdeaSection />
      <BstevrStartProjectSection />
      <BstevrSolutionSection />
      <BstevrFlowSection
        videoClickHandler={videoClickHandler}
        videoStarted={videoStarted}
      />
      <BstevrDesignSection />
      <BstevrResultSection />
    </div>
  );
}

export default BstevrCaseStudyPage;
