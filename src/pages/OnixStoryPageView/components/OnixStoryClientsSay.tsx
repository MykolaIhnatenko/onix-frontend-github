import VideoSlider from '../../../components/VideoSlider/VideoSlider';
import MainTitle from '../../../components/MainTitle/MainTitle';
import videoList from '../data/onixStoryVideoData.json';
import IFeedbackCard from '../../VideoTestimonialsPageView/interfaces/IFeedbackCard';

import styles from '../sass/onixStoryClientsSay.module.scss';

type OnixStoryVideoProps = Pick<IFeedbackCard, 'activeVideo' | 'setActiveVideo'>;

function OnixStoryClientsSay({ activeVideo, setActiveVideo }: OnixStoryVideoProps) {
  return (
    <section className={styles.section}>
      <MainTitle className={styles.title}>
        What our clients say
      </MainTitle>
      <VideoSlider data={videoList} setActiveVideo={setActiveVideo} activeVideo={activeVideo} />
    </section>
  );
}

export default OnixStoryClientsSay;
