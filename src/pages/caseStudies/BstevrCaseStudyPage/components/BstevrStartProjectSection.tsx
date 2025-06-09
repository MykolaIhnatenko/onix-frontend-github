import BstevrContentBlock from './BstevrContentBlock';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../../components/Image/Image';
import bstevrStartProjectData from '../data/bstevrStartProjectData';
import StartProject from '@/images/BstevrCaseSudy/img_startOfTheProject.webp';

import styles from '../sass/bstevrContentBlock.module.scss';

function BstevrStartProjectSection() {
  return (
    <section className="greySection">
      <BstevrContentBlock>
        <h2>
          Start of the project.
        </h2>
        <div className={styles.article}>
          <div className={styles.text}>
            <VRARContent>
              <p>
                The founders had thoroughly thought out the idea of BSTEVR, its implementation, and the work plan,
                so at the time they approached Onix, the project documentation, including plans and development
                diagrams with requirements, was ready.
                <span className="divider bigDivider" />
                We were matched through Aloa, an&nbsp;intermediary company that facilitates outsourcing software
                development partnerships. Due to our reputation and twenty years of experience in most varied
                projects, with few things our experts haven&apos;t tried yet, Onix was determined the best fit for the
                project.
                <span className="divider bigDivider" />
                Onix&apos;s leading developer Alex Belous took a keen interest in the NFL games simulator app
                development idea. He came up with a solution and quickly
                delivered a demo version of the complex mechanism.
              </p>
            </VRARContent>
          </div>
          <div className={styles.pluses}>
            <VRARContent className={`${styles.notice} ${styles.reverse}`}>
              <p>
                Thus, after a tender, three teams took over the project:
              </p>
              <VRARContent>
                <ul>
                  {bstevrStartProjectData.map(({ id, content }) => (
                    <li key={id} className={styles.listItem}><p>{content}</p></li>
                  ))}
                </ul>
              </VRARContent>
            </VRARContent>
            <VRARContent>
              <ImageComponent
                className={styles.startProject}
                src={StartProject}
                alt="image"
                sizes="(max-width: 450px) 50vw, 100vw"
              />
            </VRARContent>
          </div>
        </div>
      </BstevrContentBlock>
    </section>
  );
}

export default BstevrStartProjectSection;
