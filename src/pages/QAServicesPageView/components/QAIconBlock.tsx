import IconsContent from '../../../components/IconsContent/IconsContent';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import useBackground from '../../../hook/useBackground';
import iconContentData from '../data/iconsContentData';

import QAIconBlockTablet from '@/images/qaServicesPage/img_icon_block_tablet.webp';
import QAIconBlockMobile from '@/images/qaServicesPage/img_icon_block_mobile.webp';
import QAIconBlockBG from '@/images/qaServicesPage/img_icon_block_bg.webp';
import styles from '../sass/qaIconBlock.module.scss';

function QAIconBlock() {
  const background = useBackground(QAIconBlockBG, QAIconBlockTablet, QAIconBlockMobile);

  return (
    <section className={styles.container}>
      {background
       && (
       <ImageComponent
         src={background}
         fill
         alt="background"
         className={styles.background}
       />
       )}
      <MainTitle className={styles.title}>
        What we test
      </MainTitle>
      <div className={styles.content}>
        <IconsContent
          data={iconContentData}
          classes={{
            container: `!max-w-[1020px] !mx-auto !flex !p-0 !gap-[inherit] !mt-[110px]
              screen-lg:!mt-[60px] screen-md:!mt-[40px]`,
            containerItem: 'screen-lg:!min-w-[126px] screen-lg:!max-w-[126px]',
            title: `!text-[24px] !font-[500]
              screen-lg:!text-[20px] screen-lg:!mt-[20px] screen-lg:!mb-[20px]`,
          }}
        />
      </div>
    </section>
  );
}

export default QAIconBlock;
