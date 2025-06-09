import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import PageContainer from '../../../components/PageContainer/PageContainer';
import captivatingData from '../data/captivatingData';

import styles from '../sass/CrossPlatformTransformCaptivating.module.scss';

export default function CrossPlatformTransformCaptivating() {
  return (
    <PageContainer className={styles.container}>
      <MainTitle className={styles.sectionTitle}>
        We transform your app idea into a captivating and innovative product that users can&apos;t wait to download!
      </MainTitle>
      <ContentText tag="p" className={styles.sectionDescription}>
        Onix is a cross-platform design company that specializes in creating user-centric designs that are optimized
        for various platforms, including iOS, Android, and web. We focus on creating visually appealing interfaces,
        easy navigation, and seamless interactions to enhance user engagement and satisfaction.
      </ContentText>
      <div className={styles.ideas}>
        {
          captivatingData.map(({ id, icon, content }, index) => (
            <div
              className={styles.ideas_item}
              key={[id, index].join('_')}
            >
              <div className={styles.iconWrapper}>
                {icon}
              </div>
              <ContentText tag="p" className={styles.content}>
                {content}
              </ContentText>
            </div>
          ))
        }
      </div>
    </PageContainer>
  );
}
