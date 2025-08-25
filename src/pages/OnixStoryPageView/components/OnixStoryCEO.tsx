import useBackground from '../../../hook/useBackground';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import ImageComponent from '../../../components/Image/Image';

import OnixStoryCEOSerhiiKholin from '@/images/onixStory/img_Serhii_Kholin.webp';
import OnixStoryCEOSerhiiKholinTablet from '@/images/onixStory/img_Serhii_Kholin_tablet.webp';
import OnixStoryCEOBg from '@/images/onixStory/img_CEO_block_bg.webp';
import styles from '../sass/onixStoryCEO.module.scss';

function OnixStoryCEO() {
  const ceoAvatar = useBackground(
    OnixStoryCEOSerhiiKholin,
    OnixStoryCEOSerhiiKholinTablet,
    OnixStoryCEOSerhiiKholinTablet,
  );

  return (
    <section className={styles.section}>
      <ImageComponent src={OnixStoryCEOBg} alt="background" fill className={styles.background} />
      <ImageComponent src={ceoAvatar || ''} alt="CEO" className={styles.ceo} />
      <div className={styles.contentText}>
        <MainTitle className={styles.title}>
          Serhii Kholin, CEO
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          “Whatever our company size or services list, Onix retains
          its focus on learning and a watchful eye for emerging technologies.”
        </ContentText>
      </div>
    </section>
  );
}

export default OnixStoryCEO;
