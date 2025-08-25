import { useAppSelector } from '../../../hook/reduxToolkit';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';
import { LG_DEVICE, MD_DEVICE } from '../../../constants/constants';
import workDuringWartimeData from '../data/workDuringWartimeData.json';

import AboutUkraineWartimePhoto from '@/images/aboutUkraine/img_wartime_photo.webp';
import AboutUkraineWartimeBg from '@/images/aboutUkraine/img_wartimeBg.webp';
import AboutUkraineWartimeBgTablet from '@/images/aboutUkraine/img_wartimeBgTablet.webp';
import AboutUkraineWartimeBgMobile from '@/images/aboutUkraine/img_wartimeBgMobile.webp';
import styles from '../sass/workDuringWartime.module.scss';

function WorkDuringWartime() {
  interface IWorkDuringWartimeData {
    id: string;
    text: string;
    style: string;
  }
  const { screenSizes: { screenWidth } } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg = { background: AboutUkraineWartimeBg };
    if (screenWidth < LG_DEVICE) {
      bg.background = AboutUkraineWartimeBgTablet;
    } else if (screenWidth < MD_DEVICE) {
      bg.background = AboutUkraineWartimeBgMobile;
    }
    return bg;
  };

  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
        />
      </div>
      {workDuringWartimeData.map(({ id, text, style }: IWorkDuringWartimeData, index) => (
        <MainTitle key={id} className={styles[style]} tag={index === 0 ? 'h2' : 'p'}>
          {text}
        </MainTitle>
      ))}
      <ContentText tag="p" className={styles.authorQuote}>
        Executive Director of the IT Ukraine Association,
        <br />
        Konstantin Vasyuk
      </ContentText>
      <ImageComponent
        src={AboutUkraineWartimePhoto}
        alt="photo"
        className={styles.photo}
        sizes="(max-width: 768px) 50vw, (min-width: 768px) 100vw"
      />
      <ContentText tag="p" className={styles.bottomText}>
        Nearly all tech companies have retained about 96% of their pre-existing contracts and the ability to deliver
        services as usual. Most are located in relatively safe areas and enjoy a stable electricity supply and
        Internet connection. Even at this stressful time, Ukrainian software developers have demonstrated exemplary
        resilience and commitment by remaining productive and meeting demands and deadlines against tall odds.
        <span />
        Onix is a proud member of the Ukrainian IT community. We are providing uninterrupted services to our clients
        with a safe and productive environment for the team. We are continuing our internship program for young
        talent and supporting the Armed Forces of Ukraine through donations. We are extremely grateful to our
        dedicated, long-time partners as well as our newer customers despite all of the perceived risks.
        <span />
        Being united is vital during tough times. The international tech community can help immensely by
        continuing to do business in Ukraine, purchasing products and services, and hiring Ukrainian IT
        professionals. Receiving high value at a low price is always a great deal!
      </ContentText>
    </section>
  );
}

export default WorkDuringWartime;
