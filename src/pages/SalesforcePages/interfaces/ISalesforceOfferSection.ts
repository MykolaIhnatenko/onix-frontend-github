import { StaticImageData } from 'next/image';

interface ICard {
  id: number,
  icon: StaticImageData,
  iconHeight: number,
  iconWidth: number,
  content: string,
  bg: StaticImageData,
}
interface ISalesforceOfferSectionProps {
  classes?: string,
  cards: ICard[],
  shadowColor: string,
  circleColor: string,
}

export default ISalesforceOfferSectionProps;
