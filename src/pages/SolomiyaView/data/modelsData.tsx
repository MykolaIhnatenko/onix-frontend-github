import Icon from '../../../assets/icon';
import { IModelsSectionData } from '../../../components/ModelsSection/interfaces/IModelsSection';

import IosModelBg1 from '@/images/iosPage/img_model_bg1.webp';
import IosModelBg2 from '@/images/iosPage/img_model_bg2.webp';
import IosModelBgMobile1 from '@/images/iosPage/img_model_bg_mobile1.webp';
import IosModelBgMobile2 from '@/images/iosPage/img_model_bg_mobile2.webp';
import IosModelBgTablet1 from '@/images/iosPage/img_model_bg_tablet1.webp';
import IosModelBgTablet2 from '@/images/iosPage/img_model_bg_tablet2.webp';

const modelsData: IModelsSectionData[] = [
  {
    id: 1,
    icon: <Icon.IconStructuredPlan />,
    title: 'Structured plan',
    text: 'A structured plan (a course) with a variety of exercises and activities to choose from',
    bg: IosModelBg1,
    bgTablet: IosModelBgTablet1,
    bgMobile: IosModelBgMobile1,
  },
  {
    id: 2,
    icon: <Icon.IconEducate />,
    title: 'Information to educate',
    text: 'Information to educate users about common mental health issues, why '
    + 'they occur, and how to address them effectively',
    bg: IosModelBg2,
    bgTablet: IosModelBgTablet2,
    bgMobile: IosModelBgMobile2,
  },
];

export default modelsData;
