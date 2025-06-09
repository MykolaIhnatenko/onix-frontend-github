import { useEffect, useRef, useState } from 'react';

import VRARContent from '../../VRARContent/VRARContent';
import MainTitle from '../../MainTitle/MainTitle';
import BorderedNumberCard from '../BorderedNumberCard/BorderedNumberCard';
import ImageComponent from '../../Image/Image';
import IStickySetCardsSection from './interfaces/IStickySetCardsSection';
import { useAppSelector } from 'hook/reduxToolkit';
import { BorderedNumberCardBgVariant } from 'constants/enums';

function StickySetCardsSection({
  title, content, background, variant, classesComponent,
}: IStickySetCardsSection) {
  const [heightToBottomBg, setHeightToBottomBg] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { windowWidth } = useAppSelector((state) => state.app);

  const getClassesImageContainer = (variantType: BorderedNumberCardBgVariant) => {
    let classes = 'h-[720px] screen-lg:h-[497px] screen-md:h-[280px]';

    if (variantType === BorderedNumberCardBgVariant.BOTTOM_BG) {
      classes = 'h-[520px] screen-lg:h-[471px] screen-md:h-[282px]';
    }

    return classes;
  };

  useEffect(() => {
    const handleFunction = () => {
      if (imageContainerRef.current) {
        setHeightToBottomBg(window.innerHeight - imageContainerRef.current.clientHeight);
      } else {
        setHeightToBottomBg(window.innerHeight - 520);
      }
    };

    handleFunction();
  }, [imageContainerRef.current?.clientHeight, windowWidth]);

  return (
    <section
      id={variant}
      className="bg-color-black relative"
    >
      <div className="pt-[120px] pb-[120px] pl-[80px] pr-[80px] relative flex gap-[8%]
        screen-xxl:pl-[70px] screen-xxl:pr-[70px] screen-xxl:max-w-[1920px] screen-xxl:mt-0 screen-xxl:mb-0
        screen-lg:pl-[30px] screen-lg:pr-[30px] screen-lg:pt-[80px] screen-lg:pb-[80px] screen-lg:flex-col
        screen-md:pl-[15px] screen-md:pr-[15px]"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            ref={imageContainerRef}
            className={`
              sticky top-[70px] left-0 w-full
              ${getClassesImageContainer(variant)}
              ${variant === 'bottomBg'
              ? `before:content-[''] before:z-[2] before:absolute before:top-0 before:left-0 before:w-full
                before:h-[80px] before:bg-gradient-to-t before:from-transparent before:to-black`
              : `before:content-[''] before:z-[2] before:absolute before:bottom-0 before:left-0 before:w-full
                before:h-[80px] before:bg-gradient-to-b before:from-transparent before:to-black`
              }
            `}
            style={{ top: variant === 'bottomBg' ? `${heightToBottomBg}px` : '70px' }}
          >
            <ImageComponent
              src={background}
              fill
              alt="figures"
              sizes="100vw"
              quality={98}
              className={`!object-cover ${variant === 'bottomBg' ? 'object-left-bottom' : 'object-left-top'}`}
            />
          </div>
        </div>
        <VRARContent className="z-10 sticky top-[30px] screen-lg:relative screen-lg:top-0">
          <MainTitle
            id={`title_${variant}`}
            className={`text-color-white sticky top-[80px] pb-0 flex-[0_0_38%]
            screen-lg:!mb-[40px] screen-md:!pb-[30px]`}
          >
            {title}
          </MainTitle>
        </VRARContent>
        <div className="flex-[0_0_54%] screen-lg:flex-[0_0_100%] relative">
          {content.map(({ id, title: cardTitle, content: cardContent }) => (
            <div
              key={id}
              id={`cardWrapper_${variant}_${id}`}
              className="sticky top-[80px] mb-10"
            >
              <BorderedNumberCard
                key={id}
                id={id}
                title={cardTitle}
                content={cardContent}
                classesComponent={classesComponent}
                tag="p"
                tagTitle="h3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StickySetCardsSection;
