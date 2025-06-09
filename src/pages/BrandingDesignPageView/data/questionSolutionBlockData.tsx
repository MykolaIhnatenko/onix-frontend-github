import React from 'react';

import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/questionSolutionBlock.module.scss';

const questionSolutionData = {
  title: (
    <MainTitle className={styles.title}>
      We help you to answer the essential questions
    </MainTitle>
  ),
  rows: [
    {
      id: 1,
      content: (
        <div className={styles.row}>
          <MainTitle className={`${styles.textStart} ${styles.text}`} tag="p">
            What will you be called?
            <span />
          </MainTitle>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className={styles.row}>
          <MainTitle className={`${styles.textCenter} ${styles.text}`} tag="p">
            What will be the visual associations?
            <span />
          </MainTitle>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className={styles.row}>
          <MainTitle className={`${styles.textEnd} ${styles.text}`} tag="p">
            What is the benefit of your design?
            <span />
          </MainTitle>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className={styles.row}>
          <MainTitle className={`${styles.textStart} ${styles.text}`} tag="p">
            What will the consumer see and perceive?
            <span />
          </MainTitle>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className={styles.row}>
          <MainTitle className={`${styles.textEnd} ${styles.text}`} tag="p">
            What will consumers remember?
            <span />
          </MainTitle>
        </div>
      ),
    },
  ],
};

export default questionSolutionData;
