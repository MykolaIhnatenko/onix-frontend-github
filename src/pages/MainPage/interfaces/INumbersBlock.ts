interface INumbersBlockRow {
  data: IINumbersBlockItem[][];
}

export interface IINumbersBlockItem {
  id: number;
  prefix: string;
  prefixModifier?: boolean;
  title: string | JSX.Element;
  value: number;
  classes?: {
    prefix: string;
  };
}

export default INumbersBlockRow;
