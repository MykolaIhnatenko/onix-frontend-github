import { useMemo } from 'react';

import InnerVRCard from './InnerVRCard';
import InnerVRBorder from './InnerVRBorder';
import InnerVRListItem from './InnerVRListItem';
import useWindowSize from '../../../../hook/useWindowSize';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import ImageComponent from '../../../../components/Image/Image';
import { works } from '../data/InnerVRData';

import styles from '../sass/InnerVRWorksSection.module.scss';

const imgMobile = '/static/images/Pages/InnerVR/worksSection/img_work_img_mobile@2x.webp';
const imgTablet = '/static/images/Pages/InnerVR/worksSection/img_work_img_tablet@2x.webp';
const img = '/static/images/Pages/InnerVR/worksSection/img_work_img@2x.webp';

function InnerVRWorksSection() {
  const { width } = useWindowSize();

  const { src, imgWidth, imgHeight } = useMemo(() => {
    const values = { src: img, imgWidth: 610, imgHeight: 372 };
    if (width < 968) {
      values.src = imgTablet;
      values.imgWidth = 658;
      values.imgHeight = 372;
    }
    if (width < 768) {
      values.src = imgMobile;
      values.imgWidth = 295;
      values.imgHeight = 180;
    }

    return values;
  });

  return (
    <section className={styles.worksSection}>
      <div className="containerInnerVR pt">
        <InnerVRCard>
          <div className={`${styles.imageBlock} dFlex`}>
            <div className={`${styles.left} leftFlex`}>
              <VRARPageAppearAnimation tag="p" classes="title">
                How InnerVR works
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle} subtitle`}>
                InnerVR combines guided mindfulness sessions with beautiful virtual worlds to help a person
                relax, unwind, and connect with one’s inner self day by day.
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation tag="p" classes="text">
                Users play the game sitting or standing, with the ability to move, using touch controllers.
              </VRARPageAppearAnimation>
            </div>
            <div className={`${styles.right} rightFlex`}>
              <VRARPageAppearAnimation>
                <ImageComponent
                  src={src}
                  width={imgWidth}
                  height={imgHeight}
                  sizes="100vw"
                  alt="woman"
                  className={styles.image}
                />
              </VRARPageAppearAnimation>
            </div>
          </div>
          <InnerVRBorder />
          <div className={`${styles.listBlock} dFlex`}>
            <div className={`${styles.left} leftFlex`}>
              <VRARPageAppearAnimation tag="h3" classes={`${styles.subtitle} subtitle`}>
                Instant benefits for the client:
              </VRARPageAppearAnimation>
            </div>
            <div className={`${styles.right} rightFlex`}>
              <ul className={styles.list}>
                {works.map((item, index) => (
                  <InnerVRListItem key={['item', index].join('_')} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </InnerVRCard>
      </div>
    </section>
  );
}

export default InnerVRWorksSection;
