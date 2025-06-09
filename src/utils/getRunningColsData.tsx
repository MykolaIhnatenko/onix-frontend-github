import { StaticImageData } from 'next/image';

import { IRunningColsData } from 'components/RunningColsBlock/interfaces/IRunningColsBlock';

function getRunningColsData(images: StaticImageData[][]): IRunningColsData[] {
  return images.map((imageSet, index) => ({
    id: index + 1,
    images: imageSet.map((image, subIndex) => ({ itemId: (index + 1) * 10 + subIndex + 1, image })),
  }));
}

export default getRunningColsData;
