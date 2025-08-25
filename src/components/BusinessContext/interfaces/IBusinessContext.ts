import IBusinessContextTemplate from 'components/BusinessContextTemplate/interfaces/IBusinessContextTemplate';
import IBusinessContextContent from './IBusinessContextContent';

type IBusinessContext = Omit<IBusinessContextTemplate, 'children'> & IBusinessContextContent & {
  classes?: IBusinessContextContent['classes'] & IBusinessContextTemplate['classes'];
  isJakarta? : boolean;
};

export default IBusinessContext;
