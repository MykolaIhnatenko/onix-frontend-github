import styles from '../sass/dedicatedTeamUtilizeSecion.module.scss';

const utilizeData = [
  {
    id: '01',
    content: (
      <h3 className={styles.itemText}>
        You are an early-stage startup that’s expected to grow fast
      </h3>
    ),
  },
  {
    id: '02',
    content: (
      <h3 className={styles.itemText}>
        Your idea needs a
        <br />
        discovery stage
      </h3>
    ),
  },
  {
    id: '03',
    content: (
      <h3 className={styles.itemText}>
        You need to meet tight
        <br />
        deadlines in project scaling
      </h3>
    ),
  },
  {
    id: '04',
    content: (
      <h3 className={styles.itemText}>
        It’s a complex long-term project that has the potential to expand
      </h3>
    ),
  },
];

export default utilizeData;
