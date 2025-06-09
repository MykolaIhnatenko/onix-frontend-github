import ProcessBlock from '../../../components/ProcessBlock/ProcessBlock';
import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { processAccordionData, processImages } from '../data/processData';

import styles from '../sass/solutionBlock.module.scss';

function SpaceNewsSolutionsBlock() {
  return (
    <section className={`${styles.section} ${styles.spaceScope}`}>
      <PageContainer>
        <VRARContent>
          <MainTitle>Our solutions</MainTitle>
        </VRARContent>
        <VRARContent>
          <div className={styles.textContainer}>
            <ContentText tag="p" className={styles.firstText}>
              A few critical design killer features of the hero section including glitch transition,
              futuristic modern aesthetics, black and white color scheme, and &quot;Stretch Pro&quot; font
              selection played a vital role in addressing these challenges.
            </ContentText>
            <ContentText tag="p" className={styles.secondText}>
              Together, they overcame the obstacles and elevated the space news portal&apos;s hero section
              to a visually captivating and immersive experience, setting it apart as a standout
              destination for space enthusiasts and curious minds.
            </ContentText>
            <MainTitle
              tag="p"
              className={styles.textBottom}
            >
              Summing up all our work for the product, these are our leading solutions:
            </MainTitle>
          </div>
        </VRARContent>
      </PageContainer>
      <VRARContent>
        <ProcessBlock
          data={processAccordionData}
          imagesData={processImages}
          withoutPrefix
          classes={{
            container: '!py-0',
            textContainer: 'pb-10 screen-lg:pb-5 screen-md:pb-0',
            imageContainer: '!h-[516px]',
            item: '!border-color-black',
            accordionTitle: 'min-lg:!py-[30px]',
            list: 'screen-md:!px-[15px] min-md:!pl-[50px] min-lg:!pl-[70px]',
            img: 'screen-lg:h-[664px]',
            accordionBlock: 'min-xl:min-h-0',
          }}
        />
      </VRARContent>
    </section>
  );
}

export default SpaceNewsSolutionsBlock;
