import IPicture, { IFormatsData, IFormatsDataMiniBanner } from '../../../interfaces/IPicture';

type ReplaceType<T, Replacement> = {
  [Property in keyof T]: Property extends IFormatsData ? Replacement : T[Property];
};

export type MiniBannerPictureType = ReplaceType<IPicture, IFormatsDataMiniBanner>;

export interface IMiniBanner {
  url: string;
  title: string;
  miniBannerName: string;
  buttonText: string;
  pictureLarge: MiniBannerPictureType;
  pictureSmall: MiniBannerPictureType;
}

export interface IHandleMiniBannerClickParams {
  to: string;
  miniBannerName: string;
}
export default interface IMiniBannerProps {
  miniBanner?: IMiniBanner;
  isSmall: boolean;
  handleMiniBannerClick: (arg: IHandleMiniBannerClickParams) => void;
}
