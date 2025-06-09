import styles from '../sass/coloradoSportsVideoContactUsSection.module.scss';

export const firstContactUsContent = {
  title: (
    <h2 className={styles.title}>
      <span>Ready to </span>
      modernize
      <br className={styles.breakMobile} />
      {' '}
      your business
      <br className={styles.break} />
      <span> by leveraging </span>
      <br className={styles.breakMobile} />
      best-in-class technological solutions?
    </h2>
  ),
  buttonTitle: 'Get in touch',
};

export const secondContactUsContent = {
  title: (
    <h2 className={styles.title}>
      <span>Look for a </span>
      trusted technology
      {' '}
      <br className={styles.breakMobile} />
      partner
      <br className={styles.break} />
      <span> to </span>
      build
      <br className={styles.breakMobile} />
      {' '}
      a custom sport & fitness solution?
    </h2>
  ),
  buttonTitle: 'Contact Onix',
};
