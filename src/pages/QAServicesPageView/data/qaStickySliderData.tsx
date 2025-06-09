import ContentText from '../../../components/ContentText/ContentText';
import QAExpertise1 from '@/images/qaServicesPage/expertiese/img_qa_expertise_1.webp';
import QAExpertise2 from '@/images/qaServicesPage/expertiese/img_qa_expertise_2.webp';
import QAExpertise3 from '@/images/qaServicesPage/expertiese/img_qa_expertise_3.webp';
import QAExpertise4 from '@/images/qaServicesPage/expertiese/img_qa_expertise_4.webp';
import QAExpertise5 from '@/images/qaServicesPage/expertiese/img_qa_expertise_5.webp';
import { IStickySliderData } from 'components/StickySlider/interfaces/IStickySliderItem';

const textStyles = '!m-0 pb-[20px] screen-md:pb-[15px]';

const StickySliderData: IStickySliderData[] = [
  {
    id: 1,
    title: 'Test Planning & Control Phase',
    text: (
      <>
        <ContentText tag="p" className={textStyles}>
          ﹂ Determining what and how to test
        </ContentText>
        <ContentText tag="p" className={textStyles}>
          ﹂ Identifying the scope and who or which resource will conduct the testing
        </ContentText>
        <ContentText tag="p" className={`${textStyles} last:pb-0`}>
          ﹂ Creating a Test Plan
        </ContentText>
      </>
    ),
    image: QAExpertise1,
  },
  {
    id: 2,
    title: 'Test Analysis and Design',
    text: (
      <>
        <ContentText tag="p" className={textStyles}>
          ﹂ Coming up with Test Conditions, Test Cases, and Test Steps
        </ContentText>
        <ContentText tag="p" className={textStyles}>
          ﹂ Designing and prioritizing test cases
        </ContentText>
        <ContentText tag="p" className={textStyles}>
          ﹂ Designing the Test Environment
        </ContentText>
        <ContentText tag="p" className={`${textStyles} last:pb-0`}>
          ﹂ Determining the Test data
        </ContentText>
      </>
    ),
    image: QAExpertise2,
  },
  {
    id: 3,
    title: 'Test Implementation and Execution',
    text: (
      <>
        <ContentText tag="p" className={textStyles}>
          ﹂ Test execution
        </ContentText>
        <ContentText tag="p" className={`${textStyles} last:pb-0`}>
          ﹂ Defects follow the Defect Life Cycle (a process that all defects go through, from
          discovering the defect to its eventual closure. The typical lifecycle of a defect follows:
          Discovery, Analysis, Fixing, Testing, and Rejection/Closure.)
        </ContentText>
      </>
    ),
    image: QAExpertise3,
  },
  {
    id: 4,
    title: 'Evaluating Exit Criteria and Reporting',
    text: (
      <>
        <ContentText tag="p" className={textStyles}>
          ﹂ Assessing whether all planned tests have been conducted, and the test cycle meets the
          predefined exit criteria.
        </ContentText>
        <ContentText tag="p" className={`${textStyles} last:pb-0`}>
          ﹂ Creating the Test Summary report
        </ContentText>
      </>
    ),
    image: QAExpertise4,
  },
  {
    id: 5,
    title: 'Test Completion',
    text: (
      <>
        <ContentText tag="p" className={textStyles}>
          ﹂ Testing is officially complete
        </ContentText>
        <ContentText tag="p" className={`${textStyles} last:pb-0`}>
          ﹂ Making sure documentation is up to date, archiving the test environment, preparing
          lists of defects and metrics, and lessons learned
        </ContentText>
      </>
    ),
    image: QAExpertise5,
  },
];

export default StickySliderData;
