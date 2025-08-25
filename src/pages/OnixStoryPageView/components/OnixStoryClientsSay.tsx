import VideoSlider from '../../../components/VideoSlider/VideoSlider';
import MainTitle from '../../../components/MainTitle/MainTitle';
import videoList from '../data/onixStoryVideoData.json';

import styles from '../sass/onixStoryClientsSay.module.scss';

function OnixStoryClientsSay() {
  return (
    <section className={styles.section}>
      <MainTitle className={styles.title}>
        What our clients say
      </MainTitle>
      <VideoSlider data={videoList} />
    </section>
  );
}

export default OnixStoryClientsSay;
