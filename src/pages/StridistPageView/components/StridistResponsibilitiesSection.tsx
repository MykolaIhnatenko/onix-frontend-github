import ResponsibilitiesListItem from './ResponsibilitiesListItem';
import ImageComponent from '../../../components/Image/Image';
import responsibilitiesListContent from '../data/responsibilitiesListContent';
import Responsibilities from '../../../assets/images/StridistPage/img_responsibilities@2x.webp';

import styles from '../sass/stridistResponsibilitiesSection.module.scss';

function StridistResponsibilitiesSection() {
  return (
    <section className={styles.responsibilitiesSection}>
      <div className={`${styles.container} stridistContainer`}>
        <div className={styles.responsibilitiesTitles}>
          <h2>Our responsibilities</h2>
          <h3 className="fs_20">Onix involved our best-in-class specialists to complete the following tasks:</h3>
          <div className={styles.image}>
            <ImageComponent
              src={Responsibilities}
              width={410}
              height={397}
              alt="woman"
            />
          </div>
        </div>
        <ul className={styles.responsibilitiesList}>
          {responsibilitiesListContent.map(({ id, content }) => (
            <ResponsibilitiesListItem key={id} id={id} content={content} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default StridistResponsibilitiesSection;
