import VRARContent from '../../../components/VRARContent/VRARContent';
import { resultsContent } from '../data/data';
import InteractiveContactUsBlock from './InteractiveContactUsBlock';
import InteractiveContent from './InteractiveContent';
import InteractiveProgress from './InteractiveProgress';
import InteractiveTitleBlock from './InteractiveTitleBlock';
import IInteractiveResults from '../interfaces/IInteractiveResults';
import { ButtonType } from 'constants/enums';

import styles from '../sass/InteractiveResultsSection.module.scss';

function InteractiveResultsSection({ saleUrl }: IInteractiveResults) {
  return (
    <section
      className={`${styles.resultsSection} resultsInteractive interactive-section`}
    >
      <div className={`${styles.content} black`}>
        <div className={`${styles.container} container4D`}>
          <InteractiveTitleBlock
            color="white"
            title="Results & Prospects"
            number="06"
          />
          <VRARContent>
            <h2>
              The project’s results
              <br />
              and current status
            </h2>
          </VRARContent>
          <div className={styles.progressBlock}>
            <InteractiveProgress variant="resultProgress" duration=".resultProgress" />
            <div className={`${styles.progressBlockContent} resultProgress`}>
              <p className="fs24">
                The training simulator web app development has resulted in a
                <span className="fs24 purpleText"> high-quality, innovative, versatile, and systemic product </span>
                that engages users and delivers outstanding learning opportunities.
                <br className="display" />
                <span className="fs24 purpleText"> 4DiSimulator</span>
                <span className="fs24 purpleText">  </span>
                is unique on the market because it is not installable software but a web application that is easy
                to approve even for big companies’ management.
              </p>
              <InteractiveContent
                content={resultsContent}
                classes="progressBlockText"
                variant="result"
              />
            </div>
          </div>
        </div>
      </div>
      {!saleUrl && <InteractiveContactUsBlock idBtn={ButtonType.CASE2} />}
    </section>
  );
}

export default InteractiveResultsSection;
