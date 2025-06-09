import ContentText from '../../../components/ContentText/ContentText';

import styles from '../sass/travelTailResultSection.module.scss';

const resultData = [
  {
    id: '01',
    title: 'Before',
    content: (
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.preSign}>﹂</span>
          <ContentText className={styles.itemText} tag="p">
            No comprehensive information on pet-friendly accommodations.
          </ContentText>
        </li>
        <li className={styles.item}>
          <span className={styles.preSign}>﹂</span>
          <ContentText className={styles.itemText} tag="p">
            Hard to find suitable pet-friendly places.
          </ContentText>
        </li>
        <li className={styles.item}>
          <span className={styles.preSign}>﹂</span>
          <ContentText className={styles.itemText} tag="p">
            Uncertainty about pet-friendly dining options.
          </ContentText>
        </li>
      </ul>
    ),
  },
  {
    id: '02',
    title: 'With TravelTail',
    content: (
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.preSign}>﹂</span>
          <ContentText className={styles.itemText} tag="p">
            An extensive catalog of pet-friendly accommodations.
          </ContentText>
        </li>
        <li className={styles.item}>
          <span className={styles.preSign}>﹂</span>
          <ContentText className={styles.itemText} tag="p">
            Carefully selected pet-friendly locations.
          </ContentText>
        </li>
        <li className={styles.item}>
          <span className={styles.preSign}>﹂</span>
          <ContentText className={styles.itemText} tag="p">
            Detailed insights into pet-friendly food and drink spaces that ensure delightful experiences
            for pets and their owners.
          </ContentText>
        </li>
      </ul>
    ),
  },
];

export default resultData;
