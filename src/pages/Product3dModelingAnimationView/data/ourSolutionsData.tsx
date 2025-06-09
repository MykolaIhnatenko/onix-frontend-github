import OurSolutionsImg1 from '../../../assets/images/product3d/img_Result1.webp';
import OurSolutionsImgTablet1 from '../../../assets/images/product3d/img_Result1Tablet.webp';
import OurSolutionsImgMobile1 from '../../../assets/images/product3d/img_Result1Mobile.webp';
import OurSolutionsImg2 from '../../../assets/images/product3d/img_Result2.webp';
import OurSolutionsImgTablet2 from '../../../assets/images/product3d/img_Result2Tablet.webp';
import OurSolutionsImgMobile2 from '../../../assets/images/product3d/img_Result2Mobile.webp';
import OurSolutionsImg3 from '../../../assets/images/product3d/img_Result3.webp';
import OurSolutionsImgTablet3 from '../../../assets/images/product3d/img_Result3Tablet.webp';
import OurSolutionsImgMobile3 from '../../../assets/images/product3d/img_Result3Mobile.webp';
import OurSolutionsImg4 from '../../../assets/images/product3d/img_Result4.webp';
import OurSolutionsImgTablet4 from '../../../assets/images/product3d/img_Result4Tablet.webp';
import OurSolutionsImgMobile4 from '../../../assets/images/product3d/img_Result4Mobile.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';
import ItemText from 'components/ItemText/ItemText';
import ItemList from 'components/ItemList/ItemList';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: '3D rendering and modeling',
    text: (
      <>
        <ItemText
          content={`We delivered 3D rendering and modeling services based on the existing light design,
            creating precise digital representations for various purposes, including visualization and marketing.`}
          withAnimate
        />
        <ItemList
          list={[
            `Analysis of existing light design. This\u00A0involved studying the light to gain a thorough understanding
            of the product’s design specifications, dimensions, and features.`,
            `3D modeling. The Onix team thoroughly recreated each component and detail of\u00A0the lights in a virtual
            environment, ensuring accuracy and fidelity to the original design.`,
            `Lighting and rendering. With models and\u00A0textures set, the team added virtual lights, adjusted
            parameters like intensity and color, and refined shadows and reflections for a realistic look.`,
          ]}
          withAnimate
          marginBottomAbsent
        />
      </>
    ),
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Selection of realistic textures',
    text: (
      <>
        <ItemText
          content={`The Onix team ensured the proper selection of realistic textures to\u00A0enhance the visual fidelity
            of the lights in their 3D modeling and rendering process.`}
          withAnimate
        />
        <ItemList
          list={[
            'Material analysis. We identified the lights\' components and their material composition.',
            'Texture research. The team curated a\u00A0library of high-quality textures matching each material.',
            'Texture mapping. Experts applied surface textures like metal, glass, and\u00A0rubber to the 3D models.',
            `Fine-tuning. We adjusted parameters like color, roughness, specular level, and bump mapping for realistic
            lighting effects.`,
            `Optimization for performance. We\u00A0balanced visual quality with rendering efficiency to maintain realism
            without sacrificing performance.`,
          ]}
          withAnimate
          marginBottomAbsent
        />
      </>
    ),
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Captivating 3D video for our client\'s website',
    text: (
      <>
        <ItemText
          content={`The team developed a captivating 3D animation to bring the product to life.
            This involved crafting dynamic sequences that showcased the light's durability
            and strength in action.`}
          withAnimate
        />
        <ItemList
          list={[
            `Storyboarding. We outlined the key scenes, transitions, and visual elements that effectively showcase
            the\u00A0lights and their features.`,
            `Animation production. The team animated the lights based on the storyboard, showcasing their functionality
            in different scenarios and environments.`,
            `Visual effects and enhancement. We\u00A0added lighting, particle simulations, and camera movements
            for\u00A0enhanced visual appeal, depth, and\u00A0realism in the animation, boosting engagement.`,
          ]}
          withAnimate
          marginBottomAbsent
        />
      </>
    ),
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Scene conceptualization',
    text: (
      <>
        <ItemText
          content={`We proposed to create a scene that would go beyond conventional approaches
            and utilize visual storytelling techniques to convey a compelling message about
            the product's exceptional quality.`}
          withAnimate
        />
        <ItemList
          list={[
            `Concept development. The team began by brainstorming concepts that would effectively showcase
            the product's durability and strength in a visually striking manner.`,
            `Scene visualization. We focused on creating a dynamic and engaging sequence to capture the audience's
            attention and leave a lasting impression.`,
            `Visual metaphor. The team used a visual metaphor of the ground crumbling beneath the flashlight,
            symbolizing its sturdiness and resilience, compellingly showcasing exceptional quality.`,
          ]}
          withAnimate
          marginBottomAbsent
        />
      </>
    ),
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
];

export default ourSolutionsData;
