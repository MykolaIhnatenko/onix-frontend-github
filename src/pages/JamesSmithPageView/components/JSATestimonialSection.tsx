import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import statistics from '../data/statistics';
import JSAPageContainer from './JSAPageContainer';
import JSAText from './JSAText';
import BlueSpan from './BlueSpan';
import Icon from '../../../assets/icon';
import trainer from '@/images/JamesSmith/testimonialSection/img_trainer.webp';
import IJSATestimonial from '../interfaces/IJSATestimonial';

import styles from '../sass/JSATestimonialSection.module.scss';

function JSATestimonialSection({ saleUrl }: IJSATestimonial) {
  const { isSMDevice, isXSDevice, isMDDevice } = useAppSelector((state) => state.app.screenSizes);
  const isSmallDevice = isXSDevice || isSMDevice || isMDDevice;

  return (
    <JSAPageContainer className={styles.testimonialSection}>
      <div className={styles.testimonial}>
        <div className={styles.pictureWrapper}>
          <ImageComponent
            src={trainer}
            width={738}
            height={873}
            alt="trainer"
            sizes="100vw"
          />
        </div>
        <VRARContent className={styles.descriptionWrapper}>
          <JSAText tag="p" variant="fs16" className={styles.upTitle}>Client Testimonial</JSAText>
          <JSAText tag="h2" variant="fs38">
            Yes it has
            <BlueSpan> improved. </BlueSpan>
            <br />
            There is still some work to do, but we are
            <BlueSpan> getting better </BlueSpan>
            👌
          </JSAText>
          {!saleUrl && (
            <div className={styles.links}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                href="https://www.jamessmithacademy.com"
              >
                <Icon.IconGoogleJSA width={isSmallDevice ? 40 : 49} height={isSmallDevice ? 40 : 52} />
                <div>
                  <div className={styles.linkTitle}>GET IT ON</div>
                  <div className={styles.storeName}>Google Play</div>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                href="https://www.jamessmithacademy.com"
              >
                <Icon.IconAppleJSA width={isSmallDevice ? 40 : 46} height={isSmallDevice ? 40 : 56} />
                <div>
                  <div className={styles.linkTitle}>Download on the</div>
                  <div className={styles.storeName}>App Store</div>
                </div>
              </a>
            </div>
          )}
        </VRARContent>
      </div>
      <VRARContent className={styles.statistics}>
        {statistics(isXSDevice).map(({
          id, icon, title, value,
        }) => (
          <div className={styles.statisticsItem} key={id}>
            <div className={styles.statisticsIcon}>
              {icon}
            </div>
            <div>
              <div className={styles.statisticsTitle}>
                <BlueSpan tag="p">{title}</BlueSpan>
              </div>
              <p className={styles.statisticsValue}>
                {value}
              </p>
            </div>
          </div>
        ))}
      </VRARContent>
    </JSAPageContainer>
  );
}

export default JSATestimonialSection;
