import Phone1_1 from '@/images/confettiPage/runningColsBlock/img_11@2x.webp';
import Phone1_2 from '@/images/confettiPage/runningColsBlock/img_12@2x.webp';
import Phone1_3 from '@/images/confettiPage/runningColsBlock/img_13@2x.webp';
import Phone2_1 from '@/images/confettiPage/runningColsBlock/img_21@2x.webp';
import Phone2_2 from '@/images/confettiPage/runningColsBlock/img_22@2x.webp';
import Phone2_3 from '@/images/confettiPage/runningColsBlock/img_23@2x.webp';
import Phone3_1 from '@/images/confettiPage/runningColsBlock/img_31@2x.webp';
import Phone3_2 from '@/images/confettiPage/runningColsBlock/img_32@2x.webp';
import Phone3_3 from '@/images/confettiPage/runningColsBlock/img_33@2x.webp';
import Phone4_1 from '@/images/confettiPage/runningColsBlock/img_41@2x.webp';
import Phone4_2 from '@/images/confettiPage/runningColsBlock/img_42@2x.webp';
import Phone4_3 from '@/images/confettiPage/runningColsBlock/img_43@2x.webp';
import Phone5_1 from '@/images/confettiPage/runningColsBlock/img_51@2x.webp';
import Phone5_2 from '@/images/confettiPage/runningColsBlock/img_52@2x.webp';
import Phone5_3 from '@/images/confettiPage/runningColsBlock/img_53@2x.webp';
import getRunningColsData from 'utils/getRunningColsData';

const images = [
  [Phone1_1, Phone1_2, Phone1_3, Phone1_1, Phone1_2, Phone1_3],
  [Phone2_1, Phone2_2, Phone2_3, Phone2_1, Phone2_2, Phone2_3],
  [Phone3_1, Phone3_2, Phone3_3, Phone3_1, Phone3_2, Phone3_3],
  [Phone4_1, Phone4_2, Phone4_3, Phone4_1, Phone4_2, Phone4_3],
  [Phone5_1, Phone5_2, Phone5_3, Phone5_1, Phone5_2, Phone5_3],
];

const runningCols = getRunningColsData(images);

export default runningCols;
