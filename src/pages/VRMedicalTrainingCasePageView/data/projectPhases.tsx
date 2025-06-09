import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/VRMedicalSliderData.module.scss';

const projectPhasesData = [
  {
    id: 1,
    content: (
      <div className={`${styles.card}`}>
        <MainTitle tag="h3">Project Prep</MainTitle>
        <ContentText tag="p" className={`${styles.card_text}`}>
          Our team firstly prepared project documentation because the client only provided a few videos and
          a superficial description of the desired functionality. We also created a package of necessary
          restrictions and formats for the application implementation: video-encoding format, sound format,
          video assets size, and video bitrate.
        </ContentText>
        <span className={styles.card_counter}>
          01
        </span>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={`${styles.card}`}>
        <MainTitle tag="h3">Scenario Evolution</MainTitle>
        <ContentText tag="p" className={`${styles.card_text}`}>
          The client initially wanted a single-scenario app. However, we decided that a tree-like plot
          divided into rounds – 360° video episodes, each ending with a quiz – would promote greater
          training efficiency. The scenario tree structure allows for creating complex training experiences
          with causative-consecutive results.
        </ContentText>
        <span className={styles.card_counter}>
          02
        </span>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className={`${styles.card}`}>
        <MainTitle tag="h3">Scenario Development</MainTitle>
        <ContentText tag="p" className={`${styles.card_text}`}>
          We agreed on the scenario of medical students’ training and the interactive tree progression of
          the scenario with physicians. These became the basis for the tree scenario construction structure
          (configuration file).
        </ContentText>
        <span className={styles.card_counter}>
          03
        </span>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className={`${styles.card}`}>
        <MainTitle tag="h3">Efficient Apps</MainTitle>
        <ContentText tag="p" className={`${styles.card_text}`}>
          We made two applications. The 1st contains all the scenarios and assets in the app. The 2nd downloads data
          (scenarios, assets) from the server. This way, we have demonstrated how the application can play many
          scenarios without taking up much space on the user&apos;s device.
        </ContentText>
        <span className={styles.card_counter}>
          04
        </span>
      </div>
    ),
  },
];

export default projectPhasesData;
