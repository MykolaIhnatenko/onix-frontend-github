import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ContentText from '../../../components/ContentText/ContentText';
import { textListSpan, textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const faqData: IAccordionData[] = [
  {
    id: 1,
    title: 'How to manage your offshore software development team? ',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          When it comes to software development, working with an offshore team can be a great way to get
          the job done quickly and efficiently. However, there are a few things you need to keep in mind
          to manage your team effectively. First, it’s important to establish clear expectations and
          communication channels from the outset. It will help everyone stay on the same page and avoid
          any misunderstandings. Second, you need to be flexible and adaptable; things may inevitably
          change during the course of a project, and you need to be able to roll with the punches.
          Finally, don’t forget to build in some extra time for testing and quality assurance; when working
          with an offshore team, it’s always better to err on the side of caution. Following these tips, you
          can set your project up for success from the beginning.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'What technologies does your offshore development team specialize in? ',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The Onix development team specializes in cutting-edge technologies, from cloud computing and
          big data to artificial intelligence and machine learning. We deeply understand the latest trends
          in the tech industry, and our developers are constantly pushing the boundaries of what is possible.
          In addition to our technical expertise, we also place a strong emphasis on customer service and
          collaboration. We work closely with our clients to ensure we meet their needs every step of the way,
          and we are always available to answer any questions or address any concerns. At Onix, we pride
          ourselves on being the go-to choice for all your development needs.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: (
      `
        How quickly does the offshore development
        team get to work after being hired?
      `
    ),
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Once hired, an offshore development team will get to work quickly to deliver results within
          the agreed-upon timeframe. In most cases, the team can begin work immediately, as all the necessary
          resources will already be in place. It includes the development environment, tools, and processes.
          A project manager will supervise the team closely to ensure the progress and implementation according
          to a set schedule. As such, businesses can feel confident that they will receive the desired
          results when they hire an offshore development team.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Why Onix for custom software development services? ',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          At Onix, we have a proven track record of providing high-quality software development services.
          We have a team of experienced professionals familiar with the latest technologies and trends.
          In addition, we offer a flexible approach that allows us to tailor our services to your specific
          needs. Here are some of our strengths:
        </ContentText>
        <ContentText tag="div" className={textStyle}>
          <ul>
            <li>
              <p>
                <span className={textListSpan}>Business-focused </span>
                We understand that we build software to meet specific business needs. We develop custom IT
                solutions to meet these needs in the most efficient way possible.
              </p>
            </li>
            <li className="pt-[10px]">
              <p>
                <span className={textListSpan}>Vast industry expertise </span>
                Onix’ expertise covers a variety of business areas, including eLearning, financial technology,
                healthcare and insurance, fitness and sports, SaaS, ERP systems, video streaming apps, real
                estate, retail, and more. Onix leverages the capabilities of VR/AR, artificial intelligence,
                machine learning, and other disruptive technologies to deliver complex software solutions in
                different industries.
              </p>
            </li>
            <li className="pt-[10px]">
              <p>
                <span className={textListSpan}>Seamless communication </span>
                Fully transparent communications and the high English level of our experts eliminate the traditional
                hurdles of working with outsourcing service providers.
              </p>
            </li>
            <li className="pt-[10px]">
              <p>
                <span className={textListSpan}>Flexibility and scalability </span>
                Our highly qualified solution architects, software engineers, and project managers are prepared
                to solve your most complex challenges. And you can easily scale resources up or down as needs change.
              </p>
            </li>
            <li className="pt-[10px]">
              <p>
                <span className={textListSpan}>Consistent delivery </span>
                We use Agile methodology to add flexibility, speed, quality, and transparency to our development
                process. As a result, our team and clients enjoy a structured, iterative development process that allows
                for delivering a valuable final product on time.
              </p>
            </li>
          </ul>
        </ContentText>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What is the process and main steps of custom software development? ',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Custom software development is the process of creating custom applications to meet the specific needs and
          requirements of a business or organization. It typically involves several steps: planning and specifications,
          design and architecture, development and unit testing, integration and system testing, quality assurance
          and bug fixes, and release and maintenance. By following this process, businesses can ensure that their
          custom software meets all desired functionalities while being developed on time and within budget.
        </ContentText>
      </div>
    ),
  },
  {
    id: 6,
    title: 'How can I track progress? ',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Clients can track the progress of their software development project by working with their chosen provider
          to establish a timeline and milestones. This timeline should include key deliverables, estimated timelines
          for completion, and appropriate fee payments. By working together to agree upon these elements upfront,
          the client will be able to track progress against the established timeline and timeline milestones.
        </ContentText>
        <ContentText tag="p" className={textStyle}>
          In addition to this, it is important that clients work with providers who are transparent about their
          development process and aligned on methods of communication. Providers should provide regular updates
          on project progress and allow for regular meetings or discussions between the client and provider team so
          that feedback can be given regularly. If any challenges or delays arise during the development process,
          clients should also expect timely communication from their provider about potential solutions or adjustments
          in order to ensure the successful completion of the project.
        </ContentText>
      </div>
    ),
  },
  {
    id: 7,
    title: (
      `
        How long will it take to find and
        hire a team for custom software development?
      `
    ),
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          The time it takes to properly find and hire a team for custom software development will vary depending
          on factors such as the size of the project, the number of developers needed, their individual expertise,
          location/availability preference, and any special requirements. If you’re relying solely on local talent
          for your project, you can expect the process might take anywhere from 1-12 months; however, if you expand
          your search beyond your local vicinity or outsource part or all of the work overseas, it could potentially
          take less time.
        </ContentText>
      </div>
    ),
  },
];

export default faqData;
