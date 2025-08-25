import Link from 'next/link';

import Card from './Card';
import { useAppSelector } from '../../../hook/reduxToolkit';
import ImageComponent from '../../../components/Image/Image';
import chapterCards from '../data/chapterCards';
import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';
import IBracketologyChapter from '../interfaces/IBracketologyChapter';
import PageLinks from 'constants/PageLinks';

import mobileBg from '@/images/bracketology/chapterSection/img_bg_mobile.webp';
import aloa from '@/images/bracketology/chapterSection/img_aloa@2x.webp';
import onix from '@/images/bracketology/chapterSection/img_onix@2x.webp';
import styles from '../sass/BracketologyChapterSection.module.scss';

const chapterVideo = '/static/video/bracketology-video.mp4';

function BracketologyChapterSection({ saleUrl }: IBracketologyChapter) {
  const {
    screenSizes: {
      isSMDevice, isMDDevice, isLGDevice,
      isXLDevice, isXXLDevice, isXXXLDevice,
    },
  } = useAppSelector((state) => state?.app);
  const isNotMobile = isMDDevice || isLGDevice || isXLDevice || isXXLDevice || isXXXLDevice || isSMDevice;

  return (
    <section className={styles.chapterSection}>
      <div className={styles.chapterBg}>
        {isNotMobile
          ? (
            <video
              autoPlay
              muted
              loop
              src={chapterVideo}
            >
              <track kind="captions" src={chapterVideo} />
            </video>
          ) : <ImageComponent src={mobileBg} fill alt="couple" />}
      </div>
      <BracketologyPageContainer className={styles.container}>
        <Card wrapperVariant="storyWrapper" cardVariant="chapterCard">
          <div className={styles.logos}>
            <div className={styles.aloa}>
              <ImageComponent
                src={aloa}
                width={198}
                height={87}
                alt="aloa-logo"
              />
            </div>
            <span>&</span>
            <div className={styles.onix}>
              <ImageComponent
                src={onix}
                width={198}
                height={48}
                alt="onix-logo"
              />
            </div>
          </div>
          <div className={styles.chapterContent}>
            <BracketologyText tag="h2" variant="title">New сhapter of Bach Bracket’s story</BracketologyText>
            <BracketologyText tag="p" variant="text">
              In the spring of 2021, three friends acquired the controlling stake in the Bach Bracket project.
              One of them happened to be a co-founder of Aloa, a digital outsourcing services platform and
              Onix’s long-term partner.
            </BracketologyText>
            <BracketologyText tag="p" variant="text">
              Seeing an opportunity to develop Bach Bracket into something bigger, they contacted Onix as
              a one of the top&nbsp;
              {!saleUrl ? (
                <Link
                  prefetch={false}
                  href={PageLinks.SPORTS_AND_FITNESS_DEVELOPMENT_SERVICES}
                >
                  sports application developing firm
                </Link>
              ) : (
                <>sports application developing firm</>
              )}
              &nbsp;with a request to support the existing website and application and create its updated version
              rebranded as Bracketology.
            </BracketologyText>
          </div>
        </Card>
        <BracketologyText tag="h3" variant="fs_28">The request included a full package of services:</BracketologyText>
        <div className={styles.chapterCardsContainer}>
          {chapterCards.map(({ id, icon, title }) => (
            <div key={id} className={styles.cardContainer}>
              <div className={styles.chapterCard}>
                <div className={styles.iconBlock}>
                  {icon}
                  <span>{id}</span>
                </div>
                <BracketologyText tag="p" variant="text">{title}</BracketologyText>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.lastChapterContent}>
          <BracketologyText tag="p" variant="text">
            The decision to rewrite the application was made due to the limitations of the previous technology
            stack. Over 5 years, the product’s user interface (UI) design and functionality became outdated.
            With the existing code base written in Ruby on Rails, any changes, new features, and scaling in the
            future would be much more complicated and expensive.
          </BracketologyText>
          <BracketologyText tag="p" variant="text">
            Another goal was to improve the user experience (UX) and to make the app as streamlined and easy to
            use as possible.
          </BracketologyText>
          <BracketologyText tag="p" variant="text">
            Onix’s team embarked on the project in June 2021.
          </BracketologyText>
        </div>
      </BracketologyPageContainer>
    </section>
  );
}

export default BracketologyChapterSection;
