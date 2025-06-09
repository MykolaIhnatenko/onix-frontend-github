import designProcessContent from '../data/designProcessContent.json';
import Card from './Card';
import IDesignProcessSection from '../interfaces/IDesignProcessSection';
import VRARContent from 'components/VRARContent/VRARContent';
import ProcessDesignSlider from './ProcessDesignSlider';

import styles from '../sass/TravelbidView.module.scss';

function DesignProcessSection({ isMobile }: IDesignProcessSection) {
  return (
    <section className={`${styles.designProcess} designProcessSection`}>
      <div className={styles.blurBgDesignProcessTop} />
      <VRARContent className={styles.row}>
        <h2>
          Design process
        </h2>
        <p className={styles.marginBottom}>
          <span className={styles.blurBgDesignProcess} />
          Simultaneously, the designer assembled a mood board with
          examples of different styles.
          <br />
          <br />
          After the client approved the screens, the designer started working
          on the UI design. The homepage took several iterations made by two designers before the client liked one
          of the suggested concepts.
        </p>
      </VRARContent>
      <VRARContent>
        <h3>
          Thus we settled on a&nbsp;
          <span>
            clean light design
          </span>
        &nbsp;with&nbsp;
          <span>
            key elements highlighted with bright colors.
          </span>
        </h3>
      </VRARContent>
      <div className={styles.listWrapper}>
        <ul className={`${styles.steps} ${styles.designProcessSteps}`}>
          {designProcessContent.map((item) => <Card key={item.id} item={item} />)}
        </ul>
      </div>
      <ProcessDesignSlider isMobile={isMobile} />
      <VRARContent className={styles.chosenStyle}>
        <h3>
          The chosen style&nbsp;
          <span>
            was applied&nbsp;
            <br />
            to the other pages.
          </span>
          <span className={styles.blurBgDesignProcessSlider} />
        </h3>
      </VRARContent>
    </section>
  );
}

export default DesignProcessSection;
