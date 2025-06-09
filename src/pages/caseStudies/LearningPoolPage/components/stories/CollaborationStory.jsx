import InViewAnimation from '../InViewAnimation';
import ImageComponent from '../../../../../components/Image/Image';

import styles from '../../sass/ColaborationStory.module.scss';

const storyTwo = '/static/images/Pages/LearningPoolPage/img_story-two.webp';

function CollaborationStory() {
  return (
    <div className={styles.storyTwo}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <InViewAnimation down>
            <span className={styles.number}>02.</span>
          </InViewAnimation>
          <InViewAnimation down>
            <h2 className={styles.complexHeading}>
              <span className={styles.heading}>Start of the collaboration</span>
              <span className={styles.heading}>and initial challenges</span>
            </h2>
          </InViewAnimation>
        </div>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <InViewAnimation down>
              <div className={styles.background} />
              <ImageComponent
                className={styles.storyImage}
                src={storyTwo}
                alt="Office people"
                width={570}
                height={392}
              />
            </InViewAnimation>
          </div>
          <div className={`${styles.text} ${styles['not-full']}`}>
            <InViewAnimation down>
              <p>
                From the start, it was not a client-contractor relationship. Instead, Onix
                developers were expected to become members of the existing team with its own
                processes, rules, and management that had been formalized over fifteen years.
              </p>
            </InViewAnimation>
            <InViewAnimation down>
              <p>
                It took a while, but the genuine efforts of the developers and management on both
                sides, friendly communication, and a sense of humor helped Onix’s developers
                integrate into the wider team. The same thing happened with subsequent teams and
                became easier each time.
              </p>
            </InViewAnimation>
            <InViewAnimation down>
              <p>
                It was important for us that Learning Pool software engineers should approve all our
                programmers’ work. Reviewing all the code written, they quickly noticed that it was
                very clear and, written to a very high standard. After a month of work, Onix
                developers began to review the code written by Learning Pool as well.
              </p>
            </InViewAnimation>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <InViewAnimation down>
              <p>
                After two months, Onix programmers proceeded to work on AAA-level tasks like
                rewriting the query builder and removing SCSS.
                After three months, Onix engineer, Vadim, became a senior developer and was assigned
                to work with Production. Our specialists began to participate in the planning calls
                and advise Learning Pool on the implementation of complex structures.
              </p>
            </InViewAnimation>
            <InViewAnimation down>
              <p>
                Besides the infusion of new blood, Onix’s team brought a new outlook to the
                projects.
                Working primarily for outsourcing clients, our specialists develop flexibility and
                amass
                large personal libraries of solutions and methods over the course of 10–30 diverse
                projects. Learning Pool welcomed our suggestions for using different approaches in
                development, different methods, new processes, and much more.
              </p>
            </InViewAnimation>
            <InViewAnimation down>
              <p>
                So, through continuous hard work, high quality code, and a fresh approach to
                development tasks, within 3 months, Onix’s team was able to win over the customer
                and convince the leadership to hire more specialists from Onix.
              </p>
            </InViewAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollaborationStory;
