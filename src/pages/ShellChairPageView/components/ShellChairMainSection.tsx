import ShellChairMainBg from '../../../assets/images/shellChair/mainSection/img_macbook@2x.webp';
import ShellChairMainBgTablet from '../../../assets/images/shellChair/mainSection/img_tablet@2x.webp';
import ShellChairMainMobile from '../../../assets/images/shellChair/mainSection/img_mobile@2x.webp';
import ImageComponent from '../../../components/Image/Image';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import useAdaptiveImage from '../../../hook/useAdaptiveImage';

import styles from '../sass/shellChairMainSection.module.scss';

function ShellChairMainSection() {
  const { bg, properties: { imgWidth, imgHeight } } = useAdaptiveImage({
    imgDesk: ShellChairMainBg,
    imgTablet: ShellChairMainBgTablet,
    imgMobile: ShellChairMainMobile,
    heightDesk: 840,
    heightTablet: 715,
    heightMobile: 387,
    widthDesk: 1076,
    widthTablet: 768,
    widthMobile: 360,
  });

  return (
    <section className={styles.mainSection}>
      <PageContainer className={styles.container}>
        <MainTitle tag="h1" className={styles.title}>
          Webflow Website Design
          {' '}
          <br className={styles.br} />
          and Development:
          {' '}
          <br />
          Shell Chair Concept Design
        </MainTitle>
      </PageContainer>
      <div className={styles.imageBlock}>
        {bg && (
        <ImageComponent
          src={bg}
          width={imgWidth}
          height={imgHeight}
          priority
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
          alt="laptop"
        />
        )}
      </div>
    </section>
  );
}

export default ShellChairMainSection;
