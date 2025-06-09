import React, { Fragment } from 'react';

import IItemText from './interfaces/IItemText';
import VRARContent from 'components/VRARContent/VRARContent';
import ContentTextNew from 'components/ContentTextNew/ContentTextNew';

function ItemText({
  content, marginBottomAbsent, classes, withAnimate,
}: IItemText) {
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <>
      {contentArray.map((item, index) => {
        const showItem = (
          <ContentTextNew
            text={item}
            className={`
              !mb-[30px] screen-md:!mb-[20px]
              ${marginBottomAbsent && withAnimate ? 'group-last/itemText:!mb-0' : ''}
              ${marginBottomAbsent && !withAnimate ? 'last:!mb-0' : ''}
              ${classes?.itemText || ''}
            `}
          />
        );

        return (withAnimate ? (
          <VRARContent key={['itemText', index].join('_')} className="group/itemText">
            {showItem}
          </VRARContent>
        ) : (
          <Fragment key={['itemText', index].join('_')}>
            {showItem}
          </Fragment>
        ));
      })}
    </>
  );
}

export default ItemText;
