import { DEFAULT_PROJECTS_PAGINATION_LIMIT, FILTERS_VARIANT } from '../../../constants/constants';
import IProjectsSection from '../interfaces/IProjectSection';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';
import SkeletonLoader from '../../../components/SkeletonLoader/SkeletonLoader';

import styles from '../sass/projectSection.module.scss';

function ProjectsSection({
  typeFilter, filters, selectFilter, selectFilterHandle, listProjects, isLoading,
}: IProjectsSection) {
  return (
    <section className={styles.container}>
      {typeFilter !== FILTERS_VARIANT.SEE_ALL && (
        <div className={styles.filterBar}>
          {filters.length > 0 && filters.map(({ id, name }) => (
            <button
              key={[id, name].join('_')}
              className={`${styles.filterItem} ${selectFilter === name ? styles.activeFilterItem : ''}`}
              onClick={() => selectFilterHandle(name)}
              type="button"
            >
              {name}
            </button>
          ))}
        </div>
      )}
      <div
        className={`${styles.contentContainer} ${typeFilter !== FILTERS_VARIANT.SEE_ALL
          ? styles.activeFilter : ''}`}
      >
        {listProjects.length > 0 && listProjects.map(({ id, attributes }, index) => (
          <ProjectCard
            key={[id, index].join('_')}
            url={attributes?.page?.data?.attributes?.url || ''}
            image={attributes?.picture?.data?.attributes?.url}
            header={attributes.header}
            description={attributes?.description || attributes?.page?.data?.attributes?.description}
          />
        ))}
        {isLoading && new Array(DEFAULT_PROJECTS_PAGINATION_LIMIT).fill(0).map((_, index) => (
          <SkeletonLoader key={['skeleton', index].join('_')} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
