import HaasText from './HaasText';
import VRARContent from 'components/VRARContent/VRARContent';

import styles from '../sass/HaasBusinessSection.module.scss';

function HaasBusinessSection() {
  const secondText = `Our remote team addressed issues with existing products to meet users' demands,
    build a new solution to enhance service, and maintain the client's software.`;

  return (
    <section className={styles.business}>
      <div className={styles.content}>
        <HaasText tag="h2" variant="results">Business context</HaasText>
        <VRARContent translate="translateX" offset={-24} duration={0.6} rootMarginBottom={-20} withoutAnimateMobile>
          <HaasText tag="p" variant="resultsFS16" className={`${styles.text}`}>
            Our collaboration with Haas started in 2017 when we staffed our specialists to help the company
            quickly develop an end-to-end solution to improve their service workflow and provide an outstanding
            customer experience.&nbsp;
            <span className="min-lg:hidden">{secondText}</span>
          </HaasText>
        </VRARContent>
        <VRARContent
          translate="translateX"
          offset={24}
          duration={0.6}
          rootMarginBottom={-20}
          className="screen-lg:hidden"
        >
          <HaasText tag="p" variant="resultsFS16" className={`${styles.text} ${styles.text2}`}>
            {secondText}
          </HaasText>
        </VRARContent>
      </div>
    </section>
  );
}

export default HaasBusinessSection;
