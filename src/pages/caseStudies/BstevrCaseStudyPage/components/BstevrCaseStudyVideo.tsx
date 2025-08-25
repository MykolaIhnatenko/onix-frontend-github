import ImageComponent from '../../../../components/Image/Image';
import IBstevrCaseStudyPage from '../interfaces/IBstevrCaseStudyPage';

import VideoBg from '@/images/BstevrCaseSudy/img_Video.webp';
import styles from '../sass/bstevrCaseStudyVideo.module.scss';

function BstevrCaseStudyVideo({ videoStarted, videoClickHandler }: IBstevrCaseStudyPage) {
  return (
    <div className={styles.video}>
      {videoStarted ? (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/GvCa80ilw-M?autoplay=1"
          allow="autoplay; encrypted-media"
          title="bottomVideo"
        />
      ) : (
        <div className={styles.videoImgWrapper}>
          <ImageComponent
            fill
            src={VideoBg}
            alt="ImageVideoBg"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
          />
          <div
            aria-hidden="true"
            className={styles.videoControlsWrapper}
            onClick={videoClickHandler}
            onKeyDown={videoClickHandler}
          >
            <span className={styles.videoControl} />
          </div>
        </div>
      )}
    </div>
  );
}

export default BstevrCaseStudyVideo;
