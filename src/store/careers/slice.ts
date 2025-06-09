import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import onSendCareersFormMessage from './onSendCareersFormMessage';
import { CareersFormModalVariants, ICareers } from './interfaces/ICareers';

const { CAREERS_FORM, CAREERS_ERROR, CAREERS_SUCCESS } = CareersFormModalVariants;
export const initialState: ICareers = {
  isLoadingCareersForm: false,
  isShowCareersModal: false,
  careersModalView: CAREERS_FORM,
};

export const careersSlice = createSlice({
  name: 'careers',
  initialState,
  reducers: {
    setShowCareersModal: (state, action: PayloadAction<{ isShowCareersModal: boolean }>) => {
      state.isShowCareersModal = action.payload.isShowCareersModal;
    },
    setCareersModalView: (state, action: PayloadAction<{ modalView: CareersFormModalVariants }>) => {
      state.careersModalView = action.payload.modalView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onSendCareersFormMessage.pending, (state) => {
        state.isLoadingCareersForm = true;
      })
      .addCase(onSendCareersFormMessage.fulfilled, (state) => {
        state.isLoadingCareersForm = false;
        state.careersModalView = CAREERS_SUCCESS;
        state.isShowCareersModal = true;
      })
      .addCase(onSendCareersFormMessage.rejected, (state) => {
        state.isLoadingCareersForm = false;
        state.careersModalView = CAREERS_ERROR;
        state.isShowCareersModal = true;
      });
  },
});

export const {
  setShowCareersModal, setCareersModalView,
} = careersSlice.actions;

export default careersSlice.reducer;
