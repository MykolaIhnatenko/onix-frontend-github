import articleContentStyles from '../sass/ArticleContent.module.scss';
import careersStyles from '../sass/CareersPage.module.scss';
import workInsideStyles from '../sass/WorkInside.module.scss';
import wineCaseStyles from '../sass/WorkWineCase.module.scss';

function Intro() {
  return (
    <div className="col l12">
      <h2 className={`
              ${articleContentStyles.content__header__primary}
              ${careersStyles.content__header__primary}
              ${workInsideStyles.center}`}
      >
        Introduction
      </h2>
      <p>
        On the app store there are lots of mobile apps meant to help users
        learn about wine and teach them how
        to find a perfect match for the dinner. We at Onix were approached by
        &nbsp;
        <span className={wineCaseStyles.color_text}>
          Josselin Guibert
        </span>
        &nbsp;
        and
        &nbsp;
        <span className={wineCaseStyles.color_text}>
          Julien Sahut
        </span>
        , founders of Wine Collection Ltd., with the idea
        of building a unique service application, where users could make a perfect wine match while
        dining at a particular restaurant.
        <br />
        <br />
        Our customers came to us with the general app concept, though having most of the app’s design
        prepared and some supporting documentation. Josselin Guibert has become the product manager and
        collaborated with us on all technical aspects of development. Julien Sahut, a sommelier working
        with restaurants in Europe, has developed the wine &#x3C;-&#x3E; food matching proprietary logic.
        <br />
        <br />
        Wine Picker was created to give the answer to a simple question:
        <br />
        <b>
          How do you pick wine in a restaurant you are in and match it with your food?
        </b>
      </p>
    </div>
  );
}

export default Intro;
