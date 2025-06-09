import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import Staff from '@/images/fintech/img_Staff.webp';
import StaffTablet from '@/images/fintech/img_StaffTablet.webp';
import StaffMobile from '@/images/fintech/img_StaffMobile.webp';
import DedicatedTeamMob from '@/images/fintech/img_DedicatedTeamMob.webp';
import DedicatedTeamTablet from '@/images/fintech/img_DedicatedTeamTablet.webp';
import DedicatedTeamFintech from '@/images/fintech/img_DedicatedTeam.webp';
import IAndroidAppEngagementModels from '../../AndroidApplicationPageView/interfaces/IAndroidAppEngagementModels';

import styles from '../../AndroidApplicationPageView/sass/androidAppEngagementModels.module.scss';

const fintechEngagementModelsData: IAndroidAppEngagementModels = {
  pageTitle: (
    <div className={styles.pageTitleFintech}>
      <p className={styles.textSubTitle}>
        [ Our engagement models ]
      </p>
      <MainTitle>
        Choose a model that best suits you
      </MainTitle>
    </div>

  ),
  firstItemTitle: (
    <MainTitle className={`${styles.itemTitle} ${styles.fintechTitleDev}`} tag="h3">
      <span style={{ marginRight: 20 }}>
        01
      </span>
      Dedicated team
    </MainTitle>
  ),
  firstItemText: (
    <div className={styles.itemTextContainer}>
      <ContentText tag="p" className={`${styles.itemTextTop} ${styles.fintechContentDev}`}>
        Hire an allocated group of remote employees who work exclusively on your project.
      </ContentText>
      <ContentText tag="p" className={`${styles.itemTextBottom} ${styles.fintechContentDev}`}>
        You can fully rely on experts to fully manage your project. We form a dedicated team of experts
        hand‑picked specifically for your business goals and requirements.
      </ContentText>
    </div>
  ),
  firstItemImg: DedicatedTeamFintech,
  firstItemImgTablet: DedicatedTeamTablet,
  firstItemImgMobile: DedicatedTeamMob,
  secondItemTitle: (
    <MainTitle className={`${styles.itemTitle} ${styles.fintechTitleDev}`} tag="h3">
      <span style={{ marginRight: 20 }}>
        02
      </span>
      Staff augmentation
    </MainTitle>
  ),
  secondItemText: (
    <div className={styles.itemTextContainer}>
      <ContentText tag="p" className={`${styles.itemTextTop} ${styles.fintechContentDev}`}>
        If you need the expertise of one or several professionals,
        Onix will assign an overseas team with the required set of skills.
      </ContentText>
      <ContentText tag="p" className={`${styles.itemTextBottom} ${styles.fintechContentDev}`}>
        Our experts proficiently support your projects on an ongoing
        basis together with your already existing team.
      </ContentText>
    </div>
  ),
  secondItemImg: Staff,
  secondItemImgTablet: StaffTablet,
  secondItemImgMobile: StaffMobile,
};

export default fintechEngagementModelsData;
