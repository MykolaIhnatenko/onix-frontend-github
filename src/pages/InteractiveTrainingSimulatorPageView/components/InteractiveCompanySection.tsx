import VRARContent from '../../../components/VRARContent/VRARContent';
import InteractiveTitleBlock from './InteractiveTitleBlock';
import InteractiveProgress from './InteractiveProgress';

import styles from '../sass/InteractiveCompanySection.module.scss';

function InteractiveCompanySection() {
  return (
    <div
      className={`${styles.companySection} white companyInteractive interactive-section mb`}
    >
      <div className={`${styles.container} container4D`}>
        <InteractiveTitleBlock
          number="01"
          title="About the company"
          color="gray"
        />
        <VRARContent>
          <h2>
            The client’s idea
            <br />
            and business needs.
          </h2>
        </VRARContent>
        <div className={styles.contentBlock}>
          <VRARContent className={styles.contentBlockItem}>
            <p className={`${styles.lightGray} fs16`}>
              The
              <span className="fs16 fw500 purpleText">&nbsp;4D Interactive Simulator&nbsp;</span>
              is a brainchild of Robert Povey.
              Along with the ideas for the training platform development, Robert contributed to
              the project with his knowledge acquired from over 30 years of police service and his
              experience as a public order and firearms commander, Leadership Trainer for Senior Leaders
              at the National Police Staff College Bramshill, and a strategic advisor in the United
              Arab Emirates.
            </p>
            <br />
            <p className={`${styles.lightGray} fs16`}>
              Rob approached Onix with the idea of digitizing the safety-related training
              of personnel at entertainment, sports, cultural, or other events. After in-depth discussions,
              we came to a decision to implement it by developing a custom personnel training simulator app solution.
            </p>
            <br />
            <p className={`${styles.lightGray} fs16`}>
              In 2016, Robert approached Onix team with the idea of digitizing the safety-related training
              of personnel at entertainment, sports, cultural, or other events.
            </p>
          </VRARContent>
          <VRARContent className={styles.contentBlockItem}>
            <p className={`${styles.lightGray} fs16`}>
              Traditionally, such training simulators often relied on printed spreadsheets
              handed out to the participants. Rob wanted to make that process up-to-date,
              scalable, and easier to track for himself and his colleagues.
            </p>
            <br />
            <p className={`${styles.lightGray} fs16`}>
              Rob also intended to remove geographic limitations. Often, either an instructor or the trainees cannot be
              physically present at the training location. Personnel at multiple locations may also need to undergo the
              same training simultaneously.
            </p>
            <br />
            <p className={`${styles.lightGray} fs16`}>
              One solution was to move the training process online, but Rob also intended to improve learning outcomes
              across a wide range of public and private organizations. To this end, he envisioned challenging and
              realistic customizable scenario-based simulations in a highly engaging training environment.
            </p>
          </VRARContent>
        </div>
        <div className={styles.progressBlock}>
          <InteractiveProgress variant="companyProgress" duration=".companyProgress" />
          <div className={`${styles.progressBlockContent} companyProgress`}>
            <p>
              “The company was set up to design solutions that enrich the lives of their users. It is our belief
              that when it comes to experiences, they are enhanced with the more senses and emotions that are engaged.
              That is the aim of the solutions we develop to create those experiences – the fourth dimension (4D).”
            </p>
          </div>
        </div>
        <p className={`${styles.lightGray} ${styles.lastParagraph} fs16`}>
          — The solution would be provided by a
          <span> training simulation web app </span>
          that instructors like Rob and their
          trainees could use conveniently on smartphones and tablets.
        </p>
      </div>
    </div>
  );
}

export default InteractiveCompanySection;
