import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  activeMenu: '',
};

const activeMenuSlice = createSlice({
  name: 'activeMenu',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
});
export const { setActiveMenu } = activeMenuSlice.actions;
export const selectActiveMenu = (state: RootState) =>
  state.activeMenu.activeMenu;

export default activeMenuSlice.reducer;
