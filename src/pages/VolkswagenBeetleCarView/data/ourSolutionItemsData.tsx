import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/VolkswagenBeetleCarView.module.scss';

const solutionAccordionData = [
  {
    id: 1,
    title: (<h3 className={styles.title}>Brand Consistency</h3>),
    content: (
      <div>
        <ContentText className={`${styles.text} ${styles.paddingText}`} tag="p">
          A style guide was created to ensure that all elements on the page, from color schemes to typography,
          aligned perfectly with Beetle’s brand guidelines. This helped maintain the iconic image while
          introducing modern accents.
        </ContentText>
      </div>
    ),
  },
  {
    id: 2,
    title: (<h3 className={styles.title}>UI elements</h3>),
    content: (
      <div>
        <ContentText className={`${styles.text} ${styles.paddingText}`} tag="p">
          Non-standard grid, animation, and interactive car modules were used to create an immersive user
          experience. Rounded edges of photos and buttons represent the car&apos;s contours, while dynamic
          animation reminds the vehicle&apos;s speed. The aim was to instantly capture attention and engage
          the visitor in exploring more about the Beetle.
        </ContentText>
      </div>
    ),
  },
  {
    id: 3,
    title: (<h3 className={styles.title}>Seamless experience</h3>),
    content: (
      <div>
        <ContentText className={`${styles.text} ${styles.paddingText}`} tag="p">
          Utilizing responsive design principles, the page was created to offer a
          seamless experience across all devices. The mobile-first design was prioritized,
          ensuring design integrity was maintained from smartphone to desktop.
        </ContentText>
      </div>
    ),
  },
  {
    id: 4,
    title: (<h3 className={styles.title}>Content Strategy</h3>),
    content: (
      <div>
        <ContentText className={`${styles.text} ${styles.paddingText}`} tag="p">
          A tiered content structure was adopted to present the most crucial information upfront.
          This allowed for a tailored user journey, avoiding information overload.
        </ContentText>
      </div>
    ),
  },
  {
    id: 5,
    title: (<h3 className={styles.title}>Legal Considerations</h3>),
    content: (
      <div>
        <ContentText className={`${styles.text} ${styles.paddingText}`} tag="p">
          Every asset and piece of content underwent a legal review to ensure it met all
          copyright and branding guidelines. User data collection methods were also verified
          to be GDPR compliant.
        </ContentText>
      </div>
    ),
  },
];

export default solutionAccordionData;
