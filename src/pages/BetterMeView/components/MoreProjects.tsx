import VRARContent from '../../../components/VRARContent/VRARContent';
import IBetterMePagePops from '../interfaces/IBetterMePage';
import OtherProjects from '../../../components/OtherProjects/OtherProjects';

import styles from '../sass/moreProjects.module.scss';

function MoreProjects({ projects }:Pick<IBetterMePagePops, 'projects'>) {
  return (
    <section className={styles.moreProjects}>
      <div className="betterMeContainer">
        <VRARContent>
          <h2>More Sports & Fitness projects</h2>
        </VRARContent>
        <OtherProjects
          projects={projects}
          classes={{
            section: 'screen-lg:gap-[20px] screen-md:gap-[24px]',
          }}
        />
      </div>
    </section>
  );
}

export default MoreProjects;
