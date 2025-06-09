import { StaticImageData } from 'next/image';

interface ICoreTechnology {
  data: string[],
  title?: React.ReactNode,
  background?: StaticImageData,
  blackTheme?: boolean,
  classes?: {
    container?:string,
    background?: string,
    contentContainer?: string,
    title?: string,
    content?: string,
    contentItem?: string,
    itemText?: string,
  };
}

export default ICoreTechnology;
