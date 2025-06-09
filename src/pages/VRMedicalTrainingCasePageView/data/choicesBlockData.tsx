import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/choicesBlock.module.scss';

export const firstColumnData = [
  {
    id: 0,
    title: <MainTitle tag="h3" className={styles.title}>VR Optimization</MainTitle>,
    content: (
      <ContentText tag="p" className={styles.text} marginAbsent>
        We optimized the provided videos according to standards that can be supported on as many
        devices as possible. However, we focused on the most popular and affordable VR headset — Meta Quest.
      </ContentText>
    ),
  },
  {
    id: 1,
    title: <MainTitle tag="h3" className={styles.title}>Optimal Format</MainTitle>,
    content: (
      <ContentText tag="p" className={styles.text} marginAbsent>
        We tested the most effective video format regarding compatibility and size and chose
        <span className="inline_block">stereo</span>
        <span className="inline_block">/h264(avc1)</span>
        <span className="inline_block">/mp4/3840×3840</span>
        /30fps/mpeg ACC. We took the measurements on the Meta Quest VR headset.
      </ContentText>
    ),
  },
  {
    id: 2,
    title: <MainTitle tag="h3" className={styles.title}>Stereo Playback</MainTitle>,
    content: (
      <ContentText tag="p" className={styles.text} marginAbsent>
        The application uses a stereo video mode where each eye views a separate part of the frame.
        Standard solutions from Unity do not support stereo-video format. The variety of supported video
        formats is generally limited. For this reason, we used the additional AVPro plugin for high-quality
        playback of video content. We chose a non-Meta solution to make it easier to port the application
        to another platform in the future.
      </ContentText>
    ),
  },
  {
    id: 3,
    title: <MainTitle tag="h3" className={styles.title}>Transition Editor</MainTitle>,
    content: (
      <ContentText tag="p" className={styles.text} marginAbsent>
        For scenario generation purposes, we developed an internal editor for conditional
        transitions whose data is serialized in JSON. The scenario format is&nbsp;text and transitions
        to other rounds as needed to&nbsp;build the configuration file.
      </ContentText>
    ),
  },
];
export const secondColumnData = [
  {
    id: 4,
    title: <MainTitle tag="h3" className={styles.title}>Transition Analysis</MainTitle>,
    content: (
      <ContentText tag="p" className={styles.text} marginAbsent>
        It was crucial to understand all the conditions of transition between rounds
        and the interactive part. For this purpose, we carefully checked and shaped the
        format of receiving the scenario as a document.
      </ContentText>
    ),
  },
  {
    id: 5,
    title: <MainTitle tag="h3" className={styles.title}>Download Dilemma</MainTitle>,
    content: (
      <ContentText tag="p" className={styles.text} marginAbsent>
        Additional content loading became quite a challenge. If a video size exceeds 2 Gb, it
        cannot be packed together in a build. The only option is
        to download from the server after installing the application at the user’s request.
        We could not build a ready-made server solution in such a short time. Downloading files that will
        be available via a direct link and creating configuration files seemed to be a
        straightforward and effective solution.
      </ContentText>
    ),
  },
  {
    id: 6,
    title: <MainTitle tag="h3" className={styles.title}>Efficient Iteration</MainTitle>,
    content: (
      <ContentText tag="p" className={styles.text} marginAbsent>
        We ensured that minimal changes in the application development could occur so as not
        to reassemble the build, only to create new scenarios and upload them to the server.
      </ContentText>
    ),
  },
  {
    id: 7,
    title: <MainTitle tag="h3" className={styles.title}>Scoring System</MainTitle>,
    content: (
      <ContentText tag="p" className={styles.text} marginAbsent>
        To evaluate how users complete the scenarios,
        we created a system of points based on multiple-choice questions and the time they take users to answer.
      </ContentText>
    ),
  },
];
