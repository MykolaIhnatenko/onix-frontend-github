import ReactDOMServer from 'react-dom/server';

import { PATH_TO_BACKEND_IMAGES } from '../constants/constants';
import isEmpty from './isEmpty';
import TableOfContent from '../pages/SingleBlog/components/TabletOfContent';
import CallToActionBlog from 'pages/SingleBlog/components/CallToActionBlog';
import { StylesNameCombinePage } from 'constants/enums';

export const setHiddenAndVisibleAnimation = (
  hiddenDuration,
  visibleDuration,
  maxHiddenHeight = '0px',
  hiddenDelay = 0,
) => ({
  hidden: {
    maxHeight: maxHiddenHeight,
    transition: {
      type: 'tween',
      duration: hiddenDuration,
      delay: hiddenDelay,
    },
  },
  visible: {
    maxHeight: '400px',
    transition: {
      type: 'tween',
      duration: visibleDuration,
    },
  },
});

export const counterCutText = (tablet, mobile) => {
  let length = 350;
  if (tablet) {
    length = 100;
  } else if (mobile) {
    length = 106;
  }
  return length;
};

export const cutText = (text, long) => (text?.length > long ? `${text.slice(0, long)}...` : text);

const blogCTAcreator = (array, content, variant) => {
  let result = content;
  if (array) {
    array.forEach((item) => {
      if (
        item.match(/uploads\/([^<}\s]+)(?:(?:<\/span>|})[^<}\s]*)?/)
        && item.match(/btnText=\{(.*?)\}/)[1]
        && item.match(/text=\{(.*?)\}/)[1]
        && item.match(/contentColor=\{([^/{}]*)(?:\/[^/{}]*)*\}/)[1]
        && item.match(/url=\{(.*?)\}/)[1]
      ) {
        result = result.replace(
          item,
          ReactDOMServer.renderToStaticMarkup(
            <CallToActionBlog
              background={item.match(/uploads\/([^<}\s]+)(?:(?:<\/span>|})[^<}\s]*)?/)[1]}
              btnText={item.match(/btnText=\{(.*?)\}/)[1]}
              title={item.match(/text=\{(.*?)\}/)[1]}
              contentType={item.match(/contentColor=\{([^/{}]*)(?:\/[^/{}]*)*\}/)[1]}
              url={item.match(/url=\{(.*?)\}/)[1]}
              alt={item.match(/alt=\{(.*?)\}/) ? item.match(/alt=\{(.*?)\}/)[1] : 'blog image'}
              variant={variant}
            />,
          ),
        );
      } else {
        result = result.replace(item, '');
      }
    });
  }
  return result;
};

export const prepareContent = (content, contentTable) => {
  let result = content?.replace(/\.\.\/\.\.\/\.\.\/\.\./g, PATH_TO_BACKEND_IMAGES)
    .replaceAll('<iframe', '<iframe loading="lazy" ')
    .replaceAll('<iframe', '<iframe style="width:100%;" ')
    .replaceAll('width="100%" height="400" ', 'height="400" ')
    .replaceAll('frameBorder="0"', '')
    .replaceAll('<table', '<div class="tableWrapper"><table')
    .replaceAll('</table>', ' </table></div>')
    .replaceAll('<h2>&nbsp;</h2>', '<p>&nbsp;</p>');

  const replacementPattern = /<p class="tableOfContent">[{]!!!Here will be displayed Table of content!!![}]<[/]p>/g;
  // eslint-disable-next-line max-len
  const replacementCTAPatternLeft = /<p class="ctaContentLeft">[{]!!!Here will be displayed CTA content on the left text={.*} btnText={.*} img={.*} url={.*} contentColor={.*}!!![}]<[/]p>/g;
  // eslint-disable-next-line max-len
  const replacementCTAPatternCenter = /<p class="ctaContentCenter">[{]!!!Here will be displayed CTA content centered text={.*} btnText={.*} img={.*} url={.*} contentColor={.*}!!![}]<[/]p>/g;
  const isCTALeftExist = result.match(replacementCTAPatternLeft);
  const isCTACenterExist = result.match(replacementCTAPatternCenter);
  const isContentTableExist = result.match(replacementPattern);

  if (isContentTableExist) {
    const anchorsExistChecker = [];
    const anchorsData = contentTable || [];
    (anchorsData).forEach((item) => {
      anchorsExistChecker.push(result.match(item.anchor));
    });

    if (anchorsExistChecker.includes(null) || isEmpty(anchorsData)) {
      result = result.replace(replacementPattern, '');
    } else {
      result = result.replace(
        replacementPattern,
        ReactDOMServer.renderToStaticMarkup(<TableOfContent anchorItems={contentTable} variant />),
      );
    }
  }

  result = blogCTAcreator(isCTACenterExist, result, false);
  result = blogCTAcreator(isCTALeftExist, result, true);

  return result;
};

export const setStridistParallax = (top, height, endValue, setParallax, easing) => {
  setParallax([{
    start: top - 300,
    duration: height,
    easing,
    properties: [
      {
        startValue: 0,
        endValue,
        property: 'translateY',
      },
    ],
  }]);
};

export const setMainCasesParallax = (mainSection, setParallax, endValue = 5) => {
  setParallax([{
    start: mainSection,
    duration: mainSection,
    easing: 'easeInOut',
    properties: [
      {
        startValue: 0,
        endValue,
        property: 'translateY',
        unit: '%',
      },
    ],
  }]);
};

export const getErrorValue = (nameField, errorsFields, touchedFields) => (
  errorsFields[nameField] && touchedFields[nameField] ? errorsFields[nameField] : ''
);

export const isObject = (object) => object != null && typeof object === 'object';

export const deepEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i += 1) {
    const key = keys1[i];
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2))
      || (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
};

const origin = typeof window !== 'undefined' && window.location.origin
  ? window.location.origin
  : '';

export const checkSaleUrl = () => origin.includes('sale');

// export const checkSaleUrl = () => true;

export const checkStylesName = (stylesNamePage) => stylesNamePage === StylesNameCombinePage.constructionVr
|| stylesNamePage === StylesNameCombinePage.unrealSpace
|| stylesNamePage === StylesNameCombinePage.holokit
|| stylesNamePage === StylesNameCombinePage.unityDSM;
