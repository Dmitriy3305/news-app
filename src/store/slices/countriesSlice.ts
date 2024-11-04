import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});
export const { setCountries } = countriesSlice.actions;
export const selectCountries = (state: RootState) => state.countries.countries;

export default countriesSlice.reducer;
