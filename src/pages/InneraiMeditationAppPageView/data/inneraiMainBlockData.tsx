import ImageComponent from '../../../components/Image/Image';
import Logo from '@/images/inneraiMeditationAppPage/mainBlock/img_logo.webp';

import styles from '../../UsabilityTestingPageView/sass/usabilityTestingMainBlock.module.scss';

const inneraiMainBlockData = {
  icon: <ImageComponent src={Logo} alt="logo" sizes="100vh" className={styles.icon} />,
  title: 'InnerAI – meditation and mindfulness app',
  text: 'Sharing Onix’s experience in mobile meditation app development',
};

export default inneraiMainBlockData;
