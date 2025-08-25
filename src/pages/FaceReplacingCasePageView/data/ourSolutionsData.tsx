import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

import OurSolutionsImg1 from '@/images/faceReplacingCasePage/ourSolutions/img_ourSolutions1.webp';
import OurSolutionsImg2 from '@/images/faceReplacingCasePage/ourSolutions/img_ourSolutions2.webp';
import OurSolutionsImg3 from '@/images/faceReplacingCasePage/ourSolutions/img_ourSolutions3.webp';
import OurSolutionsImgTablet1 from '@/images/faceReplacingCasePage/ourSolutions/img_ourSolutionsTablet1.webp';
import OurSolutionsImgTablet2 from '@/images/faceReplacingCasePage/ourSolutions/img_ourSolutionsTablet2.webp';
import OurSolutionsImgTablet3 from '@/images/faceReplacingCasePage/ourSolutions/img_ourSolutionsTablet3.webp';
import OurSolutionsImgMobile1 from '@/images/faceReplacingCasePage/ourSolutions/img_ourSolutionsMobile1.webp';
import OurSolutionsImgMobile2 from '@/images/faceReplacingCasePage/ourSolutions/img_ourSolutionsMobile2.webp';
import OurSolutionsImgMobile3 from '@/images/faceReplacingCasePage/ourSolutions/img_ourSolutionsMobile3.webp';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Inanimate object face replacement',
    text: [
      `Unlike human faces, animals or inanimate objects won't have the same geometric structure or landmarks. Placing
      a human face on them requires a dynamic approach that can adjust to various shapes and structures. Moreover
      some objects or animals move unpredictably, which complicates the tracking and anchoring of the human face
      onto them.`,
      `The Onix team implemented a mapping algorithm that doesn't solely rely on traditional facial landmarks but
      also uses the broader contours and shape of the target entity, whether it's an animal's face or an object.
      Moreover, we used advanced tracking algorithms in OpenCV to keep the human face consistently placed on the
      moving object.`,
    ],
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Accessory augmentation',
    text: [
      `As users move or change expressions, accessories should adjust accordingly. A hat, for instance, should remain
      on the head, not float above it if a user raises their eyebrows. Also, different users have different face
      sizes and shapes. The accessories must fit proportionally, looking both too large and too small.`,
      `We used facial landmarks to create "anchor points" for accessories. For instance, glasses anchor to the bridge
      of the nose and ears, ensuring they move with the face realistically. Also, we developed an algorithm that
      adjusts accessory size based on detected face dimensions. For instance, the width between the eyes can
      determine the size of glasses.`,
    ],
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Performance efficiency',
    text: [
      `Regardless of where you make changes - on the mobile version or web, all modifications are automatically
      reflected across all platforms.`,
      `For example, if you change the color of a button, this change will be applied both on mobile devices and on
      the website. This ensures design consistency and ease of management, as you don't need to make separate changes
      on each platform.`,
      `All changes are automatically synchronized, allowing you to efficiently control the appearance and
      functionality of your product on different devices.`,
    ],
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
];

export default ourSolutionsData;
