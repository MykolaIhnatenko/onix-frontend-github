'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StaticImageData } from 'next/image';

import MainSection from './components/MainSection';
import getTechnologies from 'api/getTechnologies';
import { IDesignTagList, ITechnologiesList } from 'interfaces/ITechnologies';
import PageContainer from 'components/PageContainer/PageContainer';
import { useAppDispatch } from 'hook/reduxToolkit';
import { setTechnology, setTag, setDesignTag } from 'store/caseStudySelector/slice';
import { FILTERS_VARIANT } from 'constants/constants';
import IStore from 'store/interfaces/IStore';
import ICaseStudySelector from 'store/caseStudySelector/interfaces/ICaseStudySelector';
import { IApp } from 'store/app/interfaces/IApp';
import Background from '../../assets/images/mainPageSale/img_mainSale@2x.webp';
import BackgroundXXXL from '../../assets/images/mainPageSale/img_mainSaleXXXL@2x.webp';
import BackgroundTablet from '../../assets/images/mainPageSale/img_mainSaleTablet@2x.webp';
import BackgroundMobile from '../../assets/images/mainPageSale/img_mainSaleMobile@2x.webp';
import ImageComponent from 'components/Image/Image';
import CaseStudiesSection from './components/CaseStudiesSection';
import DesignPortfolioSection from './components/DesignPortfolioSection';
import getDesignTags from 'api/getDesignTags';
import { toggleError } from 'store/home/slice';
import getDesignPortfolio from 'store/designPortfolio/getDesignPortfolio';
import DesignButtonsPanel from './components/DesignButtonsPanel';
import CaseStudiesPanel from './components/CaseStudiesPanel';
import { IFilterItems } from 'pages/Work/interfaces/IWork';

import styles from './sass/mainPageSale.module.scss';

function MainPageSale() {
  const {
    technology,
    designTag,
  } = useSelector<IStore, ICaseStudySelector>((state) => state?.caseStudySelector);
  const [technologiesList, setTechnologiesList] = useState<ITechnologiesList | null>(null);
  const [filtersState, setFiltersState] = useState<IFilterItems[]>([]);
  const [designTagList, setDesignTagList] = useState<IDesignTagList | null>(null);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<number>(0);
  const onClickHandler = (btnId: number) => setActive(btnId);
  const initialProjectList = async (
    category:string,
    start: number,
    names: string[],
    designProject: boolean,
    designCategory: string,
    filters: boolean,
  ) => {
    await dispatch(getDesignPortfolio({
      category, start, names, designProject, designCategory, filters,
    }));
  };
  const {
    screenSizes: {
      isSMDevice,
      isXSDevice,
      isMDDevice,
      isXXXLDevice,
    },
  } = useSelector<IStore, IApp>((state) => state?.app);

  const getBackground = () => {
    const bg:{ [propName:string]: StaticImageData } = {
      mainScreen: Background,
    };
    if (isXXXLDevice) {
      bg.mainScreen = BackgroundXXXL;
    } else if (isMDDevice || isSMDevice) {
      bg.mainScreen = BackgroundTablet;
    } else if (isXSDevice) {
      bg.mainScreen = BackgroundMobile;
    }
    return bg;
  };

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const technologies = await getTechnologies();
        setTechnologiesList(technologies);
      } catch (error) {
        throw new Error(`Error fetching case studies tags: ${(error as Error).message}`);
      }
    };

    const fetchDesignTagList = async () => {
      try {
        const designTags = await getDesignTags();
        setDesignTagList(designTags);
      } catch (error) {
        throw new Error(`Error fetching design tags: ${(error as Error).message}`);
      }
    };

    fetchDesignTagList().catch(() => '');
    fetchTechnologies().catch(() => '');
  }, []);

  const typeFilterHandle = (id: string) => {
    dispatch(setTechnology({ technology: id }));
    dispatch(setTag({ tag: '' }));
  };

  const selectFilterHandle = (id: string) => {
    dispatch(setTag({ tag: id }));
  };

  const typeDesignFilterHandle = (id: string) => {
    dispatch(setDesignTag({ designTag: id }));
    if (id === 'See All') {
      const filtersArray = designTagList?.data?.map((item) => (item?.attributes?.name)) || [];
      initialProjectList('', 0, filtersArray, true, '', true).catch((error) => {
        dispatch(toggleError(error));
      });
    }
  };

  useEffect(() => {
    if (technology === '') {
      dispatch(setTechnology({ technology: FILTERS_VARIANT.SEE_ALL }));
    }
  }, [technology]);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <ImageComponent
          src={getBackground().mainScreen}
          fill
          alt="background"
          sizes="100vw"
          quality={100}
        />
      </div>
      <PageContainer className={styles.content}>
        <MainSection active={active} onClickHandler={onClickHandler} />
        {(technologiesList && active === 0) && (
          <CaseStudiesPanel
            technologiesList={technologiesList}
            selectFilterHandle={selectFilterHandle}
            typeFilterHandle={typeFilterHandle}
          />
        )}
        {(designTagList && active === 1) && (
          <DesignButtonsPanel
            designTag={designTag || FILTERS_VARIANT.SEE_ALL}
            designTagList={designTagList}
            typeFilterHandle={typeDesignFilterHandle}
          />
        )}
        {(technologiesList && active === 0) && (
          <CaseStudiesSection
            technologiesList={technologiesList}
            filters={filtersState}
            setFilters={setFiltersState}
          />
        )}
        {(designTagList && active === 1) && <DesignPortfolioSection designTagList={designTagList} />}
      </PageContainer>
    </div>
  );
}

export default MainPageSale;
