import { useSelector } from 'react-redux';

import JakartaTitle from 'components/JakartaTitle/JakartaTitle';
import testimonialsSliderData from 'components/TestimonialsSlider/data/testimonialsSliderData';
import VRARContent from 'components/VRARContent/VRARContent';
import { IApp } from 'store/app/interfaces/IApp';
import IStore from 'store/interfaces/IStore';
import DragSlider from 'components/DragSlider/DragSlider';

function TestimonialsSlider() {
  const {
    screenSizes: {
      isXSDevice,
      isSMDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state.app);
  const isMobile = isXSDevice || isSMDevice || isMDDevice;

  return (
    <div className="bg-white pt-[100px] screen-lg:pt-[80px] screen-md:pt-[60px] overflow-hidden">
      <VRARContent className="p-[0_70px_60px] screen-lg:p-[0_30px_40px] screen-md:p-[0_15px_30px] min-xxxl:px-[80px]">
        <JakartaTitle>
          Testimonials
        </JakartaTitle>
      </VRARContent>
      {isMobile ? (
        <DragSlider data={testimonialsSliderData} withoutDots />
      ) : (
        <div
          className="relative flex gap-x-[30px]
          hover:[animation-play-state:paused] animate-testimonials-slider"
        >
          {[...testimonialsSliderData, ...testimonialsSliderData].map(({ content, id }, index) => (
            <div key={[id, 'testimonial', index].join('_')}>
              {content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TestimonialsSlider;
