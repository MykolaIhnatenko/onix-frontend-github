export interface IBracketologyAccordionContent {
  id: number;
  number: string;
  question: string;
  answer: string;
  secondAnswer?: string;
  position?: string;
  value?: string;
}
export interface IBracketologyAccordion {
  accordionContent: IBracketologyAccordionContent[];
  answerClass?: string;
  plusStyle?: string;
  itemClass?: string;
  variant?: 'developmentAccordion' | 'functionalityAccordion';
  setIsShowItem?: (id: number) => void;
}
