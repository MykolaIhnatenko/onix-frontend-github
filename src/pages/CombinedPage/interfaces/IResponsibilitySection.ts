export default interface IResponsibilitySection {
  title: string;
  responsibilityCards: {
    id: number;
    img: string;
    text: string;
  }[];
}
