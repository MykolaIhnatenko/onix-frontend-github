import BstevrContentBlock from './BstevrContentBlock';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../../components/Image/Image';
import Icon from '../../../../assets/icon';
import bstevrAccordionData from '../data/bstevrAccordionData';
import AccordionWhite from 'components/AccordionWhite/AccordionWhite';
import accordionClasses from '../tailwind/accordionClasses';

import MainChallenges from '@/images/BstevrCaseSudy/img_theMainChallenges.webp';
import RecapperSystem from '@/images/BstevrCaseSudy/img_recapperSystemForAutomated.webp';
import AccumulatedDB from '@/images/BstevrCaseSudy/img_aDatabaseThatHasAccumulatedData.webp';
import ReliableSimulator from '@/images/BstevrCaseSudy/img_fastAndReliableSimulator.webp';
import PicBg from '@/images/BstevrCaseSudy/img_PicBg.webp';
import styles from '../sass/bstevrContentBlock.module.scss';

function BstevrSolutionSection() {
  return (
    <section className="solutions">
      <BstevrContentBlock>
        <h2>
          The project solutions&nbsp;
          <br />
          and technology stack.
        </h2>
        <div className={styles.article}>
          <div className={styles.text}>
            <VRARContent>
              <p>
                Onix&apos;s team built three major elements of the BSTEVR NFL
                games simulator application development project:
              </p>
            </VRARContent>
          </div>
          <ul className={styles.solutionsList}>
            <li className={styles.item}>
              <VRARContent>
                <ImageComponent
                  src={ReliableSimulator}
                  alt="image_ReliableSimulator"
                  sizes="100vw"
                />
                <p className={styles.fontParagraph}>a fast and reliable simulator of football games</p>
              </VRARContent>
            </li>
            <li className={`${styles.item} ${styles.reverse}`}>
              <VRARContent>
                <div className={styles.img}>
                  <ImageComponent
                    src={AccumulatedDB}
                    alt="image_AccumulatedDB"
                    sizes="100vw"
                  />
                  <ImageComponent
                    className={`${styles.dots} ${styles.dotsReverse}`}
                    src={PicBg}
                    alt="image_PicBg"
                    sizes="100vw"
                  />
                </div>
                <p className={`${styles.mobileMargin} ${styles.fontParagraph}`}>
                  a database that has accumulated data and statistics about all
                  the players&nbsp;and&nbsp;matches of the American National Football League since&nbsp;1966
                </p>
              </VRARContent>
            </li>
            <li className={styles.item}>
              <VRARContent>
                <ImageComponent
                  src={RecapperSystem}
                  alt="image_RecapperSystem"
                  sizes="100vw"
                />
                <p className={styles.fontParagraph}>
                  recapper — a system for automated generation of articles in English describing
                  the simulated games&apos; events and results
                </p>
              </VRARContent>
            </li>
            <li className={styles.item}>
              <VRARContent>
                <ImageComponent
                  src={MainChallenges}
                  alt="image_MainChallenges"
                  sizes="100vw"
                />
                <ImageComponent
                  className={styles.dots}
                  src={PicBg}
                  alt="image_PicBg"
                  sizes="100vw"
                />

                <div className={`${styles.notice} ${styles.advantage}`}>
                  <VRARContent className={styles.title}>
                    <p>
                      The main challenges during the development were:
                    </p>
                  </VRARContent>
                  <ul>
                    <li>
                      <div className={`${styles.svg} ${styles.simulator}`}>
                        <Icon.IconBstevrSimulator />
                      </div>
                      <p>
                        the initial low performance of the simulator
                      </p>
                    </li>
                    <li>
                      <div className={`${styles.svg} ${styles.calculator}`}>
                        <Icon.IconBstevrCalculator />
                      </div>
                      <p>
                        the need to calculate the various ratings of all players to generate reliable game results
                      </p>
                    </li>
                  </ul>
                </div>
              </VRARContent>
            </li>
          </ul>
          <div className={styles.text}>
            <AccordionWhite
              activeFirst
              data={bstevrAccordionData}
              classes={accordionClasses}
            />
          </div>
        </div>
      </BstevrContentBlock>
    </section>
  );
}

export default BstevrSolutionSection;
