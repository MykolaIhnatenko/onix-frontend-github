export interface IImagesData {
  [key: string]: {
    fileNameKey: string;
    fileNames: string[];
    mainBackgroundAlt: string;
    challengesImgDimensions: {
      width: number;
      height: number;
    }
  };
}
