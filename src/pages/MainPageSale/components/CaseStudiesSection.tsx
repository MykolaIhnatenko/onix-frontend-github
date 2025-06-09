import {
  useEffect, useState, useCallback,
} from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'hook/reduxToolkit';
import ICaseStudySelector from 'store/caseStudySelector/interfaces/ICaseStudySelector';
import IStore from 'store/interfaces/IStore';
import getProjects from 'store/caseStudySelector/getProjects';
import { setTag, setPaginationWorks } from 'store/caseStudySelector/slice';
import { DEFAULT_PROJECTS_PAGINATION_LIMIT, FILTERS_VARIANT } from 'constants/constants';
import getFilterListHandle, { getCategoriesStudies, getNameFilter } from 'utils/commonWorkPage';
import { toggleError } from 'store/home/slice';
import ProjectCard from 'components/ProjectCard/ProjectCard';
import SkeletonLoader from 'components/SkeletonLoader/SkeletonLoader';
import ICaseStudiesSection from '../interfaces/ICaseStudiesSection';
import CominSoonCard from './CominSoonCard';

import styles from '../sass/projectsSection.module.scss';

function CaseStudiesSection({ technologiesList, filters, setFilters }: ICaseStudiesSection) {
  const {
    technology,
    tag,
    isLoading,
    listProjects,
    paginationWorks,
  } = useSelector<IStore, ICaseStudySelector>((state) => state?.caseStudySelector);
  const dispatch = useAppDispatch();
  const [firstLoad, setFirstLoad] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);

  const initialProjectList = async (category: string, start: number, array: string[]) => {
    await dispatch(getProjects({ category, start, array }));
  };

  const getNextProjects = useCallback((start: number, maxPage: number) => {
    try {
      if (start < maxPage) {
        const filtersCheckSale = tag.split('All').length > 1;
        const categorySale: string = filtersCheckSale ? '' : getNameFilter(tag);
        const filtersArraySale = filters.map((item, index) => (index !== 0 ? item.name : ''));
        if (technologiesList) {
          const tagsArray = categorySale ? [] : getCategoriesStudies(technologiesList);
          const array = filtersCheckSale ? filtersArraySale : tagsArray;
          initialProjectList(categorySale, start + 1, array).catch((error) => {
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
    const scrolledYSale = window.scrollY;
    const pageHeightSale = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentageSale = (scrolledYSale / pageHeightSale) * 100;

    if (scrollPercentageSale > 40 && scrollPercentageSale < 70 && listProjects.length > 0
       && paginationWorks.current <= paginationWorks.maxPage
       && !isLoading) {
      getNextProjects(paginationWorks.current, paginationWorks.maxPage);
    }
  }, [paginationWorks, listProjects, getNextProjects, dispatch]);

  useEffect(() => {
    if (firstLoad) {
      const filtersCheckSale = tag.split(FILTERS_VARIANT.ALL).length > 1;
      const category: string = filtersCheckSale ? '' : getNameFilter(tag);
      const filtersArraySale = filters.map((item, index) => (index !== 0 ? item.name : ''));
      if (technologiesList) {
        const tagsArraySale = category ? [] : getCategoriesStudies(technologiesList);
        const array = filtersCheckSale ? filtersArraySale : tagsArraySale;
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

  useEffect(() => {
    if (tag !== '' && technologiesList) {
      const newListSale = getFilterListHandle(technology, technologiesList);
      setFilters(newListSale);
    } else if (technology !== FILTERS_VARIANT.SEE_ALL && technologiesList) {
      const newListSale = getFilterListHandle(technology, technologiesList);
      setFilters(newListSale);
      const nameFirstSale = newListSale[0].name === 'All ' ? '' : newListSale[0].name;
      dispatch(setTag({ tag: nameFirstSale }));
    } else {
      setFilters([]);
      dispatch(setTag({ tag: '' }));
    }
  }, [technologiesList, technology, tag]);

  const filtersCheckFunc = (category: string, filtersArray: string[], filtersCheck: boolean) => {
    if (technologiesList) {
      const tagsArray = category ? [] : getCategoriesStudies(technologiesList);
      const array = filtersCheck ? filtersArray : tagsArray;
      initialProjectList('', 0, array).catch((error) => {
        dispatch(toggleError(error));
      });
    }
  };

  useEffect(() => {
    if ((listProjects.length < 1 || !listProjects) && initialLoad) {
      const filtersCheckSale = tag.split(FILTERS_VARIANT.ALL).length > 1;
      const categorySale: string = filtersCheckSale ? '' : getNameFilter(tag);
      const filtersArraySale = filters.map((item, index) => (index !== 0 ? item.name : ''));
      filtersCheckFunc(categorySale, filtersArraySale, filtersCheckSale);
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
    <div
      className={styles.contentContainer}
    >
      {listProjects.length > 0 ? (
        listProjects
          .filter(({ attributes }) => attributes?.page?.data?.attributes?.sale === true)
          .map(({ id, attributes }, index) => (
            <ProjectCard
              key={[id, index].join('_')}
              image={attributes?.picture?.data?.attributes?.url}
              description={attributes?.page?.data?.attributes?.description}
              header={attributes?.header}
              url={attributes?.page?.data?.attributes?.url || ''}
            />
          ))
      ) : (CominSoonCard(isLoading))}
      {isLoading && new Array(DEFAULT_PROJECTS_PAGINATION_LIMIT).fill(0).map((_, index) => (
        <SkeletonLoader key={['skeleton', index].join('_')} />
      ))}
    </div>
  );
}

export default CaseStudiesSection;
