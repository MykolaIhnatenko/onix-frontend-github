import ImageComponent from '../../../../components/Image/Image';

import styles from '../sass/ProjectXImplementationSection.module.scss';

const tablet = '/static/images/Pages/ProjectX/implementationSection/img_tablet_phone@2x.webp';

function ProjectXImplementationSection() {
  return (
    <section className={styles.implementationSection}>
      <div className={`${styles.container} container`}>
        <h2 className="implementationTitle">Design implementation</h2>
        <h3 className={styles.secondTitle}>Creating appealing visuals</h3>
        <p className={styles.paragraph}>
          Our designers created stunning visuals and delivered a scalable design system to keep the
          Project X look and feel consistent.
        </p>
        <div className={styles.tabletImg}>
          <ImageComponent
            className={styles.img}
            src={tablet}
            width={952}
            height={550}
            sizes="100vw"
            alt="tablet_phone"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectXImplementationSection;
