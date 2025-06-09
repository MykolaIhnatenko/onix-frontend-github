import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import ICaseStudySelector from './interfaces/ICaseStudySelector';
import { FILTERS_VARIANT } from 'constants/constants';
import { IProject } from 'interfaces/IProjectsList';
import getProjects from './getProjects';

export const initialState: ICaseStudySelector = {
  technology: FILTERS_VARIANT.SEE_ALL,
  tag: '',
  designTag: FILTERS_VARIANT.SEE_ALL,
  paginationWorks: {
    current: 1,
    maxPage: 0,
  },
  isLoading: true,
  listProjects: [],
};

export const caseStudySelectorSlice = createSlice({
  name: 'caseStudySelector',
  initialState,
  reducers: {
    setTechnology: (state, action: PayloadAction<{ technology: string }>) => {
      state.technology = action.payload.technology;
    },
    setTag: (state, action: PayloadAction<{ tag: string }>) => {
      state.tag = action.payload.tag;
    },
    setDesignTag: (state, action: PayloadAction<{ designTag: string }>) => {
      state.designTag = action.payload.designTag;
    },
    setPaginationWorks: (state, action: PayloadAction<{ paginationWorks: ICaseStudySelector['paginationWorks'] }>) => {
      state.paginationWorks = action.payload.paginationWorks;
    },
    setListProjects: (state, action: PayloadAction<{ listProjects: IProject[] }>) => {
      state.listProjects = action.payload.listProjects;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjects.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listProjects = action.payload.filters
          ? action.payload.data : [...state.listProjects, ...action.payload.data];
        if (action.payload.filters) {
          state.paginationWorks.current = 1;
        }
        state.paginationWorks.maxPage = action.payload.paginationUpdate
        && action.payload.paginationUpdate.limit
        && action.payload.paginationUpdate.total
          ? Math.ceil(action.payload.paginationUpdate.total / action.payload.paginationUpdate.limit)
          : 0;
      });
  },
});

export const {
  setTechnology, setTag, setDesignTag, setPaginationWorks, setListProjects,
} = caseStudySelectorSlice.actions;

export default caseStudySelectorSlice.reducer;
