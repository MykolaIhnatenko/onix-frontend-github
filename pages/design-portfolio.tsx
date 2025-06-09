import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useSelector } from 'react-redux';

import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import { TitlePages } from '../src/constants/enums';
import Layout from '../src/layout/Layout';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { IDesignPortfolioPages } from '../src/pages/DesignPortfolioView/interfaces/IDesignPortfolio';
import { getBreadcrumbsData } from '../src/utils/helperHundlerPages';
import DesignPortfolioView from '../src/pages/DesignPortfolioView/DesignPortfolioView';
import getDesignTags from '../src/api/getDesignTags';
import { IDesignTagList } from '../src/interfaces/ITechnologies';
import { FILTERS_VARIANT } from '../src/constants/constants';
import { useAppDispatch } from '../src/hook/reduxToolkit';
import { toggleError } from '../src/store/home/slice';
import { getNameFilter } from '../src/utils/commonWorkPage';
import IStore from '../src/store/interfaces/IStore';
import ICaseStudySelector from '../src/store/caseStudySelector/interfaces/ICaseStudySelector';
import { setDesignTag } from '../src/store/caseStudySelector/slice';
import getDesignPortfolio from 'store/designPortfolio/getDesignPortfolio';
import IDesignPortfolio from 'store/designPortfolio/interfaces/IDesignPortfolio';
import { setPaginationWorks } from 'store/designPortfolio/slice';

function DesignPortfolio({
  seoData, designTagList, footerContent,
}:IDesignPortfolioPages) {
  const dispatch = useAppDispatch();
  const {
    designTag,
  } = useSelector<IStore, ICaseStudySelector>((state) => state?.caseStudySelector);
  const {
    isLoading,
    listProjects,
    paginationWorks,
  } = useSelector<IStore, IDesignPortfolio>((state) => state?.designPortfolio);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.DESIGN_PORTFOLIO, '');
  const [firstLoad, setFirstLoad] = useState(false);

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

  const typeFilterHandle = (id: string) => {
    dispatch(setDesignTag({ designTag: id }));
    if (id === 'See All') {
      const filtersArray = designTagList?.data?.map((item) => (item?.attributes?.name)) || [];
      initialProjectList('', 0, filtersArray, true, '', true).catch((error) => {
        dispatch(toggleError(error));
      });
    }
  };

  const checkFirstLoad = (designCategory: string, array: string[]) => {
    if (designCategory === '') {
      if (listProjects.length < 1 || !listProjects) {
        initialProjectList('', 0, array, true, '', false).catch((error) => {
          dispatch(toggleError(error));
        });
      }
    } else {
      initialProjectList('', 0, array, true, designCategory, true).catch((error) => {
        dispatch(toggleError(error));
      });
    }
  };

  const getNextProjects = useCallback((start: number, maxPage: number) => {
    try {
      if (start < maxPage) {
        const filtersCheck = designTag.split('All').length > 1 || designTag === '';
        const category: string = filtersCheck ? '' : getNameFilter(designTag);
        const filtersArray = designTagList?.data?.map((item) => (item?.attributes?.name)) || [];
        const array = filtersCheck ? filtersArray : [];
        initialProjectList('', start + 1, array, true, category, false).catch((error) => {
          dispatch(toggleError(error));
        });
        dispatch(setPaginationWorks({ paginationWorks: { current: start + 1, maxPage } }));
      }
    } catch (error) {
      dispatch(toggleError(error));
    }
  }, [designTagList?.data, dispatch, designTag]);

  const handleScroll = useCallback(() => {
    const scrolledY = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrolledY / pageHeight) * 100;
    if (scrollPercentage > 20 && scrollPercentage < 70 && listProjects.length > 0
       && paginationWorks.current <= paginationWorks.maxPage
        && !isLoading) {
      getNextProjects(paginationWorks.current, paginationWorks.maxPage);
    }
  }, [dispatch, getNextProjects, listProjects, paginationWorks]);

  useEffect(() => {
    if (firstLoad) {
      const filtersCheck = designTag.split(FILTERS_VARIANT.ALL).length > 1 || designTag === '';
      const designCategory: string = filtersCheck ? '' : getNameFilter(designTag);
      const filtersArray = designTagList?.data?.map((item) => (item?.attributes?.name)) || [];
      const array = filtersCheck ? filtersArray : [];
      checkFirstLoad(designCategory, array);
    } else if (designTagList?.data && designTagList.data.length > 0) {
      setFirstLoad(true);
    }
  }, [designTagList?.data, dispatch, firstLoad, designTag]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, paginationWorks]);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.DESIGN_PORTFOLIO}
      breadcrumbs={breadcrumbs}
    >
      <DesignPortfolioView
        typeFilter={designTag || FILTERS_VARIANT.SEE_ALL}
        typeFilterHandle={typeFilterHandle}
        technologiesList={designTagList}
        arrayText={designTagList?.data?.map((item) => item?.attributes?.name) || []}
        containerRef={containerRef}
        listProjects={listProjects}
        isLoading={isLoading}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'design-portfolio' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const designTagList: IDesignTagList = await getDesignTags();

  return {
    props: {
      seoData,
      footerContent,
      designTagList,
    },
  };
}

export default DesignPortfolio;
