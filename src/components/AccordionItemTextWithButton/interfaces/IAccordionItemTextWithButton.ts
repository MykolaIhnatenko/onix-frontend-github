import PageLinks from 'constants/PageLinks';

export default interface IAccordionItemTextWithButton {
  content: string[];
  path: PageLinks;
  buttonText?: string;
  classes?: { readonly [key: string]: string; };
}
