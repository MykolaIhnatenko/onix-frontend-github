import { IRecommendedBlock } from '../interfaces/ICategoriesPageView';
import ContentText from '../../../components/ContentText/ContentText';
import LinkComponent from '../../../components/Link/Link';

import styles from '../sass/recommendedBlock.module.scss';

function RecommendedBlock({
  designItem, technologiesItem, mobileItem,
}: IRecommendedBlock) {
  const {
    attributes: {
      title: designTitle,
      url: designUrl,
    },
  } = designItem;

  const {
    attributes: {
      title: mobileTitle,
      url: mobileUrl,
    },
  } = mobileItem;

  const {
    attributes: {
      title: technologiesTitle,
      url: technologiesUrl,
    },
  } = technologiesItem;

  return (
    <div className={styles.recommended}>
      <ContentText className={styles.text}>
        Recommended:
      </ContentText>
      <LinkComponent href={`/blogs/${designUrl}`}>
        <ContentText className={styles.link}>
          {`${designTitle},`}
        </ContentText>
      </LinkComponent>
      <LinkComponent href={`/blogs/${mobileUrl}`}>
        <ContentText className={styles.link}>
          {`${mobileTitle},`}
        </ContentText>
      </LinkComponent>
      <LinkComponent href={`/blogs/${technologiesUrl}`}>
        <ContentText className={styles.link}>
          {technologiesTitle}
        </ContentText>
      </LinkComponent>
    </div>
  );
}

export default RecommendedBlock;
