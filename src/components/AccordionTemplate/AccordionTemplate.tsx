import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import IAccordion from './interfaces/IAccordion';
import { ScrollVariant } from '../../constants/enums';
import IStore from '../../store/interfaces/IStore';
import { IApp } from '../../store/app/interfaces/IApp';
import AccordionItemTitle from './components/AccordionItemTitle';
import AccordionItemContent from './components/AccordionItemContent';

function AccordionTemplate({
  data,
  activeFirst = false,
  withScroll = ScrollVariant.NONE,
  withoutAccordion,
  faq,
  openByHover = false,
  isAccordionBlack,
  accordionStyleTypes,
  borderTopFirst,
  borderBottomLast,
  smallerTitleText,
  classes,
}: IAccordion) {
  const [activeItem, setActiveItem] = useState(activeFirst ? 0 : -1);
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const ref = useRef<HTMLDivElement>(null);

  const scrollToTopBlock = withScroll === ScrollVariant.TO_TOP_BLOCK;
  const scrollToTopItem = withScroll === ScrollVariant.TO_TOP_ITEM;

  const isDesktop = !isMDDevice && !isSMDevice && !isXSDevice;
  const isOpenHover = isDesktop && !withoutAccordion && openByHover;

  useEffect(() => {
    setActiveItem(activeFirst ? 0 : -1);
  }, [activeFirst]);

  const onOpen = (index: number) => {
    if (scrollToTopBlock && index !== activeItem) {
      const elementPosition = ref.current?.getBoundingClientRect().top;
      const offsetPosition = elementPosition && elementPosition - 70;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    if (faq && index !== activeItem && scrollToTopItem) {
      setTimeout(() => {
        const elementPosition = document.getElementById(`faq${index}`)?.getBoundingClientRect().top;
        const offsetPosition = elementPosition && elementPosition - 70;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 300);
    }

    if (openByHover) {
      setActiveItem(index);
    } else {
      setActiveItem(index === activeItem ? -1 : index);
    }
  };

  return (
    <div
      ref={ref}
      className={`w-full relative ${isAccordionBlack ? 'text-color-white' : ''} ${classes?.accordion || ''}`}
    >
      {data?.map(({
        id,
        number,
        title,
        tagTitle = 'h3',
        content,
      }, index) => (
        <div
          key={[id, index].join('_')}
          className={`
            ${borderTopFirst && !isAccordionBlack
            ? 'first-of-type:border-t-2 first-of-type:border-solid first-of-type:border-color-black'
            : ''}
            ${borderTopFirst && isAccordionBlack
              ? 'first-of-type:border-t-2 first-of-type:border-solid first-of-type:border-color-white'
              : ''}
            ${classes?.accordionItem || ''}
          `}
          id={faq ? `faq${index}` : `${id}`}
        >
          <AccordionItemTitle
            number={number}
            title={title}
            tagTitle={tagTitle}
            activeItem={activeItem === index}
            withoutAccordion={withoutAccordion}
            isAccordionBlack={isAccordionBlack}
            accordionStyleTypes={accordionStyleTypes}
            smallerTitleText={smallerTitleText}
            classes={classes}
            onMouseEnter={() => isOpenHover && onOpen(index)}
            onClick={() => (!withoutAccordion && onOpen(index))}
          />
          <AccordionItemContent
            content={content}
            activeItem={activeItem === index}
            isLastItem={index === data.length - 1}
            isAccordionBlack={isAccordionBlack}
            accordionStyleTypes={accordionStyleTypes}
            borderBottomLast={borderBottomLast}
            smallerTitleText={smallerTitleText}
            classes={classes}
          />
        </div>
      ))}
    </div>
  );
}

export default AccordionTemplate;
