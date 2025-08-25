export interface IChooseOnix {
  title: string;
  data: IChooseOnixData[];
  classes?: {
    container?: string;
    title?: string;
    item?: string;
    titleBox?: string;
    textItem?: string;
    descItem?: string;
  };
}

export interface IChooseOnixData {
  id: string;
  title: string;
  desc: string;
}
