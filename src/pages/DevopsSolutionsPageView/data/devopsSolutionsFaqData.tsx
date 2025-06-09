import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ContentText from '../../../components/ContentText/ContentText';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const styles = 'relative top-[-7px] screen-md:top-0';

const devopsSolutionsFaqData: IAccordionData[] = [
  {
    id: 1,
    title: 'How can DevOps help my business?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          DevOps can help your business by improving software development and delivery speed, reliability, and
          quality. By using automation, continuous integration, and continuous deployment techniques in your
          development workflow, you can reduce costs significantly while reducing the time required to deliver
          software updates and new features. Additionally, DevOps helps with communication between IT and
          development teams, allowing for more collaboration when developing software, which leads to
          higher-quality products.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How can I start my DevOps transformation journey?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          Starting your DevOps transformation journey can be done in a few different ways. The first step is
          understanding your current infrastructure and identifying what needs improvement. Once you understand
          the current state, you can look at the appropriate tools and processes needed for the transition.
          This should include selecting the right software development lifecycle model, such as Agile or Lean,
          for your organization. Additionally, it’s essential to establish a culture of collaboration between
          IT and development teams so that everyone understands their roles and responsibilities. Finally,
          key performance indicators should be established to measure success against goals over time.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What are the benefits of DevOps implementation?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          Implementing DevOps can provide many benefits for your business. First, DevOps helps to accelerate the
          software delivery process by automating manual tasks and providing continuous feedback loops between
          development, operations, and testing teams. This allows developers to respond quickly to customer
          feedback and produce new features in a shorter amount of time. In addition, DevOps also encourages
          collaboration between IT and development teams which leads to higher-quality software products.
          Finally, DevOps allows businesses to save costs while gaining better visibility into their infrastructure.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Do you provide cloud-based software development and deployment?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          Yes, Onix is a reliable DevOps services provider that offers cloud-based software development and
          deployment services. We specialize in cloud computing technologies such as Amazon Web Services,
          Azure, and Google Cloud Platform and can assist your business in setting up a reliable cloud
          infrastructure for application development and deployment. Our team of experienced DevOps
          professionals can help you achieve agility, scalability, reliability, and cost-effectiveness
          for your applications.
        </ContentText>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What affects the project costs?',
    content: (
      <div>
        <ContentText tag="p" className={`${textStyle} ${styles}`}>
          The cost of DevOps depends on various factors, such as the size and complexity of the project,
          the complexity of the deployment process, and how much automation is involved. Additionally,
          it may also be affected by how much integration testing is done and the technical support
          services required. Choosing suitable tools and platforms for your DevOps infrastructure can also affect costs.
        </ContentText>
      </div>
    ),
  },
];

export default devopsSolutionsFaqData;
