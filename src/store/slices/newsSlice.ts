import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from '../../api/fetchNews';
import { RootState } from '../store';

const initialState = {
  headlines: [],
  loading: false,
  error: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.headlines = action.payload;
        state.loading = false;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
        state.error = 'Error';
      });
  },
});

export const selectHeadlines = (state: RootState) => state.news.headlines;
export const selectLoading = (state: RootState) => state.news.loading;
export const selectError = (state: RootState) => state.news.error;

export default newsSlice.reducer;
