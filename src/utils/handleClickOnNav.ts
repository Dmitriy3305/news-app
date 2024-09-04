import { fetchTopNews } from '../api/fetchTopNews';
import { setActiveMenu } from '../store/slices/activeMenuSlice';
import { setCurrentPageTopNews } from '../store/slices/topNewsSlice';
import { setSelectedItem } from '../store/slices/selectedtemSlice';
import { AppDispatch } from '../store/store';
import { MenuType } from '../types/menuType';
import { getShotCountryNames } from './getShotCountryNames';
import { getShotLanguageNames } from './getShotLanguageNames';

export const handleClickOnNav = (
  dispatch: AppDispatch,
  activeMenu: MenuType,
  item: string
) => {
  dispatch(setCurrentPageTopNews(1));
  switch (activeMenu) {
    case 'COUNTRIES':
      dispatch(setActiveMenu('country'));
      dispatch(setSelectedItem(getShotCountryNames(item)));
      dispatch(
        fetchTopNews({
          dispatch: null,
          activeMenu: 'country',
          item: getShotCountryNames(item),
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
      dispatch(setSelectedItem(getShotLanguageNames(item)));
      dispatch(
        fetchTopNews({
          dispatch: null,
          activeMenu: 'language',
          item: getShotLanguageNames(item),
        })
      );
      break;
  }
};
