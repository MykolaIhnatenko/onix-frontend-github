import styles from '../sass/goodFaceResult.module.scss';

function GoodFaceResult({ title, text }: { title: string, text: string }) {
  return (
    <li className={styles.result}>
      <h3 className="fs_18">{title}</h3>
      <p>{text}</p>
    </li>
  );
}

export default GoodFaceResult;
