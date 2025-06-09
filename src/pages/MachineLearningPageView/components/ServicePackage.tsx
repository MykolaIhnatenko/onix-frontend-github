import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import IStore from 'store/interfaces/IStore';
import { IApp } from 'store/app/interfaces/IApp';
import BackgroundImage from '@/images/machineLearning/servicePackage/img_servicePackageBg@2x.webp';
import BackgroundImageTablet from '@/images/machineLearning/servicePackage/img_servicePackageTabletBg@2x.webp';
import BackgroundImageMobile from '@/images/machineLearning/servicePackage/img_servicePackageMobileBg@2x.webp';
import ImageComponent from 'components/Image/Image';
import MainTitle from 'components/MainTitle/MainTitle';
import machineLServicePackageData from '../data/machineLServicePackageData';
import { setModeltype, setShowContactForm } from 'store/app/contactForm/slice';
import PageContainer from 'components/PageContainer/PageContainer';
import Icons from '../../../assets/icon';
import Modeltype from 'constants/Modeltype';
import ButtonLight from 'components/UI/ButtonLight/ButtonLight';

import styles from '../sass/servicePackage.module.scss';

function ServicePackage() {
  const {
    screenSizes: {
      isMDDevice,
      isSMDevice,
      isXSDevice,
      isXLDevice,
      isLGDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);
  const dispatch = useDispatch();
  const firstListrefsArray = useRef<HTMLDivElement[]>([]);
  const containerRefsArray = useRef<HTMLDivElement[]>([]);
  const [listHeight, setListHeight] = useState(0);
  const [maxListHeight, setMaxListHeight] = useState<number[]>([]);
  const [mobileListHeight, setMobileListHeight] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const isMobile = isMDDevice || isSMDevice || isXSDevice || isXLDevice || isLGDevice;

  const setRef = (element: HTMLDivElement, index: number) => {
    firstListrefsArray.current[index] = element;
  };

  const setContainerRef = (element: HTMLDivElement, index: number) => {
    containerRefsArray.current[index] = element;
  };
  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      background: BackgroundImage,
    };
    if (isMDDevice) {
      bg.background = BackgroundImageTablet;
    } else if (isXSDevice || isSMDevice) {
      bg.background = BackgroundImageMobile;
    }
    return bg;
  };

  const btnOnClick = (type: Modeltype) => {
    dispatch(setShowContactForm({ showContactForm: true }));
    dispatch(setModeltype({ modeltype: type }));
  };

  useEffect(() => {
    const calculateItemHeight = (item: HTMLDivElement) => {
      let mobileItemHeight = 0;
      const titleElement = item.querySelector(`.${styles.listTitle}`) as HTMLElement;
      if (titleElement) {
        mobileItemHeight += titleElement.offsetHeight;
      }

      const listItemElements = item.getElementsByClassName(styles.listItem);
      const heights = Array.from(listItemElements).slice(0, 3).map((el) => el.clientHeight);
      mobileItemHeight += heights.reduce((a, b) => a + b, 0);

      return mobileItemHeight;
    };

    const updateHeights = () => {
      let maxHeight = 0;
      let mobileMaxHeight = 0;

      firstListrefsArray.current.forEach((item) => {
        const itemHeight = item.scrollHeight;
        if (itemHeight > maxHeight) {
          maxHeight = itemHeight;
        }

        const mobileItemHeight = calculateItemHeight(item);
        if (mobileMaxHeight < mobileItemHeight) {
          mobileMaxHeight = mobileItemHeight;
        }
      });

      setListHeight(maxHeight);
      setMobileListHeight(mobileMaxHeight + 40);
    };

    const observer = new MutationObserver(updateHeights);
    const observeOptions = { childList: true, subtree: true };
    firstListrefsArray.current.forEach((item) => observer.observe(item, observeOptions));

    updateHeights();

    window.addEventListener('resize', updateHeights);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeights);
    };
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      containerRefsArray.current.forEach((item) => {
        const height = item.scrollHeight;
        setMaxListHeight(((prevState) => [...prevState, height]));
      });
    };

    const observer = new MutationObserver(updateHeight);
    const observeOptions = { childList: true, subtree: true };
    containerRefsArray.current.forEach((item) => observer.observe(item, observeOptions));

    window.addEventListener('resize', updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const activeCardSelector = (index: number) => {
    if (index === activeCard) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
      const target: HTMLElement | null = document.getElementById(['ServicePackage', index].join('_'));
      if (isMobile && target) {
        setTimeout(() => {
          const targetPosition = target.getBoundingClientRect().top + document.documentElement.scrollTop;
          window.scrollTo({
            top: targetPosition - 70,
            behavior: 'smooth',
          });
        }, 550);
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().background}
          alt="background"
          sizes="100vw"
        />
      </div>
      <PageContainer className={styles.container}>
        <MainTitle className={styles.blockTitle}>
          Choose a service package that best meets your needs
        </MainTitle>
        <div className={styles.content}>
          {machineLServicePackageData.map(({
            title, subTitle, price, btnText, modelType, firstListContent, secondListContent, popular,
          }, index) => (
            <div
              id={['ServicePackage', index].join('_')}
              key={title.replaceAll(' ', '')}
              className={`
                ${styles.item}
                ${popular ? styles.popular : ''}
              `}
            >
              <div className={`${styles.itemHeader} ${index === activeCard ? styles.active : ''}`}>
                {popular && (
                <div className={styles.popularTab}>
                  <Icons.IconServicePackageFire className={styles.fire} />
                  <MainTitle tag="p" className={styles.popularTirle}>Popular</MainTitle>
                </div>
                )}
                <MainTitle tag="h3" className={styles.title}>{title}</MainTitle>
                <MainTitle tag="p" className={styles.subTitle}>{subTitle}</MainTitle>
                <MainTitle tag="p" className={`${styles.price} ${index === 3 ? styles.noLineHeight : ''}`}>
                  {price}
                </MainTitle>
                <ButtonLight
                  styleContainer={styles.btn}
                  text={btnText}
                  onClick={() => btnOnClick(modelType)}
                  hasArrow={false}
                  classes={{ textContainer: '!text-[16px]/[22px]' }}
                />
              </div>
              <div
                ref={(element) => setContainerRef(element as HTMLDivElement, index)}
                className={`${styles.listContainer} ${index === activeCard ? styles.active : ''}`}
                style={isMobile ? {
                  maxHeight: index === activeCard ? `${maxListHeight[index]}px` : mobileListHeight,
                } : {}}
              >
                <div
                  ref={(element) => setRef(element as HTMLDivElement, index)}
                  className={styles.firstListContent}
                  style={{ height: (listHeight > 0 && !isMobile) ? listHeight : '' }}
                >
                  <MainTitle tag="p" className={styles.listTitle}>{firstListContent.firstListTitle}</MainTitle>
                  <ul className={styles.list}>
                    {firstListContent.firstList.map((item) => (
                      <li key={item.replaceAll(' ', '')} className={styles.listItem}>
                        <Icons.IconServicePackage className={styles.icon} />
                        <p>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.secondListContent}>
                  <MainTitle tag="p" className={styles.listTitle}>{secondListContent.secondListTitle}</MainTitle>
                  <ul className={styles.list}>
                    {secondListContent.secondList.map((item) => (
                      <li key={item.replaceAll(' ', '')} className={styles.listItem}>
                        <Icons.IconServicePackage className={styles.icon} />
                        <p className={styles.listItemText}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={styles.allBtn}
                role="button"
                tabIndex={0}
                onClick={() => activeCardSelector(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    activeCardSelector(index);
                  }
                }}
              >
                <div className={styles.allBtnText}>
                  <span>
                    All features
                  </span>
                </div>
                <Icons.IconServicePackageArrow
                  className={`${styles.allBtnIcon} ${index === activeCard ? styles.active : ''}`}
                />
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default ServicePackage;
