import useBackground from '../../../hook/useBackground';
import ImageComponent from '../../../components/Image/Image';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ITIndustryDragComponent from './ITIndustryDragComponent';
import itIndustryData from '../data/itIndustryData';

import AboutUkraineITIndustryBg from '@/images/aboutUkraine/itIndustry/img_it_industry_bg.webp';
import AboutUkraineITIndustryMobile from '@/images/aboutUkraine/itIndustry/img_it_industry_mobile.webp';
import styles from '../sass/itIndustry.module.scss';

function ITIndustry() {
  const background = useBackground(
    AboutUkraineITIndustryBg,
    AboutUkraineITIndustryBg,
    AboutUkraineITIndustryMobile,
  );

  return (
    <section>
      <div className={styles.container}>
        {background && <ImageComponent className={styles.background} src={background} alt="background" fill />}
        <MainTitle className={styles.title}>Ukraine’s IT industry</MainTitle>
        <ContentText tag="p" className={styles.subtitle}>
          Once the “Breadbasket of Europe”, Ukraine has also become a major technology
          hub and the go-to offshore/nearshore outsourcing destination.
        </ContentText>
        <div className={styles.content}>
          {itIndustryData.map(({ id, text, icon }) => (
            <div key={id} className={styles.itemBlock}>
              {icon}
              {text}
            </div>
          ))}
        </div>
      </div>
      <ITIndustryDragComponent />
    </section>
  );
}

export default ITIndustry;
