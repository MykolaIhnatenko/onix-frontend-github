import { StaticImageData } from 'next/image';

interface ISalesforceNeedSection {
  needContent : {
    id: number,
    img: StaticImageData,
    content: string,
  }[];
}

export default ISalesforceNeedSection;
