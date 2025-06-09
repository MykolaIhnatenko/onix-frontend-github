import BDImgSlideMobileThird from '@/images/brandingDesign/img_bd_img_slide_mobile_third.webp';
import BDImgSlideMobileSecond from '@/images/brandingDesign/img_bd_img_slide_mobile_second.webp';
import BDImgSlideMobileFirst from '@/images/brandingDesign/img_bd_img_slide_mobile_first.webp';
import BDImgSlideThird from '@/images/brandingDesign/img_bd_img_slide_third.webp';
import BDImgSlideSecond from '@/images/brandingDesign/img_bd_img_slide_second.webp';
import BDImgSlideFirst from '@/images/brandingDesign/img_bd_img_slide_first.webp';
import { IBDMainSectionData } from '../interfaces/IBDMainSection';

const bdMainSectionData: IBDMainSectionData[] = [
  {
    id: 0,
    image: BDImgSlideFirst,
    imageMobile: BDImgSlideMobileFirst,
    titleImg: 'Brand design',
    text: `Our team of experienced designers is dedicated to creating visually captivating
        and impactful brand designs that resonate with your target audience.`,
  },
  {
    id: 1,
    image: BDImgSlideSecond,
    imageMobile: BDImgSlideMobileSecond,
    titleImg: 'Logo design',
    text: `We believe a well-crafted brand design goes beyond aesthetics – 
           it communicates your brand's values, personality, and unique story.`,
  },
  {
    id: 2,
    image: BDImgSlideThird,
    imageMobile: BDImgSlideMobileThird,
    titleImg: 'Brand guidelines',
    text: `With our branding design services, you can establish a strong brand presence that 
           sets you apart from the competition and helps you achieve your business goals.`,
  },
];

export default bdMainSectionData;
