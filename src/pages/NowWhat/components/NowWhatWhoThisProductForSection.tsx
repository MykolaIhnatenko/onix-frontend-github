import PageContainer from '../../../components/PageContainer/PageContainer';
import ContentText from '../../../components/ContentText/ContentText';
import MainTitle from '../../../components/MainTitle/MainTitle';
import NowWhatTableBlock from './NowWhatTableBlock';
import flowContent from '../data/flowContent.json';

import styles from '../sass/NowWhatWhoThisProductIsForSection.module.scss';

function NowWhatWhoThisProductForSection() {
  return (
    <section className={styles.whoThisProductIsForSection}>
      <PageContainer className={styles.container}>
        <ContentText className={styles.name} tag="p">[ Who this product is for ]</ContentText>
        <MainTitle className={styles.title}>
          NowWhat&apos;s community platform
          is a secure space for prostate cancer patients, survivors,&nbsp;and families
          to share experiences and provide support.
        </MainTitle>
        <ContentText className={styles.text} tag="p">
          It is designed to be understanding and supportive towards
          those&nbsp;affected by this disease.
        </ContentText>
        <MainTitle
          className="pb-[40px] !text-[40px]/[56px] screen-lg:!text-[36px]/[46px] screen-md:!text-[20px]/[28px]"
          tag="h3"
        >
          App UserFlow
        </MainTitle>
        <NowWhatTableBlock content={flowContent} />
      </PageContainer>
    </section>
  );
}

export default NowWhatWhoThisProductForSection;
