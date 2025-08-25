import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import HoverAccordion from '../../../components/HoverAccordion/HoverAccordion';
import DragSlider from 'components/DragSlider/DragSlider';
import VRARContent from '../../../components/VRARContent/VRARContent';
import costHoverAccordionSliderData from '../data/costHoverAccordionSliderData';
import costHoverAccordionData from '../data/costHoverAccordionData';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';

import ChallengesBlockBg from '@/images/costOptimizationCaseStudyPageView/challengesBlock/img_challengesBlockBg@2x.webp';
import ChallengesBlockTabletBg from '@/images/costOptimizationCaseStudyPageView/challengesBlock/img_challengesBlockTabletBg@2x.webp';
import ChallengesBlockMobileBg from '@/images/costOptimizationCaseStudyPageView/challengesBlock/img_challengesBlockMobileBg@2x.webp';
import styles from '../sass/challengesBlock.module.scss';

function ChallengesBlock() {
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: ChallengesBlockBg,
    };
    if (isMDDevice) {
      bg.background = ChallengesBlockTabletBg;
    } else if (isXSDevice || isSMDevice) {
      bg.background = ChallengesBlockMobileBg;
    }
    return bg;
  };

  return (
    <div className={styles.blockContainer}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <div className={styles.container}>
        <PageContainer className={styles.textContainer}>
          <VRARContent>
            <MainTitle className={styles.title}>
              Challenges
            </MainTitle>
          </VRARContent>
          <VRARContent>
            <ContentText className={styles.text} tag="p">
              Our client had a private task management system with access by invite.
              The infrastructure consisted of four sites:
            </ContentText>
          </VRARContent>
        </PageContainer>
        <VRARContent>
          {isMobile ? (
            <DragSlider
              data={costHoverAccordionSliderData}
              withoutDots
            />
          ) : (
            <HoverAccordion
              data={costHoverAccordionData}
              whiteVariant
            />
          )}
        </VRARContent>
        <VRARContent className={styles.bottomTextContainer}>
          <MainTitle className={styles.bottomText} tag="p">
            When the client contacted Onix, the combined infrastructure was consuming AWS resources
            at a monthly cost of $686. The application had just over 2,000 registered users.
          </MainTitle>
        </VRARContent>
      </div>
    </div>
  );
}
export default ChallengesBlock;
