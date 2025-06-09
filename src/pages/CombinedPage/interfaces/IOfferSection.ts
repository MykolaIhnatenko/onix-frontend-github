export default interface IOfferSection {
  title: string;
  cards: {
    id: number;
    icon: string;
    content: string;
    bg: string;
  }[];
  shadowColor: string;
  circleColor: string;
}
