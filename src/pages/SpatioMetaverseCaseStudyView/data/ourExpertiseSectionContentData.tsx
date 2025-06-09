import OurExpertie1 from '@/images/spatio/ourExpertise/img_our_expertise1.webp';
import OurExpertie2 from '@/images/spatio/ourExpertise/img_our_expertise2.webp';
import OurExpertie3 from '@/images/spatio/ourExpertise/img_our_expertise3.webp';
import OurExpertie4 from '@/images/spatio/ourExpertise/img_our_expertise4.webp';
import OurExpertie5 from '@/images/spatio/ourExpertise/img_our_expertise5.webp';
import OurExpertie6 from '@/images/spatio/ourExpertise/img_our_expertise6.webp';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';

const ourExpertiseSectionContentData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Conceptualization',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie1}
        imageAlt="expertise-image"
        contentReverse
      >
        <ItemText
          content={[
            'Define objectives, user personas, and narrative.',
            'Deliverables: Detailed concept documentation and storyboards.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Art development',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie2}
        imageAlt="expertise-image"
        contentReverse
      >
        <ItemText
          content={[
            'Create visual concepts and mood boards.',
            'Deliverables: Refined art concepts and visual sketches.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: '3D modeling',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie3}
        imageAlt="expertise-image"
        contentReverse
      >
        <ItemText
          content={[
            'Establish preliminary spatial layout.',
            'Deliverables: Basic 3D model illustrating spatial arrangement.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Detailing',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie4}
        imageAlt="expertise-image"
        contentReverse
      >
        <ItemText
          content={[
            'Add textures, objects, and interactive elements.',
            'Deliverables: Detailed 3D model with textures and initial interactions.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Finalization',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie5}
        imageAlt="expertise-image"
        contentReverse
      >
        <ItemText
          content={[
            'Test, iterate, and optimize for performance.',
            'Deliverables: Fully polished and optimized metaverse level.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Polishing',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie6}
        imageAlt="expertise-image"
        contentReverse
      >
        <ItemText
          content={[
            'Refine visuals, functionality, and user experience.',
            'Deliverables: Flawlessly executed environment with high polish.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default ourExpertiseSectionContentData;
