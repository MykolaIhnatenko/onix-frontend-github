import PropTypes from 'prop-types';

import LearningPoolMain from './components/LearningPoolMain';
import LearningPoolAbout from './components/LearningPoolAbout';
import InitialContactStory from './components/stories/InitialContactStory';
import CollaborationStory from './components/stories/CollaborationStory';
import DevelopmentProcessStory from './components/stories/DevelopmentProcessStory';
import ProjectStory from './components/stories/ProjectStory';
import ExampleStory from './components/stories/ExampleStory';
import TechnologyStackStory from './components/stories/TechnologyStackStory';
import AnalysisStory from './components/stories/AnalysisStory';
import { muktaVaaniFont } from '../../../fonts/MainFonts';

import styles from './sass/LearningPoolPage.module.scss';

function LearningPoolView({ saleUrl }) {
  return (
    <>
      <div className={`${styles.learningPool} ${muktaVaaniFont.variable}`}>
        <div className={styles.learningPoolContainer}>
          <LearningPoolMain />
          <LearningPoolAbout />
          <section className={styles.story}>
            <InitialContactStory saleUrl={saleUrl} />
            <CollaborationStory />
            <DevelopmentProcessStory />
            <ProjectStory />
            <ExampleStory />
            <TechnologyStackStory />
            <AnalysisStory />
          </section>
        </div>
      </div>
      <div className={styles.triangle} />
    </>

  );
}

LearningPoolView.propTypes = {
  saleUrl: PropTypes.bool,
};

LearningPoolView.defaultProps = {
  saleUrl: undefined,
};

export default LearningPoolView;
