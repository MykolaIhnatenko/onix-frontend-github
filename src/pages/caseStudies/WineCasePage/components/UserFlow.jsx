import PropTypes from 'prop-types';

import articleContentStyles from '../sass/ArticleContent.module.scss';
import careersStyles from '../sass/CareersPage.module.scss';
import workInsideStyles from '../sass/WorkInside.module.scss';
import wineCaseStyles from '../sass/WorkWineCase.module.scss';

function UserFlow({ project }) {
  const projectFeaturesStyle = wineCaseStyles[`project__features__${project}`];
  const pageData = [
    {
      title: 'Food and Wine Matching',
      body: 'Match perfect wine with selected cuisine and vice versa.',
    },
    {
      title: 'Wine Tasting Notes',
      body: 'Express your tasting experience on a wine.',
    },
    {
      title: 'Wine Cellar Management',
      body: 'Link your wine bottles with all your tasting notes.',
    },
    {
      title: 'Find Restaurants Nearby',
      body: 'Find best restaurants locally and globally.',
    },
    {
      title: 'Public and Private Groups',
      body: 'Reach a wider audience of wine lowers.',
    },
    {
      title: 'Social media',
      body: 'Invite your friends from Facebook, Google+, email.',
    },
    {
      title: 'Share with Friends',
      body: 'Let your friends know your preferences and new wine discoveries.',
    },
    {
      title: 'Share with Friends',
      body: 'Invite your friends from Facebook, Google+, email.',
    },
    {
      title: 'Search of particular wines',
      body: 'Perform search for specific wine through the app.',
    },
    {
      title: 'Reverse search',
      body: 'If you like a specific wine, we will find the closest restaurants\n'
          + ' serving it.',
    },
    {
      title: 'Reviews, Details and Ratings',
      body: 'Wine Reviews & Details, Restaurant Ratings and Review, Wine Listing Rating, and much more.',
    },
    {
      title: 'Snap winelist',
      body: 'Take photo of a wine list and get it uploaded for further matching and wine selection in the\n'
          + ' app.',
    },
    {
      title: 'Achievements',
      body: 'Receive prizes for your wine activities, reach the PRO level, so your notes are taken into\n'
          + ' account by the app as professional.',
    },
  ];

  return (
    <div className={`
          ${articleContentStyles.article__content}
          ${workInsideStyles.article__content}
          ${workInsideStyles.article__content__bottomPadding}
          ${workInsideStyles.article__content__grey}`}
    >
      <div className="col l12">
        <h2 className={`
              ${articleContentStyles.content__header__primary}
              ${careersStyles.content__header__primary}
              ${workInsideStyles.center}
              pb-10`}
        >
          User flow of the app
        </h2>
        <p className={workInsideStyles.center}>
          The app’s key features:
        </p>
      </div>
      <ul className={`${workInsideStyles.project__features} ${projectFeaturesStyle}`}>
        {pageData?.map(({ title, body }, index) => (
          <li key={[title, index].join('_')}>
            <h3>{title}</h3>
            <p className={workInsideStyles.project__features_text}>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

UserFlow.propTypes = {
  project: PropTypes.string.isRequired,
};

export default UserFlow;
