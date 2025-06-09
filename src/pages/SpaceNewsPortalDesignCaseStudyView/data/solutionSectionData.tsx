import ContentText from '../../../components/ContentText/ContentText';

import styles from '../../MainPage/sass/accordionData.module.scss';

const data = [
  {
    id: 11,
    title: (
      <h3 className="unsetText">
        <span className={styles.numberBlock}>01</span>
        <span>
          Information Overload
        </span>
      </h3>
    ),
    content: (
      <div className={styles.softwareProductDataContainer}>
        <ContentText className={styles.iosText}>
          Space news websites often contain a vast amount of information, and
          balancing providing essential information in the hero section
          without overwhelming users was a substantial challenge.
          Ensuring that the hero section was both informative and concise was a priority.
        </ContentText>
      </div>
    ),
  },
  {
    id: 16,
    title: (
      <>
        <span className={styles.numberBlock}>06</span>
        <span>Content Prioritization</span>
      </>
    ),
    content: (
      <div className={styles.softwareProductDataContainer}>
        <ContentText className={styles.iosText}>
          Selecting the most relevant and attention-grabbing content for the hero section was a challenge.
          The team had to decide what type of content (e.g., breaking news, feature stories, images, videos)
          would most effectively pique user interest.
        </ContentText>
      </div>
    ),
  },
  {
    id: 12,
    title: (
      <>
        <span className={styles.numberBlock}>02</span>
        <span>Audience Engagement</span>
      </>
    ),
    content: (
      <div className={styles.softwareProductDataContainer}>
        <ContentText className={styles.iosText}>
          Capturing and retaining user interest in space-related content can be challenging, given the complexity
          of the subject matter. The design team needed creative ways to engage the audience and make space
          news more accessible and exciting.
        </ContentText>
      </div>
    ),
  },
  {
    id: 17,
    title: (
      <>
        <span className={styles.numberBlock}>07</span>
        <span>Competitive Landscape</span>
      </>
    ),
    content: (
      <div className={styles.softwareProductDataContainer}>
        <ContentText className={styles.iosText}>
          Analyzing and differentiating the space news portal from its competitors was essential.
          The design team needed to identify unique selling points and design elements that would set
          the portal apart in a crowded online space news market.
        </ContentText>
      </div>
    ),
  },
  {
    id: 13,
    title: (
      <>
        <span className={styles.numberBlock}>03</span>
        <span>Responsive Design</span>
      </>
    ),
    content: (
      <div className={styles.softwareProductDataContainer}>
        <ContentText className={styles.iosText}>
          Ensuring that the redesigned hero section would be responsive across various devices and screen sizes
          was a technical challenge. This required meticulous planning and testing to guarantee a seamless user
          experience on desktops, tablets, and mobile devices.
        </ContentText>
      </div>
    ),
  },
  {
    id: 14,
    title: (
      <>
        <span className={styles.numberBlock}>04</span>
        <span>Brand Identity</span>
      </>
    ),
    content: (
      <div className={styles.softwareProductDataContainer}>
        <ContentText className={styles.iosText}>
          The space news portal likely had an existing brand identity, and the design team needed to ensure that
          the new hero section would align with and enhance this identity. Balancing innovation
          with brand consistency was a crucial challenge.
        </ContentText>
      </div>
    ),
  },
  {
    id: 15,
    title: (
      <>
        <span className={styles.numberBlock}>05</span>
        <span>
          Performance Optimization
        </span>
      </>
    ),
    content: (
      <div className={styles.softwareProductDataContainer}>
        <ContentText className={styles.iosText}>
          The hero section often contains multimedia elements, such as high-resolution images and videos.
          Optimizing these elements for fast loading times and minimal impact on website
          performance was a technical hurdle.
        </ContentText>
      </div>
    ),
  },
];

export default data;
