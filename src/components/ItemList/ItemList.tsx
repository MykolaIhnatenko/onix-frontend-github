import React from 'react';

import IItemList from './interfaces/IItemList';
import VRARContent from 'components/VRARContent/VRARContent';
import ContentTextNew from 'components/ContentTextNew/ContentTextNew';

function ItemList({
  listTitle, list, marginBottomAbsent, withAnimate,
}: IItemList) {
  return (
    <>
      {listTitle && (
        <VRARContent withoutAnimate={!withAnimate}>
          <ContentTextNew
            text={listTitle}
            className="mb-[20px] screen-md:mb-[15px]"
          />
        </VRARContent>
      )}
      <ul className={`mb-[30px] screen-md:mb-[20px] ${marginBottomAbsent ? '!mb-0' : ''}`}>
        {list.map((item, index) => (
          <li
            key={['ItemText', index].join('_')}
            className="mt-[5px] first-of-type:mt-0"
          >
            <VRARContent withoutAnimate={!withAnimate}>
              <ContentTextNew
                text={item}
                className="flex before:content-['﹂'] before:mr-[10px]"
              />
            </VRARContent>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
