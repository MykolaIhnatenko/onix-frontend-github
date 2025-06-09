import React from 'react';

import IconsContent from '../../../components/IconsContent/IconsContent';
import motionGraphicsIconsContentData from '../data/motionGraphicsIconsContentData';
import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/MotionGraphicsIconsContent.module.scss';

function MotionGraphicsIconsContent() {
  return (
    <div className={styles.container}>
      <MainTitle className={styles.heading} tag="h2">
        We strive to deliver design motion solutions that effectively communicate
        your message, engage your audience, and achieve your business goals!
      </MainTitle>
      <div className={styles.circlesContainer}>
        <IconsContent
          data={motionGraphicsIconsContentData}
          classes={{
            container: `!p-[0_30px] !w-full !max-w-[1020px] !mx-auto !gap-[initial]
              screen-md:!p-0 screen-md:!flex-row screen-md:!gap-y-[40px] screen-md:!gap-x-0`,
            containerItemWrapper: 'screen-md:!min-w-1/2 screen-md:!max-w-1/2',
            containerItem: `!min-w-[187px] !max-w-[initial]
              screen-lg:!min-w-[initial] screen-lg:!w-[154px]
              screen-md:!min-w-full screen-md:!max-w-full screen-md:!mx-auto`,
            iconContainer: `!w-fit !h-fit !p-[50px] !flex !justify-center !items-center
              !rounded-[1000px] !border !border-black !mx-auto !mb-[20px] screen-lg:!p-[40px]
              screen-md:!w-[126px] screen-md:!p-[39.5px] screen-md:!max-w-none screen-md:!min-w-auto`,
            title: `!text-[24px] !m-0 screen-lg:!text-[20px]
              screen-md:!pt-[20px] screen-md:!text-[20px] screen-md:!leading-[28px]`,
          }}
        />
      </div>
    </div>
  );
}

export default MotionGraphicsIconsContent;
