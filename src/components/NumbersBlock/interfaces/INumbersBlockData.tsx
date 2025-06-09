export interface INumbersBlockItem {
  id: number,
  leftTitle: number,
  leftPrefix: string,
  leftContent: React.ReactNode,
  rightTitle: number,
  rightPrefix: string,
  rightContent: React.ReactNode,
  leftPostfix?: string,
}
export interface INumbersBlockData {
  data: INumbersBlockItem[],
  classes?: {
    table?: string,
    rowClasses?: {
      tableRow?: string,
      tableCol?: string,
      title?: string,
      leftPostfix?: string,
      text?: string,
    },
  },
}
