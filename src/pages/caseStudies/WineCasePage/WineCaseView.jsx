import PropTypes from 'prop-types';

import Hero from './components/Hero';
import Intro from './components/Intro';
import Approach from './components/Approach';
import Challenges from './components/Challendes';
import Target from './components/Target';
import UserFlow from './components/UserFlow';
import TechStack from './components/TechStack';
import ImageComponent from '../../../components/Image/Image';
import WineCaseImg12x from '../../../assets/images/caseStudiesPage/WineCasePage/img_wine-case-img-1@2x.webp';
import { muktaVaaniFont } from '../../../fonts/MainFonts';

import careersStyles from './sass/CareersPage.module.scss';
import wineCaseStyles from './sass/WorkWineCase.module.scss';
import workInsideStyles from './sass/WorkInside.module.scss';
import storyStyles from './sass/StoryPageView.module.scss';
import articleContentStyles from './sass/ArticleContent.module.scss';

function WineCaseView({ project }) {
  const projectClass = `project__${project}`;
  return (
    <div>
      <div className={`
      ${workInsideStyles.article_container}
      ${articleContentStyles.article_container}
      ${careersStyles.article_container}
      ${wineCaseStyles.article_container}
      ${storyStyles.article_container__headerInside}
      ${muktaVaaniFont.variable}`}
      >
        <article className={`${workInsideStyles.project} ${wineCaseStyles[projectClass]}`}>
          <div className={`
          ${workInsideStyles.article__content}
          ${articleContentStyles.article__content}
          ${careersStyles.article__content}`}
          >
            <Hero project={project} />
            <Intro />
            <ImageComponent
              className={`${articleContentStyles.align_center} ${articleContentStyles.mar60}`}
              src={WineCaseImg12x}
              alt="Introduction"
              width={1282}
              height={704}
              quality={100}
              sizes="100vw"
            />
            <Approach />
          </div>
          <Challenges />
          <Target />
          <UserFlow project={project} />
          <TechStack />
        </article>
      </div>
    </div>
  );
}

WineCaseView.propTypes = {
  project: PropTypes.string.isRequired,
};

export default WineCaseView;
