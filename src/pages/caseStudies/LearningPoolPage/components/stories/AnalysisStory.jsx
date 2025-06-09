import React from 'react';

import InViewAnimation from '../InViewAnimation';
import ImageComponent from '../../../../../components/Image/Image';
import { analysisCards, infoCards } from '../../data/LearningPoolData';

import styles from '../../sass/AnalysisStory.module.scss';

const bg = '/static/images/Pages/LearningPoolPage/img_BG-01.webp';

function AnalysisStory() {
  return (
    <div className={styles.storySeven}>
      <ImageComponent
        src={bg}
        fill
        alt="people"
      />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.numberContainer}>
            <InViewAnimation down>
              <h2 className={styles.number}>07.</h2>
            </InViewAnimation>
          </div>
          <div className={styles.headingWrapper}>
            <InViewAnimation down>
              <h2 className={styles.heading}>Current status and plans</h2>
            </InViewAnimation>
          </div>
        </div>
        <div className={styles.content}>
          <InViewAnimation down>
            <div className={styles.cards}>
              {analysisCards.map(({ id, title, text }) => (
                <div key={id} className={styles.card}>
                  <h3 className={styles.subtitle}>{title}</h3>
                  <div className={styles.text}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </InViewAnimation>
        </div>
        <div className={styles.content}>
          <div className={`${styles.text} ${styles.notFull}`}>
            <InViewAnimation down>
              <p>
                Learning Pool’s achievements during this period have been significant. These include
                multiple awards, grants, and an unprecedented influx of investments from their
                clients. Currently, the company boasts:
              </p>
            </InViewAnimation>
          </div>
        </div>
        <div className={styles.content}>
          <InViewAnimation down>
            <div className={styles.infoCards}>
              {infoCards.map(({ id, title, text }) => (
                <div key={id} className={styles.infoCard}>
                  <p className={styles.subtitle}>{title}</p>
                  <p className={styles.infoText}>{text}</p>
                </div>
              ))}
            </div>
          </InViewAnimation>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <InViewAnimation down>
              <p>
                Onix’s software developers pride themselves on having contributed to these
                achievements through their dedication to the projects and the high quality of
                implementation. Their merits are recognized by the whole team at Learning Pool.
              </p>
            </InViewAnimation>
          </div>
        </div>
      </div>
      <div className={styles.backgroundGradient} />
    </div>
  );
}

export default AnalysisStory;
