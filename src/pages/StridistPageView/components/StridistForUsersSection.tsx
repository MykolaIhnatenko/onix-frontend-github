import StridistForUsersBlock from './StridistForUsersBlock';
import { forUsersListContent1, forUsersListContent2 } from '../data/forUsersListContent';
import ForUsers1 from '@/images/StridistPage/img_for-users1@2x.webp';
import ForUsers2 from '@/images/StridistPage/img_for-users2@2x.webp';

import styles from '../sass/stridistForUsersSection.module.scss';

function StridistForUsersSection() {
  return (
    <section className={styles.forUsersSection}>
      <div className={`${styles.container} stridistContainer`}>
        <h2 className="bigTitle h3Big">The app we developed benefits several user groups:</h2>
        <StridistForUsersBlock
          img={ForUsers1}
          title="Fitness and nutrition professionals:"
          alt="two-women"
          forUsersListContent={forUsersListContent1}
          type="first"
        />
        <StridistForUsersBlock
          img={ForUsers2}
          title="Customers:"
          alt="two-peoples"
          forUsersListContent={forUsersListContent2}
          type="second"
        />
      </div>
    </section>
  );
}

export default StridistForUsersSection;
