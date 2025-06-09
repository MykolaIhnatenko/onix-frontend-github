import ImageComponent from '../../../../components/Image/Image';
import WineCaseImg42x from '@/images/caseStudiesPage/WineCasePage/img_wine-case-img-4@2x.webp';
import WineCaseImg52x from '@/images/caseStudiesPage/WineCasePage/img_wine-case-img-5@2x.webp';

import articleContentStyles from '../sass/ArticleContent.module.scss';
import workInsideStyles from '../sass/WorkInside.module.scss';
import wineCaseStyles from '../sass/WorkWineCase.module.scss';

function TechStack() {
  return (
    <div className={`${articleContentStyles.article__content} ${workInsideStyles.article__content}`}>
      <div className={`${workInsideStyles.project__sequenceGrid} ${wineCaseStyles.project__result}`}>
        <div className={wineCaseStyles.project__result__item}>
          <div className={wineCaseStyles.project__result__img}>
            <ImageComponent
              className={articleContentStyles.align_center}
              src={WineCaseImg42x}
              alt="Technology stack"
              width={475}
              height={351}
              quality={100}
            />
          </div>
          <div className={wineCaseStyles.project__result__text}>
            <h2 className={articleContentStyles.content__header__primary}>
              Technology stack
            </h2>
            <p>
              For Wine Picker, we have developed native iOS and Android applications on Swift, Objective С and
              Java along with a sophisticated supporting backend written in Python.
              <br />
              <br />
              Wine Picker has become an engaging challenge and valuable experience for our team at Onix. It has
              helped us deepen our knowledge of work with Google Places and improved our skills in development
              of complex multiprocessing databases.
            </p>
          </div>
        </div>
        <div className={wineCaseStyles.project__result__item}>
          <div className={wineCaseStyles.project__result__img}>
            <ImageComponent
              className={articleContentStyles.align_center}
              src={WineCaseImg52x}
              alt="Result"
              width={475}
              height={504}
              quality={100}
            />
          </div>
          <div className={wineCaseStyles.project__result__text}>
            <h2 className={articleContentStyles.content__header__primary}>
              Result
            </h2>
            <p>
              We have managed to overcome the challenges, complete and release the app with much more than
              initially planned. As a result Wine Picker has won the acclaim at public events held.
              <br />
              <br />
              In Google search results for the UK, Wine Picker comes #1 and in search results of the app market
              for wine apps it is among top-10.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
