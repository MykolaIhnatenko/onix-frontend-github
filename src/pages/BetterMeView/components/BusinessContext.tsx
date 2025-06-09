import VRARContent from '../../../components/VRARContent/VRARContent';
import buisnessContextItems from '../data/buisnessContextItemsData';

import styles from '../sass/businessContext.module.scss';

const repeatableParagraphs = [
  {
    id: 1,
    text: 'The app provides a personalized workout plan based on different fitness levels, goals, and '
    + 'schedules, as well as a nutrition plan to help customers make healthy choices. BetterMe also '
    + 'offers a community support system where members can connect with other users and get motivation '
    + 'and advice.',
    classes: `${styles.maxWidth} ${styles.smallerText}`,
  },
  {
    id: 2,
    text: 'This project promotes a healthy and active lifestyle avoiding dramatic weight loss or body ideals. '
    + 'There is also a patriotic Ukrainian collection in the assortment. Part of the profits from this '
    + 'collection is transferred to UNICEF Ukraine. A collection was also developed specifically for residents '
    + 'of Ukraine.',
    classes: `${styles.maxWidth} ${styles.smallerText}`,
  },
  {
    id: 3,
    text: 'The BetterMe team reached out to Onix since they had an idea to create a website to sell athleisure '
    + 'and fitness home equipment that would make activities with the BetterMe app even more engaging and '
    + 'comfortable.',
    classes: `${styles.maxWidth} ${styles.biggerText}`,
  },
];

function BusinessContext() {
  return (
    <section className={styles.businessContext}>
      <div className="betterMeContainer">
        <VRARContent>
          <h2>Business Context</h2>
        </VRARContent>
        <div className={styles.textWrapper}>
          <VRARContent className={styles.maxWidth}>
            <p className={styles.biggerText}>
              BetterMe is a leading wellness company that develops accessible digital health products for people
              of all ages, backgrounds, and physical abilities. More than 100M people from all corners of the
              world come to us for holistic health guidance, step-by-step support and our “healthy habits made simple”
              approach.
            </p>
          </VRARContent>
          <VRARContent className={`${styles.buisnessContextItems} ${styles.maxWidth}`}>
            {buisnessContextItems.map(({ id, title, description }) => (
              <div key={id} className={styles.buisnessContextItem}>
                <p className={styles.buisnessContextItemTitle}>
                  {title}
                </p>
                <p className={styles.buisnessContextItemDescription}>
                  {description}
                </p>
              </div>
            ))}
          </VRARContent>
          {repeatableParagraphs.map(({ id, text, classes }) => (
            <VRARContent key={id} className={classes}>
              <p>{text}</p>
            </VRARContent>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessContext;
