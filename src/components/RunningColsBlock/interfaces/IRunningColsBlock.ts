import { StaticImageData } from 'next/image';

interface IRunningColsBlock {
  bg?: string | StaticImageData
  runningCols: IRunningColsData[];
  imagesQuality?: number;
  classes?: {
    section?: string;
    bgContainer?: string;
    image?: string;
    container?: string;
    column?: string;
    item?: string;
    itemImage?: string;
  };
}

export interface IRunningColsData {
  id: number,
  images: IRunningColsDataItem[],
}

interface IRunningColsDataItem {
  itemId: number,
  image: StaticImageData,
}

export default IRunningColsBlock;
