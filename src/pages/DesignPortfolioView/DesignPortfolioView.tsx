import CallToActionComponent from '../../components/CallToActionBlock/CallToActionComponent';
import IDesignPortfolio from './interfaces/IDesignPortfolio';
import ActiveTitleHeader from '../../components/ActiveTitleHeader/ActiveTitleHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';
import { EASY_PROJECTS_PAGINATION_LIMIT } from '../../constants/constants';

import TellUsAboutLG from '@/images/img_tell_us_about_lg.webp';
import styles from './sass/DesignPortfolio.module.scss';

function DesignPortfolioView({
  typeFilter, typeFilterHandle, isLoading, technologiesList, arrayText, containerRef, listProjects,
}: IDesignPortfolio) {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.wrapper}>
          <ActiveTitleHeader
            title="Our Showcase of"
            typeFilter={typeFilter}
            typeFilterHandle={typeFilterHandle}
            technologiesList={technologiesList}
            arrayText={arrayText}
          />

          <div
            ref={containerRef}
            id="scroll"
            className={styles.contentContainer}
          >
            {listProjects?.map(({ id, attributes }, index) => (
              <ProjectCard
                key={[id, index].join('_')}
                url={attributes?.page?.data?.attributes?.url || ''}
                image={attributes?.picture?.data?.attributes?.url}
                header={attributes?.header}
                description={attributes?.description || attributes?.page?.data?.attributes?.description}
              />
            ))}
            {isLoading && new Array(EASY_PROJECTS_PAGINATION_LIMIT).fill(0).map((_, index) => (
              <SkeletonLoader key={['loader', index].join('_')} />
            ))}
          </div>
        </div>
      </div>
      <CallToActionComponent
        background={TellUsAboutLG}
        withButton
        title="Tell us about your product idea and let the magic unfold."
        btnText="Speak to Our Expert"
      />
    </div>
  );
}

export default DesignPortfolioView;
