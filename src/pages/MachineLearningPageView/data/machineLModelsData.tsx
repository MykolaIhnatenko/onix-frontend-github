import { IModelsSectionData } from '../../../components/ModelsSection/interfaces/IModelsSection';
import Icon from '../../../assets/icon';

import styles from '../../../components/TransparentCard/sass/transparentCard.module.scss';

const machineLModelsData: IModelsSectionData[] = [
  {
    id: 1,
    icon: <Icon.IconMachineModels1 className={styles.icon} />,
    title: 'Azure machine learning',
    text: 'Our team helps leverage the potential of Azure Machine Learning, a cloud-based '
      + 'predictive analytics service, to develop data-driven applications that '
      + 'can predict and change future outcomes.',
  },
  {
    id: 2,
    icon: <Icon.IconMachineModels2 className={styles.icon} />,
    title: 'AWS machine learning',
    text: 'We assist in controlling the power of wizards and visualization tools on Amazon '
      + 'Infrastructure. This platform allows us to develop, train and deploy machine '
      + 'learning models quickly.',
  },
  {
    id: 3,
    icon: <Icon.IconMachineModels3 className={styles.icon} />,
    title: 'Google machine learning',
    text: 'We help enterprises set up their system to benefit from Google Machine Learning '
      + 'algorithms. This enables efficient analysis and prediction of results.',
  },
];

export default machineLModelsData;
