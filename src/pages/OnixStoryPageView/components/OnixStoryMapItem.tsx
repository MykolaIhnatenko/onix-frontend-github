import { useState } from 'react';
import { motion } from 'framer-motion';

import ContentText from '../../../components/ContentText/ContentText';
import IOnixStoryMapItem from '../interfaces/IOnixStoryMapItem';

import styles from '../sass/onixStoryOurClients.module.scss';

function OnixStoryMapItem({
  title, top, left, content, variant,
}: IOnixStoryMapItem) {
  const [animateStart, setAnimateStart] = useState(false);

  return (
    <>
      <motion.div
        style={{
          top: `${top}%`,
          left: `${left}%`,
        }}
        animate={animateStart ? {
          opacity: 0,
        } : {
          opacity: 1,
        }}
        onHoverStart={() => setAnimateStart(true)}
        onHoverEnd={() => setAnimateStart(false)}
        className={`${styles.claster} ${variant ? styles[variant] : ''}`}
      >
        <ContentText className={styles.clasterTitle}>
          {title}
        </ContentText>
      </motion.div>
      {content.map(({
        contentLeft, contentTop, number, flag, contentVariant,
      }) => (
        <motion.div
          key={[number, contentLeft, contentTop].join('_')}
          animate={animateStart ? {
            opacity: 1,
            top: `${contentTop}%`,
            left: `${contentLeft}%`,
          } : {
            opacity: 0,
            top: `${top}%`,
            left: `${left}%`,
          }}
          className={`${styles.clasterItem} ${styles[contentVariant]}`}
        >
          {flag}
          <ContentText className={styles.clasterItemText}>
            {number}
          </ContentText>
        </motion.div>
      ))}
    </>
  );
}

export default OnixStoryMapItem;
