export interface IStatusPageAttributes {
  data: string;
  title: string;
  titleMessage: string;
}

export default interface IOnixStatusPage {
  id: number;
  attributes: IStatusPageAttributes;
}
