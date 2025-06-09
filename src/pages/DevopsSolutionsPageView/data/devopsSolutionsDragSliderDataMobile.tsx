import { ICaseStudiesData } from 'components/CaseStudyCarouselItem/interfaces/ICaseStudyCarouselItem';
import DevopsSolutionsDragSliderItem from '../components/DevopsSolutionsDragSliderItem';
import DevopsHoverAccordionImgMobile1 from '@/images/devopsSolutionsPageView/hoverAccordion/img_hoverAccordionMobile1.webp';
import DevopsHoverAccordionImgMobile2 from '@/images/devopsSolutionsPageView/hoverAccordion/img_hoverAccordionMobile2.webp';
import DevopsHoverAccordionImgMobile3 from '@/images/devopsSolutionsPageView/hoverAccordion/img_hoverAccordionMobile3.webp';
import DevopsHoverAccordionImgMobile4 from '@/images/devopsSolutionsPageView/hoverAccordion/img_hoverAccordionMobile4.webp';
import DevopsHoverAccordionImgMobile5 from '@/images/devopsSolutionsPageView/hoverAccordion/img_hoverAccordionMobile5.webp';

const devopsSolutionsDragSliderDataMobile: ICaseStudiesData[] = [
  {
    id: 1,
    content: (
      <DevopsSolutionsDragSliderItem
        image={DevopsHoverAccordionImgMobile1}
        number="01"
        title="DevOps as a Service"
        priority
      />
    ),
  },
  {
    id: 2,
    content: (
      <DevopsSolutionsDragSliderItem
        image={DevopsHoverAccordionImgMobile2}
        number="02"
        title="Infrastructure as a Code"
        priority
      />
    ),
  },
  {
    id: 3,
    content: (
      <DevopsSolutionsDragSliderItem
        image={DevopsHoverAccordionImgMobile3}
        number="03"
        title="DevOps Automation"
        priority
      />
    ),
  },
  {
    id: 4,
    content: (
      <DevopsSolutionsDragSliderItem
        image={DevopsHoverAccordionImgMobile4}
        number="04"
        title="Release Management"
        priority
      />
    ),
  },
  {
    id: 5,
    content: (
      <DevopsSolutionsDragSliderItem
        image={DevopsHoverAccordionImgMobile5}
        number="05"
        title="Infrastructure Monitoring"
        priority
      />
    ),
  },
];

export default devopsSolutionsDragSliderDataMobile;
