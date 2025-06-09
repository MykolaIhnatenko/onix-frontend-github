import Hero from './components/Hero';
import Intro from './components/Intro';
import Approach from './components/Approach';
import Challenges from './components/Challenges';
import Target from './components/Target';
import UserFlow from './components/UserFlow';
import TechStack from './components/TechStack';
import Result from './components/Result';
import { muktaVaaniFont } from '../../../fonts/MainFonts';
import ImageComponent from '../../../components/Image/Image';

import styles from './sass/AdoricCaseView.module.scss';

const projectImg = '/static/images/Pages/AdoricCasePage/img_bg-left-layers.webp';
const grayTriangulats = '/static/images/Pages/AdoricCasePage/img_article-decor-bg.webp';
const blueTriangulate = '/static/images/Pages/AdoricCasePage/img_shape-bg-right.webp';

function AdoricCaseView() {
  return (
    <div>
      <div className={`${styles.articleContainer} ${muktaVaaniFont.variable}`}>
        <article className={`${styles.project} ${styles.projectAdoricCase}`}>
          <ImageComponent
            className={styles.projectImg}
            src={projectImg}
            alt="Adoric Case"
            width={508}
            height={1638}
          />
          <Hero />
          <div className={`${styles.articleContent} ${styles.decor}`}>
            <ImageComponent
              className={styles.grayTriangulats}
              src={grayTriangulats}
              alt="Adoric Case"
              width={131}
              height={382}
            />
            <ImageComponent
              className={styles.blueTriangulate}
              src={blueTriangulate}
              alt="Adoric Case"
              width={303}
              height={714}
            />
            <Intro />
            <Approach />
            <Challenges />
            <Target />
            <UserFlow />
            <TechStack />
            <Result />
          </div>
        </article>
      </div>
    </div>
  );
}

export default AdoricCaseView;
