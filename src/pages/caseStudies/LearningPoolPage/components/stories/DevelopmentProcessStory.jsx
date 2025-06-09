import React, { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useHover } from 'react-use-gesture';

import InViewAnimation from '../InViewAnimation';
import Card from './components/Card';
import Process from './components/Process';
import ImageComponent from '../../../../../components/Image/Image';
import { cardsData, processData } from '../../data/LearningPoolData';

import styles from '../../sass/DevelopmentProcessStory.module.scss';

const upperImage = '/static/images/Pages/LearningPoolPage/ic_upper-image.svg';
const lowerImage = '/static/images/Pages/LearningPoolPage/img_lower-image.webp';

const renderedCardsData = cardsData.map((cardData, index) => (
  <Card key={[cardData, index].join('-')} card={cardData} index={index} />
));

const MOVE_DURATION = 80000;
const END_VALUE = -50;

function DevelopmentProcessStory() {
  const changer = (multiplier) => `translate3d(${multiplier}%, 0px, 0px)`;

  const [isHovering, setHoverState] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [currentAnimationValue, setCurrentAnimationValue] = useState(0);

  const handleResize = () => {
    const isTabletOrSmallerDevice = document.body.clientWidth < 768;
    if (isMobileView !== isTabletOrSmallerDevice) {
      setIsMobileView(isTabletOrSmallerDevice);
    }
  };

  const defaultSettings = {
    from: { multiplier: 0 },
    to: { multiplier: END_VALUE },
    config: { duration: MOVE_DURATION },
    reset: !isMobileView,
    onFrame: ({ multiplier }) => setCurrentAnimationValue(multiplier),
    immediate: () => isHovering || isMobileView,
  };

  const [{ multiplier }, setMultiplier] = useSpring(() => defaultSettings);

  const { onMouseEnter, onMouseLeave } = useHover((state) => {
    if (state.hovering) {
      setMultiplier({
        from: { multiplier: currentAnimationValue },
        to: { multiplier: currentAnimationValue },
      });
    } else {
      setMultiplier({
        to: { multiplier: END_VALUE },
      });
    }
    setHoverState(state.hovering);
  })();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileView]);

  useEffect(() => {
    if (isMobileView) {
      setMultiplier({
        from: { multiplier: 0 },
        to: { multiplier: 0 },
      });
    } else {
      setMultiplier(defaultSettings);
    }
  }, [isMobileView]);

  useEffect(() => {
    if (currentAnimationValue === END_VALUE) {
      setMultiplier({
        from: { multiplier: 0 },
        to: { multiplier: END_VALUE },
      });
    }
  }, [currentAnimationValue]);

  return (
    <div className={styles.storyThree}>
      <div className={styles.content}>
        <InViewAnimation down>
          <span className={styles.number}>03.</span>
        </InViewAnimation>
        <InViewAnimation down>
          <h2 className={styles.heading}>The development process</h2>
        </InViewAnimation>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <InViewAnimation down>
            <p>
              At the very beginning, we were happy to discover that Learning Pool was using an
              Agile development process with a Kanban board.
            </p>
          </InViewAnimation>
        </div>
      </div>
      <div className={`${styles.content} ${styles.animated}`}>
        <div className={styles.upperImage}>
          <ImageComponent
            src={upperImage}
            width={130}
            height={130}
            alt="dots"
          />
        </div>
        <animated.div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={styles.cards}
          style={{ transform: multiplier.interpolate(changer) }}
        >
          {renderedCardsData}
          {renderedCardsData}
        </animated.div>
        <div className={`${styles.cards} ${styles.mobile}`}>
          {renderedCardsData}
        </div>
      </div>
      <div className={styles.content}>
        <div className={`${styles.text} ${styles.esp}`}>
          <InViewAnimation down>
            <p>
              The process was familiar to us, practiced on multiple previous projects. The team
              was also accustomed to constant changes on Agile projects. However, some aspects of
              Learning Pool’s process were new to us, such as:
            </p>
          </InViewAnimation>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.processes}>
          {processData.map((processDatum, index) => (
            <Process key={[processDatum, index].join('-')} process={processDatum} />
          ))}
        </div>
      </div>
      <div className={`${styles.content} ${styles.full}`}>
        <div className={styles.text}>
          <InViewAnimation down>
            <p>
              Onix’s employees adapted naturally and quickly within the first month. Moreover,
              thanks
              to their experience in rapid development under the pressure of deadlines, the team
              has helped to speed development and task execution at Learning Pool without
              compromising quality.
            </p>
          </InViewAnimation>
          <InViewAnimation down>
            <p>
              There were also retrospectives after each 2-week sprint where they were able to
              introduce a lot of cool things, such as using Typescript on a large scale, phase-out
              of SCSS, the projects’ full coverage with tests, rewriting outdated elements, Kudo
              cards, and more.
            </p>
          </InViewAnimation>
          <InViewAnimation down>
            <p>
              The tasks were diverse. Learning Pool’s product comprises six separate but related
              projects revolving around e-learning. Each of them poses an extensive scope of work
              both on updating older components and creating new functionality.
            </p>
          </InViewAnimation>
        </div>
        <div className={styles.lowerImage}>
          <ImageComponent
            src={lowerImage}
            width={150}
            height={150}
            alt="half-circle"
          />
        </div>
      </div>
    </div>
  );
}

export default DevelopmentProcessStory;
