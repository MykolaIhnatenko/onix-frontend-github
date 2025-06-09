import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IContactForm, FormModalVariants } from './interfaces/IContactForm';
import onSendFormMessage from './onSendFormMessage';
import Modeltype from 'constants/Modeltype';

const { FORM, SUCCESS, ERROR } = FormModalVariants;
export const initialState :IContactForm = {
  isLoadingContactForm: false,
  isShowContactForm: false,
  isFormSubmitted: false,
  modalView: FORM,
  isDragListen: false,
  isFormSendFromPage: false,
  modeltype: Modeltype.CONTACT_FORM_POP_UP,
};

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    setShowContactForm: (state, action: PayloadAction<{ showContactForm: boolean }>) => {
      state.isShowContactForm = action.payload.showContactForm;
    },
    setIsFormSubmitted: (state, action: PayloadAction<{ isFormSubmitted: boolean }>) => {
      state.isFormSubmitted = action.payload.isFormSubmitted;
    },
    setModalView: (state, action: PayloadAction<{ modalView: FormModalVariants }>) => {
      state.modalView = action.payload.modalView;
    },
    setIsDragListen: (state, action: PayloadAction<{ isDragListen: boolean }>) => {
      state.isDragListen = action.payload.isDragListen;
    },
    setIsFormSendFromPage: (state, action: PayloadAction<{ isFormSendFromPage: boolean }>) => {
      state.isFormSendFromPage = action.payload.isFormSendFromPage;
    },
    setModeltype: (state, action: PayloadAction<{ modeltype: Modeltype }>) => {
      state.modeltype = action.payload.modeltype;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onSendFormMessage.pending, (state) => {
        state.isLoadingContactForm = true;
        state.isFormSubmitted = false;
      })
      .addCase(onSendFormMessage.rejected, (state) => {
        if (state.isShowContactForm) {
          state.isShowContactForm = true;
          state.isLoadingContactForm = false;
          state.isFormSubmitted = false;
          state.modalView = ERROR;
        }
        state.modalView = ERROR;
      })
      .addCase(onSendFormMessage.fulfilled, (state, { payload }) => {
        if (!payload.isShowLeaving && state.isShowContactForm) {
          state.isShowContactForm = true;
          state.isLoadingContactForm = false;
          state.isFormSubmitted = true;
          state.modalView = SUCCESS;
        } else if (payload.salesChannel === 'Dedicated team') {
          state.modalView = FORM;
          state.isFormSubmitted = true;
          state.isLoadingContactForm = false;
          state.isFormSendFromPage = false;
        } else {
          state.modalView = SUCCESS;
          state.isLoadingContactForm = false;
        }
      });
  },
});

export const {
  setShowContactForm, setIsFormSubmitted,
  setModalView, setIsDragListen,
  setIsFormSendFromPage, setModeltype,
} = contactFormSlice.actions;

export default contactFormSlice.reducer;
