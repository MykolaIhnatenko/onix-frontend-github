import INavLink from '../interfaces/INavLink';
import LinkComponent from '../../../components/Link/Link';

import styles from '../sass/navLink.module.scss';

function NavLink({
  title, to, icon, isActive, onClick,
  styleIconContainer = '',
  styleContainer = '',
  asLink = true,
}: INavLink) {
  return (
    <div
      className={`
      d-flex d-row d-item-center d-justify-center 
      ${styles.container} ${styleContainer} ${isActive ? styles.active : ''}`}
      role="presentation"
      onClick={onClick}
    >
      {asLink && to
        ? (
          <LinkComponent href={to || ''} className={styles.link}>
            {title}
          </LinkComponent>
        ) : (
          <div className={styles.link}>
            {title}
          </div>
        )}
      {icon && (
        <div className={`${styles.iconContainer} ${styleIconContainer}`}>
          {icon}
        </div>
      )}
    </div>
  );
}

export default NavLink;
