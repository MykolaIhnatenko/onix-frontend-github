import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import BetterMePhone from '@/images/BetterMe/img_phone.png';

import styles from '../sass/results.module.scss';

function Results() {
  return (
    <section className={styles.results}>
      <div className="betterMeContainer">
        <VRARContent>
          <h2>Results</h2>
        </VRARContent>
        <VRARContent className={styles.background}>
          <ImageComponent
            src={BetterMePhone}
            width={346}
            height={446}
            alt="Phone"
            sizes="100vw"
            quality={100}
          />
          <p>
            As a result of Onix’s collaboration, our client now operates a reliable, well-performing web Shopify
            fitness store that allows users purchase branded sport and fitness products, feel comfortable during
            activities, and sense the spirit of the BetterMe community. At this stage, we are implementing new
            ideas for marketers, the provided design, and working on implementing new functionality.
          </p>
        </VRARContent>
      </div>
    </section>
  );
}

export default Results;
