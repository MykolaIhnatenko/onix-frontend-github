import { useRouter } from 'next/router';

import useBackground from '../../../hook/useBackground';
import ImageComponent from '../../../components/Image/Image';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';

import AboutUkraineHolidaysMobile from '@/images/aboutUkraine/img_holidays_mobile.webp';
import AboutUkraineHolidaysTablet from '@/images/aboutUkraine/img_holidays_tablet.webp';
import AboutUkraineHolidaysBg from '@/images/aboutUkraine/img_holidays_bg.webp';
import AboutUkraineHolidaysGirl from '@/images/aboutUkraine/img_holidays_girl.webp';
import styles from '../sass/publicHolidays.module.scss';

function PublicHolidays() {
  const router = useRouter();
  const urlNationalHolidaysPage = '/national-holidays-in-ukraine';
  const background = useBackground(AboutUkraineHolidaysBg, AboutUkraineHolidaysTablet, AboutUkraineHolidaysMobile);

  const getYear = new Date().getFullYear();

  return (
    <section className={styles.container}>
      {background && (
        <div className={styles.background}>
          <ImageComponent
            src={background}
            alt="background"
            sizes="100vh"
            fill
            className={styles.backgroundImg}
          />
        </div>
      )}
      <div className={styles.leftColum}>
        <div className={styles.content}>
          <MainTitle className={styles.title}>
            Public holidays in Ukraine in&nbsp;
            {getYear}
          </MainTitle>
          <ContentText tag="p" className={styles.text}>
            This calendar should help you plan work with our team&nbsp;effectively.
          </ContentText>
          <div className={styles.button}>
            <ButtonLight
              onClick={() => router.push(urlNationalHolidaysPage)}
              text="LEARN MORE"
            />
          </div>
        </div>
      </div>
      <div className={styles.rightColum}>
        <ImageComponent className={styles.bgRight} src={AboutUkraineHolidaysGirl} alt="ukrainGirl" />
      </div>
    </section>
  );
}

export default PublicHolidays;
