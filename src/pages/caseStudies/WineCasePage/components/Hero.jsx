import PropTypes from 'prop-types';

import ImageComponent from '../../../../components/Image/Image';
import WineBanner from '../../../../assets/images/caseStudiesPage/WineCasePage/img_wine_banner.webp';

import workInsideStyles from '../sass/WorkInside.module.scss';
import wineCaseStyles from '../sass/WorkWineCase.module.scss';

function Hero({ project }) {
  const insideBannerStyle = wineCaseStyles[`workInsideBanner__${project}`];

  return (
    <div className={`${workInsideStyles.workInsideBanner} ${insideBannerStyle}`}>
      <div
        className={`
        ${workInsideStyles.workInsideBanner__bg} 
        ${wineCaseStyles.workInsideBanner__bg} 
        ${wineCaseStyles.bgWrapper}`}
      >
        <i className={workInsideStyles.workInsideBanner__logo}>&nbsp;</i>
        <h1>
          Revolutionizing dining experience
        </h1>
        <div className={wineCaseStyles.bg}>
          <ImageComponent
            src={WineBanner}
            fill
            priority
            sizes="100vw"
            alt="wine"
          />
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  project: PropTypes.string.isRequired,
};

export default Hero;
