import { fetchTopNews } from '../api/fetchTopNews';
import { countryMap } from '../const/countryMap';
import { languageMap } from '../const/languageMap';
import { setActiveMenu } from '../store/slices/activeMenuSlice';
import { setSelectedItem } from '../store/slices/selectedtemSlice';
import { setCurrentPageTopNews } from '../store/slices/topNewsSlice';
import { AppDispatch } from '../store/store';
import { MenuType } from '../types/menuType';
import { getShotNames } from './getShotNames';

export const handleClickOnNav = (
  dispatch: AppDispatch,
  activeMenu: MenuType,
  item: string
) => {
  dispatch(setCurrentPageTopNews(1));
  switch (activeMenu) {
    case 'COUNTRIES':
      dispatch(setActiveMenu('country'));
      dispatch(setSelectedItem(getShotNames(item, countryMap)));
      dispatch(
        fetchTopNews({
          dispatch: null,
          activeMenu: 'country',
          item: getShotNames(item, countryMap),
        })
      );
      break;
    case 'CATEGORIES':
      dispatch(setActiveMenu('category'));
      dispatch(setSelectedItem(item.toLowerCase()));
      dispatch(
        fetchTopNews({
          dispatch: null,
          activeMenu: 'category',
          item: item.toLowerCase(),
        })
      );
      break;
    case 'LANGUAGES':
      dispatch(setActiveMenu('language'));
      dispatch(setSelectedItem(getShotNames(item, languageMap)));
      dispatch(
        fetchTopNews({
          dispatch: null,
          activeMenu: 'language',
          item: getShotNames(item, languageMap),
        })
      );
      break;
  }
};
