import UserFlow1 from '@/images/shipVrSimulatorCasePage/img_opening-sequence@2x.webp';
import UserFlow2 from '@/images/shipVrSimulatorCasePage/img_menu-all@2x.webp';
import UserFlow3 from '@/images/shipVrSimulatorCasePage/img_game-beginning@2x.webp';
import UserFlow4 from '@/images/shipVrSimulatorCasePage/img_s-mission@2x.webp';
import styles from '../sass/shipVrSimulatorCasePage.module.scss';

const userFlowRowContent = [
  {
    id: 1,
    classes: 'openingSequence',
    title: 'Opening sequence and menu',
    offset: 4,
    content: (
      <p>
        When the application starts first and the user has put the
        {' '}
        <br />
        {' '}
        headset on, they are flying with the seagulls in circles
        {' '}
        <br />
        {' '}
        around the ship. In the distance (fog), they can see
        {' '}
        <br />
        {' '}
        the oil rig with the blinking lights but no details.
        {' '}
        <br />
        {' '}
        While they are flying, the menu appears.
        {' '}
        <br />
        {' '}
        The game opens with the background music and
        {' '}
        <br />
        {' '}
        seagulls/wind sounds.
      </p>
    ),
    src: UserFlow1,
  },
  {
    id: 2,
    classes: 'menuAll',
    title: 'Menu (all 3D elements)',
    offset: -4,
    content: (
      <>
        <p className={`${styles['b-30']} ${styles.textInfo}`}>
          In the menu, a user can select the difficulty marked from 1
          {' '}
          <br />
          {' '}
          (a calm sunny weather, no wind) to 9 (a very stormy
          {' '}
          <br />
          {' '}
          weather). Once the difficulty is selected, the
          sea and the
          {' '}
          <br />
          {' '}
          weather immediately change.
          <br />
          <br />
        </p>
        <p>
          When a user clicks ‘Start Mission’, the mission music begins
          {' '}
          <br />
          {' '}
          and the screen fades to the white fog that moves the
          {' '}
          <br />
          {' '}
          captain to the bridge at the main position and the screen
          {' '}
          <br />
          {' '}
          fades back to normal.
        </p>
      </>
    ),
    src: UserFlow2,
  },
  {
    id: 3,
    classes: 'gameBeginning',
    title: 'Game beginning',
    offset: 4,
    content: (
      <p>
        WThe introduction to the mission is started with audio
        {' '}
        <br />
        {' '}
        voice-overs and highlighting the corresponding controls.
        {' '}
        <br />
        {' '}
        After each step, the user clicks on “Understood’ button.
      </p>
    ),
    src: UserFlow3,
  },
  {
    id: 4,
    classes: 'sMission',
    title: 'The simulation mission',
    offset: -4,
    content: (
      <>
        <p className={`${styles['b-30']} ${styles.textInfo}`}>
          The simulation is a race against time. After clicking ‘Start
          {' '}
          <br />
          Mission’, a big red digital timer starts the countdown from
          {' '}
          <br />
          10 minutes in the bridge console.
        </p>
        <p className={`${styles['b-30']} ${styles.textInfo}`}>
          The captain sets the course by going to the navigation
          {' '}
          <br />
          console and clicking on the map to set the course.
        </p>
        <p className={`${styles['b-30']} ${styles.textInfo}`}>
          To reach the oil rig- safely, a user selects an initial distance
          {' '}
          <br />
          while getting familiar with the bridge, so that pushing the
          {' '}
          <br />
          main engines gets them there in no more than 2 minutes.
        </p>
      </>
    ),
    src: UserFlow4,
  },
];

export default userFlowRowContent;
