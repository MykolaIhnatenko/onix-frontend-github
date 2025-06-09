import VRARContent from 'components/VRARContent/VRARContent';
import MainTitle from 'components/MainTitle/MainTitle';
import { ITwoBorderedColumnsAnim } from './interfaces/ITwoBorderedColumnsAnim';
import ItemList from 'components/ItemList/ItemList';
import ContentTextNew from 'components/ContentTextNew/ContentTextNew';

import styles from './sass/twoBorderedColumnsAnim.module.scss';

function TwoBorderedColumnsAnim({
  columns, withoutAnimateTable, blackTheme, classes,
}: ITwoBorderedColumnsAnim) {
  return (
    <div className={`${styles.table} ${classes?.table || ''}`}>
      {columns.map(({
        id, columnTitle, desc, list, offset, number,
      }) => (
        <VRARContent
          key={id}
          translate="translateX"
          offset={offset}
          rootMarginBottom={-35}
          duration={0.5}
          withoutAnimate={withoutAnimateTable}
          className={`${styles.column} ${blackTheme ? '!border-color-white' : ''} ${classes?.column || ''}`}
        >
          <div>
            <VRARContent withoutAnimate={!withoutAnimateTable}>
              <MainTitle tag="h3" className={`${styles.columnTitle} ${classes?.columnTitle || ''}`}>
                {columnTitle}
              </MainTitle>
            </VRARContent>
            {desc && (
              <VRARContent withoutAnimate={!withoutAnimateTable}>
                <ContentTextNew
                  text={desc}
                  className={`${styles.columnDesc} ${!list ? '!mb-0' : ''} ${classes?.columnDesc || ''}`}
                />
              </VRARContent>
            )}
            {list && (
              <VRARContent withoutAnimate={!withoutAnimateTable}>
                <ItemList
                  list={list}
                  marginBottomAbsent
                  withAnimate={withoutAnimateTable}
                />
              </VRARContent>
            )}
          </div>

          {number && (
            <VRARContent withoutAnimate={!withoutAnimateTable}>
              <MainTitle
                tag="span"
                className={`!text-[30px]/[40px] screen-md:!text-[24px]/[34px] ${classes?.columnNumber || ''}`}
              >
                {number}
              </MainTitle>
            </VRARContent>
          )}
        </VRARContent>
      ))}
    </div>
  );
}

export default TwoBorderedColumnsAnim;
