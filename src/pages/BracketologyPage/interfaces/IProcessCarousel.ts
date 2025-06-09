interface IProcessCard {
  id: number;
  number: number;
  content: string;
}
export interface IProcessCarousel {
  processCards: IProcessCard[];
}
