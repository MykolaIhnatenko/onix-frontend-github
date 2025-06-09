import InfiniteDragSliderItem from './components/InfiniteDragSliderItem';
import VirtualizedPage from './components/VirtualizedPage';
import { IInfiniteDragSlider } from './interfaces/IInfiniteDragSlider';

function InfiniteDragSlider({ data, setActiveSlide }: IInfiniteDragSlider) {
  return (
    <div className="overflow-hidden cursor-grab">
      <div
        className={`relative left-[50%] translate-x-[-50%] w-[612px] h-[582px]
        screen-lg:max-w-[602px] screen-lg:h-[582px]
        screen-md:w-[345px] screen-md:h-[330px]`}
      >
        <VirtualizedPage activeSlide={setActiveSlide}>
          {({ index }) => {
            const modulo = index % data.length;
            const imageIndex = modulo < 0 ? data.length + modulo : modulo;
            return (
              <div>
                <InfiniteDragSliderItem
                  id={data[imageIndex].id}
                  number={data[imageIndex].number}
                  text={data[imageIndex].text}
                  title={data[imageIndex].title}
                />
              </div>
            );
          }}
        </VirtualizedPage>
      </div>
    </div>
  );
}

export default InfiniteDragSlider;
