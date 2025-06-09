import useWindowSize from '../../../../hook/useWindowSize';
import BstevrContentBlock from './BstevrContentBlock';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../../components/Image/Image';
import { MD_DEVICE } from '../../../../constants/constants';
import BstevrCaseStudyVideo from './BstevrCaseStudyVideo';
import bstevrFlowData from '../data/bstevrFlowData';
import IBstevrCaseStudyPage from '../interfaces/IBstevrCaseStudyPage';
import ImageMain1 from '@/images/BstevrCaseSudy/img_man1.webp';
import ImageMain2 from '@/images/BstevrCaseSudy/img_man2.webp';
import VideoBg from '@/images/BstevrCaseSudy/img_Video.webp';

import styles from '../sass/bstevrContentBlock.module.scss';

function BstevrFlowSection({ videoStarted, videoClickHandler }: IBstevrCaseStudyPage) {
  const { width } = useWindowSize();
  const isMobile = width < MD_DEVICE;

  return (
    <section className="greySection">
      <BstevrContentBlock>
        <h2>
          The application’s
          <br />
          user flow and features.
        </h2>
        <div className={`${styles.article} ${styles.resultingSystem}`}>
          <VRARContent className={`${styles.resultingNotice} ${styles.notice}`}>
            <p>
              This resulting system is unique on the market.
              BSTEVR empowers users to simulate competitions between any two NFL teams,
              even incompatible teams or players who would never have met in real life,
              e.g., Dallas Cowboys 2003 vs. Tampa Bay Buccaneers 1992.
            </p>
            <span className="divider" />
            <p>
              Users can also share the details of fantasy matches with friends, colleagues, or other fans.
            </p>
          </VRARContent>
          <VRARContent className={styles.imgs}>
            <ImageComponent
              src={ImageMain1}
              alt="ImageMain1"
              sizes="100vw"
            />
            <ImageComponent
              src={ImageMain2}
              alt="ImageMain2"
              sizes="100vw"
            />
          </VRARContent>
          <div className={styles.text}>
            <VRARContent>
              <p>
                The online simulation of football matches implies six steps:
              </p>
            </VRARContent>
            <VRARContent>
              <ol className={styles.steps}>
                {bstevrFlowData.map(({ id, text }) => (
                  <li key={id} className={styles.step}>
                    <p>
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </VRARContent>
            <VRARContent>
              {!isMobile
                ? (
                  <BstevrCaseStudyVideo
                    videoStarted={videoStarted}
                    videoClickHandler={videoClickHandler}
                  />
                )
                : <ImageComponent src={VideoBg} className={styles.imageVideo} />}
            </VRARContent>
          </div>
        </div>
      </BstevrContentBlock>
    </section>
  );
}

export default BstevrFlowSection;
