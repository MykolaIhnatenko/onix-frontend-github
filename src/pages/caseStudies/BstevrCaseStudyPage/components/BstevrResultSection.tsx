import BstevrContentBlock from './BstevrContentBlock';
import VRARContent from '../../../../components/VRARContent/VRARContent';
import ImageComponent from '../../../../components/Image/Image';

import QuoteBg from '@/images/BstevrCaseSudy/img_Frame.webp';
import styles from '../sass/bstevrContentBlock.module.scss';

function BstevrResultSection() {
  return (
    <section className="greySection resultAndProspects">
      <BstevrContentBlock>
        <h2>
          Results and prospects.
        </h2>
        <div className={styles.article}>
          <div className={styles.text}>
            <VRARContent>
              <p>
                The cooperation between the three agencies and the three founders
                of BSTEVR has been smooth, productive, and mutually beneficial.
              </p>
            </VRARContent>
            <VRARContent className={styles.quote}>
              <ImageComponent
                src={QuoteBg}
                alt="Mike Hoefflinger"
                fill
              />
              <p className={styles.quotes}>“</p>
              <p className={styles.quoteText}>
                The Onix team has been smart, proactive, fast, and responsive.
                It&apos;s been a pleasure to work with them, and great to have them as part of our team.
              </p>
              <p className={styles.author}>
                Mike&nbsp;Hoefflinger, Co&#8209;Founder
              </p>
            </VRARContent>
            <VRARContent>
              <p>
                A beta version of the NFL game simulator app was successfully launched, and currently,
                Onix&apos;s team is in charge of its maintenance.
                <span className="divider" />
                Moreover, we are already working on the second version of the product, adding increasingly
                useful and interesting functionalities that users will definitely appreciate.
                We expect to release it in the near future.
              </p>
            </VRARContent>
          </div>
        </div>
      </BstevrContentBlock>
    </section>
  );
}

export default BstevrResultSection;
