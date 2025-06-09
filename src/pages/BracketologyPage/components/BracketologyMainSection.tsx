import { useSelector } from 'react-redux';

import Card from './Card';
import { IBracketologyMainSection } from '../interfaces/IBracketologyMainSection';
import ImageComponent from '../../../components/Image/Image';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';
import VRARContent from '../../../components/VRARContent/VRARContent';
import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';
import logo from '@/images/bracketology/mainSection/img_logo@2x.webp';
import mainPhones from '@/images/bracketology/mainSection/img_main_phones.webp';
import mainPhones2x from '@/images/bracketology/mainSection/img_main_phones@2x.webp';

import styles from '../sass/BracketologyMainSection.module.scss';

function BracketologyMainSection({ mainBackground }: IBracketologyMainSection) {
  const { screenSizes: { isXSDevice } } = useSelector<IStore, IApp>((state) => state?.app);

  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContent}>
        <ImageComponent
          className={styles.mainBackgroundImg}
          src={mainBackground}
          width={828}
          height={930}
          sizes="(max-width: 450px) 50vw, 100vw"
          priority
          alt="roses"
        />
        <BracketologyPageContainer className={styles.container}>
          <div className={styles.contentBlock}>
            <div className={styles.logoBlock}>
              <div className={styles.logo}>
                <ImageComponent
                  src={logo}
                  width={453}
                  height={108}
                  alt="logo"
                />
              </div>
              <BracketologyText tag="h1" variant="mainTitle" className={styles.title}>
                Fantasy gaming platform development case study
              </BracketologyText>
              <BracketologyText tag="p" variant="text" className={styles.subTitle}>
                Bracketology is the premier centralized fantasy gaming platform for reality TV shows, turning
                the TV shows’ drama, twists, turns, and eliminations into an engaging game for thousands of online
                players.
              </BracketologyText>
            </div>
            <div className={styles.imageBlock}>
              <ImageComponent
                src={isXSDevice ? mainPhones : mainPhones2x}
                sizes="(max-width: 450px) 100vw, 50vw"
                width={685}
                height={655}
                alt="phones"
                priority
              />
            </div>
          </div>
          <Card cardVariant="storyCard" wrapperVariant="storyWrapper">
            <VRARContent>
              <BracketologyText tag="h2" variant="title">The story of Bach Bracket</BracketologyText>
            </VRARContent>
            <VRARContent>
              <BracketologyText tag="p" variant="text">
                It all started in 2016 with four girls: Jessica Dahlstrum, Kaitlyn Hurley,
                Lexi Later, and Mary Roberts. Avid fans of The Bachelor, they had played in their own
                fantasy Bachelor league for years. Sending over their picks via text and keeping score in
                a Google Sheet, they sometimes wondered how many people would appreciate just the same:
                more content on their favorite franchise, some extra fun and excitement, and an ability to
                compete with fellow fans online.
              </BracketologyText>
            </VRARContent>
            <VRARContent>
              <BracketologyText tag="p" variant="text">
                One day, over lunch in LA, they drew the framework of what would become the Bach Bracket
                website on the back of a cocktail napkin. They started with $750 paid to a web designer for a
                series of wireframes. When the founders got the quote for gaming platform website development,
                they realized they might need to do more than dip into their savings. However, after seeing their
                vision come to life in those PDF mockups, they couldn’t stop.
              </BracketologyText>
            </VRARContent>
          </Card>
        </BracketologyPageContainer>
      </div>
    </section>
  );
}

export default BracketologyMainSection;
