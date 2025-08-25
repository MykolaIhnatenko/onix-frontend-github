import BstevrContentBlock from './BstevrContentBlock';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../../components/Image/Image';

import IdeaPic from '@/images/BstevrCaseSudy/img_PicTheIdea.webp';
import Baller from '@/images/BstevrCaseSudy/img_baller.webp';
import Sportsman from '@/images/BstevrCaseSudy/img_sportsman.webp';
import PicBg from '@/images/BstevrCaseSudy/img_PicBg.webp';
import styles from '../sass/bstevrContentBlock.module.scss';

function BstevrIdeaSection() {
  return (
    <section>
      <BstevrContentBlock>
        <h2>
          The Idea.
        </h2>
        <div className={styles.article}>
          <div className={styles.idea}>
            <VRARContent className={styles.notice}>
              <p>
                This project was inspired by the founders’ love of football and the game’s huge
                popularity in the United States, especially as the National Football League (NFL).
                The fans constantly engage in fervent disputes over the ‘best ever’ team or its
                particular line-up, speculate as to the possible outcomes of clashes between
                legendary players, and seem to never have enough stuff to satisfy their endless
                curiosity,  imagination,  and passion for the sport.
              </p>

            </VRARContent>
            <VRARContent className={styles.ideaImg}>
              <ImageComponent
                src={IdeaPic}
                alt="Dots"
                sizes="(max-width: 450px) 50vw, 100vw"
              />
              <div className={styles.dots}>
                <ImageComponent
                  src={PicBg}
                  alt="Dots"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
                />
              </div>
            </VRARContent>
          </div>
          <div className={styles.text}>
            <VRARContent>
              <p>
                The founders of BSTEVR came up with an idea to create an NFL games simulator that would
                not only provide another stream of football content 24/7 free of charge.
                They envisioned a way for fans to live out their football fantasies and
                resolve personal disputes over the favorite teams’ or players’ supremacy.
              </p>
            </VRARContent>
            <VRARContent className={styles.advantage}>
              <p>
                The BSTEVR NFL game simulator app would give fans a chance to simulate
                <span className={styles.redText}>
                  &nbsp;matches between teams and line-ups that would never have met in real life,
                  and find out the presumed results.&nbsp;
                </span>
                All they need to do is sign up and enter the names into the online simulator configurations.
              </p>
            </VRARContent>
          </div>
          <VRARContent className={styles.images}>
            <ImageComponent
              src={Sportsman}
              alt="sportsman"
              width={633}
              height={420}
              sizes="(max-width: 450px) 50vw, 100vw"
            />
            <ImageComponent
              src={Baller}
              alt="photo"
              width={633}
              height={453}
              sizes="(max-width: 450px) 50vw, 100vw"
            />
          </VRARContent>
          <div className={styles.text}>
            <VRARContent>
              <p>
                Moreover, the experience should be social and shareable, providing fans with a creative outlet and
                a means to connect with and involve other fans.
                <span className="divider" />
                To do this, the BSTEVR founders needed to build a system that would accurately simulate NFL games,
                calculate the points that might be scored, and deliver detailed descriptions of the games’ key
                points in a format interesting for football fans.
              </p>
            </VRARContent>
          </div>
        </div>
      </BstevrContentBlock>
    </section>
  );
}

export default BstevrIdeaSection;
