import Hero from './components/Hero';
import Approach from './components/Approach';
import Challenges from './components/Challenges';
import Target from './components/Target';
import UserFlow from './components/UserFlow';
import TechStack from './components/TechStack';
import IShipVRSimulatorPageProps from './interfaces/IShipVRSimulatorPage';

import styles from './sass/shipVrSimulatorCasePage.module.scss';

function ShipVRSimulatorPageView({
  topVideoClicked = false, bottomVideoClicked = false, handleVideoClick, isBigTablet,
}:IShipVRSimulatorPageProps) {
  return (
    <div>
      <div className={styles.shipvrsimulator__content}>
        <Hero
          topVideoClicked={topVideoClicked}
          handleVideoClick={handleVideoClick}
          isBigTablet={isBigTablet}
        />
        <Approach isBigTablet={isBigTablet} />
        <Challenges />
        <Target />
        <UserFlow />
        <TechStack
          bottomVideoClicked={bottomVideoClicked}
          handleVideoClick={handleVideoClick}
          isBigTablet={isBigTablet}
        />
      </div>
    </div>
  );
}

export default ShipVRSimulatorPageView;
