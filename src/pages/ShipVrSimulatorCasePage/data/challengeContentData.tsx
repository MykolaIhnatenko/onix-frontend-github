import VisualApp from '@/images//shipVrSimulatorCasePage/img_visual-app-heroes@2x.webp';
import Controls from '@/images//shipVrSimulatorCasePage/img_controls@2x.webp';
import DisplaysAndScreens from '@/images//shipVrSimulatorCasePage/img_displays-and-screens@2x.webp';

import styles from '../sass/shipVrSimulatorCasePage.module.scss';

const challengeContent = [
  {
    id: 1,
    title: 'Visual app heroes',
    titleClass: 'visualAppHeroes',
    content: (
      <div className={`${styles.itemText}`}>
        <p>
          The ship simulator has two visual heroes that have to look exceptionally good:
        </p>
        <p className={styles.padding}>
          - The ship bridge for the captain with displays and controls.
          {' '}
          <br style={{ display: 'block' }} />
          - The water with waves, foam, and spray on the windows.
        </p>
        <p>
          For the app, we used the advanced water and sky shaders, detailed and animated maps for foam
          {' '}
          <br />
          and water on windows and particle systems.
        </p>
      </div>
    ),
    img: {
      src2x: VisualApp,
      width: 90,
      height: 90,
    },
  },
  {
    id: 2,
    title: 'Controls',
    titleClass: 'controls',
    content: (
      <div className={styles.itemText}>
        <p>
          To interact with bridge controls, the captain uses a Vive controller. When a user looks at a bridge
          {' '}
          <br />
          control, it is highlighted to show when there is one to use.
        </p>
        <p>
          Control is performed via pointing and clicking on a ship control to modify it. The Vive controller is
          {' '}
          <br />
          used as a “joystick” or “power lever” in the air to move the control. Zero position gets a short
          {' '}
          <br />
          vibrate feedback.
        </p>
        <p>
          When the player selects the water-gun control, they are put close to the window and get a direct
          {' '}
          <br />
          control (crosshair control.trigger shoots a water pulse).
        </p>
        <p className={styles.sub}>
          There are four stations to go or turn to (with Vive tracking):
        </p>
        <ul className={`${styles.challengesList} ${styles.paddingBottom}`}>
          <li>
            <p>
              The main engine accelerates the ship forward and backward. Bow and stern
              {' '}
              <br />
              thrusters rotate the ship around its mass center, both can be set left or right.
            </p>
          </li>
          <li>
            <p>
              Navigation is done by clicking on a point in the sea chart - the ship will set and
              {' '}
              <br />
              show a corresponding course.
            </p>
          </li>
          <li><p>Anchor winch control captures and brings the anchor in.</p></li>
          <li><p>Water-gun is used to shoot the UFO or seagulls down.</p></li>
        </ul>
        <p>
          On the bridge, there are no seats, except for one central seat with the tracks in the floor. In the
          {' '}
          <br />
          simulation, the user will be able to actually walk from one control desk to another.
        </p>
      </div>
    ),
    img: {
      src2x: Controls,
      width: 69,
      height: 83,
    },
  },
  {
    id: 3,
    title: 'Displays and screens',
    titleClass: 'displaysAndScreens',
    content: (
      <div className={styles.itemText}>
        <p>
          Screens in the game are mostly real-time and include:
        </p>
        <ul className={styles.challengesList}>
          <li>
            <p>
              Navigation display
            </p>
          </li>
          <li>
            <p>
              Radar which is a green/black version of the navigation
            </p>
          </li>
          <li>
            <p>
              Compass to show the current course
            </p>
          </li>
          <li>
            <p>
              Water level chart with the green curve, changing over time
            </p>
          </li>
          <li>
            <p>
              4 cameras showing the back of the ship, two to the sides of the ship from the side of the
              {' '}
              <br />
              bridge and a display behind the seat showing the front.
            </p>
          </li>
        </ul>
      </div>
    ),
    img: {
      src2x: DisplaysAndScreens,
      width: 86,
      height: 65,
    },
  },
];

export default challengeContent;
