import {
  useScroll, motion, useMotionValueEvent,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';
import { IBracketologyFlowSection } from '../interfaces/IBracketologyFlowSection';
import ImageComponent from '../../../components/Image/Image';
import flowCarouselItems from '../data/flowCarouselItems';
import BracketologyPhoneItem from './BracketologyPhoneItem';
import FlowCarousel from './FlowCarousel';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';

import flowBg from '@/images/bracketology/flowSection/img_petals@2x.webp';
import flowBgTablet from '@/images/bracketology/flowSection/img_petals_tablet@2x.webp';
import flowPhone1 from '@/images/bracketology/flowSection/img_flow_phone1@2x.webp';
import flowPhone2 from '@/images/bracketology/flowSection/img_flow_phone2@2x.webp';
import styles from '../sass/BracketologyFlowSection.module.scss';

function BracketologyFlowSection({
  isDesktop, isMDDevice,
}: IBracketologyFlowSection) {
  const [translateY, setTranslateY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const {
    screenSizes: {
      isXXXLDevice, isXXLDevice, isXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isBigDesktop = isXXXLDevice || isXXLDevice || isXLDevice;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isMDDevice || isDesktop) {
      setTranslateY(latest * -220);
    } else setTranslateY(0);
  });

  return (
    <section ref={ref} className={styles.flowSection}>
      {(isMDDevice || isDesktop) && (
      <motion.div
        className={styles.flowBg}
        animate={{ y: translateY }}
        initial={{ y: 0 }}
        transition={{
          type: 'tween',
        }}
      >
        <ImageComponent
          src={isDesktop ? flowBg : flowBgTablet}
          width={isDesktop ? 1440 : 768}
          height={isDesktop ? 2592 : 1794}
          alt="petals"
        />
      </motion.div>
      )}
      <div className={styles.flowContainers}>
        <BracketologyPageContainer className={styles.firstContainer}>
          <BracketologyPhoneItem imgSrc={flowPhone1}>
            <BracketologyText tag="h2" variant="title">User flow of the fantasy gaming platform app</BracketologyText>
            <BracketologyText tag="p" variant="text">
              Registered players join the games, create their own fantasy league brackets, and predict
              various events for each episode, how long a contestant will last in a show, etc. They
              also join and form leagues to compete against friends, colleagues, and others.
            </BracketologyText>
            <BracketologyText tag="p" variant="text">
              The games are free to play for users, and players have the choice of multiple types of
              games with different rules. Larger public leagues are free to join, with the chance to win
              prizes from a Bracketology sponsor, podcast league, etc.
            </BracketologyText>
          </BracketologyPhoneItem>
        </BracketologyPageContainer>
        <BracketologyPageContainer className={styles.secondContainer}>
          <span />
          <BracketologyText tag="h2" variant="title">There are 3 game-type options:</BracketologyText>
          <FlowCarousel flowCarouselItems={flowCarouselItems} isDesktop={isDesktop} isBigDesktop={isBigDesktop} />
        </BracketologyPageContainer>
        <BracketologyPageContainer className={styles.thirdContainer}>
          <BracketologyPhoneItem imgSrc={flowPhone2} itemClass="secondPhoneItem">
            <BracketologyText tag="p" variant="text">
              After each show episode is released, for each prediction that proved correct, points are awarded.
              The results are summarized in a general table for players to see the leader in their league.
              The system also automatically scores and ranks a player’s league after each episode.
              At the end of the season, the three players with the highest points win the 1st, 2nd, and 3rd place.
            </BracketologyText>
            <BracketologyText tag="p" variant="text">
              For example, for The Bachelor game, the official league prizes for the 1st, 2nd, and 3rd place
              are determined and set by Bracketology. The prizes in the form of Bracketology Bucks (in-app
              currency that is yet to be implemented) will be awarded at the conclusion of the final elimination
              round, once all points are calculated.
            </BracketologyText>
          </BracketologyPhoneItem>
        </BracketologyPageContainer>
      </div>
    </section>
  );
}

export default BracketologyFlowSection;
