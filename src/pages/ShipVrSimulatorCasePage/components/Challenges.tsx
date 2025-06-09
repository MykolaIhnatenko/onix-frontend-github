import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import challengeContent from '../data/challengeContentData';
import rowChallengesContent from '../data/rowChallengesContentData';

import styles from '../sass/shipVrSimulatorCasePage.module.scss';

function Challenges() {
  return (
    <>
      <div className={`${styles.row} ${styles.majorChallenges} ${styles.ma}`}>
        <div
          className={`
            ${styles.itemText}
            ${styles.column}
            ${styles.justify}
            `}
        >
          <VRARContent>
            <h2> Major challenges </h2>
          </VRARContent>
          {rowChallengesContent.map(({ id, content }) => (
            <VRARContent key={id}>
              {content}
            </VRARContent>
          ))}
        </div>
      </div>
      {challengeContent.map(({
        id, title, titleClass, content, img: { src2x, width, height },
      }) => (
        <div key={id}>
          <VRARContent className={`${styles.row} ${styles[titleClass]} ${styles.ma}`}>
            <div className={`${styles.itemImage} ${styles[titleClass]}`}>
              <ImageComponent
                src={src2x}
                width={width}
                height={height}
                quality={100}
                sizes="100vw"
                alt={titleClass}
              />
            </div>
            <div className={`${styles.itemText}`}>
              <h3>{title}</h3>
            </div>
          </VRARContent>
          <VRARContent className={`${styles.row} ${styles.visualAppHeroesContent} ${styles.ma}`}>
            {content}
          </VRARContent>
        </div>
      ))}
    </>
  );
}

export default Challenges;
