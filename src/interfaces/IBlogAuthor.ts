import IPicture from './IPicture';

export default interface IBlogAuthor {
  data: IBlogAuthorData;
}

export interface IBlogWriters {
  data: IBlogAuthorData[];
}

export interface IBlogAuthorAttributes {
  canonical:string;
  description:string;
  email:string;
  fullBiography:string;
  keywords:string;
  linkedin:string;
  name:string;
  picture:IPicture;
  position:string;
  shortBiography:string;
  surname:string;
  title:string;
  url:string;
}

export interface IBlogAuthorData {
  id:number;
  attributes: IBlogAuthorAttributes;
}
