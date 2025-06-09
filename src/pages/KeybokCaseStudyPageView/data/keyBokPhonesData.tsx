import IPhone1_1 from '@/images/keyBokPage/phones/img_phone1_1.webp';
import IPhone1_2 from '@/images/keyBokPage/phones/img_phone1_2.webp';
import IPhone1_3 from '@/images/keyBokPage/phones/img_phone1_3.webp';
import IPhone2_1 from '@/images/keyBokPage/phones/img_phone2_1.webp';
import IPhone2_2 from '@/images/keyBokPage/phones/img_phone2_2.webp';
import IPhone3_1 from '@/images/keyBokPage/phones/img_phone3_1.webp';
import IPhone5_1 from '@/images/keyBokPage/phones/img_phone5_1.webp';
import getRunningColsData from 'utils/getRunningColsData';

const images = [
  [IPhone1_1, IPhone1_2, IPhone1_3, IPhone1_1, IPhone1_2, IPhone1_3],
  [IPhone2_1, IPhone2_2, IPhone1_1, IPhone2_1, IPhone2_2, IPhone1_1],
  [IPhone3_1, IPhone1_3, IPhone2_1, IPhone3_1, IPhone1_3, IPhone2_1],
  [IPhone2_2, IPhone1_2, IPhone3_1, IPhone2_2, IPhone1_2, IPhone3_1],
  [IPhone5_1, IPhone2_1, IPhone1_2, IPhone5_1, IPhone2_1, IPhone1_2],
];

const phonesData = getRunningColsData(images);

export default phonesData;
