import getRunningColsData from 'utils/getRunningColsData';

import Phone1 from '@/images/chinEasy/runningCols/img_1@2x.webp';
import Phone2 from '@/images/chinEasy/runningCols/img_2@2x.webp';
import Phone3 from '@/images/chinEasy/runningCols/img_3@2x.webp';
import Phone4 from '@/images/chinEasy/runningCols/img_4@2x.webp';
import Phone5 from '@/images/chinEasy/runningCols/img_5@2x.webp';
import Phone6 from '@/images/chinEasy/runningCols/img_6@2x.webp';
import Phone7 from '@/images/chinEasy/runningCols/img_7@2x.webp';
import Phone8 from '@/images/chinEasy/runningCols/img_8@2x.webp';
import Phone9 from '@/images/chinEasy/runningCols/img_9@2x.webp';
import Phone10 from '@/images/chinEasy/runningCols/img_10@2x.webp';
import Phone11 from '@/images/chinEasy/runningCols/img_11@2x.webp';
import Phone12 from '@/images/chinEasy/runningCols/img_12@2x.webp';
import Phone13 from '@/images/chinEasy/runningCols/img_13@2x.webp';
import Phone14 from '@/images/chinEasy/runningCols/img_14@2x.webp';
import Phone15 from '@/images/chinEasy/runningCols/img_15@2x.webp';

const images = [
  [Phone1, Phone2, Phone3, Phone1, Phone2, Phone3],
  [Phone4, Phone5, Phone6, Phone4, Phone5, Phone6],
  [Phone7, Phone8, Phone9, Phone7, Phone8, Phone9],
  [Phone10, Phone11, Phone12, Phone10, Phone11, Phone12],
  [Phone13, Phone14, Phone15, Phone13, Phone14, Phone15],
];

const runningColsData = getRunningColsData(images);

export default runningColsData;
