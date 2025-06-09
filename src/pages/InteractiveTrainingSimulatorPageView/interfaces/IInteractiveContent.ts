export default interface IInteractiveContent {
  content: {
    id: number;
    text: string;
    variant?: string;
  }[];
  classes: string;
  variant: string;
}
