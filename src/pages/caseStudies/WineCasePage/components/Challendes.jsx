import ImageComponent from '../../../../components/Image/Image';
import WineCasePhone12x from '../../../../assets/images/caseStudiesPage/WineCasePage/img_wine-case-phone-1@2x.webp';
import WineCasePhone22x from '../../../../assets/images/caseStudiesPage/WineCasePage/img_wine-case-phone-2@2x.webp';
import WineCasePhone32x from '../../../../assets/images/caseStudiesPage/WineCasePage/img_wine-case-phone-3@2x.webp';
import WineCasePhone42x from '../../../../assets/images/caseStudiesPage/WineCasePage/img_wine-case-phone-4@2x.webp';

import articleContentStyles from '../sass/ArticleContent.module.scss';
import storyStyles from '../sass/StoryPageView.module.scss';
import careersStyles from '../sass/CareersPage.module.scss';
import workInsideStyles from '../sass/WorkInside.module.scss';
import wineCaseStyles from '../sass/WorkWineCase.module.scss';

const list = [
  {
    img: WineCasePhone12x,
    width: 300,
    height: 585,
    title: 'Restaurants and wine list',
    desc: (
      <p>
        Although the feature may seem straightforward at first glance, it implies front-end and back-end
        combined search, locating places, conducting analysis of place details, locating website URL,
        performing wine list data search on git each website and downloading wine list data to the server
        for further parsing.
        <br />
        <br />
        Users are also able to enrich the wine database right in the app by snapping wine lists with the
        phone camera as well as sending wine list files via email.
      </p>
    ),
  },
  {
    img: WineCasePhone22x,
    width: 308,
    height: 584,
    title: 'Parsing the wine list',
    desc: (
      <p>
        Processing wine list files of various formats - .pdf, .doc, .docx, images and HTML. Image
        processing is two-step - first OCR engine is applied, then text is parsed for wine data. After
        processing the carefully screened set of wine data is further matched with wines in the DB.
      </p>
    ),
  },
  {
    img: WineCasePhone32x,
    width: 308,
    height: 582,
    title: 'Pick wine',
    desc: (
      <p>
        The process of wine selection in a restaurant is performed fully on the front-end, where wine
        selection is made via a multi-step proprietary algorithm based on specific wine data and user
        filter options.
      </p>
    ),
  },
  {
    img: WineCasePhone42x,
    width: 337,
    height: 584,
    title: 'Full-fledged indirect social media',
    desc: (
      <p>
        The app contains a built-in independent social component. Users can make posts with wine, media,
        location and tagged friends, join groups, create their own groups and administrate them, share
        posts, etc.
      </p>
    ),
  },
];

function Challenges() {
  return (
    <div className={`
          ${articleContentStyles.article__content}
          ${workInsideStyles.article__content}
          ${workInsideStyles.article__content__grey}
          ${storyStyles.article_content}`}
    >
      <div className="col l12">
        <h2 className={`
              ${articleContentStyles.content__header__primary}
              ${careersStyles.content__header__primary}
              ${workInsideStyles.center}`}
        >
          Major challenges
        </h2>
        <p className={workInsideStyles.center}>
          The concept evolved in development of intricate app features, where the team was opposed with a number
          of major challenges:
        </p>
      </div>
      <ul className={`${workInsideStyles.project__sequenceGrid} ${wineCaseStyles.project__challenges}`}>
        {list.map(({
          img, width, height, title, desc,
        }) => (
          <li key={title}>
            <div className={wineCaseStyles.challenges__img}>
              <ImageComponent
                className={articleContentStyles.align_center}
                src={img}
                alt={title}
                width={width}
                height={height}
                sizes="100vw"
                quality={100}
              />
            </div>
            <div className={wineCaseStyles.challenges__text}>
              <h3>{title}</h3>
              {desc}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Challenges;
