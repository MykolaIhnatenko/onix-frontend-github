import InViewAnimation from '../InViewAnimation';
import ImageComponent from '../../../../../components/Image/Image';
import { icons } from '../../data/LearningPoolData';

import styles from '../../sass/TechnologyStackStory.module.scss';

function TechnologyStackStory() {
  const renderedTechnologies = icons.map((icon) => (
    <div className={styles.technology} key={icon.src}>
      <ImageComponent
        src={icon.src}
        alt="tech icon"
        width={icon.width}
        height={icon.height}
      />
    </div>
  ));

  return (
    <div className={styles.storySix}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <InViewAnimation down>
            <h2 className={styles.number}>06.</h2>
          </InViewAnimation>
          <div className={styles.headingWrapper}>
            <InViewAnimation down>
              <h2 className={styles.heading}>Technology stack</h2>
            </InViewAnimation>
          </div>
        </div>
        <div className={styles.content}>
          <InViewAnimation down>
            <div className={styles.technologyWrapper}>
              <div className={styles.technologies}>
                {renderedTechnologies}
              </div>
              <div className={styles.technologyText}>
                <div className={styles.text}>
                  <InViewAnimation down>
                    <p>
                      It’s difficult to list every technology that we have worked with on Learning
                      Pool’s projects. The major ones include React, Redux, TypeScript,
                      Javascript, PHP, NodeJS, Laravel, Yii, Mongo, MySQL, AWS, CSS, SCSS, HTML,
                      and more.
                    </p>
                  </InViewAnimation>
                  <InViewAnimation down>
                    <p>
                      The tech stack had come together over the last 20 years, influenced by
                      market
                      trends, and tested and proven by time. Consequently, it was legacy code that
                      posed the main difficulty.
                    </p>
                  </InViewAnimation>
                </div>
              </div>
            </div>
          </InViewAnimation>
        </div>
      </div>
    </div>
  );
}

export default TechnologyStackStory;
