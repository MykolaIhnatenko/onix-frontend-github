import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IVideoFullScreenSlice from './interfaces/IVideoFullScreenSlice';

export const initialState: IVideoFullScreenSlice = {
  videoFullScreen: false,
};

export const videoFullScreenSlice = createSlice({
  name: 'videoFullScreenSlice',
  initialState,
  reducers: {
    setVideoFullScreen: (state, action: PayloadAction<boolean>) => {
      state.videoFullScreen = action.payload;
    },
  },
});

export const { setVideoFullScreen } = videoFullScreenSlice.actions;

export default videoFullScreenSlice.reducer;
