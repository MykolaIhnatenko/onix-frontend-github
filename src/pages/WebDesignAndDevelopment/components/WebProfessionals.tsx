import React from 'react';

import { useAppSelector } from 'hook/reduxToolkit';
import dragSliderData from '../data/webDesignDragSliderData';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ScrollSliderDefault from '../../../components/ScrollSliderDefault/ScrollSliderDefault';
import DragSlider from '../../../components/DragSlider/DragSlider';
import PageContainer from 'components/PageContainer/PageContainer';
import ContentTextNew from 'components/ContentTextNew/ContentTextNew';

function WebProfessionals() {
  const {
    isMDDevice, isSMDevice, isXSDevice,
  } = useAppSelector((state) => state.app.screenSizes);

  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  return (
    <section className="pt-[80px] pb-[88px] screen-lg:pb-[80px] screen-md:py-[60px]">
      <PageContainer>
        <MainTitle className="max-w-[660px] screen-lg:max-w-[510px] screen-md:max-w-[300px] mb-[40px]">
          What Web Professionals You Can Hire at Onix
        </MainTitle>
        <ContentTextNew
          className="max-w-[732px] mb-[80px] screen-lg:max-w-[562px] screen-lg:mb-[60px] screen-md:mb-[40px]"
          text={`Depending on the project and tasks required, we will organize a professional
            team to take care of all your business needs:`}
        />
      </PageContainer>
      {isMobile ? (
        <DragSlider
          data={dragSliderData}
          withoutDots
        />
      ) : (
        <ScrollSliderDefault
          data={dragSliderData}
        />
      )}
    </section>
  );
}

export default WebProfessionals;
