import getRunningColsData from 'utils/getRunningColsData';

import IPhone1_1 from '@/images/hunter/runColsSection/img_1@2x.webp';
import IPhone1_2 from '@/images/hunter/runColsSection/img_2@2x.webp';
import IPhone1_3 from '@/images/hunter/runColsSection/img_3@2x.webp';
import IPhone2_1 from '@/images/hunter/runColsSection/img_4@2x.webp';
import IPhone2_2 from '@/images/hunter/runColsSection/img_5@2x.webp';
import IPhone2_3 from '@/images/hunter/runColsSection/img_6@2x.webp';
import IPhone3_1 from '@/images/hunter/runColsSection/img_7@2x.webp';
import IPhone3_2 from '@/images/hunter/runColsSection/img_8@2x.webp';
import IPhone3_3 from '@/images/hunter/runColsSection/img_9@2x.webp';
import IPhone4_1 from '@/images/hunter/runColsSection/img_10@2x.webp';
import IPhone4_2 from '@/images/hunter/runColsSection/img_11@2x.webp';
import IPhone4_3 from '@/images/hunter/runColsSection/img_12@2x.webp';
import IPhone5_1 from '@/images/hunter/runColsSection/img_13@2x.webp';
import IPhone5_2 from '@/images/hunter/runColsSection/img_14@2x.webp';
import IPhone5_3 from '@/images/hunter/runColsSection/img_15@2x.webp';

const images = [
  [IPhone1_1, IPhone1_2, IPhone1_3, IPhone1_1, IPhone1_2, IPhone1_3],
  [IPhone2_1, IPhone2_2, IPhone2_3, IPhone2_1, IPhone2_2, IPhone2_3],
  [IPhone3_1, IPhone3_2, IPhone3_3, IPhone3_1, IPhone3_2, IPhone3_3],
  [IPhone4_1, IPhone4_2, IPhone4_3, IPhone4_1, IPhone4_2, IPhone4_3],
  [IPhone5_1, IPhone5_2, IPhone5_3, IPhone5_1, IPhone5_2, IPhone5_3],
];

const phonesData = getRunningColsData(images);

export default phonesData;
