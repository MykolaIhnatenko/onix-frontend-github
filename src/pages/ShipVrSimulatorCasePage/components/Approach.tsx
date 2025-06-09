import Plx from 'react-plx';

import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ApproachImg from '@/images/shipVrSimulatorCasePage/img_aproach-content@2x.webp';
import Ship from '@/images/shipVrSimulatorCasePage/img_aproach-content-ship@2x.webp';
import approachContent from '../data/approachContentData';

import styles from '../sass/shipVrSimulatorCasePage.module.scss';

function Approach({ isBigTablet }: { isBigTablet : boolean }) {
  const parallaxData = [
    {
      start: 'self',
      duration: 1500,
      properties: [
        {
          startValue: 0,
          endValue: -470,
          property: 'translateX',
        },
      ],
    },
  ];

  return (
    <>
      <div className={`${styles.row} ${styles.approach}`}>
        <div className={`${styles.itemText} ${styles.column} ${styles.justify}`}>
          <VRARContent>
            <h2 className={styles.mb15}>Approach</h2>
          </VRARContent>
          <VRARContent>
            <p className={styles.textInfo}>
              Before beginning our work on this VR project, we’ve conducted a market
              research to determine whether there are any similar VR solutions or apps and
              how we could make our simulator game a better experience for a user.
              We found out that such-like apps existed, but they didn’t support a VR experience.
            </p>
          </VRARContent>
        </div>
      </div>
      <div className={`${styles.row} ${styles.approachContent} ${styles.tdcolumn} ${styles.approachImgBlock}`}>
        <VRARContent
          translate="translateX"
          offset={-4}
          className={`${styles.approachImage} ${styles.approachContent}`}
        >
          <ImageComponent
            src={ApproachImg}
            width={632}
            height={481}
            alt="ships"
          />
        </VRARContent>
        <div className={`${styles.itemText} ${styles.content} ${styles.notPadding} `}>
          {approachContent.map(({ id, content }) => (
            <VRARContent key={id}>
              {content}
            </VRARContent>
          ))}
        </div>
      </div>
      <div className={styles.approachContainer}>
        <Plx
          parallaxData={parallaxData}
          className={`${styles.itemImage} ${styles.approachContentShip}`}
          disabled={isBigTablet}
        >
          <ImageComponent
            src={Ship}
            width={614}
            height={361}
            alt="ship"
          />
        </Plx>
      </div>
    </>
  );
}

export default Approach;
