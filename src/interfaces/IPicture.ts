export interface IPictureAttributes {
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: {
    large?: IFormatsData;
    medium?: IFormatsData;
    thumbnail?: IFormatsData;
    small?: IFormatsData;
  };
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: string;
  provider?: string;
  provider_metadata?: {
    [propName:string]: string
  }
}

export default interface IPicture {
  data?: {
    id?: number;
    attributes?: IPictureAttributes;
  },
}

export interface IFormatsData {
  ext: string,
  url: string,
  hash: string,
  mime: string,
  name: string,
  path: string,
  size: number,
  width: number,
  height: number

}

export interface IFormatsDataMiniBanner {
  id: number;
  attributes: {
    large?: IFormatsData;
    medium?: IFormatsData;
    small?: IFormatsData;
    thumbnail?: IFormatsData;
  };
}
