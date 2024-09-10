import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ITopNewsState } from '@/interfaces/ITopNewsState';
import { fetchTopNews } from '@/api/fetchTopNews';

const initialState: ITopNewsState = {
  headlines: [],
  loading: false,
  error: '',
  currentPage: 1,
  totalPages: 1,
};

const topNewsSlice = createSlice({
  name: 'topNews',
  initialState,
  reducers: {
    setCurrentPageTopNews(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTopNews.fulfilled, (state, action) => {
        state.headlines = action.payload;
        state.loading = false;
        state.totalPages = Math.ceil(action.payload.length / 5);
      })
      .addCase(fetchTopNews.rejected, (state) => {
        state.loading = false;
        state.error = 'Error';
      });
  },
});

export const { setCurrentPageTopNews } = topNewsSlice.actions;

export const selectHeadlines = (state: RootState) => state.topNews.headlines;
export const selectLoading = (state: RootState) => state.topNews.loading;
export const selectError = (state: RootState) => state.topNews.error;
export const selectCurrentPageTopNews = (state: RootState) =>
  state.topNews.currentPage;
export const selectTotalPages = (state: RootState) => state.topNews.totalPages;

export default topNewsSlice.reducer;
