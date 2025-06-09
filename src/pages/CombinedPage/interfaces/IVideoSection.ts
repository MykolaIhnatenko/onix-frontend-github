export interface IVideoSectionContent {
  id: number;
  title: string;
  description: string;
  className: string;
}

export default interface IVideoSection {
  stylesName: string;
  descriptionText: string;
  spanContent: string;
  videoSectionContent: IVideoSectionContent[];
  color: string;
  isNotMobile: boolean;
  getContent: () => JSX.Element;
  shadowColor: string;
  bgColor: string;
  width: number;
  height: number;
  src: string;
}
