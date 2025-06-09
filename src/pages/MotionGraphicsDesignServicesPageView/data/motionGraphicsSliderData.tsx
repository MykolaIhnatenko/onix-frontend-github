import MotionGraphicsSlider2Main from '@/images/motionGraphics/imageSlider/img_2_main@2x.webp';
import MotionGraphicsSlider3Main from '@/images/motionGraphics/imageSlider/img_3_main@2x.webp';
import MotionGraphicsSlider3Secondary from '@/images/motionGraphics/imageSlider/img_3_secondary@2x.webp';
import MotionGraphicsSlider4Main from '@/images/motionGraphics/imageSlider/img_4_main@2x.webp';
import MotionGraphicsSlider4Secondary from '@/images/motionGraphics/imageSlider/img_4_secondary@2x.webp';
import MotionGraphicsSlider5Main from '@/images/motionGraphics/imageSlider/img_5_main@2x.webp';
import MotionGraphicsSlider5Secondary from '@/images/motionGraphics/imageSlider/img_5_secondary@2x.webp';
import MotionGraphicsSlider6Main from '@/images/motionGraphics/imageSlider/img_6_main@2x.webp';
import ISliderItem from '../interfaces/ISliderItem';

const motionGraphicsSliderData: ISliderItem[] = [

  {
    id: 1,
    mainImage: MotionGraphicsSlider2Main,
    visibil: false,
    animateNumber: 3,
  },
  {
    id: 2,
    mainImage: MotionGraphicsSlider3Main,
    secondaryImage: MotionGraphicsSlider3Secondary,
    secondaryImagePositionId: 3,
    visibil: false,
    animateNumber: 1,
  },
  {
    id: 3,
    mainImage: MotionGraphicsSlider4Main,
    secondaryImage: MotionGraphicsSlider4Secondary,
    secondaryImagePositionId: 2,
    visibil: true,
    animateNumber: 4,
  },
  {
    id: 4,
    mainImage: MotionGraphicsSlider5Main,
    secondaryImage: MotionGraphicsSlider5Secondary,
    secondaryImagePositionId: 1,
    visibil: false,
    animateNumber: 2,
  },
  {
    id: 5,
    mainImage: MotionGraphicsSlider6Main,
    visibil: false,
    animateNumber: 5,
  },

];

export default motionGraphicsSliderData;
