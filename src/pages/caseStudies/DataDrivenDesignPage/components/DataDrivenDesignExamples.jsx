import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/DataDrivenDesignExamples.module.scss';

const basePath = '/static/images/Pages/DataDrivenDesignPage';
const newCampaignProject = `${basePath}/img_newCampaignProject.webp`;
const newCampaignProblem = `${basePath}/img_newCampaignProblem.webp`;
const newCampaignImprovement = `${basePath}/img_newCampaignImprovement.webp`;
const newCampaignResult = `${basePath}/img_newCampaignResult.webp`;
const hypothesisCreatorsImage = `${basePath}/img_hypothesisCreatorsImage.webp`;
const improvementCreatorsImage = `${basePath}/img_improvementCreatorsImage.webp`;
const currentImproveImage = `${basePath}/img_currentImproveImage.webp`;
const finalResultImage = `${basePath}/img_finalResultImage.webp`;

function DataDrivenDesignExamples() {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>
        Examples of Onix’s data-driven design improvements
      </h2>
      <div className={`${styles.textWrapper} ${styles.mt80}`}>
        <p id="adoricCase" className={styles.subTitle}>
          Case 1: Adoric’s campaign templates
        </p>
        <p className={`${styles.text} ${styles.mt16}`}>
          <strong>Project: </strong>
          Adoric is a marketing SaaS that facilitates the creation
          and management of marketing campaigns on the Adoric website.
          Among other abilities, Adoric can scan each client’s website to
          create a generalized brand concept, including the preferred colors,
          fonts, and other aspects of their visual presentation. Moreover, it
          can scan whole domains searching for, say, ‘Black Friday’ or ‘Merry Christmas’
          banners to give Onix’s designers the idea of the most popular colors and other trends.
        </p>
        <p className={`${styles.text} ${styles.mt16}`}>
          A team of designers uses this data to create customizable
          banner templates that clients can use for their marketing campaigns.
          This service was intended to streamline new Adoric clients’ operations
          and, by increasing the effectiveness of their marketing campaigns,
          convince them to pay for a subscription. Simultaneously, users have
          the option to create their own banner from scratch.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt60}`}>
        <ImageComponent
          src={newCampaignProject}
          alt="newCampaignProject"
          width={800}
          height={509}
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={`${styles.textWrapper} ${styles.mt60}`}>
        <p className={styles.text}>
          <strong>Problem: </strong>
          The product team identified a problem: despite the
          convenience and ease of using the ready-made templates, nearly ¾ of
          campaigns on the platform were still created from scratch.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt60}`}>
        <ImageComponent
          width={800}
          height={501}
          src={newCampaignProblem}
          alt="newCampaignProblem"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={`${styles.textWrapper} ${styles.mt60}`}>
        <p className={styles.text}>
          <strong>Hypothesis: </strong>
          The design team assumed that the clients chose ‘blank campaigns’ because
          the available templates did not match their websites’ appearance.
        </p>
        <p className={`${styles.text} ${styles.mt16}`}>
          <strong>Improvement: </strong>
          To provide clients with more suitable templates, the team suggested two possible solutions:
        </p>
        <p className={`${styles.text} ${styles.mt32} ${styles.ml15}`}>
          1) To apply the information about each client’s brand concept to
          the search for banner templates, i.e. search for matching colors
          and font styles in templates in the same language for the same industry.
        </p>
        <p className={`${styles.text} ${styles.mt16} ${styles.ml15}`}>
          2) To apply the information about each client’s brand concept to
          the search for banner templates, i.e. search for matching colors and font
          styles in templates in the same language for the same industry.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt60}`}>
        <ImageComponent
          width={800}
          height={508}
          src={newCampaignImprovement}
          alt="newCampaignImprovement"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={`${styles.textWrapper} ${styles.mt60}`}>
        <p className={styles.text}>
          <strong>Result: </strong>
          The effort delivered tangible results. Over six months,
          the key metric — the number of used templates — increased significantly.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt60}`}>
        <ImageComponent
          width={800}
          height={500}
          src={newCampaignResult}
          alt="newCampaignResult"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={`${styles.textWrapper} ${styles.mt100}`}>
        <p id="whistleLiveCase" className={styles.subTitle}>
          Case 2: Whistle.Live categories and search
        </p>
        <p className={`${styles.text} ${styles.mt16}`}>
          <strong>Project: </strong>
          Whistle.Live is an online platform where users can host and attend
          various educational, entertainment, and other events for a fee or
          free of charge, subscribe to content creators, support them with
          donations, and more. The platform generates revenue through commissions from online transactions.
        </p>
        <p className={`${styles.text} ${styles.mt16}`}>
          <strong>Problem: </strong>
          To increase revenues, the owner wished to increase the conversion
          rate: grow the number of users who buy tickets to online events. At that
          time, it was only 8% of all site visitors. It was assumed that such development
          would also increase the number of subscribers. Generally, the owner of the new
          service was interested in learning what was interesting for the audience.
        </p>
        <p className={`${styles.text} ${styles.mt16}`}>
          <strong>Hypothesis: </strong>
          High exit and bounce rates may indicate that a page doesn’t contain the information
          the user was seeking or the available information is not easy to find or understand.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt60}`}>
        <ImageComponent
          width={800}
          height={508}
          src={hypothesisCreatorsImage}
          alt="hypothesisCreatorsImage"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={`${styles.textWrapper} ${styles.mt60}`}>
        <p className={styles.text}>
          The team hypothesized that the user interface was the reason:
          the system did not indicate the creators’ skills, so the users
          had difficulty finding the right content among thousands of available
          videos and events from all industries. Searching for information could have been easier.
        </p>
        <p className={`${styles.text} ${styles.mt16}`}>
          <strong>Improvement: </strong>
          The designer in charge suggested a solution: to improve the global
          search by filtering the event hosts and content creators by category
          (e.g., music, design, business, art, etc.). He assumed that a better
          organization of the available creators and optimized search might
          reduce both the task completion time and the bounce rate, which would positively impact the sales numbers.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt60}`}>
        <ImageComponent
          width={800}
          height={509}
          src={improvementCreatorsImage}
          alt="improvementCreatorsImage"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={`${styles.textWrapper} ${styles.mt60}`}>
        <p className={styles.text}>
          The team set a goal: to increase the number of ticket buyers from
          8% to 20% in a month. The number of subscribers (8% of users) should grow as well.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt60}`}>
        <ImageComponent
          width={800}
          height={509}
          src={currentImproveImage}
          alt="currentImproveImage"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className={`${styles.textWrapper} ${styles.mt60}`}>
        <p className={styles.text}>
          <strong>Result: </strong>
          In a month after the UX and UI design changes were introduced,
          the team accomplished the goal with flying colors.
        </p>
        <p className={`${styles.text} ${styles.mt16}`}>
          The segmentation of creators also provided valuable
          information about the target audience’s preferences.
        </p>
      </div>
      <div className={`${styles.imageWrapper} ${styles.mt60}`}>
        <ImageComponent
          width={800}
          height={508}
          src={finalResultImage}
          alt="finalResultImage"
          quality={100}
          sizes="100vw"
        />
      </div>
    </div>
  );
}

export default DataDrivenDesignExamples;
