import ColoradoSportVideoNumberList from './ColoradoSportsVideoNumberList';
import ColoradoSportsVideoDotsList from './ColoradoSportsVideoDotsList';
import VRARContent from '../../../components/VRARContent/VRARContent';
import ourSolutionsNumber from '../data/ourSolutionsNumberListData';
import ourSolutionsContent from '../data/ourSolutionsContentData.json';

import styles from '../sass/coloradoSportsVideoOurSolutionsSection.module.scss';

function ColoradoSportsVideoOurSolutionsSection() {
  return (
    <section className={styles.ourSolutionsSection}>
      <div className={`${styles.container} coloradoContainer`}>
        <div className={`${styles.ourSolutionsContainer} cardContainer`}>
          <VRARContent>
            <p className={`${styles.sectionTitle} sectionTitle`}>OUR SOLUTIONS</p>
          </VRARContent>
          <div className={styles.flexBlock}>
            <div className={styles.leftBlock}>
              <VRARContent>
                <h2>
                  In collaboration with the client,
                  <span> we were working on </span>
                  complete project documentation
                  <span> and </span>
                  design.
                </h2>
              </VRARContent>
              <VRARContent>
                <p className="fs16">
                  We started working on the project by studying the client’s requirements and creating a user flow
                  for the site and the admin panel. It was created based on materials that the client already had
                  (site, admin on WP, and documentation) and intended to create a better experience for the user.
                  <br />
                  <br />
                  After approving the flow, the designer created wireframes and a prototype. Our designer researched
                  similar services to use standard page patterns when creating wireframes. We created some analogies
                  of a “shopping cart” for videographers’ assigned games. But instead of just one cart, we made
                  multiple for each videographer.
                  <br />
                  <br />
                  The idea of a standard shopping cart was a perfect solution as we needed to allow the admin to work
                  on a list of assigned games for each videographer before they committed to it.
                  <br />
                  <br />
                  So, not only can the admin add a game to a videographer’s cart but also look at how it will work
                  with the rest of the videographer’s schedule, remove it from the cart as needed or reassign it
                  to another videographer. Also, similar to the standard cart, our videographer’s cart serves
                  as a reminder to the admin - the videographer’s name appears at the top of the page if the
                  videographer has some games assigned to him that he needs to be notified about.
                </p>
              </VRARContent>
            </div>
            <div className={styles.rightBlock}>
              <VRARContent>
                <h2 className={styles.rightSubtitle}>
                  <span>To make </span>
                  scheduling games
                  <span> between videographers </span>
                  easier for the admin,
                  <span> we implemented a </span>
                  multistep videographer assignment process
                  <span> where the </span>
                  admin can:
                </h2>
              </VRARContent>
              <ColoradoSportVideoNumberList list={ourSolutionsNumber} />
              <VRARContent>
                <p className={`${styles.lastText} fs16`}>
                  The admin panel also allows users to make changes in the games, put games on hold if needed, ensure
                  the assigned videographer receives the latest information about the game, and alert the admin of
                  complimentary orders that need to be taken into account when placed for the main game.
                </p>
              </VRARContent>
            </div>
          </div>
          <div className={styles.flexBlock}>
            <h2 className={styles.lastSubheader}>
              <span>So, </span>
              summing up our work for CSV,
              <span> these are </span>
              our leading solutions:
            </h2>
            <ColoradoSportsVideoDotsList list={ourSolutionsContent} variant="ourSolutions" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColoradoSportsVideoOurSolutionsSection;
