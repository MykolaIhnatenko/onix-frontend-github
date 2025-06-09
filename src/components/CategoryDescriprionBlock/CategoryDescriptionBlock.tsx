import { useRouter } from 'next/router';

import MainTitle from '../MainTitle/MainTitle';
import ViewAllButton from '../ViewAllButton/VIewAllButton';
import { ViewAllButtonVariant } from '../../constants/enums';
import ContentText from '../ContentText/ContentText';
import ICategoryDescriptionBlock from './interfaces/ICategoryDescriptionBlock';

import styles from './sass/categoryDescriptionBlock.module.scss';

function CategoryDescriptionBlock({
  title, url, description,
}: ICategoryDescriptionBlock) {
  const router = useRouter();
  const getTag = () => (router.asPath === '/blogs' ? 'h2' : 'h1');
  return (
    <div className={styles.categoryDescriptionBlock}>
      {title && (
        <MainTitle className={styles.title} tag={getTag()}>{title}</MainTitle>
      )}
      {url && (
      <div className={styles.buttonContainer}>
        <ViewAllButton
          title="View all"
          href={`/blogs/${url}`}
          variant={ViewAllButtonVariant.VIEW_ALL}
        />
      </div>
      )}
      <ContentText tag="p" className={styles.description}>{description}</ContentText>
    </div>
  );
}

export default CategoryDescriptionBlock;
