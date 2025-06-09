import React from 'react';

import IReferralProgramItem from '../interfaces/IReferralProgramItem';
import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';

import styles from '../sass/bonusReferralProgram.module.scss';

export default function ReferralProgramItem({ id, title, content }: IReferralProgramItem) {
  return (
    <div
      key={['bonusReferralProgramItemId', id].join('_')}
      className={styles.textContainer}
    >
      <MainTitle tag="h3" className={styles.itemTitle}>
        {title}
      </MainTitle>
      <ContentText className={styles.itemText}>
        {content}
      </ContentText>
    </div>
  );
}
