import ThreeStepsItemContent from 'pages/MainPage/components/ThreeStepsBlock/ThreeStepsItemContent';
import Image1 from '../../../assets/images/mainPage/threeStepsBlock/img_threeSteps1@2x.webp';
import Image2 from '../../../assets/images/mainPage/threeStepsBlock/img_threeSteps2@2x.webp';
import Image3 from '../../../assets/images/mainPage/threeStepsBlock/img_threeSteps3@2x.webp';
import ImageTablet1 from '../../../assets/images/mainPage/threeStepsBlock/img_threeStepsTablet1@2x.webp';
import ImageTablet2 from '../../../assets/images/mainPage/threeStepsBlock/img_threeStepsTablet2@2x.webp';
import ImageTablet3 from '../../../assets/images/mainPage/threeStepsBlock/img_threeStepsTablet3@2x.webp';
import VRARContent from 'components/VRARContent/VRARContent';
import JakartaText from 'components/JakartaText/JakartaText';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';

const threeStepsData: IAccordionData[] = [
  {
    id: 11,
    number: '01',
    title: 'Immediate audit',
    content: (
      <ThreeStepsItemContent
        subTitle={(
          <span className="screen-lg:tracking-[-0.3px] screen-md:tracking-[-0.18px]">
            We
            {' '}
            <span className="font-bold">“look under the hood”</span>
            {' '}
            of your project to discover exactly why it derailed:
          </span>
        )}
        list={[
          'Reviewing the code quality, backend architecture, and unmet requirements',
          'Use AI-driven analysis to quickly identify bugs, security gaps, and root causes',
          'Clarify your true business requirements vs. what’s currently implemented.',
        ]}
        tabelTitle={(
          <>
            You receive a detailed
            {' '}
            <span className="font-bold">Rescue Audit Report</span>
            {' '}
            and a realistic timeline to make it right:
          </>
        )}
        tableList={[
          'Evaluation of backend architecture, database design, and deployment setup',
          'Recommendations for modernization and scalability',
          'Key missing features, broken workflows, or UX blockers',
          'Prioritized phases for quick wins and long-term improvements',
        ]}
        timelineTitle="1 week"
        image={ImageTablet1}
        isTimelineFirst
      />
    ),
  },
  {
    id: 12,
    number: '02',
    title: 'Redesign',
    content: (
      <ThreeStepsItemContent
        subTitle={`Armed with audit insights, our dedicated engineers use AI to refactor code,
          simulate scenarios, and rethink architecture and plan for bespoke and enterprise-level
          improvements, integrating ML, blockchain, and clean up the legacy mess:`}
        list={[
          'Refactoring or rewriting modules',
          'Improving database structures',
          'Providing legacy software modernization',
          'Updating frameworks',
          'Prioritizing and re-scoping features if needed',
          'Planning AI integration to give your product an edge',
          'Aligning with your core business goals',
        ]}
        tabelTitle={(
          <>
            You get a
            {' '}
            <span className="font-bold">comprehensive roadmap</span>
            {' '}
            for custom software development solutions that will yield
            a scalable, secure and future-proof product:
          </>
        )}
        tableList={[
          'A clear technical architecture',
          'An ordered backlog of fixes/improvements',
          'Prototypes or diagrams showing the new approach',
        ]}
        timelineTitle="1-2 weeks"
        image={ImageTablet2}
        isTimelineSecondary
      />
    ),
  },
  {
    id: 13,
    number: '03',
    title: 'Rebuild & future-proofing',
    content: (
      <ThreeStepsItemContent
        subTitle={(
          <>
            We
            {' '}
            <span className="font-bold">
              execute the rescue plan
            </span>
            {' '}
            and bring your software to a stable, high-quality completion. Our A-Team jumps in to
            {' '}
            <span className="font-bold">
              fix the code
            </span>
            {' '}
            according to the new design:
          </>
        )}
        list={[
          'Eliminating critical bugs',
          'Finishing half-built features',
          'Optimizing performance',
          'Integrating new components (including AI modules or third-party services)',
          'Testing and testing everything',
        ]}
        text={(
          <>
            <VRARContent className="py-[20px] screen-md:py-[15px]">
              <JakartaText
                className="text-[20px]/[1.4] screen-md:text-[18px]/[1.4]
                tracking-[-0.2px] screen-md:tracking-[-0.18px]"
              >
                Thanks to
                {' '}
                <span className="font-bold">
                  AI-powered testing tools
                </span>
                , we catch issues early and 2× faster to ensure quality.
              </JakartaText>
            </VRARContent>
            <VRARContent>
              <JakartaText
                className="text-[20px]/[1.4] screen-md:text-[18px]/[1.4]
                tracking-[-0.2px] screen-md:tracking-[-0.18px]"
              >
                We maintain
                {' '}
                <span className="font-bold">transparent communication</span>
                : you get progress updates, demos, and access to our project tracking.
              </JakartaText>
            </VRARContent>
          </>
        )}
        tabelTitle={(
          <>
            Your product is
            {' '}
            <span className="font-bold">fixed, tested, and deployed</span>
            {' '}
            successfully:
          </>
        )}
        tableList={[
          'You get a working, scalable software solution',
          'This solution meets your original requirements (finally!)',
          'It is delivered on the agreed timeline',
        ]}
        timelineTitle="is project-based"
        isTimelineThird
        image={ImageTablet3}
      />
    ),
  },
];

export const threeStepsImagesData = [
  {
    id: '01',
    image: Image1,
  },
  {
    id: '02',
    image: Image2,
  },
  {
    id: '03',
    image: Image3,
  },
];

export default threeStepsData;
