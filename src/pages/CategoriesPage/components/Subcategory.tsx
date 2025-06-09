import { ISubcategory } from '../interfaces/ICategoriesPageView';
import ContentText from '../../../components/ContentText/ContentText';
import LinkComponent from '../../../components/Link/Link';
import Icons from '../../../assets/icon';

import styles from '../sass/subcategory.module.scss';

function Subcategory({ href, subtitle }: ISubcategory) {
  return (
    <LinkComponent href={href}>
      <div className={styles.subcategory}>
        <ContentText className={styles.subtitle}>{subtitle}</ContentText>
        <Icons.IconArrowUp45Blogs width={11} height={11} className={styles.arrow} />
      </div>
    </LinkComponent>
  );
}

export default Subcategory;
