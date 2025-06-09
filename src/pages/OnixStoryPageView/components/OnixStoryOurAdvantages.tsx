import { useAppSelector } from '../../../hook/reduxToolkit';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import onixStoryOurAdvantagesData from '../data/onixStoryOurAdvantagesData';
import OnixStoryMobileBgImage from '@/images/onixStory/img_onix_story_mobileBg.webp';

import styles from '../sass/onixStoryOurAdvantages.module.scss';

function OnixStoryOurAdvantages() {
  const { screenSizes: { isSMDevice, isXSDevice } } = useAppSelector((state) => state?.app);

  return (
    <section className={styles.section}>
      {(isSMDevice || isXSDevice) && <ImageComponent src={OnixStoryMobileBgImage} alt="background" fill />}
      <div className={styles.contentText}>
        <MainTitle className={styles.title}>
          Our relationships with customers
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          Onix has always focused on building honest, transparent relationships with customers.
          We prioritize the evolving, unique customer needs and support our client’s choices
          regarding technology and design.
          <span />
          Our job is to provide consultations and insights into potential challenges,
          suggest optimal solutions, and ensure flexibility throughout the project.
        </ContentText>
      </div>
      <ul className={styles.blockList}>
        {onixStoryOurAdvantagesData.map(({ id, number, text }) => (
          <li key={id} className={styles.itemBlock}>
            {number}
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OnixStoryOurAdvantages;
