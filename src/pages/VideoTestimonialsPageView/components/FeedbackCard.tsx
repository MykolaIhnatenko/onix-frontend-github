import IFeedbackCard from '../interfaces/IFeedbackCard';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/feedbackCard.module.scss';

function FeedbackCard({
  poster,
  title,
  country,
  description,
  videoSrc,
  specification,
  id,
}: IFeedbackCard) {
  return (
    <div className={styles.card}>
      <div className={styles.video}>
        <VideoPlayer
          id={id}
          src={videoSrc}
          poster={poster}
          testimonialVariant
          classes={{
            container: 'aspect-[16/9]',
            videoPlayer: 'static',
            video: 'absolute screen-lg:w-full',
            controls: '!w-[688px] !h-[58px] !bottom-[8px] !py-[5px] '
              + '!pr-[20px] !pl-[5px] screen-md:!p-0 screen-md:!w-[100.5%] screen-md:!h-[100.5%]',
            buttonControls: '!w-[48px] !h-[48px]',
            progressBar: '!mt-[9px] screen-md:!mt-0',
            zoomButton: '!ml-[20px] screen-md:!mb-0',
          }}
        />
      </div>
      <MainTitle tag="h3" className={styles.title}>{title}</MainTitle>
      <ContentText tag="p" className="!mb-[20px] screen-md:text-[16px]/[24px]" marginAbsent>
        {description}
      </ContentText>
      <div className={styles.infoBlock}>
        <p className={styles.infoBlockCountry}>
          {country}
        </p>
        <p className={styles.infoBlockSpecification}>
          {specification}
        </p>
      </div>
    </div>
  );
}

export default FeedbackCard;
