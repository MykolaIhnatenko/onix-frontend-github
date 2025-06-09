import Image1 from '../../../../assets/images/BstevrCaseSudy/img_design01.webp';
import Image2 from '../../../../assets/images/BstevrCaseSudy/img_design02.webp';
import Image3 from '../../../../assets/images/BstevrCaseSudy/img_design03.webp';
import Image4 from '../../../../assets/images/BstevrCaseSudy/img_PicBg.webp';

import styles from '../sass/bstevrContentBlock.module.scss';

const bstevrDesingnData = [
  {
    id: 1,
    src: Image3,
    classes: '',
  },
  {
    id: 2,
    src: Image1,
    classes: `${styles.middle}`,
  },
  {
    id: 3,
    src: Image2,
    classes: '',
  },
  {
    id: 4,
    src: Image4,
    classes: `${styles.dots} ${styles.reverse}`,
  },
];

export default bstevrDesingnData;
