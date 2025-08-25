import ImageComponent from '../../../../components/Image/Image';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import { muktaVaaniFont } from '../../../../fonts/MainFonts';

import WorkerImage from '@/images/caseStudiesPage/MetroCaseStudyPage/img_workerImage.webp';
import styles from '../sass/metroCaseProjectBeginning.module.scss';

function MetroCaseProjectBeginning() {
  return (
    <div className={`${styles.mainContainer} ${muktaVaaniFont.variable}`}>
      <div className={styles.innerConteiner}>
        <VRARContent>
          <h2 className={styles.contentTitle}>
            The beginning
            <br />
            of the project
          </h2>
        </VRARContent>
        <VRARContent className={styles.contentTextWrapper}>
          <p className={styles.contentText}>
            The client approached Onix already having a product specification
            and design for the minimum viable product (MVP).
          </p>
          <p className={styles.contentText}>
            Onix’s team started the work with a UI/UX audit of the design.
            We made some recommendations, the client accepted them, and the
            app design was adjusted before the wholesale grocery shopping
            app development began.
          </p>
        </VRARContent>
        <VRARContent className={styles.contentImageWrapper}>
          <ImageComponent
            src={WorkerImage}
            alt="workerImage"
            width={1110}
            height={600}
            quality={100}
            sizes="100vw"
          />
        </VRARContent>
      </div>
    </div>
  );
}

export default MetroCaseProjectBeginning;
