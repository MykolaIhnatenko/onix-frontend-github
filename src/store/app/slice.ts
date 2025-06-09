import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IApp, IScreenSizes } from './interfaces/IApp';

export const initialState: IApp = {
  screenSizes: {
    isXXXLDevice: false, // more than 1920px
    isXXLDevice: false, // more than 1440px less than 1920px
    isXLDevice: false, // more than 1200px less than 1440px
    isLGDevice: false, // more than 992px less than 1200
    isMDDevice: false, //  more than 768px less than 992px
    isSMDevice: false, // more than 576px less than 768px
    isXSDevice: false, // more than 0 less than 576px
    screenWidth: 0, // more than 0 less than 576px
  },
  navSubMenuVisibility: 0,
  isFontReady: false,
  windowWidth: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setScreenSizes: (state, action: PayloadAction<{ screenSizes: IScreenSizes }>) => {
      state.screenSizes = action.payload.screenSizes;
    },
    setWindowWidth: (state, action: PayloadAction<{ windowWidth: number }>) => {
      state.windowWidth = action.payload.windowWidth;
    },
    setNavSubMenuVisibility: (state, action: PayloadAction<{ navSubMenuVisibility:number }>) => {
      state.navSubMenuVisibility = action.payload.navSubMenuVisibility;
    },
    setIsFontReady: (state, action: PayloadAction<{ isFontReady:boolean }>) => {
      state.isFontReady = action.payload.isFontReady;
    },
  },
});

export const {
  setScreenSizes, setWindowWidth, setNavSubMenuVisibility, setIsFontReady,
} = appSlice.actions;

export default appSlice.reducer;
