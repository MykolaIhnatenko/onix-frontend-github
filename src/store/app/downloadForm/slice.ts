import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormModalVariants } from '../contactForm/interfaces/IContactForm';
import { IDownloadForm } from './interfaces/IDownloadForm';
import onSendDownloadFormMessage from './onSendDownloadFormMessage';

const { FORM, SUCCESS, ERROR } = FormModalVariants;
export const initialState: IDownloadForm = {
  isLoadingDownloadForm: false,
  isDownloadFormSubmitted: false,
  isShowDownloadForm: false,
  downloadModalView: FORM,
};

export const downloadFormSlice = createSlice({
  name: 'downloadForm',
  initialState,
  reducers: {
    setIsDownloadFormSubmitted: (state, action: PayloadAction<{ isDownloadFormSubmitted: boolean }>) => {
      state.isDownloadFormSubmitted = action.payload.isDownloadFormSubmitted;
    },
    setDownloadModalView: (state, action: PayloadAction<{ downloadModalView: FormModalVariants }>) => {
      state.downloadModalView = action.payload.downloadModalView;
    },
    setIsShowDownloadForm: (state, action: PayloadAction<{ isShowDownloadForm: boolean }>) => {
      state.isShowDownloadForm = action.payload.isShowDownloadForm;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onSendDownloadFormMessage.pending, (state) => {
        state.isLoadingDownloadForm = true;
        state.isDownloadFormSubmitted = false;
      })
      .addCase(onSendDownloadFormMessage.rejected, (state) => {
        state.isLoadingDownloadForm = false;
        state.isDownloadFormSubmitted = false;
        state.downloadModalView = ERROR;
        state.isShowDownloadForm = true;
      })
      .addCase(onSendDownloadFormMessage.fulfilled, (state) => {
        state.isLoadingDownloadForm = false;
        state.isDownloadFormSubmitted = true;
        state.downloadModalView = SUCCESS;
        state.isShowDownloadForm = true;
      });
  },
});

export const {
  setIsDownloadFormSubmitted,
  setDownloadModalView,
  setIsShowDownloadForm,
} = downloadFormSlice.actions;

export default downloadFormSlice.reducer;
