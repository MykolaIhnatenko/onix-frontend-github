import IBusinessContextTemplate from 'components/BusinessContextTemplate/interfaces/IBusinessContextTemplate';
import { IBorderedColumn, ITwoBorderedColumnsAnim } from 'components/TwoBorderedColumnsAnim/interfaces/ITwoBorderedColumnsAnim';

type IBusinessContextWithTable = Omit<IBusinessContextTemplate, 'children'> & {
  content: IBorderedColumn[];
  withoutAnimateTable?: boolean;
  classes?: {
    contentContainer?: string,
    leftContent?: string,
    rightContent?: string,
  } & IBusinessContextTemplate['classes'] & ITwoBorderedColumnsAnim['classes'];
} & ({
  leftContent: string;
  rightContent: string;
} | {
  leftContent?: never;
  rightContent?: never;
});

export default IBusinessContextWithTable;
