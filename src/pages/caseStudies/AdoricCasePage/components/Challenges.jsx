import Graph from './Graph';
import VRARPageAppearAnimation from '../../components/VRARPageAppearAnimation/VRARPageAppearAnimation';
import challengesContent from '../data/AdoricData';
import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/AdoricCaseView.module.scss';

function Challenges() {
  return (
    <section className={styles.artItem}>
      <div className="col l12">
        <VRARPageAppearAnimation>
          <h2 className={`${styles.contentHeaderPrimary} ${styles.center}`}>
            Major challenges
          </h2>
        </VRARPageAppearAnimation>
        <VRARPageAppearAnimation>
          <p className={`${styles.center} ${styles.hiddenXs}`}>
            Some of the challenges that we have experienced during the development
            process concern:
          </p>
        </VRARPageAppearAnimation>
      </div>
      {challengesContent.map(({
        id, mobileReverseClass, classes, mt, graph, reverse,
        img: {
          directionClass, displayClass, imgClass, offset, firstImgClass,
          secondImgClass, imgMb, imgMt, src, alt, width, height,
        },
        content: {
          text, textOffset, textDirectionClass, projectContextClass,
        },
      }) => (
        <div
          key={id}
          className={`${styles.projectRow} ${styles[mobileReverseClass]} ${styles[classes]} ${styles[reverse]} ${mt}`}
        >
          {graph && <Graph />}
          <div className={`${styles.rowCell} ${styles[textDirectionClass]}`}>
            <div className={`${styles.textCellInner} ${styles[projectContextClass]}`}>
              <VRARPageAppearAnimation translate="translateX" offset={textOffset}>
                {text}
              </VRARPageAppearAnimation>
            </div>
          </div>
          <VRARPageAppearAnimation
            classes={`${styles.rowCell} ${styles[directionClass]} ${styles[displayClass]} ${styles[imgClass]}`}
            translate="translateX"
            offset={offset}
          >
            <ImageComponent
              className={`${styles[firstImgClass]} ${styles[secondImgClass]} ${imgMb} ${imgMt}`}
              src={src}
              alt={alt}
              width={width}
              height={height}
              quality={100}
              sizes="100vw"
            />
          </VRARPageAppearAnimation>
        </div>
      ))}
    </section>
  );
}

export default Challenges;
