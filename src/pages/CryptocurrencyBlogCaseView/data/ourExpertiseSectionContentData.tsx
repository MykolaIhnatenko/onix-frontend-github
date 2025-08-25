import { IAccordionData } from 'components/AccordionTemplate/interfaces/IAccordion';
import AccordionItemContentWithImg from 'components/AccordionItemContentWithImg/AccordionItemContentWithImg';
import ItemText from 'components/ItemText/ItemText';

import OurExpertie1 from '@/images/cryptocurrencyBlog/ourExpertise/img_1.webp';
import OurExpertie2 from '@/images/cryptocurrencyBlog/ourExpertise/img_2.webp';
import OurExpertie3 from '@/images/cryptocurrencyBlog/ourExpertise/img_3.webp';
import OurExpertie4 from '@/images/cryptocurrencyBlog/ourExpertise/img_4.webp';
import OurExpertie5 from '@/images/cryptocurrencyBlog/ourExpertise/img_5.webp';
import OurExpertie6 from '@/images/cryptocurrencyBlog/ourExpertise/img_6.webp';

const classes = {
  container: '!p-[0_0_30px_70px] !gap-[70px] screen-xl:!px-0 '
    + 'screen-xl:!gap-[30px] screen-md:!gap-[20px] screen-md:!pb-[20px]',
  content: '!max-w-[452px] min-xxxl:!max-w-[770px] screen-xl:!w-full',
};

const ourExpertiseSectionContentData: IAccordionData[] = [
  {
    id: 1,
    number: '01',
    title: 'Tokenization for empowered content creation',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie1}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={[
            'We have created bespoke tokens specifically tailored for the platform. These tokens are '
            + 'engineered using robust blockchain standards such as ERC-20, designed to incentivize content '
            + 'creation, reward engagement, and facilitate value exchange within the platform.',
            'Users can transact, earn, and utilize these tokens within the platform, creating a vibrant economy '
            + 'and fostering a sense of ownership and belonging within the community. Our approach ensures that token '
            + 'interactions are intuitive, efficient, and contribute to a robust and sustainable ecosystem.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'User-friendly token management',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie2}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={[
            'We integrated a user-friendly token import feature to simplify the process of managing ONIX tokens.'
            + ' Users receive 10 free ONIX tokens upon import to encourage them to start using the platform.'
            + ' The restriction of 10 tokens per address ensures fair distribution and avoids misuse.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'MetaMask integration',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie3}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={[
            'MetaMask is a crucial tool in the decentralized ecosystem, enabling users to securely manage '
            + 'their digital assets and interact with decentralized apps. By incorporating MetaMask, '
            + 'users can easily log in, manage their assets, and interact with the decentralized features '
            + 'of our platform. The integration process is smooth, intuitive, and aligns with industry best '
            + 'practices, making it effortless for users to access and utilize our decentralized blog platform.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'Efficient transaction handling',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie4}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={[
            'We effectively mitigated concerns about high gas fees and slow transaction speeds by'
            + ' deploying the application\'s contract on the Polygon network. This strategic move'
            + ' drastically improved the efficiency of transactions, providing users with a '
            + 'cost-effective and seamless experience while interacting with the platform.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Community building and engagement',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie5}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={[
            'Integrating ONIX tokens for adding and liking posts fosters a sense of community and engagement.'
            + ' Users are incentivized to actively contribute and engage with the content, creating a dynamic and'
            + ' lively platform where users can connect and share ideas in cryptocurrency.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Scalability and future growth',
    content: (
      <AccordionItemContentWithImg
        image={OurExpertie6}
        imageAlt="expertise-image"
        contentReverse
        classes={classes}
      >
        <ItemText
          content={[
            'With an eye toward the future, we designed the platform with scalability in mind. As the user'
            + ' base grows and usage increases, our architecture is prepared to handle the additional load'
            + ' seamlessly, ensuring the platform remains efficient, responsive, and accessible to a growing audience.',
          ]}
          marginBottomAbsent
        />
      </AccordionItemContentWithImg>
    ),
  },
];

export default ourExpertiseSectionContentData;
