import { fetchNews } from '../api/fetchNews';
import { setActiveMenu } from '../store/slices/activeMenuSlice';
import { setCurrentPage } from '../store/slices/newsSlice';
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
  dispatch(setCurrentPage(1));
  switch (activeMenu) {
    case 'COUNTRIES':
      dispatch(setActiveMenu('country'));
      dispatch(setSelectedItem(getShotCountryNames(item)));
      dispatch(
        fetchNews({
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
        fetchNews({
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
        fetchNews({
          dispatch: null,
          activeMenu: 'language',
          item: getShotLanguageNames(item),
        })
      );
      break;
  }
};
