import InViewAnimation from '../InViewAnimation';
import { developers, projects } from '../../data/LearningPoolData';
import ImageComponent from '../../../../../components/Image/Image';

import styles from '../../sass/ProjectStory.module.scss';

function ProjectStory() {
  const renderedDevelopers = developers.map(({
    imgSrc, name, text, srcSet,
  }) => (
    <div className={styles.developer} key={imgSrc}>
      <div className={styles.imageWrapper}>
        <ImageComponent
          src={imgSrc}
          srcSet={srcSet}
          alt="developer"
          width={204}
          height={229}
        />
      </div>
      <h3 className={styles.subtitle}>{name}</h3>
      <div className={styles.text}>
        <InViewAnimation down>
          <p>{text}</p>
        </InViewAnimation>
      </div>
    </div>
  ));

  return (
    <div className={styles.storyFour}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <InViewAnimation down>
            <span className={styles.number}>04.</span>
          </InViewAnimation>
          <div className={styles.complexHeading}>
            <InViewAnimation down>
              <h2 className={styles.heading}>The project we work on</h2>
            </InViewAnimation>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <InViewAnimation down>
              <p>
                Learning Pool is a large system that can be compared with the human body — all
                organs are independent but are working together to ensure seamless performance and
                commercial success.
              </p>
            </InViewAnimation>
            <InViewAnimation down>
              <p>
                Onix’s teams have been involved in two of Learning Pool’s six projects so far. Both
                projects are components of a Learning Experience Platform.
              </p>
            </InViewAnimation>
          </div>
        </div>
        <div className={styles.content}>
          <InViewAnimation down>
            <div className={styles.projectsContainer}>
              {projects.map(({
                id, title, text, src,
              }) => (
                <div key={id} className={styles.projectContainer}>
                  <div className={styles.projectImage}>
                    <ImageComponent
                      src={src}
                      width={50}
                      height={50}
                      alt="icon"
                    />
                  </div>
                  <h3 className={styles.subtitle}>{title}</h3>
                  <div className={styles.text}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </InViewAnimation>
        </div>
        <div className={`${styles.content} ${styles.mLeft}`}>
          <div className={styles.text}>
            <InViewAnimation down>
              <p>Initially, Onix’s personnel included five full-stack developers:</p>
            </InViewAnimation>
          </div>
        </div>
        <div className={`${styles.content} ${styles.wide}`}>
          <InViewAnimation down>
            <div className={styles.developers}>
              {renderedDevelopers}
            </div>
          </InViewAnimation>
        </div>
        <div className={`${styles.content} ${styles.center}`}>
          <div className={styles.text}>
            <InViewAnimation down>
              <p>
                Another full-stack developer and 3 quality assurance specialists have joined them
                recently.
              </p>
            </InViewAnimation>
            <InViewAnimation down>
              <p>
                Onix’s teams both deliver on the client’s ideas, including the applications’
                up-to-date and trendy designs, as well as helping to choose the best methods of
                implementing an idea at general meetings. The improvements we have proposed have
                been significant, from aspects of the database organization to the implementation of
                payment methods.
              </p>
            </InViewAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectStory;
