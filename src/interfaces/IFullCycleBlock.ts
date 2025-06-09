export default interface IFullCycleRowItem {
  item: {
    id:number,
    leftTitle: number,
    leftPrefix: string,
    leftContent: React.ReactNode,
    rightTitle: number,
    rightPrefix: string,
    rightContent: React.ReactNode,
    isMiddle?: boolean,
    leftPostfix?: string,
  },
  rowClasses?: {
    tableRow?: string,
    tableCol?: string,
    title?: string,
    leftPostfix?: string,
    text?: string,
  },
}
