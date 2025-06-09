import styles from '../sass/shipVrSimulatorCasePage.module.scss';

const approachContent = [
  {
    id: 1,
    content: (
      <p>
        Our goal was to create a VR simulator app that
        {' '}
        <br />
        considered the water physics, the anchor
        {' '}
        <br />
        handling tug supply vessel architecture, ship and
        {' '}
        <br />
        engines behavior under different weather
        {' '}
        <br />
        conditions (stormy or calm).
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p className={styles.p15}>
        This simulator game has been completed
        {' '}
        <br />
        and displayed as a demo for the booth at
        {' '}
        <br />
        Hashplay CeBit 2017 held in Tokyo. It was
        {' '}
        <br />
        also deployed to Hashplay Steam and
        {' '}
        <br />
        VivePort to be used in training and
        {' '}
        <br />
        simulation.
      </p>
    ),
  },
];

export default approachContent;
