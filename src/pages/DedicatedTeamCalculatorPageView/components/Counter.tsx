import React from 'react';

import ICounter from '../interfaces/ICounter';

import styles from '../sass/Counter.module.scss';

function Counter({
  value, increment, decrement,
}: ICounter) {
  return (
    <div className={styles.counter}>
      <button type="button" className={styles.decrement} onClick={increment}>-</button>
      <span className={`${styles.number} ${value ? styles.isValue : ''}`}>{value}</span>
      <button type="button" className={styles.increment} onClick={decrement}>+</button>
    </div>
  );
}

export default Counter;
