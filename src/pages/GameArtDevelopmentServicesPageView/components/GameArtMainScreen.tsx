import { useDispatch } from 'react-redux';

import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { ButtonType } from '../../../constants/enums';
import { setShowContactForm } from '../../../store/app/contactForm/slice';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import useWindowSize from '../../../hook/useWindowSize';
import { MD_DEVICE } from '../../../constants/constants';
import IGameArtMainScreen from '../interfaces/IGameArtMainScreen';
import ButtonPrimary from 'components/UI/ButtonPrimary/ButtonPrimary';

import styles from '../sass/gameArtMainScreen.module.scss';

function GameArtMainScreen({
  blockBg, firstText, secondText, title,
  video, btnText, classes = {},
}: IGameArtMainScreen) {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const isMobile = width < MD_DEVICE;

  return (
    <div
      className={styles.mainSection}
    >
      <div className={styles.bgContainer}>
        <ImageComponent
          src={blockBg}
          alt="MainBackground"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.contentItemLeft}>
          <div className={styles.contentBlock}>
            <div className={styles.textContainer}>
              <MainTitle tag="h1" className={styles.title}>
                {title}
              </MainTitle>
              <ContentText tag="p" className={styles.firstText}>
                {firstText}
              </ContentText>
            </div>
            <div>
              <ContentText tag="p" className={styles.secondText}>
                {secondText}
              </ContentText>
              <ButtonPrimary
                id={ButtonType.LAND}
                text={btnText}
                styleContainer={styles.contactBtn}
                onClick={() => dispatch(setShowContactForm({ showContactForm: true }))}
              />
            </div>
          </div>
        </div>
        <div className={styles.contentItemRight}>
          <div className={styles.imageBlock}>
            {!isMobile && (
              <VideoPlayer
                src={video}
                classes={{
                  video: classes?.video || '',
                  videoPlayer: classes?.videoPlayer || '',
                  container: classes?.container || '',
                }}
                autoPlayVariant
                mutedVariant
                loopVariant
                withoutBtn
                controls={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameArtMainScreen;
