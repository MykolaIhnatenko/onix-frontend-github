import ContentText from 'components/ContentText/ContentText';

const businessContextBlockDataThirt = {
  upTitle: '[ Сhallenges and solutions ]',
  title: (
    <>
      The scheduling algorithm that calculates
      the&nbsp;doctors’ daily routes using multiple parameters presented the main challenge
      for&nbsp;the team.
    </>
  ),
  subTitle: 'The admin side of the application was developed quickly using templates, '
  + 'which also helped to reduce the initial cost of the demo:',
  content: (
    <ContentText tag="ul" marginAbsent>
      <li className="flex">
        {' '}
        <span className="mr-[10px]">﹂</span>
        {' '}
        <p>
          User roles and permissions (Super Admin, Admin, Doctor)
        </p>
      </li>
      <li className="flex pt-[5px]">
        {' '}
        <span className="mr-[10px]">﹂</span>
        {' '}
        <p>
          Admin panel with a simple interface: adding users, patients, and doctor-patient relations
        </p>
      </li>
      <li className="flex pt-[5px]">
        {' '}
        <span className="mr-[10px]">﹂</span>
        {' '}
        <p>
          PWA: doctor’s login, Google Map integration, daily route page, ‘Start route’
        </p>
      </li>
    </ContentText>
  ),
  subText: 'New features were gradually included in several releases of the product so '
  + 'that the end-users could test it as it evolved.',
};

export default businessContextBlockDataThirt;
