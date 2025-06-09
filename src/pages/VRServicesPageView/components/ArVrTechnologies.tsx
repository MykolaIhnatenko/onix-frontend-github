import PageContainer from '../../../components/PageContainer/PageContainer';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import technologiesData from '../data/technologiesData';

import styles from '../sass/ar-vrTechnologies.module.scss';

function ArVrTechnologies() {
  return (
    <section>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.title}>
          AR and VR Technologies We Use
        </MainTitle>
        <ContentText tag="p" className={styles.text}>
          To deliver products of the highest quality, we use a reliable and top-notch set of technologies
        </ContentText>
        <div className={styles.list}>
          {technologiesData.map(({ id, name, items }) => (
            <div key={id} className={styles.category}>
              <MainTitle tag="p">{name}</MainTitle>
              <div className={styles.grid}>
                {items.map(({ id: itemId, title }) => (
                  <div key={itemId} className={styles.item}>
                    <ContentText tag="p">{title}</ContentText>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ArVrTechnologies;
