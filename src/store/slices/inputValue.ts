import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  inputValue: '',
};

const inputValueSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});
export const { setInputValue } = inputValueSlice.actions;
export const selectInputValue = (state: RootState) =>
  state.inputValue.inputValue;

export default inputValueSlice.reducer;
