import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import OnixStoryVideoPoster from '@/images/onixStory/img_onix_Serhii_Kholin.webp';
import IFeedbackCard from '../../VideoTestimonialsPageView/interfaces/IFeedbackCard';

import styles from '../sass/onixStoryVideo.module.scss';

type OnixStoryVideoProps = Pick<Partial<IFeedbackCard>, 'activeVideo' | 'setActiveVideo'>;

function OnixStoryVideo({ activeVideo, setActiveVideo }: OnixStoryVideoProps) {
  const videoSrc = '/static/video/welcome-to-onix-systems.mp4';

  return (
    <section className={styles.container}>
      <VideoPlayer
        id={2}
        src={videoSrc}
        poster={OnixStoryVideoPoster}
        activeVideo={activeVideo}
        setActiveVideo={setActiveVideo}
      />
    </section>
  );
}

export default OnixStoryVideo;
