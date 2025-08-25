import { useMemo } from 'react';

import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import IndustriesResultsItem from './CrossPlatformResultsItem';
import resultsData from '../data/resultsData.json';
import useWindowSize from '../../../hook/useWindowSize';
import { MD_DEVICE, XL_DEVICE } from '../../../constants/constants';
import CallToActionComponent from '../../../components/CallToActionBlock/CallToActionComponent';
import ImageComponent from '../../../components/Image/Image';

import CrossPlatformCTAIdeasMobile from '@/images/crossplatformDesign/img_cta_cross_ideas_mobile@2x.webp';
import CrossPlatformCTAIdeasTablet from '@/images/crossplatformDesign/img_cta_cross_ideas_tablets@2x.webp';
import CrossPlatformCTAIdeas from '@/images/crossplatformDesign/img_cta_cross_ideas@2x.webp';
import styles from '../sass/CrossPlatformResultsSection.module.scss';

function CrossPlatformResultsSection() {
  const { width } = useWindowSize();
  const background = useMemo(() => {
    if (width < MD_DEVICE) {
      return CrossPlatformCTAIdeasMobile;
    }
    if (width > XL_DEVICE) {
      return CrossPlatformCTAIdeas;
    }

    return CrossPlatformCTAIdeasTablet;
  }, [width]);

  return (
    <section className={styles.resultsSection}>
      <div className={styles.background}>
        <ImageComponent
          src={background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          We stay up-to-date with the latest technologies and industry trends to provide you
          with cutting-edge solutions that stay ahead of the competition.
        </MainTitle>
        <ul className={styles.items}>
          {resultsData.map(({ id, title, text }) => (
            <IndustriesResultsItem
              key={id}
              id={id}
              title={title}
              text={text}
            />
          ))}
        </ul>
      </PageContainer>
      <CallToActionComponent
        withButton
        title="What is your cross-platform app idea?"
        btnText="ASK for a consultation"
        classes={{
          cta: `!bg-transparent !p-[80px_15px] min-sm:!p-[80px_30px] 
            min-md:!p-[120px_30px] min-lg:!pt-[120px] min-lg:!pb-[160px]`,
          title: `!pb-[30px] !text-[25px] !leading-[35px] 
            min-md:!text-[36px] min-md:!leading-[46px] min-md:!pb-[40px] 
            min-lg:!max-w-[1080px] min-lg:!text-[40px] min-lg:!leading-[56px]`,
        }}
      />
    </section>
  );
}

export default CrossPlatformResultsSection;
