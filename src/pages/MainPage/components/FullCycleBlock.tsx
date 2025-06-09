import React from 'react';

import MainTitle from '../../../components/MainTitle/MainTitle';
import NumbersBlock from '../../../components/NumbersBlock/NumbersBlock';
import tableContent from '../data/tableContent';

import styles from '../sass/fullCycleBlock.module.scss';

function FullCycleBlock() {
  return (
    <div className={`d-flex d-col bg-white ${styles.container}`}>
      <div className="d-flex d-col">
        <MainTitle tag="p" className={styles.caption}>
          Onix is a full-cycle software development company
          <br />
          {' '}
          that builds well-suited solutions to drive company outcomes
          <br />
          {' '}
          for startups, small and medium-sized businesses
        </MainTitle>
        <NumbersBlock data={tableContent} />
      </div>
    </div>
  );
}

export default FullCycleBlock;
