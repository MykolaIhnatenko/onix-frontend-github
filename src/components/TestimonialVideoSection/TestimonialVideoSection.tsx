import ITestimonialVideoSection from './interfaces/ITestimonialVideoSection';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import TestimonialTemplate from 'components/TestimonialTemplate/TestimonialTemplate';

function TestimonialVideoSection({
  upTitle, title, videoSrc, preview,
}: ITestimonialVideoSection) {
  return (
    <TestimonialTemplate upTitle={upTitle} title={title}>
      <div className="relative max-w-[1300px]">
        <VideoPlayer
          src={videoSrc}
          poster={preview}
          classes={{
            controls: 'screen-md:!w-[100.5%] screen-md:!h-[100.5%]',
          }}
        />
      </div>
    </TestimonialTemplate>
  );
}

export default TestimonialVideoSection;
