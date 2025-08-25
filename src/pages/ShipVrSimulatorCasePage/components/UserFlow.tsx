import { ReactNode } from 'react';

import VRARPageAppearAnimation from '../../caseStudies/components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import userFlowContent from '../data/userFlowContentData';
import userFlowRowContent from '../data/userFlowRowContentData';
import sMissionContent from '../data/sMissionContentData';

import ForWhomImg from '@/images/shipVrSimulatorCasePage/img_for-whom-this-product-img@2x.webp';
import styles from '../sass/shipVrSimulatorCasePage.module.scss';

function UserFlow() {
  const getTextContent = (contents: { id: number, content: ReactNode }[]) => (
    contents.map(({ id, content }) => (
      <VRARContent key={id}>
        {content}
      </VRARContent>
    ))
  );

  return (
    <>
      <div className={`${styles.row} ${styles.forWhomThisProductImg} ${styles.flex}`}>
        <div className={`${styles.itemImage} ${styles.forWhomThisProductImg}`}>
          <ImageComponent
            src={ForWhomImg}
            width={1200}
            height={600}
            quality={100}
            sizes="100vw"
            alt="ship"
          />
        </div>
      </div>
      <div className={`${styles.row} ${styles.mb15}`}>
        <VRARPageAppearAnimation classes={styles.itemText}>
          <h2>User flow of the app</h2>
        </VRARPageAppearAnimation>
      </div>
      <div className={`${styles.row} ${styles.userFlowOfTheAppContent} ${styles.ma} ${styles.mb50}`}>
        <div className={styles.itemText}>
          {getTextContent(userFlowContent)}
        </div>
      </div>
      <div className={styles.userFlowRowContent}>
        {userFlowRowContent.map(({
          id, classes, title, content, offset, src,
        }) => (
          <div key={id} className={styles.userFlowItem}>
            <div className={`${styles.itemText} ${styles.content}`}>
              <VRARContent>
                <h3 className={styles.mb15Center}>{title}</h3>
              </VRARContent>
              <VRARContent>
                {content}
              </VRARContent>
            </div>
            <VRARContent
              className={`${styles.flowItem} ${styles.itemImage} ${styles[classes]}`}
              translate="translateX"
              offset={offset}
            >
              <ImageComponent
                src={src}
                width={500}
                height={353}
                alt={classes}
              />
            </VRARContent>
          </div>
        ))}
      </div>
      <div className={`${styles.row} ${styles.sMissionContent} ${styles.ma}`}>
        <div className={`${styles.item} ${styles.itemText}`}>
          {getTextContent(sMissionContent)}
        </div>
      </div>
    </>
  );
}

export default UserFlow;
