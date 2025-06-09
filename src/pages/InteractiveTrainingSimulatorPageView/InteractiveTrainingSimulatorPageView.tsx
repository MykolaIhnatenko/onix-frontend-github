import IInteractiveTrainingSimulatorPageView from './interfaces/InteractiveTrainingSimulatorPageView';
import InteractiveMainSection from './components/InteractiveMainSection';
import InteractiveCompanySection from './components/InteractiveCompanySection';
import InteractiveAppSection from './components/InteractiveAppSection';
import InteractiveFlowSection from './components/InteractiveFlowSection';
import InteractiveFeaturesSection from './components/InteractiveFeaturesSection';
import InteractiveProcessSection from './components/InteractiveProcessSection';
import InteractiveResultsSection from './components/InteractiveResultsSection';
import SatoshiFont from '../../fonts/SatoshiFont';

import styles from './sass/InteractiveTrainingSimulatorPageView.module.scss';

function InteractiveTrainingSimulatorPageView({
  saleUrl,
}: IInteractiveTrainingSimulatorPageView) {
  return (
    <div
      className={`${styles.interactiveTrainingSimulator} ${SatoshiFont.variable}`}
    >
      <div id="fixed" className={styles.fixedBlock}>
        <div className={styles.content}>
          <InteractiveMainSection />
          <InteractiveCompanySection />
          <InteractiveAppSection saleUrl={saleUrl} />
          <InteractiveFlowSection />
          <InteractiveFeaturesSection />
          <InteractiveProcessSection />
          <InteractiveResultsSection saleUrl={saleUrl} />
        </div>
      </div>
    </div>
  );
}

export default InteractiveTrainingSimulatorPageView;
