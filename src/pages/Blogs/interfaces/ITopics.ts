import { FormikProps } from 'formik';

import { ISubscribeFormValues } from '../../../store/app/subscribeForm/interfaces/ISubscribeForm';
import { ICategoriesList } from '../../../interfaces/ICategories';

export interface ITopicItem {
  id: number;
  title: string;
  isChecked: boolean;
}
export default interface ITopics {
  formik: FormikProps<ISubscribeFormValues>;
  categories?:ICategoriesList;
  values: string[];
}

export interface ITopic {
  title: string;
  onChangeHandler: (value: string) => void;
  id: number;
  topicItems: ITopicItem[] | [];
  setTopicItems: (items: ITopicItem[]) => void;
  isChecked?: boolean;
}
