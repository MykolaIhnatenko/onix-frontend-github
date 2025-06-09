export interface IBookletData {
  id: number;
  attributes: {
    url: string;
  }
}
export default interface IBooklet {
  data: IBookletData;
}
