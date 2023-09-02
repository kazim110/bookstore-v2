import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const result = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/7vVXBOqb4rrvjoJqGiyB/books');
    return result.data;
  } catch (error) {
    return error.message;
  }
});

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
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const bookArray = [];
        Object.keys(action.payload).forEach((prop) => {
          const book = {
            id: prop,
            title: action.payload[prop][0].title,
            author: action.payload[prop][0].author,
            category: action.payload[prop][0].category,
          };
          bookArray.push(book);
        });
        if (bookArray.length > 0) {
          state.books = bookArray;
        }
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
