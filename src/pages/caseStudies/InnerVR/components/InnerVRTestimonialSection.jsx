import { useMemo } from 'react';

import InnerVRCard from './InnerVRCard';
import InnerVRBorder from './InnerVRBorder';
import useWindowSize from '../../../../hook/useWindowSize';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/InnerVRTestimonialSection.module.scss';

const imgMobile = '/static/images/Pages/InnerVR/testimonialSection/img_testimonial_mobile@2x.webp';
const imgTablet = '/static/images/Pages/InnerVR/testimonialSection/img_testimonial_tablet@2x.webp';
const img = '/static/images/Pages/InnerVR/testimonialSection/img_testimonial@2x.webp';

function InnerVRTestimonialSection() {
  const { width } = useWindowSize();

  const { src, imgWidth, imgHeight } = useMemo(() => {
    const values = { src: img, imgWidth: 610, imgHeight: 372 };
    if (width < 968) {
      values.src = imgTablet;
      values.imgWidth = 658;
      values.imgHeight = 401;
    }
    if (width < 768) {
      values.src = imgMobile;
      values.imgWidth = 295;
      values.imgHeight = 192;
    }

    return values;
  });

  return (
    <section className={styles.testimonialSection}>
      <div className="containerInnerVR pt">
        <InnerVRCard>
          <div className={`${styles.imageBlock} dFlex`}>
            <div className={`${styles.leftFlex} leftFlex`}>
              <VRARPageAppearAnimation tag="p" classes="title">
                CLIENT TESTIMONIAL
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle} subtitle`}>
                InnerVR Beta enjoys excellent reviews, with users praising its stunning visuals and effective
                meditation techniques.
              </VRARPageAppearAnimation>
            </div>
            <div className={`${styles.rightFlex} rightFlex`}>
              <ImageComponent
                src={src}
                width={imgWidth}
                height={imgHeight}
                sizes="100vw"
                alt="girl"
                className={styles.image}
              />
            </div>
          </div>
          <InnerVRBorder />
          <div className={`${styles.textBlock} dFlex`}>
            <VRARPageAppearAnimation classes={`${styles.textBlockItem} leftFlex`}>
              <p className={`${styles.text} text`}>
                “Major projects went smoothly, as was the Onix team&apos;s ability to get a beta approved by
                the Oculus App Store. Communication was constant and mostly good throughout.”
              </p>
              <p className="itemTitle whiteTitleColor">
                Jimmy Gambier,
                <br />
                InnerVR CEO
              </p>
            </VRARPageAppearAnimation>
            <VRARPageAppearAnimation classes={`${styles.textBlockItem} rightFlex`}>
              <p className={`${styles.text} text`}>
                Excellent. This is such an amazing app! Very awesome graphics! This app is a powerful
                meditation tool! I love it!
              </p>
              <p className="itemTitle whiteTitleColor">
                Сustomer feedback
              </p>
            </VRARPageAppearAnimation>
          </div>
        </InnerVRCard>
      </div>
    </section>
  );
}

export default InnerVRTestimonialSection;
