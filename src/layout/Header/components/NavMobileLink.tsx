import Link from 'next/link';

import INavLink from '../interfaces/INavLink';

import styles from '../sass/navMobileLink.module.scss';

function NavMobileLink({
  title,
  to,
  icon,
  isActive,
  styleIconContainer = '',
  styleContainer = '',
  isSubmenuItem = false,
}:INavLink) {
  const basePath = process.env.NEXT_PUBLIC_BASE_URL as string;

  return (
    <div
      className={`
      d-flex d-row d-item-center d-justify-between
      ${isSubmenuItem ? styles.link : ''} ${styles.container} ${styleContainer} ${isActive ? styles.active : ''}`}
      role="presentation"
    >
      <div>
        {to ? (
          <Link
            href={`${basePath}${to}`}
            prefetch={false}
            target="_self"
            rel=""
            aria-label=""
            draggable="false"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </div>
      {icon && (
        <div className={`${styles.iconContainer} ${styleIconContainer}`}>
          {icon}
        </div>
      )}
    </div>
  );
}

export default NavMobileLink;
