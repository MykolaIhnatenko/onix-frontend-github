import React, { useEffect, useRef, useState } from 'react';

import Tab from './Tab';
import { ITabsBlock } from './interfaces/ITabsBlock';
import { useAppSelector } from 'hook/reduxToolkit';
import TabsLine from './TabsLine';

function TabsBlock({ content, isColumnContent, classes }: ITabsBlock) {
  const { windowWidth } = useAppSelector((state) => state?.app);
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [selectedTab, setSelectedTab] = useState(content[0]);
  const [isDragListen, setIsDragListen] = useState<boolean>(false);

  useEffect(() => {
    if (tabsRef.current?.offsetWidth) {
      setIsDragListen((windowWidth <= tabsRef.current.offsetWidth));
    } else {
      setIsDragListen(false);
    }
  }, [windowWidth, tabsRef.current?.offsetWidth, isDragListen, selectedTab]);

  return isColumnContent ? (
    <div className={classes?.section || ''}>
      {content.map(({
        id, title, subTitle, text, imgMobile, imgTablet, img, video,
      }) => (
        <Tab
          key={id}
          title={title}
          subTitle={subTitle}
          text={text}
          img={img}
          imgMobile={imgMobile}
          imgTablet={imgTablet}
          isColumnContent={isColumnContent}
          video={video}
          classes={classes}
        />
      ))}
    </div>
  ) : (
    <div className={`overflow-hidden w-full pb-[120px] screen-lg:pb-[80px] ${classes?.section || ''}`}>
      <TabsLine
        constraintsRef={constraintsRef}
        tabsRef={tabsRef}
        isDragListen={isDragListen}
        content={content}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        classes={classes}
      />
      <Tab
        img={selectedTab.img}
        imgTablet={selectedTab.imgTablet}
        imgMobile={selectedTab.imgMobile}
        title={selectedTab.title}
        subTitle={selectedTab.subTitle}
        text={selectedTab.text}
        video={selectedTab.video}
        imageStyle={selectedTab.imageStyle}
        classes={classes}
      />
    </div>
  );
}

export default TabsBlock;
