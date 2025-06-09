import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProject } from 'interfaces/IProjectsList';
import IDesignPortfolio from './interfaces/IDesignPortfolio';
import getDesignPortfolio from './getDesignPortfolio';

export const initialState: IDesignPortfolio = {
  paginationWorks: {
    current: 1,
    maxPage: 0,
  },
  isLoading: true,
  listProjects: [],
};

export const designPortfolioSlice = createSlice({
  name: 'designPortfolio',
  initialState,
  reducers: {
    setPaginationWorks: (state, action: PayloadAction<{ paginationWorks: IDesignPortfolio['paginationWorks'] }>) => {
      state.paginationWorks = action.payload.paginationWorks;
    },
    setListProjects: (state, action: PayloadAction<{ listProjects: IProject[] }>) => {
      state.listProjects = action.payload.listProjects;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDesignPortfolio.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDesignPortfolio.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getDesignPortfolio.fulfilled, (state, action) => {
        state.paginationWorks.maxPage = action.payload.paginationUpdate
          && action.payload.paginationUpdate.limit
          && action.payload.paginationUpdate.total
          ? Math.ceil(action.payload.paginationUpdate.total / action.payload.paginationUpdate.limit)
          : 0;
        if (action.payload.filters) {
          state.paginationWorks.current = 1;
        }
        state.listProjects = action.payload.filters
          ? action.payload.data : [...state.listProjects, ...action.payload.data];
        state.isLoading = false;
      });
  },
});

export const {
  setPaginationWorks, setListProjects,
} = designPortfolioSlice.actions;

export default designPortfolioSlice.reducer;
