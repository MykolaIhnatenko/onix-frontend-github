import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITrainingSimulatorSlice {
  contentHeight: number,
  isNotFixed: boolean | undefined,
}

const initialState: ITrainingSimulatorSlice = {
  contentHeight: 0,
  isNotFixed: undefined,
};

const interactiveTrainingSimulatorSlice = createSlice({
  name: 'interactiveTrainingSimulator',
  initialState,
  reducers: {
    setContentHeight: (state, action: PayloadAction<{ height: number }>) => {
      state.contentHeight = action.payload.height;
    },
    setIsNotFixed: (state, payload: PayloadAction<{ isNotFixed: boolean }>) => {
      state.isNotFixed = payload.payload.isNotFixed;
    },
  },
});

export default interactiveTrainingSimulatorSlice.reducer;

export const {
  setContentHeight, setIsNotFixed,
} = interactiveTrainingSimulatorSlice.actions;
