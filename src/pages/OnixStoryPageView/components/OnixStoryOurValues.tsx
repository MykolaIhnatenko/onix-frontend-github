import MainTitle from '../../../components/MainTitle/MainTitle';
import ImageComponent from '../../../components/Image/Image';
import onixStoryOurValuesData from '../data/onixStoryOurValuesData';

import OnixStoryOurValuesBg from '@/images/onixStory/ourValues/img_our_values_bg.webp';
import styles from '../sass/onixStoryOurValues.module.scss';

function OnixStoryOurValues() {
  const { titleImage, contents, icons } = onixStoryOurValuesData;

  return (
    <section className={styles.section}>
      <ImageComponent
        src={OnixStoryOurValuesBg}
        alt="background"
        fill
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
      />
      <MainTitle className={styles.title}>Our values</MainTitle>
      <div className={styles.imagesWrapper}>
        {icons.map((icon, index) => (
          <div key={[icon, index].join('_')} className={styles.imgContainer}>
            {icon}
            <MainTitle tag="h3">{titleImage[index]}</MainTitle>
          </div>
        ))}
      </div>
      <MainTitle tag="h2" className={styles.secondTitle}>At Onix</MainTitle>
      <ul className={styles.textWrapper}>
        {contents.map(({ text, id }) => (
          <li key={id}>
            {text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OnixStoryOurValues;
