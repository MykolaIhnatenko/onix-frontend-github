import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isShowAll: false,
};

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    toggleShowAll: (state) => {
      state.isShowAll = !state.isShowAll;
    },
  },
});

export const { toggleShowAll } = blogsSlice.actions;

export default blogsSlice.reducer;
