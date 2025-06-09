import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';

import styles from '../sass/gameArtHowBuild.module.scss';

export const firstGameArtHowBuildData: IAccordionData[] = [
  {
    id: 12,
    number: '01',
    title: 'Initial Consultation & Project Assessment',
    tagTitle: 'h4',
    content: (
      <ItemText
        content={[
          `We discuss your project's requirements, goals, and creative vision. This helps us understand
          the scope of work, desired art style, and target platform, enabling us to tailor our approach
          to meet your needs.`,
        ]}
        classes={styles}
      />
    ),
  },
  {
    id: 22,
    number: '02',
    title: 'Brainstorming & Concept Creation',
    tagTitle: 'h4',
    content: (
      <ItemText
        content={[
          `We back up the most successful ideas with concepts and references or carry out a rough modeling and
          project creation stage to determine the prototype's performance.`,
        ]}
        classes={styles}
      />
    ),
  },
  {
    id: 32,
    number: '03',
    title: 'Planning & Preparation',
    tagTitle: 'h4',
    content: (
      <ItemText
        content={[
          `At this stage, we search for stylistics and advice in choosing the most successful creative idea and
          work with branding. Additionally, we plan tools, resources, and technologies used to implement a
          specific task.`,
        ]}
        classes={styles}
      />
    ),
  },
];

export const secondGameArtHowBuildData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Prototyping',
    tagTitle: 'h4',
    content: (
      <ItemText
        content={[
          `We carry out prototyping (blocking) of the project, allowing clients to check the efficiency of
          the idea and make adjustments at the early stages without spending significant resources.`,
        ]}
        classes={styles}
      />
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Asset Creation',
    tagTitle: 'h4',
    content: (
      <ItemText
        content={[
          `With the concepts and designs approved, our team develops detailed 3D models, textures, and
          animations for characters, props, and environments. We leverage advanced software and tools
          to ensure high-quality, optimized assets seamlessly integrate with your game's engine and
          platform. Our core value is that we develop our tools to accelerate the implementation of
          the project or its optimization. We also investigate new technologies if the project requires them.`,
        ]}
        classes={styles}
      />
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Review & Feedback',
    tagTitle: 'h4',
    content: (
      <ItemText
        content={[
          `Throughout the asset creation process, we share our progress with you and seek your feedback
          at regular intervals. This allows us to make necessary adjustments and ensures our work aligns
          with your vision and objectives.`,
        ]}
        classes={styles}
      />
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Optimization & Finalization',
    tagTitle: 'h4',
    content: (
      <ItemText
        content={[
          `After incorporating your feedback, we optimize the assets for various platforms and devices,
          generating Level of Detail (LOD) models and employing efficient texture usage to maintain
          performance without sacrificing visual quality.`,
        ]}
        classes={styles}
      />
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Delivery & Support',
    tagTitle: 'h4',
    content: (
      <ItemText
        content={[
          `We deliver the final assets in the required formats and any necessary documentation upon
          completion. Our team remains available to provide ongoing support and assistance, ensuring
          a seamless integration of the 3D game art into your project.`,
        ]}
        classes={styles}
      />
    ),
  },
];
