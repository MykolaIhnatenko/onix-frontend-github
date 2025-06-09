import BracketologyChallengeCard from './BracketologyChallengeCard';
import BracketologyChallengeItem from './BracketologyChallengeItem';
import ImageComponent from '../../../components/Image/Image';
import challengeCards from '../data/challengeCards';
import challengeContent from '../data/challengeContent';
import BracketologyPageContainer from './BracketologyPageContainer';
import BracketologyText from './BracketologyText';
import challengeRose from '@/images/bracketology/challengeSection/rose2@2x.webp';

import styles from '../sass/BracketologyChallengeSection.module.scss';

function BracketologyChallengeSection() {
  return (
    <section className={styles.challengeSection}>
      <BracketologyPageContainer variant="challengeContainer">
        <BracketologyText tag="h2" variant="title">
          The main challenge of the fantasy gaming platform app development
        </BracketologyText>
        <BracketologyText tag="p" variant="text">
          The main problem was that the fantasy gaming platform is most actively used for a few hours per
          week – on the evening of the weekly episode release – when the number of users reaches 100K at a time.
          Initially, the app ran well on Heroku, but as traffic increased, it began to experience problems and
          limitations. Heroku’s deployment API seemed to fail 1-2 times a week.
        </BracketologyText>
        <BracketologyText tag="p" variant="text">
          The application needed greater capacity and flexibility at a minimal cost. The team was tasked
          with smoothly optimizing the server and halving the maintenance cost. As it was a production app,
          without testing servers, there was no room for error.
        </BracketologyText>
        <BracketologyText className={styles.challengeTitle}>
          For this purpose, Onix’s specialists decided to migrate the application from Heroku to AWS due to the
          latter’s multiple advantages, such as:
        </BracketologyText>
        <div className={styles.challengeCards}>
          {challengeCards.map(({
            id, iconSrc, title, content,
          }) => (
            <BracketologyChallengeCard key={id} content={content} icon={iconSrc} title={title} />
          ))}
        </div>
        <BracketologyText tag="p" variant="text">
          Onix’s team decided to deploy the application in AWS Elastic Beanstalk using Docker which comes with
          different versions of built-in Docker and scale it easily. Docker was expected to speed up the migration
          to AWS; it works locally and will also work in a production environment.
        </BracketologyText>
        <div className={styles.challengeRoseBlock}>
          <div className={styles.challengeRoseImg}>
            <ImageComponent
              src={challengeRose}
              fill
              alt="hand-with-rose"
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
            />
          </div>
          <div className={styles.challengeRoseContent}>
            {challengeContent.map(({ id, content }) => (
              <BracketologyChallengeItem key={id} id={id} content={content} />
            ))}
          </div>
        </div>
        <BracketologyText tag="p" variant="text">
          The migration from Heroku to AWS took one DevOps engineer nearly three weeks to complete.
          This included learning Elastic Beanstalk, integration and deployment of the services (Elasticsearch,
          RDS Postgres, Memcached, Redis, S3, Load balancer, Cloudflare, WordPress), and setting up CI/CD
          (CodeDeploy and GitHub Action). Testing took a bulk of the time.
        </BracketologyText>
      </BracketologyPageContainer>
    </section>
  );
}

export default BracketologyChallengeSection;
