import { IAccordionData } from '../../../components/AccordionTemplate/interfaces/IAccordion';
import LinkComponent from '../../../components/Link/Link';
import { PATH } from '../../../constants/constants';
import JakartaText from '../../../components/JakartaText/JakartaText';

const faqData: IAccordionData[] = [
  {
    id: 1,
    title:
  <JakartaText tag="span" className="screen-md:text-[18px]">
    What are the common recurring project risks?
  </JakartaText>,
    content: (
      <div>
        <JakartaText
          tag="p"
          className="text-[16px]/[150%] pb-[30px] max-w-[1080px] min-xxxl:max-w-[1480px]
             screen-lg:max-w-[91.6%] screen-md:max-w-[85.5%] screen-md:text-[14px] screen-md:pb-[20px] "
        >
          Common risks include unclear goals, poor code quality, lack of testing, and weak project management.
          Our software development services mitigate these risks through thorough planning, senior engineering
          talent, and continuous quality checks.
        </JakartaText>
      </div>
    ),
  },
  {
    id: 2,
    title:
  <JakartaText tag="span" className="screen-md:text-[18px]">
    Why do software projects fail?
  </JakartaText>,
    content: (
      <div>
        <JakartaText
          tag="p"
          className="text-[16px] leading-[150%] pb-[30px] max-w-[1080px] min-xxxl:max-w-[1480px]
             screen-lg:max-w-[91.6%] screen-md:max-w-[85.5%] screen-md:text-[14px] screen-md:pb-[20px] "
        >
          Software development projects often fail due to vague requirements, misaligned expectations, a lack of
          skilled developers, or weak project oversight. Projects can fail without clear goals, proper architecture,
          and strong communication, especially in offshore software development services. Onix ensures success
          through structured discovery, senior-led execution, and transparent delivery.
        </JakartaText>
      </div>
    ),
  },
  {
    id: 3,
    title:
  <JakartaText tag="span" className="screen-md:text-[18px]">
    Can I get legacy system modernization services?
  </JakartaText>,
    content: (
      <div>
        <JakartaText
          tag="p"
          className="text-[16px] leading-[150%] pb-[30px] max-w-[1080px] min-xxxl:max-w-[1480px]
             screen-lg:max-w-[91.6%] screen-md:max-w-[85.5%] screen-md:text-[14px] screen-md:pb-[20px] "
        >
          Sure! We help businesses upgrade outdated systems, re-architect legacy apps, migrate to scalable
          cloud platforms, and improve performance. We ensure smooth transitions without data loss or system downtime.
        </JakartaText>
      </div>
    ),
  },
  {
    id: 4,
    title:
  <JakartaText tag="span" className="screen-md:text-[18px]">
    Does Onix offer AI-augmented code analysis services?
  </JakartaText>,
    content: (
      <div>
        <JakartaText
          tag="p"
          className="text-[16px] leading-[150%] pb-[30px] max-w-[1080px] min-xxxl:max-w-[1480px]
             screen-lg:max-w-[91.6%] screen-md:max-w-[85.5%] screen-md:text-[14px] screen-md:pb-[20px] "
        >
          Yes. We apply AI-augmented code analysis to identify bugs, optimize performance, and reduce technical
          debt. This boosts code quality and speeds up delivery.
        </JakartaText>
      </div>
    ),
  },
  {
    id: 5,
    title:
  <JakartaText tag="span" className="screen-md:text-[18px]">
    How do you handle situations when software developers go beyond the schedule?
  </JakartaText>,
    content: (
      <div>
        <JakartaText
          tag="p"
          className="text-[16px] leading-[150%] pb-[30px] max-w-[1080px] min-xxxl:max-w-[1480px]
             screen-lg:max-w-[91.6%] screen-md:max-w-[85.5%] screen-md:text-[14px] screen-md:pb-[20px] "
        >
          At Onix, we prevent delays with proactive planning, clear sprints, and strong project management.
          If timelines slip, our
          {' '}
          <LinkComponent
            absolute={false}
            target="_self"
            href={`${PATH}/dedicated-team`}
            rel="noopener noreferrer nofollow"
            className="relative inline-block link-underline"
          >
            dedicated team
          </LinkComponent>
          {' '}
          assesses the blockers, reallocate resources, and communicates transparently. Our structured
          approach to offshore software development services ensures accountability, rapid course
          correction, and on-time delivery.
        </JakartaText>
      </div>
    ),
  },
  {
    id: 6,
    title:
  <JakartaText tag="span" className="screen-md:text-[18px]">
    Can you share a portfolio of your custom software development services for companies similar to mine?
  </JakartaText>,
    content: (
      <div>
        <JakartaText
          tag="p"
          className="text-[16px] leading-[150%] pb-[30px] max-w-[1080px] min-xxxl:max-w-[1480px]
             screen-lg:max-w-[91.6%] screen-md:max-w-[85.5%] screen-md:text-[14px] screen-md:pb-[20px] "
        >
          Absolutely. We’ve delivered offshore software development solutions across healthcare, sports/fitness, travel,
          and e-commerce industries. You can explore
          {' '}
          <LinkComponent
            absolute={false}
            target="_self"
            href={`${PATH}/case-studies`}
            rel="noopener noreferrer nofollow"
            className="relative inline-block link-underline"
          >
            our portfolio on our website
          </LinkComponent>
          {' '}
          or let us know your industry, and we’ll gladly share the most relevant success stories.
        </JakartaText>
      </div>
    ),
  },
];

export default faqData;
