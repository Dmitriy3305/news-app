import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  selectedItem: '',
};

const selectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});
export const { setSelectedItem } = selectedItemSlice.actions;
export const selectSelectedItem = (state: RootState) =>
  state.selectedtem.selectedItem;

export default selectedItemSlice.reducer;
