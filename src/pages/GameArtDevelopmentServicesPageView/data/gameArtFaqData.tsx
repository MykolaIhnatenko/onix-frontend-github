import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ContentText from '../../../components/ContentText/ContentText';
import { textStyle } from 'components/FAQBlock/tailwindStyle/tailwindStyle';

const gameArtFaqData: IAccordionData[] = [
  {
    id: 1,
    title: 'What types of 3D game art can your team create?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Our team of skilled artists and developers can create various 3D game art assets, including
          characters, props, environments, vehicles, and creatures. We also specialize in texturing,
          rigging, animation, lighting, and rendering, ensuring a comprehensive solution for all
          your game art needs. Our expertise spans various art styles and genres, allowing us to
          cater to diverse project requirements.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How do you ensure the quality and optimization of the 3D game art assets?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          We leverage advanced software, tools, and industry best practices to create high-quality,
          optimized 3D game art assets. Our team carefully designs and optimizes each asset to
          maintain performance efficiency without sacrificing visual quality. We also generate
          Level of Detail (LOD) models and employ efficient texture usage to ensure seamless
          integration with your game&apos;s engine and platform.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Can you work with specific game engines or platforms?',
    content: (
      <div>
        <ContentText tag="p" className={textStyle}>
          Our team has experience working with various game engines, such as Unity, Unreal
          Engine, and Godot, as well as different platforms, including PC, consoles, and
          mobile devices. We tailor our approach and optimize the assets accordingly,
          ensuring compatibility and seamless integration with your chosen engine and
          platform. During the initial consultation, please inform us about your preferred
          game engine and target platform so we can effectively accommodate your requirements.
        </ContentText>
      </div>
    ),
  },
];

export default gameArtFaqData;
