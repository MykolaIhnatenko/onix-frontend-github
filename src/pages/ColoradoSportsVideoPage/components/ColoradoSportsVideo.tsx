import useWindowSize from '../../../hook/useWindowSize';
import ImageComponent from '../../../components/Image/Image';
import Icon from '../../../assets/icon';
import { MD_DEVICE } from '../../../constants/constants';

import PurposeImage from '@/images/caseStudiesPage/ColoradoSports/img_purpose-image.webp';
import styles from '../sass/coloradoSportsVideo.module.scss';

const video = '/static/video/purpose-video.mp4';

function ColoradoSportVideo({ videoClass }: { videoClass: 'mobile' | 'desk' }) {
  const { width } = useWindowSize();
  const isNotMobile = width >= MD_DEVICE;

  return (
    <div className={`${styles.videoContainer} ${styles[videoClass]}`}>
      {isNotMobile ? (
        <video playsInline autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <ImageComponent
          src={PurposeImage}
          width={279}
          height={279}
          className={styles.image}
          alt="football-team"
        />
      )}
      <span className={`${styles.roundedLine} ${styles.topLeft}`}>
        <span className={styles.redCircle} />
        <span>REC</span>
      </span>
      <span className={`${styles.roundedLine} ${styles.topRight}`}>
        <span>1080px</span>
      </span>
      <span className={`${styles.roundedLine} ${styles.bottomLeft}`}>
        <Icon.IconColoradoAccumulator />
      </span>
      <span className={`${styles.roundedLine} ${styles.bottomRight}`}>
        <Icon.IconColoradoSphere />
        <span>COLORADO,US. TIME 1:01 AM</span>
      </span>
    </div>
  );
}

export default ColoradoSportVideo;
