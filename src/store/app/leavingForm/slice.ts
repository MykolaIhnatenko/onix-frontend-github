import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILeavingForm, LeavingFormModalVariants } from './interfaces/ILeavingForm';
import onSendFormMessage from '../contactForm/onSendFormMessage';

const { FORM, SUCCESS, ERROR } = LeavingFormModalVariants;
export const initialState :ILeavingForm = {
  isShowLeavingForm: false,
  isLeavingFormSubmitted: false,
  isLoadingLeavingForm: false,
  modalView: FORM,
  isLeavingFormSendFromPage: false,
  isBlockShowLeavingForm: false,
};

export const leavingFormSlice = createSlice({
  name: 'leavingForm',
  initialState,
  reducers: {
    setShowLeavingForm: (state, action: PayloadAction<{ showLeavingForm: boolean }>) => {
      if (!state.isBlockShowLeavingForm) {
        state.isShowLeavingForm = action.payload.showLeavingForm;
      }
    },
    setIsFormSubmitted: (state, action: PayloadAction<{ isFormSubmitted: boolean }>) => {
      state.isLeavingFormSubmitted = action.payload.isFormSubmitted;
    },
    setLeavingModalView: (state, action: PayloadAction<{ modalView: LeavingFormModalVariants }>) => {
      state.modalView = action.payload.modalView;
    },
    setIsLeavingFormSendFromPage: (state, action: PayloadAction<{ isFormSendFromPage: boolean }>) => {
      state.isLeavingFormSendFromPage = action.payload.isFormSendFromPage;
    },
    setBlockShowLeavingForm: (state, action: PayloadAction<{ isBlockShowLeavingForm: boolean }>) => {
      state.isBlockShowLeavingForm = action.payload.isBlockShowLeavingForm;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onSendFormMessage.pending, (state) => {
        state.isLoadingLeavingForm = true;
        state.isLeavingFormSubmitted = false;
      })
      .addCase(onSendFormMessage.rejected, (state) => {
        state.isShowLeavingForm = true;
        state.isLoadingLeavingForm = false;
        state.isLeavingFormSubmitted = false;
        state.modalView = ERROR;
      })
      .addCase(onSendFormMessage.fulfilled, (state, { payload }) => {
        if (payload.isShowLeaving) {
          state.isShowLeavingForm = true;
          state.isLoadingLeavingForm = false;
          state.isLeavingFormSubmitted = true;
          state.modalView = SUCCESS;
        } else {
          state.isLoadingLeavingForm = false;
          state.isBlockShowLeavingForm = true;
        }
      });
  },
});

export const {
  setIsFormSubmitted,
  setLeavingModalView, setShowLeavingForm,
  setIsLeavingFormSendFromPage, setBlockShowLeavingForm,
} = leavingFormSlice.actions;

export default leavingFormSlice.reducer;
