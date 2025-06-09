import { ElementType, ReactNode } from 'react';

interface IBorderedNumberCard {
  id: string,
  tag?: ElementType,
  tagTitle?: ElementType,
  title: string,
  content: string | ReactNode,
  classesComponent?: {
    container: string,
    title: string,
    text: string,
    number: string,
    content: string
  },
}

export default IBorderedNumberCard;
