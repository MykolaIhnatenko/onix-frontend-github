import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { ICardSliderItem } from '../../../components/CardSlider/interfaces/ICardSlider';

import styles from '../../../components/CardSlider/sass/cardSlider.module.scss';

const machineLCardSliderData: ICardSliderItem[] = [
  {
    id: '01',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        ML Consulting
      </MainTitle>
    ),
    text: (
      <>
        <ContentText tag="p" className={`${styles.cardText} ${styles.first}`}>
          Ready to harness the power of ML technology for your business but unsure where to start?
          Look no further! All you need is your dataset ready, and we&apos;ll show you how to put it to work!
        </ContentText>
        <ContentText tag="p" className={styles.cardText}>
          After an in-depth analysis of your business goals, our experts will demonstrate how you
          can use ML in your industry to meet your concrete needs.
        </ContentText>
      </>
    ),
  },
  {
    id: '02',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        ML Development
      </MainTitle>
    ),
    text: (
      <>
        <ContentText tag="p" className={`${styles.cardText} ${styles.first}`}>
          Onix specializes in custom machine learning solutions development. We understand how crucial
          it is to gather the right data, prepare it properly, and choose the best model.
        </ContentText>
        <ContentText tag="p" className={styles.cardText}>
          That&apos;s why our ML experts will be with you every step of the way, from planning and testing
          to launching and keeping things running smoothly.
        </ContentText>
      </>
    ),
  },
  {
    id: '03',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        Research and Technological Dev
      </MainTitle>
    ),
    text: (
      <>
        <ContentText tag="p" className={`${styles.cardText} ${styles.first}`}>
          Want to stay ahead of the curve? That’s where our R&D service comes in handy. Our team
          is here to help you innovate and succeed in today&apos;s ever-changing world.
        </ContentText>
        <ContentText tag="p" className={styles.cardText}>
          We assist you in selecting the best-fit technology and devices for your ML product, ensuring
          long-term profitability and keeping you ahead in the competitive race.
        </ContentText>
      </>
    ),
  },
  {
    id: '04',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        Maintenance & Support
      </MainTitle>
    ),
    text: (
      <>
        <ContentText tag="p" className={`${styles.cardText} ${styles.first}`}>
          At Onix, we&apos;re dedicated to the long-term success of your ML solution. Our maintenance and
          support services keep your products running smoothly even after development.
        </ContentText>
        <ContentText tag="p" className={styles.cardText}>
          This involves upgrading your ML products based on real user feedback, fine-tuning
          performance,
          {' '}
          <span className={styles.inlineBlock}>and adapting</span>
          {' '}
          to meet your evolving needs for lasting success.
        </ContentText>
      </>
    ),
  },
  {
    id: '05',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        Prototyping and Proof of Concept
      </MainTitle>
    ),
    text: (
      // <ContentText className={styles.cardText}>
      //   We offer ML integration as part of our development services, allowing you to integrate
      //   ML features into your existing applications seamlessly. Our developers will help you
      //   securely connect data sources and select the best-suited ML model for your requirements.
      //   We ensure the ML models&apos; accuracy and the integrated system&apos;s scalability.
      // </ContentText>
      <>
        <ContentText tag="p" className={`${styles.cardText} ${styles.first}`}>
          Before any investment commitment, we start by exploring your product idea. Our experts
          will create a demo of your ML solution within just a week, giving you a quick glimpse
          into your project&apos;s potential.
        </ContentText>
        <ContentText tag="p" className={styles.cardText}>
          We’ll validate key features and assess
          {' '}
          <span className={styles.inlineBlock}>the feasibility</span>
          {' '}
          of your concept. This step comes
          before full-scale development, giving you a strong starting point for your project.
        </ContentText>
      </>
    ),
  },
  {
    id: '06',
    title: (
      <MainTitle tag="h3" className={styles.cardTitle}>
        ML Integration
      </MainTitle>
    ),
    text: (
      <ContentText tag="p" className={styles.cardText}>
        We offer ML integration as part of our development services, allowing you to integrate
        ML features into your existing applications seamlessly. Our developers will help you
        securely connect data sources and select the best-suited ML model for your requirements.
        We ensure the ML models&apos; accuracy and the integrated system&apos;s scalability.
      </ContentText>
      // <>
      //   <ContentText className={`${styles.cardText} ${styles.first}`}>
      //     Before any investment commitment, we start by exploring your product idea. Our experts
      //     will create a demo of your ML solution within just a week, giving you a quick glimpse
      //     into your project&apos;s potential.
      //   </ContentText>
      //   <ContentText className={styles.cardText}>
      //     We’ll validate key features and assess
      //     {' '}
      //     <span className={styles.inlineBlock}>the feasibility</span>
      //     {' '}
      //     of your concept. This step comes
      //     before full-scale development, giving you a strong starting point for your project.
      //   </ContentText>
      // </>
    ),
  },
];

export default machineLCardSliderData;
