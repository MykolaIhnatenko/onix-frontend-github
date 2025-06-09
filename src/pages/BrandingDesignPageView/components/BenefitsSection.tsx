import React from 'react';

import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import ImageComponent from '../../../components/Image/Image';
import { IBenefitsSectionProps } from '../interfaces/IBenefitsSection';

import styles from '../sass/benefitsSection.module.scss';

function BenefitsSection({
  data, title, background, variant,
}: IBenefitsSectionProps) {
  return (
    <section className={`${styles.section} ${variant ? styles[variant] : ''}`}>
      {background && (
        <div className={styles.background}>
          <ImageComponent src={background} alt="background" fill sizes="100vw" />
        </div>
      )}
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>{title}</MainTitle>
        <div className={styles.cardsBlock}>
          {data.map(({ id, content }) => (
            <React.Fragment key={id}>{content}</React.Fragment>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default BenefitsSection;
