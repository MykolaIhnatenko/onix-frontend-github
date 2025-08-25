import ImageComponent from '../../../components/Image/Image';
import Icon from '../../../assets/icon';
import interfacesFirstCard from '../data/interfacesFirstCard.json';
import interfacesSecondCard from '../data/interfacesSecondCard.json';

import FirstCardBg from '@/images/Photowhy/img_first_card_bg.webp';
import styles from '../sass/photowhyInterfacesSection.module.scss';

function PhotowhyInterfacesSection() {
  return (
    <section className={styles.interfacesSection}>
      <div className={`${styles.container} container`}>
        <h2>Peer-to-peer learning app development implies the creation of two separate interfaces.</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <ImageComponent
              width={576}
              height={820}
              className={styles.bgImage}
              alt="Photowhy"
              src={FirstCardBg}
              sizes="100vw"
            />
            <h3 className={`${styles.firstCardColorTitle} interfacesTitle`}>Amateur`s functionalities :</h3>
            <ul>
              {interfacesFirstCard.map(((card) => (
                <li key={card.id}>
                  <span className={styles.bg}>
                    <Icon.IconCheckBlue />
                  </span>
                  <p className={`${styles.text} ${styles.firstCardColorText}`}>{card.paragraph}</p>
                </li>
              )))}
            </ul>
          </div>
          <div className={`${styles.card} ${styles.secondCard}`}>
            <h3 className={`${styles.secondCardColorTitle} interfacesTitle`}>Professional`s functionalities :</h3>
            <ul>
              {interfacesSecondCard.map(((card) => (
                <li key={card.id}>
                  <span className={styles.bg}>
                    <Icon.IconCheckWhite />
                  </span>
                  <p className={`${styles.text} ${styles.secondCardColorText}`}>{card.paragraph}</p>
                </li>
              )))}
            </ul>
            <div className={styles.cardBlur} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotowhyInterfacesSection;
