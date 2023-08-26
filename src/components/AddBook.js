import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = ({ title, author }) => {
  const dispatch = useDispatch();
  const addBookHandler = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };
  return (
    <button
      type="button"
      className="addBtn"
      onClick={addBookHandler}
    >
      Add Book
    </button>
  );
};

AddBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default AddBook;
