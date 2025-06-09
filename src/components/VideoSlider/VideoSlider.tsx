import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { IVideoSlider } from './interfaces/IVideoSlider';
import OnixStoryPoster from '@/images/onixStory/img_poster.webp';

function VideoSlider({ data, setActiveVideo, activeVideo }: IVideoSlider) {
  return (
    <VideoPlayer
      activeVideo={activeVideo}
      setActiveVideo={setActiveVideo}
      id={1}
      multiPlayer
      playlist={data}
      poster={OnixStoryPoster}
    />
  );
}

export default VideoSlider;
