import Icon from '../../../assets/icon';
import { IModelsSectionData } from '../../../components/ModelsSection/interfaces/IModelsSection';

import IosModelBgMobile1 from '@/images/iosPage/img_model_bg_mobile1.webp';
import IosModelBgMobile2 from '@/images/iosPage/img_model_bg_mobile2.webp';
import IosModelBgTablet2 from '@/images/iosPage/img_model_bg_tablet2.webp';
import IosModelBgTablet1 from '@/images/iosPage/img_model_bg_tablet1.webp';
import IosModelBg2 from '@/images/iosPage/img_model_bg2.webp';
import IosModelBg1 from '@/images/iosPage/img_model_bg1.webp';

const modelsData: IModelsSectionData[] = [
  {
    id: 1,
    icon: <Icon.IconModels1 />,
    title: 'Dedicated team',
    text: 'Dedicated software development teams refer to hiring a fully dedicated set of developers assigned '
        + 'exclusively to your business initiatives for the long term. Dedicated teams ensure faster turnaround '
        + 'times and better communication between you and the development team.',
    bg: IosModelBg1,
    bgTablet: IosModelBgTablet1,
    bgMobile: IosModelBgMobile1,
  },
  {
    id: 2,
    icon: <Icon.IconModels2 />,
    title: 'Staff augmentation',
    text: 'With this option, clients can hire additional expert personnel for short-term projects or during '
        + 'peak periods of activity to supplement their internal teams. Dedicated Onix specialists will join '
        + 'existing teams to ensure deadlines and requirements are met while also providing expertise in '
        + 'specific areas.',
    bg: IosModelBg2,
    bgTablet: IosModelBgTablet2,
    bgMobile: IosModelBgMobile2,
  },
];

export default modelsData;
