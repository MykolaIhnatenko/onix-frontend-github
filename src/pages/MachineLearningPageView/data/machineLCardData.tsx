import AboutCardBlockImage1 from '../../../assets/images/machineLearning/cardBlock/img_cardImage1@2x.webp';
import AboutCardBlockImage2 from '../../../assets/images/machineLearning/cardBlock/img_cardImage2@2x.webp';
import AboutCardBlockImage3 from '../../../assets/images/machineLearning/cardBlock/img_cardImage3@2x.webp';
import AboutCardBlockImage4 from '../../../assets/images/machineLearning/cardBlock/img_cardImage4@2x.webp';
import AboutCardBlockImage5 from '../../../assets/images/machineLearning/cardBlock/img_cardImage5@2x.webp';
import AboutCardBlockImage6 from '../../../assets/images/machineLearning/cardBlock/img_cardImage6@2x.webp';
import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import ItemText from 'components/ItemText/ItemText';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';

const machineLCardData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Increase efficiency and\u00A0speed',
    content: (
      <AccordionItemContentWithImg
        image={AboutCardBlockImage1}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `Machine learning helps to automate tasks that are too time-consuming for
            humans, allowing businesses to complete more work in less time.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Reduce costs',
    content: (
      <AccordionItemContentWithImg
        image={AboutCardBlockImage2}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `Businesses can save money using our AI systems, which
            cut down on manual work and improve efficiency and accuracy.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Improve accuracy',
    content: (
      <AccordionItemContentWithImg
        image={AboutCardBlockImage3}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `Leveraging advanced algorithms and data analysis techniques, we optimize processes,
            make more informed decisions, and identify valuable insights with greater precision.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Achieve data-driven insights faster than ever before',
    content: (
      <AccordionItemContentWithImg
        image={AboutCardBlockImage4}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `Using ML algorithms, businesses can unlock valuable insights from their data,
            gaining new knowledge about customers and products they might have missed.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Get quicker decision-making options',
    content: (
      <AccordionItemContentWithImg
        image={AboutCardBlockImage5}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `ML technology analyzes large datasets faster than humans, offering quicker
            decision-making options. This is crucial for companies needing rapid responses to stay competitive.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Ensure scalability & flexibility',
    content: (
      <AccordionItemContentWithImg
        image={AboutCardBlockImage6}
        imageAlt="Image"
      >
        <ItemText
          content={[
            `Machines quickly handle huge amounts of data, and they&apos;re more
            scalable than hiring extra staff or outsourcing projects abroad.`,
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default machineLCardData;
