import BusinessContext from './components/BusinessContext';
import ContactUs from './components/ContactUs';
import BetterMeMainSection from './components/BetterMeMainSection';
import Results from './components/Results';
import Solutions from './components/Solutions';
import TasksIncluded from './components/TasksIncluded';
import Technologies from './components/Technologies';
import CaseStudy from './components/CaseStudy';
import MoreProjects from './components/MoreProjects';
import IBetterMePagePops from './interfaces/IBetterMePage';
import InterFont from '../../fonts/InterFont';
import { ButtonType } from 'constants/enums';

import styles from './sass/betterMePageView.module.scss';

function BetterMePageView({ taskIncludedItems, projects, saleUrl } :IBetterMePagePops) {
  return (
    <div className={`${styles.betterMe} ${InterFont.className}`}>
      <BetterMeMainSection />
      <CaseStudy />
      <BusinessContext />
      <TasksIncluded taskIncludedItems={taskIncludedItems} />
      {!saleUrl && (
        <ContactUs
          title="Ready to modernize your fitness business by leveraging top-tier technologies?"
          idBtn={ButtonType.CASE}
        />
      )}
      <Solutions />
      <Results />
      <Technologies />
      {!saleUrl && (
        <ContactUs
          title="Need a custom Sports & Fitness solution for your specific business needs?"
          idBtn={ButtonType.CASE2}
        />
      )}
      <MoreProjects projects={projects} />
    </div>
  );
}

export default BetterMePageView;
