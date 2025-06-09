import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ITextBlock from '../interfaces/ITextBlock';

import styles from '../sass/textBlock.module.scss';

function TextBlock({ title, firstText, secondText }: ITextBlock) {
  return (
    <PageContainer className={styles.conteiner}>
      <VRARContent>
        <MainTitle className={styles.title}>
          {title}
        </MainTitle>
      </VRARContent>
      <div className={styles.textContainer}>
        <VRARContent>
          <ContentText className={styles.text} tag="p">
            {firstText}
          </ContentText>
        </VRARContent>
        <VRARContent>
          <ContentText className={styles.text} tag="p">
            {secondText}
          </ContentText>
        </VRARContent>
      </div>
    </PageContainer>
  );
}

export default TextBlock;
