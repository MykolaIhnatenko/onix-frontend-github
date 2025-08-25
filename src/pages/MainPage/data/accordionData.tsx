import { NextRouter } from 'next/router';

import getAccordionTextData, { IAccordionTextData } from 'utils/getAccordionTextData';
import ContentText from '../../../components/ContentText/ContentText';
import PageLinks from '../../../constants/PageLinks';
import ItemList from 'components/ItemList/ItemList';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

import styles from '../sass/accordionData.module.scss';

const mainAccordionData = (router: NextRouter): IAccordionData[] => [
  {
    id: 1,
    title: 'Seed Startups',
    tagTitle: 'h2',
    content: (
      <>
        <ItemList
          listTitle={`You have a product idea and you've already raised an investment.
            However, you don't know where to start and have no development team.`}
          list={[
            'Product discovery',
            'Lean inception to build MVP',
            'Delivery at early dev stages',
          ]}
        />
        <ButtonLight
          text="Check relevant cases"
          styleContainer={`${styles.button} ${styles.techGeeksButton}`}
          onClick={() => router.push(PageLinks.CASE_STUDIES)}
        />
      </>
    ),
  },
  {
    id: 2,
    title: 'Businesses Lacking Tech Expertise',
    tagTitle: 'h2',
    content: (
      <>
        <ItemList
          listTitle={`You have an in-house team, but you need certain expertise of one or several professionals
            who will proficiently support your projects on an ongoing basis.`}
          list={[
            'Staff augmentation',
            'Dedicated team',
            'Long-term development partner',
          ]}
        />
        <ButtonLight
          text="Check relevant cases"
          styleContainer={`${styles.button} ${styles.techGeeksButton}`}
          onClick={() => router.push(PageLinks.CASE_STUDIES)}
        />
      </>
    ),
  },
  {
    id: 3,
    title: 'S&M-Sized Businesses',
    tagTitle: 'h2',
    content: (
      <>
        <ItemList
          listTitle={`You’re a mature company with set processes, but you feel it's
            the right time for transformation and need the help of tech experts.`}
          list={[
            'Scaling the business',
            'Business processes automation',
            'Digital transformation',
          ]}
        />
        <ButtonLight
          text="Check relevant cases"
          styleContainer={`${styles.button} ${styles.techGeeksButton}`}
          onClick={() => router.push(PageLinks.CASE_STUDIES)}
        />
      </>
    ),
  },
];

const mainSoftwareData: IAccordionTextData[] = [
  {
    id: 1,
    number: '01',
    title: 'Web development',
    content: [
      `We offer web development services to build stable and reliable web solutions
      that meet your unique goals, boost your business efficiency, and satisfy
      the needs of modern users.`,
      `Our software development experts assist you in creating beautifully
      striking and high-performing web solutions for your specific industry,
      regardless of the project's complexity and scale.`,
    ],
  },
  {
    id: 8,
    number: '08',
    title: 'Research and tech development',
    content: [
      `To remain relevant, you should continue to innovate.
      That’s where our R&D service comes in handy.`,
      `We assist you in choosing the best technology and suitable devices/accessories
      for your project that contributes to a company’s long-term profitability.
      Our R&D service allows you to produce cutting-edge solutions and stay ahead of your competition.`,
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Mobile development',
    content: [
      `Our experts will leave no stone unturned in providing the best solutions through our
      knowledge and expertise of the ever-changing technologies.`,
      `We build world-class, techno-driven iOS and Android apps
      that complement your company’s needs, vision, and budget.
      Our elegantly designed apps help you captivate your
      target audience, solve users’ pain points,
      and enhance business performance.`,
    ],
  },
  {
    id: 9,
    number: '09',
    title: 'Prototyping and Proof of Concept',
    content: [
      'We\'ll test your product idea before you start investing.',
      `Our experts create a PoC/prototype of your product
      to verify key functionality workability and product idea
      viability before jumping into full-blown development.`,
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'UI/UX design',
    content: [
      `We deliver design services that allow your product
      to stand out from the crowd.`,
      `Onix’s experts combine years of experience in designing, 
      understanding the UI/UX best practices, and attention
      to each client’s requirements and target audience’s needs
      to offer unique, highly aesthetic, and innovative designs.`,
    ],
  },
  {
    id: 10,
    number: '10',
    title: 'DevOps',
    content: [
      `We provide DevOps services to ensure continuous delivery,
      perfect in-house workflows, and a consistently high level
      of software quality.`,
      `Our DevOps services allow you to improve collaboration
      between development and operations teams, reach greater efficiency
      in the deployment of apps, reduce manual errors, achieve faster
      response times to customer requests, and better scalability.`,
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'AR/VR development',
    content: [
      `We provide a full range of AR & VR development services
      to help your business ideas thrive.`,
      `By combining AR and VR, our experts create and merge digitized models
      of the real world coupled with computer-generated models, ensuring a
      fascinating experience of starting in the real world and progressing
      to an immersive virtual reality world.`,
    ],
  },
  {
    id: 11,
    number: '11',
    title: 'Infrastructure management',
    content: [
      `Our experts can help increase the efficiency of IT operations by automating
      mundane tasks and enabling faster responses
      to outages or incidents.`,
      `We ensure improved reliability and scalability,
      cost-effectiveness, enhanced security,
      and streamlined administration.`,
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Machine learning',
    content: [
      'Gain a competitive advantage with ML solutions.',
      `We create top-of-the-line machine learning apps that
      address your business challenges, optimize operations,
      quickly process large volumes of data, and streamline the
      customer experience. Our experts assist you in selecting the best
      approach for your specific business needs and market requirements.
      Transform business capabilities and outrank
      the competition with our robust solution!`,
    ],
  },
  {
    id: 12,
    number: '12',
    title: 'Upgrading your website or mobile app',
    content: [
      'Do you feel it\'s the right moment to add more useful features to your product and grow?',
      `Our specialists provide a free audit of your current website or app,
      prepare a list of improvements, manage your technology needs,
      conduct a UI/UX audit, visualize new features, implement new functionality,
      and integrate required APIs. We're here to help!`,
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Salesforce development',
    content: [
      `The Onix team executes your Salesforce project from A to Z according to your requirements and within
      the approved budget.`,
      `We offer full-cycle Salesforce development services,
      including consulting, business analysis, design, QA,
      deployment, and support. Our experts are passionate about
      delivering products that run on the Salesforce platform
      or building a custom, top-notch Salesforce product that
      ensures business sustainability and supercharges your operations.`,
    ],
  },
  {
    id: 13,
    number: '13',
    title: 'Dedicated team',
    content: [
      `We form a dedicated software development team that helps you deliver
      a high-quality software product and produce excellent results.`,
      `You focus on your business growth while our specialists take
      care of all the project management hassle and guarantee a
      smooth and transparent development process.`,
    ],
  },
  {
    id: 7,
    number: '07',
    title: 'Software testing and QA services',
    content: [
      `Onix provides full-spectrum quality assurance and testing services
      to ship high-quality desktop, web, and mobile applications and
      ensure excellent software performance.`,
      `Our specialists assist you in defining quality goals, 
      thoroughly examining every nook and corner of your product, 
      and preparing a list of steps to take to provide your end 
      customers with the best experience. 
      Let's drive your business sustainability!`,
    ],
  },
  {
    id: 14,
    number: '14',
    title: 'Consulting & Support',
    content: [
      `Not sure how to apply modern technologies to your business
      to start leveraging them?`,
      `Our experts will gladly provide you with superb consulting and support
      services to demonstrate how this technology
      can be used in your specific type of industry.
      After an in-depth analysis of your business goals,
      we'll offer you the best-suited solution to meet your concrete needs and gain a competitive edge.`,
    ],
  },
];

export const softwareProductContentData = getAccordionTextData(mainSoftwareData);

export const faqData: IAccordionData[] = [
  {
    id: 1,
    title: 'How can your software development services rescue a failing software project?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Yes, Onix is a Ukrainian software development
          company with 22+ years of experience building
          web and mobile solutions for startups, small
          and medium-sized businesses worldwide. Using
          cutting-edge technologies, our talented team
          finds the right solution to meet your unique
          business goals.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Where could I see your software product development company\'s portfolio?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          {'Here you can check out the recent projects we\'ve built for our clients.'}
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How to choose an outsource software product development company?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          {`To make the right choice and hire an experienced software development company,
          it's better to pay attention to important factors such as portfolio,
          relevant expertise, experience, location, previous clients' feedback, etc.
          Moreover, to choose the right company, you can talk openly with its specialists
          and ensure they understand your problem and know how to solve it with modern
          and reliable technologies.`}
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Is Onix a full-cycle software development company?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Yes, Onix is a full-cycle software development company that delivers outstanding
          results and excellent customer service. We have mastered development outsourcing
          to speed up the implementation process, reduce delays in response time and enable
          an effective round-the-clock work model. Feel free to contact us and share your project idea!
        </ContentText>
      </div>
    ),
  },
  {
    id: 5,
    title: 'May I hire a dedicated team of developers for my startup from Onix?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Sure! We form a dedicated software development team that helps you
          deliver a high-quality software product and produce excellent results.
          You focus on your business growth while our specialists take care of all
          the project management hassle and guarantee a smooth and
          transparent development process.
        </ContentText>
      </div>
    ),
  },
];

export const faqFitnessData: IAccordionData[] = [
  {
    id: 1,
    title: 'How to select the best company for sports app development?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          When it comes to developing a fitness app, it is important to select a company that
          has extensive experience in the field. The company should also be able to provide
          a wide range of services, including app development, design, and further support.
          In addition, the company should be able to offer a competitive price. Pay attention
          to the company’s development approach, processes, and communication.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How will I communicate with your sports app development team?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          It&apos;s important to maintain clear and consistent communication with your development team,
          especially when outsourcing. There are a few different ways to do this, and the best method
          will vary depending on the team&apos;s size, location, and time zone. Use popular communication
          tools like Slack, incorporate project management tools to stay on the same page with all
          stakeholders, or use task management tools like Asana and Jira.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How much does a fitness app developed by your team usually cost?',
    content: (
      <div>
        <ContentText className={textStyle} tag="div">
          <p className="!m-[0px_0px_30px] screen-lg:!mb-[15px] screen-md:!mb-[20px]">
            Aside from development stages and their costs, the following factors will
            significantly influence the final product cost:
          </p>
          <ul>
            <li className="mb-[10px] screen-lg:leading-[26px]">
              <p>
                <span className="pr-[10px]">﹂</span>
                Web platform development if you haven’t one yet - so your staff can manage and update the app
              </p>
            </li>
            <li className="mb-[10px] screen-lg:leading-[26px]">
              <p>
                <span className="pr-[10px]">﹂</span>
                Chosen functionality and its complexity
              </p>
            </li>
            <li className="mb-[10px] screen-lg:leading-[26px]">
              <p>
                <span className="pr-[10px]">﹂</span>
                Number of features
              </p>
            </li>
            <li className="mb-[10px] screen-lg:leading-[26px]">
              <p>
                <span className="pr-[10px]">﹂</span>
                Chosen tech stack
              </p>
            </li>
            <li className="mb-[10px] screen-lg:leading-[26px]">
              <p>
                <span className="pr-[10px]">﹂</span>
                Scope of work
              </p>
            </li>
            <li className="mb-[10px] screen-lg:leading-[26px]">
              <p>
                <span className="pr-[10px]">﹂</span>
                Experience of the chosen fitness application development company
              </p>
            </li>
            <li className="mb-[10px] screen-lg:leading-[26px]">
              <p>
                <span className="pr-[10px]">﹂</span>
                Team composition and its development practices
              </p>
            </li>
            <li className="mb-[10px] screen-lg:leading-[26px]">
              <p>
                <span className="pr-[10px]">﹂</span>
                Process consistency
              </p>
            </li>
            <li className="mb-[10px] screen-lg:leading-[26px]">
              <p>
                <span className="pr-[10px]">﹂</span>
                Team location
              </p>
            </li>
          </ul>
        </ContentText>
      </div>
    ),
  },
];

export default mainAccordionData;
