import { StaticImageData } from 'next/image';

import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/salesforceResultSection.module.scss';

function SalesforceResultSection({ resultImgPath, result }: { resultImgPath: StaticImageData, result: string }) {
  return (
    <div className={styles.resultSection}>
      <ImageComponent
        fill
        className={styles.resultBgImg}
        src={resultImgPath}
        alt="Sales force"
      />
      <div className={`${styles.container} salesforceContainer`}>
        <VRARContent>
          <h2>Results</h2>
        </VRARContent>
        <VRARContent>
          <p className="result">
            {result}
          </p>
        </VRARContent>
      </div>
    </div>
  );
}

export default SalesforceResultSection;
