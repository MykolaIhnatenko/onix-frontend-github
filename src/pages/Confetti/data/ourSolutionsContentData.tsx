import OurSolutionsImg1 from '@/images/confettiPage/solutionSection/img_card1_desk@2x.webp';
import OurSolutionsImg2 from '@/images/confettiPage/solutionSection/img_card2_desk@2x.webp';
import OurSolutionsImg3 from '@/images/confettiPage/solutionSection/img_card3_desk@2x.webp';
import OurSolutionsImg4 from '@/images/confettiPage/solutionSection/img_card4_desk@2x.webp';
import OurSolutionsImg5 from '@/images/confettiPage/solutionSection/img_card5_desk@2x.webp';
import OurSolutionsImgTablet1 from '@/images/confettiPage/solutionSection/img_card1_tablet@2x.webp';
import OurSolutionsImgTablet2 from '@/images/confettiPage/solutionSection/img_card2_tablet@2x.webp';
import OurSolutionsImgTablet3 from '@/images/confettiPage/solutionSection/img_card3_tablet@2x.webp';
import OurSolutionsImgTablet4 from '@/images/confettiPage/solutionSection/img_card4_tablet@2x.webp';
import OurSolutionsImgTablet5 from '@/images/confettiPage/solutionSection/img_card5_tablet@2x.webp';
import OurSolutionsImgMobile1 from '@/images/confettiPage/solutionSection/img_card1_mobile@2x.webp';
import OurSolutionsImgMobile2 from '@/images/confettiPage/solutionSection/img_card2_mobile@2x.webp';
import OurSolutionsImgMobile3 from '@/images/confettiPage/solutionSection/img_card3_mobile@2x.webp';
import OurSolutionsImgMobile4 from '@/images/confettiPage/solutionSection/img_card4_mobile@2x.webp';
import OurSolutionsImgMobile5 from '@/images/confettiPage/solutionSection/img_card5_mobile@2x.webp';
import { IOurSolutionsData } from 'components/OurSolutions/interfaces/IOurSolutions';
import VRARContent from 'components/VRARContent/VRARContent';
import ContentText from 'components/ContentText/ContentText';

const ourSolutionsData: IOurSolutionsData[] = [
  {
    id: 1,
    title: 'User-friendly interface',
    text: 'We created an interface that is easy to navigate and use, regardless of a user\'s technical background.',
    img: OurSolutionsImg1,
    imgTablet: OurSolutionsImgTablet1,
    imgMobile: OurSolutionsImgMobile1,
  },
  {
    id: 2,
    title: 'Personalization',
    text: 'We designed functionality to allow users customize their experience and tailor content to their interests.',
    img: OurSolutionsImg2,
    imgTablet: OurSolutionsImgTablet2,
    imgMobile: OurSolutionsImgMobile2,
  },
  {
    id: 3,
    title: 'Real-time updates',
    text: [
      `We developed functionality that provides users with the most up-to-date information and keeps
      them engaged with the app.`,
      `To achieve these features, our team came up with solutions such as using a clean and modern
      design, implementing Metamask algorithms to provide personalized content recommendations,
      and integrating real-time data feeds.`,
    ],
    img: OurSolutionsImg3,
    imgTablet: OurSolutionsImgTablet3,
    imgMobile: OurSolutionsImgMobile3,
  },
  {
    id: 4,
    title: 'Auth functionality',
    text: `Web3-react provides a provider system that abstracts the underlying blockchain infrastructure,
    making it easier to work with the Ethereum network.`,
    img: OurSolutionsImg4,
    imgTablet: OurSolutionsImgTablet4,
    imgMobile: OurSolutionsImgMobile4,
  },
  {
    id: 4,
    title: 'Borrow, Loan and Buy NFT functionality',
    text: (
      <>
        <VRARContent>
          <ContentText tag="p" marginAbsent className="!mb-[20px] screen-md:!mb-[15px]">
            To interact with the Ethereum network, we used Ethers.js. Ethers is a JavaScript
            library that works with Ethereum and provides a high-level API for sending transactions.
          </ContentText>
        </VRARContent>
        <VRARContent>
          <ContentText tag="div" marginAbsent>
            <ul>
              <li className="flex gap-[10px] pb-[5px]">
                <p className="block">﹂</p>
                <p>
                  For the
                  {' '}
                  <span className="font-semibold">Borrow and Loan functionality,</span>
                  {' '}
                  we created smart contracts that manage the
                  lending and borrowing of NFTs. The smart contracts will define the rules for lending and borrowing.
                </p>
              </li>
              <li className="flex gap-[10px]">
                <p className="block">﹂</p>
                <p>
                  For the
                  {' '}
                  <span className="font-semibold">Buy NFT functionality,</span>
                  {' '}
                  we created our own NFT marketplace. To create an NFT marketplace,
                  we use smart contracts to manage the listing and buying of NFTs.
                </p>
              </li>
            </ul>
          </ContentText>
        </VRARContent>
      </>
    ),
    img: OurSolutionsImg5,
    imgTablet: OurSolutionsImgTablet5,
    imgMobile: OurSolutionsImgMobile5,
  },
];

export default ourSolutionsData;
