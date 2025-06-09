import { useEffect, useRef, useState } from 'react';

import IAccordionHorizontal from './interfaces/IAccordionHorizontal';
import AccordionItemTitle from './components/AccordionItemTitle';
import AccordionItemContent from './components/AccordionItemContent';
import { XL_DEVICE } from 'constants/constants';
import AccordionItemContentTablet from './components/AccordionItemContentTablet';
import { useAppSelector } from 'hook/reduxToolkit';

function AccordionHorizontal({ data, whiteTheme, classes }: IAccordionHorizontal) {
  const titlesRef = useRef<Array<HTMLDivElement | null>>([]);
  const accordionRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState(1);
  const [contentWidth, setContentWidth] = useState(0);
  const { windowWidth } = useAppSelector((state) => state.app);

  const setTitleRef = (index: number) => (el: HTMLDivElement | null) => {
    titlesRef.current[index] = el;
  };

  useEffect(() => {
    const titlesWidth = titlesRef.current.reduce((accumulator, currentValue) => {
      if (currentValue) {
        return accumulator + currentValue.offsetWidth + 2;
      }

      return accumulator;
    }, 0);

    const accordionWidth = accordionRef?.current?.offsetWidth ?? titlesWidth;

    setContentWidth(accordionWidth - (titlesWidth - 2));
  }, [titlesRef.current, accordionRef.current?.offsetWidth, windowWidth]);

  return (
    <div
      ref={accordionRef}
      className={`
        relative flex h-[690px] overflow-hidden min-xxxl:h-[808px] min-xxxl:mx-[70px] screen-xl:flex-col
        screen-xl:overflow-visible screen-xl:h-auto
        ${whiteTheme ? 'text-color-black' : 'text-color-white'}
        ${classes?.accordion || ''}
      `}
    >
      {data?.map(({
        id, number, title: itemTitle, content, image,
      }, index) => (
        windowWidth > XL_DEVICE ? (
          <div
            key={id}
            className={`
              flex border-solid border-r-[2px] last:border-r-0
              ${whiteTheme ? '!border-color-black' : '!border-color-white'}
              ${activeId === id ? 'flex-grow' : ''}
              ${classes?.item || ''}
            `}
            onMouseEnter={() => setActiveId(id)}
          >
            <AccordionItemTitle
              ref={setTitleRef(index)}
              number={number}
              title={itemTitle}
              classes={classes}
            />
            <AccordionItemContent
              contentWidth={contentWidth}
              activeItem={activeId === id}
              content={content}
              image={image}
              itemTitle={itemTitle}
              classes={classes}
            />
          </div>
        ) : (
          <AccordionItemContentTablet
            key={id}
            number={number}
            itemTitle={itemTitle}
            content={content}
            image={image}
            whiteTheme={whiteTheme}
            classes={classes}
          />
        )
      ))}
    </div>
  );
}

export default AccordionHorizontal;
