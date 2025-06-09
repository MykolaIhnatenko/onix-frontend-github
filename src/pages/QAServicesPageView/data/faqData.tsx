import ContentText from '../../../components/ContentText/ContentText';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import { textListOl, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const styles = 'relative top-[-7px] screen-md:top-0';
const listStyle = 'list-disc mb-[15px]';

const faqData: IAccordionData[] = [
  {
    id: 101,
    title: 'What is the difference between QA and Testing?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles} !opacity-[1]`}>
          Quality Assurance (QA) is a process-oriented approach to ensuring the quality of a product, while Testing
          focuses on verifying that a product meets the specified requirements. QA involves activities such as
          continuously testing and evaluating the code and design of an application, as well as ensuring that
          best practices are followed throughout its development life cycle. On the other hand, testing involves
          validating that a specific piece of software meets predetermined criteria.
        </ContentText>
      </div>
    ),
  },
  {
    id: 202,
    title: 'How QA testing services can help my business?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles} !opacity-[1]`}>
          Quality Assurance (QA) testing services can help your business by providing an organized
          and structured approach to software development.This involves validating that the code and
          design of an application meet certain standards and ensuring that best practices are followed
          throughout its development life cycle. QA testing ensures the quality of the product and helps
          to identify any potential issues before a product is released, thus helping to reduce costs due
          to delays or customer dissatisfaction.
        </ContentText>
      </div>
    ),
  },
  {
    id: 303,
    title: 'What are the types of tests your team performs?',
    content: (
      <div>
        <ContentText tag="div" className={`${textStyle} ${styles} !opacity-[1]`}>
          <p>Our team performs various tests, including:</p>
          <ul className={textListOl}>
            <li className={listStyle}>
              <p>
                Integration Testing checks for errors when integrating two or more software components.
              </p>
            </li>
            <li className={listStyle}>
              <p>
                System Testing verifies the behavior and performance of the overall system.
              </p>
            </li>
            <li className={listStyle}>
              <p>
                User Acceptance Testing validates that a product meets the needs and specifications set by the customer.
              </p>
            </li>
            <li className={listStyle}>
              <p>
                Performance Testing verifies an application&apos;s speed, scalability, and reliability.
              </p>
            </li>
            <li className={listStyle}>
              <p>
                And many more.
              </p>
            </li>
          </ul>
        </ContentText>
      </div>
    ),
  },
  {
    id: 404,
    title: 'How many testers do I need for my project?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles} !opacity-[1]`}>
          The number of testers you need for your project depends on the size, complexity, and scope
          of the project. Generally speaking, having at least one tester per system component or
          module in your application is advisable. Additionally, the number of testers should be
          increased if multiple versions of the application need to be tested.
        </ContentText>
      </div>
    ),
  },
];

export default faqData;
