import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormModalVariants } from '../contactForm/interfaces/IContactForm';
import { ISubscribeForm } from './interfaces/ISubscribeForm';
import onSendSubscribeFormMessage from './onSendSubscribeFormMessage';

const { FORM, SUCCESS, ERROR } = FormModalVariants;
export const initialState: ISubscribeForm = {
  isLoadingSubscribeForm: false,
  isSubscribeFormSubmitted: false,
  isShowSubscribeForm: false,
  subscribeModalView: FORM,
  isOpenTopics: false,
};

export const subscribeFormSlice = createSlice({
  name: 'subscribeForm',
  initialState,
  reducers: {
    setIsSubscribeFormSubmitted: (state, action: PayloadAction<{ isSubscribeFormSubmitted: boolean }>) => {
      state.isSubscribeFormSubmitted = action.payload.isSubscribeFormSubmitted;
    },
    setSubscribeModalView: (state, action: PayloadAction<{ subscribeModalView: FormModalVariants }>) => {
      state.subscribeModalView = action.payload.subscribeModalView;
    },
    setIsShowSubscribeForm: (state, action: PayloadAction<{ isShowSubscribeForm: boolean }>) => {
      state.isShowSubscribeForm = action.payload.isShowSubscribeForm;
    },
    setIsOpenTopics: (state, action: PayloadAction<{ isOpenTopics: boolean }>) => {
      state.isOpenTopics = action.payload.isOpenTopics;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onSendSubscribeFormMessage.pending, (state) => {
        state.isLoadingSubscribeForm = true;
        state.isSubscribeFormSubmitted = false;
      })
      .addCase(onSendSubscribeFormMessage.rejected, (state) => {
        state.isLoadingSubscribeForm = false;
        state.isSubscribeFormSubmitted = false;
        state.subscribeModalView = ERROR;
        state.isShowSubscribeForm = true;
      })
      .addCase(onSendSubscribeFormMessage.fulfilled, (state) => {
        state.isLoadingSubscribeForm = false;
        state.isSubscribeFormSubmitted = true;
        state.subscribeModalView = SUCCESS;
        state.isShowSubscribeForm = true;
      });
  },
});

export const {
  setIsSubscribeFormSubmitted,
  setSubscribeModalView,
  setIsShowSubscribeForm,
  setIsOpenTopics,
} = subscribeFormSlice.actions;

export default subscribeFormSlice.reducer;
