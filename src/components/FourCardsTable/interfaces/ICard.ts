interface ICard {
  title: string;
  desc?: string;
  number: string;
  classes?: {
    card?: string;
    cardTitle?: string;
    cardDesc?: string;
    cardNumber?: string;
  };
}

export default ICard;
