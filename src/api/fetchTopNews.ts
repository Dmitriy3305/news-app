import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTopHeadlines } from './getTopHeadlines';
import { getNewsOfCountry } from './getNewsOfCountry';
import { AppDispatch } from '../store/store';
import { setCountries } from '../store/slices/countriesSlice';
import { getFullCountryNames } from '../utils/getFullCountryNames';
import { getNewsOfLanguage } from './getNewsOfLanguage';
import { setLanguages } from '../store/slices/languagesSlice';
import { getFullLanguageNames } from '../utils/getFullLanguageNames';
import { getNewsOfCategory } from './getNewsOfCategory';
import { setCategories } from '../store/slices/categoriesSlice';
import { getCategories } from '../utils/getCategories';

export const fetchTopNews = createAsyncThunk(
  'news/fetchNews',
  async ({
    dispatch,
    item,
    activeMenu,
  }: {
    dispatch: AppDispatch | null;
    item: string | null;
    activeMenu: string | null;
  }) => {
    if (item && activeMenu) {
      if (activeMenu == 'country') {
        const data = await getNewsOfCountry(item!);
        return data.sources;
      }
      if (activeMenu == 'language') {
        const data = await getNewsOfLanguage(item!);
        return data.sources;
      }
      if (activeMenu == 'category') {
        const data = await getNewsOfCategory(item!);
        return data.sources;
      }
    } else {
      const data = await getTopHeadlines();
      if (dispatch) {
        dispatch(setCountries(getFullCountryNames(data.sources)));
        dispatch(setLanguages(getFullLanguageNames(data.sources)));
        dispatch(setCategories(getCategories(data.sources)));
      }
      return data.sources;
    }
  }
);
