import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import { ISolutionTableData } from '../interfaces/ISolutionTable';

import styles from '../sass/solutionTable.module.scss';

const solutionTableData: ISolutionTableData = {
  title: <MainTitle tag="h2" className={styles.mainTitle}>What our process looks like</MainTitle>,
  subtitle: (
    <ContentText tag="p" className={styles.subtitle}>
      Our branding design process is carefully crafted to ensure a comprehensive and
      tailored approach to meet each client&apos;s unique needs.
    </ContentText>),
  rows: [
    {
      id: 1,
      title: (
        <div className={styles.titleBlock}>
          <MainTitle tag="div" className={styles.number}>01</MainTitle>
          <div className={styles.titleTextContainer}>
            <MainTitle tag="h3" className={styles.titleText}>Initial consultation</MainTitle>
            <MainTitle tag="p" className={styles.titleTime}>[  1 day  ]</MainTitle>
          </div>
        </div>
      ),
      content: (
        <ContentText tag="p" className={styles.textContent}>
          We begin by understanding your business, target audience, branding vision, and goals.
          <span className={styles.padding} />
          Through in-depth discussion, we gain valuable insights that guide the branding design process.
        </ContentText>
      ),
    },
    {
      id: 2,
      title: (
        <div className={styles.titleBlock}>
          <MainTitle tag="div" className={styles.number}>02</MainTitle>
          <div className={styles.titleTextContainer}>
            <MainTitle tag="h3" className={styles.titleText}>Analysis and research</MainTitle>
            <MainTitle tag="p" className={styles.titleTime}>[ 2 - 3 days ]</MainTitle>
          </div>
        </div>
      ),
      content: (
        <ContentText tag="p" className={styles.textContent}>
          Our experienced designers conduct thorough research to develop a comprehensive understanding
          of the brand&apos;s purpose, target audience, market trends, and competitors to lay the foundation
          for effective brand development guided by data-driven insights.
        </ContentText>
      ),
    },
    {
      id: 3,
      title: (
        <div className={styles.titleBlock}>
          <MainTitle tag="div" className={styles.number}>03</MainTitle>
          <div className={styles.titleTextContainer}>
            <MainTitle tag="h3" className={styles.titleText}>Design concept development</MainTitle>
            <MainTitle tag="p" className={styles.titleTime}>[ 2 weeks ]</MainTitle>
          </div>
        </div>
      ),
      content: (
        <ContentText tag="p" className={styles.textContent}>
          Through brainstorming and creating mood boards, we develop a design concept that includes the logo,
          color palette, typography, and other visual elements.
          <span className={styles.padding} />
          We aim to capture your brand&apos;s essence and
          create visuals that deeply resonate with your target audience.
        </ContentText>
      ),
    },
    {
      id: 4,
      title: (
        <div className={styles.titleBlock}>
          <MainTitle tag="div" className={styles.number}>04</MainTitle>
          <div className={styles.titleTextContainer}>
            <MainTitle tag="h3" className={styles.titleText}>Iteration and refinement</MainTitle>
            <MainTitle tag="p" className={styles.titleTime}>[ 2 - 3 days ]</MainTitle>
          </div>
        </div>
      ),
      content: (
        <ContentText tag="p" className={styles.textContent}>
          We collaborate closely with you throughout the process, seeking your feedback and making
          necessary iterations to ensure the final design meets your expectations and aligns with your brand vision.
        </ContentText>
      ),
    },
    {
      id: 5,
      title: (
        <div className={styles.titleBlock}>
          <MainTitle tag="div" className={styles.number}>05</MainTitle>
          <div className={styles.titleTextContainer}>
            <MainTitle tag="h3" className={styles.titleText}>Final deliverables</MainTitle>
            <MainTitle tag="p" className={styles.titleTime}>[ 2 days ]</MainTitle>
          </div>
        </div>
      ),
      content: (
        <ContentText tag="p" className={styles.textContent}>
          Once the branding design is finalized, we provide you with all the necessary files and assets
          for your brand identity. These include high-resolution logos, brand guidelines, and design
          files for easy implementation across various platforms.
        </ContentText>
      ),
    },
  ],
};

export default solutionTableData;
