import { ReactNode } from 'react';

import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';

import styles from '../sass/whiteNumberSlider.module.scss';

interface IWhiteNumberSliderItem {
  id: number;
  content: ReactNode;
}

const CrossPlatformServicesSliderData: IWhiteNumberSliderItem[] = [
  {
    id: 0,
    content: (
      <div className={styles.card}>
        <MainTitle tag="h3">Custom cross-platform app development</MainTitle>
        <ContentText tag="p" className={styles.card_text}>
          We specialize in developing high-quality cross-platform apps using frameworks like React Native or Flutter.
        </ContentText>
        <ContentText tag="p" className={styles.card_text}>
          Our experienced developers ensure your app runs seamlessly across multiple platforms,
          providing a consistent user experience.
        </ContentText>
        <span className={styles.card_counter}>
          01
        </span>
      </div>
    ),
  },
  {
    id: 1,
    content: (
      <div className={styles.card}>
        <MainTitle tag="h3">Cross-platform app modernization</MainTitle>
        <ContentText tag="p" className={styles.card_text}>
          Onix is a cross-platform design and development company that revitalizes your existing application
          and keeps it up-to-date with the latest technologies and user expectations.
        </ContentText>
        <ContentText tag="p" className={styles.card_text}>
          Our services include code refactoring, UI/UX enhancement, performance optimization,
          feature upgrades, backend integration, and more.
        </ContentText>
        <span className={styles.card_counter}>
          02
        </span>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className={styles.card}>
        <MainTitle tag="h3">Fast MVP development for startups</MainTitle>
        <ContentText tag="p" className={styles.card_text}>
          We understand the importance of speed and agility for startups, and our experienced team helps you
          quickly validate your business idea and get your cross-platform app to market in the shortest possible time.
        </ContentText>
        <span className={styles.card_counter}>
          03
        </span>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className={styles.card}>
        <MainTitle tag="h3">Cross-platform development consulting</MainTitle>
        <ContentText tag="p" className={styles.card_text}>
          Whether you&apos;re starting from scratch or looking to optimize your existing cross-platform solution, our
          consulting services will provide you with valuable insights, best practices, and recommendations to ensure
          a smooth and successful cross-platform development journey.
        </ContentText>
        <span className={styles.card_counter}>
          04
        </span>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className={styles.card}>
        <MainTitle tag="h3">UI/UX design for cross-platform applications</MainTitle>
        <ContentText tag="p" className={styles.card_text}>
          As a cross-platform app design company, we work closely with you to create designs that captivate users,
          enhance their experience, and drive engagement.
        </ContentText>
        <ContentText tag="p" className={styles.card_text}>
          Our UI/UX design solutions align with your brand identity and provide a seamless user experience
          across different platforms.
        </ContentText>
        <span className={styles.card_counter}>
          05
        </span>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className={styles.card}>
        <MainTitle tag="h3">Ongoing maintenance and support</MainTitle>
        <ContentText tag="p" className={styles.card_text}>
          We provide ongoing maintenance and support services to keep your app running smoothly.
        </ContentText>
        <ContentText tag="p" className={styles.card_text}>
          Our team is available to address any issues, implement updates, and provide technical support,
          ensuring that your app remains up-to-date and functional.
        </ContentText>
        <span className={styles.card_counter}>
          06
        </span>
      </div>
    ),
  },
];

export default CrossPlatformServicesSliderData;
