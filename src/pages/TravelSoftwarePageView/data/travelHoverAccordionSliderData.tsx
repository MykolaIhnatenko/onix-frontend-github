import DevopsSolutionsDragSliderItem from '../../DevopsSolutionsPageView/components/DevopsSolutionsDragSliderItem';
import { ICaseStudiesData } from 'components/CaseStudyCarouselItem/interfaces/ICaseStudyCarouselItem';
import TravelHoverAccordionImg1 from '@/images/travelHospitalityPage/hoverAccordion/Img_travelHoverAccordion1@2x.webp';
import TravelHoverAccordionImg2 from '@/images/travelHospitalityPage/hoverAccordion/Img_travelHoverAccordion2@2x.webp';
import TravelHoverAccordionImg3 from '@/images/travelHospitalityPage/hoverAccordion/Img_travelHoverAccordion3@2x.webp';
import TravelHoverAccordionImg4 from '@/images/travelHospitalityPage/hoverAccordion/Img_travelHoverAccordion4@2x.webp';

const travelHoverAccordionSliderData: ICaseStudiesData[] = [
  {
    id: 1,
    content: (
      <DevopsSolutionsDragSliderItem
        image={TravelHoverAccordionImg1}
        number="01"
        title="Travel mobile app development"
      />
    ),
  },
  {
    id: 2,
    content: (
      <DevopsSolutionsDragSliderItem
        image={TravelHoverAccordionImg2}
        number="02"
        title="Hotel booking website development"
      />
    ),
  },
  {
    id: 3,
    content: (
      <DevopsSolutionsDragSliderItem
        image={TravelHoverAccordionImg3}
        number="03"
        title="Travel API integration"
      />
    ),
  },
  {
    id: 4,
    content: (
      <DevopsSolutionsDragSliderItem
        image={TravelHoverAccordionImg4}
        number="04"
        title="Property management systems"
      />
    ),
  },
];

export default travelHoverAccordionSliderData;
