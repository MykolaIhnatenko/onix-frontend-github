import { StaticImageData } from 'next/image';

import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import onixStoryOurWayData from '../data/onixStoryOurWayData';
import ImageComponent from '../../../components/Image/Image';
import { useAppSelector } from '../../../hook/reduxToolkit';

import OnixStoryTimeline from '@/images/onixStory/img_timeline.webp';
import OnixStoryTimelineBg from '@/images/onixStory/ourWay/img_onixStoryTimelineBg@2x.webp';
import OnixStoryTimelineBigBg from '@/images/onixStory/ourWay/img_onixStoryTimelineBigBg@2x.webp';
import OnixStoryTimelineTabletBg from '@/images/onixStory/ourWay/img_onixStoryTimelineTabletBg@2x.webp';
import OnixStoryTimelineMobileBg from '@/images/onixStory/ourWay/img_onixStoryTimelineMobileBg@2x.webp';
import styles from '../sass/onixStoryOurWay.module.scss';

function OnixStoryOurWay() {
  const {
    screenSizes: {
      isXXXLDevice, isMDDevice, isSMDevice, isXSDevice,
    },
  } = useAppSelector((state) => state?.app);
  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = { background: OnixStoryTimelineBg };
    if (isXXXLDevice) {
      bg.background = OnixStoryTimelineBigBg;
    } else if (isMDDevice || isSMDevice) {
      bg.background = OnixStoryTimelineTabletBg;
    } else if (isXSDevice) {
      bg.background = OnixStoryTimelineMobileBg;
    }
    return bg;
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent src={getBackground().background} alt="background" fill sizes="100vw" />
      </div>
      <MainTitle className={styles.title}>
        How we started
        {' '}
        <span />
        and where we are today
      </MainTitle>
      <ContentText tag="p" className={styles.text}>
        In a couple of years, Onix’s founders put together a team of 8 web developers who shared their
        passion for learning, innovation, and excellence.
        <span />
        Since then, the team and its expertise have been growing like a snowball.
        From humble beginnings in a small rented apartment,
        Onix has developed into a leading web and mobile application development company.
      </ContentText>
      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          <div className={styles.imageWrapper}>
            <ImageComponent src={OnixStoryTimeline} alt="timeline" fill />
          </div>
          <div className={styles.dataContainer}>
            <MainTitle tag="div">2002</MainTitle>
            <MainTitle tag="div">2023</MainTitle>
          </div>
        </div>
        <div className={styles.itemWrapper}>
          {onixStoryOurWayData.map(({
            id,
            item,
          }) => (<div key={id} className={styles.item}>{item}</div>))}
        </div>
      </div>
    </section>
  );
}

export default OnixStoryOurWay;
