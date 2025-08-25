import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import IAndroidAppEngagementModels from '../../AndroidApplicationPageView/interfaces/IAndroidAppEngagementModels';
import { itemTextContainerClasses, itemTextTopClasses, itemTitleClasses } from 'pages/AndroidApplicationPageView/components/AndroidAppEngagementModels';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

import WebDesignAppEngagementModelsMobile1 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModelsMobile1@2x.webp';
import WebDesignAppEngagementModelsMobile2 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModelsMobile2@2x.webp';
import WebDesignAppEngagementModelsTablet1 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModelsTablet1@2x.webp';
import WebDesignAppEngagementModelsTablet2 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModelsTablet2@2x.webp';
import WebDesignAppEngagementModels1 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModels1@2x.webp';
import WebDesignAppEngagementModels2 from '@/images/webDesignPage/appEngagementModels/img_appEngagementModels2@2x.webp';

const itemTextTopMod = 'screen-lg:text-[16px] screen-lg:leading-[24px]';

const webDesignEngagementModelsData: IAndroidAppEngagementModels = {
  pageTitle: (
    <MainTitle className="max-w-[784px] screen-lg:max-w-[547px]">
      How to outsource web development with Onix
    </MainTitle>
  ),
  pageText: (
    <div className={`px-0 pt-[60px] pb-[80px] screen-md:pt-[40px] screen-md:pb-[40px]
    min-lg:max-w-[1300px] screen-xxxl:max-w-[1480px]`}
    >
      <ContentText
        tag="p"
        className={`max-w-[550px] !m-0 screen-lg:pb-[30px] max-1032:pb-[20px] min-lg:max-w-[630px]
          screen-xxxl:max-w-[710px]`}
      >
        By outsourcing to Onix, you partner with a company that employs highly-skilled web developers and designers.
        Our experts are always available at all times when you need their assistance.
      </ContentText>
      <ContentText
        tag="p"
        className={`max-w-[550px] !m-[0px_0px_0px_auto] screen-lg:!m-0 min-lg:pt-[40px] min-lg:max-w-[630px]
          screen-xxxl:max-w-[710px]`}
      >
        Here you can establish your own team of developers for your project to work with you either on a monthly
        basis (remote staff) or with a dedicated team.
      </ContentText>
    </div>
  ),
  firstItemTitle: (
    <MainTitleWithoutSize tag="h3" className={itemTitleClasses}>
      Dedicated team
    </MainTitleWithoutSize>
  ),
  firstItemText: (
    <div className={itemTextContainerClasses}>
      <ContentText
        tag="p"
        className={`${itemTextTopClasses} ${itemTextTopMod}
        screen-lg:!mb-[30px]`}
      >
        When you want to hire a team on a project basis, we assign a project manager and one or several web
        developers, and potentially other team members to help you clarify your goals and technical aspects.
        We outsource a developer team, and we begin work according to a set deadline until the project gets launched.
      </ContentText>
      <ContentText tag="p" marginAbsent className={itemTextTopMod}>
        This approach is particularly effective if you have a large project in mind that requires various skills
        and expertise and you have no in-house team or team members available to do this.
      </ContentText>
    </div>
  ),
  firstItemImg: WebDesignAppEngagementModels1,
  firstItemImgTablet: WebDesignAppEngagementModelsTablet1,
  firstItemImgMobile: WebDesignAppEngagementModelsMobile1,
  secondItemTitle: (
    <MainTitleWithoutSize tag="h3" className={itemTitleClasses}>
      Remote team model
    </MainTitleWithoutSize>
  ),
  secondItemText: (
    <div className={itemTextContainerClasses}>
      <ContentText
        tag="p"
        className={`${itemTextTopClasses} ${itemTextTopMod}
        screen-lg:!mb-[30px]`}
      >
        In case you need the expertise of one of our developers or several professionals, Onix will assign
        an overseas team with the required set of skills and work with you on a monthly basis. You will be
        able to stay directly in touch with your team either via email or phone calls and track their progress daily.
      </ContentText>
      <ContentText tag="p" marginAbsent className={itemTextTopMod}>
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
