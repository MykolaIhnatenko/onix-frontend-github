import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import ConvertAccordionBlock from './ConvertAccordionBlock';
import VRARContent from '../../../components/VRARContent/VRARContent';
import BigNumberCard from '../../../components/BigNumberCard/BigNumberCard';
import cardsData from '../data/bigNumberCardData';
import ideaContextData from '../data/ideaContextData';
import { BigNumberCardVariant } from '../../../constants/enums';

import styles from '../sass/convertIdeaBlock.module.scss';

function ConvertIdeaBlock() {
  return (
    <section className={styles.section}>
      <PageContainer className={styles.container}>
        <VRARContent>
          <ContentText className={styles.nameBlock} tag="p">[ The app idea ]</ContentText>
          <MainTitle className={styles.title}>
            Regular people aged 18 to 35 years
            can execute easy and rapid
            basic money operations:
          </MainTitle>
        </VRARContent>
        <div className={styles.list}>
          {cardsData.map(({ id, title }) => (
            <BigNumberCard
              key={id}
              id={id}
              title={title}
              variant={BigNumberCardVariant.CONVERT}
            />
          ))}
        </div>
      </PageContainer>
      <div className={styles.accordionWrapper}>
        <ConvertAccordionBlock />
      </div>
      <div className={styles.table}>
        <MainTitle tag="h3" className={styles.tableTitle}>
          During MVP development, our experts:
        </MainTitle>
        <VRARContent className={styles.tableContent}>
          <ul className={styles.tableList}>
            {ideaContextData.map((item, index) => (
              <li key={[item, index].join('_')} className={styles.tableListItem}>
                <ContentText tag="p" className={styles.tableText}>
                  {item}
                </ContentText>
              </li>
            ))}
          </ul>
        </VRARContent>
      </div>
      <MainTitle tag="p" className={styles.subHeader}>
        The Onix team provided development solutions aligned with
        our client&apos;s goals, budget, and time.
      </MainTitle>
    </section>
  );
}

export default ConvertIdeaBlock;
