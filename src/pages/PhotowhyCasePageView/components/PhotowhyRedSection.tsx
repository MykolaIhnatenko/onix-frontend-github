import styles from '../sass/photowhyRedSection.module.scss';

function PhotowhyRedSection() {
  return (
    <section className={styles.redSection}>
      <div className="redContainer container">
        <p className={styles.firstParagraph}>
          PhotoWhy combines a social network
          <br />
          with a peer-to-peer learning app for photographers.
        </p>
        <p className={`${styles.text} fs_16`}>
          The mobile application&nbsp;
          <br className={styles.firsSeparator} />
          enables photographers to
          <span> share their pictures </span>
          with the community and&nbsp;
          <span>
            easily reach out to some of the world’s top photographers.&nbsp;
          </span>
          <br className={styles.secondSeparator} />
          The platform is
          <span> unique in its emphasis </span>
          on learning the art of photography
        </p>
        <p className={styles.secondParagraph}>
          The app is free to download and sign up,
          <br />
          and all social network features are free for all users.
        </p>
      </div>
    </section>
  );
}

export default PhotowhyRedSection;
