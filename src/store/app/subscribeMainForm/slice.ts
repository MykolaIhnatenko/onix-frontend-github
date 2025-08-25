import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormModalVariants } from '../contactForm/interfaces/IContactForm';
import { ISubscribeMainForm } from './interfaces/ISubscribeForm';
import onSendSubscribeFormMainMessage from './onSendSubscribeFormMainMessage';
import Modeltype from '../../../constants/Modeltype';

const { FORM, SUCCESS, ERROR } = FormModalVariants;
export const initialState: ISubscribeMainForm = {
  isLoadingSubscribeForm: false,
  isSubscribeFormSubmitted: false,
  isShowSubscribeForm: false,
  modalView: FORM,
  modeltype: Modeltype.MAIN_PAGE,
};

export const subscribeFormMainSlice = createSlice({
  name: 'subscribeForm',
  initialState,
  reducers: {
    setIsSubscribeFormSubmitted: (state, action: PayloadAction<{ isSubscribeFormMeinSubmitted: boolean }>) => {
      state.isSubscribeFormSubmitted = action.payload.isSubscribeFormMeinSubmitted;
    },
    setSubscribeModalView: (state, action: PayloadAction<{ subscribeMeinModalView: FormModalVariants }>) => {
      state.modalView = action.payload.subscribeMeinModalView;
    },
    setIsShowSubscribeMainForm: (state, action: PayloadAction<{ isShowSubscribeFormMein: boolean }>) => {
      state.isShowSubscribeForm = action.payload.isShowSubscribeFormMein;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onSendSubscribeFormMainMessage.pending, (state) => {
        state.isLoadingSubscribeForm = true;
        state.isSubscribeFormSubmitted = false;
      })
      .addCase(onSendSubscribeFormMainMessage.rejected, (state) => {
        state.isLoadingSubscribeForm = false;
        state.isSubscribeFormSubmitted = false;
        state.modalView = ERROR;
        state.isShowSubscribeForm = true;
      })
      .addCase(onSendSubscribeFormMainMessage.fulfilled, (state) => {
        state.isLoadingSubscribeForm = false;
        state.isSubscribeFormSubmitted = true;
        state.modalView = SUCCESS;
        state.isShowSubscribeForm = true;
      });
  },
});

export const {
  setIsSubscribeFormSubmitted,
  setSubscribeModalView,
  setIsShowSubscribeMainForm,
} = subscribeFormMainSlice.actions;

export default subscribeFormMainSlice.reducer;
