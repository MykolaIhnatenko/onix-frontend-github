import ContentText from 'components/ContentText/ContentText';

const flexStyles = 'flex gap-[10px]';

const businessContextBlockDataThirt = {
  upTitle: '[ Results ]',
  title: 'The project met our client\'s expectations perfectly, providing a straightforward'
  + ' yet powerful solution to their core problem.',
  subTitle: 'Instead of incurring hefty monthly fees for third-party CRM services, the client made'
  + ' a one-time payment for a lean solution they will use for years, paying only for hosting and maintenance.',
  firstText: (
    <ContentText tag="p" marginAbsent>
      The CRM system built by Onix’s specialists provided many benefits:
      <br />
      <br />
      <span className={flexStyles}>
        <span>﹂</span>
        <span>The implementation and user onboarding were both easy</span>
      </span>
      <span className={flexStyles}>
        <span>﹂</span>
        <span>The system reduces the need for manual data entry and thus errors</span>
      </span>
      <span className={flexStyles}>
        <span>﹂</span>
        <span>The CRM speeds up lead processing and helps distribute the workload better</span>
      </span>
      <span className={flexStyles}>
        <span>﹂</span>
        <span>The software has increased the insurance agents’ productivity</span>
      </span>
    </ContentText>
  ),
  secondText: (
    <ContentText tag="p" marginAbsent>
      <span className={flexStyles}>
        <span>﹂</span>
        <span>
          A system that accurately reflects the company’s business process and fully
          meets the employees’ needs eliminates the need for experimenting with off-the-shelf
          solutions, which would be confusing, costly, and involve data migration
        </span>
      </span>
      <span className={flexStyles}>
        <span>﹂</span>
        <span>
          Should the company need to shift to an off-the-shelf solution, migrating data from
          their own CRM to the third-party service
        </span>
      </span>
    </ContentText>
  ),
  subText: 'Overall, the client is highly satisfied with the cost-effective, customized CRM solution.',
};

export default businessContextBlockDataThirt;
