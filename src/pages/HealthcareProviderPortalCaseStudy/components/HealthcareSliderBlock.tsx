import { StaticImageData } from 'next/image';

import VRARContent from 'components/VRARContent/VRARContent';
import MainTitle from 'components/MainTitle/MainTitle';
import ImageComponent from 'components/Image/Image';
import DragSlider from '../../../components/DragSlider/DragSlider';
import PageContainer from 'components/PageContainer/PageContainer';
import dragSliderData from '../data/dragSliderData';

import styles from '../sass/healthcareSliderBlock.module.scss';

function HealthcareSliderBlock({ background }: { background: StaticImageData }) {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={background}
          alt="slider_block_bg"
          sizes="100vw"
          quality={100}
        />
      </div>
      <PageContainer className={styles.container}>
        <VRARContent>
          <MainTitle className={styles.blockTitle}>
            For whom this product is
          </MainTitle>
        </VRARContent>
        <VRARContent className={styles.form}>
          <div className={styles.formTitleBlock}>
            <MainTitle tag="p" className={styles.formTitle}>
              The web portal serves two groups&nbsp;of users:
            </MainTitle>
          </div>
          <div className={styles.formTextBlock}>
            <div className={styles.formTextBlockItem}>
              <MainTitle tag="p" className={styles.formText}>
                The client’s customers – healthcare providers
              </MainTitle>
            </div>
            <div className={styles.formTextBlockItem}>
              <MainTitle tag="p" className={styles.formText}>
                The client’s support&nbsp;staff
              </MainTitle>
            </div>
          </div>
        </VRARContent>
        <VRARContent>
          <MainTitle className={styles.title}>
            The HCP portal development process
          </MainTitle>
        </VRARContent>
      </PageContainer>
      <DragSlider
        data={dragSliderData}
        withoutDots
      />
    </section>
  );
}

export default HealthcareSliderBlock;
