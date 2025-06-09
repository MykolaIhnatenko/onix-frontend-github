import ImageComponent from '../../../components/Image/Image';
import IForUsersBlock from '../interfaces/IForUsersBlock';
import VRARContent from '../../../components/VRARContent/VRARContent';

import styles from '../sass/stridistForUsersBlock.module.scss';

function StridistForUsersBlock({
  img, title, alt, forUsersListContent, type,
}:IForUsersBlock) {
  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      <div className={styles.image}>
        <ImageComponent
          src={img}
          width={660}
          height={600}
          alt={alt}
        />
      </div>
      <div className={styles.list}>
        <VRARContent>
          <h4 className="fs_24">{title}</h4>
        </VRARContent>
        <ul>
          {forUsersListContent.map(({ id, content }) => (
            <li key={id}>
              <VRARContent className={styles.content}>
                <p>{content}</p>
              </VRARContent>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default StridistForUsersBlock;
