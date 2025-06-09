import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoader: false,
  isDesktop: true,
  errorMessage: '',
};

export const translatesSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleLoader: (state) => {
      state.isLoader = !state.isLoader;
    },
    toggleScreen: (state) => {
      state.isDesktop = !state.isDesktop;
    },
    toggleError: (state, actions) => {
      state.errorMessage = actions.payload as string;
    },
  },
});

export const { toggleLoader, toggleScreen, toggleError } = translatesSlice.actions;

export default translatesSlice.reducer;
