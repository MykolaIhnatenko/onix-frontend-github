import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/stridistResultSection.module.scss';

function StridistResultSection() {
  return (
    <section className={styles.resultSection}>
      <div className={`${styles.container} stridistContainer`}>
        <div className={styles.resultContent}>
          <VRARContent>
            <h2>Results</h2>
          </VRARContent>
          <VRARContent>
            <p className={`fs_24 ${styles.subTitle}`}>
              We have made a significant effort to contribute to the company&apos;s core product –&nbsp;
              <br />
              an all-in-one solution that allows fitness&nbsp;
              <br />
              and nutrition coaches to run their businesses&nbsp;
              <br />
              from one digital place while helping their&nbsp;
              <br />
              customers achieve the best results.
            </p>
          </VRARContent>
          <VRARContent>
            <p className={styles.text}>
              During the fitness business management platform development project, we set up a seamless
              and transparent communication process that allowed us to openly discuss requirements and risks, keep
              clients informed, and receive feedback. Such tight cooperation helped us guarantee complete
              understanding, no delays, and faster time-to-market.
              <br />
              <br />
              The Onix team built the new website architecture and implemented several new features to extend the
              whole fitness business management platform without compromising performance. Thanks to these changes,
              Stridist can meet its users’ needs by offering a convenient and smart way to run a fitness and
              nutrition business digitally.
            </p>
          </VRARContent>
        </div>
      </div>
    </section>
  );
}

export default StridistResultSection;
