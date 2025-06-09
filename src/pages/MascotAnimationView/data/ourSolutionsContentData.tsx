import OurSolutionsImg1 from '@/images/MascotAnimation/img_SolutionAnime1.webp';
import OurSolutionsImgTablet1 from '@/images/MascotAnimation/img_SolutionAnime1Tablet.webp';
import OurSolutionsImgMobile1 from '@/images/MascotAnimation/img_SolutionAnime1Mobile.webp';
import OurSolutionsImg2 from '@/images/MascotAnimation/img_SolutionAnime2.webp';
import OurSolutionsImgTablet2 from '@/images/MascotAnimation/img_SolutionAnime2Tablet.webp';
import OurSolutionsImgMobile2 from '@/images/MascotAnimation/img_SolutionAnime2Mobile.webp';
import OurSolutionsImg3 from '@/images/MascotAnimation/img_SolutionAnime3.webp';
import OurSolutionsImgTablet3 from '@/images/MascotAnimation/img_SolutionAnime3Tablet.webp';
import OurSolutionsImgMobile3 from '@/images/MascotAnimation/img_SolutionAnime3Mobile.webp';
import OurSolutionsImg4 from '@/images/MascotAnimation/img_Solution.webp';
import OurSolutionsImgTablet4 from '@/images/MascotAnimation/img_SolutionTablet.webp';
import OurSolutionsImgMobile4 from '@/images/MascotAnimation/img_SolutionMobile.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'Creative Brainstorming',
    text: `We kicked things off with a brainstorming session with the client's team. We needed to understand
      their vision inside and out. What kind of personality should the mascot have? What colors and
      styles reflect their brand? After a lot of sketches and discussions, we had a concept that everyone loved.`,
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
    animationUrl: '/static/3dModels/Donut_idle.glb',
    type: 1,
  },
  {
    id: 2,
    title: 'Detailed 3D Modeling',
    text: `With the concept approved, our designers got to work on the 3D model. Every detail was carefully
      crafted to make the mascot as engaging and friendly as possible. We wanted kids and parents alike
      to fall in love with it at first sight.`,
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
    animationUrl: '/static/3dModels/Donut_flight.glb',
    type: 2,
  },
  {
    id: 3,
    title: 'Lively Animation',
    text: `Our animator then worked their magic, bringing the mascot to life with playful gestures and lively
      movements. The goal was to create an animation loop that was smooth, captivating, and full of
      personality.`,
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
    animationUrl: '/static/3dModels/Donut_flight_rotate.glb',
    type: 3,
  },
  {
    id: 4,
    title: 'Seamless Integration',
    text: `Our developers collaborated closely with Blueberry Bagel's team to ensure the mascot fit perfectly
      into the "Coming Soon" page. We optimized the animation to ensure it loaded quickly and looked great
      on any device.`,
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
];

export default ourSolutionsData;
