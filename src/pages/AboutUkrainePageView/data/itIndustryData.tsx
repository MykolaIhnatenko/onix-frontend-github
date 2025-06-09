import ContentText from '../../../components/ContentText/ContentText';
import Icon from '../../../assets/icon';

import styles from '../sass/itIndustry.module.scss';

const itIndustryData = [
  {
    id: 1,
    icon: <Icon.IconITIndustry1 className={styles.icon} />,
    text: (
      <ContentText tag="p" className={styles.text}>
        Apple, Google, Huawei, IBM, Microsoft, Oracle, Samsung, and Siemens moved some of
        their development and hired professionals in Ukraine.
      </ContentText>
    ),
  },
  {
    id: 2,
    icon: <Icon.IconITIndustry2 className={styles.icon} />,
    text: (
      <ContentText tag="p" className={styles.text}>
        Global corporations like ABBYY, Amazon, Ericsson, Google, Huawei,
        Magento, Samsung, and Siemens opened their R&D centers here.
      </ContentText>
    ),
  },
  {
    id: 3,
    icon: <Icon.IconITIndustry3 className={styles.icon} />,
    text: (
      <ContentText tag="p" className={styles.text}>
        GitLab and Grammarly are two Ukrainian unicorns worth over $1 billion.
      </ContentText>
    ),
  },
];

export default itIndustryData;
