import ContentText from '../../../components/ContentText/ContentText';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import { textListUl, textListUlLi, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const styles = 'relative top-[-7px] screen-md:top-0';

const salesforceFaqData: IAccordionData[] = [
  {
    id: 1,
    title: 'How do I assess an offshore Salesforce development service?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          When evaluating offshore Salesforce development companies, be sure to ask about their experience
          with similar projects. It&apos;s also important to make sure they understand your specific needs and
          requirements. And be sure to get a sense of the company&apos;s customer service and support offerings.
          Finally, be sure to ask about the company&apos;s NDA policy. This is important because it will protect
          your confidential information. If you keep these factors in mind, you&apos;ll be well on your way to
          finding the right offshore Salesforce development services company for your project.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How much does the offshore Salesforce development services service cost?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          Salesforce development services can cost anywhere from $50 to $200 per hour, depending on the company
          you choose and the scope of your project. If you&apos;re looking for a custom solution, you can contact
          our specialists to get a detailed quote on your Salesforce project.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What Are The Benefits Of Salesforce development?',
    content: (
      <div>
        <ContentText className={`${textStyle} ${styles}`} tag="div">
          <p>
            Salesforce development provides a number of benefits for businesses. It can help to automate processes,
            improve customer relations, and increase sales. In addition, Salesforce development can help to customize
            applications to better meet the specific needs of a business.
          </p>
          <ul className={textListUl}>
            <li className={textListUlLi}>
              <p>
                Automation of processes: Salesforce development can help to automate processes within a business.
                This can include tasks such as lead generation, customer contact management, and product updates.
                Automation of processes can save a business time and money by reducing the need for manual input.
              </p>
            </li>
            <li className={textListUlLi}>
              <p>
                Improved customer relations: Salesforce development can help to improve customer relations by
                providing tools for tracking customer interactions and managing customer data. This can help
                businesses to provide better customer service and to build stronger relationships with their customers.
              </p>
            </li>
            <li className={textListUlLi}>
              <p>
                Increased sales: Salesforce development can help to increase sales by providing tools for tracking
                leads and opportunities, and for managing sales processes. This can help businesses to close more
                deals and to increase their overall revenue.
              </p>
            </li>
            <li className={textListUlLi}>
              <p>
                Customization: Salesforce development can help to customize applications to better meet the specific
                needs of a business. This can include adding new features, integrating with other systems, and
                changing the look and feel of an application. Customization can help businesses to get the most
                out of their Salesforce investment by making sure that the applications they use are
                well-suited to their needs.
              </p>
            </li>
          </ul>
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'What is Salesforce Development?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          Salesforce Development is the process of customizing Salesforce to fit the specific needs of a business.
          This can include anything from creating custom objects and fields to writing Apex code to automate
          business processes. Salesforce Development can be a valuable tool for businesses that want to get
          the most out of their Salesforce investment. By customizing Salesforce to meet their specific needs,
          businesses can automate time-consuming tasks, improve data accuracy, and make their sales teams
          more efficient.
        </ContentText>
      </div>
    ),
  },
];

export default salesforceFaqData;
