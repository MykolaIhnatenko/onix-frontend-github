import { ListWhiteSectionVariant } from '../../../../constants/enums';

interface IListWhiteSection {
  title?: string;
  subtitle: string;
  text?: string;
  content: IListWhiteSectionContent[];
  variant?: ListWhiteSectionVariant;
}

interface IListWhiteSectionContent {
  id: string,
  title: string,
  text?: string,
  list: string[],
}

export default IListWhiteSection;
