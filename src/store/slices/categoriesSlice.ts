import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});
export const { setCategories } = categoriesSlice.actions;
export const selectCategories = (state: RootState) =>
  state.categories.categories;

export default categoriesSlice.reducer;
