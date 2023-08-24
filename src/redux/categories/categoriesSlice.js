import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catagories: [],
};
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.catagories = 'Under construction';
    },

  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
