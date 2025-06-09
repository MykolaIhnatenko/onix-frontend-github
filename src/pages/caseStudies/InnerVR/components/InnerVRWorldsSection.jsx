import { useEffect, useState } from 'react';

import InnerVRCard from './InnerVRCard';
import InnerVRAccordion from './InnerVRAccordion';
import InnerVRWorldCarousel from './InnerVRWorldCarousel';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';

import styles from '../sass/InnerVRWorldsSection.module.scss';

function InnerVRWorldsSection() {
  const [isMinDesktop, setIsMinDesktop] = useState(false);

  const updateWindowWidth = () => {
    const { clientWidth } = document.body;

    setIsMinDesktop(clientWidth >= 993);
  };

  useEffect(() => {
    updateWindowWidth();

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <section className={styles.worldsSection}>
      <div className={`${styles.container} containerInnerVR pt`}>
        <InnerVRCard>
          <VRARPageAppearAnimation tag="p" classes={`${styles.title} title`}>
            The highlight of InnerVR – the Worlds
          </VRARPageAppearAnimation>
          <VRARPageAppearAnimation tag="h2" classes={`${styles.subtitle}`}>
            So far, nine virtual worlds have been designed, each with its special features, activities,
            background music, and ambient noise.
          </VRARPageAppearAnimation>
          {isMinDesktop ? (
            <InnerVRAccordion />
          ) : (
            <InnerVRWorldCarousel />
          )}
        </InnerVRCard>
      </div>
    </section>
  );
}

export default InnerVRWorldsSection;
