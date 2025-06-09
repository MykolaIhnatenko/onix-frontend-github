import { StaticImageData } from 'next/image';

export default interface IOurCaseStudiesCard {
  id: string;
  title: string;
  descLeft: string;
  descRight: string;
  image: StaticImageData;
  goToPage: () => void;
  whiteTheme?: boolean;
  classes?: {
    card?: string;
    titleCard?: string;
  };
}
