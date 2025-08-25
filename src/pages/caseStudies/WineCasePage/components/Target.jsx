import ImageComponent from '../../../../components/Image/Image';
import WineCaseImg22x from '../../../../assets/images/caseStudiesPage/WineCasePage/img_wine-case-img-2.webp';
import WineCaseImg32x from '../../../../assets/images/caseStudiesPage/WineCasePage/img_wine-case-img-3@2x.webp';

import articleContentStyles from '../sass/ArticleContent.module.scss';
import storyStyles from '../sass/StoryPageView.module.scss';
import careersStyles from '../sass/CareersPage.module.scss';
import workInsideStyles from '../sass/WorkInside.module.scss';
import wineCaseStyles from '../sass/WorkWineCase.module.scss';

function Target() {
  return (
    <div className={`
          ${articleContentStyles.article__content}
          ${workInsideStyles.article__content}
          ${storyStyles.article_content}`}
    >
      <div className="col l12">
        <h2 className={`
              ${articleContentStyles.content__header__primary}
              ${careersStyles.content__header__primary}
              ${workInsideStyles.center}`}
        >
          For whom this product is
        </h2>
      </div>
      <div className={wineCaseStyles.project__goal}>
        <div className={wineCaseStyles.goalItem}>
          <ImageComponent
            className={articleContentStyles.align_center}
            src={WineCaseImg22x}
            alt="Serving the needs of ordinary users dining out"
            width={475}
            height={322}
          />
          <div className={wineCaseStyles.goalItem__text}>
            <h3>
              Serving the needs of ordinary users dining out
            </h3>
            <p>
              The app helps users make the right wine choice in a restaurant of the choice or of future interest
              according to their budget and individual taste preferences. Users can write wine tasting notes and
              share them with friends and other wine lovers through the social media component as part of the
              app.
            </p>
          </div>
        </div>
        <div className={wineCaseStyles.goalItem}>
          <ImageComponent
            className={articleContentStyles.align_center}
            src={WineCaseImg32x}
            alt="Serving as promotional tool for places and owners"
            width={475}
            height={348}
          />
          <div className={wineCaseStyles.goalItem__text}>
            <h3>
              Serving as promotional tool for places and owners
            </h3>
            <p>
              The built-in social media feature enables making informational posts for entire user base for
              places
              and app owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Target;
