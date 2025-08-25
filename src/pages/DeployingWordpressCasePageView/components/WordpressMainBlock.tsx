import { StaticImageData } from 'next/image';

import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';

import WordpressMainBg from '@/images/wordpressCasePage/mainBlock/img_main_bg.webp';
import WordpressMainTablet from '@/images/wordpressCasePage/mainBlock/img_main_bg_tablet.webp';
import WordpressMainMobile from '@/images/wordpressCasePage/mainBlock/img_main_bg_mobile.webp';
import WordpressLabel from '@/images/wordpressCasePage/mainBlock/img_label_main.webp';
import styles from '../sass/wordpessMainSection.module.scss';

function WordpressMainBlock() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg: { [propName: string]: StaticImageData } = {
      background: WordpressMainBg,
    };
    if (isMDDevice || isSMDevice) {
      bg.background = WordpressMainTablet;
    } else if (isXSDevice) {
      bg.background = WordpressMainMobile;
    }
    return bg;
  };

  return (
    <section className={styles.section}>
      <ImageComponent
        className={styles.bgImage}
        src={getBackground().background}
        alt="MainBackground"
        sizes="100vw"
        priority
        fill
      />
      <PageContainer className={styles.container}>
        <div className={styles.textContent}>
          <MainTitle className={styles.title} tag="h1">Deploying WordPress on Kubernetes</MainTitle>
          <ContentText className={styles.text} tag="p">
            Using Kubernetes to improve a growing online magazine&apos;s resilience and performance
          </ContentText>
        </div>
        <div className={styles.label}>
          <ImageComponent
            src={WordpressLabel}
            alt="label"
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            priority
            fill
          />
        </div>
      </PageContainer>
    </section>
  );
}

export default WordpressMainBlock;
