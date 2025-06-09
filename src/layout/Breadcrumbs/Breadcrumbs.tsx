import Link from 'next/link';

import IBreadcrumbs from '../interfaces/IBreadcrumbs';
import { ibmPlexMono } from '../../fonts/MainFonts';
import Icons from '../../assets/icon';
import useDragTextX from '../../hook/useDragTextX';

import styles from '../sass/breadcrumbs.module.scss';

function Breadcrumbs({
  breadcrumbs,
  variant,
}: IBreadcrumbs) {
  const {
    handleMouseUp, handleMouseDown, handleMouseMove, isDragging,
  } = useDragTextX();

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onKeyDown={() => {}}
      role="presentation"
      id="breadcrumbs"
      className={styles.breadcrumbs}
    >
      <ol
        className={`
            d-item-center
            ${styles.container} ${variant ? styles[variant] : ''}
            ${ibmPlexMono.variable}
          `}
      >
        {breadcrumbs?.map(({
          id,
          path,
          title,
        }, index) => (
          <li
            key={id}
            className={`${styles.itemCrumbs} ${index === breadcrumbs.length - 1 ? styles.withoutLink : ''}`}
          >
            {
              (path && !isDragging) && (index !== breadcrumbs.length - 1) ? (
                <Link href={path}>
                  <span className={styles.title}>{title}</span>
                </Link>
              ) : <span className={styles.title}>{title}</span>
            }
            {
              index !== breadcrumbs.length - 1 && (
                <Icons.IconChevron
                  height={8}
                  className={styles.icon}
                />
              )
            }
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Breadcrumbs;
