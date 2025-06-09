import InViewAnimation from '../InViewAnimation';
import ImageComponent from '../../../../../components/Image/Image';

import styles from '../../sass/ExampleStory.module.scss';

const ianPhoto = '/static/images/Pages/LearningPoolPage/ic_Ian.svg';
const ryanPhoto = '/static/images/Pages/LearningPoolPage/img_Ryan.webp';
const ryanPhoto2x = '/static/images/Pages/LearningPoolPage/2x/img_Ryan@2x.webp';
const decorativeBg = '/static/images/Pages/LearningPoolPage/img_decorative_bg.webp';
const topImage = '/static/images/Pages/LearningPoolPage/img_Decorative_bg3.webp';
const bottomImage = '/static/images/Pages/LearningPoolPage/img_Decorative_bg2.webp';
const dots = '/static/images/Pages/LearningPoolPage/ic_upper-image.svg';

function ExampleStory() {
  return (
    <div className={styles.storyFive}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.numberContainer}>
            <InViewAnimation down>
              <h2 className={styles.number}>05.</h2>
            </InViewAnimation>
          </div>
          <div className={styles.complexHeading}>
            <InViewAnimation down>
              <h2 className={styles.heading}>Examples of Onix&apos;s work</h2>
              <h2 className={styles.heading}>to improve the product</h2>
            </InViewAnimation>
          </div>
        </div>
        <div className={styles.content}>
          <InViewAnimation down>
            <div className={styles.examplesWrapper}>
              <div className={`${styles.examples} ${styles.left}`}>
                <div className={styles.example}>
                  <h3 className={styles.subtitle}>Technologies update</h3>
                  <div className={styles.text}>
                    <p>
                      Onix’s team had all technologies employed in the projects updated to
                      more
                      convenient new versions.
                    </p>
                  </div>
                </div>
                <div className={styles.example}>
                  <h3 className={styles.subtitle}>
                    Elimination of the problem
                  </h3>
                  <div className={styles.text}>
                    <p>
                      Reviewing Project #2, senior developer Alexander detected a problem in
                      Production related to payments.
                    </p>
                    <p>Closing off that bug led to a better experience for the end user.</p>
                  </div>
                </div>
                <div className={styles.example}>
                  <h3 className={styles.subtitle}>Existing code structuring</h3>
                  <div className={styles.text}>
                    <p>
                      Alexander also structured the existing code and improved the format of
                      code
                      writing.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.examples} ${styles.right}`}>
                <div className={styles.img}>
                  <ImageComponent
                    src={dots}
                    width={130}
                    height={130}
                    alt="dots"
                  />
                </div>
                <div className={`${styles.example} ${styles.border}`}>
                  <h3 className={styles.subtitle}>Reviewing and tidying up</h3>
                  <div className={styles.text}>
                    <p>
                      Due to the numerous iterations and changes to the codebase over the life
                      cycle of the product, a large amount of work was devoted to tidying up
                      potential memory leaks and other areas that required optimization. One
                      specific task led to over 2GB of RAM being reclaimed, which involved
                      updates
                      to over 1,000 files.
                    </p>
                    <p>
                      Vadim, Onix’s senior developer on Project #1, took up the immense task,
                      which
                      required reviewing the entire project and fixing every unique leak
                      without
                      breaking another element. The task took two months to complete into
                      production.
                    </p>
                  </div>
                </div>
                <div className={styles.example}>
                  <h3 className={styles.subtitle}>Rewriting of the query builder</h3>
                  <div className={styles.text}>
                    <p>
                      Yevgenii was tasked with a complete rewrite of the query builder, which
                      required large updates to both the UX (to make it easier to use), but
                      also
                      within the code to remove large amounts of technical debt that had built
                      up
                      over previous iterations. The task required an in depth understanding of
                      the
                      functional requirements for each type of filter the builder is capable
                      of
                      creating.
                    </p>
                    <p>
                      Because all six projects are connected through a variety of services and
                      threads, a change made incorrectly in one part might cause a bug in
                      another
                      project that no one would be able to explain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </InViewAnimation>
        </div>
        <div className={styles.content}>
          <InViewAnimation down>
            <div className={`${styles.wrapper} ${styles.single}`}>
              <div className={styles.image} />
              <div className={styles.quoteContainer}>
                <span className={styles.sign}>“</span>
                <blockquote className={styles.quote}>
                  The query builder work
                  {' '}
                  <span className={styles.decorativeBgWrapper}>
                    is going particularly well
                    <ImageComponent
                      src={decorativeBg}
                      className={styles.decorativeBg}
                      fill
                      alt="yellow-bg"
                    />
                  </span>
                  {' '}
                  and the images we have seen from
                  the progress so far have got myself and others very excited to see this in
                  production. The work he has been doing on this front-end React skills is clearly
                  starting to pay off.
                </blockquote>
              </div>
              <div className={styles.reportContainer}>
                <div className={styles.report}>
                  <h4>Ian Blackburn, Product Manager,</h4>
                  <p>said of our developer Yevgenii</p>
                </div>
                <div className={styles.imageWrapper}>
                  <ImageComponent
                    src={ianPhoto}
                    alt="Ian Blackburn"
                    width={90}
                    height={90}
                  />
                </div>
              </div>
            </div>
          </InViewAnimation>
        </div>
        <div className={styles.content}>
          <InViewAnimation down>
            <div className={styles.examplesWrapper}>
              <div className={`${styles.examples} ${styles.left}`}>
                <div className={styles.example}>
                  <h3 className={styles.subtitle}>
                    Covering with tests
                  </h3>
                  <div className={styles.text}>
                    <p>
                      Onix’s team promoted covering the whole project with tests. Now we add
                      tests
                      to
                      every pull request.
                    </p>
                  </div>
                </div>
                <div className={styles.example}>
                  <h3 className={styles.subtitle}>
                    Updating component
                  </h3>
                  <div className={styles.text}>
                    <p>
                      Dmitryi updated the admin panel’s front-end component, namely, Material
                      UI, on Project #2. It took 4,000 lines of code, and now Dmitryi is the main consultant
                      on issues related to Material UI on the project.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.examples} ${styles.right}`}>
                <div className={`${styles.example} ${styles.notFullWidth}`}>
                  <h3 className={styles.subtitle}>
                    Optimizing queries
                  </h3>
                  <div className={styles.text}>
                    <p>
                      Vlad, who has worked on both projects, optimized many queries that were
                      not
                      originally designed for the large number of users Learning Pool now had.
                    </p>
                  </div>
                </div>
                <div className={styles.example}>
                  <h3 className={styles.subtitle}>
                    Paying attention to detail
                  </h3>
                  <div className={styles.text}>
                    <p>
                      On the dashboard, Vlad re-arranged the numerous objects and visual
                      elements
                      with
                      great precision and attention to detail. The entire code was error-free,
                      so
                      the
                      page works flawlessly now.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </InViewAnimation>
        </div>
        <div className={styles.content}>
          <InViewAnimation down>
            <div className={styles.quotesContainer}>
              <div className={styles.image} />
              <div className={styles.wrapper}>
                <div className={styles.quoteContainer}>
                  <span className={styles.sign}>“</span>
                  <blockquote className={styles.quote}>
                    His work on the dashboard grid ticket was exceptional, many people commented
                    on
                    how
                    closely his work matched Ollie’s designs.»
                  </blockquote>
                  <div className={`${styles.reportContainer} ${styles.flexReverse}`}>
                    <div className={styles.report}>
                      <h4>Ryan Smith, Software Development Team Lead,</h4>
                      <div className={styles.text}>
                        <p>said of our developer Vlad</p>
                      </div>
                    </div>
                    <div className={styles.imageWrapper}>
                      <ImageComponent
                        src={ryanPhoto}
                        srcSet={`${ryanPhoto} 1x, ${ryanPhoto2x} 2x`}
                        alt="Ryan Smith"
                        width={90}
                        height={90}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.quoteContainer}>
                  <span className={styles.sign}>“</span>
                  <blockquote className={styles.quote}>
                    [the dashboard grid] came out really well and has been well received around
                    the
                    business. It’s also been really great to see how Vlad has settled into
                    working
                    on the codebase…»
                  </blockquote>
                  <div className={styles.reportContainer}>
                    <div className={styles.report}>
                      <h4>Ian Blackburn, Product Manager,</h4>
                      <div className={styles.text}>
                        <p>about our developer Vlad</p>
                      </div>
                    </div>
                    <div className={styles.imageWrapper}>
                      <ImageComponent
                        src={ianPhoto}
                        alt="Ian Blackburn"
                        width={90}
                        height={90}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InViewAnimation>
        </div>
        <div className={styles.topImage}>
          <ImageComponent
            src={topImage}
            width={129}
            height={257}
            alt="half-circle"
          />
        </div>
        <div className={styles.bottomImage}>
          <ImageComponent
            src={bottomImage}
            width={105}
            height={215}
            alt="half-circle"
          />
        </div>
      </div>
    </div>
  );
}

export default ExampleStory;
