import styles from '../sass/photowhyLastSection.module.scss';

function PhotowhyLastSection() {
  return (
    <section className={styles.lastSection}>
      <div className={`${styles.container} container`}>
        <p className="lastTitle">
          The application was launched first in the US, but the client plans to target the global photographers
          community eventually.
        </p>
        <br />
        <br />
        <p>
          The company has recruited and verified a number of professionals to evaluate and mentor amateurs.
          Eventually, they will develop a mechanism for amateurs to become professionals on the platform. When a
          user becomes a popular photographer, they will be able to earn a photographer’s account and become
          mentors themselves.
        </p>
      </div>
    </section>
  );
}

export default PhotowhyLastSection;
