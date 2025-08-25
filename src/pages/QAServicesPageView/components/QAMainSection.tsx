import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ClickSlider from '../../../components/ClickSlider/ClickSlider';
import qaClickSliderData from '../data/qaClickSliderData';

import QAMainBg from '@/images/qaServicesPage/img_qa_main_bg.webp';
import styles from '../sass/qaMainSection.module.scss';

function BrandingDesignMainSection() {
  return (
    <section className={styles.section}>
      <ImageComponent
        src={QAMainBg}
        alt="bacground"
        priority
        className={styles.background}
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
      />
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title} tag="h1">
          QA and Software Testing Services
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          Onix is a dedicated team of experts specializing in ensuring the quality and reliability of your
          software applications.
          With our comprehensive range of testing services, we strive to identify and
          resolve any issues or bugs, guaranteeing that your
          software performs flawlessly across various platforms and devices.
        </ContentText>
      </PageContainer>
      <ClickSlider
        data={qaClickSliderData}
        activeShadow
        classes={{
          dotsContainer: '!p-0 !absolute !bottom-[40px] !left-1/2 !translate-x-[-50%]',
          item: {
            container: 'screen-md:!h-[475px] screen-md:!min-h-[475px]',
            content: '!pr-[70px] screen-lg:!pr-[30px] screen-md:!p-[30px_15px_95px]',
            title: `!text-[36px] !leading-[46px] !max-w-[1046px] screen-lg:!text-[30px]
              screen-lg:!leading-[40px] screen-lg:!max-w-[722px] screen-md:!text-[18px]
              screen-md:!leading-[28px]`,
            textContainer: '!mb-[15px] screen-lg:!mb-[5px] screen-md:!mb-0',
          },
        }}
      />
    </section>
  );
}

export default BrandingDesignMainSection;
