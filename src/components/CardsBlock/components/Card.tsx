import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import IconCircleWithEye from '../../../assets/icon/ic_circleWithEye.svg';
import VRARContent from '../../VRARContent/VRARContent';
import { ICardProps } from '../interfaces/ICardsBlock';
import IStore from '../../../store/interfaces/IStore';
import { IApp } from '../../../store/app/interfaces/IApp';

function Card({
  id, title, content, activeId, setActiveId, classes, list, withoutAnimate, cardIndex,
}: ICardProps) {
  const {
    screenSizes: { isMDDevice, isSMDevice, isXSDevice },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const isMobile = isMDDevice || isSMDevice || isXSDevice;

  const onClickHandler = (cardId: string) => {
    setActiveId(cardId === activeId ? '00' : cardId);
  };

  useEffect(() => {
    setActiveId(isMobile ? '01' : '00');
  }, [isMobile]);

  return (
    <div
      className={`
        border-t-2 border-l-2 border-r-2 border-black w-full h-[360px]
        flex flex-col justify-between p-[20px] relative z-[1] overflow-hidden 
        min-md:flex-[0_1_50%] min-md:z-[2] min-md:h-[384px]
        min-lg:p-[30px]
        min-xl:flex-[0_1_33.33333%] min-xl:h-[480px]
        min-xxxl:h-[540px]
        group
        ${cardIndex % 2 === 1 ? 'min-md:border-l-0 min-xl:border-l-2' : ''}
        ${(cardIndex + 1) % 3 === 2 ? 'min-xl:!border-l-0 min-xl:border-r-0' : ''}
        ${[6, 7].includes(cardIndex) ? 'min-xl:border-b-2 xl:border-black' : ''}
        ${classes?.card || ''}
      `}
    >
      <VRARContent withoutAnimate={withoutAnimate}>
        <h3
          className={`
            font-generalSans text-black font-medium relative z-[4] transition-all duration-1000
            text-[20px] leading-[28px] mix-blend-difference
            min-md:text-[24px] min-md:leading-[34px]
            min-xl:text-[36px] min-xl:leading-[46px]
            min-xxxl:text-[40px] min-xxxl:leading-[56px]
            group-hover:min-lg:text-white
            ${activeId === id ? 'text-white' : ''}
            ${classes?.title || ''}
          `}
        >
          {title}
        </h3>
      </VRARContent>
      <div className={`flex justify-between items-end ${classes?.iconContainer || ''}`}>
        <VRARContent withoutAnimate={withoutAnimate}>
          <span
            className={`
              font-generalSans font-medium text-[24px] leading-[32px]
              min-md:text-[24px] min-md:leading-[34px] min-xl:text-[36px] min-xl:leading-[46px]
              ${classes?.iconText || ''}
            `}
          >
            {id}
          </span>
        </VRARContent>
        <IconCircleWithEye
          className={`
            w-[54px] h-[54px] z-[4] relative mix-blend-difference select-none no-tap-highlight
            min-lg:hidden
            ${activeId === id ? 'text-white' : ''}
            ${classes?.icon || ''}
          `}
          onClick={() => onClickHandler(id)}
        />
      </div>
      <div
        className={`
          [transform:translate(0,100%)]
          absolute bottom-0 left-0 w-full h-full p-[20px] flex items-end z-[-1]
          duration-[400ms] ease-in-out bg-black mix-blend-difference
          min-lg:p-[30px]
          group-hover:min-lg:h-full group-hover:min-lg:z-[2] group-hover:min-lg:[transform:translate(0,0)]
          ${activeId === id ? 'h-full z-[2] [transform:translate(0,0)!important]' : ''}
          ${classes?.content || ''}
        `}
      >
        <div className={`relative ${classes?.contentContainer || ''}`}>
          <div className={`flex flex-row min-lg:block ${classes?.box || ''}`}>
            {content && (
              <p
                className={`
                  font-ibmPlexMono font-normal text-[16px] leading-[24px]
                  min-md:pr-[20px] min-lg:pr-0 min-xl:text-[18px] group-hover:min-lg:text-white
                  ${activeId === id ? 'text-white' : ''}
                  ${classes?.boxText || ''}
                `}
                style={{ flexBasis: 'calc(100% - 54px)' }}
              >
                {content}
              </p>
            )}
            {list && (
              <ul className={`list-none w-full flex flex-col items-start ${classes?.listContainer || ''}`}>
                {list.length > 0 && list.map((item, index) => (
                  <li
                    key={[item, index].join('_')}
                    className={`w-full flex flex-nowrap justify-start mb-[4px] ${classes?.itemList || ''}`}
                  >
                    <p
                      className={`
                        min-w-full inline-block font-normal text-white font-ibmPlexMono text-[18px] leading-[26px]
                        screen-md:text-[16px] group-hover:min-lg:text-white ${index === 0 ? 'mr-[10px]' : ''}
                        ${activeId === id ? 'text-white' : ''}
                        ${classes?.fontList || ''}
                      `}
                    >
                      ﹂
                      {' '}
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            )}
            <div
              className={`w-[54px] h-[54px] min-lg:hidden ${classes?.invisibleIcon || ''}`}
              style={{ flexBasis: '54px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
