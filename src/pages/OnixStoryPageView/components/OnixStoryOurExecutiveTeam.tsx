import MainTitle from '../../../components/MainTitle/MainTitle';
import ContentText from '../../../components/ContentText/ContentText';
import onixStoryOurExecutiveTeamData from '../data/onixStoryOurExecutiveTeamData';

import styles from '../sass/onixStoryOurExecutiveTeam.module.scss';

function OnixStoryOurValues() {
  return (
    <section className={styles.container}>
      <MainTitle className={styles.title}>Our executive team in Ukraine</MainTitle>
      <ContentText tag="p" className={styles.subtitle}>
        The executives’ goal is to secure Onix’s membership in the global business community and our
        status as a reliable and profitable partner. The executive team guides Onix with a focus on consistent
        excellent customer experience and continuous education and training of the team members.
      </ContentText>
      <div className={styles.wrapper}>
        <div className={styles.itemsInfo}>
          {onixStoryOurExecutiveTeamData.map(({
            id, photo, position, name,
          }) => (
            <div key={id} className={styles.containerItem}>
              {photo}
              <MainTitle tag="h3" className={styles.name}>{name}</MainTitle>
              <ContentText tag="h4" className={styles.position}>{position}</ContentText>
            </div>
          ))}
        </div>
      </div>
      <ContentText tag="p" className={styles.bottomText}>
        As a privately owned company, we are proud of Onix’s consistent profitability through two decades.
        This has enabled the company to purchase its current headquarters, create a continuing education center,
        and effectively scale the team year after year.
      </ContentText>
    </section>
  );
}

export default OnixStoryOurValues;
