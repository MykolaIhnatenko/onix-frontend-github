import VRARContent from '../../../components/VRARContent/VRARContent';
import IVideoDotsList from '../interfaces/IVideoDotsList';

import styles from '../sass/coloradoSportsVideoDotsList.module.scss';

function ColoradoSportVideoDotsList({ list, variant }: IVideoDotsList) {
  return (
    <ul className={`${styles.list} ${styles[variant]}`}>
      {list.map(({ id, content }) => (
        <li key={id}>
          <VRARContent className={styles.itemContainer}>
            <span className={styles.circle} />
            <p className="fs16">{content}</p>
          </VRARContent>
        </li>
      ))}
    </ul>
  );
}
export default ColoradoSportVideoDotsList;
