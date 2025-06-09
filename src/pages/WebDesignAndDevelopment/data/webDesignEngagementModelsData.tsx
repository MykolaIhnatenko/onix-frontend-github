import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import IAndroidAppEngagementModels from '../../AndroidApplicationPageView/interfaces/IAndroidAppEngagementModels';
import WebDesignAppEngagementModelsMobile1 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModelsMobile1@2x.webp';
import WebDesignAppEngagementModelsMobile2 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModelsMobile2@2x.webp';
import WebDesignAppEngagementModelsTablet1 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModelsTablet1@2x.webp';
import WebDesignAppEngagementModelsTablet2 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModelsTablet2@2x.webp';
import WebDesignAppEngagementModels1 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModels1@2x.webp';
import WebDesignAppEngagementModels2 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModels2@2x.webp';

import styles from '../../AndroidApplicationPageView/sass/androidAppEngagementModels.module.scss';

const webDesignEngagementModelsData: IAndroidAppEngagementModels = {
  pageTitle: (
    <MainTitle className={styles.pageTitle}>
      How to outsource web development with Onix
    </MainTitle>
  ),
  pageText: (
    <div className={styles.pageTextContainer}>
      <ContentText tag="p" className={styles.pageText}>
        By outsourcing to Onix, you partner with a company that employs highly-skilled web developers and designers.
        Our experts are always available at all times when you need their assistance.
      </ContentText>
      <ContentText tag="p" className={styles.pageTextSecond}>
        Here you can establish your own team of developers for your project to work with you either on a monthly
        basis (remote staff) or with a dedicated team.
      </ContentText>
    </div>
  ),
  firstItemTitle: (
    <MainTitle tag="h3" className={styles.itemTitle}>
      Dedicated team
    </MainTitle>
  ),
  firstItemText: (
    <div className={styles.itemTextContainer}>
      <ContentText tag="p" className={styles.itemTextTop}>
        When you want to hire a team on a project basis, we assign a project manager and one or several web
        developers, and potentially other team members to help you clarify your goals and technical aspects.
        We outsource a developer team, and we begin work according to a set deadline until the project gets launched.
      </ContentText>
      <ContentText tag="p" className={styles.itemTextBottom}>
        This approach is particularly effective if you have a large project in mind that requires various skills
        and expertise and you have no in-house team or team members available to do this.
      </ContentText>
    </div>
  ),
  firstItemImg: WebDesignAppEngagementModels1,
  firstItemImgTablet: WebDesignAppEngagementModelsTablet1,
  firstItemImgMobile: WebDesignAppEngagementModelsMobile1,
  secondItemTitle: (
    <MainTitle tag="h3" className={styles.itemTitle}>
      Remote team model
    </MainTitle>
  ),
  secondItemText: (
    <div className={styles.itemTextContainer}>
      <ContentText tag="p" className={styles.itemTextTop}>
        In case you need the expertise of one of our developers or several professionals, Onix will assign
        an overseas team with the required set of skills and work with you on a monthly basis. You will be
        able to stay directly in touch with your team either via email or phone calls and track their progress daily.
      </ContentText>
      <ContentText tag="p" className={styles.itemTextBottom}>
        This approach works when you need web developers to proficiently support your projects on an ongoing
        basis together with your in-house team or other overseas team members.
      </ContentText>
    </div>
  ),
  secondItemImg: WebDesignAppEngagementModels2,
  secondItemImgTablet: WebDesignAppEngagementModelsTablet2,
  secondItemImgMobile: WebDesignAppEngagementModelsMobile2,
};

export default webDesignEngagementModelsData;
