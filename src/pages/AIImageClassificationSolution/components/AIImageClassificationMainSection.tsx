import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import useAdaptiveImage from '../../../hook/useAdaptiveImage';
import ImageComponent from '../../../components/Image/Image';
import useBackground from '../../../hook/useBackground';

import AIImageClassificationMain from '@/images/aiImageClassifacationSolution/mainSection/img_main@2x.webp';
import AIImageClassificationMainMobile from '@/images/aiImageClassifacationSolution/mainSection/img_main_mobile@2x.webp';
import AIImageClassificationMainTablet from '@/images/aiImageClassifacationSolution/mainSection/img_main_tablet@2x.webp';
import AIIMageClassificationMainBg from '@/images/aiImageClassifacationSolution/mainSection/img_bg_main@2x.webp';
import AIIMageClassificationMainBgTablet from '@/images/aiImageClassifacationSolution/mainSection/img_bg_main_tablet@2x.webp';
import AIIMageClassificationMainBgMobile from '@/images/aiImageClassifacationSolution/mainSection/img_bg_main_mobile@2x.webp';
import styles from '../sass/aiImageClassificationMainSecion.module.scss';

function AIImageClassificationMainSection() {
  const IMAGE_MEASURMENT = 754;
  const IMAGE_MEASURMENT_TABLET = 628;
  const IMAGE_MEASURMENT_MOBILE = 284;

  const imageProperties = useAdaptiveImage({
    imgDesk: AIImageClassificationMain,
    imgTablet: AIImageClassificationMainTablet,
    imgMobile: AIImageClassificationMainMobile,
    heightDesk: IMAGE_MEASURMENT,
    heightTablet: IMAGE_MEASURMENT_TABLET,
    heightMobile: IMAGE_MEASURMENT_MOBILE,
    widthDesk: IMAGE_MEASURMENT,
    widthTablet: IMAGE_MEASURMENT_TABLET,
    widthMobile: IMAGE_MEASURMENT_MOBILE,
  });

  const background = useBackground(
    AIIMageClassificationMainBg,
    AIIMageClassificationMainBgTablet,
    AIIMageClassificationMainBgMobile,
  );

  return (
    <section className={styles.mainSection}>
      <div className={styles.background}>
        {background && (
          <ImageComponent
            src={background}
            alt="figures"
            sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            fill
            priority
          />
        )}
      </div>
      <PageContainer className={styles.container}>
        <div className={styles.contentBlock}>
          <MainTitle tag="h1" className={styles.title}>
            Image Classification
          </MainTitle>
          <MainTitle tag="p" className={styles.subtitle}>
            Cutting-edge Image Classification solution that leverages the unique capabilities
            of the Intel Neural Compute Stick 2
          </MainTitle>
        </div>
        <div className={styles.imagesBlock}>
          {imageProperties.bg && (
            <ImageComponent
              src={imageProperties.bg}
              alt="pictures"
              priority
              width={imageProperties.properties.imgWidth}
              height={imageProperties.properties.imgHeight}
              sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
            />
          )}
        </div>
      </PageContainer>
    </section>
  );
}

export default AIImageClassificationMainSection;
