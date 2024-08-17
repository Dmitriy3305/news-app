import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTopHeadlines } from './getTopHeadlines';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const data = await getTopHeadlines();
  return data.sources;
});
