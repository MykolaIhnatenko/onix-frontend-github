export interface IAnchorItem {
  id: number;
  anchor: string;
  title: string;
}

export interface ITableOfContent {
  anchorItems: IAnchorItem[];
  variant?: boolean;
}
