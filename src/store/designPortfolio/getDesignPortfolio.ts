import { createAsyncThunk } from '@reduxjs/toolkit';

import getProjectsList from 'api/getProjectsList';
import { EASY_PROJECTS_PAGINATION_LIMIT } from 'constants/constants';

interface IGetProjects {
  category: string;
  start: number;
  names: string[],
  designProject: boolean,
  designCategory: string,
  filters?: boolean;
}

const getDesignPortfolio = createAsyncThunk(
  'app/getDesignPortfolio',
  async ({
    category, start, names, designProject, designCategory, filters,
  }: IGetProjects, { rejectWithValue }) => {
    try {
      const { data, pagination: paginationUpdate } = await getProjectsList(
        category,
        start,
        EASY_PROJECTS_PAGINATION_LIMIT,
        names,
        designProject,
        designCategory,
      );
      return { data, paginationUpdate, filters };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default getDesignPortfolio;
