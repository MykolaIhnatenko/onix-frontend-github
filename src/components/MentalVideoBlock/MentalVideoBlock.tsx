import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { useAppSelector } from '../../hook/reduxToolkit';
import { setUiUxSoudn } from 'store/cursorFollower/slice';
import AnimImage from '../AnimImage/AnimImage';
import ImageComponent from '../Image/Image';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import IMentalVideoBlock from './interfaces/IMentalVideoBlock';

import styles from './sass/MentalVideoBlock.module.scss';

function MentalVideoBlock({
  video, image, classes = {}, title, animImage, idVideoBlock, styleContainer,
}: IMentalVideoBlock) {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const isMobile = isSMDevice || isXSDevice;
  const dispatch = useDispatch();

  return (
    <div className={`${styles.container} ${styleContainer ? styles[styleContainer] : ''}`}>
      <motion.div
        className={styles.videoWrapper}
        onClick={() => dispatch(setUiUxSoudn())}
      >
        {video && !isMobile ? (
          <VideoPlayer
            src={video}
            controls={false}
            classes={{
              video: classes?.video || '',
              videoPlayer: classes?.videoPlayer || '',
              container: classes?.container || '',
            }}
            autoPlayVariant
            mutedVariant
            loopVariant
            withoutBtn
            id={idVideoBlock || 'uiUxVideo'}
          />
        ) : (
          image && (
            <ImageComponent
              src={image}
              alt="MainBackground"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          ))}
      </motion.div>
      <div className={styles.titleScreen}>
        {title || ''}
      </div>
      {animImage && (
        <div className={styles.animContainer}>
          <AnimImage image={animImage} />
        </div>
      )}
    </div>
  );
}

export default MentalVideoBlock;
