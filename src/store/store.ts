import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';
import activeMenuReducer from './slices/activeMenuSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import selectedtemReducer from './slices/selectedtemSlice';
import countriesReducer from './slices/countriesSlice';
import laguagesReducer from './slices/languagesSlice';
import categoriesReducer from './slices/categoriesSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    activeMenu: activeMenuReducer,
    selectedtem: selectedtemReducer,
    countries: countriesReducer,
    languages: laguagesReducer,
    categories: categoriesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
