import ImageComponent from '../../../components/Image/Image';
import VRARContent from '../../../components/VRARContent/VRARContent';
import solutionsItems from '../data/solutionsItemsData';
import BetterMeRightImg from '@/images/BetterMe/img_rightImg.webp';
import BetterMeLeftImg from '@/images/BetterMe/img_leftImg.webp';

import styles from '../sass/solutions.module.scss';

function Solutions() {
  return (
    <section className={styles.solutions}>
      <div className="betterMeContainer">
        <VRARContent>
          <h2>Our Solutions</h2>
        </VRARContent>
        <VRARContent className={styles.alignRight}>
          <div>
            <p>
              Highly-skilled experts were committed to working on this project on behalf of the Onix team.
              The top requirement for us was to make the buying experience seamless and clear. During the
              implementation of the design on the client side, Onix developers independently wrote plugins
              that could be connected to Shopify. Together with the client, we developed the logic according
              to which they want to display recommendations in the shopping cart.
            </p>
          </div>
        </VRARContent>
        <VRARContent className={styles.images}>
          <div className={styles.imageLeft}>
            <ImageComponent
              src={BetterMeLeftImg}
              alt="people"
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
              quality={100}
            />
          </div>
          <div className={styles.imageRight}>
            <ImageComponent
              src={BetterMeRightImg}
              alt="people"
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 100vw"
              quality={100}
            />
          </div>
        </VRARContent>
        <VRARContent className={styles.alignRight}>
          <div>
            <p className={styles.biggerText}>
              Additionally, during the development of this functionality, we analyzed the contents of the
              cart and created a special collection of products and possible recommendation chains.
            </p>
          </div>
        </VRARContent>
        <VRARContent className={styles.listHeader}>
          <p className={styles.biggerText}>
            Our development team conducted a detailed analysis of project requirements and challenges and
            came up with the following solutions:
          </p>
        </VRARContent>
        <ul>
          {solutionsItems.map(({ title, id }) => (
            <li key={id}>
              <VRARContent>
                <div className={styles.listItem}>
                  <span>
                    0
                    {id}
                  </span>
                  <p>{title}</p>
                </div>
              </VRARContent>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Solutions;
