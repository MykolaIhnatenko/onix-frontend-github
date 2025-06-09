import { IEllipse } from '../interfaces/IEllipse';

import styles from '../sass/Ellipse.module.scss';

function Ellipse({ color = 'pink' }:IEllipse) {
  return <div className={styles[`${color}Ellipse`]} />;
}

export default Ellipse;
