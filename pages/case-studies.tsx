import {
  useEffect, useState, useCallback,
} from 'react';
import { useSelector } from 'react-redux';

import { ICaseStudiesPages } from '../src/interfaces/IPages';
import Layout from '../src/layout/Layout';
import PagesToSalesChannels from '../src/constants/PageToSalesChannels';
import WorkPageView from '../src/pages/Work/WorkPageView';
import getSeoData from '../src/api/getSeoData';
import getFooterContent from 'api/getFooterContent';
import { getBreadcrumbsData } from '../src/utils/helperHandlerPages';
import { TitlePages } from '../src/constants/enums';
import { IBreadcrumbsItem } from '../src/layout/interfaces/IBreadcrumbs';
import { ITechnologiesList } from '../src/interfaces/ITechnologies';
import getTechnologies from '../src/api/getTechnologies';
import { IFilterItems } from '../src/pages/Work/interfaces/IWork';
import { FILTERS_VARIANT } from '../src/constants/constants';
import getFilterListHandle, {
  getNameFilter, getCategoriesStudies,
} from '../src/utils/commonWorkPage';
import { useAppDispatch } from '../src/hook/reduxToolkit';
import { toggleError } from '../src/store/home/slice';
import IStore from '../src/store/interfaces/IStore';
import ICaseStudySelector from '../src/store/caseStudySelector/interfaces/ICaseStudySelector';
import {
  setPaginationWorks, setTag, setTechnology,
} from 'store/caseStudySelector/slice';
import getProjects from 'store/caseStudySelector/getProjects';

function WorkPage({
  seoData, technologiesList, footerContent,
}:ICaseStudiesPages) {
  const {
    technology,
    tag,
    isLoading,
    listProjects,
    paginationWorks,
  } = useSelector<IStore, ICaseStudySelector>((state) => state?.caseStudySelector);
  const dispatch = useAppDispatch();
  const breadcrumbs:IBreadcrumbsItem[] = getBreadcrumbsData(TitlePages.CASE_STUDIES, '');
  const [filters, setFilters] = useState<IFilterItems[]>([]);
  const [firstLoad, setFirstLoad] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const openModalHandle = () => setOpenModal(!openModal);

  const initialProjectList = async (category: string, start: number, array: string[]) => {
    await dispatch(getProjects({ category, start, array }));
  };

  const typeFilterHandle = (id: string) => {
    dispatch(setTechnology({ technology: id }));
    dispatch(setTag({ tag: '' }));
    if (id !== FILTERS_VARIANT.SEE_ALL) {
      openModalHandle();
    }
  };

  const selectFilterHandle = (id: string) => {
    dispatch(setTag({ tag: id }));
    setOpenModal(false);
  };

  const getNextProjects = useCallback((start: number, maxPage: number) => {
    try {
      if (start < maxPage) {
        const filtersCheck = tag.split('All').length > 1;
        const category: string = filtersCheck ? '' : getNameFilter(tag);
        const filtersArray = filters.map((item, index) => (index !== 0 ? item.name : ''));
        if (technologiesList) {
          const tagsArray = category ? [] : getCategoriesStudies(technologiesList);
          const array = filtersCheck ? filtersArray : tagsArray;
          initialProjectList(category, start + 1, array).catch((error) => {
            dispatch(toggleError(error));
          });
          dispatch(setPaginationWorks({ paginationWorks: { current: start + 1, maxPage } }));
        }
      }
    } catch (error) {
      dispatch(toggleError(error));
    }
  }, [dispatch, filters, tag]);

  const handleScroll = useCallback(() => {
    const scrolledY = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrolledY / pageHeight) * 100;

    if (scrollPercentage > 40 && scrollPercentage < 70 && listProjects.length > 0
       && paginationWorks.current <= paginationWorks.maxPage
       && !isLoading) {
      getNextProjects(paginationWorks.current, paginationWorks.maxPage);
    }
  }, [paginationWorks, listProjects, getNextProjects, dispatch]);

  useEffect(() => {
    if (tag !== '' && technologiesList) {
      const newList = getFilterListHandle(technology, technologiesList);
      setFilters(newList);
    } else if (technology !== FILTERS_VARIANT.SEE_ALL && technologiesList) {
      const newList = getFilterListHandle(technology, technologiesList);
      setFilters(newList);
      const nameFirst = newList[0].name === 'All ' ? '' : newList[0].name;
      dispatch(setTag({ tag: nameFirst }));
    } else {
      setFilters([]);
      dispatch(setTag({ tag: '' }));
    }
  }, [technologiesList, technology, tag]);

  useEffect(() => {
    if (technology === '') {
      dispatch(setTechnology({ technology: FILTERS_VARIANT.SEE_ALL }));
      setOpenModal(false);
    }
  }, [technology]);

  useEffect(() => {
    if (firstLoad) {
      const filtersCheck = tag.split(FILTERS_VARIANT.ALL).length > 1;
      const category: string = filtersCheck ? '' : getNameFilter(tag);
      const filtersArray = filters.map((item, index) => (index !== 0 ? item.name : ''));
      if (technologiesList) {
        const tagsArray = category ? [] : getCategoriesStudies(technologiesList);
        const array = filtersCheck ? filtersArray : tagsArray;
        dispatch(getProjects({
          category, start: 0, array, filters: true,
        })).catch((error) => {
          dispatch(toggleError(error));
        });
      }
    } else if (filters.length > 0) {
      setFirstLoad(true);
    }
  }, [dispatch, filters, firstLoad, tag]);

  const shouldLoadInitialProjects = () => (listProjects.length < 1 || !listProjects) && initialLoad;

  const getCategory = (isFiltersCheck: boolean) => (isFiltersCheck ? '' : getNameFilter(tag));

  const getFiltersArray = () => filters.map((item, index) => (index !== 0 ? item.name : ''));

  useEffect(() => {
    if (shouldLoadInitialProjects()) {
      const filtersCheck = tag.split(FILTERS_VARIANT.ALL).length > 1;
      const category = getCategory(filtersCheck);
      const filtersArray = getFiltersArray();

      if (technologiesList) {
        const tagsArray = category ? [] : getCategoriesStudies(technologiesList);
        const array = filtersCheck ? filtersArray : tagsArray;
        initialProjectList('', 0, array).catch((error) => {
          dispatch(toggleError(error));
        });
      }
    } else {
      setInitialLoad(true);
    }
  }, [initialLoad]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Layout
      footerContent={footerContent}
      seoData={seoData}
      salesChannel={PagesToSalesChannels.CASE_STUDIES}
      breadcrumbs={breadcrumbs}
    >
      <WorkPageView
        typeFilter={technology}
        typeFilterHandle={typeFilterHandle}
        technologiesList={technologiesList}
        selectFilter={tag}
        filters={filters}
        selectFilterHandle={selectFilterHandle}
        listProjects={listProjects}
        openModal={openModal}
        openModalHandle={openModalHandle}
        isLoading={isLoading}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const footerContent = await getFooterContent();
  const seoData = await getSeoData({ page: 'case-studies' });

  if (!seoData?.seoTitle) {
    return {
      notFound: true,
    };
  }

  const technologiesList: ITechnologiesList = await getTechnologies();

  return {
    props: {
      seoData,
      footerContent,
      technologiesList,
    },
  };
}

export default WorkPage;
