import { StaticImageData } from 'next/image';

export default interface IThreeStepsItemContent {
  subTitle: string | React.ReactNode;
  list: string[];
  text?: string | React.ReactNode;
  tabelTitle: string | React.ReactNode;
  tableList: string[];
  timelineTitle: string | React.ReactNode;
  isTimelineFirst?: boolean;
  isTimelineSecondary?: boolean;
  isTimelineThird?: boolean;
  image?: StaticImageData;
}
