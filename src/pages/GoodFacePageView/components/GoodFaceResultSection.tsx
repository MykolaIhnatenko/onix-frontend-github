import GoodFaceScalableImage from './GoodFaceScalableImage';
import BubbleAnimation from '../../../components/BubbleAnimation/BubbleAnimation';
import VRARContent from '../../../components/VRARContent/VRARContent';
import resultsData from '../data/resultsData';
import GoodFaceResultWoman from '../../../assets/images/goodFace/resultsSection/img_results-img@2x.webp';

import styles from '../sass/goodFaceResultSection.module.scss';

function GoodFaceResultSection() {
  return (
    <section className={styles.resultsSection}>
      <div className={`${styles.container} container`}>
        <VRARContent>
          <h2>
            <span> Results </span>
            obtained in numbers
          </h2>
        </VRARContent>
        <ul>
          {resultsData.map(({ id, title, content }) => (
            <li key={id}>
              <BubbleAnimation>
                <h3 className={`${styles.resultTitle} numberTitle`}>{title}</h3>
                {content}
              </BubbleAnimation>
            </li>
          ))}
        </ul>
        <GoodFaceScalableImage src={GoodFaceResultWoman} alt="woman" />
      </div>
    </section>
  );
}

export default GoodFaceResultSection;
