import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import IAndroidAppEngagementModels from '../interfaces/IAndroidAppEngagementModels';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';
import { itemTextContainerClasses, itemTextTopClasses, itemTitleClasses } from 'pages/AndroidApplicationPageView/components/AndroidAppEngagementModels';

import AndroidAppEngagementModelsTablet1 from '@/images/androidApplication/engagementModels/img_androidAppEngagementModelsTablet1.webp';
import AndroidAppEngagementModelsTablet2 from '@/images/androidApplication/engagementModels/img_androidAppEngagementModelsTablet2.webp';
import AndroidAppEngagementModels1 from '@/images/androidApplication/engagementModels/img_androidAppEngagementModels1.webp';
import AndroidAppEngagementModels2 from '@/images/androidApplication/engagementModels/img_androidAppEngagementModels2.webp';

const androidAppEngagementModelsData: IAndroidAppEngagementModels = {
  pageTitle: (
    <MainTitle>
      Choose a model that best suits you
    </MainTitle>
  ),
  firstItemTitle: (
    <MainTitleWithoutSize
      tag="h3"
      className={itemTitleClasses}
    >
      <span className="mr-[9px]">01</span>
      Staff Augmentation
    </MainTitleWithoutSize>
  ),
  firstItemText: (
    <div className={itemTextContainerClasses}>
      <ContentText tag="p" className={itemTextTopClasses}>
        If you need the expertise of one or several professionals,
        Onix will assign an overseas team with the required set of skills.
      </ContentText>
      <ContentText tag="p" marginAbsent>
        Our experts proficiently support your projects on an ongoing basis together with your already existing team.
      </ContentText>
    </div>
  ),
  firstItemImg: AndroidAppEngagementModels1,
  firstItemImgTablet: AndroidAppEngagementModelsTablet1,
  firstItemImgMobile: AndroidAppEngagementModelsTablet1,
  secondItemTitle: (
    <MainTitleWithoutSize
      tag="h3"
      className={itemTitleClasses}
    >
      <span className="mr-[9px]">02</span>
      Dedicated Team
    </MainTitleWithoutSize>
  ),
  secondItemText: (
    <div className={itemTextContainerClasses}>
      <ContentText tag="p" className={itemTextTopClasses}>
        Hire an allocated group of remote employees who work exclusively on your project.
        You can fully rely on experts to fully manage your project.
      </ContentText>
      <ContentText tag="p" marginAbsent>
        We form a dedicated team of experts hand‑picked specifically for your business goals and requirements.
      </ContentText>
    </div>
  ),
  secondItemImg: AndroidAppEngagementModels2,
  secondItemImgTablet: AndroidAppEngagementModelsTablet2,
  secondItemImgMobile: AndroidAppEngagementModelsTablet2,
};

export default androidAppEngagementModelsData;
