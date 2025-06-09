import ContentText from 'components/ContentText/ContentText';
import VRARContent from 'components/VRARContent/VRARContent';
import PageContainer from 'components/PageContainer/PageContainer';

import styles from '../sass/TextBlock.module.scss';

function TextBlock({ text }: { text: string }) {
  return (
    <PageContainer className={styles.container}>
      <VRARContent>
        <ContentText className={styles.title} tag="p">
          {text}
        </ContentText>
      </VRARContent>
    </PageContainer>
  );
}

export default TextBlock;
