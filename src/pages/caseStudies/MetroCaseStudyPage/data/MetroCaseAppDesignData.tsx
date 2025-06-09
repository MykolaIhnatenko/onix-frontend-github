import Icon from '../../../../assets/icon';
import SketchIcon from '@/images/caseStudiesPage/MetroCaseStudyPage/img_sketchIcon.webp';
import InvisionIcon from '@/images/caseStudiesPage/MetroCaseStudyPage/img_invisionIcon.webp';
import FigmaIcon from '@/images/caseStudiesPage/MetroCaseStudyPage/img_figmaIcon.webp';

import styles from '../sass/metroCaseAppDesign.module.scss';

export const steps = [
  [
    {
      icon: <Icon.IconNewIdea />,
      title: 'a new idea or request for change from the client',
    },
    {
      icon: <Icon.IconRequirements />,
      title: 'formulation of requirements',
    },
    {
      icon: <Icon.IconStudy />,
      title: 'study of the competitors’ apps',
    },
    {
      icon: <Icon.IconAnalysis />,
      title: 'analysis of the current application',
    },
  ],
  [
    {
      icon: <Icon.IconUserFlow />,
      title: 'preparation of the user flow',
    },
    {
      icon: <Icon.IconUserTesting />,
      title: 'user testing',
      titleClassName: styles.maxWidth,
    },
    {
      icon: <Icon.IconClientsApproval />,
      title: 'client’s approval',
      titleClassName: styles.maxWidth,
    },
    {
      icon: <Icon.IconUpdates />,
      title: 'design preparation or updates',
    },
  ],
];

export const designApps = [
  {
    icon: SketchIcon,
    alt: 'sketch icon',
    width: 72,
    height: 65,
  },
  {
    icon: InvisionIcon,
    alt: 'invision icon',
    width: 65,
    height: 65,
  },
  {
    icon: FigmaIcon,
    alt: 'figma icon',
    width: 65,
    height: 65,
  },
];
