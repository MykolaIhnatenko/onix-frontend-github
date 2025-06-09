import styles from '../sass/goodFaceTechnology.module.scss';

function GoodFaceTechnology({ technology }: { technology: string }) {
  return (
    <li className={styles.technology}>
      <p className="technologyTitle">{technology}</p>
    </li>
  );
}

export default GoodFaceTechnology;
