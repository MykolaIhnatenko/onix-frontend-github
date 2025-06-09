import OtherProjects from '../../../components/OtherProjects/OtherProjects';
import VRARContent from '../../../components/VRARContent/VRARContent';
import { IProject } from '../../../interfaces/IProjectsList';

import styles from '../sass/coloradoSportsVideoProjectsSection.module.scss';

function ColoradoSportsVideoProjectsSection({ projects }: { projects: IProject[] }) {
  return (
    <section className={styles.projectsSection}>
      <div className={`${styles.container} coloradoContainer`}>
        <div className="projectsCard cardContainer">
          <VRARContent>
            <h2 className="title">
              <span>More </span>
              Sports & Fitness
              <span> Projects </span>
            </h2>
          </VRARContent>
          <OtherProjects
            projects={projects}
            classes={{
              section: '!gap-[30px] screen-lg:!gap-[34.5px] screen-md:!gap-[24px]',
              cardImage: 'min-sm:!min-h-[200px]',
              cardTitle: '!text-[#9B8CD7]',
              cardSubTitle: '!text-[#9E98B2]',
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default ColoradoSportsVideoProjectsSection;
