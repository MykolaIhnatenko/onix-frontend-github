import { IAccordionHorizontalData } from 'components/AccordionHorizontal/interfaces/IAccordionHorizontal';

import QATestAutomation from '@/images/qaServicesPage/cooperate/img_qa_test_automation.webp';
import QAConsultiong from '@/images/qaServicesPage/cooperate/img_qa_consulting.webp';
import QAManualQuality from '@/images/qaServicesPage/cooperate/img_qa_manual.webp';

const qaCooperateList: IAccordionHorizontalData[] = [
  {
    id: 1,
    title: 'Manual quality assurance',
    content: [
      `Our manual testing services help to uncover
      defects, guarantee the quality of the released product according to the requirements and
      acceptance criteria, and provide test reports and feedback on the product&apos;s status.`,
      `We analyze requirements, select the necessary approaches and types of testing, prepare test cases,
      conduct testing, and provide the team with the test results. Additionally (especially for large projects):
      we plan tests, develop strategies for improving quality, improve development processes,
      and assess risks.`,
    ],
    image: QAManualQuality,
  },
  {
    id: 2,
    title: 'Test automation services',
    content: `Our automation services increase efficiency, save valuable time and resources, and boost the team's 
    productivity. We can simulate the various scenarios of software usage and check its performance on multiple 
    platforms simultaneously. Automating manual and repetitive tests helps minimize costs associated 
    with software testing services.`,
    image: QATestAutomation,
  },
  {
    id: 3,
    title: 'QA consulting services',
    content: `Our team is well-equipped with the necessary skills and resources to provide thorough audit and consulting
     services for all your projects. We specialize in software testing and risk management, providing expertise in 
     reviewing testing techniques and implementing industry guidelines and standards. Our software testing and QA
      services involve a thorough examination and adherence to the highest quality requirements.`,
    image: QAConsultiong,
  },
];

export default qaCooperateList;
