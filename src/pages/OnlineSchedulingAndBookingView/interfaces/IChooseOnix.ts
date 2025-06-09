import { ChooseOnixVariant } from '../../../constants/enums';

export interface IChooseOnix {
  title: string;
  data: IChooseOnixData[];
  variant?: ChooseOnixVariant;
}

export interface IChooseOnixData {
  id: string;
  title: string;
  desc: string;
}
