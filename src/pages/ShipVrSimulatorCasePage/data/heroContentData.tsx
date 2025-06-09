import styles from '../sass/shipVrSimulatorCasePage.module.scss';

const heroContent = [
  {
    id: 1,
    content: (
      <p className={`${styles.white} ${styles.mb15Center}`}>
        Our customer, Ingo Nadler from Hashplay Inc.,
        {' '}
        <br />
        reached out to Onix’ Unity team with the idea
        {' '}
        <br />
        of developing an AHTS VR game that would
        {' '}
        <br />
        provide a fully immersive user experience and
        {' '}
        <br />
        use realistic water and vessel physics effects.
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p className={styles.white}>
        The customer was pursuing the goal of
        {' '}
        <br />
        building a simulator VR app that would be
        {' '}
        <br />
        fascinating to use and visually stunning. Ingo
        {' '}
        <br />
        provided ship sketches, specific ship model
        {' '}
        <br />
        examples, and vessel architecture parameters
        {' '}
        <br />
        (weight, speed, number and types of engines).
      </p>
    ),
  },
];

export default heroContent;
