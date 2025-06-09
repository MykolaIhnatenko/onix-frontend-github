import { createSlice } from '@reduxjs/toolkit';

import ICursorFollower from './interfaces/ICursorFollower';

export const initialState: ICursorFollower = {
  uiUxSoudn: false,
};

export const cursorFollowerSlice = createSlice({
  name: 'cursorFollower',
  initialState,
  reducers: {
    setUiUxSoudn: (state) => {
      state.uiUxSoudn = !state.uiUxSoudn;
    },
  },
});

export const {
  setUiUxSoudn,
} = cursorFollowerSlice.actions;

export default cursorFollowerSlice.reducer;
