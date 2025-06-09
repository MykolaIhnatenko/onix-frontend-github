import GraphDots from '../../../../../public/static/images/Pages/AdoricCasePage/graph/ic_graph-dots.svg';
import GraphLine from '../../../../../public/static/images/Pages/AdoricCasePage/graph/ic_graph-line.svg';
import GraphBackground from '../../../../../public/static/images/Pages/AdoricCasePage/graph/ic_graph-bg.svg';
import GraphAnimation from './GraphAnimation';

import styles from '../sass/Graph.module.scss';

function Graph() {
  return (
    <div className={styles.graph}>
      <GraphAnimation delay={1500}>
        <GraphDots
          className={`${styles.graphDots} ${styles.absolute} ${styles.animateDots}`}
        />
      </GraphAnimation>
      <GraphAnimation>
        <GraphLine
          className={`${styles.graphLine} ${styles.absolute} ${styles.animateLine}`}
        />
      </GraphAnimation>
      <GraphAnimation delay={2000}>
        <GraphBackground
          className={`${styles.graphBackground} ${styles.absolute} ${styles.animateBackground}`}
        />
      </GraphAnimation>
    </div>
  );
}

export default Graph;
