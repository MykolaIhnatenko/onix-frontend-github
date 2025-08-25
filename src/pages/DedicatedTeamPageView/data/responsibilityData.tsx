import Icon from '../../../assets/icon';

import DedicatedTeamResponsibility1 from '@/images/dedicatedTeamPage/img_responsibility1@2x.webp';
import DedicatedTeamResponsibility2 from '@/images/dedicatedTeamPage/img_responsibility2@2x.webp';
import DedicatedTeamResponsibilityTablet1 from '@/images/dedicatedTeamPage/img_responsibility1_tablet@2x.webp';
import DedicatedTeamResponsibilityTablet2 from '@/images/dedicatedTeamPage/img_responsibility2_tablet@2x.webp';
import DedicatedTeamResponsibilityMobile2 from '@/images/dedicatedTeamPage/img_responsibility2_mobile@2x.webp';
import styles from '../../../components/TransparentCard/sass/transparentCard.module.scss';

const responsibilityData = [
  {
    id: 1,
    icon: <Icon.IconModels1 className={styles.icon} />,
    title: 'Onix',
    text: (
      <ul>
        <li><p>﹂Plan resources and form a dedicated team</p></li>
        <li><p>﹂Provide standard office and IT infrastructure</p></li>
        <li><p>﹂Ensure effective and transparent development process</p></li>
        <li><p>﹂Provide training programs for employees</p></li>
        <li><p>﹂Assume control of all administrative activities such as payroll, bookkeeping, etc.</p></li>
      </ul>
    ),
    bg: DedicatedTeamResponsibility1,
    bgTablet: DedicatedTeamResponsibilityTablet1,
    bgMobile: DedicatedTeamResponsibilityMobile2,
  },
  {
    id: 2,
    icon: <Icon.IconManWithPhone className={styles.icon} />,
    title: 'Our Client',
    text: (
      <ul>
        <li><p>﹂Define requirements</p></li>
        <li><p>﹂Share project knowledge, goals, and roadmaps</p></li>
        <li><p>﹂Provide timely feedback and review</p></li>
        <li><p>﹂Enjoy the results</p></li>
      </ul>
    ),
    bg: DedicatedTeamResponsibility2,
    bgTablet: DedicatedTeamResponsibilityTablet2,
    bgMobile: DedicatedTeamResponsibilityMobile2,
  },
];

export default responsibilityData;
