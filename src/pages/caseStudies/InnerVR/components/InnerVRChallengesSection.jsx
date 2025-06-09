import InnerVRCard from './InnerVRCard';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import ImageComponent from '../../../../components/Image/Image';
import { useAppSelector } from '../../../../hook/reduxToolkit';

import styles from '../sass/InnerVRChallengesSection.module.scss';

const imgMobile = '/static/images/Pages/InnerVR/challengesSection/img_mobile@2x.webp';
const video = '/static/video/inner_vr.mp4';

function InnerVRChallengesSection() {
  const { screenSizes: { screenWidth } } = useAppSelector((state) => state?.app);
  const isNotMobile = screenWidth > 450;

  return (
    <section className={styles.challengesSection}>
      <div className="containerInnerVR pt">
        <InnerVRCard>
          <div className={`${styles.imageBlock} dFlex`}>
            <div className={`${styles.left} leftFlex`}>
              <VRARPageAppearAnimation tag="p" classes="title">
                Challenges and Objectives
              </VRARPageAppearAnimation>
              <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle} subtitle`}>
                Attracted by good reviews on Onix’s work, Jimmy Gambier contacted us with a request to take
                a look and optimize the project.
              </VRARPageAppearAnimation>
            </div>
            <div className={`${styles.right} rightFlex`}>
              <div className={styles.videoContainer}>
                {isNotMobile ? (
                  <video playsInline autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <ImageComponent
                    src={imgMobile}
                    width={295}
                    height={180}
                    className={styles.image}
                    alt="man"
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.textBlock}>
            <VRARPageAppearAnimation classes={`${styles.textBlockItem} leftFlex`}>
              <p className={`${styles.text} text`}>
                When Onix’s VR developers reviewed it, the problems turned out to be more severe than expected.
                The non-optimized project was hardly in a working state.
              </p>
            </VRARPageAppearAnimation>
            <VRARPageAppearAnimation classes={`${styles.textBlockItem} rightFlex`}>
              <p className={`${styles.text} text`}>
                Optimizing what was possible to optimize would be more difficult than building the system anew.
                The client agreed to the latter plan and gave Onix’s developers relative creative freedom.
              </p>
            </VRARPageAppearAnimation>
          </div>
        </InnerVRCard>
      </div>
    </section>
  );
}

export default InnerVRChallengesSection;
