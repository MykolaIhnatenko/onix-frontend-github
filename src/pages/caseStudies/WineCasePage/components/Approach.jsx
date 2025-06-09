import articleContentStyles from '../sass/ArticleContent.module.scss';
import careersStyles from '../sass/CareersPage.module.scss';
import workInsideStyles from '../sass/WorkInside.module.scss';

function Approach() {
  return (
    <div className="col l12">
      <h2 className={`
              ${articleContentStyles.content__header__primary}
              ${careersStyles.content__header__primary}
              ${workInsideStyles.center}`}
      >
        Approach
      </h2>
      <p>
        While other mobile apps about wine offer simple wine search, the goal of our app is to help users find
        and make the best wine choice by using a unique-to-the-market wine selection algorithm. This algorithm
        performs wine selection from wine list at a specific restaurant based on wine type, rating, price, and
        food match, value, etc.
        <br />
        <br />
        To develop this mobile app, we have formed a solid team, where on one side we had our customers with a
        clear understanding of their business sphere and demand, and on the other there were the Onix team
        members faced with a nontrivial task of developing a complex and feature-rich mobile app that takes
        into account user location, wine preferences, etc. and sophisticated back-end processing of enormous
        amounts of data
      </p>
    </div>
  );
}

export default Approach;
