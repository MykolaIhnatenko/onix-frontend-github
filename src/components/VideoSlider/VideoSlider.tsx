import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { IVideoSlider } from './interfaces/IVideoSlider';

import OnixStoryPoster from '@/images/onixStory/img_poster.webp';

function VideoSlider({ data }: IVideoSlider) {
  return (
    <VideoPlayer
      id={1}
      multiPlayer
      playlist={data}
      poster={OnixStoryPoster}
    />
  );
}

export default VideoSlider;
