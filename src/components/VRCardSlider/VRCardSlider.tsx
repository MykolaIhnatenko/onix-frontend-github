import PageContainer from '../PageContainer/PageContainer';
import MainTitle from '../MainTitle/MainTitle';
import DragSlider from '../DragSlider/DragSlider';
import VRARContent from '../VRARContent/VRARContent';
import IVRCardSlider from './interfaces/IVRCardSlider';

function VRCardSlider({
  data, title,
}: IVRCardSlider) {
  return (
    <section className="relative bg-black py-[120px] screen-lg:py-[80px]">
      <PageContainer>
        <VRARContent>
          <MainTitle className="text-white mb-[80px] screen-lg:mb-[60px] screen-md:mb-[40px]">
            {title}
          </MainTitle>
        </VRARContent>
      </PageContainer>
      <DragSlider
        data={data}
        withoutDots
      />
    </section>
  );
}

export default VRCardSlider;
