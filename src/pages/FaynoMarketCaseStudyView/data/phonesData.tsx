import IPhone1_1 from '@/images/faynoMarket/runningCols/img_phone1_1.webp';
import IPhone1_2 from '@/images/faynoMarket/runningCols/img_phone1_2.webp';
import IPhone1_3 from '@/images/faynoMarket/runningCols/img_phone1_3.webp';
import IPhone2_1 from '@/images/faynoMarket/runningCols/img_phone2_1.webp';
import IPhone2_2 from '@/images/faynoMarket/runningCols/img_phone2_2.webp';
import IPhone2_3 from '@/images/faynoMarket/runningCols/img_phone2_3.webp';
import IPhone3_1 from '@/images/faynoMarket/runningCols/img_phone3_1.webp';
import IPhone3_2 from '@/images/faynoMarket/runningCols/img_phone3_2.webp';
import IPhone3_3 from '@/images/faynoMarket/runningCols/img_phone3_3.webp';
import IPhone4_1 from '@/images/faynoMarket/runningCols/img_phone4_1.webp';
import IPhone4_2 from '@/images/faynoMarket/runningCols/img_phone4_2.webp';
import IPhone4_3 from '@/images/faynoMarket/runningCols/img_phone4_3.webp';
import IPhone5_1 from '@/images/faynoMarket/runningCols/img_phone5_1.webp';
import IPhone5_2 from '@/images/faynoMarket/runningCols/img_phone5_2.webp';
import IPhone5_3 from '@/images/faynoMarket/runningCols/img_phone5_3.webp';
import getRunningColsData from 'utils/getRunningColsData';

const images = [
  [IPhone1_1, IPhone1_2, IPhone1_3, IPhone1_1, IPhone1_2, IPhone1_3],
  [IPhone2_1, IPhone2_2, IPhone2_3, IPhone2_1, IPhone2_2, IPhone2_3],
  [IPhone3_1, IPhone3_2, IPhone3_3, IPhone3_1, IPhone3_2, IPhone3_3],
  [IPhone4_1, IPhone4_2, IPhone4_3, IPhone4_1, IPhone4_2, IPhone4_3],
  [IPhone5_1, IPhone5_2, IPhone5_3, IPhone5_1, IPhone5_2, IPhone5_3],
];

const phonesData = getRunningColsData(images);

export default phonesData;
