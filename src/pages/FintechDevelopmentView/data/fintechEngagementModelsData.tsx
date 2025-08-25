import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import IAndroidAppEngagementModels from '../../AndroidApplicationPageView/interfaces/IAndroidAppEngagementModels';
import { itemTextContainerClasses, itemTextTopClasses, itemTitleClasses } from 'pages/AndroidApplicationPageView/components/AndroidAppEngagementModels';
import MainTitleWithoutSize from 'components/MainTitleWithoutSize/MainTitleWithoutSize';

import Staff from '@/images/fintech/img_Staff.webp';
import StaffTablet from '@/images/fintech/img_StaffTablet.webp';
import StaffMobile from '@/images/fintech/img_StaffMobile.webp';
import DedicatedTeamMob from '@/images/fintech/img_DedicatedTeamMob.webp';
import DedicatedTeamTablet from '@/images/fintech/img_DedicatedTeamTablet.webp';
import DedicatedTeamFintech from '@/images/fintech/img_DedicatedTeam.webp';

const fintechEngagementModelsData: IAndroidAppEngagementModels = {
  pageTitle: (
    <div className="flex flex-col">
      <p className={`text-[20px] font-normal leading-[28px] mb-[20px] screen-md:text-[14px]
        screen-md:leading-[16px] font-ibmPlexMono`}
      >
        [ Our engagement models ]
      </p>
      <MainTitle>
        Choose a model that best suits you
      </MainTitle>
    </div>

  ),
  firstItemTitle: (
    <MainTitleWithoutSize className={itemTitleClasses} tag="h3">
      <span style={{ marginRight: 20 }}>
        01
      </span>
      Dedicated team
    </MainTitleWithoutSize>
  ),
  firstItemText: (
    <div className={itemTextContainerClasses}>
      <ContentText tag="p" className={`${itemTextTopClasses} screen-lg:!text-[16px]/[24px]`}>
        Hire an allocated group of remote employees who work exclusively on your project.
      </ContentText>
      <ContentText tag="p" marginAbsent className="screen-lg:!text-[16px]/[24px]">
        You can fully rely on experts to fully manage your project. We form a dedicated team of experts
        hand‑picked specifically for your business goals and requirements.
      </ContentText>
    </div>
  ),
  firstItemImg: DedicatedTeamFintech,
  firstItemImgTablet: DedicatedTeamTablet,
  firstItemImgMobile: DedicatedTeamMob,
  secondItemTitle: (
    <MainTitleWithoutSize className={itemTitleClasses} tag="h3">
      <span style={{ marginRight: 20 }}>
        02
      </span>
      Staff augmentation
    </MainTitleWithoutSize>
  ),
  secondItemText: (
    <div className={itemTextContainerClasses}>
      <ContentText tag="p" className={`${itemTextTopClasses} screen-lg:!text-[16px]/[24px]`}>
        If you need the expertise of one or several professionals,
        Onix will assign an overseas team with the required set of skills.
      </ContentText>
      <ContentText tag="p" marginAbsent className="screen-lg:!text-[16px]/[24px]">
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
