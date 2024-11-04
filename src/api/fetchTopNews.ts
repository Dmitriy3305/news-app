import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTopHeadlines } from './getTopHeadlines';
import { getNewsOfCountry } from './getNewsOfCountry';
import { getNewsOfLanguage } from './getNewsOfLanguage';
import { getNewsOfCategory } from './getNewsOfCategory';
import { AppDispatch } from '@/store/store';
import { setCountries } from '@/store/slices/countriesSlice';
import { getFullNames } from '@/utils/getFullNames';
import { countryMap } from '@/const/countryMap';
import { setLanguages } from '@/store/slices/languagesSlice';
import { languageMap } from '@/const/languageMap';
import { setCategories } from '@/store/slices/categoriesSlice';
import { getCategories } from '@/utils/getCategories';

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
        dispatch(
          setCountries(getFullNames(data.sources, countryMap, 'country'))
        );
        dispatch(
          setLanguages(getFullNames(data.sources, languageMap, 'language'))
        );
        dispatch(setCategories(getCategories(data.sources)));
      }
      return data.sources;
    }
  }
);
