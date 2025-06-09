import useBackground from '../../../hook/useBackground';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import webDesignBenefitsData from '../data/webDesignBenefitsData';
import WebDesignBenefitsMobileBg from '@/images/webDesignPage/benefitsBlock/img_web_design_benefits_mobile_bg@2x.webp';
import WebDesignBenefitsTabletBg from '@/images/webDesignPage/benefitsBlock/img_web_design_benefits_tablet_bg@2x.webp';
import WebDesignBenefitsBg from '@/images/webDesignPage/benefitsBlock/img_web_design_benefits_bg@2x.webp';
import AccordionBlack from 'components/AccordionBlack/AccordionBlack';

import styles from '../sass/webDesignBenefits.module.scss';

function WebDesignBenefits() {
  const background = useBackground(WebDesignBenefitsBg, WebDesignBenefitsTabletBg, WebDesignBenefitsMobileBg);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        {background && (
          <div className={styles.background}>
            <ImageComponent
              src={background}
              alt="background"
            />
          </div>
        )}
        <PageContainer className={styles.content}>
          <MainTitle className={styles.title}>
            Benefits of Offshore
            <br />
            {' '}
            Web Development
          </MainTitle>
          <ContentText tag="p" className={styles.text}>
            Offshore web development can offer many advantages to businesses and
            <br />
            {' '}
            organizations of all sizes. Here are a few reasons why you might consider
            <br />
            {' '}
            offshore web development:
          </ContentText>
        </PageContainer>
      </div>
      <PageContainer className={styles.accordionContainer}>
        <AccordionBlack
          data={webDesignBenefitsData}
          activeFirst
          smallerTitleText
          classes={{
            accordionItemTitle: '!px-0 screen-md:!px-[15px]',
            accordionItemContent: 'screen-lg:!px-0 screen-md:!px-[15px]',
          }}
        />
      </PageContainer>
    </div>
  );
}

export default WebDesignBenefits;
