import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/DataDrivenDesingSolution.module.scss';

const studyImage = '/static/images/Pages/DataDrivenDesignPage/img_studyImage.webp';
const checkImage = '/static/images/Pages/DataDrivenDesignPage/img_checkImage.webp';
const analyzeImage = '/static/images/Pages/DataDrivenDesignPage/img_analyzeImage.webp';
const discoverImage = '/static/images/Pages/DataDrivenDesignPage/img_discoverImage.webp';
const improveImage = '/static/images/Pages/DataDrivenDesignPage/img_improveImage.webp';
const metricsImage = '/static/images/Pages/DataDrivenDesignPage/img_metricsImage.webp';

function DataDrivenDesignSolution() {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>
        How Onix uses UX data and implements data-driven solutions to improve product design
      </h2>
      <div className={`${styles.imageWrapper} ${styles.mt80}`}>
        <ImageComponent
          width={960}
          height={400}
          src={studyImage}
          alt="studyImage"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.subTitle}>
          1. Study the product and determine the goals.
        </p>
        <p className={styles.text}>
          We start by analyzing the website or mobile app from a business
          point of view, and namely its business model, monetization methods,
          and strategy. This research helps define the goals that are currently
          important within the “big picture”, break down those goals into signals
          that indicate whether a goal has been reached, and convert those signals
          into several actionable metrics.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt80}`}>
        <ImageComponent
          width={960}
          height={400}
          src={checkImage}
          alt="checkImage"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.subTitle}>
          2. Check that everything is configured correctly in Google Analytics and that all data is relevant.
        </p>
        <p className={styles.text}>
          These activities may differ depending on what stage the product is.
          For example, if we are new to a project, the first task may be to build
          reporting for our team. It is important to understand where the data comes
          from, how it moves, and how to perceive each metric. Then, we proceed to
          brainstorming how to improve performance and developing actionable plans.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt70}`}>
        <ImageComponent
          width={960}
          height={400}
          src={analyzeImage}
          alt="analyzeImage"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.subTitle}>
          3. Analyze the necessary input data.
        </p>
        <p className={styles.text}>
          The fewer actionable metrics, the better, but the more relevant UX data is
          available, the higher the likelihood of making the right decision.
          <br />
          Typically, our UX efficiency toolkit includes at least the following three universal metrics:
        </p>
        <p className={styles.secondSubTitle}>
          1) Conversion rate
        </p>
        <p className={styles.text}>
          The conversion rate is the number of visitors who converted, let’s say,
          subscribed or bought a service, divided by the number of those who had the
          opportunity. The value is calculated and measured from the site activity,
          and the brand elements, usability, and accessibility of the interface throughout
          the conversion funnel can directly affect it.
        </p>
        <p className={styles.secondSubTitle}>
          2) Drop-off rate
        </p>
        <p className={styles.text}>
          Drop-off rates measure the number of visitors who left the conversion funnel
          without converting. Google Analytics calculates this rate in different segments,
          helping identify the steps in the funnel that are causing visitors to ‘drop off’.
          Once we’ve calculated it for each step, we can analyze its design and usability and
          suggest the necessary improvements to optimize conversion.
        </p>

        <p className={styles.secondSubTitle}>
          3) Returning users rate
        </p>
        <p className={styles.text}>
          This metric helps us understand how many people came to a site or app more than once
          compared to the total number of visitors. It is desirable to scale up traffic and attract
          new customers, but the efforts to retain existing customers and encourage them to use
          a product repeatedly bring a greater ROI.
        </p>

        <p className={`${styles.text} ${styles.mt32}`}>
          Google Analytics also helps monitor other vital behavioral metrics, such as:
        </p>
        <ul className={`${styles.text} ${styles.mt32}`}>
          <li>device usag, which tells us on what devices users access the product</li>
          <li>the percentage of website/mobile app visitors that visited it and left after 5-15 seconds</li>
          <li>the page(s) or screen(s) where most users leave the website or mobile app</li>
          <li>average time on a page, which helps identify on what pages users spend most of their time</li>
          <li>the amount of time a user has spent “engaged” on the page</li>
          <li>average pages/screens viewed by users per session and clicks or taps made on the pages</li>
          <li>number of likes, comments, shares, copy/paste, and clicks generated by content consumers</li>
          <li>number of users returning to the site or app within a certain period</li>
          <li>the number of times a new feature was used within a specified time</li>
          <li>time spent by the user to complete a task</li>
          <li>number of tasks that were executed correctly from the beginning to endpoint</li>
          <li>number of wrong entries</li>
        </ul>
        <p className={`${styles.text} ${styles.mt32}`}>
          Google Analytics also allows you to monitor custom behavioral metrics that your particular case requires.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt70}`}>
        <ImageComponent
          width={960}
          height={400}
          src={discoverImage}
          alt="discoverImage"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.subTitle}>
          4. Discover correlations and build hypotheses.
        </p>
        <p className={styles.text}>
          Our designers don’t rely exclusively on numbers, e.g., the number of monthly visitors,
          but always dig deeper and try to find out why they visit the site, where they come from,
          how they actually interact with the site, why, or how to make them stop, and so forth.
        </p>
        <p className={styles.text}>
          We build correlations between the UX data in analytics and how the interface works.
          Based on these, we can formulate a hypothesis as to possible improvements.
          For example, if the team discovers that most visitors drop off before clicking the
          last button, they may presume that the button’s color or text may be the reason.
          If the button is red, they may assume it seems alarming to users, and another color
          might help improve the situation.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt60}`}>
        <ImageComponent
          width={960}
          height={400}
          src={improveImage}
          alt="improveImage"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.subTitle}>
          5. Improve the product.
        </p>
        <p className={styles.text}>
          Often, we use A/B testing to obtain the answers. In the case of a red call-to-action,
          it can show which button users will be more likely to click — red or green. When the
          product’s test version is launched, half of the audience would see a red button and
          half — a new green button. They can go further and check which alternative color the
          users prefer, e.g., green or blue. The number of clicks on either button would be
          counted over some period. After that, the team would approve the color of the button
          that proved more popular with the end-users and remove the less popular color(s).
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt60}`}>
        <ImageComponent
          width={960}
          height={400}
          src={metricsImage}
          alt="metricsImage"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.subTitle}>
          6. Use the metrics to evaluate the improvement.
        </p>
        <p className={styles.text}>
          Randomized controlled A/B tests can also calculate the ROI of UX improvements.
          It allows understanding why certain components impact user behavior and showing
          causation — the relationship between the effort and the actual result.
        </p>
      </div>
    </div>
  );
}

export default DataDrivenDesignSolution;
