import ColoradoSportVideoAboutProjectBlock from './ColoradoSportsVideoAboutProjectBlock';

import styles from '../sass/coloradoSportsVideoMainSection.module.scss';

function ColoradoSportsVideoMainSection() {
  return (
    <section className={styles.mainSection}>
      <div className={`${styles.container} coloradoContainer mainContainer`}>
        <h1>
          <span>Colorado&apos;s Top Video </span>
          <br />
          Production Platform
          <br />
          for Youth Sports
        </h1>
        <p className={styles.subheader}>
          How Onix rebuilt a WordPress website
          <br />
          into a custom booking and order
          management system
        </p>
        <ColoradoSportVideoAboutProjectBlock />
      </div>
    </section>
  );
}

export default ColoradoSportsVideoMainSection;
