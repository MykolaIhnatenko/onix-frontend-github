import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';

import Poster from '@/images/hunter/videoBlock/img_poster_HUNTER.webp';
import styles from '../sass/hunterVideoSection.module.scss';

function HunterVideoSection() {
  const videoSrc = '/static/video/hunter.mp4';

  return (
    <section className={styles.videoSection}>
      <VideoPlayer
        src={videoSrc}
        controls={false}
        poster={Poster}
        loopVariant
        classes={{ button: 'top-[20%] screen-md:top-[37%] screen-sm:top-[30%]' }}
      />
    </section>
  );
}

export default HunterVideoSection;
