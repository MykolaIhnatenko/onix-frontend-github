import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { useAppSelector } from '../../hook/reduxToolkit';
import { setUiUxSoudn } from 'store/cursorFollower/slice';
import AnimImage from '../AnimImage/AnimImage';
import ImageComponent from '../Image/Image';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import IMentalVideoBlock from './interfaces/IMentalVideoBlock';

function MentalVideoBlock({
  video, image, classes = {}, title, animImage, idVideoBlock,
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
    <div className={`relative h-screen min-h-[550px] max-h-[1400px] overflow-hidden
                     screen-lg:min-h-[1024px] screen-lg:max-h-full 
                     screen-md:min-h-[640px] screen-md:max-h-full ${classes?.container || ''}`}
    >
      <motion.div
        className="absolute top-0 right-0 w-full h-[calc(100vh+1px)] min-h-[669px]
         screen-lg:min-h-[1024px] screen-md:min-h-[640px]"
        onClick={() => dispatch(setUiUxSoudn())}
      >
        {video && !isMobile ? (
          <VideoPlayer
            src={video}
            controls={false}
            classes={{
              video: classes?.video || '',
              videoPlayer: classes?.videoPlayer || '',
              container: classes?.videoContainer || '',
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
      <div className={`w-full h-full p-[0_70px_0] flex items-center z-[1] relative pointer-events-none 
            min-xxxl:p-[0_80px_0] 
            screen-lg:p-[154px_30px_0] screen-lg:items-start 
            screen-md:p-[139px_15px_0] 
            ${classes?.titleScreen || ''}`}
      >
        {title || ''}
      </div>
      {animImage && (
        <div className="flex absolute w-full h-full max-w-[584px] max-h-[832px] z-[2] pointer-events-none
                        right-[50px] bottom-[-200px]
                        screen-xl:right-[-120px]
                        screen-lg:max-w-[478px] screen-lg:max-h-[680px] screen-lg:right-[-80px]
                        screen-lg:bottom-[-170px]
                        screen-md:hidden"
        >
          <AnimImage image={animImage} />
        </div>
      )}
    </div>
  );
}

export default MentalVideoBlock;
