import DevopsSolutionsDragSliderItem from '../../DevopsSolutionsPageView/components/DevopsSolutionsDragSliderItem';
import { ICaseStudiesData } from 'components/CaseStudyCarouselItem/interfaces/ICaseStudyCarouselItem';
import TravelHoverAccordionImg1 from '@/images/costOptimizationCaseStudyPageView/hoverAccordion/img_hoverAccordion1@2x.webp';
import TravelHoverAccordionImg2 from '@/images/costOptimizationCaseStudyPageView/hoverAccordion/img_hoverAccordion2@2x.webp';
import TravelHoverAccordionImg3 from '@/images/costOptimizationCaseStudyPageView/hoverAccordion/img_hoverAccordion3@2x.webp';
import TravelHoverAccordionImg4 from '@/images/costOptimizationCaseStudyPageView/hoverAccordion/img_hoverAccordion4@2x.webp';

const costHoverAccordionSliderData: ICaseStudiesData[] = [
  {
    id: 1,
    content: (
      <DevopsSolutionsDragSliderItem
        number="01"
        image={TravelHoverAccordionImg1}
        title="Info site on WordPress"
      />
    ),
  },
  {
    id: 2,
    content: (
      <DevopsSolutionsDragSliderItem
        title="Test info site on WordPress"
        image={TravelHoverAccordionImg2}
        number="02"
      />
    ),
  },
  {
    id: 3,
    content: (
      <DevopsSolutionsDragSliderItem
        image={TravelHoverAccordionImg3}
        title="Main web application"
        number="03"
      />
    ),
  },
  {
    id: 4,
    content: (
      <DevopsSolutionsDragSliderItem
        image={TravelHoverAccordionImg4}
        number="04"
        title="Test server for the main web application"
      />
    ),
  },
];

export default costHoverAccordionSliderData;
