import BigNumberCard from 'components/BigNumberCard/BigNumberCard';
import ContentText from 'components/ContentText/ContentText';
import MainTitle from 'components/MainTitle/MainTitle';
import PageContainer from 'components/PageContainer/PageContainer';
import VRARContent from 'components/VRARContent/VRARContent';
import cardsData from '../data/cardsData';
import { BigNumberCardVariant } from 'constants/enums';

import styles from '../sass/cardBlockList.module.scss';

function CardBlockList() {
  return (
    <PageContainer className={styles.container}>
      <VRARContent>
        <MainTitle className={styles.title}>
          User benefits
        </MainTitle>
        <ContentText className={styles.text} tag="p">
          LIVBOX benefits the following user groups:
        </ContentText>
      </VRARContent>
      <div className={styles.list}>
        {cardsData.map(({ id, title, desc }) => (
          <BigNumberCard
            key={id}
            id={id}
            title={title}
            desc={desc}
            variant={BigNumberCardVariant.CONVERT}
          />
        ))}
      </div>
    </PageContainer>
  );
}

export default CardBlockList;
