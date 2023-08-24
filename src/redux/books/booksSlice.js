import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((book) => book.id !== itemId);
    },

  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
