import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import EdplusCaseStudyCard from './EdplusCaseStudyCard';
import EdplusText from './EdplusText';
import { EdplusTextVariant } from '../../../constants/enums';
import caseStudyCardContent from '../data/caseStudyCardContent';
import caseStudyImages from '../data/caseStudyImages';
import caseStudyCards from '../data/caseStudyCards';
import caseStudyDescription from '../data/caseStudyDescription';

import ImagePhoto from '@/images/EdplusPage/img_case-study-photo.webp';
import styles from '../sass/edplusCaseStudy.module.scss';

function EdplusCaseStudy() {
  return (
    <div className={styles.edplusCaseStudy}>
      <div className={styles.edplusWrap}>
        <div className={styles.background}>
          <VRARContent
            translate="translateX"
            offset={-4}
            className={styles.container}
          >
            <h2 className={styles.edplusTitleStyle}>Case study</h2>
            {caseStudyCardContent.map(({ id, content }) => (
              <EdplusText key={id} content={content} variant={EdplusTextVariant.TOP_MARGIN_FIRST_CHILD} />
            ))}
          </VRARContent>
          <VRARContent
            translate="translateX"
            className={styles.image}
          >
            {caseStudyImages.map(({ id, icon }) => (
              <div key={id}>
                {icon}
              </div>
            ))}
            <div className={styles.photo}>
              <ImageComponent
                src={ImagePhoto}
                fill
                alt="photo"
              />
            </div>
          </VRARContent>
        </div>
        <VRARContent
          translate="translateX"
          offset={-4}
          className={styles.description}
        >
          <p className={styles.edplusTextStyle}>
            M-learning is especially convenient and cost-effective because it replaces books,
            notes, and PCs with lightweight devices and is accessible from virtually anywhere.
            The use of ed tech apps also has a positive effect on learning for all age groups.
            Even kindergarten kids that use iPads show higher rates of literacy than non-users.
            In schooling, the benefits include the following:
          </p>
        </VRARContent>
        <div className={styles.box}>
          {caseStudyCards.map(({ id, content }) => (
            <EdplusCaseStudyCard key={id} content={content} />
          ))}
        </div>
        <div className={styles.description2}>
          {caseStudyDescription.map(({ id, content }) => (
            <VRARContent key={id}>
              <EdplusText
                content={content}
                variant={id === 1 ? EdplusTextVariant.WITHOUT_MARGIN : EdplusTextVariant.TOP_MARGIN}
              />
            </VRARContent>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EdplusCaseStudy;
