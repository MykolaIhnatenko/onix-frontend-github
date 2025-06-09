import { IUsabilityIncreaseData } from '../interfaces/IUsabilityIncreaseBlock';
import Increase1Card1 from '../../../assets/images/usabilityTestingPage/increaseBlock/img_Increase1Card1@2x.webp';
import Increase1Card2 from '../../../assets/images/usabilityTestingPage/increaseBlock/img_Increase1Card2@2x.webp';
import Increase2Card1 from '../../../assets/images/usabilityTestingPage/increaseBlock/img_Increase2Card1@2x.webp';
import Increase2Card2 from '../../../assets/images/usabilityTestingPage/increaseBlock/img_Increase2Card2@2x.webp';
import Increase1Card1Mobile from '../../../assets/images/usabilityTestingPage/increaseBlock/img_Increase1Card1Mobile@2x.webp';
import Increase1Card2Mobile from '../../../assets/images/usabilityTestingPage/increaseBlock/img_Increase1Card2Mobile@2x.webp';
import Increase2Card1Mobile from '../../../assets/images/usabilityTestingPage/increaseBlock/img_Increase2Card1Mobile@2x.webp';
import Increase2Card2Mobile from '../../../assets/images/usabilityTestingPage/increaseBlock/img_Increase2Card2Mobile@2x.webp';

const usabilityIncreaseBlockData: IUsabilityIncreaseData = {
  blockTitle: 'Increase in template usage',
  subText: (
    <>
      Adoric&apos;s transformation from a&nbsp;product where users predominantly created campaigns from
      scratch to one where templates became preferred demonstrated the power of&nbsp;effective usability
      testing and&nbsp;innovative problem-solving.
    </>
  ),
  businessContextBlockData: {
    title: 'Results',
    leftContent: `This case study is an example of how user-centered solutions and\u00A0usability
      testing can enhance the\u00A0user experience of SaaS products,\u00A0ultimately leading
      to\u00A0increased user engagement and\u00A0satisfaction.`,
    rightContent: `Implementing the branding scanner technology proved to be highly effective in resolving
      the\u00A0template relevancy issue. As a\u00A0result of this enhancement, users began to utilize
      the\u00A0templates more frequently, aligning their marketing campaigns with their website's
      branding and\u00A0goals.`,
  },
  data: [
    {
      title: 'Before',
      cards: [
        {
          cardTitle: 'Create blank campaign',
          cardImg: Increase1Card1,
          cardImgMobile: Increase1Card1Mobile,
        },
        {
          cardTitle: 'Choose template',
          cardImg: Increase1Card2,
          cardImgMobile: Increase1Card2Mobile,
        },
      ],
    },
    {
      title: 'After',
      cards: [
        {
          cardTitle: 'Create blank campaign',
          cardImg: Increase2Card1,
          cardImgMobile: Increase2Card1Mobile,
        },
        {
          cardTitle: 'Choose template',
          cardImg: Increase2Card2,
          cardImgMobile: Increase2Card2Mobile,
        },
      ],
    },
  ],
};

export default usabilityIncreaseBlockData;
