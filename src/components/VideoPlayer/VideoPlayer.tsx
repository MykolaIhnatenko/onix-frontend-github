import React, {
  CSSProperties,
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

import IVideoPlayerProps, { ICustomHTMLVideoElement } from './interfaces/IVideoPlayer';
import ImageComponent from '../Image/Image';
import { useAppDispatch, useAppSelector } from '../../hook/reduxToolkit';
import MutedButton from './components/MutedButton';
import FullscreenButton from './components/FullscreenButton';
import MediaControls from './components/MediaControls';
import ProgressBar from './components/ProgressBar';
import VolumeBar from './components/VolumeBar';
import { LG_DEVICE, MD_DEVICE } from '../../constants/constants';
import ButtonPlay from './components/ButtonPlay';
import { setVideoFullScreen } from 'store/app/videoFullScreenSlice/slice';

function VideoPlayer({
  src,
  poster,
  testimonialVariant = false,
  autoPlayVariant,
  mutedVariant,
  id,
  loopVariant,
  withoutBtn,
  controls = true,
  buttonText = 'Play video',
  priorityImage = false,
  multiPlayer = false,
  playlist = [],
  activeVideo,
  setActiveVideo,
  classes = {},
}: IVideoPlayerProps) {
  const { screenSizes: { screenWidth } } = useAppSelector((state) => state?.app);
  const isMobile = screenWidth < MD_DEVICE;
  const isTablet = screenWidth <= LG_DEVICE;

  const dispatch = useAppDispatch();

  const [videoWrapperRef, inView] = useInView();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [isVisibleVolumeBar, setIsVisibleVolumeBar] = useState(false);
  const [isVisibleControls, setIsVisibleControls] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState<number>(0);
  const [volumeRange, setVolumeRange] = useState(0.5);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const controlsRef = useRef<HTMLDivElement | null>(null);
  const [lastInteractionTime, setLastInteractionTime] = useState<number>(Date.now());
  const volumeBarTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isPlaylistAvailable = () => multiPlayer && playlist.length > 0;
  const getVideoSource = () => (isPlaylistAvailable() ? playlist[currentVideoIndex].src : src);
  const getPosterSource = () => (currentVideoIndex === 0 ? poster?.src : '');
  const getStyles = (): CSSProperties => (testimonialVariant
    ? { position: isFullscreen ? ('fixed' as const) : ('unset' as const) }
    : {});

  const getMotionVariants = (isMobileDevice: boolean) => ({
    initial: {
      opacity: 0,
      y: isMobileDevice ? 0 : 25,
      x: isMobileDevice ? '0%' : '-50%',
    },
    animate: {
      opacity: 1,
      y: 0,
      x: isMobileDevice ? '0%' : '-50%',
    },
    exit: {
      opacity: 0,
      y: isMobileDevice ? 0 : 25,
      x: isMobileDevice ? '0%' : '-50%',
    },
  });

  const playVideo = async () => {
    if (videoRef.current) {
      await videoRef.current?.play().catch(() => {});
    }
  };

  const handleSetActiveVideo = () => {
    if (setActiveVideo) {
      setActiveVideo(Number(id));
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.addEventListener('play', handleSetActiveVideo);
    return () => {
      video.removeEventListener('play', handleSetActiveVideo);
    };
  }, [id, setActiveVideo, videoRef.current, showVideo]);

  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current?.paused) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    }
  }, [videoRef.current?.paused]);

  useEffect(() => {
    if (activeVideo && id && activeVideo !== Number(id)) {
      if (videoRef.current) {
        videoRef?.current?.pause();
      }
    }
  }, [activeVideo]);

  useEffect(() => {
    setShowControls(controls);
  }, [controls]);

  useEffect(() => {
    setIsEnded(currentTime === duration);
  }, [currentTime, duration]);

  useEffect(() => {
    if (isPlaylistAvailable()) {
      setCurrentVideoIndex(0);
    }
  }, [multiPlayer, playlist]);

  useEffect(() => {
    if (isPlaying) {
      setShowVideo(true);
    } else {
      setShowVideo(!isMobile);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      playVideo().catch(() => {});
    }
  }, [showVideo]);

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.volume = volumeRange;
    }
  }, [buttonVisible]);

  const handleVolumeBarMouseLeave = () => {
    setIsVisibleVolumeBar(false);
  };

  const handleTogglePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else {
      setShowVideo(true);
    }
    if (controls) {
      setShowControls(true);
    }
    setButtonVisible(false);
  };

  const restartVideo = async (e:React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      await videoRef.current.play().catch(() => {});
    }
  };

  const handleProgressHover = (event: React.MouseEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const rect = event.currentTarget.getBoundingClientRect();
      const hoverPos = event.clientX - rect.left;
      const hoverPercentage = hoverPos / rect.width;
      const calculatedHoverTime = hoverPercentage * videoRef.current.duration;

      setHoverTime(calculatedHoverTime);
      setHoverPosition((hoverPos / rect.width) * 100);
    }
  };

  const clearHoverTime = () => {
    setHoverTime(null);
    setHoverPosition(null);
  };

  const togglePlay = (e?:React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>) => {
    if (e) {
      e.stopPropagation();
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const seek = useCallback((time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current?.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  useEffect(() => {
    if (videoRef.current?.duration) {
      setDuration(videoRef.current.duration);
    }
  }, [videoRef?.current?.duration]);

  const toggleMute = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      setIsMuted((prevMuted) => {
        const newMuted = !prevMuted;
        videoElement.muted = newMuted;

        if (newMuted) {
          setVolumeRange(0);
        } else {
          setVolumeRange(videoElement.volume || 0.5);
        }
        return newMuted;
      });
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      dispatch(setVideoFullScreen(!isFullscreen));
      handleSetActiveVideo();
      if (!isMobile) {
        setIsFullscreen(!isFullscreen);
        return;
      }
      const videoElement = videoRef.current as ICustomHTMLVideoElement;
      if (videoElement.webkitEnterFullscreen) {
        videoElement.webkitEnterFullscreen();
      }
      if (videoElement.enterFullscreen) {
        videoElement.enterFullscreen();
      }
      videoElement.controls = false;
      setIsFullscreen(!isFullscreen);
    }
  };

  const changeVolume = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value;
      setVolumeRange(value);
      if (isMuted && value > 0) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (videoRef.current && inView && ['Space', 'ArrowRight', 'ArrowLeft', 'Escape'].includes(event.code)) {
      event.preventDefault();

      if (event.code === 'Space') {
        togglePlay();
        if (buttonVisible) setButtonVisible(false);
      } else if (event.code === 'ArrowRight') {
        seek(videoRef.current.currentTime + 5);
      } else if (event.code === 'ArrowLeft') {
        seek(videoRef.current.currentTime - 5);
      } else if (event.code === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
        dispatch(setVideoFullScreen(!isFullscreen));
      }
    }
  };

  useEffect(() => {
    if ((activeVideo === id && showControls) || isFullscreen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo, id, showControls, isFullscreen, isPlaying, inView]);

  const handlePreviousVideo = (e:React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const handleNextVideo = (e:React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (currentVideoIndex < playlist.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  useEffect(() => {
    if (isPlaylistAvailable()) {
      const { src: newSrc } = playlist[currentVideoIndex];
      videoRef.current?.setAttribute('src', newSrc);
      if (isPlaying || isEnded) {
        videoRef.current?.play().catch(() => {});
      }
    }
  }, [currentVideoIndex]);

  const resetInteractionTimer = useCallback((e?:React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    if (e) {
      e.stopPropagation();
    }
    setLastInteractionTime(Date.now());
    setIsVisibleControls(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteractionTime > 3200) {
        setIsVisibleControls(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisibleControls]);

  const toggleVisibleControls = () => {
    setIsVisibleControls((prev) => !prev);
    if (!isVisibleControls) {
      setLastInteractionTime(Date.now());
    }
  };

  const showVolumeBar = () => {
    if (volumeBarTimeoutRef.current) {
      resetInteractionTimer();
      clearTimeout(volumeBarTimeoutRef.current);
    }
    setIsVisibleVolumeBar(true);

    volumeBarTimeoutRef.current = setTimeout(() => {
      setIsVisibleVolumeBar(false);
    }, 2000);
  };

  return (
    <div className={`relative w-full ${classes?.container || ''}`}>
      {showVideo ? (
        <div
          ref={videoWrapperRef}
          className={`
          w-full h-full aspect-[16/9]
          ${classes?.videoPlayer || ''} 
          ${isFullscreen ? 'fixed top-0 left-0 w-full h-full min-w-screen min-h-screen z-[500000] bg-black'
            : 'relative'}`}
          style={getStyles()}
        >
          <video
            id={String(id)}
            className={`w-full h-full object-cover  ${isFullscreen ? '!object-contain' : ''} ${classes.video || ''}`}
            poster={getPosterSource()}
            ref={videoRef}
            autoPlay={autoPlayVariant}
            muted={mutedVariant}
            loop={loopVariant}
            controls={false}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onMouseMove={() => (isTablet ? null : resetInteractionTimer())}
            onTouchStart={() => toggleVisibleControls()}
          >
            <source src={getVideoSource()} type="video/mp4" />
            <track kind="captions" src="./#" srcLang="en" label="Empty" default />
          </video>
          <AnimatePresence>
            {(showControls && isVisibleControls && !buttonVisible) && (
              <motion.div
                id="videoPlayer"
                role="presentation"
                initial={getMotionVariants(isMobile).initial}
                animate={getMotionVariants(isMobile).animate}
                exit={getMotionVariants(isMobile).exit}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className={`
                absolute flex bottom-[20px] w-[740px] h-[86px] bg-[#2D2D2DA6] 
                px-[30px] py-[15px] pl-[15px] rounded-[1000px] left-1/2 
                -translate-x-1/2 translate-y-[25px] backdrop-blur-[8px] max-w-[97%]
                screen-lg:w-[688px] screen-lg:py-[5px] screen-lg:px-[20px] screen-lg:pl-[5px] 
                screen-lg:h-[58px] screen-lg:bottom-[10px] screen-lg:translate-y-0
                screen-md:bg-[#000000B2] screen-md:backdrop-blur-none screen-md:rounded-none
                screen-md:top-0 screen-md:left-0 screen-md:right-0 screen-md:bottom-0
                screen-md:translate-x-0 screen-md:translate-y-0
                screen-md:p-0 screen-md:w-full screen-md:max-w-full screen-md:min-h-full
                screen-md:flex screen-md:flex-col-reverse
                ${multiPlayer ? 'w-[900px] screen-lg:max-w-[688px] screen-md:w-full screen-md:max-w-full' : ''}
                ${classes?.controls || ''}`}
                onClick={() => () => toggleVisibleControls()}
                onTouchStart={() => (isMobile ? toggleVisibleControls() : null)}
                ref={controlsRef}
              >
                <MediaControls
                  currentVideoIndex={currentVideoIndex}
                  isEnded={isEnded}
                  isPlaying={isPlaying}
                  multiPlayer={multiPlayer}
                  onRestartVideo={restartVideo}
                  onNextVideo={handleNextVideo}
                  onPrevVideo={handlePreviousVideo}
                  onPlayPause={togglePlay}
                  listLength={playlist.length}
                  buttonClasses={classes.buttonControls}
                  isTouchDevice={isMobile || isTablet}
                />

                <div
                  className=" flex w-full max-w-full screen-md:w-auto screen-md:mx-[10px]"
                  role="presentation"
                  onMouseMove={(e) => resetInteractionTimer(e)}
                  onClick={(e) => resetInteractionTimer(e)}
                  onTouchMove={(e) => resetInteractionTimer(e)}
                  onTouchStart={(e) => resetInteractionTimer(e)}
                >
                  <ProgressBar
                    progressBarClasses={classes.progressBar}
                    currentTime={currentTime}
                    hoverPosition={hoverPosition}
                    onProgressHover={handleProgressHover}
                    onProgressLive={clearHoverTime}
                    hoverTime={hoverTime}
                    onSeekTo={seek}
                    duration={duration}
                  />
                  <div
                    className={`relative flex ml-[30px] screen-md:ml-[15px] screen-md:mb-[12px]
                    ${multiPlayer ? 'pl-[30px]' : ''} screen-lg:pl-0`}
                  >
                    <MutedButton
                      isMuted={isMuted}
                      volumeRange={volumeRange}
                      onClick={toggleMute}
                      onMouseEnter={showVolumeBar}
                    />
                    <VolumeBar
                      handleVolumeBarMouseLeave={handleVolumeBarMouseLeave}
                      handleVolumeBarMouseEnter={showVolumeBar}
                      volumeRange={volumeRange}
                      isMuted={isMuted}
                      multiPlayer={multiPlayer}
                      changeVolume={changeVolume}
                      isVisibleVolumeBar={isVisibleVolumeBar}
                    />
                  </div>
                  <FullscreenButton isFullscreen={isFullscreen} onClick={toggleFullscreen} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <ImageComponent
          src={poster || ''}
          className={`w-full h-full ${testimonialVariant ? 'absolute' : ''}`}
          alt="poster"
          sizes="(max-width: 768px) 80vw, (min-width: 768px) 100vw"
          priority={priorityImage}
        />
      )}
      <ButtonPlay
        showButton={buttonVisible && !withoutBtn}
        buttonText={buttonText}
        handlePlayPause={handleTogglePlay}
      />
    </div>
  );
}

export default VideoPlayer;
