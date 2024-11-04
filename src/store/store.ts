import { configureStore } from '@reduxjs/toolkit';
import topNewsReducer from './slices/topNewsSlice';
import activeMenuReducer from './slices/activeMenuSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import selectedtemReducer from './slices/selectedtemSlice';
import countriesReducer from './slices/countriesSlice';
import laguagesReducer from './slices/languagesSlice';
import categoriesReducer from './slices/categoriesSlice';
import inputValueReducer from './slices/inputValue';
import newsOfSearchReducer from './slices/newsOfSearchSlice';

const store = configureStore({
  reducer: {
    topNews: topNewsReducer,
    activeMenu: activeMenuReducer,
    selectedtem: selectedtemReducer,
    countries: countriesReducer,
    languages: laguagesReducer,
    categories: categoriesReducer,
    inputValue: inputValueReducer,
    newsOfSearch: newsOfSearchReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
