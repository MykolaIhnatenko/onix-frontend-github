import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';

import ProjectCard from 'components/ProjectCard/ProjectCard';
import SkeletonLoader from 'components/SkeletonLoader/SkeletonLoader';
import { DEFAULT_PROJECTS_PAGINATION_LIMIT, FILTERS_VARIANT } from 'constants/constants';
import IDesignPortfolioSection from '../interfaces/IDesignPortfolioSection';
import { useAppDispatch } from 'hook/reduxToolkit';
import IStore from 'store/interfaces/IStore';
import ICaseStudySelector from 'store/caseStudySelector/interfaces/ICaseStudySelector';
import IDesignPortfolio from 'store/designPortfolio/interfaces/IDesignPortfolio';
import getDesignPortfolio from 'store/designPortfolio/getDesignPortfolio';
import { toggleError } from 'store/home/slice';
import { getNameFilter } from 'utils/commonWorkPage';
import { setPaginationWorks } from 'store/designPortfolio/slice';
import CominSoonCard from './CominSoonCard';

import styles from '../sass/projectsSection.module.scss';

export default function DesignPortfolioSection({ designTagList }: IDesignPortfolioSection) {
  const dispatch = useAppDispatch();
  const {
    designTag,
  } = useSelector<IStore, ICaseStudySelector>((state) => state?.caseStudySelector);
  const {
    isLoading,
    listProjects,
    paginationWorks,
  } = useSelector<IStore, IDesignPortfolio>((state) => state?.designPortfolio);
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

  const checkFirstLoadSale = (designCategorySale: string, arraySale: string[]) => {
    if (designCategorySale === '') {
      if (listProjects.length < 1 || !listProjects) {
        initialProjectList('', 0, arraySale, true, '', false).catch((errorSale) => {
          dispatch(toggleError(errorSale));
        });
      }
    } else {
      initialProjectList('', 0, arraySale, true, designCategorySale, true).catch((errorSale) => {
        dispatch(toggleError(errorSale));
      });
    }
  };

  const getNextProjectsSale = useCallback((start: number, maxPage: number) => {
    try {
      if (start < maxPage) {
        const filtersCheckSale = designTag.split('All').length > 1 || designTag === '';
        const category: string = filtersCheckSale ? '' : getNameFilter(designTag);
        const filtersArraySale = designTagList?.data?.map((item) => (item?.attributes?.name)) || [];
        const array = filtersCheckSale ? filtersArraySale : [];
        initialProjectList('', start + 1, array, true, category, false).catch((error) => {
          dispatch(toggleError(error));
        });
        dispatch(setPaginationWorks({ paginationWorks: { current: start + 1, maxPage } }));
      }
    } catch (error) {
      dispatch(toggleError(error));
    }
  }, [designTagList?.data, dispatch, designTag]);

  const handleScrollSale = useCallback(() => {
    const scrolledY = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrolledY / pageHeight) * 100;
    if (scrollPercentage > 20 && scrollPercentage < 70 && listProjects.length > 0
       && paginationWorks.current <= paginationWorks.maxPage
        && !isLoading) {
      getNextProjectsSale(paginationWorks.current, paginationWorks.maxPage);
    }
  }, [dispatch, getNextProjectsSale, listProjects, paginationWorks]);

  useEffect(() => {
    if (firstLoad) {
      const filtersCheckSale = designTag.split(FILTERS_VARIANT.ALL).length > 1 || designTag === '';
      const designCategory: string = filtersCheckSale ? '' : getNameFilter(designTag);
      const filtersArraySale = designTagList?.data?.map((item) => (item?.attributes?.name)) || [];
      const array = filtersCheckSale ? filtersArraySale : [];
      checkFirstLoadSale(designCategory, array);
    } else if (designTagList?.data && designTagList.data.length > 0) {
      setFirstLoad(true);
    }
  }, [designTagList?.data, dispatch, firstLoad, designTag]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollSale);
    return () => {
      window.removeEventListener('scroll', handleScrollSale);
    };
  }, [handleScrollSale, paginationWorks]);

  return (
    <div
      className={styles.contentContainer}
    >
      {listProjects.length > 0
        ? listProjects
          .filter(({ attributes }) => attributes?.page?.data?.attributes?.sale === true)
          .map(({ id, attributes }, index) => (
            <ProjectCard
              key={[id, index].join('_')}
              description={attributes?.page?.data?.attributes?.description}
              image={attributes.picture?.data?.attributes?.url}
              url={attributes?.page?.data?.attributes?.url || ''}
              header={attributes?.header}
            />
          )) : (CominSoonCard(isLoading))}
      {isLoading && new Array(DEFAULT_PROJECTS_PAGINATION_LIMIT).fill(0).map((_, index) => (
        <SkeletonLoader key={['skeleton', index].join('_')} />
      ))}
    </div>
  );
}
