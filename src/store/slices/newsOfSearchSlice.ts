import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { INewsOfSearchState } from '../../interfaces/INewsOfSearchState';
import { fetchNewsFromSearh } from '../../api/fetchNewsFromSearch';

const initialState: INewsOfSearchState = {
  articles: [],
  loading: false,
  error: '',
  currentPage: 1,
  totalPages: 1,
  isAscendingSort: true,
};

const newsOfSearchSlice = createSlice({
  name: 'newsOfSearch',
  initialState,
  reducers: {
    setCurrentPageNewsOfSearch(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    sortArticles(state) {
      state.isAscendingSort = !state.isAscendingSort;
      state.articles.sort((a, b) => {
        const dateA = new Date(a.publishedAt).getTime();
        const dateB = new Date(b.publishedAt).getTime();

        if (state.isAscendingSort) {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsFromSearh.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewsFromSearh.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
        state.totalPages = Math.ceil(action.payload.length / 5);
      })
      .addCase(fetchNewsFromSearh.rejected, (state) => {
        state.loading = false;
        state.error = 'Error';
      });
  },
});

export const { setCurrentPageNewsOfSearch, sortArticles } =
  newsOfSearchSlice.actions;

export const selectArticless = (state: RootState) =>
  state.newsOfSearch.articles;
export const selectLoading = (state: RootState) => state.newsOfSearch.loading;
export const selectError = (state: RootState) => state.newsOfSearch.error;
export const selectCurrentPageNewsOfSearch = (state: RootState) =>
  state.newsOfSearch.currentPage;
export const selectTotalPages = (state: RootState) =>
  state.newsOfSearch.totalPages;

export default newsOfSearchSlice.reducer;
