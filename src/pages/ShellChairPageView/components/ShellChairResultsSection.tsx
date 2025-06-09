import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/shellChairResultsSection.module.scss';

function ShellChairResultsSection() {
  return (
    <section className={styles.resultsSection}>
      <PageContainer className={styles.container}>
        <VRARContent>
          <MainTitle className={styles.title}>
            Results
          </MainTitle>
        </VRARContent>
        <VRARContent>
          <MainTitle tag="p" className={styles.subtitle}>
            At Onix, our commitment to excellence is a promise and a proven track record. In this case study,
            our team harnessed the power of Webflow, combining it with user-centric design principles and
            data-driven decisions to create an exceptional e-commerce landing page.
          </MainTitle>
        </VRARContent>
        <div className={styles.textBlock}>
          <VRARContent className={styles.item}>
            <ContentText tag="p" className={styles.text}>
              Leveraging Webflow’s capabilities, our team crafted a visually stunning website that captivates
              visitors from the moment they land on the page. Through animation and strategically placed interactive
              elements, users experience seamless browsing, enhancing engagement and encouraging exploration
              of products.
            </ContentText>
          </VRARContent>
          <VRARContent className={styles.item}>
            <ContentText tag="p" className={styles.text}>
              Our approach was rooted in data-driven decisions. We gained valuable insights into customer
              preferences, behaviors, and expectations through comprehensive market research and user analysis.
              This data guided our design choices, ensuring that every element on the website was tailored to
              meet the specific needs of our audience.
            </ContentText>
          </VRARContent>
        </div>
      </PageContainer>
    </section>
  );
}

export default ShellChairResultsSection;
