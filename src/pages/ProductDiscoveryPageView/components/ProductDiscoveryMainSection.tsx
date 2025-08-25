import useBackground from '../../../hook/useBackground';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ProductDiscoveryImageBlock from './ProductDiscoveryImageBlock';
import ImageComponent from '../../../components/Image/Image';

import PDMainBgImage from '@/images/productDiscovery/img_main_bg.webp';
import PDMainBgTabletImage from '@/images/productDiscovery/img_main_bg_tablet.webp';
import PDMainBgMobileImage from '@/images/productDiscovery/img_main_bg_mobile.webp';
import styles from '../sass/ProductDiscoveryMainSection.module.scss';

export default function ProductDiscoveryMainSection() {
  const background = useBackground(PDMainBgImage, PDMainBgTabletImage, PDMainBgMobileImage);

  return (
    <section className={styles.sectionWrapper}>
      <PageContainer className={styles.container}>
        <div className={styles.textBlock}>
          <MainTitle tag="h1" className={styles.sectionTitle}>
            Discovery Phase Services for Software Development
          </MainTitle>
          <ContentText tag="p" className={styles.sectionDescription}>
            Have a business idea but need to know how to implement it technically?
            Onix provides software product discovery services to bridge the gap between the business concept
            of your software project and its technical realization.
          </ContentText>
          <ContentText tag="p" className={styles.sectionDescription}>
            In just 2-4 weeks, we&apos;ll finalize your product vision, build a clickable prototype, work out the
            product architecture, and provide a cost proposal with time estimates. Onix helps you establish
            the basis for success in the market!
          </ContentText>
        </div>
      </PageContainer>
      <div className={styles.bgContainer}>
        {background && (
          <ImageComponent
            src={background}
            alt="MainBackground"
            fill
            priority
          />
        )}
      </div>
      <ProductDiscoveryImageBlock />
    </section>
  );
}
