import Image1 from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolution1@2x.webp';
import Image2 from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolution2@2x.webp';
import Image3 from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolution3@2x.webp';
import Image4 from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolution4@2x.webp';
import ImageTablet1
  from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolutionTablet1@2x.webp';
import ImageTablet2
  from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolutionTablet2@2x.webp';
import ImageTablet3
  from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolutionTablet3@2x.webp';
import ImageTablet4
  from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolutionTablet4@2x.webp';
import ImageMobile1
  from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolutionMobile1@2x.webp';
import ImageMobile2
  from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolutionMobile2@2x.webp';
import ImageMobile3
  from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolutionMobile3@2x.webp';
import ImageMobile4
  from '@/images/arCarShowroomCase/ourSolutionVirtualBlock/img_ourSolutionMobile4@2x.webp';
import ItemList from 'components/ItemList/ItemList';

const ourSolutionVirtualData = [
  {
    id: 1,
    img: Image1,
    imgTablet: ImageTablet1,
    imgMobile: ImageMobile1,
    title: 'Performance Optimization Techniques',
    text: (
      <ItemList
        list={[
          `Onix tackled the challenge of high-detail models by reducing the polygon count,
          ensuring the cars looked stunning but were easier on device resources.`,

          `To maintain visual fidelity, they carefully optimized the materials and shaders, using physically
          based rendering (PBR) to keep reflections and lighting as true-to-life as possible.`,

          `Pre-calculated lighting for static elements ensured smoother performance, crucial
          for seamless mobile AR experiences.`,
        ]}
        marginBottomAbsent
      />
    ),
  },
  {
    id: 2,
    img: Image2,
    imgTablet: ImageTablet2,
    imgMobile: ImageMobile2,
    title: 'Crafting a Simple Yet Sophisticated Interface',
    text: (
      <ItemList
        list={[
          `Onix created a minimalist, high-contrast interface that guided users naturally through the showroom.
          With simple icons for actions like opening doors, changing colors, or starting a virtual drive,
          they ensured the experience was intuitive from the start. “The key to a successful XR interface
          is simplicity,” said Makarevich. “Users shouldn’t have to think about how to interact; the design
          should guide them naturally.`,
        ]}
        marginBottomAbsent
      />
    ),
  },
  {
    id: 3,
    img: Image3,
    imgTablet: ImageTablet3,
    imgMobile: ImageMobile3,
    title: 'Developing Key Interactive Elements',
    text: (
      <ItemList
        list={[
          `The showroom came alive with interactivity. Customers could open car doors, sit in the driver’s seat,
          explore the interior, and see how the car would look in their choice of color. The most ambitious
          feature, though, was the 360-degree projection. Customers could enter the car, start a virtual drive,
          and watch as the real-world showroom around them transformed into a simulated driving experience.`,
        ]}
        marginBottomAbsent
      />
    ),
  },
  {
    id: 4,
    img: Image4,
    imgTablet: ImageTablet4,
    imgMobile: ImageMobile4,
    title: 'User Testing and Refinement',
    text: (
      <ItemList
        list={[
          `Onix conducted multiple rounds of user testing to fine-tune every aspect of the showroom. Users were
          encouraged to explore, customize, and interact freely with the cars, providing valuable feedback that
          led to refinements. Adjustments were made to the UI, 3D models were enhanced,
          and interactions were perfected.`,
        ]}
        marginBottomAbsent
      />
    ),
  },
];

export default ourSolutionVirtualData;
