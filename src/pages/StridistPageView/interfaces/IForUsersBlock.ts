import { StaticImageData } from 'next/image';

interface IForUsersBlock {
  img: StaticImageData,
  title: string,
  alt: string,
  forUsersListContent: {
    id: number,
    content: string,
  }[],
  type: 'first' | 'second',
}

export default IForUsersBlock;
