import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBracketology, IItem } from './interfaces/IBracketology';
import mockup1 from '../../../assets/images/bracketology/functionalitySection/img_mockup1.webp';
import mockup2 from '../../../assets/images/bracketology/functionalitySection/img_mockup2.webp';
import mockup3 from '../../../assets/images/bracketology/functionalitySection/img_mockup3.webp';
import mockup4 from '../../../assets/images/bracketology/functionalitySection/img_mockup4.webp';
import mockup5 from '../../../assets/images/bracketology/functionalitySection/img_mockup5.webp';

const initialState: IBracketology = {
  progressValue: '19%',
  progressPosition: '0',
  items: [
    {
      id: 0,
      imgSrc: mockup1,
    },
    {
      id: 1,
      imgSrc: mockup2,
    },
    {
      id: 2,
      imgSrc: mockup3,
    },
    {
      id: 3,
      imgSrc: mockup4,
    },
    {
      id: 4,
      imgSrc: mockup5,
    },
  ],
  prevItemIndex: 0,
};

const slice = createSlice({
  name: 'bracketology',
  initialState,
  reducers: {
    setProgressValue(state, action: PayloadAction<string>) {
      state.progressValue = action.payload;
    },
    setProgressPosition(state, action: PayloadAction<string>) {
      state.progressPosition = action.payload;
    },
    setItems(state, action: PayloadAction<{ index: number }>) {
      const { payload: { index } } = action;
      const tempItems = [...state.items];
      let newItems;
      let items;
      let deleteCount;

      if (index > state.prevItemIndex) {
        deleteCount = index - state.prevItemIndex;
        newItems = tempItems.splice(0, deleteCount);
        items = [...tempItems, ...newItems];
      }
      if (index < state.prevItemIndex) {
        deleteCount = state.prevItemIndex - index;
        newItems = tempItems.splice(-deleteCount, deleteCount);
        items = [...newItems, ...tempItems];
      }
      state.items = items as IItem[];
    },
    setPrevItemIndex(state, action: PayloadAction<number>) {
      state.prevItemIndex = action.payload;
    },
  },
});

export const {
  setProgressValue, setProgressPosition, setItems, setPrevItemIndex,
} = slice.actions;
export default slice.reducer;
