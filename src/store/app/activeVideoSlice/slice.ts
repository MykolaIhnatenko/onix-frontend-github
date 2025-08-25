import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IActiveVideoSlice from './interfaces/IActiveVideoSlice';

export const initialState: IActiveVideoSlice = {
  activeVideoId: null,
};

export const activeVideoSlice = createSlice({
  name: 'activeVideoSlice',
  initialState,
  reducers: {
    setActiveVideoId: (state, action: PayloadAction<number>) => {
      state.activeVideoId = action.payload;
    },
  },
});

export const { setActiveVideoId } = activeVideoSlice.actions;

export default activeVideoSlice.reducer;
