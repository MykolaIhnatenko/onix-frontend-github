import { StaticImageData } from 'next/image';

export interface ISectionContent {
  id: number,
  title: string,
  description: string,
  className: string,
}
interface ISalesforceSecondSectionProps {
  secondSectionContent: ISectionContent[],
  picture: StaticImageData,
  content: string,
  shadowColor: string,
  color: string,
  classes?: string,
}

export default ISalesforceSecondSectionProps;
