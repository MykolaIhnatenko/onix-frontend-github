import ImageComponent from 'components/Image/Image';
import IAdoricVideoBlock from '../interfaces/IManiVideoBlock';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';

import styles from '../sass/ManiVideoBlock.module.scss';

function ManiVideoBlock({
  source, background, videoBg, isMobile,
}: IAdoricVideoBlock) {
  return (
    <div className={styles.container}>
      {background && (
        <div className={styles.background}>
          <ImageComponent
            src={background}
            alt="call_to_action_bg"
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      )}
      <div className={styles.videoBlock}>
        <VideoPlayer
          src={source}
          poster={videoBg}
          autoPlayVariant={!isMobile}
          mutedVariant={!isMobile}
          loopVariant
          withoutBtn={!isMobile}
          controls={false}
          classes={{ videoPlayer: '!aspect-auto', video: '!object-contain' }}
        />
      </div>
    </div>
  );
}

export default ManiVideoBlock;
