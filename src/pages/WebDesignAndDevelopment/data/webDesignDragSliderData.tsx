import { ICaseStudiesData } from 'components/CaseStudyCarouselItem/interfaces/ICaseStudyCarouselItem';
import WebDesignDragSliderImg1 from '@/images/webDesignPage/dragSlider/img_web_design_drag_slider_img_1@2x.webp';
import WebDesignDragSliderImg2 from '@/images/webDesignPage/dragSlider/img_web_design_drag_slider_img_2@2x.webp';
import WebDesignDragSliderImg3 from '@/images/webDesignPage/dragSlider/img_web_design_drag_slider_img_3@2x.webp';
import WebDesignDragSliderImg4 from '@/images/webDesignPage/dragSlider/img_web_design_drag_slider_img_4@2x.webp';
import WebDesignDragSliderImg5 from '@/images/webDesignPage/dragSlider/img_web_design_drag_slider_img_5@2x.webp';
import DragSliderItem from '../../../components/DragSlider/components/DragSliderItem';

const dragSliderData: ICaseStudiesData[] = [
  {
    id: 1,
    content: (
      <DragSliderItem
        img={WebDesignDragSliderImg1}
        title="Project manager"
        text="will control your development process and keep you informed at all stages of development."
      />
    ),
  },
  {
    id: 2,
    content: (
      <DragSliderItem
        img={WebDesignDragSliderImg2}
        title="Backend developers"
        text="will write web services and APIs and integrate server-side logic and work done by frontend developers."
      />
    ),
  },
  {
    id: 3,
    content: (
      <DragSliderItem
        img={WebDesignDragSliderImg3}
        title="Frontend developers"
        text="will bring your website design to life and create user experience and interaction."
      />
    ),
  },
  {
    id: 4,
    content: (
      <DragSliderItem
        img={WebDesignDragSliderImg4}
        title="Web designers"
        text="will create a customized design, trendy icons, beautiful themes, and stunning banners for your
         project idea."
      />
    ),
  },
  {
    id: 5,
    content: (
      <DragSliderItem
        img={WebDesignDragSliderImg5}
        title="QA engineers"
        text="will collaborate with developers to test the software and ensure your website looks good on all devices."
      />
    ),
  },
];

export default dragSliderData;
