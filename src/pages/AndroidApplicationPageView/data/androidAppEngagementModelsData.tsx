import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import IAndroidAppEngagementModels from '../interfaces/IAndroidAppEngagementModels';
import AndroidAppEngagementModelsTablet1 from '@/images/androidApplication/engagementModels/img_androidAppEngagementModelsTablet1.webp';
import AndroidAppEngagementModelsTablet2 from '@/images/androidApplication/engagementModels/img_androidAppEngagementModelsTablet2.webp';
import AndroidAppEngagementModels1 from '@/images/androidApplication/engagementModels/img_androidAppEngagementModels1.webp';
import AndroidAppEngagementModels2 from '@/images/androidApplication/engagementModels/img_androidAppEngagementModels2.webp';

import styles from '../sass/androidAppEngagementModels.module.scss';

const androidAppEngagementModelsData: IAndroidAppEngagementModels = {
  pageTitle: (
    <MainTitle className={styles.pageTitle}>
      Choose a model that best suits you
    </MainTitle>
  ),
  firstItemTitle: (
    <MainTitle tag="h3" className={styles.itemTitle}>
      <span>01</span>
      Staff Augmentation
    </MainTitle>
  ),
  firstItemText: (
    <div className={styles.itemTextContainer}>
      <ContentText tag="p" className={styles.itemTextTop}>
        If you need the expertise of one or several professionals,
        Onix will assign an overseas team with the required set of skills.
      </ContentText>
      <ContentText tag="p" className={styles.itemTextBottom}>
        Our experts proficiently support your projects on an ongoing basis together with your already existing team.
      </ContentText>
    </div>
  ),
  firstItemImg: AndroidAppEngagementModels1,
  firstItemImgTablet: AndroidAppEngagementModelsTablet1,
  firstItemImgMobile: AndroidAppEngagementModelsTablet1,
  secondItemTitle: (
    <MainTitle tag="h3" className={styles.itemTitle}>
      <span>02</span>
      Dedicated Team
    </MainTitle>
  ),
  secondItemText: (
    <div className={styles.itemTextContainer}>
      <ContentText tag="p" className={styles.itemTextTop}>
        Hire an allocated group of remote employees who work exclusively on your project.
        You can fully rely on experts to fully manage your project.
      </ContentText>
      <ContentText tag="p" className={styles.itemTextBottom}>
        We form a dedicated team of experts hand‑picked specifically for your business goals and requirements.
      </ContentText>
    </div>
  ),
  secondItemImg: AndroidAppEngagementModels2,
  secondItemImgTablet: AndroidAppEngagementModelsTablet2,
  secondItemImgMobile: AndroidAppEngagementModelsTablet2,
};

export default androidAppEngagementModelsData;
