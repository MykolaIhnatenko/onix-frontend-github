import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';

import OnixStoryVideoPoster from '@/images/onixStory/img_onix_Serhii_Kholin.webp';
import styles from '../sass/onixStoryVideo.module.scss';

function OnixStoryVideo() {
  const videoSrc = '/static/video/welcome-to-onix-systems.mp4';

  return (
    <section className={styles.container}>
      <VideoPlayer
        id={2}
        src={videoSrc}
        poster={OnixStoryVideoPoster}
      />
    </section>
  );
}

export default OnixStoryVideo;
