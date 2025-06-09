import MainTitle from '../../../components/MainTitle/MainTitle';
import ButtonsPanel from './ButtonsPanel';
import { IWorkMainSection } from '../interfaces/IWork';

import styles from '../sass/workMainSection.module.scss';

function WorkMainSection({ typeFilter, typeFilterHandle, technologiesList }: IWorkMainSection) {
  return (
    <section className={`d-flex d-item-between d-justify-between d-col ${styles.container}`}>
      <div className={styles.wrapperText}>
        <MainTitle
          tag="h1"
          className={styles.title}
        >
          See What
          {' '}
          <br />
          Projects We Do
        </MainTitle>
        <div className={styles.text}>
          We provide full-cycle development and design
          for startups and small and medium businesses
        </div>
      </div>
      <ButtonsPanel
        typeFilter={typeFilter}
        typeFilterHandle={typeFilterHandle}
        technologiesList={technologiesList}
      />
      <div className={styles.wrapperLine}>
        <div className={styles.line} />
      </div>
    </section>
  );
}

export default WorkMainSection;
