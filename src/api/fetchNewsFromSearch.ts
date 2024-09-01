import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../store/store';
import { getNewsFromSearch } from './getNewsFromSearch';

export const fetchNewsFromSearh = createAsyncThunk(
  'news/fetchNewsFromSearch',
  async ({
    dispatch,
    inputValue,
  }: {
    dispatch: AppDispatch | null;
    inputValue: string | null;
  }) => {
    if (dispatch && inputValue) {
      const data = await getNewsFromSearch(inputValue);
      return data.articles;
    }
  }
);
