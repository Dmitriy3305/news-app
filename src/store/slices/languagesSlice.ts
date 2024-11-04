import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  languages: [],
};

const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
  },
});
export const { setLanguages } = languagesSlice.actions;
export const selectLanguages = (state: RootState) => state.languages.languages;

export default languagesSlice.reducer;
