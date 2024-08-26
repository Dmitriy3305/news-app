import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNews } from '../../api/fetchNews';
import { RootState } from '../store';
import { INewsState } from '../../interfaces/INewsState';

const initialState: INewsState = {
  headlines: [],
  loading: false,
  error: '',
  currentPage: 1,
  totalPages: 1,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.headlines = action.payload;
        state.loading = false;
        state.totalPages = Math.ceil(action.payload.length / 5);
      })
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
        state.error = 'Error';
      });
  },
});

export const { setCurrentPage } = newsSlice.actions;

export const selectHeadlines = (state: RootState) => state.news.headlines;
export const selectLoading = (state: RootState) => state.news.loading;
export const selectError = (state: RootState) => state.news.error;
export const selectCurrentPage = (state: RootState) => state.news.currentPage;
export const selectTotalPages = (state: RootState) => state.news.totalPages;

export default newsSlice.reducer;
