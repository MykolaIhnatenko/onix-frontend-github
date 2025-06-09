import { IEllipses } from '../interfaces/IEllipses';
import Ellipse from './Ellipse';

import styles from '../sass/Ellipses.module.scss';

function Ellipses({ isTablet = false, isMobile = false }: IEllipses) {
  const ellipses = [
    { color: 'pink', classes: styles.topLeftEllipse },
    { color: (isTablet || isMobile) ? 'blue' : 'pink', classes: styles.topRightEllipse },
    { color: 'blue', classes: styles.bottomLeftEllipse },
    { color: 'pink', classes: styles.bottomRightEllipse },
    ...(isTablet ? ([{ color: 'pink', classes: styles.centerEllipse }]) : []),
    ...(isTablet ? ([{ color: 'blue', classes: styles.leftMiddleEllipse }]) : []),
  ];

  return (
    <>
      {ellipses.map(({ classes, color }) => (
        <div key={classes} className={classes}>
          <Ellipse color={color} />
        </div>
      ))}
    </>
  );
}

export default Ellipses;
