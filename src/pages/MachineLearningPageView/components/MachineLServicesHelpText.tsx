import React from 'react';

import MainTitle from 'components/MainTitle/MainTitle';
import ContentText from 'components/ContentText/ContentText';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/machineLServicesHelpText.module.scss';

function MachineLServicesHelpText() {
  return (
    <PageContainer className={styles.container}>
      <MainTitle className={styles.title}>
        Our ML development services help you to:
      </MainTitle>
      <ContentText tag="p" className={styles.text}>
        With our machine learning app development services, you can uncover
        insights, improve decision-making, and transform your business.
      </ContentText>
    </PageContainer>
  );
}

export default MachineLServicesHelpText;
