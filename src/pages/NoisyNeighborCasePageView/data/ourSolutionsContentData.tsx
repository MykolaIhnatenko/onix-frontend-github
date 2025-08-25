import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

import OurSolutionsImg1 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutions1.webp';
import OurSolutionsImg2 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutions2.webp';
import OurSolutionsImg3 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutions3.webp';
import OurSolutionsImg4 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutions4.webp';
import OurSolutionsImgTablet1 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutionsTablet1.webp';
import OurSolutionsImgTablet2 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutionsTablet2.webp';
import OurSolutionsImgTablet3 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutionsTablet3.webp';
import OurSolutionsImgTablet4 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutionsTablet4.webp';
import OurSolutionsImgMobile1 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutionsMobile1.webp';
import OurSolutionsImgMobile2 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutionsMobile2.webp';
import OurSolutionsImgMobile3 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutionsMobile3.webp';
import OurSolutionsImgMobile4 from '@/images/noisyNeighborCasePage/ourSolutions/img_ourSolutionsMobile4.webp';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Transform sketches into dynamic and engaging 3D illustrations',
    text: [
      `Our experts implemented a process that involved creating low-poly models for characters and environments.
      We adjusted lighting and materials to enhance visual appeal. Also, we utilized three scenes to add dynamism
      to static images, creating a sense of volume.`,
      `The team also developed a mechanism for creating high-polygonal models into low-polygonal ones, ensuring
      a fast-loading and visually rich final result.`,
    ],
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Create a visually appealing and\u00A0interactive web design',
    text: [
      `We designed a multi-story building layout to enhance the user experience. As users progressed
      through the quiz, they scrolled down the site, creating a sense of descending to lower floors.`,
      `This unique design feature added an immersive element to the user journey, making the quiz more
      engaging and memorable.`,
    ],
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Choose an appropriate color scheme and typography for a\u00A0visually appealing and\u00A0cohesive design',
    text: [
      `We selected a colorful and\u00A0cartoonish design approach, assigning a separate color for each scenario
      to differentiate plots. Our specialists chose the Mitr font for its modern aesthetic and readability.`,
      `The vibrant colors and consistent typography contributed to the\u00A0quiz's visual appeal
      and user-friendly design.`,
    ],
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Ensure the quiz\'s compatibility with mobile devices',
    text: [
      `The Onix team implemented an\u00A0adaptive design strategy to make the quiz accessible
      and user-friendly on various mobile devices.`,
      `This involved optimizing the\u00A0layout and user interface for smaller screens while
      maintaining the quiz's visual richness and\u00A0interactive elements.`,
    ],
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
];

export default ourSolutionsData;
