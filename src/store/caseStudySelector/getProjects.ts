import { createAsyncThunk } from '@reduxjs/toolkit';

import getProjectsList from 'api/getProjectsList';
import { DEFAULT_PROJECTS_PAGINATION_LIMIT } from 'constants/constants';

interface IGetProjects {
  category: string;
  start: number;
  array: string[];
  filters?: boolean;
}

const getProjects = createAsyncThunk(
  'app/getProjects',
  async ({
    category, start, array, filters,
  }: IGetProjects, { rejectWithValue }) => {
    try {
      const { data, pagination: paginationUpdate } = await getProjectsList(
        category,
        start,
        DEFAULT_PROJECTS_PAGINATION_LIMIT,
        array,
      );
      return { data, paginationUpdate, filters };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default getProjects;
